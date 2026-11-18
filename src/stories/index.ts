import { harrietTubman } from "./harriet-tubman.ts";
import { hypatia } from "./hypatia.ts";
import { johnHarrison } from "./john-harrison.ts";
import { mansaMusa } from "./mansa-musa.ts";
import { maryAnning } from "./mary-anning.ts";
import { ramanujan } from "./ramanujan.ts";
import { shackletonEndurance } from "./shackleton-endurance.ts";
import { sorJuana } from "./sor-juana.ts";
import type { Story } from "./types.ts";
import { wuLienteh } from "./wu-lienteh.ts";
import { xuanzang } from "./xuanzang.ts";
import { zhangHeng } from "./zhang-heng.ts";

/** 故事清单：按关键年份从早到晚排列 */
export const STORIES: readonly Story[] = [
  zhangHeng,
  hypatia,
  xuanzang,
  mansaMusa,
  sorJuana,
  johnHarrison,
  maryAnning,
  harrietTubman,
  wuLienteh,
  ramanujan,
  shackletonEndurance,
].sort((a, b) => a.year - b.year);

export const storyById = (id: string) => STORIES.find((s) => s.id === id);
