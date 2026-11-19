import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const redVega: Frame = {
  title: "洛克希德 Vega 5B“小红巴士”（史密森尼航空航天博物馆藏）",
  src: "frames/amelia-earhart-vega.jpg",
  alt: "鲜红色的单发高翼螺旋桨飞机洛克希德 Vega 5B，机头装有银色双叶螺旋桨，机翼下印有黑色编号 NR-7952，展示在博物馆展厅里",
  kind: "照片",
  by: "Eric Long 摄于史密森尼国家航空航天博物馆（2016 年）",
  license: "CC0",
  commons: "File:Lockheed Vega 5B, Amelia Earhart - Transatlantikflug.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Lockheed_Vega_5B,_Amelia_Earhart_-_Transatlantikflug.jpg",
  note: "这就是 1932 年载着阿梅莉亚·埃尔哈特独自飞越大西洋的鲜红洛克希德 Vega 5B 真机",
  dark: true,
};

const pilotFrame: Frame = {
  src: "frames/amelia-earhart.jpg",
  alt: "1936 年黑白照片：卷发飞行员阿梅莉亚·埃尔哈特穿着格子衬衫坐在银色飞机驾驶舱里，一手扶着敞开的舱门，面带微笑看向镜头",
  kind: "照片",
  by: "Harris & Ewing 摄（1936 年，美国国会图书馆藏）",
  license: "公有领域",
  commons: "File:Amelia Earhart LOC hec.40747.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Amelia_Earhart_LOC_hec.40747.jpg",
};

const pilotSpot = spot(0.54, 0.37, 0.15, "驾驶舱里的阿梅莉亚");
const cockpitSpot = spot(0.32, 0.55, 0.24, "敞开的飞机舱门");
const wingSpot = spot(0.74, 0.36, 0.18, "鲜红机翼与编号");
const noseSpot = spot(0.24, 0.48, 0.21, "螺旋桨与发动机");

export const ameliaEarhart: Story = {
  id: "amelia-earhart",
  title: "开着小红飞机独自飞越大西洋的女孩",
  person: "阿梅莉亚·埃尔哈特",
  lifeSpan: "1897—1937",
  year: 1932,
  when: "1932 年 5 月，跨越大西洋",
  field: "航海地理",
  region: "跨洲与海洋",
  place: "加拿大纽芬兰 → 北爱尔兰伦敦德里",
  coords: [47.69, -53.21],
  journey: [55.04, -7.27],
  teaser: "在雷暴、结冰和漏油的黑夜里独自驾驶单引擎小红飞机飞了十五小时，她成为人类史上第一位独自飞越大西洋的女性。",
  frame: pilotFrame,
  lines: [
    nian("爸爸，这位卷头发的阿姨坐在飞机里，手扶着大舱门笑得好开心，她是飞行员吗？", { part: "爱看天空的女孩", face: "curious" }),
    dad("对！她叫阿梅莉亚·埃尔哈特，是航空史上最有名的女飞行员之一。这张照片是 1936 年拍的。", { look: pilotSpot }),
    nian("那时候的小飞机舱门像汽车门一样往外开，跟现在的大客机完全不一样！", { look: cockpitSpot }),
    dad("完全不一样！那时候的飞机又小又吵，没有雷达也没有自动驾驶，飞越茫茫大海全靠指南针、手表和飞行员自己的胆量。"),
    nian("她是怎么爱上开飞机的呀？", { look: "all" }),
    dad("二十三岁那年，她在航展上花十美元体验了十分钟飞行。飞机刚离开地面两三百英尺，她就下定决心：我一定要学会开飞机！"),

    nian("那她是怎么出名的呀？", { part: "十五小时的惊险夜航", show: redVega, look: wingSpot }),
    dad("看这架亮红色的小飞机！它是阿梅莉亚最心爱的洛克希德 Vega 5B，她亲切地叫它“小红巴士”。1932 年 5 月 20 日傍晚，她独自开着它从加拿大纽芬兰起飞，冲向大西洋！"),
    nian("一个人在大西洋上空飞了一整晚？不会出危险吗？", { face: "surprised" }),
    dad("危险极了！半夜遇上狂风暴雨，高度表坏了，油箱还漏了油，连机头发动机的排气管都裂开了，火苗顺着机头侧面直往外冒！", { look: noseSpot, face: "thinking" }),
    nian("天哪，那后来怎么了？！", { face: "surprised" }),
    dad("高空太冷，机翼还结了一层厚冰，飞机一下子失控下坠了快一千米，差点撞进海浪里！幸好贴近海面温度稍暖，冰化了一点，她拼命拉平了机身。"),

    nian("她最后安全降落了吗？", { part: "降落在奶牛牧场里", show: pilotFrame, look: "all", face: "curious" }),
    dad("飞了将近十五个小时、三千两百多公里后，她终于看见绿油油的陆地！原计划飞去巴黎，但飞机实在撑不住了，她稳稳落在一片农夫的牧场草地上。"),
    nian("农夫看见天上掉下一架小红飞机，一定吓一跳吧！", { face: "happy" }),
    dad("农夫跑过来问她从哪儿来，她笑着说：“我从美国飞过来的！”那是北爱尔兰，她成了全世界第一位独自不间断飞越大西洋的女性。"),
    nian("后来她还去挑战更远的地方了吗？"),
    dad("1937 年，她和领航员驾驶双引擎飞机尝试环球飞行，在飞越广阔的太平洋时失联了，至今人们仍在寻找他们最后的下落。", { face: "sad" }),
    nian("她真是太勇敢了！"),
    dad("她曾说过，女孩和男孩一样，都应该去尝试困难又了不起的事。她的“小红巴士”今天仍好好保存在华盛顿的博物馆里，鼓励着无数仰望蓝天的孩子。", { face: "proud" }),
  ],
  remember: "当黑夜的风暴和结冰袭来时，握紧操纵杆飞过三千公里大洋的勇气，为全世界打开了更宽广的天空。",
  facts: [
    ["姓名与时代", "阿梅莉亚·埃尔哈特（1897—1937），美国航空先驱"],
    ["里程碑飞行", "1932 年 5 月 20—21 日，单人驾驶洛克希德 Vega 5B 飞越大西洋（约 15 小时、2,026 英里）"],
    ["真机收藏", "美国华盛顿史密森尼国家航空航天博物馆（编号 NR-7952）"],
  ],
  sources: [
    { title: "Wikimedia Commons：Amelia Earhart in airplane (Library of Congress)", url: "https://commons.wikimedia.org/wiki/File:Amelia_Earhart_LOC_hec.40747.jpg" },
    { title: "Wikimedia Commons：Amelia Earhart's Lockheed Vega 5B (Smithsonian)", url: "https://commons.wikimedia.org/wiki/File:Lockheed_Vega_5B,_Amelia_Earhart_-_Transatlantikflug.jpg" },
    { title: "Smithsonian National Air and Space Museum：Amelia Earhart's Lockheed Vega 5B", url: "https://airandspace.si.edu/collection-objects/amelia-earharts-lockheed-vega-5b/nasm_A19670093000" },
  ],
};
