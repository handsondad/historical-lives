import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const face = spot(0.49, 0.28, 0.12, "他的脸");
const book = spot(0.50, 0.67, 0.09, "翻开的书");
const names = spot(0.50, 0.81, 0.28, "画像下的两个名字");
const published = spot(0.50, 0.96, 0.22, "1789 年由 G. Vassa 出版");

export const olaudahEquiano: Story = {
  id: "olaudah-equiano",
  title: "用一本书为自由发声的人",
  person: "奥劳达·艾奎亚诺",
  lifeSpan: "约 1745—1797",
  year: 1789,
  when: "1789 年在伦敦出版自传",
  field: "文学艺术",
  region: "撒哈拉以南非洲",
  place: "西非伊博地区 → 英国伦敦",
  coords: [5.84, 6.91],
  journey: [51.51, -0.13],
  teaser: "他小时候被人从非洲家乡掳走，靠做小买卖攒钱买回自由，又写下一本畅销自传，让更多人站出来反对奴隶贸易。",
  frame: {
    src: "frames/olaudah-equiano.jpg",
    alt: "1789 年自传卷首的铜版画肖像：椭圆框里的年轻黑人男子穿着褶边领衬衫和外套，手里拿着一本翻开的书，下方用花体字写着“Olaudah Equiano, or Gustavus Vassa, the African”",
    kind: "版画",
    by: "Daniel Orme 据 W. Denton 原画刻版（1789 年），大英图书馆藏",
    license: "CC0",
    commons: "File:Olaudah Equiano - The interesting Narrative of the Life of Olaudah Equiano (1789), frontispiece - BL.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Olaudah_Equiano_-_The_interesting_Narrative_of_the_Life_of_Olaudah_Equiano_(1789),_frontispiece_-_BL.jpg",
  },
  lines: [
    nian("爸爸，这张画像里的叔叔穿得好正式，下面还写着两行英文名字！", { part: "画像下的两个名字", face: "curious" }),
    dad("上面写的“Olaudah Equiano”——奥劳达·艾奎亚诺，是他小时候在非洲的名字；下面的“Gustavus Vassa”古斯塔夫斯·瓦萨，是别人后来给他起的名字。", { look: names }),
    nian("为什么一个人有两个名字呀？"),
    dad("因为他的人生被硬生生分成了两半。他在书里写，自己出生在西非伊博人的村子，大约十一岁时，和妹妹一起被人绑走了。", { look: face, face: "sad" }),
    nian("啊……后来呢？", { face: "sad" }),
    dad("兄妹俩很快被迫分开。他被带上船横渡大西洋，被当作“奴隶”买来卖去。那时候有些人不公正地把人当成财产，这是非常错误的。"),
    nian("他手里拿着的是什么书？", { look: book }),
    dad("是一本翻开的《圣经》，仔细看能认出“ACTS”的字样。这样的画像在告诉读者：他会读书、会写字，是一个有思想、有尊严的人。"),

    nian("他是怎么学会读书的？", { part: "攒钱买回自由", look: "all" }),
    dad("在船上，他认识了一个叫理查德·贝克的少年，两人成了好朋友，贝克帮他认字；后来在伦敦，还有两位好心的姐妹教他读书，送他去上学。"),
    nian("他一直都在船上工作吗？"),
    dad("是的，他当过水手，跟着船去过很多地方。后来他发现可以在港口之间做点小买卖，比如带几只玻璃杯过去卖，赚一点点钱，再一点点攒起来。"),
    nian("他攒钱想买什么？"),
    dad("买回他自己的自由！1766 年 7 月，他终于攒够了 40 英镑，换来一张自由证书。这笔钱，差不多能买一百六十本他后来写的那本书。"),
    nian("可是……人本来就应该是自由的呀！", { face: "thinking" }),
    dad("你说得完全对。每个人生来就该是自由的，他却不得不花钱买回本来属于自己的东西，这本身就不公平。他后来也正是为了改变这种不公平而奋斗。"),

    nian("自由以后，他做了什么？", { part: "一本书的力量" }),
    dad("他继续航海，1773 年甚至跟着探险船去过北极！后来他定居伦敦，和其他废奴人士一起，站出来反对贩卖奴隶的生意。"),
    nian("一个人怎么反对那么大的生意呢？"),
    dad("他想到了写书。1789 年，他把亲身经历写成了自传。你看最下面这行小字：“1789 年 3 月 1 日由 G. Vassa 出版”——是他自己出版的！", { look: published }),
    nian("大家爱看吗？"),
    dad("非常受欢迎！他带着书在英国各地奔走，到 1794 年已经印了九版。很多读者第一次从亲历者的笔下了解奴隶贸易，越来越多的人开始反对它。"),
    nian("那他的愿望实现了吗？"),
    dad("他在 1797 年去世，没能亲眼看到。十年后的 1807 年，英国通过法律禁止了奴隶贸易，他的书正是推动这一天到来的力量之一。", { face: "proud" }),
    nian("他书里写的童年，都是真的吗？", { face: "thinking" }),
    dad("书里很多经历都能和其他资料对上。不过有历史学家找到旧记录，上面写他出生在美洲的南卡罗来纳，所以他到底生在哪里，说法不一，学者们还在研究。"),
  ],
  remember: "艾奎亚诺用自己的故事写成一本书，让更多人听见被奴役者的声音，一起推动了自由。",
  facts: [
    ["姓名与时代", "奥劳达·艾奎亚诺（约 1745—1797），又名古斯塔夫斯·瓦萨"],
    ["自由证书", "1766 年 7 月以 40 英镑赎回自由"],
    ["代表作品", "1789 年自传《奥劳达·艾奎亚诺生平的有趣叙述》，生前出了九版"],
    ["说法不一", "他自述生于西非伊博地区；部分旧记录写他生于南卡罗来纳"],
  ],
  sources: [
    { title: "Wikimedia Commons：Equiano frontispiece（British Library）", url: "https://commons.wikimedia.org/wiki/File:Olaudah_Equiano_-_The_interesting_Narrative_of_the_Life_of_Olaudah_Equiano_(1789),_frontispiece_-_BL.jpg" },
    { title: "BBC History：Olaudah Equiano", url: "https://www.bbc.co.uk/history/historic_figures/equiano_olaudah.shtml" },
    { title: "Britannica：Olaudah Equiano", url: "https://www.britannica.com/biography/Olaudah-Equiano" },
    { title: "Wikisource：The Interesting Narrative of the Life of Olaudah Equiano", url: "https://en.wikisource.org/wiki/The_Interesting_Narrative_of_the_Life_of_Olaudah_Equiano,_or_Gustavus_Vassa,_the_African" },
  ],
};
