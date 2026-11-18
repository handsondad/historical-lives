import type { Expression, Speaker } from "../stories/types.ts";

const INK = "#3d3027";
const EYE = "#2b201a";
const MOUTH = "#b5413a";

/** 没手写 face 时，按台词末尾标点挑一个自然表情 */
export function inferExpression(who: Speaker, text: string): Expression {
  if (/[？?]\s*$/.test(text)) return "curious";
  if (/[！!]\s*$/.test(text)) return who === "nian" ? "surprised" : "happy";
  if (/……|\.\.\./.test(text)) return "thinking";
  return who === "dad" ? "neutral" : "happy";
}

type Props = {
  who: Speaker;
  face?: Expression;
  talking?: boolean;
};

/** 照着 storyverse 的小念、爸爸画的 SVG 小头像：圆脸、深棕描边、小念刺猬头、爸爸戴眼镜 */
export function Avatar({ who, face = "neutral", talking = false }: Props) {
  const isNian = who === "nian";
  const skin = isNian ? "#ffd9b8" : "#f6cfa8";
  const hair = isNian ? "#3b2a20" : "#2a211c";
  const bg = isNian ? "#ffe6c4" : "#dce9ff";

  return (
    <svg className="avatar-svg" viewBox="-115 -125 230 230" aria-hidden="true">
      <circle cx={0} cy={-10} r={112} fill={bg} />
      {/* 小衣领 */}
      <path d="M -52,95 Q 0,68 52,95 L 62,115 L -62,115 Z" fill={isNian ? "#ff9f43" : "#5b8def"} stroke={INK} strokeWidth={7} strokeLinejoin="round" />
      {/* 耳朵 */}
      <circle cx={-68} cy={8} r={14} fill={skin} stroke={INK} strokeWidth={6} />
      <circle cx={68} cy={8} r={14} fill={skin} stroke={INK} strokeWidth={6} />
      {/* 脸 */}
      <ellipse cx={0} cy={0} rx={68} ry={66} fill={skin} stroke={INK} strokeWidth={7} />
      {/* 腮红 */}
      <ellipse cx={-39} cy={24} rx={11} ry={6} fill="#ff7b7b" opacity={isNian ? 0.36 : 0.18} />
      <ellipse cx={39} cy={24} rx={11} ry={6} fill="#ff7b7b" opacity={isNian ? 0.36 : 0.18} />

      {/* 眉毛 */}
      <BrowPair face={face} hair={hair} />
      {/* 眼睛 */}
      <EyePair face={face} isNian={isNian} />
      {/* 爸爸的眼镜 */}
      {!isNian && (
        <g fill="#ffffff" fillOpacity={0.22} stroke={INK} strokeWidth={5.5}>
          <rect x={-44} y={-8} width={34} height={24} rx={8} />
          <rect x={10} y={-8} width={34} height={24} rx={8} />
          <path d="M -10,2 Q 0,-4 10,2" fill="none" />
        </g>
      )}
      {/* 鼻子和嘴 */}
      <path d="M -3,18 q 3,4 6,0" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" opacity={0.55} />
      <MouthShape face={face} talking={talking} />

      {/* 头发 */}
      {isNian ? (
        <path
          d="M -70,4 C -76,-42 -52,-76 -22,-80 L -14,-100 L 2,-80 L 22,-96 L 28,-77 C 58,-72 76,-42 70,4 L 60,-8 L 52,-28 L 38,-18 L 28,-35 L 14,-20 L 0,-38 L -14,-21 L -28,-36 L -42,-20 L -56,-30 Z"
          fill={hair}
          stroke={INK}
          strokeWidth={7}
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M -69,-2 C -74,-52 -38,-82 4,-80 C 44,-79 74,-50 69,-2 L 62,-18 C 54,-38 35,-46 14,-44 C -6,-42 -22,-48 -30,-58 C -40,-40 -54,-34 -62,-16 Z"
          fill={hair}
          stroke={INK}
          strokeWidth={7}
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function EyePair({ face, isNian }: { face: Expression; isNian: boolean }) {
  const r = isNian ? 7.5 : 6.5;
  if (face === "happy" || face === "proud") {
    return (
      <g fill="none" stroke={EYE} strokeWidth={6.5} strokeLinecap="round">
        <path d="M -34,6 Q -25,-6 -16,6" />
        <path d="M 16,6 Q 25,-6 34,6" />
      </g>
    );
  }
  if (face === "surprised") {
    return (
      <g>
        {[-25, 25].map((x) => (
          <g key={x}>
            <circle cx={x} cy={3} r={11} fill="#fff" stroke={EYE} strokeWidth={5} />
            <circle cx={x} cy={3} r={5} fill={EYE} />
          </g>
        ))}
      </g>
    );
  }
  if (face === "thinking") {
    return (
      <g>
        {[-25, 25].map((x) => (
          <g key={x}>
            <circle cx={x} cy={3} r={9.5} fill="#fff" stroke={EYE} strokeWidth={4.5} />
            <circle cx={x + 2} cy={0} r={5} fill={EYE} />
          </g>
        ))}
      </g>
    );
  }
  return (
    <g>
      {[-25, 25].map((x) => (
        <g key={x}>
          <circle cx={x} cy={4} r={r} fill={EYE} />
          <circle cx={x - 2.3} cy={1.2} r={2.5} fill="#fff" />
        </g>
      ))}
    </g>
  );
}

function BrowPair({ face, hair }: { face: Expression; hair: string }) {
  const s = { fill: "none", stroke: hair, strokeWidth: 6, strokeLinecap: "round" as const };
  if (face === "curious") {
    return (
      <g {...s}>
        <path d="M -36,-14 Q -25,-18 -14,-14" />
        <path d="M 14,-21 Q 25,-26 36,-18" />
      </g>
    );
  }
  if (face === "surprised" || face === "happy" || face === "proud") {
    return (
      <g {...s}>
        <path d="M -36,-18 Q -25,-24 -14,-18" />
        <path d="M 14,-18 Q 25,-24 36,-18" />
      </g>
    );
  }
  if (face === "sad") {
    return (
      <g {...s}>
        <path d="M -36,-12 Q -25,-19 -14,-17" />
        <path d="M 14,-17 Q 25,-19 36,-12" />
      </g>
    );
  }
  return (
    <g {...s}>
      <path d="M -36,-14 Q -25,-17 -14,-14" />
      <path d="M 14,-14 Q 25,-17 36,-14" />
    </g>
  );
}

function MouthShape({ face, talking }: { face: Expression; talking: boolean }) {
  if (talking) {
    return <path d="M -11,30 Q 0,48 11,30 Q 0,27 -11,30 Z" fill={MOUTH} stroke={INK} strokeWidth={5} strokeLinejoin="round" />;
  }
  if (face === "surprised") {
    return <ellipse cx={0} cy={35} rx={7} ry={9} fill={MOUTH} stroke={INK} strokeWidth={5} />;
  }
  if (face === "happy" || face === "proud") {
    return <path d="M -15,29 Q 0,48 15,29 Q 0,32 -15,29 Z" fill={MOUTH} stroke={INK} strokeWidth={5} strokeLinejoin="round" />;
  }
  if (face === "curious" || face === "thinking") {
    return <path d="M -6,34 Q 3,37 11,31" fill="none" stroke={INK} strokeWidth={5.5} strokeLinecap="round" />;
  }
  if (face === "sad") {
    return <path d="M -11,38 Q 0,28 11,38" fill="none" stroke={INK} strokeWidth={5.5} strokeLinecap="round" />;
  }
  return <path d="M -12,31 Q 0,42 12,31" fill="none" stroke={INK} strokeWidth={5.5} strokeLinecap="round" />;
}
