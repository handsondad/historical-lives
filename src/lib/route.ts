/** 路由：#/ 故事绳；#/story/<id> 或 #/story/<id>/<n> */
export type Route =
  | { readonly page: "line" }
  | { readonly page: "story"; readonly id: string; readonly step: number };

export function parseHash(hash: string): Route {
  const [, page, id, n] = hash.replace(/^#/, "").split("/");
  if (page === "story" && id) {
    const parsed = n ? Number(n) : 1;
    const step = Number.isFinite(parsed) ? Math.max(0, Math.floor(parsed) - 1) : 0;
    return { page: "story", id, step };
  }
  return { page: "line" };
}
