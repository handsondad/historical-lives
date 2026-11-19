import type { Mode } from "./line.ts";

/**
 * 首页晾衣绳的当前视角、展开的分类与选中的卡片。
 * 放在模块里，进入故事页再回来时状态还在；从故事页连续翻到下一篇时也会同步到这里。
 */
export const lineMemory: { mode: Mode; open: string | null; picked: string | null } = {
  mode: "field",
  open: null,
  picked: null,
};
