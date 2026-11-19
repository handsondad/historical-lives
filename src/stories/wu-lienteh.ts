import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const maskGuide: Frame = {
  title: "伍氏口罩佩戴示意图（1911 年）",
  src: "frames/wu-lienteh-mask.jpg",
  alt: "1911 年伍连德与王吉民合著书里的黑白插图：四张照片演示怎样把厚纱布棉口罩分别绑在脑后和脖子上，紧紧遮住口鼻",
  kind: "照片",
  by: "伍连德、王吉民（《中国医史》插图）",
  license: "公有领域",
  commons: "File:How the gauze-cotton mask should be worn.jpg",
  page: "https://commons.wikimedia.org/wiki/File:How_the_gauze-cotton_mask_should_be_worn.jpg",
};

const doctor = spot(0.51, 0.25, 0.21, "年轻的伍连德");
const maskTie = spot(0.28, 0.48, 0.20, "正面多层口罩");
const neckTie = spot(0.70, 0.46, 0.22, "侧面系带法");

export const wuLienteh: Story = {
  id: "wu-lienteh",
  title: "用一只棉纱口罩拦住大瘟疫的人",
  person: "伍连德",
  lifeSpan: "1879—1960",
  year: 1910,
  when: "1910 年冬天，中国哈尔滨",
  field: "医学守护",
  region: "东亚",
  place: "中国黑龙江 · 哈尔滨",
  coords: [45.75, 126.63],
  teaser: "冰天雪地的哈尔滨暴发肺鼠疫，31 岁的他用几层纱布和脱脂棉做出“伍氏口罩”，在四个月里扑灭了疫情。",
  frame: {
    src: "frames/wu-lienteh.jpg",
    alt: "1910 年代初伍连德的黑白肖像照片：他穿着西装打着领带，目光沉稳温和",
    kind: "照片",
    by: "Bain News Service（约 1910—1915 年，美国国会图书馆藏）",
    license: "公有领域",
    commons: "File:Wu Lien-teh - c. 1910–1915.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Wu_Lien-teh_-_c._1910%E2%80%931915.jpg",
  },
  lines: [
    nian("爸爸，这位戴领带的伯伯看起来好年轻，他是医生吗？", { part: "冬天里的危急电报", face: "curious" }),
    dad("他叫伍连德，1879 年生在马来西亚槟城，是剑桥大学第一位华人医学博士。拍这张照片前后，他只有三十一岁。", { look: doctor }),
    nian("三十一岁就碰上什么大事了吗？"),
    dad("1910 年冬天，中国东北的哈尔滨突然暴发可怕的鼠疫。病人高烧咳血，几天之内就去世，整座城都在恐慌。"),
    nian("这么危险，他为什么还要坐火车去哈尔滨？"),
    dad("朝廷紧急任命他做全权总医官。大雪封路，他带着一名助手和几箱显微镜器材，顶着零下二三十度的严寒直奔疫区。"),

    nian("那时候大家知道是怎么传染的吗？", { part: "显微镜下的真相", look: "all" }),
    dad("很多外国医生以为鼠疫只靠老鼠身上的跳蚤传。可伍连德冒着极大风险做尸体解剖，在显微镜下发现了关键线索：这次是肺鼠疫！", { face: "thinking" }),
    nian("肺鼠疫是什么意思？"),
    dad("就是病菌顺着病人咳嗽、说话喷出的飞沫，直接通过空气传给身边的人！如果不挡住口鼻，哪怕一只老鼠也没有，照样会传染。"),

    nian("所以他就发明了口罩吗？", { part: "几层纱布救了千万人", show: maskGuide, look: maskTie }),
    dad("你看这张 1911 年的老照片，这就是他设计的“伍氏口罩”！他找来药店里最常见的高脚纱布，中间夹进一大块吸水的脱脂药棉。"),
    nian("跟我们平时戴的口罩好像不太一样，后面系了好多根带子！", { look: neckTie }),
    dad("对，上下一共四根带子，分别绑在头顶和脖子后面，把鼻梁和下巴捂得严严实实，又便宜、材料又容易找，家家都能做。"),
    nian("大家一开始就听他的话戴口罩吗？", { look: "all" }),
    dad("一开始还有位资历很深的法国医生不相信，觉得中国人太小题大做，他不肯戴口罩去病房看病，结果几天后就染病去世了。这件事让所有人立刻醒悟过来。", { face: "sad" }),
    nian("然后呢？疫情真的止住了吗？", { face: "curious" }),
    dad("伍连德还建起了隔离医院、停运火车、用火化切断传播。不到四个月，这场夺走六万多人生命的东北大鼠疫被彻底扑灭了！"),
    nian("真像超级英雄一样！", { face: "happy" }),
    dad("后来在沈阳召开万国鼠疫研究会，各国专家推举这位三十多岁的中国医生当主席。他留下的戴口罩和科学防疫办法，直到一百多年后的今天还在保护我们。", { face: "proud" }),
  ],
  remember: "当众人还在盲目恐慌时，冷静观察显微镜与几层棉纱布，就能挡住看不见的瘟疫。",
  facts: [
    ["姓名与时代", "伍连德（1879—1960），现代中国公共卫生先驱"],
    ["关键事迹", "1910—1911 年指挥扑灭东北肺鼠疫，发明“伍氏口罩”"],
    ["国际影响", "1911 年主持沈阳“万国鼠疫研究会”，1935 年曾获诺贝尔生理学或医学奖提名"],
  ],
  sources: [
    { title: "Wikimedia Commons：Wu Lien-teh c.1910-1915", url: "https://commons.wikimedia.org/wiki/File:Wu_Lien-teh_-_c._1910%E2%80%931915.jpg" },
    { title: "Wikimedia Commons：How the gauze-cotton mask should be worn", url: "https://commons.wikimedia.org/wiki/File:How_the_gauze-cotton_mask_should_be_worn.jpg" },
    { title: "WHO Bulletin / NLM：Wu Lien-teh and the Manchurian plague", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3020066/" },
  ],
};
