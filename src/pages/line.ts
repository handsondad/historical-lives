/**
 * 首页晾衣绳：支持按「领域」「时期」「地理」三种方式分组挂上绳子。
 * 一开始只挂分类牌，点开一类后才把这一类的故事挂上绳子，同一时间只打开一类。
 */
import { ERAS, eraOf } from "../lib/year.ts";
import type { Field, Region, Story } from "../stories/types.ts";

export type Mode = "field" | "era" | "region";

export type Group = {
  readonly key: string;
  readonly name: string;
  readonly icon: string;
  readonly color: string;
  readonly note: string;
  readonly stories: readonly Story[];
};

export const FIELD_LOOK: Record<Field, { readonly icon: string; readonly color: string; readonly note: string }> = {
  科学探索: { icon: "🔭", color: "#5b8def", note: "仰望星空、敲开岩石、在石板上写公式的好奇心。" },
  医学守护: { icon: "🩺", color: "#e86b9a", note: "面对瘟疫和病痛时，想办法护住大家健康的人。" },
  航海地理: { icon: "🧭", color: "#2fa6b3", note: "翻越雪山沙漠、驶进南极浮冰的远行故事。" },
  文学艺术: { icon: "✒️", color: "#d9a420", note: "在书页、诗行和画笔里留下声音的人。" },
  工程建造: { icon: "⚙️", color: "#ff9f43", note: "造出地动仪、航海钟，用双手把想法变成真东西。" },
  社会人文: { icon: "🤝", color: "#6c7ae0", note: "穿越沙漠商路或黑夜星光，连结人群、寻找自由的故事。" },
};
const FIELD_ORDER = Object.keys(FIELD_LOOK) as Field[];

export const REGION_LOOK: Record<Region, { readonly icon: string; readonly color: string; readonly note: string }> = {
  东亚: { icon: "🏯", color: "#e8655b", note: "黄河、长江、丝路起点与东北大雪里的故事。" },
  南亚与中亚: { icon: "🪷", color: "#ff9f43", note: "古寺学府、南方海港与写满公式的笔记本。" },
  中东与北非: { icon: "🏺", color: "#c98b52", note: "尼罗河畔、亚历山大港与古老的天文星盘。" },
  撒哈拉以南非洲: { icon: "🦁", color: "#d9a420", note: "穿越撒哈拉沙海、拥有大学和商队的西非城邦。" },
  欧洲: { icon: "⛵", color: "#5b8def", note: "格林威治的钟表铺、多塞特海边的悬崖化石。" },
  美洲: { icon: "🌎", color: "#43b58f", note: "墨西哥城的修道院书房，和北美夜空下的北斗星。" },
  跨洲与海洋: { icon: "🧊", color: "#2fa6b3", note: "跨越半个地球的远征与冰海上的船员们。" },
};
const REGION_ORDER = Object.keys(REGION_LOOK) as Region[];

export function groupsOf(stories: readonly Story[], mode: Mode): Group[] {
  const sorted = [...stories].sort((a, b) => a.year - b.year);
  if (mode === "field") {
    return FIELD_ORDER.map((f) => ({ f, list: sorted.filter((s) => s.field === f) }))
      .filter(({ list }) => list.length)
      .map(({ f, list }) => ({ key: `field:${f}`, name: f, ...FIELD_LOOK[f], stories: list }));
  }
  if (mode === "region") {
    return REGION_ORDER.map((r) => ({ r, list: sorted.filter((s) => s.region === r) }))
      .filter(({ list }) => list.length)
      .map(({ r, list }) => ({ key: `region:${r}`, name: r, ...REGION_LOOK[r], stories: list }));
  }
  return ERAS.map((era) => ({ era, list: sorted.filter((s) => eraOf(s.year) === era.id) }))
    .filter(({ list }) => list.length)
    .map(({ era, list }) => ({
      key: `era:${era.id}`,
      name: era.name,
      icon: era.icon,
      color: era.color,
      note: era.note,
      stories: list,
    }));
}

export type Slot =
  | { readonly kind: "tag"; readonly group: Group }
  | { readonly kind: "banner"; readonly group: Group }
  | { readonly kind: "print"; readonly story: Story; readonly group: Group };

export function slotsOf(groups: readonly Group[], open: string | null): Slot[] {
  return groups.flatMap((group): Slot[] => group.key === open
    ? [{ kind: "banner", group }, ...group.stories.map((story) => ({ kind: "print" as const, story, group }))]
    : [{ kind: "tag", group }]);
}

export const slotKey = (s: Slot) => (s.kind === "print" ? `s:${s.story.id}` : `g:${s.group.key}`);

export type Size = {
  readonly print: number; readonly tag: number; readonly banner: number;
  readonly gap: number; readonly pad: number; readonly sag: number; readonly top: number;
  readonly rowH: number; readonly rowTags: number;
};
export const WIDE: Size = { print: 172, tag: 156, banner: 112, gap: 28, pad: 64, sag: 34, top: 30, rowH: 370, rowTags: 300 };
export const NARROW: Size = { print: 140, tag: 132, banner: 96, gap: 18, pad: 48, sag: 26, top: 26, rowH: 330, rowTags: 280 };

const TILTS = [-3, 2.5, -1.5, 3, -2.5, 1.5];
export const tiltAt = (i: number) => TILTS[i % TILTS.length];

export function sagAt(x: number, width: number, size: Size): number {
  const t = Math.min(1, Math.max(0, (x - size.pad / 2) / (width - size.pad)));
  return 4 * size.sag * t * (1 - t);
}

export function layout(slots: readonly Slot[], size: Size, minWidth = 0) {
  const widths = slots.map((s) => size[s.kind]);
  const content = widths.reduce((sum, w) => sum + w, 0) + size.gap * Math.max(0, widths.length - 1);
  const extra = Math.max(0, minWidth - content - size.pad * 2) / (widths.length + 1);
  const width = content + size.pad * 2 + extra * (widths.length + 1);
  let left = size.pad + extra;
  const items = slots.map((slot, i) => {
    const x = left + widths[i] / 2;
    left += widths[i] + size.gap + extra;
    return { slot, x, y: sagAt(x, width, size), w: widths[i], tilt: tiltAt(i) };
  });
  return { items, width };
}
