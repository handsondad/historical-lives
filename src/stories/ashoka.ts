import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const lions = spot(0.50, 0.20, 0.30, "背靠背的狮子");
const bull = spot(0.26, 0.60, 0.09, "奔跑的公牛");
const elephant = spot(0.69, 0.60, 0.08, "大象");
const wheel = spot(0.49, 0.59, 0.08, "石头法轮");
const lotus = spot(0.50, 0.83, 0.26, "倒垂的莲花");

export const ashoka: Story = {
  id: "ashoka",
  title: "把后悔和善良刻进石头的国王",
  person: "阿育王",
  lifeSpan: "约前 304—前 232",
  year: -260,
  circa: true,
  when: "约公元前 260 年羯陵伽之战后，印度孔雀王朝",
  field: "社会人文",
  region: "南亚与中亚",
  place: "印度 · 华氏城（今巴特那）",
  coords: [25.61, 85.13],
  teaser: "打赢一场惨烈的战争后，这位印度国王没有夸耀战功，而是在岩石上刻下自己的后悔，劝人们善待彼此和动物。",
  frame: {
    src: "frames/ashoka.jpg",
    alt: "萨尔纳特出土的阿育王狮子柱头：几只鬃毛卷曲的狮子背靠背站立，下面一圈刻着公牛、大象和带辐条的石轮，最底下是倒垂的莲花座",
    kind: "文物",
    by: "Chrisi1964 摄于印度萨尔纳特（2011 年）",
    license: "CC BY-SA 4.0",
    commons: "File:Sarnath capital.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Sarnath_capital.jpg",
  },
  lines: [
    nian("爸爸，这块石头上有好几只狮子背靠背站着，它们在看守什么呀？", { part: "柱子顶上的狮子", face: "curious" }),
    dad("这是两千两百多年前，印度孔雀王朝的阿育王立起的一根石柱的柱头。四只狮子分别朝着东南西北，从这个角度能看到三只的脸。", { look: lions }),
    nian("狮子下面还有一圈小动物，我看到一头牛和一头大象！", { look: [bull, elephant] }),
    dad("眼力真好！这一圈一共刻着四种动物：大象、公牛、奔马和狮子，它们中间隔着四个带辐条的石头轮子。", { look: wheel }),
    nian("这个轮子我好像在哪儿见过！", { face: "surprised" }),
    dad("印度国旗正中间那个 24 根辐条的蓝色轮子，就叫“阿育王法轮”；印度的国徽，也是照着这个狮子柱头设计的。"),
    nian("最下面像一朵倒过来的大花。", { look: lotus }),
    dad("那是一朵倒扣的莲花。整个柱头是用一整块砂岩雕出来的，表面打磨得光滑发亮，两千多年后还闪着光泽。"),

    nian("阿育王是一个很厉害的国王吗？", { part: "一场让国王后悔的战争", look: "all" }),
    dad("他的国家非常大，差不多覆盖了今天印度的大部分地方。可是在他登上王位的第八年，他派军队攻打东海岸一个叫羯陵伽的国家。"),
    nian("打赢了吗？"),
    dad("打赢了，可是代价太大了。他后来在石刻里自己写下：有十万人失去了生命，十五万人被迫离开家乡。这是他记下的数字，今天已经没法一一核实。", { face: "sad" }),
    nian("国王自己把这些写出来？他不是应该夸自己打了胜仗吗？", { face: "surprised" }),
    dad("这正是最特别的地方。很多国王喜欢夸耀战功，阿育王却在石刻里说，想到那么多家庭的痛苦，他心里非常难过和后悔。"),
    nian("后悔以后，他做了什么？"),
    dad("他说以后要用“法”——也就是做人的道理——来治理国家，而不是靠打仗征服别人。他那时已经接触佛教，后来越来越虔诚。"),

    nian("什么是做人的道理呀？", { part: "刻在石头上的留言" }),
    dad("他让人把劝告刻在各地的大岩石和高高的石柱上：孝顺父母，善待朋友和仆人，说真话，不随便杀害动物，也要尊重信仰不同的人。"),
    nian("为什么要刻在石头上，不写在纸上？"),
    dad("那时候印度还没有纸呢！刻在石头上，就像给很远的人、很久以后的人留下不会轻易消失的留言。"),
    nian("除了刻字，他还做了别的好事吗？"),
    dad("石刻里说，他让人在大路边挖井、种上遮荫的大树、修建歇脚的地方，还为人和动物准备治病用的草药。"),
    nian("那些字后来大家都看得懂吗？"),
    dad("时间太久，后来再也没人认得这种古老的婆罗米文字。直到 1837 年，英国学者普林塞普对照各地的石刻，才把它重新破译，阿育王的留言又被听见了。", { face: "proud" }),
  ],
  remember: "阿育王最了不起的不是打赢了战争，而是敢于承认战争带来的痛苦，并把善良刻进了石头里。",
  facts: [
    ["姓名与时代", "阿育王（约公元前 304—前 232 年），印度孔雀王朝第三位君主"],
    ["石刻诏令", "第十三摩崖诏令记录了羯陵伽之战和他的悔恨"],
    ["今天的印记", "印度国徽改编自萨尔纳特狮子柱头，国旗中央是 24 辐的阿育王法轮"],
    ["小提醒", "“阿育王地狱”等戏剧化故事出自后世传说，不是石刻里的记载"],
  ],
  sources: [
    { title: "Wikimedia Commons：Sarnath capital", url: "https://commons.wikimedia.org/wiki/File:Sarnath_capital.jpg" },
    { title: "Britannica：Ashoka", url: "https://www.britannica.com/biography/Ashoka" },
    { title: "S. Dhammika：The Edicts of King Asoka（英译）", url: "https://accesstoinsight.org/lib/authors/dhammika/wheel386.html" },
    { title: "Wikipedia：Lion Capital of Ashoka", url: "https://en.wikipedia.org/wiki/Lion_Capital_of_Ashoka" },
  ],
};
