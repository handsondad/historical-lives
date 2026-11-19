import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const elephantSpot = spot(0.46, 0.82, 0.25, "大象肚里的水箱");
const birdSpot = spot(0.58, 0.13, 0.11, "顶上的报时小鸟");
const dragonSpot = spot(0.49, 0.49, 0.20, "盘绕的红龙机关");
const driverSpot = spot(0.28, 0.64, 0.14, "举槌的象夫");

export const alJazari: Story = {
  id: "al-jazari",
  title: "在八百年前造出大象水钟的巧手匠人",
  person: "贾扎里",
  lifeSpan: "1136—1206",
  year: 1206,
  when: "1206 年成书（1315 年抄本插图），美索不达米亚",
  field: "工程建造",
  region: "中东与北非",
  place: "美索不达米亚 · 迪亚巴克尔",
  coords: [37.91, 40.24],
  teaser: "没有电也没有电池，他只靠水流、浮碗和齿轮，造出一座每隔半小时就让小鸟吹哨、红龙吐珠、象夫敲鼓的大象水钟。",
  frame: {
    src: "frames/al-jazari.jpg",
    alt: "1315 年抄本《精巧机械装置的知识》彩绘手稿：一头深灰大象背着楼阁，象头上坐着高举小槌的象夫，楼阁中间盘绕着一条张嘴的粉红长龙，顶端立着一只红翼小鸟",
    kind: "手稿",
    by: "法鲁赫·伊本·阿卜杜勒-拉蒂夫抄绘（1315 年，大都会艺术博物馆藏）",
    license: "CC0",
    commons: "File:\"The Elephant Clock\", Folio from a Book of the Knowledge of Ingenious Mechanical Devices by al-Jazari MET DT459.jpg",
    page: "https://commons.wikimedia.org/wiki/File:%22The_Elephant_Clock%22,_Folio_from_a_Book_of_the_Knowledge_of_Ingenious_Mechanical_Devices_by_al-Jazari_MET_DT459.jpg",
    note: "这是 1315 年根据贾扎里 1206 年原著抄绘的彩页，现藏纽约大都会艺术博物馆",
  },
  lines: [
    nian("爸爸，这幅画里怎么有一头大象背着一座小城堡，中间还盘着一条粉红色的龙呀？", { part: "一座会演戏的钟", face: "surprised" }),
    dad("哈哈哈，这不是故事里的魔法城堡，而是一座真能报时的“大象水钟”！设计它的人叫贾扎里，是八百多年前美索不达米亚的大工程师。", { look: elephantSpot }),
    nian("大象肚子里能装时钟吗？那时候又没有电池！", { face: "curious" }),
    dad("它全靠水来动！大象空空的肚子里藏着一只装满水的大水箱，水面上漂着一只底部有小洞的铜碗。水一点点渗进碗里，半小时正好沉下去一次！"),
    nian("铜碗沉下去以后，上面会发生什么呀？"),
    dad("沉下去的瞬间，铜碗会拉动藏在柱子里的细绳，一连串机关立刻同时启动——就像一场准时开演的木偶戏！"),

    nian("快给我讲讲上面这些小动物怎么动！", { part: "半小时一次的奇妙接力", look: birdSpot }),
    dad("最顶上的红翅膀小鸟会先转圈发出清脆的哨声；接着阁楼边上的人一放机关，一颗铜球就滚进这条盘绕的红龙大嘴里！", { look: dragonSpot }),
    nian("龙嘴里接住铜球，怎么有点像张衡的地动仪呀？", { face: "surprised" }),
    dad("你联想得真棒！铜球一落进龙头，沉甸甸的龙身顺着转轴翻转，把铜球吐进下方的小瓶里，同时还顺手把大象肚子里沉底的铜碗重新拉回水面！"),
    nian("那坐在大象脖子上的那位叔叔呢？他还高高举着一把小槌子！", { look: driverSpot }),
    dad("铜球落下去时会敲响铜钹，象夫也会挥下手里的小槌敲击象头，提醒大家：半个小时过去啦！其实左右还对称装了两套龙形机关，这一页画出的是侧面样子。"),

    nian("大象、红龙、小鸟、象夫，为什么把这么多地方的样子拼在一起呀？", { part: "把世界装进机器里", look: "all" }),
    dad("很多历史学者认为，贾扎里特意融合了不同文明的元素：印度的大象、中国的龙、古埃及的凤凰、古希腊的水力机关，还有阿拉伯的建筑和服饰。"),
    nian("哇，就像大家一起合作造出来的时钟！", { face: "happy" }),
    dad("除了大象水钟，贾扎里还在公元 1206 年写完一本图文并茂的《精巧机械装置的知识》，把五十种机械的尺寸、画法和组装步骤全都公开写了出来。"),
    nian("他还造过别的好玩机器吗？"),
    dad("造过自动倒水洗手的机器人、靠水车自动抽水浇地的曲轴水泵、甚至还有能按密码转动的密码锁！"),
    nian("真想亲眼看看大象水钟走起来的样子！", { face: "curious" }),
    dad("今天真的有人照着贾扎里八百年前的图纸，把一模一样的大象水钟复原了出来，放在迪拜和土耳其的博物馆里滴答走动呢！", { face: "proud" }),
  ],
  remember: "一张画得清清楚楚的图纸，能让八百年后的人们重新听见大象水钟准时报时的脆响。",
  facts: [
    ["姓名与时代", "伊斯梅尔·贾扎里（1136—1206），生于上美索不达米亚，曾在迪亚巴克尔担任首席工程师"],
    ["代表著作", "《精巧机械装置的知识》（1206 年完成），详述 50 种水钟、水泵与自动机"],
    ["手稿收藏", "1315 年叙利亚抄本《大象水钟》彩页，现藏美国纽约大都会艺术博物馆"],
  ],
  sources: [
    { title: "Wikimedia Commons：The Elephant Clock (MET DT459)", url: "https://commons.wikimedia.org/wiki/File:%22The_Elephant_Clock%22,_Folio_from_a_Book_of_the_Knowledge_of_Ingenious_Mechanical_Devices_by_al-Jazari_MET_DT459.jpg" },
    { title: "The Metropolitan Museum of Art：The Elephant Clock (57.51.23)", url: "https://www.metmuseum.org/art/collection/search/451402" },
    { title: "The Metropolitan Museum of Art：Science and the Art of the Islamic World", url: "https://www.metmuseum.org/learn/educators/lesson-plans/science-and-the-art-of-the-islamic-world" },
  ],
};
