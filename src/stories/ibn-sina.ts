import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const doctorSpot = spot(0.45, 0.48, 0.14, "树下把脉的医生");
const pulseSpot = spot(0.55, 0.50, 0.11, "轻按手腕诊脉");
const jarsSpot = spot(0.54, 0.72, 0.16, "药瓶与茶碗");

export const ibnSina: Story = {
  id: "ibn-sina",
  title: "写下一部传了六百年的医学大百科",
  person: "伊本·西那",
  lifeSpan: "980—1037",
  year: 1025,
  circa: true,
  when: "约 1025 年完成《医典》，中亚与波斯",
  field: "医学守护",
  region: "南亚与中亚",
  place: "中亚布哈拉 → 伊朗哈马丹",
  coords: [39.77, 64.43],
  journey: [34.80, 48.51],
  teaser: "十六岁就开始给病人看病，在动荡流离的旅途中写下五卷《医典》，成为东西方医学院共同研读了数百年的教科书。",
  frame: {
    src: "frames/ibn-sina.jpg",
    alt: "1632 年波斯抄本伊本·西那《医典》红底金边漆绘封板：大树下，一位穿黄袍戴白头巾的年轻医生正为坐着的病人轻按手腕把脉，下方摆着长颈药瓶与茶碗",
    kind: "古画",
    by: "1632 年波斯抄本漆绘封板（英国威康图书馆藏）",
    license: "CC BY 4.0",
    commons: "File:Doctor taking woman's pulse. Avicenna's Canon manuscript Wellcome L0073712.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Doctor_taking_woman%27s_pulse._Avicenna%27s_Canon_manuscript_Wellcome_L0073712.jpg",
    note: "这是 1632 年抄写的伊本·西那《医典》手稿封板，画出了古时候医生按手腕把脉的场景",
    dark: true,
  },
  lines: [
    nian("爸爸，这幅红底金边的古画里，大树下穿黄衣服的叔叔正拉着别人的手腕，是在给人把脉吗？", { part: "藏在脉搏里的秘密", face: "curious" }),
    dad("你看得很准！这幅画画在一部超级有名的医学古书封面上，写书的人叫伊本·西那，欧洲人习惯叫他阿维森纳。", { look: doctorSpot }),
    nian("那时候看病也会摸手腕呀？", { look: pulseSpot }),
    dad("会呀！伊本·西那特别擅长通过脉搏快慢、强弱来判断身体状况，他甚至写了一整章教医生怎么分辨几十种不同的脉象。"),
    nian("下面还有人在摆弄长脖子的小瓶子，里面装的是药水吗？", { look: jarsSpot }),
    dad("很可能是草药煎剂和茶水！伊本·西那公元 980 年出生在中亚名城布哈拉附近，也就是今天的乌兹别克斯坦，那时候丝绸之路上的药材和书卷都在那里交汇。"),

    nian("他小时候就很爱看书吗？", { part: "十六岁的年轻医生", look: "all" }),
    dad("特别爱学！按他后来口述给学生的回忆，他十岁就把经典背得滚瓜烂熟，跟着老师学逻辑和数学，很快就超过了老师，转头开始自学医学。"),
    nian("医学那么难，他一个人看得懂吗？", { face: "surprised" }),
    dad("他不只看书，还去观察真正的病人。大约十六岁时，他就已经能给城里的病人开药治病了！"),
    nian("哇，才十六岁！后来他出名了吗？"),
    dad("有一次布哈拉的国王生了重病，宫里的老医生都束手无策，请来年轻的伊本·西那竟然把病治好了。国王问他要什么赏赐，你猜他要了什么？", { face: "curious" }),
    nian("金子还是大房子？"),
    dad("都不是！他只求国王允许他进王宫的大图书馆看书。在那里他读到了许多外面根本找不到的稀世医书和科学抄本。", { face: "happy" }),

    nian("那他后来写的那本大书叫什么呀？", { part: "传了六百年的《医典》" }),
    dad("叫《医典》，一共厚厚的五大卷，大约在公元 1025 年完成。那时候中亚战乱不断，他一路辗转流离，白天行医或办事，晚上就点着油灯一页页写书。"),
    nian("《医典》里都写了什么厉害的办法？"),
    dad("他把前人的希腊、印度、波斯和阿拉伯医学整理成清晰的体系，记录了七百多种药物，还提出要隔离传染病人、用对照试验来检验新药有没有效！"),
    nian("哇，一千年前就知道隔离和做药物试验了！", { face: "surprised" }),
    dad("是啊。后来《医典》被翻译成拉丁文，一路传到欧洲，直到 17 世纪都还是许多欧洲大学医学院的必读课本呢。", { face: "proud" }),
  ],
  remember: "把零散的治病经验整理成讲证据、重观察的科学体系，让不同语言的人都能一起守护生命。",
  facts: [
    ["姓名与时代", "伊本·西那（980—1037），又称阿维森纳，生于布哈拉附近（今乌兹别克斯坦），逝于伊朗哈马丹"],
    ["代表著作", "《医典》（Al-Qanun fi al-Tibb，五卷）与百科全书《治疗论》"],
    ["历史影响", "12 世纪译为拉丁文后，在欧洲与中东医学界通行约五六百年"],
  ],
  sources: [
    { title: "Wikimedia Commons：Avicenna's Canon manuscript (Wellcome L0073712)", url: "https://commons.wikimedia.org/wiki/File:Doctor_taking_woman%27s_pulse._Avicenna%27s_Canon_manuscript_Wellcome_L0073712.jpg" },
    { title: "Britannica Kids：Avicenna", url: "https://kids.britannica.com/scholars/article/Avicenna/11433" },
    { title: "Wellcome Collection：Canon of Medicine (Or Arabic MS 155)", url: "https://wellcomecollection.org/works/rbj4b875" },
  ],
};
