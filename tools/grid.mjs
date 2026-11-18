import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { framesOf } from "../src/lib/view.ts";
import { storyById } from "../src/stories/index.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "tools", ".cache", "grid");
const [target] = process.argv.slice(2);
if (!target) {
  console.log("用法：npm run grid -- <故事id> | <图片路径>");
  process.exit(1);
}

const story = storyById(target);
const files = story ? framesOf(story).map((f) => join(root, "public", f.src)) : [resolve(target)];

mkdirSync(outDir, { recursive: true });
for (const file of files) {
  if (!existsSync(file)) throw new Error(`找不到 ${file}${story ? "，先跑 npm run frames -- " + story.id : ""}`);
  if (extname(file) === ".svg") {
    console.log(`跳过 ${basename(file)}`);
    continue;
  }
  const size = execFileSync("ffprobe", ["-v", "error", "-show_entries", "stream=width,height", "-of", "csv=p=0", file])
    .toString().trim();
  const out = join(outDir, `${basename(file, extname(file))}.png`);
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", file,
    "-vf", "scale=1000:-1,drawgrid=w=iw/10:h=ih/10:t=1:c=red@0.8", "-frames:v", "1", out]);
  console.log(`${out}  （原图 ${size.replace(",", "×")}）`);
}
