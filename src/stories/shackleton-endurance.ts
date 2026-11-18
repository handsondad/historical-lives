import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const ship = spot(0.33, 0.52, 0.26, "坚忍号帆船");
const ice = spot(0.45, 0.80, 0.19, "挤压变形的海冰");

export const shackletonEndurance: Story = {
  id: "shackleton-endurance",
  title: "被南极海冰冻住后一个没丢的船长",
  person: "沙克尔顿",
  lifeSpan: "1874—1922",
  year: 1915,
  when: "1914—1916 年，南极威德尔海",
  field: "航海地理",
  region: "跨洲与海洋",
  place: "南极威德尔海 → 南乔治亚岛",
  coords: [-68.6, -52.4],
  journey: [-54.28, -36.5],
  teaser: "船被南极浮冰挤碎沉没，二十八个人在冰面上漂流一年多，船长沙克尔顿用三条小救生艇把大家全员带回了家。",
  frame: {
    src: "frames/shackleton-endurance.jpg",
    alt: "1915 年摄影师弗兰克·赫利在南极拍的照片：玫瑰色晨光下，木制三桅帆船“坚忍号”被重重起伏的白色冰脊紧紧卡住、微微倾斜",
    kind: "照片",
    by: "Frank Hurley 摄（1915 年）",
    license: "公有领域",
    commons: "File:The 'Endurance', The pink glow of the rising sun shining on a pressure ridge, 1915 - photographed by Frank Hurley (3534602329).jpg",
    page: "https://commons.wikimedia.org/wiki/File:The_%27Endurance%27,_The_pink_glow_of_the_rising_sun_shining_on_a_pressure_ridge,_1915_-_photographed_by_Frank_Hurley_(3534602329).jpg",
  },
  lines: [
    nian("爸爸，这艘大帆船怎么歪在雪地里？旁边一坨坨白的不是沙滩吧？", { part: "粉红晨光里的冰监狱", face: "surprised" }),
    dad("那些全是大海里冻起来的厚冰块！这是 1915 年在南极拍到的“坚忍号”帆船，船长叫沙克尔顿。", { look: ship }),
    nian("他们去南极做什么呀？"),
    dad("1914 年，沙克尔顿带着二十七名船员，想从一头穿越南极大陆走到另一头。可刚进威德尔海，厚厚的浮冰就把木船紧紧卡住了！", { look: ice }),
    nian("像冰棒冻在冰箱里那样吗？"),
    dad("比那更可怕。几个月后，四周的冰块相互挤压，把结实的橡木船身像压核桃一样挤裂。1915 年 11 月，坚忍号慢慢沉进了冰海。"),

    nian("没有船了，二十八个人在南极怎么活下来？！", { part: "二十八个人，一个也不能少", look: "all", face: "surprised" }),
    dad("沙克尔顿立刻下令：放弃穿越南极的计划，现在只有一个目标——把所有人活着带回家！"),
    nian("他们住在哪里？吃什么？"),
    dad("他们把三条小救生艇拖到浮冰上，用船帆搭起帐篷，在冰面上漂流了将近五个月。摄影师赫利还跳进冰水里，抢救出这批照片的玻璃底片呢！"),
    nian("浮冰化了怎么办？"),
    dad("1916 年 4 月浮冰终于裂开了，二十八个人挤上三条小救生艇，在刺骨的巨浪里划了七天，好不容易登上无人居住的“象岛”。"),

    nian("可是象岛上没有船经过，怎么求救呀？", { part: "八百海里的海上救援" }),
    dad("沙克尔顿挑了五个最健壮的船员，乘着一条只有七米长的敞篷小木艇，在世界风浪最狂暴的南大洋上硬闯一千三百多公里！"),
    nian("那么小的小木船，能在狂风大浪里认清方向吗？"),
    dad("靠导航员沃斯利拿着六分仪和航海表，在摇晃的浪尖上抓紧太阳露脸的几秒钟算位置！十五天后，他们真的撞上了南乔治亚岛！"),
    nian("象岛上剩下的人等到了吗？", { face: "curious" }),
    dad("沙克尔顿翻过雪山找到捕鲸站求救，试了四次才冲破海冰。1916 年 8 月底，整整失踪快两年后，象岛上二十二人远远看见救兵船来了！"),
    nian("一个人都没有丢吗？", { face: "happy" }),
    dad("整支探险队二十八个人，全都活着回了家。后来有人说，虽然他没穿越南极，但他在最绝望的冰海里守住了比成功更宝贵的东西。", { face: "proud" }),
  ],
  remember: "当原定的雄心被风雪碾碎时，把每一个同伴平安带回家，就是最伟大的探险。",
  facts: [
    ["姓名与时代", "欧内斯特·沙克尔顿（1874—1922），极地探险家"],
    ["远征时间", "1914 年 8 月出发，1916 年 8 月全员获救"],
    ["照片故事", "摄影师弗兰克·赫利冒死保存的玻璃底片，2022 年人们还在海底找到了坚忍号残骸"],
  ],
  sources: [
    { title: "Wikimedia Commons：The 'Endurance' by Frank Hurley (1915)", url: "https://commons.wikimedia.org/wiki/File:The_%27Endurance%27,_The_pink_glow_of_the_rising_sun_shining_on_a_pressure_ridge,_1915_-_photographed_by_Frank_Hurley_(3534602329).jpg" },
    { title: "Britannica：Ernest Shackleton", url: "https://www.britannica.com/biography/Ernest-Shackleton" },
    { title: "Royal Geographical Society：Endurance Expedition", url: "https://www.rgs.org/explore/antarctica/shackleton" },
  ],
};
