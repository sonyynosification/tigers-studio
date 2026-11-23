"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { Locale } from "@/i18n/config";

const SLIDE_MS = 240;

const styles = {
  playful: {
    list: "border-chunk bg-white font-bold",
    knob: "bg-ink",
    active: "text-cream",
    idle: "hover:text-tiger-dark",
  },
  focus: {
    list: "border border-bt-line bg-white font-semibold",
    knob: "bg-bt-ink",
    active: "text-bt-paper",
    idle: "text-bt-muted hover:text-bt-ink",
  },
};

/**
 * EN / VI pill. With JS, a click first slides the dark highlight to the new language, then loads
 * the page (full load on purpose, so html lang and fonts change; it cross-fades via
 * @view-transition in globals.css). Without JS, or with a modifier key, they are plain links.
 */
export function LanguagePill({
  current,
  links,
  label,
  variant,
}: {
  current: Locale;
  links: { locale: Locale; name: string; href: string }[];
  label: string;
  variant: keyof typeof styles;
}) {
  const [shown, setShown] = useState(current);
  const s = styles[variant];
  const index = Math.max(0, links.findIndex((l) => l.locale === shown));

  // Back button restores this page from cache: show its real language again.
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => {
      if (e.persisted) setShown(current);
    };
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, [current]);

  function slideThenGo(e: MouseEvent<HTMLAnchorElement>, locale: Locale, href: string) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // new tab etc.
    e.preventDefault();
    if (locale === current || shown !== current) return; // nothing to do, or already switching
    setShown(locale);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => window.location.assign(href), reduce ? 0 : SLIDE_MS);
  }

  return (
    <nav aria-label={label}>
      <ul
        className={`lang-switch relative grid rounded-full p-0.5 text-sm ${s.list}`}
        style={{ gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))` }}
      >
        <li
          aria-hidden
          role="presentation"
          className={`absolute inset-y-0.5 left-0.5 rounded-full transition-transform duration-[240ms] ease-out ${s.knob}`}
          style={{ width: `calc((100% - 4px) / ${links.length})`, transform: `translateX(${index * 100}%)` }}
        />
        {links.map((l) => (
          <li key={l.locale} className="relative">
            <a
              href={l.href}
              hrefLang={l.locale}
              lang={l.locale}
              aria-label={l.name}
              aria-current={l.locale === current ? "true" : undefined}
              onClick={(e) => slideThenGo(e, l.locale, l.href)}
              className={`block rounded-full px-2.5 py-1 text-center transition-colors duration-[240ms] ${l.locale === shown ? s.active : s.idle}`}
            >
              {l.locale.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
