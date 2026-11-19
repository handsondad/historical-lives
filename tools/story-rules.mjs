// 单个故事内容的统一校验规则，供 tools/check.mjs 与 tests/stories.test.mjs 共用。
import { existsSync } from "node:fs";
import { join } from "node:path";
import { framesOf, thumbOf } from "../src/lib/view.ts";
import { FIELD_LOOK, REGION_LOOK } from "../src/pages/line.ts";

const spotsOf = (look) => (!look || look === "all" ? [] : Array.isArray(look) ? look : [look]);

function validCoords(pair) {
  return Array.isArray(pair) && pair.length === 2
    && Number.isFinite(pair[0]) && Number.isFinite(pair[1])
    && pair[0] >= -90 && pair[0] <= 90 && pair[1] >= -180 && pair[1] <= 180;
}

/** 校验单个故事，返回问题字符串数组（空数组代表全部通过） */
export function validateStory(s, root) {
  const errors = [];
  const err = (msg) => errors.push(msg);

  if (!/^[a-z0-9-]+$/.test(s.id)) err("id 只能用小写字母、数字和短横线");
  if (!s.title.trim() || !s.person.trim() || !s.place.trim() || !s.teaser.trim() || !s.when.trim()) {
    err("title / person / place / teaser / when 不能为空");
  }
  if (!(s.field in FIELD_LOOK)) err(`未知领域：${s.field}`);
  if (!(s.region in REGION_LOOK)) err(`未知地理大区：${s.region}`);
  if (!validCoords(s.coords)) err(`coords 经纬度越界：${s.coords}`);
  if (s.journey !== undefined && !validCoords(s.journey)) err(`journey 经纬度越界：${s.journey}`);

  for (const [i, f] of framesOf(s).entries()) {
    if (root && !existsSync(join(root, "public", f.src))) err(`缺少图片 public/${f.src}（跑 npm run frames -- ${s.id}）`);
    if (!f.by || !f.license || !f.alt) err(`${f.src} 缺少 by / license / alt`);
    if (i > 0 && !f.title) err(`${f.src} 作为中途换图必须写 title`);
    if (!/^https:\/\//.test(f.page)) err(`${f.src} 出处 page 必须是 https:// 链接`);
    if (f.commons && !/^File:/.test(f.commons)) err(`${f.src} commons 必须以 File: 开头`);
    if (f.kind === "示意图" && !f.note?.trim()) err(`${f.src} 是示意图，必须在 note 里说明绘制依据`);
  }
  const thumb = thumbOf(s.frame.src);
  if (root && !existsSync(join(root, "public", thumb))) err(`缺少缩略图 public/${thumb}（跑 npm run frames -- ${s.id}）`);

  if (!s.lines.length) {
    err("lines 不能为空");
  } else {
    if (s.lines[0].who !== "nian") err("第一句必须由小念（nian）开口");
    if (!s.lines[0].part) err("第一句要写 part 分段标题");
    if (s.lines.length < 16) err(`共 ${s.lines.length} 句，至少需要 16 句`);
    if (!s.lines.some((l) => l.who === "nian") || !s.lines.some((l) => l.who === "dad")) {
      err("问答必须同时包含小念（nian）和爸爸（dad）");
    }
  }

  let pointed = 0;
  for (const [i, l] of s.lines.entries()) {
    if (!l.say.trim()) err(`第 ${i + 1} 句台词为空`);
    if (l.say.length > 160) err(`第 ${i + 1} 句有 ${l.say.length} 字，请拆成两句（<=160）`);
    for (const sp of spotsOf(l.look)) {
      pointed += 1;
      if (sp.x < 0 || sp.x > 1 || sp.y < 0 || sp.y > 1) err(`第 ${i + 1} 句 spot x/y 超出 0~1`);
      if (sp.r <= 0 || sp.r > 0.5) err(`第 ${i + 1} 句 spot r 应在 (0, 0.5]`);
      if (sp.zoom !== undefined && (sp.zoom < 1 || sp.zoom > 6)) err(`第 ${i + 1} 句 spot zoom 应在 1~6 之间`);
    }
  }
  if (pointed < 2) err("至少需要在图上圈出 2 处（look: spot(...)）");

  if (!s.remember.trim() || s.facts.length < 3) err("结尾需填写 remember 和至少 3 条 facts");
  if (!s.sources.length || s.sources.some((src) => !/^https:\/\//.test(src.url))) {
    err("sources 至少 1 条且均为 https:// 链接");
  }

  return errors;
}
