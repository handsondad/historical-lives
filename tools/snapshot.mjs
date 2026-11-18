import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { pointingSteps } from "../src/lib/view.ts";
import { storyById } from "../src/stories/index.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "snapshots");

const BROWSERS = [
  process.env.BROWSER_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

function parseArgs(argv) {
  const opts = { width: 1280, url: null, full: false, spots: false, targets: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--width") opts.width = Number(argv[++i]);
    else if (argv[i] === "--url") opts.url = argv[++i];
    else if (argv[i] === "--full") opts.full = true;
    else if (argv[i] === "--spots") opts.spots = true;
    else opts.targets.push(argv[i]);
  }
  return opts;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const [first, ...rest] = opts.targets;
  if (!first) {
    console.log("用法：npm run snapshot -- home | <故事id> [第几句... | --spots] [--width 390] [--full]");
    process.exit(1);
  }
  const executablePath = BROWSERS.find((p) => existsSync(p));
  if (!executablePath) throw new Error("找不到 Edge 或 Chrome，可以用环境变量 BROWSER_PATH 指定");

  const jobs = [];
  if (first === "home") {
    jobs.push({ hash: "#/", file: `home-${opts.width}.png` });
  } else {
    const story = storyById(first);
    if (!story) throw new Error(`找不到故事 ${first}`);
    const steps = rest.length
      ? rest.map(Number)
      : opts.spots
        ? pointingSteps(story.lines)
        : [...story.lines.flatMap((l, i) => (l.part ? [i + 1] : [])), story.lines.length];
    for (const n of steps) jobs.push({ hash: `#/story/${first}/${n}`, file: `${first}-${n}-${opts.width}.png` });
  }

  let server = null;
  let base = opts.url;
  if (!base) {
    const { createServer } = await import("vite");
    server = await createServer({ root, logLevel: "error", server: { port: 0 } });
    await server.listen();
    base = server.resolvedUrls.local[0];
  }

  mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--hide-scrollbars"] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: opts.width, height: opts.width < 700 ? 844 : 860, deviceScaleFactor: 1 });
    const problems = [];
    page.on("pageerror", (err) => problems.push(err.message));
    page.on("console", (msg) => { if (msg.type() === "error") problems.push(msg.text()); });
    for (const job of jobs) {
      await page.goto(`${base}?snap${job.hash}`, { waitUntil: "networkidle0" });
      await page.waitForSelector("[data-snap]", { timeout: 15000 }).catch(() => {
        throw new Error(`${job.hash} 没有画出来${problems.length ? "：\n" + problems.join("\n") : ""}`);
      });
      await page.evaluate(() => {
        for (const img of document.images) img.loading = "eager";
        const loaded = Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
        return Promise.race([loaded, new Promise((r) => setTimeout(r, 5000))]);
      });
      await new Promise((r) => setTimeout(r, 300));
      const path = join(outDir, job.file);
      await page.screenshot({ path, fullPage: opts.full });
      console.log(`snapshots/${job.file}`);
    }
    if (problems.length) {
      console.error("页面报错：\n" + problems.join("\n"));
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
    await server?.close();
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
