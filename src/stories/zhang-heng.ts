import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const urn = spot(0.25, 0.52, 0.21, "内部直立柱");
const dragon = spot(0.11, 0.44, 0.08, "龙头含珠");
const toad = spot(0.57, 0.80, 0.10, "落珠入蟾蜍");

export const zhangHeng: Story = {
  id: "zhang-heng",
  title: "用八条龙听大地颤动的人",
  person: "张衡",
  lifeSpan: "78—139",
  year: 132,
  when: "公元 132 年，东汉洛阳",
  field: "工程建造",
  region: "东亚",
  place: "中国河南 · 东汉洛阳",
  coords: [34.62, 112.45],
  teaser: "一千八百多年前，他在洛阳造出候风地动仪，比人感觉到还早一步报告远方的地震。",
  frame: {
    src: "frames/zhang-heng.jpg",
    alt: "东汉张衡候风地动仪的现代原理剖面示意图：左边是直立机关静止的铜樽，右边演示地动倾斜后铜丸落入下方蟾蜍嘴里",
    kind: "示意图",
    by: "现代机械原理复原示意图（Wikimedia Commons）",
    license: "CC0",
    commons: "File:Zhang Heng's seismoscope.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Zhang_Heng%27s_seismoscope.jpg",
    note: "原物早已失传，这是后人依据《后汉书》记载绘制的直立倒摆原理示意图",
  },
  lines: [
    nian("爸爸，这张剖面图里的铜罐子里面还立着一根柱子，外面趴着龙，下面还有蟾蜍！", { part: "这是什么宝贝", face: "surprised" }),
    dad("这是东汉科学家张衡在公元 132 年造的“候风地动仪”复原模型。那些不是青蛙，是仰着头的蟾蜍。", { look: urn }),
    nian("“地动”是地震吗？它能预报地震吗？"),
    dad("它不是提前预报，而是在远处刚发生地震、人们还没感觉到的时候，就先一步报告方向。"),
    nian("龙嘴里好像含着一颗小圆球！", { look: dragon }),
    dad("对！八条龙对着东、南、西、北和四个斜角，每条龙嘴里都含着一颗铜丸。下面八只蟾蜍张着大嘴，正好接着。", { look: toad }),
    nian("要是有地方地震了呢？", { look: "all" }),
    dad("地底传来的轻微震动晃动了铜樽里面的机关，朝着地震方向的那个龙头就会张开嘴，“当”的一声把铜丸吐进蟾蜍嘴里！"),

    nian("可是，人们怎么知道它真的管用呢？", { part: "陇西那一声“当”", face: "curious" }),
    dad("《后汉书》里记了一件有名的事：有天在洛阳，地动仪一条对着西边的龙头突然掉了珠子，可城里的人一点感觉都没有。"),
    nian("大家是不是以为它坏了？"),
    dad("好几天都风平浪静，京城里的学者都议论纷纷，觉得这铜罐子不灵。直到几天后，骑快马报信的人从西边的陇西赶到！"),
    nian("陇西真的地震了！"),
    dad("是的，陇西就在洛阳西边几百公里外，真的发生了地震。打那以后，大家才服气地赞叹张衡的手艺。"),

    nian("地动仪里面到底藏着什么机关呀？", { part: "失传的秘密", face: "thinking" }),
    dad("书上只写了“中有都柱，傍行八道”，意思是里面立着一根中间的柱子，连着八条机关。可惜原物后来失传了。"),
    nian("那现在博物馆里的，是照着书猜出来的吗？"),
    dad("对。现代科学家和工匠试过很多种悬垂摆、直立柱的设计。虽然细节还在研究，但用惯性来感知微弱地动的原理是相通的。"),
    nian("张衡平时就只研究地震吗？", { face: "curious" }),
    dad("他忙得很！他当过管天文历法的太史令，造过用水推动转动的浑天仪，算过圆周率，还写过《二京赋》《归田赋》这样的大文章呢。"),
    nian("既能写文章，又能造精密机器，太厉害了！", { face: "happy" }),
    dad("张衡说“人生在勤，不索何获”，意思是不去钻研怎么会有收获。他把好奇心变成了一双能听见大地心跳的耳朵。", { face: "proud" }),
  ],
  remember: "当别人还没察觉远方的震动时，张衡用一只静静立着的铜樽替人们听见了大地的信号。",
  facts: [
    ["姓名与时代", "张衡（78—139），东汉南阳人"],
    ["主要成就", "候风地动仪、水运浑象、天文学与文学"],
    ["做成地动仪", "公元 132 年（阳嘉元年）"],
    ["史料记载", "《后汉书·张衡传》"],
  ],
  sources: [
    { title: "Wikimedia Commons：Zhang Heng's seismoscope", url: "https://commons.wikimedia.org/wiki/File:Zhang_Heng%27s_seismoscope.jpg" },
    { title: "Britannica：Zhang Heng", url: "https://www.britannica.com/biography/Zhang-Heng" },
    { title: "《后汉书·张衡传》（中国哲学书电子化计划）", url: "https://ctext.org/hou-han-shu/zhang-heng-lie-zhuan/zh" },
  ],
};
