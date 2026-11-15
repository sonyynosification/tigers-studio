/**
 * Focus mode illustrations: quiet, flat line art in warm ink with a single accent.
 * No mascot here; these stand in for Kit on the formal Bento page.
 * All decorative (aria-hidden). Hover motion comes from the parent `group`.
 */

const INK = "#16130f";
const PAPER = "#fbfaf8";
const ORANGE = "#ff7a1a";
const SKY = "#a5d8ff";
const LIME = "#c6f432";
const LILAC = "#d9ccff";

/** Response-time tile: a calm clock whose minute hand advances on hover. */
export function Clock({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const long = i % 3 === 0;
    const r1 = long ? 34 : 38;
    return (
      <line
        key={i}
        x1={50 + Math.sin(a) * r1}
        y1={50 - Math.cos(a) * r1}
        x2={50 + Math.sin(a) * 42}
        y2={50 - Math.cos(a) * 42}
        stroke={INK}
        strokeWidth={long ? 3 : 1.6}
        strokeLinecap="round"
      />
    );
  });
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx={50} cy={50} r={47} fill={PAPER} stroke={INK} strokeWidth={3} />
      {ticks}
      <line x1={50} y1={50} x2={50} y2={28} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <g className="origin-[50px_50px] transition-transform duration-700 ease-out group-hover:rotate-90">
        <line x1={50} y1={50} x2={72} y2={50} stroke={ORANGE} strokeWidth={3} strokeLinecap="round" />
      </g>
      <circle cx={50} cy={50} r={4} fill={INK} />
    </svg>
  );
}

/** Websites tile: a browser window wireframe. */
export function BrowserWire({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 86" className={className} aria-hidden>
      <rect x={1.5} y={1.5} width={117} height={83} rx={10} fill="#fff" stroke={INK} strokeWidth={3} />
      <path d="M1.5 18 H118.5" stroke={INK} strokeWidth={2} />
      <circle cx={11} cy={10} r={2.6} fill={INK} />
      <circle cx={19} cy={10} r={2.6} fill={INK} opacity={0.35} />
      <circle cx={27} cy={10} r={2.6} fill={INK} opacity={0.35} />
      <rect x={10} y={27} width={46} height={6} rx={3} fill={ORANGE} />
      <rect x={10} y={38} width={34} height={4} rx={2} fill={INK} opacity={0.25} />
      <rect x={10} y={48} width={100} height={28} rx={6} fill={SKY} />
    </svg>
  );
}

/** Apps tile: a phone with a short list. */
export function PhoneWire({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 112" className={className} aria-hidden>
      <rect x={2} y={2} width={60} height={108} rx={14} fill={INK} />
      <rect x={7} y={10} width={50} height={92} rx={8} fill="#fff" />
      <rect x={24} y={5} width={16} height={3} rx={1.5} fill="#fff" opacity={0.5} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={12} y={18 + i * 20} width={12} height={12} rx={4} fill={i === 0 ? LIME : "#eee9e2"} />
          <rect x={28} y={20 + i * 20} width={22} height={3.5} rx={1.75} fill={INK} opacity={0.8} />
          <rect x={28} y={26 + i * 20} width={15} height={3} rx={1.5} fill={INK} opacity={0.25} />
        </g>
      ))}
    </svg>
  );
}

/** Line icons for the four process steps (24px grid). */
export function StepIcon({ step, className = "" }: { step: number; className?: string }) {
  const paths = [
    // Discovery: magnifier
    "M15 15l5 5M16.5 10.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
    // Design: layout wireframe
    "M6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 6 4ZM3.5 9h17M10 9v11",
    // Development: code brackets
    "m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 5l-3 14",
    // Launch & support: shield with check
    "M12 3.5 19 6v5.5c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-2.5ZM8.8 12l2.2 2.2 4.4-4.4",
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={paths[step % paths.length]} />
    </svg>
  );
}

/** Tigers Store: a storefront page with a product grid. */
export function StoreWire({ host, className = "" }: { host?: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`overflow-hidden rounded-xl border-2 border-bt-ink bg-white transition-transform duration-300 group-hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-bt-line px-3 py-2">
        <i className="size-2 rounded-full bg-bt-ink" />
        <i className="size-2 rounded-full bg-bt-ink/30" />
        <i className="size-2 rounded-full bg-bt-ink/30" />
        {host && <span className="ml-1 truncate text-[10px] font-medium text-bt-muted">{host}</span>}
      </div>
      <svg viewBox="0 0 200 104" className="block w-full">
        <rect x={12} y={12} width={60} height={7} rx={3.5} fill={INK} />
        <rect x={150} y={12} width={38} height={7} rx={3.5} fill={ORANGE} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={12 + i * 60} y={30} width={56} height={44} rx={6} fill={[LILAC, SKY, LIME][i]} />
            <rect x={12 + i * 60} y={80} width={36} height={4} rx={2} fill={INK} opacity={0.7} />
            <rect x={12 + i * 60} y={88} width={22} height={4} rx={2} fill={INK} opacity={0.25} />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Unreleased project: a skeleton page behind a lock. */
export function LockedWire({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-xl border-2 border-bt-ink bg-white transition-transform duration-300 group-hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-bt-line px-3 py-2">
        <i className="size-2 rounded-full bg-bt-ink" />
        <i className="size-2 rounded-full bg-bt-ink/30" />
        <i className="size-2 rounded-full bg-bt-ink/30" />
      </div>
      <svg viewBox="0 0 200 104" className="block w-full">
        <rect x={12} y={14} width={90} height={8} rx={4} fill="#eee9e2" />
        <rect x={12} y={30} width={176} height={5} rx={2.5} fill="#eee9e2" />
        <rect x={12} y={41} width={140} height={5} rx={2.5} fill="#eee9e2" />
        <rect x={12} y={58} width={84} height={34} rx={6} fill="#eee9e2" />
        <rect x={104} y={58} width={84} height={34} rx={6} fill="#eee9e2" />
        <g transform="translate(100 52)">
          <circle r={20} fill={INK} />
          <rect x={-8} y={-3} width={16} height={12} rx={2.5} fill={PAPER} />
          <path d="M-5 -3v-4a5 5 0 0 1 10 0v4" stroke={PAPER} strokeWidth={2.4} fill="none" />
          <circle cy={3} r={1.8} fill={ORANGE} />
        </g>
      </svg>
    </div>
  );
}

/** Open slot: an empty dashed frame with a plus. */
export function EmptySlot({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid place-items-center rounded-xl border-2 border-dashed border-bt-ink/35 ${className}`}
    >
      <span className="grid size-11 place-items-center rounded-full bg-bt-ink text-2xl leading-none text-bt-paper transition-transform duration-300 group-hover:rotate-90">
        +
      </span>
    </div>
  );
}
