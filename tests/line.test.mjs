import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { eraOf, yearText } from "../src/lib/year.ts";
import { groupsOf, layout, slotsOf, WIDE } from "../src/pages/line.ts";
import { STORIES } from "../src/stories/index.ts";
import { CHARS_FILE, needsStoryFont } from "../tools/font.mjs";

test("按领域、按时期、按地理分组：每个故事正好在一组里，组内从早到晚", () => {
  for (const mode of ["field", "era", "region"]) {
    const groups = groupsOf(STORIES, mode);
    const ids = groups.flatMap((g) => g.stories.map((s) => s.id));
    assert.equal(ids.length, STORIES.length, mode);
    assert.equal(new Set(ids).size, STORIES.length, mode);
    for (const g of groups) {
      assert.deepEqual(g.stories.map((s) => s.year), [...g.stories.map((s) => s.year)].sort((a, b) => a - b));
    }
  }
});

test("年份和时期划分", () => {
  assert.equal(yearText({ year: 1910 }), "1910");
  assert.equal(yearText({ year: -196 }), "公元前 196");
  assert.equal(yearText({ year: 400, circa: true }), "约 400");
  assert.equal(eraOf(132), "ancient");
  assert.equal(eraOf(645), "medieval");
  assert.equal(eraOf(1759), "early-modern");
  assert.equal(eraOf(1868), "modern-19c");
  assert.equal(eraOf(1915), "contemporary");
});

test("一开始只挂分类牌；打开一类只挂这一类的故事", () => {
  const groups = groupsOf(STORIES, "region");
  assert.ok(slotsOf(groups, null).every((s) => s.kind === "tag"));
  const open = groups[0];
  const slots = slotsOf(groups, open.key);
  assert.equal(slots.filter((s) => s.kind === "banner").length, 1);
  assert.deepEqual(slots.filter((s) => s.kind === "print").map((s) => s.story.id), open.stories.map((s) => s.id));
  assert.equal(slots.filter((s) => s.kind === "tag").length, groups.length - 1);
});

test("挂件从左到右不重叠，框比绳子宽时把绳子拉满", () => {
  const slots = slotsOf(groupsOf(STORIES, "field"), null);
  const natural = layout(slots, WIDE).width;
  assert.equal(layout(slots, WIDE, natural - 100).width, natural);
  const { items, width } = layout(slots, WIDE, natural + 300);
  assert.equal(width, natural + 300);
  for (let i = 1; i < items.length; i++) {
    assert.ok(items[i].x - items[i].w / 2 >= items[i - 1].x + items[i - 1].w / 2 + WIDE.gap - 1e-9);
  }
});

test("页面和故事里的每个汉字都在截好的字体里（加了新字要跑 npm run font）", () => {
  const font = new Set(readFileSync(CHARS_FILE, "utf8"));
  const text = STORIES.map((s) => JSON.stringify(s)).join("");
  const missing = [...new Set([...text].filter((ch) => needsStoryFont(ch) && !font.has(ch)))];
  assert.deepEqual(missing, []);
});
