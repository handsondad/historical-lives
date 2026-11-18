import { useEffect, useState } from "react";
import { LinePage } from "./pages/LinePage.tsx";
import { StoryPage } from "./pages/StoryPage.tsx";
import { storyById } from "./stories/index.ts";

/** 路由：#/ 故事绳；#/story/<id> 或 #/story/<id>/<n> */
function parse(hash: string) {
  const [, page, id, n] = hash.replace(/^#/, "").split("/");
  if (page === "story" && id) return { page: "story" as const, id, step: n ? Math.max(0, Number(n) - 1) : 0 };
  return { page: "line" as const };
}

export function App() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const on = () => setHash(location.hash);
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);

  const route = parse(hash);
  if (route.page === "story") {
    const story = storyById(route.id);
    if (story) return <StoryPage key={`${story.id}/${route.step}`} story={story} initialStep={Math.min(route.step, story.lines.length - 1)} />;
  }
  return <LinePage />;
}
