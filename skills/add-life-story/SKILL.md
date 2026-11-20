---
name: add-life-story
description: >-
  Add or update a human-life Q&A story in historical-lives: research historical facts,
  geography coordinates, and Wikimedia Commons public-domain imagery, scaffold with
  npm run story:new, write 小念和爸爸 Q&A dialogue, verify spot circles with grid/sheet,
  generate font subset and edge-tts audio, and validate before build. Use when asked to
  add a historical person/life story (加故事、加人物、扩充故事), replace an image, or fix spots.
---

# 给「人类故事集」添加一个人物故事

仓库规则和代码地图在根目录 `AGENTS.md`，先读它；下面是一步步可执行的清单。

## 清单

```
- [ ] 1. 选人与查资料：史实、经纬度 [lat, lon]、Wikimedia Commons 开放许可图像
- [ ] 2. npm run story:new -- <id> 生成骨架并填写 src/stories/<id>.ts
- [ ] 3. npm run frames -- <id> 下载图片与缩略图，人工看一遍图是否适合儿童
- [ ] 4. npm run grid -- <id> 读坐标，调整 spot(x, y, r)
- [ ] 5. npm run snapshot -- <id> --spots && npm run sheet -- <id> 核对所有圈
- [ ] 6. npm run font && npm run voice -- <id> && npm run story:index 生成字体子集、配音与首页目录
- [ ] 7. 更新 THIRD_PARTY_NOTICES.md 与 README.md
- [ ] 8. npm run typecheck && npm run check && npm test && npm run build
```

## 1. 选人与查资料

- 可先运行 `npm run check -- --stats` 查看六个领域、五个时期、七个地理大区当前各有几个故事，优先补齐薄弱方向。
- 如一次新增多个故事，按 [research-brief.md](research-brief.md) 的模板交给只读子代理并行查资料；拿到结果后仍需亲自核实 Commons 文件名、许可与关键年份。
- 避免和 `one-frame-one-story` 讲同一件事的同一张图；这里聚焦**真实人物或群体的人生抉择、日常与时代背景**。

## 2. 建档与写台词

```bash
npm run story:new -- <id>
```

写 `src/stories/<id>.ts` 时注意：

1. **三维度信息**：填准 `field`（6 选 1）、`year`（公元前写负数，约数加 `circa: true`）、`region`（7 选 1）、`place`、`coords: [lat, lon]`；如有长途迁徙或远征，补上 `journey: [lat, lon]`。
2. **第一句看图发问**：小念先开口，从图上肉眼可见的服饰、器物、地图或环境提问，至少在图上指 2 处。
3. **中途换图（可选）**：主图看不清细节或需要展示当事人发明/作品时，在台词写 `show: 另一张 Frame`（必须有 `title`），之后写回主图再 `show` 一次即可；参考 `hypatia.ts`、`mary-anning.ts`、`wu-lienteh.ts`。
4. **字数与分段**：每句 `say.length <= 160`，用 `part` 分 3 段左右；必要时加 `face` 调节头像表情。
5. **诚实讲史实**：无确凿依据的轶事（如传说、绕口令由来）让爸爸明说“这是后人的传说/没有证据”。

## 3～5. 图与圈点核对

```bash
npm run frames -- <id>
npm run grid -- <id>
```

打开 `tools/.cache/grid/<id>.png`：
- 确认图像无裸露、血腥或不适合儿童的内容。
- 确认台词里提到的物体在图上真的存在，读出 `spot(x, y, r)`。
- 跑截图与拼图核对：

```bash
npm run snapshot -- <id> --spots
npm run sheet -- <id>
```

打开 `snapshots/<id>-sheet.png` 和至少一张 `snapshots/<id>-<最后一句>-1280.png`、`--width 390` 手机截图，确保没有遮挡、出界或排版错位。

## 6～8. 字体、配音与验收

台词定稿后再跑字体和配音：

```bash
npm run font
npm run voice -- <id>
npm run story:index
```

`story:index` 把简介、主图、署名和图片比例写进 `src/stories/catalog.json`、`credits.json`、`aspects.json`；改了 `teaser`、年份、坐标或换了图都要重跑，否则 `npm run check` / `npm test` 会报过期。

更新 `THIRD_PARTY_NOTICES.md` 和 `README.md`，最后跑通全套检查：

```bash
npm run typecheck && npm run check && npm test && npm run build
```
