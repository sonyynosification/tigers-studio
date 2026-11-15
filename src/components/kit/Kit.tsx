import type { CSSProperties, SVGProps } from "react";

/**
 * Kit — the tigers.build mascot.
 *
 * Brand Kit = the "cheeky" remix + code stripes:
 *   notched ear · </> forehead stripes · stripe patch over one eye · one fang
 *
 * Pure SVG, no hooks, so it renders in server components. Interactive
 * behaviour (eye tracking, roar) lives in <InteractiveKit />, which drives the
 * pupils through the --kit-ex / --kit-ey CSS variables.
 */

export type KitEyes = "open" | "sleepy" | "wink";
export type KitMouth = "blep" | "classic" | "fang" | "roar";

export type KitOptions = {
  ear?: "notch" | "normal";
  mark?: "code" | "classic";
  eyes?: KitEyes;
  /** Dark stripe patch around Kit's left eye (viewer's right). */
  patch?: boolean;
  mouth?: KitMouth;
  /** Sitting body with tail and paws. */
  body?: boolean;
  /** Mint scarf (implies body). */
  scarf?: boolean;
};

export const BRAND_KIT: Required<KitOptions> = {
  ear: "notch",
  mark: "code",
  eyes: "open",
  patch: true,
  mouth: "fang",
  body: false,
  scarf: false,
};

const C = {
  ink: "#111",
  fur: "#ff7a1a",
  cream: "#fff8ef",
  earInner: "#ffd9b8",
  nose: "#f4a5b8",
  tongue: "#ff8fa3",
  cheek: "#ff5c8a",
  mint: "#6ee7b7",
};

const line = {
  stroke: C.ink,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
} as const;

type KitProps = KitOptions &
  Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
    /** Accessible label. Omit for decorative use (aria-hidden). */
    title?: string;
  };

export function Kit({
  ear = BRAND_KIT.ear,
  mark = BRAND_KIT.mark,
  eyes = BRAND_KIT.eyes,
  patch = BRAND_KIT.patch,
  mouth = BRAND_KIT.mouth,
  body = BRAND_KIT.body,
  scarf = BRAND_KIT.scarf,
  title,
  ...svg
}: KitProps) {
  const hasBody = body || scarf;
  const viewBox = hasBody ? "-4 -12 228 326" : "-4 -12 228 202";
  const pupils: CSSProperties = {
    transform: "translate(var(--kit-ex, 0px), var(--kit-ey, 0px))",
    transition: "transform 120ms ease-out",
  };

  return (
    <svg
      viewBox={viewBox}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...svg}
    >
      {hasBody && <KitBody />}

      <g transform="translate(10,0)">
        {/* ears */}
        <path d="M38 40 Q30 6 62 20 L58 52Z" fill={C.fur} stroke={C.ink} strokeWidth={6} strokeLinejoin="round" />
        <path
          d={
            ear === "notch"
              ? "M162 40 Q166 20 160 12 L153 24 L147 14 Q141 15 138 20 L142 52Z"
              : "M162 40 Q170 6 138 20 L142 52Z"
          }
          fill={C.fur}
          stroke={C.ink}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <path d={"M44 30 Q42 18 54 24Z" + (ear === "notch" ? "" : " M156 30 Q158 18 146 24Z")} fill={C.earInner} />

        {/* head */}
        <ellipse cx={100} cy={100} rx={82} ry={76} fill={C.fur} stroke={C.ink} strokeWidth={6} />

        {/* forehead */}
        {mark === "code" ? (
          <path d="M80 36 L68 48 L80 60 M120 36 L132 48 L120 60 M106 32 L94 64" strokeWidth={7} {...line} />
        ) : (
          <>
            <path d="M100 26 L92 50 L100 58 L108 50Z" fill={C.ink} />
            <path d="M70 40 Q76 54 70 62 M130 40 Q124 54 130 62" strokeWidth={6} {...line} />
          </>
        )}

        {/* whisker stripes */}
        <path
          d="M22 86 Q40 88 48 98 M20 112 Q38 110 46 118 M178 86 Q160 88 152 98 M180 112 Q162 110 154 118"
          strokeWidth={7}
          {...line}
        />

        {patch && <path d="M110 76 Q132 62 150 80 Q160 100 142 110 Q120 116 112 100Z" fill={C.ink} />}

        {/* muzzle */}
        <ellipse cx={100} cy={132} rx={46} ry={34} fill={C.cream} stroke={C.ink} strokeWidth={5} />

        <KitEyesGroup eyes={eyes} patch={patch} style={pupils} />

        {/* tongue sits under the nose/mouth line */}
        {mouth === "blep" && (
          <path d="M93 144 Q100 162 107 144Z" fill={C.tongue} stroke={C.ink} strokeWidth={2.5} strokeLinejoin="round" />
        )}
        {mouth === "roar" && (
          <>
            <path d="M80 140 Q100 132 120 140 Q118 170 100 172 Q82 170 80 140Z" fill={C.ink} />
            <path d="M88 160 Q100 152 112 160 Q108 170 100 170 Q92 170 88 160Z" fill={C.tongue} />
            <path
              d="M84 141 L90 152 L95 139Z M116 141 L110 152 L105 139Z"
              fill="#fff"
              stroke={C.ink}
              strokeWidth={2}
              strokeLinejoin="round"
            />
          </>
        )}

        {/* nose */}
        <path
          d="M88 118 Q100 112 112 118 Q106 130 100 130 Q94 130 88 118Z"
          fill={C.nose}
          stroke={C.ink}
          strokeWidth={4}
          strokeLinejoin="round"
        />
        {mouth !== "roar" && (
          <path d="M100 130 V140 M100 140 Q90 150 82 142 M100 140 Q110 150 118 142" strokeWidth={4.5} {...line} />
        )}
        {mouth === "fang" && (
          <path d="M105 145 L114 144 L110 156Z" fill="#fff" stroke={C.ink} strokeWidth={2.5} strokeLinejoin="round" />
        )}

        {/* cheeks */}
        <circle cx={52} cy={118} r={9} fill={C.cheek} opacity={0.45} />
        <circle cx={148} cy={118} r={9} fill={C.cheek} opacity={0.45} />
      </g>

      {scarf && (
        <>
          <path
            d="M128 194 L146 230 L158 220 L142 190Z"
            fill={C.mint}
            stroke={C.ink}
            strokeWidth={5}
            strokeLinejoin="round"
          />
          <path
            d="M58 168 Q110 194 162 168 L165 184 Q110 214 55 184Z"
            fill={C.mint}
            stroke={C.ink}
            strokeWidth={5}
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

function KitEyesGroup({ eyes, patch, style }: { eyes: KitEyes; patch: boolean; style: CSSProperties }) {
  if (eyes === "sleepy") {
    return (
      <>
        <path d="M60 94 Q70 102 80 94" strokeWidth={5} {...line} />
        <path d="M120 94 Q130 102 140 94" strokeWidth={5} {...line} stroke={patch ? C.cream : C.ink} />
      </>
    );
  }
  const right =
    eyes === "wink" ? (
      <path d="M120 94 Q130 84 140 94" strokeWidth={5} {...line} stroke={patch ? C.cream : C.ink} />
    ) : (
      <g className="kit-eye" style={style}>
        <ellipse
          cx={130}
          cy={92}
          rx={9}
          ry={11}
          fill={C.ink}
          stroke={patch ? C.cream : undefined}
          strokeWidth={patch ? 3 : undefined}
        />
        <circle cx={133} cy={88} r={3.2} fill="#fff" />
      </g>
    );
  return (
    <>
      <g className="kit-eye" style={style}>
        <ellipse cx={70} cy={92} rx={9} ry={11} fill={C.ink} />
        <circle cx={73} cy={88} r={3.2} fill="#fff" />
      </g>
      {right}
    </>
  );
}

function KitBody() {
  const tail = "M170 262 Q216 262 208 214 Q205 198 194 202";
  return (
    <>
      <path d={tail} stroke={C.ink} strokeWidth={27} strokeLinecap="round" fill="none" />
      <path d={tail} stroke={C.fur} strokeWidth={15} strokeLinecap="round" fill="none" />
      <path d="M207 226 Q208 206 196 202" stroke={C.ink} strokeWidth={15} strokeLinecap="round" fill="none" />
      <ellipse cx={110} cy={236} rx={72} ry={62} fill={C.fur} stroke={C.ink} strokeWidth={6} />
      <ellipse cx={110} cy={248} rx={40} ry={42} fill={C.cream} stroke={C.ink} strokeWidth={4} />
      <path
        d="M41 220 Q56 222 62 232 M40 246 Q54 246 60 256 M179 220 Q164 222 158 232 M180 246 Q166 246 160 256"
        strokeWidth={7}
        {...line}
      />
      <ellipse cx={84} cy={294} rx={22} ry={12} fill={C.fur} stroke={C.ink} strokeWidth={5} />
      <ellipse cx={136} cy={294} rx={22} ry={12} fill={C.fur} stroke={C.ink} strokeWidth={5} />
      <path d="M78 289 V297 M90 289 V297 M130 289 V297 M142 289 V297" strokeWidth={3.5} {...line} />
    </>
  );
}
