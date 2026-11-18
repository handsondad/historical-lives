import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pointingSteps } from "../src/lib/view.ts";
import { storyById } from "../src/stories/index.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [id, ...rest] = process.argv.slice(2);
const story = id && storyById(id);
if (!story) {
  console.log(id ? `找不到故事 ${id}` : "用法：npm run sheet -- <故事id> [第几句...]");
  process.exit(1);
}

const steps = rest.length ? rest.map(Number) : pointingSteps(story.lines);
const shots = steps.map((n) => join(root, "snapshots", `${id}-${n}-1280.png`));
const missing = steps.filter((_, i) => !existsSync(shots[i]));
if (missing.length) {
  console.log(`缺第 ${missing.join("、")} 句的截图，先跑：npm run snapshot -- ${id} ${rest.length ? rest.join(" ") : "--spots"}`);
  process.exit(1);
}

const tmp = join(root, "tools", ".cache", "sheet", id);
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });
shots.forEach((file, i) => copyFileSync(file, join(tmp, `${String(i).padStart(2, "0")}.png`)));

const out = join(root, "snapshots", `${id}-sheet.png`);
const rows = Math.ceil(steps.length / 4);
execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", join(tmp, "%02d.png"),
  "-vf", `crop=620:620:12:62,scale=400:-1,tile=4x${rows}`, "-frames:v", "1", out]);
rmSync(tmp, { recursive: true, force: true });
console.log(out);
console.log(`从左上往右依次是第 ${steps.join("、")} 句`);
