// 检查故事内容、坐标、图片、字数与分类覆盖分布。
//   npm run check              检查全部故事并输出领域/时期/地理分布
//   npm run check -- <故事id>  只检查这一个故事
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { framesOf, thumbOf } from "../src/lib/view.ts";
import { ERAS, eraOf } from "../src/lib/year.ts";
import { FIELD_LOOK, REGION_LOOK } from "../src/pages/line.ts";
import { STORIES, storyById } from "../src/stories/index.ts";
import { CHARS_FILE, needsStoryFont } from "./font.mjs";

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

const spotsOf = (look) => (!look || look === "all" ? [] : Array.isArray(look) ? look : [look]);
const errors = [];
const fontChars = existsSync(CHARS_FILE) ? new Set(readFileSync(CHARS_FILE, "utf8")) : null;

for (const s of list) {
  const err = (msg) => errors.push(`[${s.id}] ${msg}`);
  if (!/^[a-z0-9-]+$/.test(s.id)) err("id 只能用小写字母、数字和短横线");
  if (!s.title.trim() || !s.person.trim() || !s.place.trim() || !s.teaser.trim()) err("title / person / place / teaser 不能为空");
  if (!(s.field in FIELD_LOOK)) err(`未知领域：${s.field}`);
  if (!(s.region in REGION_LOOK)) err(`未知地理大区：${s.region}`);
  const [lat, lon] = s.coords;
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) err(`经纬度越界：${s.coords}`);

  for (const [i, f] of framesOf(s).entries()) {
    if (!existsSync(join(root, "public", f.src))) err(`缺少图片 public/${f.src}（跑 npm run frames -- ${s.id}）`);
    if (!f.by || !f.license || !f.alt) err(`${f.src} 缺少 by / license / alt`);
    if (i > 0 && !f.title) err(`${f.src} 作为中途换图必须写 title`);
    if (!/^https:\/\//.test(f.page)) err(`${f.src} 出处 page 必须是 https:// 链接`);
    if (f.commons && !/^File:/.test(f.commons)) err(`${f.src} commons 必须以 File: 开头`);
  }
  const thumb = thumbOf(s.frame.src);
  if (!existsSync(join(root, "public", thumb))) err(`缺少缩略图 public/${thumb}（跑 npm run frames -- ${s.id}）`);

  if (!s.lines.length) err("lines 不能为空");
  else {
    if (s.lines[0].who !== "nian") err("第一句必须由小念（nian）开口");
    if (!s.lines[0].part) err("第一句要写 part 分段标题");
    if (s.lines.length < 16) err(`共 ${s.lines.length} 句，至少需要 16 句`);
  }

  let pointed = 0;
  for (const [i, l] of s.lines.entries()) {
    if (!l.say.trim()) err(`第 ${i + 1} 句台词为空`);
    if (l.say.length > 160) err(`第 ${i + 1} 句有 ${l.say.length} 字，请拆成两句（<=160）`);
    for (const sp of spotsOf(l.look)) {
      pointed += 1;
      if (sp.x < 0 || sp.x > 1 || sp.y < 0 || sp.y > 1) err(`第 ${i + 1} 句 spot x/y 超出 0~1`);
      if (sp.r <= 0 || sp.r > 0.5) err(`第 ${i + 1} 句 spot r 应在 (0, 0.5]`);
    }
  }
  if (pointed < 2) err("至少需要在图上圈出 2 处（look: spot(...)）");
  if (!s.remember.trim() || s.facts.length < 3) err("结尾需填写 remember 和至少 3 条 facts");
  if (!s.sources.length || s.sources.some((src) => !/^https:\/\//.test(src.url))) err("sources 至少 1 条且均为 https:// 链接");

  if (fontChars) {
    const missing = [...new Set([...JSON.stringify(s)].filter((ch) => needsStoryFont(ch) && !fontChars.has(ch)))];
    if (missing.length) err(`字体子集缺字（请跑 npm run font）：${missing.join("")}`);
  }
}

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
