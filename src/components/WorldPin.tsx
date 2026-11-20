import { journeyArcs, project } from "../lib/geo.ts";
import type { StoryCard } from "../stories/catalog.ts";
import type { Region } from "../stories/types.ts";

/** 手绘绘本风世界大陆轮廓（含英伦三岛、地中海/阿拉伯/印度半岛、日本、东南亚与新西兰） */
const LAND_PATHS = [
  // 北美洲与中美洲
  "M 14,22 L 42,16 L 86,18 L 114,24 L 122,36 L 108,45 L 100,52 L 96,60 L 88,68 L 78,66 L 74,56 L 62,48 L 52,38 L 28,34 Z",
  // 格陵兰
  "M 126,10 L 154,10 L 150,24 L 130,26 Z",
  // 南美洲
  "M 96,76 L 118,80 L 140,94 L 134,116 L 118,136 L 108,148 L 104,130 L 96,104 Z",
  // 欧洲大陆（含伊比利亚、意大利与斯堪的纳维亚轮廓）
  "M 171,48 L 180,44 L 186,36 L 184,22 L 198,17 L 210,24 L 222,24 L 224,42 L 208,50 L 198,48 L 194,52 L 186,47 L 172,52 Z",
  // 英伦三岛
  "M 174,34 L 180,33 L 181,40 L 175,41 Z",
  // 非洲（北岸与地中海留白）
  "M 164,56 L 192,55 L 212,60 L 224,74 L 224,86 L 210,114 L 198,127 L 186,114 L 178,90 L 161,76 Z",
  // 马达加斯加
  "M 225,107 L 231,105 L 229,119 L 223,119 Z",
  // 亚洲主体（含阿拉伯半岛、印度半岛、中南半岛与朝鲜半岛）
  "M 218,22 L 284,16 L 336,22 L 344,34 L 318,42 L 310,50 L 306,46 L 302,54 L 296,68 L 284,78 L 278,72 L 266,70 L 258,82 L 250,70 L 242,66 L 236,74 L 226,72 L 216,58 L 214,48 L 222,42 Z",
  // 斯里兰卡
  "M 260,82 L 263,82 L 262,86 L 259,86 Z",
  // 日本列岛
  "M 318,46 L 326,42 L 325,54 L 316,56 Z",
  // 东南亚岛屿
  "M 282,88 L 304,90 L 300,98 L 282,96 Z",
  "M 306,76 L 312,76 L 310,85 L 304,84 Z",
  // 澳大利亚与新西兰
  "M 294,108 L 324,106 L 334,122 L 322,134 L 296,128 Z",
  "M 346,128 L 352,126 L 350,138 L 344,138 Z",
  // 南极洲
  "M 10,164 L 350,164 L 350,178 L 10,178 Z",
];

function MapBackdrop() {
  return (
    <>
      <rect x={0} y={0} width={360} height={180} rx={10} fill="#dff1ff" />
      <line x1={0} y1={90} x2={360} y2={90} stroke="#b6daf2" strokeWidth={0.9} strokeDasharray="3 3" />
      <line x1={180} y1={0} x2={180} y2={180} stroke="#b6daf2" strokeWidth={0.9} strokeDasharray="3 3" />
      {LAND_PATHS.map((d, i) => (
        <path key={i} d={d} fill="#f7e5c6" stroke="#c8ab82" strokeWidth={1.2} strokeLinejoin="round" />
      ))}
    </>
  );
}

type Props = {
  place: string;
  region: Region;
  coords: readonly [number, number];
  journey?: readonly [number, number];
  compact?: boolean;
};

/** 故事发生的地球坐标小地图 */
export function WorldPin({ place, region, coords, journey, compact = false }: Props) {
  const [x1, y1] = project(coords);
  const end = journey ? project(journey) : null;
  const arcs = journey ? journeyArcs(coords, journey) : [];

  return (
    <div className={compact ? "world-pin compact" : "world-pin"}>
      <svg viewBox="0 0 360 180" role="img" aria-label={`地图位置：${region} · ${place}`}>
        <MapBackdrop />
        {arcs.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#e0702a" strokeWidth={2.2} strokeDasharray="4 3" strokeLinecap="round" />
        ))}
        {end && (
          <g transform={`translate(${end[0]},${end[1]})`}>
            <circle r={4.5} fill="#5b8def" stroke="#fff" strokeWidth={1.5} />
          </g>
        )}
        <g transform={`translate(${x1},${y1})`}>
          <circle className="pin-pulse" r={10} fill="#ff9f43" opacity={0.35} />
          <circle r={5.5} fill="#ff6b6b" stroke="#3d3027" strokeWidth={2} />
        </g>
      </svg>
      <div className="world-pin-meta">
        <span className="chip">{region}</span>
        <span>{place}</span>
        {end && (
          <span className="pin-legend" aria-hidden="true">
            <i className="dot start" />起点 <i className="dot end" />终点
          </span>
        )}
      </div>
    </div>
  );
}

type OverviewProps = {
  stories: readonly StoryCard[];
  activeId?: string;
  readIds: ReadonlySet<string>;
  onSelect: (story: StoryCard) => void;
};

/** 首页可展开的世界足迹总图：把全部人物坐标画在同一张手绘地图上 */
export function WorldOverview({ stories, activeId, readIds, onSelect }: OverviewProps) {
  return (
    <div className="world-overview">
      <svg viewBox="0 0 360 180" role="group" aria-label="全部人物故事的世界足迹地图">
        <MapBackdrop />
        {stories.map((s) => {
          if (!s.journey) return null;
          const active = s.id === activeId;
          return journeyArcs(s.coords, s.journey).map((d, i) => (
            <path
              key={`${s.id}-${i}`}
              d={d}
              fill="none"
              stroke={active ? "#e0702a" : "#d49a6a"}
              strokeWidth={active ? 2.2 : 1.1}
              strokeDasharray="3 3"
              opacity={active ? 0.95 : 0.45}
            />
          ));
        })}
        {stories.map((s) => {
          const [x, y] = project(s.coords);
          const active = s.id === activeId;
          const read = readIds.has(s.id);
          return (
            <g
              key={s.id}
              className={active ? "map-pin active" : "map-pin"}
              transform={`translate(${x},${y})`}
              role="button"
              tabIndex={0}
              aria-label={`${s.person}（${s.place}）${read ? "，已听完" : ""}`}
              onClick={() => onSelect(s)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(s);
                }
              }}
            >
              <circle r={11} fill="transparent" />
              {active && <circle className="pin-pulse" r={10} fill="#ff9f43" opacity={0.4} />}
              <circle
                r={active ? 5.8 : 4.2}
                fill={active ? "#ff6b6b" : read ? "#43b58f" : "#ff9f43"}
                stroke="#3d3027"
                strokeWidth={active ? 2 : 1.5}
              />
              <title>{`${s.person} · ${s.place}`}</title>
            </g>
          );
        })}
      </svg>
      <p className="world-overview-hint">点地图上的圆点预览人物故事 · 再次点击下方按钮进入问答</p>
    </div>
  );
}
