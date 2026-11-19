import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const earTrumpet: Frame = {
  title: "贝多芬使用过的黄铜助听喇叭",
  src: "frames/beethoven-trumpet.jpg",
  alt: "保存在维也纳约瑟芬医学博物馆的黄铜助听喇叭：圆筒正面布满收音小圆孔，侧面弯出一根细铜管连着黑色耳塞",
  kind: "文物",
  by: "Isiwal 摄于维也纳约瑟芬医学博物馆（2025 年）",
  license: "CC BY-SA 4.0",
  commons: "File:Wien Josephinum Hörrohr Beethoven-174751.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Wien_Josephinum_H%C3%B6rrohr_Beethoven-174751.jpg",
  note: "没有现代电子助听器时，贝多芬曾借助各种弯曲的金属喇叭把声音聚进耳朵",
};

const portraitFrame: Frame = {
  src: "frames/beethoven.jpg",
  alt: "1820 年约瑟夫·卡尔·斯蒂勒绘的贝多芬油画肖像：他一头蓬乱的灰白卷发，系着鲜红围巾，握着一支细铅笔和写着《庄严弥撒》的乐谱专注沉思",
  kind: "画像",
  by: "Joseph Karl Stieler（1820 年绘，波恩贝多芬故居藏）",
  license: "公有领域",
  commons: "File:Joseph Karl Stieler's Beethoven mit dem Manuskript der Missa solemnis.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg",
  dark: true,
};

const hairSpot = spot(0.54, 0.26, 0.24, "蓬乱卷发与眼神");
const scarfSpot = spot(0.56, 0.56, 0.18, "鲜红围巾");
const scoreSpot = spot(0.22, 0.69, 0.22, "乐谱与铅笔");
const hornSpot = spot(0.60, 0.48, 0.32, "黄铜助听喇叭");

export const beethoven: Story = {
  id: "beethoven",
  title: "耳朵听不见后仍写出《欢乐颂》的音乐家",
  person: "贝多芬",
  lifeSpan: "1770—1827",
  year: 1824,
  when: "1820 年画像 / 1824 年第九交响曲首演，维也纳",
  field: "文学艺术",
  region: "欧洲",
  place: "德国波恩 → 奥地利维也纳",
  coords: [50.74, 7.10],
  journey: [48.21, 16.37],
  teaser: "二十多岁起听力一点点消失，他没有放下作曲的笔，而是在完全寂静的世界里写出了响彻全人类的《欢乐颂》。",
  frame: portraitFrame,
  lines: [
    nian("爸爸，这位叔叔头发乱蓬蓬的，皱着眉头，好像正在想一件超级难的事！", { part: "红围巾与手里的乐谱", face: "curious" }),
    dad("哈哈，这是音乐史上最有名的肖像画之一！画里的人就是德国作曲家贝多芬，那年他五十岁。", { look: hairSpot }),
    nian("他脖子上围着一条大红围巾，手里还拿着乐谱本和铅笔！", { look: scarfSpot }),
    dad("画家斯蒂勒 1820 年给他画像时，贝多芬正忙着写一部叫《庄严弥撒》的大合唱，连摆姿势的时候脑子里都还在转着音符呢。", { look: scoreSpot }),
    nian("贝多芬从小就住在维也纳吗？", { look: "all" }),
    dad("他 1770 年出生在德国莱茵河畔的波恩，二十二岁才去音乐之都维也纳闯荡，很快因为弹钢琴和作曲名震全城。"),

    nian("可是我听说他后来耳朵聋了，是真的吗？", { part: "世界慢慢安静下来" }),
    dad("是真的。从二十七八岁开始，他的耳朵里老是嗡嗡作响，别人说话和轻柔的琴声越来越听不清。对音乐家来说，这是最可怕的打击。", { face: "sad" }),
    nian("那时候没有医生和助听器能帮他吗？"),
    dad("那时候还没有电子助听器。朋友给他做了各种形状的金属助听喇叭——我们换一张博物馆里的实物照片看看！", { show: earTrumpet, look: hornSpot }),
    nian("哇，这个黄铜筒正面开满了一圈小圆洞，旁边弯出一根细管和黑耳塞，真像个小喷壶！", { face: "surprised" }),
    dad("对，大口负责收集声音，细管把声音聚拢送进耳朵里。后来连喇叭也不管用了，大家只能拿小本子写字跟他聊天，这些“谈话录”今天还留在博物馆里。"),

    nian("什么声音都听不见了，他怎么还能写音乐呀？", { part: "寂静里的《欢乐颂》", show: portraitFrame, look: "all", face: "curious" }),
    dad("因为他心里装着整个乐队！每一种乐器发出的音高、强弱和节奏，全在他脑海里清清楚楚地响着。"),
    nian("我听说他把钢琴腿锯掉，趴在地板上听振动，是真的吗？"),
    dad("确实有朋友回忆过他靠近钢琴音板感受震动，也曾试过咬着木棍贴在琴身上听声，不过“锯掉钢琴腿”更像后人传出来的夸张故事，没有确凿证据。", { face: "thinking" }),
    nian("那他完全失聪以后，写出什么最有名的曲子？"),
    dad("1824 年，他在维也纳指挥首演了《第九交响曲》，最后一章就是全世界都熟悉的《欢乐颂》大合唱！"),
    nian("那天晚上大家一定鼓掌鼓得手都酸了吧？", { face: "happy" }),
    dad("演完的时候全场观众起立欢呼，可背对着大家的贝多芬一点也听不见。直到一位女歌手轻轻转过他的身子，他才看见满堂挥舞的手帕和热泪。", { face: "proud" }),
  ],
  remember: "当外面的声音彻底沉寂时，贝多芬凭着心里的旋律与倔强，为全世界写下了最明亮的欢乐颂歌。",
  facts: [
    ["姓名与时代", "路德维希·范·贝多芬（1770—1827），生于德国波恩，主要创作于维也纳"],
    ["代表作品", "《命运》第五交响曲、《月光》奏鸣曲、《第九交响曲（欢乐颂）》"],
    ["肖像收藏", "约瑟夫·卡尔·斯蒂勒 1820 年绘，现藏德国波恩贝多芬故居"],
  ],
  sources: [
    { title: "Wikimedia Commons：Beethoven portrait by Joseph Karl Stieler (1820)", url: "https://commons.wikimedia.org/wiki/File:Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg" },
    { title: "Wikimedia Commons：Beethoven ear trumpet at Josephinum Vienna", url: "https://commons.wikimedia.org/wiki/File:Wien_Josephinum_H%C3%B6rrohr_Beethoven-174751.jpg" },
    { title: "Beethoven-Haus Bonn：Digital Archives", url: "https://www.beethoven.de/en/media/view/6093903937667072/scan/0" },
  ],
};
