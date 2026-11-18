import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const books = spot(0.71, 0.28, 0.20, "整墙藏书");
const portrait = spot(0.55, 0.31, 0.14, "修女诗人");
const writing = spot(0.16, 0.45, 0.16, "书桌与鹅毛笔");

export const sorJuana: Story = {
  id: "sor-juana",
  title: "在修道院和厨房里做学问的女诗人",
  person: "索尔·胡安娜",
  lifeSpan: "1648—1695",
  year: 1690,
  circa: true,
  when: "约 1690 年，墨西哥城",
  field: "文学艺术",
  region: "美洲",
  place: "墨西哥 · 墨西哥城",
  coords: [19.43, -99.13],
  teaser: "三百多年前的墨西哥，不能上大学的女孩走进修道院，藏了四千本书，被禁止看书时就在厨房观察泡泡和陀螺。",
  frame: {
    src: "frames/sor-juana.jpg",
    alt: "约 1750 年米格尔·卡夫雷拉绘制的油画：身着黑白修女服的索尔·胡安娜坐在书桌前翻看大书，身后是整面墙的厚重书架",
    kind: "画像",
    by: "Miguel Cabrera（约 1750 年绘，墨西哥国立历史博物馆藏）",
    license: "公有领域",
    commons: "File:Retrato de Sor Juana Inés de la Cruz - c.1750 - Miguel Cabrera - Museo Nacional de Historia - Castillo Chapultepec.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Retrato_de_Sor_Juana_In%C3%A9s_de_la_Cruz_-_c.1750_-_Miguel_Cabrera_-_Museo_Nacional_de_Historia_-_Castillo_Chapultepec.jpg",
  },
  lines: [
    nian("爸爸，这位阿姨身后摆着好多好多大书，像个小图书馆！", { part: "藏着四千本书的房间", face: "surprised" }),
    dad("她是 17 世纪墨西哥最了不起的女诗人、学者，大家叫她索尔·胡安娜。", { look: portrait }),
    nian("她从小就住在图书馆里吗？"),
    dad("恰恰相反！她三岁时就偷偷跟着姐姐认字。七岁听说墨西哥城有大学，她甚至央求妈妈把她打扮成男生送去上学。"),
    nian("女生不能去上大学吗？", { face: "curious" }),
    dad("在三百多年前的新西班牙（今天的墨西哥），大学是不收女生的。但她太想看书学习了，最后决定走进修道院——因为在那里能拥有一间安静的书房！", { look: books }),

    nian("她在修道院里都写些什么呀？", { part: "不被看书就看厨房", look: writing }),
    dad("她写诗、写剧本、写散文，还摆满天体仪和乐器。房间里慢慢攒下了大约四千本书，是当时美洲最大的私人藏书室之一。"),
    nian("哇，四千本书！那总有人支持她吧？"),
    dad("当地总督夫人很欣赏她的才华，帮她把诗集送到西班牙出版；但也有些保守的教会官员生气了，觉得修女不该整天写诗谈哲学，逼她不准看书！"),
    nian("不让看书，那多憋屈呀！", { face: "sad" }),
    dad("胡安娜没有停下思考。她在给主教回的著名长信里说：就算没有书本，整个大自然也是一本打开的书！"),
    nian("她在修道院里还能看到什么自然现象？", { look: "all" }),
    dad("她在厨房做饭时，盯着小孩子玩的陀螺为什么转出圆圈，看着鸡蛋在滚烫的油里凝成不同的形状，看着糖浆熬久了怎样变成晶亮的小块！"),
    nian("炒菜煮糖也能想出科学道理啊？", { face: "happy" }),
    dad("对呀！她写下了一句很幽默的话：“要是亚里士多德做过饭，他肯定能写出更多物理学著作呢！”"),

    nian("后来她的书保住了吗？", { part: "拉丁美洲的声音" }),
    dad("晚年因为压力和瘟疫，她把书捐出去救济穷人，自己在照顾生病的修女时也感染去世了，那年 1695 年。"),
    nian("幸好她的诗印出来了！"),
    dad("是啊。今天在墨西哥的钞票和教科书上都有她的头像，大家都记住这位从厨房到大图书馆都在不停发问的诗人。", { face: "proud" }),
  ],
  remember: "被关掉书本的人，依然能从旋转的陀螺和滚烫的厨房里读出世界的规律。",
  facts: [
    ["姓名与时代", "胡安娜·伊内斯·德·拉·克鲁斯（1648—1695），生于新西班牙（今墨西哥）"],
    ["代表作", "《答菲洛特阿书》（捍卫女性受教育的权利）、抒情诗与戏剧"],
    ["画像", "米格尔·卡夫雷拉约 1750 年绘，现藏墨西哥查普尔特佩克城堡"],
  ],
  sources: [
    { title: "Wikimedia Commons：Retrato de Sor Juana Inés de la Cruz (Miguel Cabrera)", url: "https://commons.wikimedia.org/wiki/File:Retrato_de_Sor_Juana_In%C3%A9s_de_la_Cruz_-_c.1750_-_Miguel_Cabrera_-_Museo_Nacional_de_Historia_-_Castillo_Chapultepec.jpg" },
    { title: "Britannica：Sor Juana Inés de la Cruz", url: "https://www.britannica.com/biography/Sor-Juana-Ines-de-la-Cruz" },
  ],
};
