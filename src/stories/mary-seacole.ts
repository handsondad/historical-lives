import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const face = spot(0.34, 0.40, 0.12, "望向远方的脸");
const scarf = spot(0.46, 0.64, 0.15, "鲜红的围巾");
const medals = spot(0.71, 0.81, 0.10, "胸前三枚勋章");

export const marySeacole: Story = {
  id: "mary-seacole",
  title: "自己出发去战场照顾士兵的“西科尔妈妈”",
  person: "玛丽·西科尔",
  lifeSpan: "1805—1881",
  year: 1855,
  when: "1855 年，克里米亚战争中的巴拉克拉瓦",
  field: "医学守护",
  region: "美洲",
  place: "牙买加金斯敦 → 克里米亚巴拉克拉瓦",
  coords: [17.97, -76.79],
  journey: [44.50, 33.60],
  teaser: "报名去战地护理队被拒绝后，这位牙买加草药医生自己出钱远赴克里米亚，开起“英国旅馆”，照顾一批又一批士兵。",
  frame: {
    src: "frames/mary-seacole.jpg",
    alt: "一幅油画肖像：一位上了年纪的女士侧脸望向左方，头发梳得整整齐齐，系着鲜红的围巾，深蓝外衣胸前别着三枚勋章",
    kind: "画像",
    by: "Albert Charles Challen 约 1869 年绘（伦敦国家肖像馆藏）",
    license: "公有领域",
    commons: "File:Seacole - Challen.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Seacole_-_Challen.jpg",
  },
  lines: [
    nian("爸爸，这位奶奶系着红围巾，胸前还挂着好几个亮晶晶的东西！", { part: "红围巾和三枚勋章", face: "curious" }),
    dad("那是三枚勋章。她叫玛丽·西科尔，1805 年出生在加勒比海的牙买加，这幅画大约是她六十多岁时画的。", { look: medals }),
    nian("她是打仗的将军吗？", { look: face }),
    dad("不是，她是一位照顾病人和伤员的“草药医生”，士兵们后来都亲切地叫她“西科尔妈妈”。"),
    nian("她是怎么学会照顾病人的？"),
    dad("她的妈妈在牙买加开了一家旅店，常常照顾生病的士兵，还懂得传统草药。小玛丽从小跟着学，还拿自己的布娃娃当病人练习呢！", { face: "happy" }),
    nian("哈哈，我也给我的玩具熊包扎过！", { face: "happy" }),
    dad("她长大后到处旅行做生意，去过英国、古巴，还在中美洲的巴拿马照顾过得霍乱的病人。霍乱是一种传染很快的肠胃病。"),

    nian("她为什么会戴勋章呀？", { part: "自己去克里米亚", look: "all" }),
    dad("1854 年，英国士兵被派到黑海边的克里米亚打仗，很多人受伤生病。她听说后，专门赶到伦敦，申请加入去战地的护理队。", { look: scarf }),
    nian("他们让她去了吗？"),
    dad("没有。她在自传里写，自己去好几个地方报名，都被拒绝了。她很伤心，甚至怀疑是不是因为自己的肤色。"),
    nian("那她就放弃了吗？", { face: "sad" }),
    dad("她没有！她自己出钱，和一位合伙人一起坐船去了克里米亚，在巴拉克拉瓦附近盖起了一家“英国旅馆”。"),
    nian("旅馆？她不是去照顾病人吗？", { face: "surprised" }),
    dad("这家“旅馆”其实像商店加食堂：卖热饭菜和日用品，用赚的钱维持下去。她也给生病的士兵调药、照料他们，还常常带着篮子到前线附近帮助伤员。"),
    nian("她和南丁格尔认识吗？"),
    dad("她在路上去南丁格尔工作的医院拜访过。南丁格尔管理大医院，西科尔在前线附近开店照料士兵，两人方式不一样，都在用自己的办法帮助别人，不必比谁更伟大。"),

    nian("那这些勋章是国家发给她的吗？", { part: "勋章背后的故事", look: medals }),
    dad("这是个好问题。画上确实有三枚勋章，可国家肖像馆的说明里写，她其实没有因为战地服务得到正式授勋。这些勋章是怎么来的，研究者还在讨论。", { face: "thinking" }),
    nian("战争结束以后，她过得好吗？"),
    dad("战争突然结束，店里还剩下一大堆货卖不出去，回到伦敦她就破产了。士兵们和报纸都记得她，1857 年为她办了一场盛大的筹款音乐会，来了好多好多人。"),
    nian("太好了！她还写了书吗？", { face: "happy" }),
    dad("写了！同一年她出版了自传《西科尔夫人在多国的奇妙冒险》，讲自己一路的旅行和照顾病人的经历，很快就卖得很好。"),
    nian("现在大家还记得她吗？"),
    dad("记得！2004 年英国的一次投票里，她被选为最伟大的黑人英国人；2016 年，伦敦圣托马斯医院门前还立起了她的雕像。", { face: "proud" }),
  ],
  remember: "被拒绝时，西科尔没有停下脚步，而是自己出发，把热饭菜和照顾送到了最需要的士兵身边。",
  facts: [
    ["姓名与时代", "玛丽·西科尔（1805—1881），牙买加出生的草药医生与商人"],
    ["英国旅馆", "1855 年在克里米亚巴拉克拉瓦附近开设，兼作商店、食堂和照护处"],
    ["自传", "1857 年出版《西科尔夫人在多国的奇妙冒险》"],
    ["关于勋章", "画上有三枚勋章，但国家肖像馆说明她没有因战地服务获正式授勋"],
  ],
  sources: [
    { title: "Wikimedia Commons：Seacole - Challen", url: "https://commons.wikimedia.org/wiki/File:Seacole_-_Challen.jpg" },
    { title: "National Portrait Gallery：Mary Seacole", url: "https://www.npg.org.uk/collections/search/portrait/mw84190/Mary-Jane-Seacole-ne-Grant" },
    { title: "Mary Seacole Trust：Learn about Mary", url: "https://www.maryseacoletrust.org.uk/learn-about-mary/" },
    { title: "Project Gutenberg：Wonderful Adventures of Mrs. Seacole in Many Lands", url: "https://www.gutenberg.org/ebooks/23031" },
  ],
};
