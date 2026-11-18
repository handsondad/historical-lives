import type { EraId } from "../stories/types.ts";

/** 年份显示：公元前写负数，比如公元前 196 年写 -196 */
export const yearText = (s: { year: number; circa?: boolean }) =>
  `${s.circa ? "约 " : ""}${s.year < 0 ? `公元前 ${-s.year}` : s.year}`;

export interface EraMeta {
  readonly id: EraId;
  readonly name: string;
  readonly icon: string;
  readonly color: string;
  readonly note: string;
}

export const ERAS: readonly EraMeta[] = [
  { id: "ancient", name: "上古与古典", icon: "🏛️", color: "#c98b52", note: "公元 500 年及以前：文字、城邦、古典哲学与早期观测。" },
  { id: "medieval", name: "中古与交流", icon: "🐫", color: "#e8655b", note: "501—1500 年：丝绸之路、沙漠商队与跨文明求索。" },
  { id: "early-modern", name: "大航海与启蒙", icon: "⛵", color: "#ff9f43", note: "1501—1800 年：远洋航行、钟表与科学革命。" },
  { id: "modern-19c", name: "工业与近代", icon: "🚂", color: "#43b58f", note: "1801—1900 年：化石发现、铁路与争取平等的年代。" },
  { id: "contemporary", name: "二十世纪以来", icon: "🧭", color: "#5b8def", note: "1901 年至今：现代医学、极地探险与基础科学。" },
];

export function eraOf(year: number): EraId {
  if (year <= 500) return "ancient";
  if (year <= 1500) return "medieval";
  if (year <= 1800) return "early-modern";
  if (year <= 1900) return "modern-19c";
  return "contemporary";
}

export const eraMeta = (id: EraId): EraMeta => ERAS.find((e) => e.id === id) ?? ERAS[0];
