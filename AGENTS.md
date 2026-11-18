# AGENTS.md：给接手这个仓库的代码助手

## 这是什么

「人类故事集」（`historical-lives`）：收集各个领域、不同时期、不同地理的真实人类故事，用小念（男孩）和爸爸一问一答的方式讲给孩子听。和 `one-frame-one-story`（一图一故事）、`storyverse`（小念家的漫画书）是一家人：

- **三维度晾衣绳**（来自 `one-frame-one-story`）：按 **领域 / 时期 / 地理** 切换，点开一类挂上绳子。
- **看图圈点 + 世界坐标**：左边展示真实历史画像/文物与聚焦圈点（`FrameStage`），下方附地球坐标小地图（`WorldPin`，支持起点到终点的跨洲旅途弧线）。
- **表情 SVG 头像 + 统一配音**（来自 `storyverse`）：小念（`zh-CN-YunxiaNeural` `+0%`）和爸爸（`zh-CN-YunxiNeural` `-5%`）按每句台词表情切换头像，播放语音时同步张嘴。

技术栈：React 18 + TypeScript（strict）+ Vite 5，Hash 路由，纯前端无后端，相对路径部署到 GitHub Pages。

**扩充故事之前，先读 `skills/add-life-story/SKILL.md`（以及批量扩充策略 `skills/expand-collection/SKILL.md`）。**

## 命令

需要 Node.js 22+。测试与工具脚本直接用 Node 运行 `.ts` 文件。

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run typecheck` | TypeScript 类型检查（`tsc --noEmit`） |
| `npm run check [-- <故事id> \| --stats]` | 检查故事规则、图片、字体缺字与三维度分布 |
| `npm test` | 全部测试（数据结构、视图缩放、字体、配音完整性） |
| `npm run story:new -- <id>` | 生成 `src/stories/<id>.ts` 骨架并注册到 `index.ts` |
| `npm run frames [-- <故事id>]` | 从 Wikimedia Commons 下载图片并生成缩略图（需 ffmpeg） |
| `npm run grid -- <故事id \| 图片路径>` | 给图画十等分红网格（`tools/.cache/grid/`），读 `spot` 坐标 |
| `npm run snapshot -- <home \| 故事id> [--spots] [--width 390]` | 无头浏览器截图到 `snapshots/` 自查 |
| `npm run sheet -- <故事id>` | 把指了圈的截图拼成总览图核对 |
| `npm run font` | 从站酷快乐体里截取网站用到的汉字（需 `python -m pip install fonttools`） |
| `npm run voice [-- <故事id>]` | 用 `edge-tts` 给新增/修改的台词配音（需联网、`edge-tts` 和 `ffmpeg`） |
| `npm run build` | 生产构建，输出到 `dist/` |

交付前四个都要过：`npm run typecheck`、`npm run check`、`npm test`、`npm run build`，新故事还需截图自查。

## 代码地图

| 路由 | 页面 | 文件 |
|---|---|---|
| `#/` | 晾衣绳首页（领域 / 时期 / 地理） | `src/pages/LinePage.tsx`，分组与排版在 `src/pages/line.ts` |
| `#/story/<id>/<n>` | 看图问答，讲到第 n 句（从 1 数） | `src/pages/StoryPage.tsx` |

- `src/stories/types.ts`：`Story`、`Line`、`Spot`、`Frame`、`Field`、`EraId`、`Region`、`Expression`
- `src/stories/lines.ts`：`nian()`、`dad()`、`spot()` 三个写台词小工具
- `src/stories/<id>.ts` & `src/stories/index.ts`：故事数据与按年份排序清单
- `src/components/Avatar.tsx`：小念和爸爸 SVG 头像与表情推断（`inferExpression`）
- `src/components/FrameStage.tsx`：图片、圈点蒙版与自动缩放镜头（算法在 `src/lib/view.ts`）
- `src/components/WorldPin.tsx`：手绘风等距世界坐标小地图（支持 `coords` 与可选 `journey` 弧线）
- `src/lib/year.ts`：`yearText`、`ERAS`（五个时期分界）、`eraOf`
- `src/lib/voice.ts`、`src/lib/speech.ts`、`src/lib/voice-manifest.ts`：按台词指纹映射 MP3 配音与浏览器朗读回退
- `tools/`：`new-story.mjs`、`check.mjs`、`fetch-frames.mjs`、`grid.mjs`、`snapshot.mjs`、`sheet.mjs`、`font.mjs`、`voice.mjs`
- `tests/`：`line.test.mjs`、`stories.test.mjs`、`view.test.mjs`、`voice.test.mjs`
- `skills/`：`add-life-story/`、`expand-collection/`（给代码助手的扩充流程与查资料模板）

## 加一个人物故事

1. 先跑 `npm run check -- --stats` 看哪个领域/时期/地理较少，选题优先补齐均衡度。
2. `npm run story:new -- <id>`（id 用小写字母和短横线）。
3. 查实史料、年代、`coords` 经纬度，并在 Wikimedia Commons 找公有领域或 CC 许可的真实图像（见 `skills/add-life-story/research-brief.md`）。
4. 写完 `src/stories/<id>.ts`，跑 `npm run frames -- <id>` 下载图片和缩略图。
5. 跑 `npm run grid -- <id>` 打开网格图读 `spot(x, y, r)`；改好后跑 `npm run snapshot -- <id> --spots` 和 `npm run sheet -- <id>` 眼看核对圈有没有圈准。
6. 跑 `npm run font` 更新站酷快乐体子集，跑 `npm run voice -- <id>` 合成音频。
7. 登记图片来源到 `THIRD_PARTY_NOTICES.md`，更新 `README.md` 简介清单。
8. 跑 `npm run typecheck && npm run check && npm test && npm run build`，再用 `--width 390` 截手机宽度自查。

## 写台词与选图的规矩

- 第一句必须由小念开口，从图上看得见的东西问起；故事至少在图上指两处，且不能指图上不存在的东西。
- 小念的问题像好奇的孩子，爸爸的回答用孩子听得懂的比方；**每句 ≤ 160 字**，长了拆成两句；用 `part` 分段，段名短。
- 可在台词里写 `face: "curious" | "surprised" | "happy" | "thinking" | "sad" | "proud" | "neutral"` 细调小念/爸爸 SVG 头像表情。
- 小念是男孩，用「他」；不写家里人真名。
- **孩子内容安全**：不选裸露、血腥或吓人的画作/照片（一定先看一眼下载下来的图）；涉及战争、压迫或去世时，语气平和、尊重事实。
- 史料数字、日期与引语都要有 https 出处写进 `sources`；流传广但无确凿证据的说法要明确说明“这是传说”或“说法不一”。

## 已知的坑

- **Windows PowerShell**：修改包含中文弯引号“”的 `.ts` 文件时，使用文件编辑工具而不要用命令行字符串替换；写文件务必用 UTF-8（无 BOM）。
- **`.ts` 扩展名**：Node 直接运行 `.ts` 测试与工具脚本，相互导入时必须保留 `.ts` 扩展名。
- **宽图与多圈**：`spot` 的 `r` 按图片宽度计算，横幅宽图靠上下边缘的圈 `r` 要小一点；一句话指多个圈时不要手写 `zoom`。
- **Commons 限流**：`fetch-frames.mjs` 通过 API 取缩略图地址并带退避重试，勿直接并发抓原图。
- **`scrollTo` 返回值**：`useEffect` 里调用 `scrollTo(0, 0)` 要包在大括号里，避免 React 误当清理函数。
- **截图浏览器**：`puppeteer-core` 使用本机 Edge/Chrome，找不到时设置环境变量 `BROWSER_PATH`。

