import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const dial = spot(0.51, 0.44, 0.34, "H4 航海表盘");
const center = spot(0.51, 0.43, 0.16, "指针与微调");

export const johnHarrison: Story = {
  id: "john-harrison",
  title: "用一块大怀表救了大海上的船",
  person: "约翰·哈里森",
  lifeSpan: "1693—1776",
  year: 1759,
  when: "1759 年完成 H4，英国伦敦",
  field: "工程建造",
  region: "欧洲",
  place: "英国 · 格林威治",
  coords: [51.48, 0.0],
  teaser: "海员们总在汪洋里算错东西方向而触礁，一位木匠出身的钟表匠花了四十年，造出一块不怕摇晃的航海怀表。",
  frame: {
    src: "frames/john-harrison.jpg",
    alt: "约翰·哈里森于 1759 年造出的 H4 航海天文钟：一只直径约 13 厘米的银壳大怀表，表面画着罗马数字、蓝钢指针和精致花纹",
    kind: "照片",
    by: "Colonel Warden 摄于格林威治皇家天文台",
    license: "CC BY-SA 3.0",
    commons: "File:Harrison H4 chronometer.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Harrison_H4_chronometer.jpg",
  },
  lines: [
    nian("爸爸，这不就是一块漂亮的大怀表吗？为什么能写进历史呀？", { part: "大海上为什么会迷路", face: "curious" }),
    dad("这可不是普通怀表，它是 1759 年造好的“H4 航海钟”。在它出现以前，船长们在大海上经常不知道自己偏东还是偏西。", { look: dial }),
    nian("看看太阳和北极星不行吗？"),
    dad("看北极星能算出你在地球偏南还是偏北（纬度），可地球一直在自转，要知道偏东还是偏西（经度），必须同时知道出发港口现在是几点钟！"),
    nian("船上带个摆钟不就行了？"),
    dad("船在大海里颠来晃去，又冷又热又潮湿，摆钟一上船就乱了套。1707 年英国一支舰队就因为算错经度触礁，差点全军覆没。"),

    nian("谁来解开这个大难题呀？", { part: "木匠的倔脾气", look: "all" }),
    dad("英国议会拿出两万英镑巨奖悬赏“经度奖”。牛顿、哈雷这些大科学家都在天上找答案，没想到赢下挑战的，是一位没上过大学的乡下木匠——约翰·哈里森。"),
    nian("木匠怎么会做钟表呢？", { face: "surprised" }),
    dad("他年轻时用木头给自己家造了一座几乎不用抹油的落地钟！他懂木头、铜和铁在不同温度下怎么热胀冷缩。"),
    nian("他一下子就做出这块小怀表了吗？"),
    dad("哪有这么快！他先花了二十多年，造出三台几十公斤重的大铜钟，叫 H1、H2、H3。可越造他越想：要是能放进口袋里多好！"),

    nian("于是就有了图上这块 H4！", { part: "跨越大西洋的考试", look: center }),
    dad("对！直径只有十三厘米。1761 年冬天，他儿子带着 H4 坐船从英国去牙买加参加考试。"),
    nian("在大风大浪里走了两个多月，它准不准？"),
    dad("船靠岸的时候，这块表整整跑了八十一天，只慢了五点一秒！换算成海上的距离，偏差还不到两公里。"),
    nian("天哪，五秒钟！那两万英镑奖金立刻给他了吗？", { face: "happy" }),
    dad("评审委员会却怀疑这是“撞大运”，要求一次次重测、拆开检查，还扣着一半奖金不肯给。"),
    nian("这也太不讲理了！", { face: "sad" }),
    dad("直到哈里森快八十岁时，连英国国王乔治三世都替他打抱不平，亲自试用了他的表，委员会才补发了剩下的奖金。"),
    nian("后来船长们都带上这样的表了吗？"),
    dad("是啊，库克船长带着 H4 的复制品去太平洋探险，回来后称赞它是“永远不会背叛我们的向导”。", { face: "proud" }),
  ],
  remember: "当船在没有路标的大海里摇晃时，一块走得准的表，就是水手握在手心里的坐标。",
  facts: [
    ["姓名与时代", "约翰·哈里森（1693—1776），生于英国约克郡"],
    ["关键发明", "H1 至 H4 航海天文钟（1730—1759）"],
    ["实物收藏", "英国格林威治皇家博物馆（Royal Museums Greenwich）"],
  ],
  sources: [
    { title: "Wikimedia Commons：Harrison H4 chronometer", url: "https://commons.wikimedia.org/wiki/File:Harrison_H4_chronometer.jpg" },
    { title: "Royal Museums Greenwich：John Harrison and the Longitude Problem", url: "https://www.rmg.co.uk/stories/topics/john-harrison-longitude-problem" },
    { title: "Britannica：John Harrison", url: "https://www.britannica.com/biography/John-Harrison" },
  ],
};
