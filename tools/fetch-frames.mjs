// 从 Wikimedia Commons 下载故事用的图，转成 JPEG 放到 public/ 下，再做一张晾衣绳用的缩略图。
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { STORIES } from "../src/stories/index.ts";
import { framesOf, thumbOf } from "../src/lib/view.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WIDTH = 1400;
const THUMB = 420;
const HEADERS = { "User-Agent": "historical-lives/0.1 (family educational project; https://commons.wikimedia.org) node-fetch" };

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function ffmpeg(input, output, width, quality, crop) {
  mkdirSync(dirname(output), { recursive: true });
  const scale = `scale='min(${width},iw)':-2`;
  const vf = crop ? `crop=iw*${crop.w}:ih*${crop.h}:iw*${crop.x}:ih*${crop.y},${scale}` : scale;
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", input, "-vf", vf, "-q:v", String(quality), output]);
}

async function imageinfo(commons, params) {
  const url = `https://commons.wikimedia.org/w/api.php?format=json&action=query&prop=imageinfo&${params}`
    + `&titles=${encodeURIComponent(commons)}`;
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, { headers: HEADERS });
    const text = await res.text();
    if (res.ok && text.startsWith("{")) return Object.values(JSON.parse(text).query.pages)[0].imageinfo?.[0];
    if (attempt >= 5) throw new Error(`Commons API 一直不回：${text.slice(0, 80)}`);
    console.log(`  API ${res.status}，${5 * (attempt + 1)} 秒后重试`);
    await sleep(5000 * (attempt + 1));
  }
}

async function download(commons, crop) {
  const size = await imageinfo(commons, "iiprop=size");
  if (!size) throw new Error(`Commons 上找不到 ${commons}`);
  const target = Math.round(WIDTH / (crop?.w ?? 1));
  const want = commons.toLowerCase().endsWith(".svg") ? target : Math.min(target, size.width - 1);
  const info = await imageinfo(commons, `iiprop=url&iiurlwidth=${want}`);
  const url = info.thumburl ?? info.url;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: HEADERS });
    if (res.ok && res.headers.get("content-type")?.startsWith("image/")) return Buffer.from(await res.arrayBuffer());
    console.log(`  ${res.status}，${3 * (attempt + 1)} 秒后重试`);
    await sleep(3000 * (attempt + 1));
  }
  throw new Error(`下载失败：${url}`);
}

for (const story of STORIES) {
  if (only.length && !only.includes(story.id)) continue;
  for (const { commons, src, crop } of framesOf(story)) {
    const out = join(root, "public", src);
    if (commons && (force || !existsSync(out))) {
      const tmp = join(tmpdir(), `hl-frame-${story.id}-${Date.now()}`);
      writeFileSync(tmp, await download(commons, crop));
      ffmpeg(tmp, out, WIDTH, 3, crop);
      rmSync(tmp, { force: true });
      console.log(`public/${src}  <-  ${commons}`);
      await sleep(1200);
    }
  }
  const { src } = story.frame;
  const out = join(root, "public", src);
  const thumb = thumbOf(src);
  if (thumb !== src && existsSync(out) && (force || !existsSync(join(root, "public", thumb)))) {
    ffmpeg(out, join(root, "public", thumb), THUMB, 4);
    console.log(`public/${thumb}`);
  }
}
