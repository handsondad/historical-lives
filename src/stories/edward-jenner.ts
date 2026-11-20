import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const paintingFrame: Frame = {
  src: "frames/edward-jenner.jpg",
  alt: "一幅油画：穿深色外套的琴纳医生坐在椅子上，握着一个男孩的手臂，用细细的小刀轻轻划他的胳膊；一位戴白帽子、穿红点长裙的妇女在后面扶着男孩，右边桌上放着小瓶子和纸",
  kind: "画像",
  by: "Ernest Board 约 1910 年绘（Wellcome Collection 藏）",
  license: "公有领域",
  commons: "File:Jenner phipps 01 (cropped).jpg",
  page: "https://commons.wikimedia.org/wiki/File:Jenner_phipps_01_(cropped).jpg",
};

const pastelFrame: Frame = {
  title: "1800 年的琴纳肖像",
  src: "frames/edward-jenner-pastel.jpg",
  alt: "粉彩肖像：头发花白的琴纳穿着深色外套，手臂搭在一根粗大的树干上；左下角远处有白色城堡、几头奶牛和一位头顶木桶的挤奶姑娘",
  kind: "画像",
  by: "John Raphael Smith 1800 年绘（Wellcome Collection 藏）",
  license: "CC BY 4.0",
  commons: "File:Edward Jenner. Pastel by John Raphael Smith. Wellcome L0026138.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Edward_Jenner._Pastel_by_John_Raphael_Smith._Wellcome_L0026138.jpg",
};

const jenner = spot(0.60, 0.26, 0.09, "琴纳医生");
const boy = spot(0.38, 0.41, 0.08, "8 岁的詹姆斯");
const lancet = spot(0.46, 0.54, 0.07, "细细的小刀");
const helper = spot(0.31, 0.15, 0.10, "戴白帽子的妇女");
const pastelFace = spot(0.52, 0.23, 0.10, "琴纳的脸");
const milkmaid = spot(0.16, 0.72, 0.12, "挤奶姑娘和奶牛");
const castle = spot(0.09, 0.64, 0.07, "远处的伯克利城堡");

export const edwardJenner: Story = {
  id: "edward-jenner",
  title: "从挤奶姑娘手上找到天花克星的乡村医生",
  person: "爱德华·琴纳",
  lifeSpan: "1749—1823",
  year: 1796,
  when: "1796 年 5 月 14 日，英国伯克利",
  field: "医学守护",
  region: "欧洲",
  place: "英国 · 伯克利",
  coords: [51.69, -2.46],
  teaser: "乡下人说挤奶姑娘不得天花，琴纳医生决定认真验证——他种下的一点点牛痘，让人类最终消灭了天花。",
  frame: paintingFrame,
  lines: [
    nian("爸爸，这位医生拿着一根细细的东西，在小哥哥的胳膊上干什么？", { part: "胳膊上的一道小口子", face: "curious" }),
    dad("他是英国乡村医生爱德华·琴纳，正在给 8 岁的男孩詹姆斯·菲普斯种“牛痘”。这幅画是一百多年后的画家想象出来的场面。", { look: [jenner, boy] }),
    nian("疼不疼呀？", { look: lancet }),
    dad("他只用小刀在皮肤上轻轻划两道浅浅的口子，放进一点点牛痘疱里的东西，就像今天打疫苗时那一下小小的刺痛。"),
    nian("后面扶着他的阿姨是谁？", { look: helper }),
    dad("画上没写她是谁，也许是安慰男孩的家人，也可能是画家安排的人物。我们能确定的是日期：1796 年 5 月 14 日。"),

    nian("为什么要把牛身上的东西放进人身体里？", { part: "挤奶姑娘的秘密", look: "all" }),
    dad("那时候有一种叫天花的病非常可怕，传染得很快，很多孩子因此失去了生命，病好了的人脸上也常常留下疤。"),
    nian("那时候大家怎么办？"),
    dad("中国、印度、土耳其等地的人很早就发现：故意接触一点点轻微的天花，以后就不容易再得重病，这叫“种人痘”。可这样做还是有危险，有人会真的病得很重。"),
    nian("那牛痘有什么不一样？"),
    dad("乡下流传一种说法：挤奶姑娘得过奶牛身上的“牛痘”，就不会再得天花。牛痘在人身上只长几个小疱，比天花温和得多。琴纳决定认真验证这个说法。"),
    nian("他是怎么验证的？"),
    dad("他从挤奶姑娘莎拉·内尔姆斯手上的牛痘疱里取了一点，种到詹姆斯的胳膊上，那头奶牛名叫“花朵”。七月他又让詹姆斯接触天花，男孩没有生病！"),
    nian("让小孩去接触天花，不是很危险吗？", { face: "surprised" }),
    dad("你问得很对。今天的科学家绝不能这样做，任何实验都要先确保安全，还要得到本人和家长的同意。琴纳当时希望保护詹姆斯，但那确实是有风险的做法。", { face: "thinking" }),
    nian("琴纳是第一个想到用牛痘的人吗？"),
    dad("不是。比他早二十多年，有个叫杰斯蒂的农夫就给家人种过牛痘。琴纳了不起的地方，是一次次做实验、仔细记录，并在 1798 年把结果写成书公布出来。"),

    nian("换了一张画，他靠在一棵大树上！", { part: "“疫苗”这个词来自奶牛", show: pastelFrame, look: pastelFace }),
    dad("这是 1800 年画的琴纳。你看左下角远处，有几头奶牛和一位头顶木桶的挤奶姑娘，画家特意把牛痘的故事画进了背景。", { look: milkmaid }),
    nian("远处那座白房子是什么？", { look: castle }),
    dad("那是他家乡伯克利的城堡。琴纳一辈子大多住在这个小镇，还在自家花园的小屋里免费给穷人种牛痘。"),
    nian("他除了当医生，还喜欢什么？"),
    dad("他特别爱观察大自然，研究过杜鹃鸟的雏鸟怎样把别的小鸟挤出鸟巢，还因此在 1789 年成了英国皇家学会会员。"),
    nian("“疫苗”这个词，和奶牛有关系吗？"),
    dad("有！英文 vaccine 来自拉丁文 vacca，就是“母牛”。后来全世界一起接种疫苗，到 1980 年，世界卫生组织宣布天花被彻底消灭了！", { face: "proud" }),
  ],
  remember: "琴纳认真验证了挤奶姑娘的秘密，一点点牛痘最终帮助全人类送走了天花。",
  facts: [
    ["姓名与时代", "爱德华·琴纳（1749—1823），英国格洛斯特郡伯克利的乡村医生"],
    ["关键一天", "1796 年 5 月 14 日为 8 岁的詹姆斯·菲普斯接种牛痘"],
    ["“疫苗”一词", "vaccine 来自拉丁文 vacca（母牛）"],
    ["天花的结局", "1980 年世界卫生大会宣布天花在全球被消灭"],
  ],
  sources: [
    { title: "Wikimedia Commons：Jenner phipps 01", url: "https://commons.wikimedia.org/wiki/File:Jenner_phipps_01_(cropped).jpg" },
    { title: "WHO：History of smallpox vaccination", url: "https://www.who.int/news-room/spotlight/history-of-vaccination/history-of-smallpox-vaccination" },
    { title: "Riedel（2005）：Edward Jenner and the history of smallpox and vaccination", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1200696/" },
    { title: "Wellcome Collection：Edward Jenner, pastel by J. R. Smith", url: "https://wellcomecollection.org/works/qpxxn4na" },
  ],
};
