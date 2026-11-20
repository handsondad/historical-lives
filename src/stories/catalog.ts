import aspects from "./aspects.json";
import catalog from "./catalog.json";
import type { Frame, Story } from "./types.ts";

/** 晾衣绳、地图和翻页只要这些；完整问答点开一个故事才加载（src/stories/load.ts） */
export type StoryCard = Pick<Story,
  "id" | "title" | "person" | "lifeSpan" | "year" | "circa" | "when" | "field" | "region" | "place" | "coords" | "journey" | "teaser"
> & {
  readonly frame: Pick<Frame, "src" | "alt">;
};

/** tools/story-index.mjs 生成，按年份从早到晚 */
export const CARDS = catalog as unknown as readonly StoryCard[];

export const cardById = (id: string) => CARDS.find((s) => s.id === id);

/** 每张图的 高 / 宽，图还没下完框子就先按这个比例占好位置 */
export const ASPECTS: Readonly<Record<string, number>> = aspects;

/** 「图片与史料说明」里的一行，tools/story-index.mjs 生成 */
export interface Credit {
  readonly src: string;
  readonly name: string;
  readonly year: number;
  readonly circa?: boolean;
  readonly by: string;
  readonly license: string;
  readonly page: string;
}
