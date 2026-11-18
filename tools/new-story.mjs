// 新建一个人物故事骨架并自动注册到 src/stories/index.ts。
// 用法：npm run story:new -- my-story-id
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const id = process.argv[2];

if (!id || !/^[a-z][a-z0-9-]*$/.test(id)) {
  console.error("用法：npm run story:new -- <id>（小写字母开头，只用小写字母、数字和短横线）");
  process.exit(1);
}

const file = join(root, "src/stories", `${id}.ts`);
if (existsSync(file)) {
  console.error(`已存在：src/stories/${id}.ts`);
  process.exit(1);
}

const varName = id.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

writeFileSync(file, `import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const mainSpot = spot(0.5, 0.38, 0.22, "主人公");
const detailSpot = spot(0.5, 0.7, 0.18, "关键细节");

export const ${varName}: Story = {
  id: "${id}",
  title: "待填写的故事标题",
  person: "主人公姓名",
  lifeSpan: "生卒年份",
  year: 1900,
  when: "年份，地点",
  field: "科学探索",
  region: "欧洲",
  place: "国家 · 城市",
  coords: [0, 0],
  teaser: "一句话介绍这位历史人物的故事。",
  frame: {
    src: "frames/${id}.jpg",
    alt: "请写清楚图片里能看见的内容",
    kind: "照片",
    by: "作者或馆藏",
    license: "公有领域",
    commons: "File:Example.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Example.jpg",
  },
  lines: [
    nian("爸爸，这张图上的……", { part: "初见", face: "curious" }),
    dad("这是……", { look: mainSpot }),
    nian("他手里拿着的是什么？", { look: detailSpot }),
    dad("那是为了……"),
    nian("后来发生什么事了？", { part: "故事经过", look: "all" }),
    dad("……"),
    nian("哇，真是太不容易了！", { face: "surprised" }),
    dad("……"),
    nian("人们是怎么记住他的？", { part: "留下的回响" }),
    dad("……", { face: "proud" }),
  ],
  remember: "一句话记住这位人物留给世界的东西。",
  facts: [
    ["姓名与时代", "……"],
    ["主要贡献", "……"],
    ["图源档案", "……"],
  ],
  sources: [
    { title: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Example.jpg" },
  ],
};
`);

const indexPath = join(root, "src/stories/index.ts");
let index = readFileSync(indexPath, "utf8");
if (!index.includes(`./${id}.ts`)) {
  index = index.replace(
    /import type \{ Story \} from "\.\/types\.ts";(\r?\n)/,
    (_m, eol) => `import type { Story } from "./types.ts";${eol}import { ${varName} } from "./${id}.ts";${eol}`,
  );
  index = index.replace(
    /export const STORIES: readonly Story\[\] = \[([\s\S]*?)\]\.sort/,
    (_m, body) => {
      const cleaned = body.trimEnd();
      const comma = cleaned.endsWith(",") ? "" : ",";
      return `export const STORIES: readonly Story[] = [${cleaned}${comma}\n  ${varName},\n].sort`;
    },
  );
  writeFileSync(indexPath, index);
}

console.log(`已创建 src/stories/${id}.ts 并注册到 src/stories/index.ts`);
console.log(`下一步：填写史实与台词 -> npm run frames -- ${id} -> npm run grid -- ${id} -> npm run check -- ${id}`);
