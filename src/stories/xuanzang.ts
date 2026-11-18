import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const pack = spot(0.74, 0.28, 0.18, "竹编经箱");
const lamp = spot(0.20, 0.21, 0.08, "小油灯");
const sandals = [spot(0.27, 0.91, 0.09, "草鞋"), spot(0.76, 0.93, 0.09, "迈步前行")];

export const xuanzang: Story = {
  id: "xuanzang",
  title: "一个人走过五万里西域路",
  person: "玄奘",
  lifeSpan: "602—664",
  year: 645,
  when: "627—645 年，长安往返天竺",
  field: "航海地理",
  region: "东亚",
  place: "中国长安 → 印度那烂陀",
  coords: [34.26, 108.94],
  journey: [25.13, 85.44],
  teaser: "不是小说里的骑白马师徒四人，真实的玄奘独自穿过戈壁与雪山，用十六年走出一本《大唐西域记》。",
  frame: {
    src: "frames/xuanzang.jpg",
    alt: "日本东京国立博物馆藏《玄奘负笈图》：一位僧人穿着草鞋迈步前行，背后高高背着装满经卷的竹箱，上方挑着一盏小油灯",
    kind: "古画",
    by: "镰仓时代绘师（东京国立博物馆藏）",
    license: "公有领域",
    commons: "File:Xuanzang w.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Xuanzang_w.jpg",
    note: "这是 13—14 世纪绘成的《玄奘负笈图》，画出了他风尘仆仆西行的样子",
  },
  lines: [
    nian("爸爸，这幅古画里背着大柜子走路的叔叔，是唐僧吗？", { part: "书箱里装了什么", face: "curious" }),
    dad("对，他就是历史上的玄奘！画上没有孙悟空，也没有白龙马，只有他一个人背着沉甸甸的竹编经箱，一步一步往前走。", { look: pack }),
    nian("书箱前面还挂着一盏小灯，白天也点着吗？", { look: lamp }),
    dad("古画常把路上夜里赶路的小油灯、抄经的拂尘都画在一起，好让人一眼看懂他这一趟有多远、多不容易。"),
    nian("脚上还穿着草鞋呢！", { look: sandals }),
    dad("嗯，真实的玄奘在公元 627 年从长安出发，那年他二十多岁。他一路走过荒漠、翻过天山和葱岭雪山，一直走到今天的印度。"),

    nian("没有火车和导航，他在沙漠里迷路了怎么办？", { part: "沙漠里的五天四夜", look: "all" }),
    dad("真的差点走不出去！有一回穿过八百里莫贺延碛大戈壁时，他的水囊翻倒了，水全漏进沙子里。"),
    nian("那不是渴坏了！", { face: "surprised" }),
    dad("整整四夜五天没有一滴水喝。后来靠老马自己循着微弱的水草味，才带他找到一片绿洲。", { face: "thinking" }),
    nian("他在路上还遇到什么人吗？"),
    dad("他穿过西域大大小小的城邦，遇到高昌国王、突厥可汗，也见识过雪山下的牧民和集市。每到一处，他都把路程远近、物产风俗记在心里。"),

    nian("他到天竺以后待了多久？", { part: "一本珍贵的地理书" }),
    dad("他在天竺游学、钻研经典十几年，在著名的那烂陀寺跟戒贤法师学习，还用梵文和当地学者公开辩论。"),
    nian("那他后来是怎么回家的？"),
    dad("公元 645 年，他带着二十多匹马驮的六百五十多部经书回到长安，离开家已经整整十六七年了！", { face: "happy" }),
    nian("他除了翻译经书，还写游记了吗？"),
    dad("写了！他和弟子口述编成了一本《大唐西域记》，记下了一百多个国家和地区的山川、气候、物产和历史故事。"),
    nian("那今天的考古学家是不是也靠这本书？"),
    dad("没错！一千多年后，人们去中亚和印度寻找古迹、发掘那烂陀寺遗址时，手里拿的“历史导游图”，就是玄奘写的这本《大唐西域记》。", { face: "proud" }),
  ],
  remember: "真实的玄奘没有神通护送，他靠一双草鞋和一支笔，留下了连接东亚与南亚的珍贵地理记忆。",
  facts: [
    ["姓名与时代", "玄奘（602—664），唐代河南洛阳人"],
    ["西行时间", "约 627 年出发，645 年回到长安"],
    ["里程与著作", "行程数万里，口述成书《大唐西域记》（12 卷）"],
  ],
  sources: [
    { title: "Wikimedia Commons：Xuanzang (Tokyo National Museum)", url: "https://commons.wikimedia.org/wiki/File:Xuanzang_w.jpg" },
    { title: "Britannica：Xuanzang", url: "https://www.britannica.com/biography/Xuanzang" },
    { title: "UNESCO Silk Roads：Xuanzang and the Silk Roads", url: "https://en.unesco.org/silkroad/content/did-you-know-xuanzang-and-silk-roads" },
  ],
};
