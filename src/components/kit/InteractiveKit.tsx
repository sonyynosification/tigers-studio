"use client";

import { useEffect, useRef, useState } from "react";
import { Kit, type KitOptions } from "./Kit";

/** Kit whose eyes follow the pointer. Click (or Enter/Space) to roar. */
export function InteractiveKit({
  className,
  label,
  ...opts
}: KitOptions & {
  className?: string;
  /** Accessible name, already translated. */ label: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [roaring, setRoaring] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height * 0.45);
        const d = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, d / 300);
        el.style.setProperty("--kit-ex", `${((dx / d) * 4 * k).toFixed(2)}px`);
        el.style.setProperty("--kit-ey", `${((dy / d) * 4 * k).toFixed(2)}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    if (!roaring) return;
    const t = setTimeout(() => setRoaring(false), 900);
    return () => clearTimeout(t);
  }, [roaring]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setRoaring(true)}
      aria-label={label}
      className={`group relative block cursor-pointer rounded-3xl focus-visible:outline-3 focus-visible:outline-offset-6 focus-visible:outline-ink ${className ?? ""}`}
    >
      <Kit
        {...opts}
        mouth={roaring ? "roar" : opts.mouth}
        className={`h-auto w-full ${roaring ? "animate-kit-shake" : "animate-kit-float"}`}
      />
      <span
        aria-live="polite"
        className={`border-chunk shadow-chunk-sm font-display absolute -top-2 -right-4 rounded-full bg-white px-3 py-1 text-lg transition duration-200 ${
          roaring ? "scale-100 rotate-6 opacity-100" : "pointer-events-none scale-50 opacity-0"
        }`}
      >
        {roaring ? "RAWR!" : ""}
      </span>
    </button>
  );
}
