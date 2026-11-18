import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const eyes = spot(0.57, 0.23, 0.18, "清澈坚定的目光");
const coat = spot(0.54, 0.60, 0.25, "剑桥学者装束");

export const ramanujan: Story = {
  id: "ramanujan",
  title: "在石板上写满奇异公式的年轻人",
  person: "拉马努金",
  lifeSpan: "1887—1920",
  year: 1913,
  when: "1913 年写信去剑桥，印度马德拉斯",
  field: "科学探索",
  region: "南亚与中亚",
  place: "印度马德拉斯 → 英国剑桥",
  coords: [13.08, 80.27],
  journey: [52.21, 0.12],
  teaser: "在印度海港当小职员的他，买不起足够草稿纸就反复擦拭石板，靠一封寄往英国的信震动了世界数学界。",
  frame: {
    src: "frames/ramanujan.jpg",
    alt: "斯里尼瓦瑟·拉马努金的黑白半身照片：他梳着分头，穿着深色西装和白衬衫，眼神专注平静",
    kind: "照片",
    by: "康拉德·奥利弗拍摄或收录于剑桥时期护照档案",
    license: "公有领域",
    commons: "File:Srinivasa Ramanujan - OPC - 1.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Srinivasa_Ramanujan_-_OPC_-_1.jpg",
  },
  lines: [
    nian("爸爸，这位叔叔穿得整整齐齐，眼睛亮亮的，他是科学家吗？", { part: "用石板省纸的少年", face: "curious" }),
    dad("他是印度传奇数学家拉马努金，1887 年出生在印度南部一个小城。", { look: eyes }),
    nian("他小时候一定在最好的数学班里吧？"),
    dad("恰好相反，他家很穷，连草稿纸都买不起多少！他天天拿着一块石板，用粉笔写满算式，胳膊肘一擦，接着算下一题，只有确定最好的公式，才舍得抄进大笔记本里。"),
    nian("哇，那他怎么学那么多高深的数学呀？"),
    dad("他十六岁时借到一本讲了五千多个数学结论的书，书里没有证明步骤，只写结果。他就自己从头一道道推出来，还顺着往下想出了几千条新公式！"),

    nian("可是，如果只顾着算数学，其他功课怎么办？", { part: "寄往一万里外的信", look: "all" }),
    dad("他偏科得厉害，考上大学后只顾着钻研数学，结果英语和历史没及格，奖学金也丢了。为了吃饭，他去马德拉斯港务局当了一名小职员。"),
    nian("当小职员还有人看懂他的笔记本吗？"),
    dad("港口的同事和上司看出他不是普通人，鼓励他给英国剑桥大学的数学教授写信。1913 年 1 月，剑桥的哈代教授收到了一封字迹工整、厚厚十来页的信。"),
    nian("教授一看就相信了吗？", { face: "curious" }),
    dad("哈代一开始以为是怪人乱写的恶作剧！可越看越吃惊：信里有一百多个奇怪的公式，有的连哈代自己都算过，还有的哈代从没见过。"),
    nian("后来呢？"),
    dad("哈代心里想：“有些公式只能是真的——因为从来没有人能有这么大的想象力去编出它们！”他立刻写信请拉马努金去英国剑桥。", { look: coat }),

    nian("拉马努金去了剑桥以后过得开心吗？", { part: "1729 号出租车", face: "happy" }),
    dad("一开始太难了！他从小习惯吃素食，英国冬天又湿又冷，买不到合胃口的食材，加上思乡和拼命熬夜算题，他生了重病住院。"),
    nian("生病的时候还在想数字吗？"),
    dad("有个著名的真实故事：哈代去医院看他，顺口说自己坐的出租车牌号是 1729，听起来真没意思。拉马努金立刻回答：“不，这是一个非常有趣的数字！”"),
    nian("1729 有什么好玩的？", { face: "surprised" }),
    dad("他说：1729 是最小的能用两种方法写成两个立方数之和的数——1 的立方加 12 的立方，或者 9 的立方加 10 的立方，算出来都是 1729！"),
    nian("他也太敏锐了吧！", { face: "happy" }),
    dad("可惜他在三十二岁那年因病早逝。一百年过去了，他留下的三本笔记本和“遗失笔记本”里，至今还有公式被用来研究黑洞和加密算法呢。", { face: "proud" }),
  ],
  remember: "只要心里有算不完的好奇，一块反复擦拭的石板也能写下超越百年的数学星光。",
  facts: [
    ["姓名与时代", "斯里尼瓦瑟·拉马努金（1887—1920），印度数学家"],
    ["主要贡献", "数论、无穷级数、连分数与模拟 θ 函数"],
    ["著名趣闻", "“哈代-拉马努金数” 1729 = 1³ + 12³ = 9³ + 10³"],
  ],
  sources: [
    { title: "Wikimedia Commons：Srinivasa Ramanujan", url: "https://commons.wikimedia.org/wiki/File:Srinivasa_Ramanujan_-_OPC_-_1.jpg" },
    { title: "Britannica：Srinivasa Ramanujan", url: "https://www.britannica.com/biography/Srinivasa-Ramanujan" },
    { title: "MacTutor：Srinivasa Ramanujan", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/" },
  ],
};
