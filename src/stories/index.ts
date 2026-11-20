import { harrietTubman } from "./harriet-tubman.ts";
import { hypatia } from "./hypatia.ts";
import { johnHarrison } from "./john-harrison.ts";
import { mansaMusa } from "./mansa-musa.ts";
import { maryAnning } from "./mary-anning.ts";
import { ramanujan } from "./ramanujan.ts";
import { shackletonEndurance } from "./shackleton-endurance.ts";
import { sorJuana } from "./sor-juana.ts";
import type { Story } from "./types.ts";
import { tagore } from "./tagore.ts";
import { marySeacole } from "./mary-seacole.ts";
import { olaudahEquiano } from "./olaudah-equiano.ts";
import { edwardJenner } from "./edward-jenner.ts";
import { songYingxing } from "./song-yingxing.ts";
import { zhengHe } from "./zheng-he.ts";
import { alKhwarizmi } from "./al-khwarizmi.ts";
import { ashoka } from "./ashoka.ts";
import { wangariMaathai } from "./wangari-maathai.ts";
import { ameliaEarhart } from "./amelia-earhart.ts";
import { beethoven } from "./beethoven.ts";
import { alJazari } from "./al-jazari.ts";
import { ibnSina } from "./ibn-sina.ts";
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
  ibnSina,
  alJazari,
  beethoven,
  ameliaEarhart,
  wangariMaathai,
  ashoka,
  alKhwarizmi,
  zhengHe,
  songYingxing,
  edwardJenner,
  olaudahEquiano,
  marySeacole,
  tagore,
].sort((a, b) => a.year - b.year);

export const storyById = (id: string) => STORIES.find((s) => s.id === id);
