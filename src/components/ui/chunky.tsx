import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Tone = "tiger" | "white" | "ink" | "mint" | "sun" | "lilac";

const tones: Record<Tone, string> = {
  tiger: "bg-tiger text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-cream",
  mint: "bg-mint text-ink",
  sun: "bg-sun text-ink",
  lilac: "bg-lilac text-ink",
};

export function ButtonLink({
  tone = "tiger",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { tone?: Tone }) {
  return (
    <Link
      {...props}
      className={`border-chunk shadow-chunk press inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-bold ${tones[tone]} ${className}`}
    />
  );
}

export function Sticker({
  children,
  tone = "mint",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`border-chunk shadow-chunk-sm inline-block rounded-full px-3 py-1.5 text-[13px] font-bold whitespace-nowrap ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Sticker tone="white" className="-rotate-2">
        {eyebrow}
      </Sticker>
      <h2 className="font-display mt-4 text-[clamp(32px,5vw,56px)] leading-[0.95] tracking-tight text-balance">
        {children}
      </h2>
    </div>
  );
}

/** Highlighted word, like a strip of orange tape. */
export function Tape({ children, tone = "tiger" }: { children: ReactNode; tone?: Tone }) {
  return (
    <mark className={`border-chunk inline-block -rotate-2 rounded-[10px] px-[0.12em] ${tones[tone]}`}>{children}</mark>
  );
}
