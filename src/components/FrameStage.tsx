import { useId, useLayoutEffect, useRef, useState } from "react";
import { viewFor } from "../lib/view.ts";
import type { Frame, Spot } from "../stories/types.ts";

const VB = 1000;
const aspectCache = new Map<string, number>();

function labelY(s: Spot, h: number, k: number) {
  const above = s.y * h - s.r * VB - 12 * k;
  return above > 34 * k ? above : s.y * h + s.r * VB + 36 * k;
}

export function FrameStage({ frame, spots }: { frame: Frame; spots: readonly Spot[] }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [aspect, setAspect] = useState<number | null>(() => aspectCache.get(frame.src) ?? null);
  const maskId = useId();

  useLayoutEffect(() => {
    const cached = aspectCache.get(frame.src);
    if (cached) {
      setAspect(cached);
      return;
    }
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      const ratio = img.naturalHeight / img.naturalWidth;
      aspectCache.set(frame.src, ratio);
      setAspect(ratio);
    } else {
      setAspect(null);
    }
  }, [frame.src]);

  const a = aspect ?? 1;
  const view = aspect ? viewFor(spots, a) : { scale: 1, x: 0, y: 0 };
  const h = VB * a;
  const k = 1 / view.scale;
  const spotsKey = spots.map((s) => `${s.x},${s.y},${s.r}`).join(";");

  return (
    <div className={frame.dark ? "frame-box dark" : "frame-box"}
      style={{ aspectRatio: `1 / ${a}`, ["--aspect" as string]: a }}>
      <div className="zoomer" style={{ transform: `translate(${view.x * 100}%, ${view.y * 100}%) scale(${view.scale})` }}>
        <img ref={imgRef} src={frame.src} alt={frame.alt} draggable={false}
          onLoad={(e) => {
            if (!e.currentTarget.naturalWidth) return;
            const ratio = e.currentTarget.naturalHeight / e.currentTarget.naturalWidth;
            aspectCache.set(frame.src, ratio);
            setAspect(ratio);
          }} />
        {aspect && spots.length > 0 && (
          <svg className="spots" key={spotsKey} viewBox={`0 0 ${VB} ${h}`} preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <mask id={maskId}>
                <rect width={VB} height={h} fill="#fff" />
                {spots.map((s, i) => <circle key={i} cx={s.x * VB} cy={s.y * h} r={s.r * VB} fill="#000" />)}
              </mask>
            </defs>
            <rect className="shade" width={VB} height={h} mask={`url(#${maskId})`} />
            {spots.map((s, i) => (
              <g key={i}>
                <circle className="ring" cx={s.x * VB} cy={s.y * h} r={s.r * VB} strokeWidth={5 * k} strokeDasharray={`${14 * k} ${9 * k}`} />
                {s.label && (
                  <text className="label" x={s.x * VB} y={labelY(s, h, k)} fontSize={34 * k} strokeWidth={9 * k}>
                    {s.label}
                  </text>
                )}
              </g>
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}
