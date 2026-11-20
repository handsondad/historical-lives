import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Avatar, inferExpression } from "../components/Avatar.tsx";
import { FrameStage } from "../components/FrameStage.tsx";
import { WorldPin } from "../components/WorldPin.tsx";
import { markRead } from "../lib/progress.ts";
import { canSpeak, preloadClip, speak } from "../lib/speech.ts";
import { framesOf, resolveFrames, resolveLooks } from "../lib/view.ts";
import { clipUrl } from "../lib/voice.ts";
import { eraMeta, eraOf, yearText } from "../lib/year.ts";
import { CARDS } from "../stories/catalog.ts";
import type { Speaker, Story } from "../stories/types.ts";
import { lineMemory } from "./lineMemory.ts";

const NAME: Record<Speaker, string> = { nian: "小念", dad: "爸爸" };
const PAUSE = 650;

function groupKeyFor(story: Story, mode: typeof lineMemory.mode): string {
  if (mode === "era") return `era:${eraOf(story.year)}`;
  if (mode === "region") return `region:${story.region}`;
  return `field:${story.field}`;
}

export function StoryPage({ story, initialStep }: { story: Story; initialStep: number }) {
  const looks = useMemo(() => resolveLooks(story.lines), [story]);
  const frames = useMemo(() => resolveFrames(story.frame, story.lines), [story]);
  const allFrames = useMemo(() => framesOf(story), [story]);
  const era = eraMeta(eraOf(story.year));
  const last = story.lines.length - 1;
  const [step, setStep] = useState(initialStep);
  const [pinned, setPinned] = useState<number | null>(null);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const shownLine = pinned ?? step;
  const frame = frames[shownLine];
  const done = step >= last;
  const hasClips = useMemo(() => story.lines.some((l) => clipUrl(story.id, l)), [story]);

  useEffect(() => {
    lineMemory.open = groupKeyFor(story, lineMemory.mode);
    lineMemory.picked = `s:${story.id}`;
  }, [story]);

  useEffect(() => {
    if (done) markRead(story.id);
  }, [done, story.id]);

  useEffect(() => {
    history.replaceState(null, "", `#/story/${story.id}/${step + 1}`);
  }, [story.id, step]);

  // 下一句要换图的话先把图下好，翻过去不用等
  const upcoming = frames[step + 1];
  useEffect(() => {
    if (upcoming && upcoming !== frames[step]) {
      const img = new Image();
      img.decoding = "async";
      img.src = upcoming.src;
    }
  }, [upcoming, frames, step]);

  const go = useCallback((to: number) => {
    setPinned(null);
    setStep(Math.max(0, Math.min(last, to)));
  }, [last]);

  const toggleListen = useCallback(() => {
    setListening((prev) => {
      if (!prev && step >= last) {
        setPinned(null);
        setStep(0);
      }
      return !prev;
    });
  }, [step, last]);

  useEffect(() => {
    if (!listening) {
      setSpeaking(false);
      return;
    }
    const line = story.lines[step];
    const nextLine = story.lines[step + 1];
    if (nextLine) preloadClip(clipUrl(story.id, nextLine));
    let timer = 0;
    setSpeaking(true);
    const stop = speak(
      line.who,
      line.say,
      () => {
        setSpeaking(false);
        if (step >= last) setListening(false);
        else timer = window.setTimeout(() => go(step + 1), PAUSE);
      },
      clipUrl(story.id, line),
      () => {
        setSpeaking(false);
        setListening(false);
      },
    );
    return () => {
      stop();
      clearTimeout(timer);
      setSpeaking(false);
    };
  }, [listening, step, story, last, go]);

  useEffect(() => () => {
    if (canSpeak()) speechSynthesis.cancel();
  }, []);

  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.target instanceof HTMLElement && e.target.closest("a, input, textarea, summary")) return;
      if (e.key === " " && e.target instanceof HTMLButtonElement) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(step + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(step - 1);
      }
    };
    addEventListener("keydown", on);
    return () => removeEventListener("keydown", on);
  }, [go, step]);

  const latest = useRef<HTMLLIElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) scrollTo(0, 0);
    latest.current?.scrollIntoView({ behavior: mounted.current ? "smooth" : "auto", block: "nearest" });
    mounted.current = true;
  }, [step]);

  const index = CARDS.findIndex((s) => s.id === story.id);
  const prev = CARDS[index - 1];
  const next = CARDS[index + 1];

  return (
    <div className="app story-page" data-snap data-lines={story.lines.length}>
      <nav className="topbar">
        <a className="back" href="#/">← 回到故事绳</a>
        <span className="topbar-title"><span className="yr">{yearText(story)}</span>{story.person}</span>
        {(canSpeak() || hasClips) && (
          <button type="button" className={listening ? "btn play small on" : "btn play small"} aria-pressed={listening}
            onClick={toggleListen}>
            {listening ? "■ 停下" : "▶ 听问答"}
          </button>
        )}
      </nav>

      <div className="story-grid">
        <section className="stage-col" aria-label="人物图像与地理坐标">
          <FrameStage key={frame.src} frame={frame} spots={looks[shownLine]} />
          <p className="frame-caption">
            {frame === story.frame
              ? <><strong>{story.person}</strong> · {story.when}</>
              : <strong>{frame.title}</strong>}
            {" "}· {frame.kind} · {frame.by}
          </p>
          {frame.note && <p className="frame-note">{frame.note}</p>}
          <div className="stage-geo">
            <WorldPin place={story.place} region={story.region} coords={story.coords} journey={story.journey} />
          </div>
        </section>

        <section className="talk-col" aria-label="小念和爸爸的问答">
          <header className="talk-head">
            <p className="talk-kicker">
              <span className="chip">{story.field}</span>
              <span>{era.icon} {era.name}</span>
              <span>· {story.region} · {story.lifeSpan}</span>
            </p>
            <h1>{story.title}</h1>
            <details className="mobile-stage-meta">
              <summary>📍 {story.place}{frame.note ? " · 查看图注与地图" : " · 查看世界坐标"}</summary>
              {frame.note && <p className="mobile-frame-note">{frame.note}</p>}
              <WorldPin place={story.place} region={story.region} coords={story.coords} journey={story.journey} compact />
            </details>
          </header>

          <ol className="talk">
            {story.lines.slice(0, step + 1).map((line, i) => {
              const face = line.face ?? inferExpression(line.who, line.say);
              const talking = speaking && i === step;
              return (
                <li key={i} ref={i === step ? latest : undefined}>
                  {line.part && <h2 className="part"><span>{line.part}</span></h2>}
                  <button type="button"
                    className={`say ${line.who}${i === shownLine ? " current" : ""}${looks[i].length ? " points" : ""}${talking ? " speaking" : ""}`}
                    onClick={() => {
                      if (i === step) go(step + 1);
                      else {
                        setListening(false);
                        setPinned(i === pinned ? null : i);
                      }
                    }}>
                    <span className="who" aria-hidden="true">
                      <Avatar who={line.who} face={face} talking={talking} />
                    </span>
                    <span className="bubble">
                      <span className="name">{NAME[line.who]}</span>
                      <span className="text">{line.say}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {done && (
            <div className="ending">
              <section className="remember">
                <h2>一句话记住</h2>
                <p>{story.remember}</p>
              </section>
              <section className="facts">
                <h2>人物与时代小档案</h2>
                <dl>
                  <div><dt>主人公</dt><dd>{story.person}（{story.lifeSpan}）</dd></div>
                  <div><dt>领域与时期</dt><dd>{story.field} · {era.name}</dd></div>
                  <div><dt>地理坐标</dt><dd>{story.region} · {story.place}</dd></div>
                  {story.facts.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                  <div>
                    <dt>图片许可</dt>
                    <dd>
                      {allFrames.length === 1
                        ? story.frame.license
                        : allFrames.map((f) => `${f === story.frame ? story.person : f.title}：${f.license}`).join("；")}
                    </dd>
                  </div>
                </dl>
                <h3>想知道更多</h3>
                <ul className="sources">
                  {story.sources.map((s) => (
                    <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></li>
                  ))}
                </ul>
              </section>
              <nav className="story-nav">
                {prev ? <a className="btn ghost" href={`#/story/${prev.id}`}>← {yearText(prev)} {prev.person}</a> : <span />}
                {next ? <a className="btn" href={`#/story/${next.id}`}>{yearText(next)} {next.person} →</a> : <a className="btn" href="#/">回到故事绳</a>}
              </nav>
            </div>
          )}

          <div className="controls">
            <button type="button" className="btn ghost" onClick={() => go(step - 1)} disabled={step === 0}>上一句</button>
            <span className="progress" aria-live="polite">{step + 1} / {story.lines.length}</span>
            {done
              ? <button type="button" className="btn ghost" onClick={() => go(0)}>从头再听</button>
              : <button type="button" className="btn" onClick={() => go(step + 1)}>下一句</button>}
            <button type="button" className="link-btn" onClick={() => go(last)} disabled={done}>全部展开</button>
          </div>
          <p className="talk-hint">按 ← → 翻句 · 点前面气泡可回看图上圈点</p>
        </section>
      </div>
    </div>
  );
}
