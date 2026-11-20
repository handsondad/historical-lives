// 检查故事内容、坐标、图片、字数、全站字体子集与三维度覆盖分布。
//   npm run check              检查全部故事并输出领域/时期/地理分布
//   npm run check -- <故事id>  只检查这一个故事
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ERAS, eraOf } from "../src/lib/year.ts";
import { FIELD_LOOK, REGION_LOOK } from "../src/pages/line.ts";
import { STORIES, storyById } from "../src/stories/index.ts";
import { CHARS_FILE, collect, needsStoryFont } from "./font.mjs";
import { validateStory } from "./story-rules.mjs";
import { staleIndex } from "./story-index.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const statsOnly = args.includes("--stats");
const targets = args.filter((a) => !a.startsWith("-"));

const list = targets.length
  ? targets.map((id) => {
      const s = storyById(id);
      if (!s) {
        console.error(`找不到故事：${id}`);
        process.exit(1);
      }
      return s;
    })
  : STORIES;

const errors = [];
const fontChars = existsSync(CHARS_FILE) ? new Set(readFileSync(CHARS_FILE, "utf8")) : null;

for (const s of list) {
  for (const msg of validateStory(s, root)) errors.push(`[${s.id}] ${msg}`);
  if (fontChars && targets.length) {
    const missing = [...new Set([...JSON.stringify(s)].filter((ch) => needsStoryFont(ch) && !fontChars.has(ch)))];
    if (missing.length) errors.push(`[${s.id}] 字体子集缺字（请跑 npm run font）：${missing.join("")}`);
  }
}

if (!targets.length && fontChars) {
  const missing = [...new Set([...collect()].filter((ch) => needsStoryFont(ch) && !fontChars.has(ch)))];
  if (missing.length) errors.push(`[全站字体] 字体子集缺字（请跑 npm run font）：${missing.join("")}`);
}

const stale = staleIndex();
if (stale.length) errors.push(`[目录] src/stories/ 下 ${stale.join("、")} 过期了（请跑 npm run story:index）`);

if (!targets.length || statsOnly) {
  const count = (keys, fn) => keys.map((k) => `${k}:${STORIES.filter((s) => fn(s) === k).length}`).join("  ");
  console.log(`共 ${STORIES.length} 个人类故事`);
  console.log(`领域 | ${count(Object.keys(FIELD_LOOK), (s) => s.field)}`);
  console.log(`时期 | ${count(ERAS.map((e) => e.id), (s) => eraOf(s.year))}`);
  console.log(`地理 | ${count(Object.keys(REGION_LOOK), (s) => s.region)}`);
}

if (errors.length) {
  console.error("\n发现问题：");
  for (const e of errors) console.error("  ✖ " + e);
  process.exit(1);
}
console.log(`\n✔ 检查通过（${list.length} 个故事）`);
