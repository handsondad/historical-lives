import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const loomFrame: Frame = {
  src: "frames/song-yingxing.jpg",
  alt: "古书里摊开的两页木刻插图《花机图》：一台两层楼高的大织机，上层坐着一个人拉提花线，右下方一位织工坐着织布，旁边标着“花楼”“老鸦翅”“衢脚”等零件名称",
  kind: "版画",
  by: "宋应星《天工开物》卷上插图（1637 年初刊，扫描所据刻本未注明）",
  license: "公有领域",
  commons: "File:天工開物 花機圖 2.jpg",
  page: "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%B7%A5%E9%96%8B%E7%89%A9_%E8%8A%B1%E6%A9%9F%E5%9C%96_2.jpg",
};

const waterFrame: Frame = {
  title: "《天工开物》里的牛转翻车",
  src: "frames/song-yingxing-water.jpg",
  alt: "两页木刻插图：一头水牛拉着大木轮转圈，大轮的木齿咬住另一边的齿轮，带动一条斜斜伸进河里的长木槽，把水提上岸",
  kind: "版画",
  by: "宋应星《天工开物》卷上插图（1637 年初刊，扫描所据刻本未注明）",
  license: "公有领域",
  commons: "File:天工開物 水力圖.jpg",
  page: "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%B7%A5%E9%96%8B%E7%89%A9_%E6%B0%B4%E5%8A%9B%E5%9C%96.jpg",
};

const puller = spot(0.59, 0.33, 0.06, "坐在花楼上的提花人");
const weaver = spot(0.83, 0.69, 0.09, "下面织布的织工");
const cords = spot(0.63, 0.52, 0.12, "一根根垂下来的线");
const bookName = spot(0.025, 0.21, 0.04, "书名“天工開物”");
const ox = spot(0.86, 0.50, 0.09, "转圈的水牛");
const bigWheel = spot(0.73, 0.34, 0.20, "大木轮");
const trough = spot(0.55, 0.72, 0.16, "把水提上岸的木槽");

export const songYingxing: Story = {
  id: "song-yingxing",
  title: "把工匠本领画进书里的落榜书生",
  person: "宋应星",
  lifeSpan: "1587—约 1666",
  year: 1637,
  when: "1637 年《天工开物》刊行，江西",
  field: "工程建造",
  region: "东亚",
  place: "中国江西 · 奉新、分宜",
  coords: [27.81, 114.69],
  teaser: "进士考了好几次都没考上，他却把种田、织布、造纸、炼铁的本领一一画进书里，写成了明朝的“技术百科”《天工开物》。",
  frame: loomFrame,
  lines: [
    nian("爸爸，这张图里有一台好大的机器，上面还坐着一个人！他在干嘛？", { part: "两层楼高的织布机", face: "curious" }),
    dad("这是明朝一本书里的木刻插图，叫《花机图》，画的是能织出花纹绸缎的提花机。上面那个人坐在“花楼”上，负责按顺序拉起丝线。", { look: puller }),
    nian("下面也坐着一个人。", { look: weaver }),
    dad("下面的织工负责穿梭、把线压紧。上面的人提起哪几组线，下面织出来的就是哪一种花纹，两个人要配合得像一个人一样。"),
    nian("那么多垂下来的线，不会弄乱吗？", { look: cords }),
    dad("所以要提前把花纹“编”成一套提线的顺序，有点像今天编好的程序。书里还把每个零件都标上了名字，你看“老鸦翅”“衢脚”都写在旁边。"),
    nian("这本书叫什么呀？", { look: bookName }),
    dad("左边框里竖着写着“天工開物”。作者叫宋应星，书在 1637 年印了出来，里面有一百多幅这样的插图。"),

    nian("宋应星是工匠吗？", { part: "考不中进士的读书人", look: "all" }),
    dad("不是，他是江西奉新的读书人。1615 年他和哥哥一起考中了举人，可后来进京考进士，考了好几次都没考上。"),
    nian("那他不难过吗？"),
    dad("一定很失落。研究者认为，一次次赶考的长路上，他留心看了各地农民种地、工匠冶铁、烧瓷、造纸的办法，觉得这些本领一点也不比做官的学问差。"),
    nian("他就把这些写进书里了？"),
    dad("对。后来他在江西分宜县当了一个管教育的小官，就在那时编成了《天工开物》。他在序里还直说：这本书跟考功名一点关系都没有！", { face: "happy" }),
    nian("书里都写了些什么？"),
    dad("从种稻子、养蚕、织布、染色，到制盐、烧瓷、铸钟、造船、采煤、造纸，一共十八卷。他把吃饭穿衣的种田放在最前面，金银珠宝放在最后。"),

    nian("还有别的有趣的图吗？", { part: "牛拉着水往高处走", show: waterFrame, look: "all" }),
    dad("看这张！一头水牛拉着大木轮转圈，大轮子上的木齿咬住另一个齿轮，带动一条长长的木槽链，把河里的水一格一格提上岸，去浇稻田。", { look: [ox, bigWheel] }),
    nian("牛一直转圈，水就一直往上走，好聪明！", { look: trough, face: "happy" }),
    dad("这叫牛转翻车。没有发动机的年代，人们就靠牛力、水力和人力带动机器。宋应星把这些办法一张张画下来，别人照着图就能学会。"),
    nian("这本书后来很有名吗？"),
    dad("它在中国一度流传不广，1771 年倒是在日本被重新刻印。到了 20 世纪，学者丁文江等人把它重新介绍回国，后来还有了法文、英文等译本。"),
    nian("那我们现在还能看到明朝的版本吗？"),
    dad("能！中国国家图书馆就藏着明朝的初刻本。宋应星让种田人和工匠的本领也被郑重地写进了书里，这是他留给我们最宝贵的东西。", { face: "proud" }),
  ],
  remember: "宋应星没考中进士，却把普通人吃饭穿衣、做工造物的智慧画进了《天工开物》。",
  facts: [
    ["姓名与时代", "宋应星（1587—约 1666），明末江西奉新人"],
    ["代表著作", "《天工开物》，1637 年刊行，共 18 卷、一百多幅插图"],
    ["写书初衷", "自序说“此书于功名进取毫不相关也”"],
    ["流传", "1771 年日本刻印菅生堂本；中国国家图书馆藏有明代初刻本"],
  ],
  sources: [
    { title: "Wikimedia Commons：天工開物 花機圖", url: "https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E5%B7%A5%E9%96%8B%E7%89%A9_%E8%8A%B1%E6%A9%9F%E5%9C%96_2.jpg" },
    { title: "维基文库：天工開物·自序", url: "https://zh.wikisource.org/wiki/%E5%A4%A9%E5%B7%A5%E9%96%8B%E7%89%A9/%E8%87%AA%E5%BA%8F" },
    { title: "Britannica：Tiangong kaiwu", url: "https://www.britannica.com/topic/Tiangong-kaiwu" },
    { title: "中华读书报：宋应星与《天工开物》", url: "https://epaper.gmw.cn/zhdsb/html/2017-07/26/nw.D110000zhdsb_20170726_2-14.htm" },
  ],
};
