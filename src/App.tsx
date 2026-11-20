import { useEffect, useState } from "react";
import { parseHash } from "./lib/route.ts";
import { yearText } from "./lib/year.ts";
import { LinePage } from "./pages/LinePage.tsx";
import { fetchStory, fetchStoryPage } from "./pages/story-loader.ts";
import { cardById, type StoryCard } from "./stories/catalog.ts";
import type { Story } from "./stories/types.ts";

const SITE = "人类故事集";
const HOME_TITLE = `${SITE} · 小念和爸爸的历史问答`;

interface Loaded {
  readonly story: Story;
  readonly Page: typeof import("./pages/StoryPage.tsx").StoryPage;
}

export function App() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const on = () => setHash(location.hash);
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);

  const route = parseHash(hash);
  const card = route.page === "story" ? cardById(route.id) : undefined;
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    document.title = card ? `${card.person} · ${SITE}` : HOME_TITLE;
  }, [card]);

  // 故事按需下载；下载途中又换了地址，旧的结果就不要了
  const id = card?.id;
  useEffect(() => {
    if (!id) return;
    let live = true;
    setFailed(null);
    Promise.all([fetchStory(id), fetchStoryPage()]).then(([story, m]) => {
      if (!live) return;
      if (story) setLoaded({ story, Page: m.StoryPage });
      else setFailed(id);
    }, () => {
      if (live) setFailed(id);
    });
    return () => {
      live = false;
    };
  }, [id, attempt]);

  if (route.page === "story" && card) {
    if (loaded?.story.id !== card.id) {
      return <Waiting card={card} failed={failed === card.id} retry={() => setAttempt((n) => n + 1)} />;
    }
    const { story, Page } = loaded;
    // 手动改地址栏里的句号也要跳过去，所以句号也放进 key；页面自己翻句时用 replaceState，不会触发这里
    return <Page key={`${story.id}/${route.step}`} story={story} initialStep={Math.min(route.step, story.lines.length - 1)} />;
  }
  return <LinePage />;
}

function Waiting({ card, failed, retry }: { card: StoryCard; failed: boolean; retry: () => void }) {
  return (
    <div className="app story-page">
      <nav className="topbar">
        <a className="back" href="#/">← 回到故事绳</a>
        <span className="topbar-title"><span className="yr">{yearText(card)}</span>{card.person}</span>
      </nav>
      <p className="story-wait" role="status">
        {failed
          ? <>这个故事没有翻开，可能是网络断了。<button type="button" className="link-btn" onClick={retry}>再试一次</button></>
          : "正在翻开这个故事……"}
      </p>
    </div>
  );
}
