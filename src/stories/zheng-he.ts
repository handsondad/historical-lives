import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const giraffeFrame: Frame = {
  src: "frames/zheng-he.jpg",
  alt: "一幅绢本古画：一只身上布满鱼鳞般花纹的长颈鹿高高站着，脖子套着绿色缰绳，一位戴头巾、穿红袍的侍从牵着绳子抬头望它，左边竖写着“麒麟图”和“永乐十二年”等字",
  kind: "古画",
  by: "传为明代沈度题绘（费城艺术博物馆藏，馆方认为是 16 世纪作品）",
  license: "公有领域",
  commons: "File:Tribute Giraffe with Attendant.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Tribute_Giraffe_with_Attendant.jpg",
  crop: { x: 0, y: 0.36, w: 1, h: 0.64 },
};

const mapFrame: Frame = {
  title: "《武备志》里的郑和航海图（局部）",
  src: "frames/zheng-he-map.jpg",
  alt: "黑白木刻航海图：几条虚线航道旁写着一行行小字，上方画着岛屿和山，下方是一长条海岸，右下角标着“麻林地”",
  kind: "地图",
  by: "明代茅元仪编《武备志》（1621 年刊），据 15 世纪初郑和船队资料绘制",
  license: "公有领域",
  commons: "File:Mao Kun map - Ceylon, Africa.png",
  page: "https://commons.wikimedia.org/wiki/File:Mao_Kun_map_-_Ceylon,_Africa.png",
  note: "这是后人刊印的航海图，方向和比例都和现代地图不一样",
};

const head = spot(0.62, 0.14, 0.08, "长颈鹿的头和缰绳");
const pattern = spot(0.40, 0.58, 0.15, "鱼鳞似的花纹");
const keeper = spot(0.79, 0.70, 0.10,  "牵绳的侍从");
const words = spot(0.075, 0.33, 0.07, "“麒麟图”“永乐十二年”");
const route = spot(0.45, 0.38, 0.16, "写着罗盘方位的航线");
const malin = spot(0.89, 0.92, 0.07, "麻林地");

export const zhengHe: Story = {
  id: "zheng-he",
  title: "七下西洋的船队和一只“麒麟”",
  person: "郑和",
  lifeSpan: "约 1371—1433",
  year: 1414,
  when: "1414 年长颈鹿来到南京 / 1405—1433 年七下西洋",
  field: "航海地理",
  region: "跨洲与海洋",
  place: "中国南京 → 肯尼亚马林迪",
  coords: [32.06, 118.78],
  journey: [-3.22, 40.13],
  teaser: "1414 年，一只长颈鹿漂洋过海来到明朝宫廷，被叫作“麒麟”；那个年代，郑和正带着庞大的船队一次次驶向印度洋。",
  frame: giraffeFrame,
  lines: [
    nian("爸爸，这只动物脖子好长，身上还有一块块的花纹，它是长颈鹿吗？", { part: "宫廷里来了“麒麟”", face: "curious" }),
    dad("是长颈鹿！可六百多年前的明朝人从没见过它。你看左边写着“麒麟图”，大家把它当成了传说中的瑞兽麒麟。", { look: words }),
    nian("麒麟不是神话里的动物吗？"),
    dad("对，麒麟是传说里的动物，人们相信它出现就代表天下太平。长颈鹿头上有短角、身上有花纹、脚上有蹄，和传说有几分像，人们就这样理解这种陌生的动物。", { look: pattern }),
    nian("牵着绳子的叔叔是谁？", { look: keeper }),
    dad("画上没写他的名字。他戴着头巾、穿着红袍，抬头看着长颈鹿，可能是一路照顾它的人。"),
    nian("那竖着的字还写了什么？", { look: words }),
    dad("写着“永乐十二年……榜葛剌国进贡”。永乐十二年就是 1414 年，榜葛剌就是今天的孟加拉一带，那年孟加拉的使者把长颈鹿送到了南京的皇宫。"),
    nian("可是孟加拉也没有长颈鹿呀？", { look: head }),
    dad("你说得对，长颈鹿的老家在非洲。它很可能先从非洲被带到孟加拉，再坐船来到中国，不过具体路线已经查不清了。"),

    nian("那么远的路，它是怎么坐船来的？", { part: "郑和的大船队", look: "all" }),
    dad("那时候明朝有一位航海家叫郑和。从 1405 年起，他先后七次带着庞大的船队远航，到过东南亚、印度洋沿岸，最远到了非洲东岸。"),
    nian("郑和是怎么当上航海家的？"),
    dad("他原本姓马，出生在云南一个信仰伊斯兰教的家庭。小时候战争打到家乡，他被带离了家，那是很艰难的变化。后来他学了很多本领，得到了皇帝的信任。"),
    nian("他的船有多大呀？", { face: "surprised" }),
    dad("史书说最大的“宝船”有四十多丈长，也许接近一个足球场，可研究者还在争论它到底多大。第一次出海就有两万多人，船的数量也有不同的说法。"),
    nian("在大海上，他们怎么认路？"),
    dad("靠罗盘和星星！我们换一张明朝书里刊印的航海图：虚线是航道，旁边的小字写着罗盘该指向哪个方位、要走多远。", { show: mapFrame, look: route }),
    nian("这张地图怎么跟我们的地图长得不一样？"),
    dad("它像一条拉直的长卷，只告诉船员沿途会看到哪些山和港口。你看右下角写着“麻林地”，就是今天非洲肯尼亚的马林迪。", { look: malin }),
    nian("船队去那么远的地方，是去打仗吗？"),
    dad("主要是去访问和交换：船上带着丝绸和瓷器，带回香料、宝石和珍奇动物。斯里兰卡至今还留着一块用中文、泰米尔文和波斯文三种文字刻成的石碑。"),

    nian("郑和后来怎么样了？", { part: "长颈鹿留下的故事", show: giraffeFrame, look: "all" }),
    dad("大约在 1433 年，他在最后一次远航途中去世。此后明朝不再派大船队出海，他的航海图和故事慢慢成了传奇。"),
    nian("有人说郑和比哥伦布更早发现了美洲，是真的吗？", { face: "thinking" }),
    dad("这个说法没有可靠的证据，而且美洲本来就住着很多人。郑和真正了不起的是：比哥伦布早八十多年，他就带着船队横跨印度洋，把相隔遥远的人们连在了一起。", { face: "proud" }),
  ],
  remember: "郑和的船队把丝绸和瓷器带向印度洋，也把一只“麒麟”和遥远国度的故事带回了中国。",
  facts: [
    ["姓名与时代", "郑和（约 1371—1433），明代航海家，本姓马，云南人"],
    ["七下西洋", "1405—1433 年间七次率船队远航，最远到达非洲东岸"],
    ["长颈鹿", "1414 年榜葛剌（孟加拉）使者献上长颈鹿，宫廷称之为“麒麟”"],
    ["图源档案", "费城艺术博物馆藏《瑞应麒麟图》，传为沈度题绘，馆方认为是后人作品"],
  ],
  sources: [
    { title: "Wikimedia Commons：Tribute Giraffe with Attendant", url: "https://commons.wikimedia.org/wiki/File:Tribute_Giraffe_with_Attendant.jpg" },
    { title: "Britannica：Zheng He", url: "https://www.britannica.com/biography/Zheng-He" },
    { title: "Smithsonian：The Peculiar Story of Giraffes in Medieval China", url: "https://www.smithsonianmag.com/smart-news/peculiar-story-giraffes-medieval-china-180963737/" },
    { title: "Philadelphia Museum of Art：Tribute Giraffe with Attendant", url: "https://philamuseum.org/objects/181783" },
  ],
};
