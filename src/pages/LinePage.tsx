import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Avatar } from "../components/Avatar.tsx";
import { WorldPin } from "../components/WorldPin.tsx";
import { framesOf, thumbOf } from "../lib/view.ts";
import { yearText } from "../lib/year.ts";
import { STORIES } from "../stories/index.ts";
import type { Story } from "../stories/types.ts";
import { groupsOf, layout, NARROW, slotKey, slotsOf, WIDE, type Group, type Mode } from "./line.ts";
import { useDragScroll } from "./useDragScroll.ts";

const memory: { mode: Mode; open: string | null; picked: string | null } = { mode: "field", open: null, picked: null };

const MODES: { id: Mode; label: string }[] = [
  { id: "field", label: "🧭 按领域" },
  { id: "era", label: "🕰️ 按时期" },
  { id: "region", label: "🌍 按地理" },
];

const tone = (g: Group) => ({ "--c": g.color }) as CSSProperties;

export function LinePage() {
  const scroller = useRef<HTMLDivElement>(null);
  useDragScroll(scroller);
  const [room, setRoom] = useState(0);
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setRoom(Math.max(0, el.clientWidth - 2)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const size = room && room < 600 ? NARROW : WIDE;

  const [mode, setMode] = useState(memory.mode);
  const [open, setOpen] = useState(memory.open);
  const groups = useMemo(() => groupsOf(STORIES, mode), [mode]);
  const slots = useMemo(() => slotsOf(groups, open), [groups, open]);
  const { items, width } = useMemo(() => layout(slots, size, room), [slots, size, room]);
  const keys = slots.map(slotKey);
  const rowH = open ? size.rowH : size.rowTags;

  const [picked, setPicked] = useState(memory.picked);
  const [peek, setPeek] = useState<string | null>(null);
  const chosen = picked && keys.includes(picked) ? picked : keys[0];
  const shown = peek ?? chosen;
  useEffect(() => {
    Object.assign(memory, { mode, open, picked });
  }, [mode, open, picked]);

  useEffect(() => {
    const el = scroller.current;
    const banner = items.find((it) => it.slot.kind === "banner");
    if (!el) return;
    el.scrollTo({
      left: banner ? Math.max(0, banner.x - banner.w / 2 - size.pad) : 0,
      behavior: document.body.classList.contains("snap") ? "auto" : "smooth",
    });
  }, [open, mode]);

  const toggle = (g: Group) => {
    setOpen((o) => (o === g.key ? null : g.key));
    setPicked(`g:${g.key}`);
  };
  const switchMode = (m: Mode) => {
    setMode(m);
    setOpen(null);
    setPicked(null);
    setPeek(null);
  };
  const pickOrOpen = (s: Story) => {
    if (chosen === `s:${s.id}`) location.hash = `#/story/${s.id}`;
    else setPicked(`s:${s.id}`);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = keys[keys.indexOf(chosen) + (e.key === "ArrowLeft" ? -1 : 1)];
    if (!next) return;
    e.preventDefault();
    setPicked(next);
    const el = document.getElementById(`slot-${next}`);
    el?.focus();
    el?.scrollIntoView({ inline: "nearest", block: "nearest" });
  };

  const slotProps = (key: string) => ({
    id: `slot-${key}`,
    role: "option",
    "aria-selected": key === chosen,
    tabIndex: key === chosen ? 0 : -1,
    "data-on": key === shown || undefined,
    onMouseEnter: () => setPeek(key),
    onFocus: () => setPicked(key),
  });
  const rope = `M ${size.pad / 2},${size.top} Q ${width / 2},${size.top + size.sag * 2} ${width - size.pad / 2},${size.top}`;
  const shownGroup = shown?.startsWith("g:") ? groups.find((g) => `g:${g.key}` === shown) : undefined;
  const shownStory = shown?.startsWith("s:") ? STORIES.find((s) => `s:${s.id}` === shown) : undefined;
  const openGroup = groups.find((g) => g.key === open);

  return (
    <div className="app line-page" data-snap>
      <header className="hero">
        <div className="hero-hosts" aria-hidden="true">
          <span className="hero-avatar"><Avatar who="nian" face="curious" /></span>
          <span className="hero-badge">一问 · 一答</span>
          <span className="hero-avatar"><Avatar who="dad" face="happy" /></span>
        </div>
        <h1>人类故事集</h1>
        <p>小念和爸爸一问一答，走近不同领域、不同时期与不同地理的真实人生</p>
      </header>

      <section className={size === NARROW ? "line compact" : "line"} aria-label="人类故事晾衣绳">
        <div className="line-bar">
          <div className="modes" role="tablist" aria-label="绳子怎么分">
            {MODES.map((m) => (
              <button key={m.id} role="tab" aria-selected={mode === m.id} onClick={() => switchMode(m.id)}>{m.label}</button>
            ))}
          </div>
          <nav className="crumbs" aria-label="现在打开的一类">
            <button className={openGroup ? "" : "here"} onClick={() => { setOpen(null); setPicked(null); }}>全部 {STORIES.length} 个故事</button>
            {openGroup && (
              <>
                <span className="sep" aria-hidden="true">›</span>
                <button className="here" style={tone(openGroup)} onClick={() => setPicked(`g:${openGroup.key}`)}>
                  {openGroup.icon} {openGroup.name}
                </button>
              </>
            )}
          </nav>
        </div>

        <div className="line-scroll" ref={scroller}>
          <div className="line-track" style={{ width, height: rowH }} onMouseLeave={() => setPeek(null)}>
            <svg className="rope" width={width} height={size.top + size.sag + 20} aria-hidden="true">
              <path d={rope} />
            </svg>
            <span className="pole" style={{ left: size.pad / 2 - 9, height: rowH - 24 }} aria-hidden="true" />
            <span className="pole" style={{ left: width - size.pad / 2 - 9, height: rowH - 24 }} aria-hidden="true" />
            <div role="listbox" aria-label={openGroup ? `${openGroup.name}的故事，从早到晚` : "分类"} aria-orientation="horizontal" onKeyDown={onKey}>
              {items.map(({ slot, x, y, w, tilt }) => {
                const key = slotKey(slot);
                const pos = { left: x - w / 2, width: w, top: size.top + y - 10, ["--tilt" as string]: `${tilt}deg` };
                if (slot.kind === "tag") {
                  const g = slot.group;
                  return (
                    <button key={key} {...slotProps(key)} className="tag" aria-expanded={false}
                      aria-label={`${g.name}，${g.stories.length} 个故事，点开`} style={{ ...pos, ...tone(g) }} onClick={() => toggle(g)}>
                      <span className="peg" aria-hidden="true" />
                      <span className="tag-card">
                        <span className="tag-icon" aria-hidden="true">{g.icon}</span>
                        <span className="tag-name">{g.name}</span>
                        <span className="tag-stack" aria-hidden="true">
                          {g.stories.slice(0, 4).map((s) => <img key={s.id} className="mini" src={thumbOf(s.frame.src)} alt="" draggable={false} loading="lazy" />)}
                        </span>
                        <span className="tag-count">{g.stories.length} 个 · 点开</span>
                      </span>
                    </button>
                  );
                }
                if (slot.kind === "banner") {
                  const g = slot.group;
                  return (
                    <button key={key} {...slotProps(key)} className="banner" aria-expanded
                      aria-label={`${g.name}，已经打开，点一下收起`} style={{ ...pos, top: size.top + y - 4, ...tone(g) }} onClick={() => toggle(g)}>
                      <span className="banner-cloth">
                        <span className="banner-icon" aria-hidden="true">{g.icon}</span>
                        <span className="banner-name">{g.name}</span>
                        <span className="banner-count">{g.stories.length} 个</span>
                        <span className="banner-fold">‹ 收起</span>
                      </span>
                    </button>
                  );
                }
                const s = slot.story;
                return (
                  <button key={key} {...slotProps(key)} className="print" style={pos} onClick={() => pickOrOpen(s)}
                    onDoubleClick={() => { location.hash = `#/story/${s.id}`; }}
                    aria-label={`${yearText(s)} 年，${s.person}：${s.title}`}>
                    <span className="peg" aria-hidden="true" />
                    <span className="sheet">
                      <img src={thumbOf(s.frame.src)} alt="" draggable={false} loading="lazy" />
                      <span className="cap-year">{yearText(s)}</span>
                      <span className="cap-name">{s.person}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <p className="line-hint">
          {openGroup
            ? "按住绳子左右拖 · 点一位人物看简介，再点一下开启问答 · 点旗子收起"
            : `切换「按领域 / 按时期 / 按地理」 · 点分类牌挂上绳子${room && width > room + 4 ? " · 按住左右拖" : ""}`}
        </p>
      </section>

      {shownStory ? <Preview story={shownStory} /> : shownGroup && (
        <GroupPreview group={shownGroup} isOpen={open === shownGroup.key} onToggle={() => toggle(shownGroup)} />
      )}

      <Credits />
    </div>
  );
}

function GroupPreview({ group, isOpen, onToggle }: { group: Group; isOpen: boolean; onToggle: () => void }) {
  return (
    <article className="preview group-preview" key={group.key} style={tone(group)} aria-live="polite">
      <div className="mosaic" aria-hidden="true">
        {group.stories.slice(0, 6).map((s) => <img key={s.id} className="mini" src={thumbOf(s.frame.src)} alt="" loading="lazy" />)}
      </div>
      <div className="preview-info">
        <h2>{group.icon} {group.name}</h2>
        <p className="teaser">{group.note}</p>
        <p className="people">这一类有 {group.stories.length} 个人类故事：</p>
        <div className="kids">
          {group.stories.map((s) => (
            <a key={s.id} className="kid" href={`#/story/${s.id}`}>{s.person} <small>{yearText(s)} · {s.region}</small></a>
          ))}
        </div>
        <button type="button" className="btn" onClick={onToggle}>{isOpen ? "收起这一类" : "挂上晾衣绳"}</button>
      </div>
    </article>
  );
}

function Preview({ story }: { story: Story }) {
  return (
    <article className="preview" key={story.id} aria-live="polite">
      <a className="preview-frame" href={`#/story/${story.id}`} aria-label={`进入问答故事：${story.title}`}>
        <img src={story.frame.src} alt={story.frame.alt} />
      </a>
      <div className="preview-info">
        <p className="preview-when">
          <span className="year">{yearText(story)}</span>
          <span>{story.when}</span>
          <span className="chip">{story.field}</span>
          <span className="chip region-chip">{story.region}</span>
        </p>
        <p className="preview-frame-name">{story.person}（{story.lifeSpan}）</p>
        <h2>{story.title}</h2>
        <p className="teaser">{story.teaser}</p>
        <WorldPin place={story.place} region={story.region} coords={story.coords} journey={story.journey} compact />
        <a className="btn" href={`#/story/${story.id}`}>小念和爸爸开讲</a>
      </div>
    </article>
  );
}

function Credits() {
  return (
    <details className="credits">
      <summary>图片与史料说明</summary>
      <p>小念和爸爸的问答根据公开史料与传记改写；人物画像与历史照片来自 Wikimedia Commons，许可附在每一项后。</p>
      <ul>
        {STORIES.flatMap((s) => framesOf(s).map((f) => (
          <li key={f.src}>
            <strong>{f === s.frame ? s.person : f.title}</strong>（{yearText(s)}）：{f.by}。{f.license}。
            <a href={f.page} target="_blank" rel="noreferrer">出处</a>
          </li>
        )))}
      </ul>
    </details>
  );
}
