/** 说话的人：小念和爸爸 */
export type Speaker = "nian" | "dad";

/** 头像表情，画在 SVG 小头像上；不写的话按句末标点自动挑 */
export type Expression = "neutral" | "curious" | "surprised" | "happy" | "thinking" | "sad" | "proud";

/** 人类故事的六个领域 */
export type Field = "科学探索" | "医学守护" | "航海地理" | "文学艺术" | "工程建造" | "社会人文";

/** 五个历史时期 */
export type EraId = "ancient" | "medieval" | "early-modern" | "modern-19c" | "contemporary";

/** 七个地理大区 */
export type Region = "东亚" | "南亚与中亚" | "中东与北非" | "撒哈拉以南非洲" | "欧洲" | "美洲" | "跨洲与海洋";

/**
 * 图上圈出来的一块。x、y 是占图片宽、高的比例（0~1），r 是半径，按图片宽度的比例算。
 * 圈太小看不清时可以用 zoom 指定放大倍数。
 */
export interface Spot {
  x: number;
  y: number;
  r: number;
  label?: string;
  zoom?: number;
}

export interface Line {
  who: Speaker;
  say: string;
  /** 这一句时小念或爸爸的表情 */
  face?: Expression;
  /** 这句话在图上指哪儿。不写就接着指上一句指的地方；"all" 是退回看整张图；每段开头默认看整张图 */
  look?: Spot | Spot[] | "all";
  /** 从这句开始新的一段，写段落小标题 */
  part?: string;
  /** 从这句开始换成这张图，直到下一次换；look 的圈按换上的这张图算 */
  show?: Frame;
}

export interface Frame {
  /** 中途换上的图（Line.show）的名字；故事的主图用 Story.person */
  title?: string;
  /** public/ 下的相对路径 */
  src: string;
  alt: string;
  kind: "照片" | "画像" | "手稿" | "地图" | "古画" | "文物" | "版画" | "示意图";
  by: string;
  license: string;
  /** Wikimedia Commons 上的文件名（File:...），npm run frames 按它下载 */
  commons?: string;
  /** 原图太大只裁一块时：x、y、w、h 为比例 */
  crop?: { x: number; y: number; w: number; h: number };
  page: string;
  note?: string;
  dark?: boolean;
}

export interface Source {
  title: string;
  url: string;
}

export interface Story {
  id: string;
  /** 问答故事标题 */
  title: string;
  /** 故事主角或群体名（挂在晾衣绳卡片上） */
  person: string;
  /** 生卒年或时代跨度 */
  lifeSpan: string;
  /** 关键年份，从早到晚排序；公元前写负数 */
  year: number;
  circa?: boolean;
  /** 更细的时间与地点说明 */
  when: string;
  field: Field;
  region: Region;
  /** 故事发生的地理名称 */
  place: string;
  /** 经纬度 [lat, lon]，用于在世界地图上标点 */
  coords: readonly [number, number];
  /** 若故事包含长途跋涉或跨洲迁徙，可标出终点 [lat, lon] */
  journey?: readonly [number, number];
  /** 一句话简介 */
  teaser: string;
  frame: Frame;
  lines: Line[];
  /** 讲完以后，一句话记住 */
  remember: string;
  /** 人物与时代小档案 */
  facts: [string, string][];
  sources: Source[];
}
