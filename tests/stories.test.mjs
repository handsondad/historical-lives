import assert from "node:assert/strict";
import { dirname, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { STORIES } from "../src/stories/index.ts";
import { validateStory } from "../tools/story-rules.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

test("故事 id 唯一，只用小写字母、数字和短横线", () => {
  const ids = STORIES.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/);
});

test("故事从早到晚排", () => {
  const years = STORIES.map((s) => s.year);
  assert.deepEqual(years, [...years].sort((a, b) => a - b));
});

for (const story of STORIES) {
  test(`${story.id}：符合内容、坐标、图片与问答规则`, () => {
    assert.deepEqual(validateStory(story, root), []);
  });
}

test("校验器能拦截越界 journey 与缺少 note 的示意图", () => {
  const base = structuredClone(STORIES[0]);
  base.journey = [95, 0];
  base.frame = { ...base.frame, kind: "示意图", note: "" };
  const errs = validateStory(base);
  assert.ok(errs.some((e) => e.includes("journey")));
  assert.ok(errs.some((e) => e.includes("示意图")));
});
