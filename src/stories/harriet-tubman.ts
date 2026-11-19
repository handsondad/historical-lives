import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const faceSpot = spot(0.45, 0.24, 0.13, "坚定眼神");
const handsSpot = spot(0.35, 0.46, 0.15, "双手与裙摆");

export const harrietTubman: Story = {
  id: "harriet-tubman",
  title: "看着北斗星走过黑夜的领路人",
  person: "哈丽特·塔布曼",
  lifeSpan: "约 1822—1913",
  year: 1868,
  circa: true,
  when: "1849—1860 年代，美国马里兰与北方各州",
  field: "社会人文",
  region: "美洲",
  place: "美国马里兰州 → 纽约州",
  coords: [38.57, -76.08],
  journey: [42.93, -76.57],
  teaser: "自己逃出奴隶制以后，她没有停下来，而是十多次冒着生命危险回到南方，带着亲友沿着星星走向自由。",
  frame: {
    src: "frames/harriet-tubman.jpg",
    alt: "约 1868—1869 年本杰明·波尔森拍摄的哈丽特·塔布曼全身黑白照片：她穿着深色长裙、戴着头巾，双手稳稳搭在椅背上，目光平静坚定",
    kind: "照片",
    by: "Benjamin F. Powelson 摄（约 1868 年，美国国会图书馆藏）",
    license: "公有领域",
    commons: "File:Harriet Tubman c1868-69.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Harriet_Tubman_c1868-69.jpg",
  },
  lines: [
    nian("爸爸，这位老奶奶看着镜头好严肃，一点也没笑，可是好像很有力量。", { part: "照片里的双手和眼神", face: "curious" }),
    dad("她叫哈丽特·塔布曼，大约 1822 年出生在美国马里兰州的种植园里。一出生，她就是没有自由的奴隶。", { look: faceSpot }),
    nian("什么是奴隶呀？"),
    dad("就是像东西一样被买卖，从小干重活却拿不到工钱，不能自己决定去哪里，家人还可能随时被卖到远方。"),
    nian("她手上是不是干过很多粗活？", { look: handsSpot }),
    dad("是啊，她五六岁就开始干活。十三岁时为了保护一个挨打的同伴，她头被一块重铁砣砸伤，从此经常突然犯困昏睡，这病痛跟了她一辈子。", { face: "sad" }),

    nian("后来她怎么逃出去的？", { part: "顺着大勺子星往北走", look: "all" }),
    dad("1849 年秋天，她听说自己要被卖去更远的南方，决定黑夜里独自往北逃。白天躲进树林和好心人家的阁楼，夜里就靠抬头找北斗七星认北边！", { face: "thinking" }),
    nian("大勺子一样的北斗星！那她成功了吗？"),
    dad("她一路走了一百多公里，终于跨进不再蓄奴的宾夕法尼亚州。她说她看着自己的手，简直不敢相信自己是自由人了。", { face: "happy" }),

    nian("既然已经安全了，为什么还要冒险回去呀？", { part: "不会脱轨的“地下铁路”" }),
    dad("她想念留在南方的父母、兄弟姐妹和朋友。她说，只有自己一个人自由，心里像空了一块。"),
    nian("“地下铁路”真的是在地底下开火车吗？", { face: "curious" }),
    dad("不是真正的铁路！那是秘密帮助逃亡者的路线暗号：“车站”是愿意藏人的农舍，“列车员”就是带路的向导。"),
    nian("她带了多少趟呀？"),
    dad("十来年里，她大约十三次重返南方（早年传记常说十九次），亲手把约七十位亲友带到自由的地方，还帮几十个人指过路。"),
    nian("抓捕她的人不会到处贴告示吗？"),
    dad("当然会，悬赏很高！可她特别机警，会假扮老奶奶拎两只鸡，走水路、挑巡逻少的大冬天出发，她说过：“我这列火车从没出过轨，也从没丢过一名乘客。”", { face: "proud" }),
    nian("南北战争以后，她还做了什么？"),
    dad("战争中她做护士、侦察兵，晚年还在纽约自己家里收留照顾年老贫困的人，直到九十多岁去世。"),
  ],
  remember: "当黑夜没有路牌时，一颗为了同伴再次转身的勇敢之心，就能照亮一整条通往自由的路。",
  facts: [
    ["姓名与时代", "哈丽特·塔布曼（约 1822—1913），美国废奴主义者"],
    ["主要行动", "“地下铁路”向导（约 13 次南返，救出约 70 人）、南北战争护士与侦察员"],
    ["照片收藏", "美国国会图书馆与非裔美国人历史文化国家博物馆"],
  ],
  sources: [
    { title: "Wikimedia Commons：Harriet Tubman c1868-69", url: "https://commons.wikimedia.org/wiki/File:Harriet_Tubman_c1868-69.jpg" },
    { title: "Library of Congress：Harriet Tubman", url: "https://guides.loc.gov/harriet-tubman" },
    { title: "Britannica：Harriet Tubman", url: "https://www.britannica.com/biography/Harriet-Tubman" },
  ],
};
