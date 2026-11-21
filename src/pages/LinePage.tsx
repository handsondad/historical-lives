import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Avatar } from "../components/Avatar.tsx";
import { WorldOverview, WorldPin } from "../components/WorldPin.tsx";
import { loadReadIds } from "../lib/progress.ts";
import { thumbOf } from "../lib/view.ts";
import { yearText } from "../lib/year.ts";
import { ASPECTS, CARDS, type Credit, type StoryCard } from "../stories/catalog.ts";
import { groupsOf, layout, NARROW, slotKey, slotsOf, WIDE, type Group, type Mode } from "./line.ts";
import { lineMemory } from "./lineMemory.ts";
import { prefetchStory } from "./story-loader.ts";
import { useDragScroll } from "./useDragScroll.ts";

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

  const [mode, setMode] = useState(lineMemory.mode);
  const [open, setOpen] = useState(lineMemory.open);
  const [showMap, setShowMap] = useState(false);
  const [readIds] = useState<ReadonlySet<string>>(() => loadReadIds());
  const groups = useMemo(() => groupsOf(CARDS, mode), [mode]);
  const slots = useMemo(() => slotsOf(groups, open), [groups, open]);
  const { items, width } = useMemo(() => layout(slots, size, room), [slots, size, room]);
  const keys = slots.map(slotKey);
  const rowH = open ? size.rowH : size.rowTags;

  const [picked, setPicked] = useState(lineMemory.picked);
  const [peek, setPeek] = useState<string | null>(null);
  const [mapStoryId, setMapStoryId] = useState<string | null>(null);
  const chosen = picked && keys.includes(picked) ? picked : keys[0];
  const shown = peek ?? chosen;
  useEffect(() => {
    Object.assign(lineMemory, { mode, open, picked });
  }, [mode, open, picked]);

  const [edges, setEdges] = useState({ left: false, right: false });
  const updateEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setEdges({
      left: el.scrollLeft > 4,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 4,
    });
  }, []);
  useEffect(updateEdges, [items, room, updateEdges]);

  useEffect(() => {
    const el = scroller.current;
    const banner = items.find((it) => it.slot.kind === "banner");
    const pickedPrint = picked ? items.find((it) => slotKey(it.slot) === picked && it.slot.kind === "print") : undefined;
    if (!el) return;
    const target = pickedPrint
      ? Math.max(0, pickedPrint.x - el.clientWidth / 2)
      : banner
        ? Math.max(0, banner.x - banner.w / 2 - size.pad)
        : 0;
    el.scrollTo({
      left: target,
      behavior: document.body.classList.contains("snap") ? "auto" : "smooth",
    });
  }, [open, mode]);

  const toggle = (g: Group) => {
    setMapStoryId(null);
    setOpen((o) => (o === g.key ? null : g.key));
    setPicked(`g:${g.key}`);
  };
  const switchMode = (m: Mode) => {
    setMapStoryId(null);
    setMode(m);
    setOpen(null);
    setPicked(null);
    setPeek(null);
  };
  const pickOrOpen = (s: StoryCard) => {
    setMapStoryId(null);
    if (chosen === `s:${s.id}`) location.hash = `#/story/${s.id}`;
    else setPicked(`s:${s.id}`);
  };
  const selectFromMap = (s: StoryCard) => {
    setMapStoryId(s.id);
    const group = groups.find((g) => g.stories.some((item) => item.id === s.id));
    if (group) {
      setOpen(group.key);
      setPicked(`s:${s.id}`);
    }
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = keys[keys.indexOf(chosen) + (e.key === "ArrowLeft" ? -1 : 1)];
    if (!next) return;
    e.preventDefault();
    setMapStoryId(null);
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
    onFocus: () => {
      setMapStoryId(null);
      setPicked(key);
    },
  });
  const rope = `M ${size.pad / 2},${size.top} Q ${width / 2},${size.top + size.sag * 2} ${width - size.pad / 2},${size.top}`;
  const shownGroup = shown?.startsWith("g:") ? groups.find((g) => `g:${g.key}` === shown) : undefined;
  const shownStory = (mapStoryId ? CARDS.find((s) => s.id === mapStoryId) : undefined)
    ?? (shown?.startsWith("s:") ? CARDS.find((s) => `s:${s.id}` === shown) : undefined);
  const openGroup = groups.find((g) => g.key === open);
  const lineClass = size === NARROW ? "line compact" : "line";
  const railClass = [
    "line-rail",
    edges.left ? "more-left" : "",
    edges.right ? "more-right" : "",
  ].filter(Boolean).join(" ");

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

      <section className={lineClass} aria-label="人类故事晾衣绳">
        <div className="line-bar">
          <div className="modes" role="tablist" aria-label="绳子怎么分">
            {MODES.map((m) => (
              <button key={m.id} role="tab" aria-selected={mode === m.id} onClick={() => switchMode(m.id)}>{m.label}</button>
            ))}
          </div>
          <nav className="crumbs" aria-label="现在打开的一类">
            <button className={openGroup ? "" : "here"} onClick={() => { setOpen(null); setPicked(null); setMapStoryId(null); }}>全部 {CARDS.length} 个故事</button>
            {openGroup && (
              <>
                <span className="sep" aria-hidden="true">›</span>
                <button className="here" style={tone(openGroup)} onClick={() => { setPicked(`g:${openGroup.key}`); setMapStoryId(null); }}>
                  {openGroup.icon} {openGroup.name}
                </button>
              </>
            )}
          </nav>
          <div className="line-tools">
            {readIds.size > 0 && (
              <span className="read-progress" title="已经听完的故事数量">
                ⭐ 已听 {readIds.size}/{CARDS.length}
              </span>
            )}
            <button
              type="button"
              className={showMap ? "map-toggle on" : "map-toggle"}
              aria-expanded={showMap}
              onClick={() => setShowMap((v) => !v)}
            >
              🗺️ {showMap ? "收起足迹图" : "世界足迹图"}
            </button>
          </div>
        </div>

        {showMap && (
          <WorldOverview
            stories={CARDS}
            activeId={shownStory?.id}
            readIds={readIds}
            onSelect={selectFromMap}
          />
        )}

        <div className={railClass}>
        <div className="line-scroll" ref={scroller} onScroll={updateEdges}>
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
                          {g.stories.slice(0, 4).map((s) => <Mini key={s.id} story={s} photo={false} />)}
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
                const read = readIds.has(s.id);
                return (
                  <button key={key} {...slotProps(key)} className="print" style={pos} onClick={() => pickOrOpen(s)}
                    onDoubleClick={() => { location.hash = `#/story/${s.id}`; }}
                    aria-label={`${yearText(s)} 年，${s.person}：${s.title}${read ? "（已听完）" : ""}`}>
                    <span className="peg" aria-hidden="true" />
                    <span className="sheet">
                      {read && <span className="read-badge" aria-hidden="true" title="已听完">★</span>}
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
        </div>
        <p className="line-hint">
          {openGroup
            ? "按住绳子左右拖 · 点一位人物看简介，再点一下开启问答 · 点旗子收起"
            : `切换「按领域 / 按时期 / 按地理」 · 点分类牌挂上绳子${room && width > room + 4 ? " · 按住左右拖" : ""}`}
        </p>
      </section>

      {shownStory ? <Preview story={shownStory} read={readIds.has(shownStory.id)} /> : shownGroup && (
        <GroupPreview group={shownGroup} isOpen={open === shownGroup.key} readIds={readIds} onToggle={() => toggle(shownGroup)} />
      )}

      <Credits />
    </div>
  );
}

/** 分类牌和分类卡片上的小圆片。收起的分类只写人名的第一个字（photo=false）：首页一打开不用先下一堆图，点开哪一类再读哪一类 */
function Mini({ story, photo }: { story: StoryCard; photo: boolean }) {
  return photo
    ? <img className="mini" src={thumbOf(story.frame.src)} alt="" draggable={false} loading="lazy" />
    : <span className="mini letter">{story.person.slice(0, 1)}</span>;
}

function GroupPreview({ group, isOpen, readIds, onToggle }: {
  group: Group;
  isOpen: boolean;
  readIds: ReadonlySet<string>;
  onToggle: () => void;
}) {
  return (
    <article className="preview group-preview" key={group.key} style={tone(group)} aria-live="polite">
      <div className="mosaic" aria-hidden="true">
        {group.stories.slice(0, 6).map((s) => <Mini key={s.id} story={s} photo={isOpen} />)}
        {!isOpen && <span className="mosaic-hint">挂上晾衣绳，图才显出来</span>}
      </div>
      <div className="preview-info">
        <h2>{group.icon} {group.name}</h2>
        <p className="teaser">{group.note}</p>
        <p className="people">这一类有 {group.stories.length} 个人类故事：</p>
        <div className="kids">
          {group.stories.map((s) => (
            <a key={s.id} className={readIds.has(s.id) ? "kid read" : "kid"} href={`#/story/${s.id}`}>
              {readIds.has(s.id) ? "★ " : ""}{s.person} <small>{yearText(s)} · {s.region}</small>
            </a>
          ))}
        </div>
        <button type="button" className="btn" onClick={onToggle}>{isOpen ? "收起这一类" : "挂上晾衣绳"}</button>
      </div>
    </article>
  );
}

function Preview({ story, read }: { story: StoryCard; read: boolean }) {
  // 看着简介的时候就把问答先下好，点进去不用等
  useEffect(() => prefetchStory(story.id), [story.id]);
  const aspect = ASPECTS[story.frame.src] ?? 1;
  return (
    <article className="preview" key={story.id} aria-live="polite">
      <a className="preview-frame" href={`#/story/${story.id}`} aria-label={`进入问答故事：${story.title}`}>
        <img src={story.frame.src} alt={story.frame.alt} width={1000} height={Math.round(1000 * aspect)} decoding="async" />
      </a>
      <div className="preview-info">
        <p className="preview-when">
          <span className="year">{yearText(story)}</span>
          <span>{story.when}</span>
          <span className="chip">{story.field}</span>
          <span className="chip region-chip">{story.region}</span>
          {read && <span className="chip read-chip">★ 已听完</span>}
        </p>
        <p className="preview-frame-name">{story.person}（{story.lifeSpan}）</p>
        <h2>{story.title}</h2>
        <p className="teaser">{story.teaser}</p>
        <WorldPin place={story.place} region={story.region} coords={story.coords} journey={story.journey} compact />
        <a className="btn" href={`#/story/${story.id}`}>{read ? "再听一遍问答" : "小念和爸爸开讲"}</a>
      </div>
    </article>
  );
}

function Credits() {
  // 署名清单一般没人点开，点开时才加载
  const [credits, setCredits] = useState<readonly Credit[] | null>(null);
  const [failed, setFailed] = useState(false);
  const load = () => {
    if (credits) return;
    setFailed(false);
    import("../stories/credits.json").then((m) => setCredits(m.default as readonly Credit[]), () => setFailed(true));
  };
  return (
    <details className="credits" onToggle={(e) => { if (e.currentTarget.open) load(); }}>
      <summary>图片与史料说明</summary>
      <p>小念和爸爸的问答根据公开史料与传记改写；人物画像与历史照片来自 Wikimedia Commons，许可附在每一项后。</p>
      {credits ? (
        <ul>
          {credits.map((f) => (
            <li key={f.src}>
              <strong>{f.name}</strong>（{yearText(f)}）：{f.by}。{f.license}。
              <a href={f.page} target="_blank" rel="noreferrer">出处</a>
            </li>
          ))}
        </ul>
      ) : failed
        ? <p>清单没有加载出来，<button type="button" className="link-btn" onClick={load}>再试一次</button></p>
        : <p>正在翻清单……</p>}
    </details>
  );
}
