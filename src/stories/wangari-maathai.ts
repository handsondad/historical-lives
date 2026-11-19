import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const karuraForest: Frame = {
  title: "肯尼亚内罗毕的卡鲁拉森林小径",
  src: "frames/wangari-maathai-forest.jpg",
  alt: "肯尼亚卡鲁拉森林里的林荫小道：左侧高陡的红土坡上密密麻麻爬满粗壮树根，宛如天然根墙，右侧是绿树和木栏杆",
  kind: "照片",
  by: "Mekami 摄于肯尼亚卡鲁拉森林（2019 年）",
  license: "CC BY-SA 4.0",
  commons: "File:Karura forest path.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Karura_forest_path.jpg",
  note: "20 世纪 90 年代末，旺加里·马塔伊曾带领市民坚持守住内罗毕珍贵的卡鲁拉森林",
};

const portraitFrame: Frame = {
  src: "frames/wangari-maathai.jpg",
  alt: "2006 年旺加里·马塔伊接受采访时的照片：她头戴红蓝金色树叶花纹的非洲大头巾，身穿同款树叶印花衣裙，神情认真而坚定",
  kind: "照片",
  by: "Antônio Cruz / Agência Brasil 摄（2006 年）",
  license: "CC BY 3.0 BR",
  commons: "File:Wangari Maathai no Brasil.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Wangari_Maathai_no_Brasil.jpg",
};

const headwrapSpot = spot(0.63, 0.24, 0.24, "树叶花纹彩色头巾");
const faceSpot = spot(0.47, 0.52, 0.22, "认真讲述的马塔伊");
const rootsSpot = spot(0.32, 0.46, 0.26, "抓紧红土的树根墙");

export const wangariMaathai: Story = {
  id: "wangari-maathai",
  title: "带着大家在非洲种下数千万棵树的妈妈",
  person: "旺加里·马塔伊",
  lifeSpan: "1940—2011",
  year: 2004,
  when: "1977 年发起绿带运动，2004 年获诺贝尔和平奖",
  field: "社会人文",
  region: "撒哈拉以南非洲",
  place: "肯尼亚 · 涅里与内罗毕",
  coords: [-0.42, 36.95],
  journey: [-1.29, 36.82],
  teaser: "看着家乡的绿林被砍光、溪水干涸，她从亲手种下七棵小树苗开始，带着非洲的妈妈们种出了一条数千万棵树的绿带。",
  frame: portraitFrame,
  lines: [
    nian("爸爸，这位奶奶头上绑着好大一朵彩色花纹头巾，衣服上好像还印着树叶图案呢，她是谁呀？", { part: "家乡消失的小溪", face: "curious" }),
    dad("她是肯尼亚的生物学家、环保英雄旺加里·马塔伊。很多人亲切地叫她“种树妈妈”！", { look: headwrapSpot }),
    nian("难怪她的头巾和衣服上全都是树叶！为什么叫她“种树妈妈”呢？", { look: faceSpot }),
    dad("她 1940 年出生在肯尼亚山脚下的绿油油村庄里。小时候村边到处是高大的无花果树，清亮的小溪里满是蝌蚪。"),
    nian("后来村庄变样了吗？", { look: "all" }),
    dad("她长大后去美国和德国读了生物学，成了东非和中非第一位女博士。可回到家乡时，她难过地发现：大片森林被砍掉了，泥土被雨水冲走，小溪也干了。", { face: "sad" }),

    nian("没有树了，村里的人怎么办呀？", { part: "从七棵小树苗开始" }),
    dad("村里的妈妈们每天得走好几公里去找做饭的柴火和干净的水，庄稼也长不好。马塔伊心想：既然少了树，那我们就自己把树种回来！"),
    nian("可买那么多树苗不是很贵吗？"),
    dad("她教村里的妇女就地捡本地树的种子，在自家院子里育苗，再把长壮的小树苗种回山坡、学校和农田边。1977 年 6 月 5 日世界环境日，她种下了第一批七棵树，发起了“绿带运动”！"),
    nian("种树真的能把水和泥土找回来吗？", { show: karuraForest, look: rootsSpot }),
    dad("你看肯尼亚卡鲁拉森林小路边这一整面大树根！树根像一张结实的巨网，牢牢抱住红土不让它被暴雨冲走，雨水渗进地下，干涸的泉水就会重新冒出来。"),

    nian("这么好的事情，所有人都会支持她吧？", { part: "一只小蜂鸟的故事", show: portraitFrame, look: "all" }),
    dad("其实她遇到过很大的阻力。有人想砍掉内罗毕市中心的乌胡鲁公园盖高楼，还有人想开发卡鲁拉森林，马塔伊带着市民站出来保护树林，甚至因此被关进过监狱。", { face: "sad" }),
    nian("她那么勇敢，不害怕吗？", { face: "surprised" }),
    dad("她常讲一个非洲寓言：大森林着火了，所有大动物都在逃跑，只有一只小小的蜂鸟一次次飞去河边衔一滴水浇火。大象笑它没用，蜂鸟说：“我只是在做我能做的那一点点。”"),
    nian("后来他们一共种了多少棵树呀？", { face: "curious" }),
    dad("在几十年里，绿带运动帮成千上万个家庭建立了苗圃，在肯尼亚和周边非洲国家种下了超过三千万棵树！"),
    nian("三千万棵树！那一定长成好大好大的森林了！", { face: "happy" }),
    dad("2004 年，旺加里·马塔伊成为第一位获得诺贝尔和平奖的非洲女性。因为守住森林和水源，就是守住大家和平安稳的生活。", { face: "proud" }),
  ],
  remember: "哪怕像小蜂鸟一样每次只衔一滴水、只种一棵树苗，成千上万人一起坚持也能让大地重新变绿。",
  facts: [
    ["姓名与时代", "旺加里·马塔伊（1940—2011），肯尼亚生物学家、环保与和平倡导者"],
    ["绿带运动", "1977 年发起，带动非洲妇女建立数千处苗圃、种下超过三千万棵树"],
    ["历史荣誉", "东非与中非首位女博士；2004 年首位获得诺贝尔和平奖的非洲女性"],
  ],
  sources: [
    { title: "Wikimedia Commons：Wangari Maathai (Agência Brasil, 2006)", url: "https://commons.wikimedia.org/wiki/File:Wangari_Maathai_no_Brasil.jpg" },
    { title: "Wikimedia Commons：Karura forest path", url: "https://commons.wikimedia.org/wiki/File:Karura_forest_path.jpg" },
    { title: "NobelPrize.org：Wangari Maathai – Facts & Biographical", url: "https://www.nobelprize.org/prizes/peace/2004/maathai/facts/" },
  ],
};
