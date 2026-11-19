/** 等距圆柱投影：把 [纬度, 经度] 映射到 360x180 的画布坐标 */
export function project([lat, lon]: readonly [number, number]): [number, number] {
  return [lon + 180, 90 - lat];
}

/**
 * 为起点和终点生成手绘弧线（返回 1 或 2 条 SVG path）：
 * - 经度差大于 180° 时从太平洋绕行，不横穿欧亚大陆；
 * - 控制点高度夹在画布内（>= 8），避免高纬度弧线被顶部裁切。
 */
export function journeyArcs(
  from: readonly [number, number],
  to: readonly [number, number],
): string[] {
  const [x1, y1] = project(from);
  const [x2, y2] = project(to);
  const dx = x2 - x1;
  if (Math.abs(dx) <= 180) {
    const lift = Math.min(22, Math.max(10, Math.hypot(dx, y2 - y1) * 0.22));
    const cy = Math.max(8, Math.min(y1, y2) - lift);
    return [`M ${x1},${y1} Q ${(x1 + x2) / 2},${cy} ${x2},${y2}`];
  }
  // 跨日期变更线：向较近一侧边界折返
  const goEast = dx < 0;
  const edgeA = goEast ? 360 : 0;
  const edgeB = goEast ? 0 : 360;
  const span = 360 - Math.abs(dx);
  const frac = Math.abs(edgeA - x1) / (span || 1);
  const ym = y1 + (y2 - y1) * frac;
  const cy1 = Math.max(8, Math.min(y1, ym) - 10);
  const cy2 = Math.max(8, Math.min(y2, ym) - 10);
  return [
    `M ${x1},${y1} Q ${(x1 + edgeA) / 2},${cy1} ${edgeA},${ym}`,
    `M ${edgeB},${ym} Q ${(edgeB + x2) / 2},${cy2} ${x2},${y2}`,
  ];
}
