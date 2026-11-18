import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const king = spot(0.55, 0.50, 0.22, "曼萨·穆萨");
const goldOrb = spot(0.38, 0.31, 0.08, "黄金球");
const towns = spot(0.81, 0.45, 0.16, "撒哈拉商路城邦");

export const mansaMusa: Story = {
  id: "mansa-musa",
  title: "把黄金和大学带到撒哈拉南边的人",
  person: "曼萨·穆萨",
  lifeSpan: "约 1280—约 1337",
  year: 1324,
  when: "1324 年朝觐之行（1375 年绘入欧洲地图）",
  field: "社会人文",
  region: "撒哈拉以南非洲",
  place: "西非马里帝国 · 廷巴克图",
  coords: [16.77, -3.01],
  journey: [21.42, 39.83],
  teaser: "在欧洲人画的世界地图角落里，坐着一位头戴金冠的西非国王，他的城邦连结着黄金商路和沙漠图书馆。",
  frame: {
    src: "frames/mansa-musa.jpg",
    alt: "1375 年《加泰罗尼亚地图集》第 6 页局部：羊皮纸地图上画着头戴金冠、手托金球的马里国王曼萨·穆萨，周围标注着撒哈拉商路城邦和河流",
    kind: "地图",
    by: "亚伯拉罕·克雷斯克斯（1375 年绘，法国国家图书馆藏）",
    license: "公有领域",
    commons: "File:Catalan Atlas BNF Sheet 6 Mansa Musa.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg",
  },
  lines: [
    nian("爸爸，这张老地图好花呀！中间坐着一个戴黄金皇冠的叔叔，手里还举着一颗大金球！", { part: "地图上的金冠国王", face: "surprised" }),
    dad("这是 1375 年欧洲画师绘的《加泰罗尼亚地图集》。画上的国王叫曼萨·穆萨，是西非马里帝国的统治者。", { look: king }),
    nian("他手里为什么托着一块金子？", { look: goldOrb }),
    dad("因为马里帝国正好管着西非最富饶的黄金矿区。旁边的文字写着：“这位黑人君主，是这一片土地上最富有、最高贵的国王。”"),
    nian("地图周围画着一座座圆顶的小房子，那是什么呀？", { look: towns }),
    dad("那是撒哈拉沙漠里的商路城邦！那时候沙漠南边出产黄金，沙漠北边出产岩盐。人们用骆驼商队把盐巴换黄金，把这些城市连成一片。"),

    nian("欧洲的画师怎么会认识这么远的非洲国王？", { part: "震惊世界的远行", look: "all" }),
    dad("因为在 1324 年，曼萨·穆萨带着浩浩荡荡的队伍，从西非一路穿越撒哈拉，往东去麦加朝觐，中途经过了埃及开罗。"),
    nian("听说他带了好多好多人？"),
    dad("史书记载随行的官员、士兵、商人和向导有上万人。他在开罗大方地送礼、买东西，用掉的黄金多得让当地金价十几年才缓过来！"),
    nian("大家都惊呆了吧！"),
    dad("消息一下子传遍了地中海两岸。从此以后，欧洲地图上再也没法忽略撒哈拉南边的这片非洲王国了。"),

    nian("他除了黄金多，还做了什么事？", { part: "沙漠边缘的大学城", look: spot(0.32, 0.72, 0.14, "廷巴克图一带") }),
    dad("他一路请回了许多建筑师、学者和诗人。回到马里以后，他在沙漠边上的廷巴克图和高奥修起了清真寺和学堂。"),
    nian("沙漠旁边也能读书吗？", { face: "curious" }),
    dad("不仅能读，廷巴克图后来成了西非最有名的学问中心！商人们除了买卖盐巴和金子，还在这里高价买卖抄写精美的书卷。"),
    nian("原来书和黄金一样值钱！"),
    dad("是的。直到今天，廷巴克图的古老家庭图书馆里，还珍藏着几十万页天文、法律和历史手稿，提醒大家那里曾经多么爱读书。", { face: "proud" }),
  ],
  remember: "一条骆驼商路不仅运送盐和黄金，更让沙漠南边的廷巴克图长出了爱读书的大学城。",
  facts: [
    ["姓名与时代", "曼萨·穆萨（约 1280—约 1337），西非马里帝国第九任曼萨"],
    ["重要事件", "1324—1325 年穿过撒哈拉赴麦加朝觐"],
    ["图源档案", "1375 年《加泰罗尼亚地图集》第 6 页，现藏法国国家图书馆"],
  ],
  sources: [
    { title: "Wikimedia Commons：Catalan Atlas Mansa Musa", url: "https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg" },
    { title: "Britannica：Musa I of Mali", url: "https://www.britannica.com/biography/Musa-I-of-Mali" },
    { title: "Library of Congress：Ancient Manuscripts from Timbuktu", url: "https://www.loc.gov/exhibits/mali/mali-overview.html" },
  ],
};
