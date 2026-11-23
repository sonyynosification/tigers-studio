import type { ReactNode } from "react";

// Shared Focus-mode (Bento) building blocks, kept free of client components
// so any page can import them.

/* ── shared bits ─────────────────────────────────────────────── */

export const tile = "relative min-w-0 overflow-hidden rounded-[22px] p-6";
export const lift = "transition-transform duration-300 ease-out hover:-translate-y-1";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block text-xs font-semibold tracking-[0.08em] uppercase opacity-70 ${className}`}
    >
      {children}
    </span>
  );
}

export function Heading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <Eyebrow className="text-bt-muted opacity-100">{eyebrow}</Eyebrow>
      <h2 className="font-bento mt-3 text-[clamp(28px,4vw,44px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
        {children}
      </h2>
    </div>
  );
}
