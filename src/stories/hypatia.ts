import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const astrolabe: Frame = {
  title: "古典星盘（18 世纪波斯黄铜星盘）",
  src: "frames/hypatia-astrolabe.jpg",
  alt: "一只雕刻精细的黄铜圆盘状星盘，上面有可转动的星图网片和刻度环",
  kind: "文物",
  by: "Andrew Dunn 摄于惠普尔科学史博物馆",
  license: "CC BY-SA 2.0",
  commons: "File:Astrolabe-Persian-18C.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Astrolabe-Persian-18C.jpg",
  note: "希帕蒂娅当年的星盘没有留下来，这是一件同样靠转动星盘来算时间与星位的古董星盘",
};

const scholar = spot(0.36, 0.34, 0.22, "希帕蒂娅");
const scrolls = spot(0.45, 0.44, 0.24, "沉思的学者");
const plate = spot(0.5, 0.54, 0.28, "星图圆盘");

const hypatiaFrame: Frame = {
  src: "frames/hypatia.jpg",
  alt: "约 1908 年朱尔·莫里斯·加斯帕尔绘制的希帕蒂娅肖像：一位沉静专注的古典女学者侧面像",
  kind: "画像",
  by: "Jules Maurice Gaspard（约 1908 年绘）",
  license: "公有领域",
  commons: "File:Hypatia portrait.png",
  page: "https://commons.wikimedia.org/wiki/File:Hypatia_portrait.png",
  note: "希帕蒂娅没有留下同时代的真实肖像，这是后世画家根据历史记载想象她的样子",
};

export const hypatia: Story = {
  id: "hypatia",
  title: "亚历山大城的女数学老师",
  person: "希帕蒂娅",
  lifeSpan: "约 355—415",
  year: 400,
  circa: true,
  when: "约公元 400 年，埃及亚历山大城",
  field: "科学探索",
  region: "中东与北非",
  place: "埃及 · 亚历山大城",
  coords: [31.2, 29.92],
  teaser: "一千六百年前地中海畔最有学问的城邦里，她在课堂上讲几何、星盘，也教学生敢于发问。",
  frame: hypatiaFrame,
  lines: [
    nian("爸爸，画里这位戴着发带、安安静静思考的姐姐是谁呀？", { part: "海边的大学城", face: "curious" }),
    dad("她是希帕蒂娅，大约公元 355 年出生在埃及海边的亚历山大城。不过她没有留下当年画的像，这是后世画家想象她的样子。", { look: scholar }),
    nian("亚历山大城在埃及，那她住在大金字塔旁边吗？"),
    dad("亚历山大城在地中海边上，当时是世界上最有学问的城市之一，城里曾有藏着海量羊皮纸书卷的图书馆和学园。", { look: scrolls }),
    nian("那时候女生也可以当老师吗？", { look: "all" }),
    dad("非常少见！她的爸爸塞翁是位数学家，从小把她当成学者培养。希帕蒂娅长大后比爸爸还出名，连远方城市的学生都坐船来听她讲课。"),

    nian("她都在课上讲什么呀？", { part: "天上的圆与手里的星盘" }),
    dad("她最擅长数学和天文学。她给前人的几何书和代数书做注释，把难懂的算术题讲得清清楚楚。"),
    nian("她还造过东西吗？"),
    dad("学生留下的信里写着，她会教学生制造“星盘”和测量液体轻重的比重计。我们换一张真实的古董星盘看看！", { show: astrolabe, look: plate }),
    nian("哇，一个铜圆盘上刻着好多密密麻麻的格子和弯弯的指针！", { face: "surprised" }),
    dad("对，星盘就像古人装在口袋里的天文计算器。把圆盘上的星图转一转，就能算出太阳几时升起、现在是夜里几点，甚至判断你在地球北边多远。"),

    nian("后来她的故事怎么样了？", { part: "留下来的火种", show: hypatiaFrame, look: "all" }),
    dad("公元 415 年，亚历山大城里发生了激烈的政治与宗教冲突。希帕蒂娅不幸在街头被暴徒杀害，那年她大约六十岁。", { face: "sad" }),
    nian("好可惜……她写过的书还找得到吗？", { face: "sad" }),
    dad("她自己写的书大多在战火和岁月里散失了，只留下零星片段；但她的学生西内修斯把写给她的信保存了下来。"),
    nian("那大家是怎么记住她的？"),
    dad("靠学生们传下来的书信，还有后世阿拉伯和欧洲学者继续传抄她注释过的算术书。就像接力棒一样，学问没有断。"),
  ],
  remember: "哪怕纸卷在风沙和岁月里散落了，认真思考和教书育人的名字依然会被一代代记住。",
  facts: [
    ["姓名与时代", "希帕蒂娅（约 355—415），罗马帝国时期埃及亚历山大城"],
    ["主要领域", "数学（圆锥曲线、代数学）、天文学与哲学"],
    ["已知记载", "学生西内修斯的书信及同时代史家苏格拉底·斯科拉斯蒂库斯的记载"],
  ],
  sources: [
    { title: "Wikimedia Commons：Hypatia portrait", url: "https://commons.wikimedia.org/wiki/File:Hypatia_portrait.png" },
    { title: "Britannica：Hypatia", url: "https://www.britannica.com/biography/Hypatia" },
    { title: "MacTutor History of Mathematics：Hypatia of Alexandria", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Hypatia/" },
  ],
};
