"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { Kit } from "@/components/kit/Kit";

/** How long the knob takes to slide before the page changes (matches the CSS below). */
const SLIDE_MS = 240;

/**
 * The switch itself. With JS, a click first slides the knob and fades Kit between colour and
 * black and white, then submits the form; the page change itself cross-fades (see
 * @view-transition in globals.css). Without JS it is a plain submit button.
 */
export function ModeSwitchButton({ on, label, hint }: { on: boolean; label: string; hint: string }) {
  const [checked, setChecked] = useState(on);

  // Coming back via the back button restores this page from cache: show its real state again.
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => {
      if (e.persisted) setChecked(on);
    };
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, [on]);

  function slideThenSubmit(e: MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    e.preventDefault();
    if (checked !== on) return; // already switching
    setChecked(!on);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => form.submit(), reduce ? 0 : SLIDE_MS);
  }

  return (
    <button
      type="submit"
      role="switch"
      aria-checked={checked}
      title={hint}
      onClick={slideThenSubmit}
      className={`mode-switch group relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-[240ms] ${
        on ? "border-chunk" : "border border-bt-line hover:border-bt-ink/40"
      } ${checked ? "bg-tiger" : "bg-bt-line/70"} ${on && checked ? "hover:bg-tiger-dark" : ""}`}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden
        className={`absolute top-1/2 grid size-[26px] -translate-y-1/2 place-items-center rounded-full bg-white transition-[left,rotate] duration-[240ms] ease-out ${
          checked ? "left-[calc(100%-28px)] group-hover:-rotate-12" : "left-0.5 shadow-sm ring-1 ring-bt-line group-hover:rotate-12"
        }`}
      >
        {/* Kit in colour when on (playful), black and white when off (Focus). */}
        <Kit
          className={`size-[22px] transition-[filter] duration-[240ms] ${checked ? "" : "brightness-[.8] contrast-150 grayscale"}`}
        />
      </span>
    </button>
  );
}
