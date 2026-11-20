---
name: expand-collection
description: >-
  Plan and execute balanced expansion of historical-lives across fields, historical eras,
  and geographic regions. Use when asked to expand the story collection (扩充故事库、
  补充某领域或某大洲的故事、批量增加历史人物).
---

# 均衡扩充「人类故事集」

当用户希望继续扩充人物故事时，先看覆盖缺口，再按 [../add-life-story/SKILL.md](../add-life-story/SKILL.md) 逐个或分批实现。

## 1. 先盘点分布

```bash
npm run check -- --stats
```

观察三行统计：
- **领域（6 类）**：`科学探索`、`医学守护`、`航海地理`、`文学艺术`、`工程建造`、`社会人文`
- **时期（5 段）**：`ancient`（≤500）、`medieval`（501–1500）、`early-modern`（1501–1800）、`modern-19c`（1801–1900）、`contemporary`（≥1901）
- **地理（7 区）**：`东亚`、`南亚与中亚`、`中东与北非`、`撒哈拉以南非洲`、`欧洲`、`美洲`、`跨洲与海洋`

优先挑选目前数量只有 1 个的分类组合，例如：
- `医学守护` × 非东亚地区（如伊本·西那、爱德华·琴纳、屠呦呦等）
- `文学艺术` × 东亚/非洲/欧洲（如李清照、莫扎特、民艺匠人等）
- `南亚与中亚` / `中东与北非` / `撒哈拉以南非洲` / `美洲` 的工程、社会或普通人故事（如花剌子密、伊本·白图泰、王贞仪等）

## 2. 批处理顺序

1. 一次并行向子代理派发 2～4 个人物的查资料任务（用 `add-life-story/research-brief.md`）。
2. 为每个故事跑 `npm run story:new -- <id>` 并填写数据。
3. 统一跑 `npm run frames` 和 `npm run grid -- <id>`，逐张查看网格图调整 `spot` 与图像描述。
4. 统一跑 `npm run snapshot -- <id> --spots` + `npm run sheet -- <id>` 检查圈点。
5. 台词全部定稿后一次跑 `npm run font`、`npm run voice` 和 `npm run story:index`。
6. 更新 `THIRD_PARTY_NOTICES.md`、`README.md`，最后运行 `npm run typecheck && npm run check && npm test && npm run build`。
