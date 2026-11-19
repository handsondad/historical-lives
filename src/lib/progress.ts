const KEY = "historical-lives:read:v1";

/** 读取已听完/看完的故事 id 集合；隐私模式或非浏览器环境下安全回退为空集合 */
export function loadReadIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed.filter((v): v is string => typeof v === "string")) : new Set();
  } catch {
    return new Set();
  }
}

/** 记录某个故事已经看完，返回更新后的集合 */
export function markRead(id: string): Set<string> {
  const next = loadReadIds();
  if (next.has(id)) return next;
  next.add(id);
  try {
    window.localStorage.setItem(KEY, JSON.stringify([...next]));
  } catch {
    /* 忽略无痕模式或配额错误 */
  }
  return next;
}
