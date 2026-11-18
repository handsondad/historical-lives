import type { Region } from "../stories/types.ts";

/** 等距圆柱投影：把 [纬度, 经度] 映射到 360x180 的画布坐标 */
function project([lat, lon]: readonly [number, number]): [number, number] {
  return [lon + 180, 90 - lat];
}

/** 简化的世界大陆轮廓（手绘绘本风），配浅海与暖陆地 */
const LAND_PATHS = [
  // 北美洲与中美洲
  "M 14,22 L 42,16 L 88,18 L 112,24 L 122,38 L 106,48 L 96,54 L 88,68 L 78,66 L 70,58 L 58,52 L 50,40 L 26,35 Z",
  // 格陵兰
  "M 126,10 L 154,10 L 150,24 L 130,26 Z",
  // 南美洲
  "M 96,76 L 118,80 L 140,94 L 132,116 L 116,136 L 108,148 L 104,130 L 96,104 Z",
  // 欧洲
  "M 166,24 L 194,18 L 218,22 L 222,38 L 204,48 L 184,52 L 170,48 L 166,36 Z",
  // 非洲
  "M 164,56 L 198,54 L 220,66 L 226,84 L 212,114 L 196,128 L 184,114 L 176,90 L 160,76 Z",
  // 马达加斯加
  "M 224,106 L 230,104 L 228,118 L 222,118 Z",
  // 亚洲主体（含中东、中亚、南亚、东亚、东南亚半岛）
  "M 218,20 L 284,16 L 336,22 L 344,34 L 316,44 L 306,56 L 296,68 L 280,82 L 266,70 L 254,84 L 246,74 L 228,64 L 214,52 L 216,38 Z",
  // 日本与东南亚岛弧
  "M 318,44 L 326,40 L 324,54 L 314,56 Z",
  "M 284,88 L 304,90 L 300,98 L 282,96 Z",
  // 澳大利亚
  "M 294,108 L 324,106 L 334,122 L 322,134 L 296,128 Z",
  // 南极洲
  "M 10,164 L 350,164 L 350,178 L 10,178 Z",
];

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
  const arc = end ? `M ${x1},${y1} Q ${(x1 + end[0]) / 2},${Math.min(y1, end[1]) - 18} ${end[0]},${end[1]}` : null;

  return (
    <div className={compact ? "world-pin compact" : "world-pin"}>
      <svg viewBox="0 0 360 180" role="img" aria-label={`地图位置：${region} · ${place}`}>
        <rect x={0} y={0} width={360} height={180} rx={10} fill="#dff1ff" />
        {/* 经纬参考线 */}
        <line x1={0} y1={90} x2={360} y2={90} stroke="#b6daf2" strokeWidth={0.9} strokeDasharray="3 3" />
        <line x1={180} y1={0} x2={180} y2={180} stroke="#b6daf2" strokeWidth={0.9} strokeDasharray="3 3" />
        {LAND_PATHS.map((d, i) => (
          <path key={i} d={d} fill="#f7e5c6" stroke="#c8ab82" strokeWidth={1.3} strokeLinejoin="round" />
        ))}
        {arc && <path d={arc} fill="none" stroke="#e0702a" strokeWidth={2.2} strokeDasharray="4 3" strokeLinecap="round" />}
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
      </div>
    </div>
  );
}
