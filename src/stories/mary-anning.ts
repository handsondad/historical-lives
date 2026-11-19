import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const duria: Frame = {
  title: "《更古老的多塞特》（1830 年水彩复原画）",
  src: "frames/mary-anning-duria.jpg",
  alt: "1830 年亨利·德拉贝什根据玛丽·安宁发现的化石画出的远古海洋世界：水里有长脖子蛇颈龙、鱼龙和菊石，天上飞着翼龙",
  kind: "版画",
  by: "Henry De la Beche 绘（1830 年）",
  license: "公有领域",
  commons: "File:Duria Antiquior.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Duria_Antiquior.jpg",
  note: "玛丽·安宁把这些动物的骨头从海崖里挖出来，朋友画出这幅画义卖来帮补她的生活",
};

const hammer = spot(0.28, 0.53, 0.18, "篮子与小地质锤");
const dogSpot = spot(0.83, 0.87, 0.12, "小狗特雷");
const cliff = spot(0.11, 0.34, 0.14, "海边悬崖");
const ichthyo = spot(0.76, 0.50, 0.22, "鱼龙与远古水怪");

export const maryAnning: Story = {
  id: "mary-anning",
  title: "在海边悬崖敲出远古海怪的女孩",
  person: "玛丽·安宁",
  lifeSpan: "1799—1847",
  year: 1811,
  when: "1811 年发现鱼龙，英国莱姆里吉斯",
  field: "科学探索",
  region: "欧洲",
  place: "英国多塞特 · 莱姆里吉斯",
  coords: [50.73, -2.93],
  teaser: "十二岁就拿着小锤子去暴风雨后的悬崖找化石，她挖出的骨头让人类第一次看见恐龙时代的海洋。",
  frame: {
    src: "frames/mary-anning.jpg",
    alt: "自然历史博物馆藏玛丽·安宁油画：她挎着编织篮、拿着地质锤站在英国多塞特海边的悬崖下，脚边趴着黑白相间的小狗特雷",
    kind: "画像",
    by: "不详画家（约 1842 年，伦敦自然历史博物馆藏）",
    license: "公有领域",
    commons: "File:Mary Anning painting.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Mary_Anning_painting.jpg",
  },
  lines: [
    nian("爸爸，这位阿姨挎着篮子、手里握着一把小铁锤，站在海边山崖下面！", { part: "海边捡石头的小店", face: "curious" }),
    dad("她叫玛丽·安宁，1799 年出生在英国海边小镇莱姆里吉斯。她爸爸是做家具的，常带她去崖边敲化石，摆在门口卖给游客。", { look: hammer }),
    nian("右下角还趴着一条黑白小狗呢！", { look: dogSpot }),
    dad("那是她最心爱的小狗特雷！每次海边刮完暴风雨，松软的泥崖一塌方，埋在岩层里的古代贝壳和骨骼就会露出来。", { look: cliff }),
    nian("可悬崖塌方不是很危险吗？", { face: "surprised" }),
    dad("非常危险！有一次落石差点砸到她，还砸死了忠诚的小狗特雷。但家里太穷了，爸爸早逝后，她和哥哥得靠卖化石养活妈妈。"),

    nian("她十二岁的时候是不是挖到个大家伙？", { part: "第一头完整的鱼龙", look: "all" }),
    dad("对！1811 年，哥哥先在崖壁里发现一个奇怪的头骨，接着十二岁的玛丽慢慢把剩下的身子敲了出来——是一条五米多长的远古鱼龙骨架！"),
    nian("大家都认得这是鱼龙吗？"),
    dad("那时候人们连“恐龙”这个词都还没发明呢！科学家看了她挖出来的骨架，才真正相信地球上曾经生活过后来灭绝的古怪巨兽。"),
    nian("她后来还挖到过什么？"),
    dad("她又挖出了第一具完整的蛇颈龙化石、英国第一只飞翔的翼龙化石，还研究出石头里一坨坨其实是古代鱼龙的粪便化石！"),

    nian("这些化石拼起来是什么样子的？", { part: "她没有进过大学", show: duria, look: ichthyo }),
    dad("你看这幅 1830 年的水彩画《更古老的多塞特》，几乎画里每一只远古水怪，原型都是玛丽从崖边挖出来的。"),
    nian("那大科学家们一定请她去大学当教授了吧？", { face: "happy" }),
    dad("没有。当时英国的地质学会不准女性入会，很多男教授买走她的化石去写论文，在报告里却连她的名字都不提。", { face: "sad" }),
    nian("这多让人难过呀！", { face: "sad" }),
    dad("虽然没上过大学，但她自己抄书、练解剖，比很多教授还懂化石结构。今天伦敦自然历史博物馆特意把她的肖像和她挖出的鱼龙放在显眼的地方。"),
    nian("有人说，那首英文绕口令“She sells seashells by the seashore”也是讲她的吗？"),
    dad("很多人都喜欢把这首绕口令跟她连在一起，不过历史学家查过，这首歌词其实是后来作曲家写的，没有证据证明专门写她。", { face: "thinking" }),
  ],
  remember: "科学史上的重要发现，有时来自暴风雨后踩着泥巴、独自挥动小锤子的平凡身影。",
  facts: [
    ["姓名与时代", "玛丽·安宁（1799—1847），英国莱姆里吉斯"],
    ["重要发现", "完整鱼龙（1811）、蛇颈龙（1823）、英国首具翼龙化石（1828）"],
    ["画像收藏", "伦敦自然历史博物馆（Natural History Museum, London）"],
  ],
  sources: [
    { title: "Wikimedia Commons：Mary Anning painting", url: "https://commons.wikimedia.org/wiki/File:Mary_Anning_painting.jpg" },
    { title: "Wikimedia Commons：Duria Antiquior (Henry De la Beche, 1830)", url: "https://commons.wikimedia.org/wiki/File:Duria_Antiquior.jpg" },
    { title: "Natural History Museum：Mary Anning, the unsung hero of fossil discovery", url: "https://www.nhm.ac.uk/discover/mary-anning-unsung-hero.html" },
  ],
};
