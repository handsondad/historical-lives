import { useEffect, useState } from "react";
import { parseHash } from "./lib/route.ts";
import { LinePage } from "./pages/LinePage.tsx";
import { StoryPage } from "./pages/StoryPage.tsx";
import { storyById } from "./stories/index.ts";

export function App() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const on = () => setHash(location.hash);
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);

  const route = parseHash(hash);
  if (route.page === "story") {
    const story = storyById(route.id);
    if (story) return <StoryPage key={`${story.id}/${route.step}`} story={story} initialStep={Math.min(route.step, story.lines.length - 1)} />;
  }
  return <LinePage />;
}
