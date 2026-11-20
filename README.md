# 人类故事集（Historical Lives）

小念和爸爸一问一答，走近各个领域、不同时期与不同地理的真实人生。参考 [one-frame-one-story](https://github.com/handsondad/one-frame-one-story) 的看图问答与晾衣绳交互，并融入 [storyverse](https://github.com/handsondad/storyverse) 的小念和爸爸 SVG 表情头像与统一配音。

首页是一根晾衣绳，可以切换 **🧭 按领域**、**🕰️ 按时期**、**🌍 按地理** 三种视角，点开分类牌就把这一类的人物挂上绳子；进入故事后，左边是历史图片（带放大圈点）和世界坐标小地图，右边是小念和爸爸的问答气泡。目前已收录 16 个人类故事：东汉张衡、亚历山大城希帕蒂娅、唐代玄奘、中亚医学家伊本·西那、美索不达米亚巧匠贾扎里、马里帝国曼萨·穆萨、墨西哥索尔·胡安娜、英国约翰·哈里森、古生物先驱玛丽·安宁、德国作曲家贝多芬、美国哈丽特·塔布曼、东北抗疫医生伍连德、印度数学家拉马努金、南极船长沙克尔顿、大西洋女飞行员阿梅莉亚·埃尔哈特、肯尼亚“种树妈妈”旺加里·马塔伊。

## 运行

需要 Node.js 22+。

```bash
npm install
npm run dev
```

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run typecheck` | 类型检查 |
| `npm run check [-- <故事id> \| --stats]` | 检查故事规则、图片、字体与领域/时期/地理分布 |
| `npm test` | 检查故事数据、分组布局、字体与配音完整性 |
| `npm run story:new -- <id>` | 生成新人物故事骨架并自动注册 |
| `npm run story:index` | 重新生成首页目录、图片署名与图片比例（`src/stories/*.json`） |
| `npm run build` | 生产构建，输出到 `dist/`（相对路径，可部署到任意子路径） |
| `npm run frames` | 从 Wikimedia Commons 下载图片并生成缩略图（需 ffmpeg） |
| `npm run font` | 从站酷快乐体里截取网站用到的汉字，输出 woff2（需 `python -m pip install fonttools brotli`） |
| `npm run voice [-- <故事id>]` | 用 edge-tts 为台词配音（小念 `zh-CN-YunxiaNeural`，爸爸 `zh-CN-YunxiNeural`） |
| `npm run snapshot -- <home \| 故事id> [--spots] [--width 390]` | 无头浏览器截图到 `snapshots/` 自查 |
| `npm run grid -- <故事id>` | 给图片叠加十等分网格以核对 `spot` 坐标 |
| `npm run sheet -- <故事id>` | 拼合标圈截图总览 |

## 扩充新故事（Agent 友好）

见 [AGENTS.md](AGENTS.md) 与 [skills/add-life-story/SKILL.md](skills/add-life-story/SKILL.md)、[skills/expand-collection/SKILL.md](skills/expand-collection/SKILL.md)。

## 发布

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动检查、构建并部署到 GitHub Pages（在仓库 Settings → Pages 里将 Source 设为 **GitHub Actions**）。

## 素材与许可

图片来源和许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)，首页底部“图片与史料说明”也会完整列出。
