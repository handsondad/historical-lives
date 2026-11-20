import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const leftDiagram = spot(0.19, 0.77, 0.13, "左页的红线方块图");
const rightDiagram = spot(0.62, 0.79, 0.14, "右页拼出来的图");
const redTitle = spot(0.40, 0.10, 0.08, "红墨水写的段落开头");
const rightText = spot(0.72, 0.35, 0.18, "从右往左写的阿拉伯文");

export const alKhwarizmi: Story = {
  id: "al-khwarizmi",
  title: "把天平和拼图变成“代数”的巴格达学者",
  person: "花剌子密",
  lifeSpan: "约 780—850",
  year: 820,
  circa: true,
  when: "约公元 820 年，阿拔斯王朝巴格达",
  field: "科学探索",
  region: "中东与北非",
  place: "伊拉克 · 巴格达",
  coords: [33.32, 44.37],
  teaser: "一千两百年前，他在巴格达用文字和方块图教人解方程，书名变成了“代数”，名字变成了“算法”。",
  frame: {
    src: "frames/al-khwarizmi.jpg",
    alt: "一本摊开的阿拉伯文古抄本：两页写满褐色手写文字，左页开头有一行红字，两页下方各画着用红线拼成的正方形和长方形",
    kind: "手稿",
    by: "牛津大学博德利图书馆藏《代数学》抄本（MS. Huntington 214，约 1342 年抄写）",
    license: "公有领域",
    commons: "File:Bodleian MS. Huntington 214 roll332 frame36.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Bodleian_MS._Huntington_214_roll332_frame36.jpg",
  },
  lines: [
    nian("爸爸，这本旧书的字弯弯曲曲的，下面还用红线画了好多方块，是在玩拼图吗？", { part: "红线画出来的谜题", face: "curious" }),
    dad("差不多就是数学拼图！这是一本阿拉伯文数学书的古老抄本，作者叫花剌子密，大约一千两百年前生活在巴格达。", { look: leftDiagram }),
    nian("这是他亲手写的吗？"),
    dad("不是。这一本是大约 1342 年由抄书人一笔一笔抄下来的，现在收藏在英国牛津大学。那时候还没有印刷机，好书都要靠人抄。"),
    nian("这些字要怎么读呀？", { look: rightText }),
    dad("阿拉伯文是从右往左写的。抄书人常用红墨水写一段话的开头，你看左页最上面那行红字，就像给读者的路标。", { look: redTitle }),

    nian("一千两百年前的巴格达是什么样子的？", { part: "“还原”与“平衡”", look: "all" }),
    dad("那是当时世界上最热闹的大城市之一。哈里发马蒙支持学者们聚在“智慧宫”里，把希腊、波斯和印度的书翻译成阿拉伯文，再接着研究。"),
    nian("花剌子密在那里研究什么？"),
    dad("数学、天文和地理他都研究。他最有名的一本书，讲怎样从已知的数一步步找出不知道的数，比如分遗产、做买卖、量土地时碰到的难题。"),
    nian("这本书叫什么名字？"),
    dad("书名里有个词“al-jabr”，意思是“还原”，把减掉的部分补回来；另一个词的意思是“平衡”，两边一样的东西可以一起去掉。英语的“代数”algebra 就来自 al-jabr！"),
    nian("就像天平两边同时放上一样重的东西，还是平的！", { face: "happy" }),
    dad("完全正确！那时候还没有 x 这种符号，他全用文字来写，再画图证明。比如：一个正方形的面积，加上它边长的十倍，等于 39，边长是多少？"),
    nian("啊？这要怎么算？", { face: "surprised" }),
    dad("他在正方形旁边拼上长条，再补上缺的角，凑成一个面积 64 的大正方形，边长就是 8；大边比原来的边多 5，所以答案是 3！书里的红线图就是这种拼法。", { look: [leftDiagram, rightDiagram] }),
    nian("右边那张图拼得更复杂！", { look: rightDiagram }),
    dad("右页讲的是另一道题：一个平方加 21，等于这个数的十倍。花剌子密发现 3 和 7 都对，还提醒读者：有的题有两个答案，有的题却无解。"),

    nian("我们现在用的数字，也是他发明的吗？", { part: "藏在电脑里的名字" }),
    dad("带“0”的十进制数字，最早来自印度的数学家。花剌子密写书介绍这种算法，后来书被翻译成拉丁文，欧洲人才慢慢用上了它。"),
    nian("原来数字是跟着书本一路旅行过去的！", { face: "happy" }),
    dad("在翻译的书里，他的名字被写成“Algoritmi”，后来变成了英语的“algorithm”——算法，就是电脑做事要遵照的一步一步的规则。"),
    nian("那我每次用平板电脑，都在用他的名字？", { face: "surprised" }),
    dad("可以这么说！不过代数不是他一个人从零发明的，他把前人的办法整理得清清楚楚，让普通人也能照着步骤解题，这才是他了不起的地方。", { face: "proud" }),
  ],
  remember: "花剌子密把解题变成人人都能照着走的步骤，他的书名成了“代数”，他的名字成了“算法”。",
  facts: [
    ["姓名与时代", "穆罕默德·伊本·穆萨·花剌子密（约 780—850），在巴格达工作的数学家、天文学家"],
    ["代表著作", "《还原与平衡计算概要》（常称《代数学》），约写于 813—833 年间"],
    ["名字的回响", "algebra（代数）来自书名里的 al-jabr，algorithm（算法）来自他名字的拉丁写法"],
    ["小提醒", "没有可靠的同时代肖像；常见的头像画都是后人想象的"],
  ],
  sources: [
    { title: "Wikimedia Commons：Bodleian MS. Huntington 214", url: "https://commons.wikimedia.org/wiki/File:Bodleian_MS._Huntington_214_roll332_frame36.jpg" },
    { title: "MacTutor：al-Khwarizmi", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/" },
    { title: "Britannica：al-Khwārizmī", url: "https://www.britannica.com/biography/al-Khwarizmi" },
    { title: "Bodleian Digital：MS. Huntington 214", url: "https://digital.bodleian.ox.ac.uk/objects/33861ddb-eb59-4aef-9ded-3eaf11298d7a/" },
  ],
};
