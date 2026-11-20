import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const eyes = spot(0.34, 0.31, 0.09, "望向远方的眼睛");
const beard = spot(0.40, 0.56, 0.15, "浓密的大胡子");
const hair = spot(0.71, 0.28, 0.14, "长长的卷发");
const robe = spot(0.68, 0.86, 0.20, "披在肩上的长袍");

export const tagore: Story = {
  id: "tagore",
  title: "在大树下办学校的诗人",
  person: "泰戈尔",
  lifeSpan: "1861—1941",
  year: 1913,
  when: "1913 年获诺贝尔文学奖，印度桑蒂尼克坦",
  field: "文学艺术",
  region: "南亚与中亚",
  place: "印度 · 加尔各答、桑蒂尼克坦",
  coords: [23.68, 87.68],
  teaser: "小时候讨厌死板的教室，长大后他在树荫下办起学校，又成了第一位获得诺贝尔文学奖的亚洲人。",
  frame: {
    src: "frames/tagore.jpg",
    alt: "黑白侧面照片：一位留着长长卷发和浓密大胡子的男子望向左边，肩上披着浅色的长袍",
    kind: "照片",
    by: "约 1909 年摄，刊于 1914 年瑞典《Les Prix Nobel 1913》",
    license: "公有领域",
    commons: "File:Rabindranath Tagore in 1909.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Rabindranath_Tagore_in_1909.jpg",
  },
  lines: [
    nian("爸爸，这位爷爷的胡子好长，头发还卷卷的，好像童话里的魔法师！", { part: "不爱上学的孩子", face: "happy" }),
    dad("哈哈，他可是用文字变魔法的人——印度诗人泰戈尔。拍这张照片时他快五十岁，后来胡子越留越长，变得雪白。", { look: [beard, hair] }),
    nian("他小时候一定很爱上学吧？"),
    dad("恰恰相反！他 1861 年出生在印度加尔各答一个大家族，小时候觉得教室又闷又死板，只让人死记硬背，换了几所学校都待不下去。"),
    nian("那他怎么学习呢？"),
    dad("主要在家里学：哥哥们和家庭老师教他文学、科学、音乐，还有画画和摔跤。他最爱看院子里的树、雨和天空，八岁就写出了第一首诗。"),
    nian("我也想在院子里上课！", { face: "happy" }),
    dad("泰戈尔长大后，真的办了一所这样的学校。", { look: eyes }),

    nian("那是什么样的学校？", { part: "大树底下的学校", look: "all" }),
    dad("1901 年，他在乡下一个叫桑蒂尼克坦的地方办了学校。很多课不在教室里上，孩子们坐在大树底下，一边听课一边看天看云。"),
    nian("下雨了怎么办？", { face: "curious" }),
    dad("下雨就进屋上课呀！他希望孩子们在大自然里快乐地学习，还要学唱歌、画画和跳舞。后来这里发展成一所大学，校训的意思是“让全世界在这里相聚，像住进同一个鸟巢”。"),
    nian("他写的诗厉害在哪里？"),
    dad("他用孟加拉语写了很多诗和歌，后来自己把诗集《吉檀迦利》翻译成英文。1913 年，他成了第一个获得诺贝尔文学奖的亚洲人！", { face: "proud" }),
    nian("哇，那他一定很有名！"),
    dad("非常有名！印度和孟加拉国的国歌，歌词都出自他写的歌。一个人写的歌成了两个国家的国歌，这在世界上非常少见。"),

    nian("他来过中国吗？", { part: "飞鸟、夏花和涂鸦", look: eyes }),
    dad("来过！1924 年他访问中国，在上海、北京等地演讲，诗人徐志摩一路陪着当翻译。梁启超还送给他一个中文名字“竺震旦”。"),
    nian("中国小朋友也读他的诗吗？"),
    dad("读的！他的《飞鸟集》由郑振铎译成中文，一句一句都很短，像小鸟一样轻。其中有一句特别有名：“使生如夏花之绚烂，死如秋叶之静美。”"),
    nian("这句话是什么意思？", { face: "thinking" }),
    dad("意思是：活着的时候，像夏天的花一样热热闹闹地开放；告别的时候，像秋天的叶子一样安安静静地飘落。既勇敢地生活，也平静地面对离别。"),
    nian("他老了以后还写诗吗？", { look: robe }),
    dad("还写，而且有了新爱好！他把稿纸上涂改的墨团连成线条，看着像奇怪的动物和花纹，于是越画越多。从六十多岁起，他画了两千多幅画。", { face: "happy" }),
    nian("原来写错的字也能变成画！", { face: "surprised" }),
    dad("是呀。泰戈尔一辈子都像个好奇的孩子，用诗、歌、画和学校，把自己对世界的爱分享给了所有人。", { face: "proud" }),
  ],
  remember: "不爱死板教室的泰戈尔，把课堂搬到大树下，又用诗和歌让全世界听见了孟加拉的声音。",
  facts: [
    ["姓名与时代", "罗宾德拉纳特·泰戈尔（1861—1941），印度孟加拉诗人、作曲家、画家和教育家"],
    ["诺贝尔奖", "1913 年获诺贝尔文学奖，是首位获得该奖的亚洲人"],
    ["两国国歌", "印度国歌《人民的意志》和孟加拉国国歌《金色的孟加拉》都出自他的歌"],
    ["名句出处", "“使生如夏花之绚烂，死如秋叶之静美”出自《飞鸟集》第 82 首，郑振铎译"],
  ],
  sources: [
    { title: "Wikimedia Commons：Rabindranath Tagore in 1909", url: "https://commons.wikimedia.org/wiki/File:Rabindranath_Tagore_in_1909.jpg" },
    { title: "NobelPrize.org：Rabindranath Tagore – Biographical", url: "https://www.nobelprize.org/prizes/literature/1913/tagore/biographical/" },
    { title: "UNESCO：Santiniketan", url: "https://whc.unesco.org/en/list/1375/" },
    { title: "Wikisource：Stray Birds", url: "https://en.wikisource.org/wiki/Stray_Birds" },
  ],
};
