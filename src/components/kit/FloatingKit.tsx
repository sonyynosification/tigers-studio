"use client";

import { useEffect, useState } from "react";
import { Kit } from "./Kit";

/**
 * Kit floating in the bottom corner, saying hi now and then.
 * Shows up once the hero is scrolled past and tucks away while the contact section (which has
 * its own big Kit) is on screen. Clicking jumps to the contact section.
 */
export function FloatingKit({ bubble, label }: { bubble: string; label: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const [hovered, setHovered] = useState(false);
  const visible = pastHero && !atContact;

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    const io = contact
      ? new IntersectionObserver(([e]) => setAtContact(e.isIntersecting), { threshold: 0.15 })
      : null;
    if (contact) io?.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  // Say hi right after appearing, then every so often while visible.
  useEffect(() => {
    if (!visible) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const greet = (delay: number) =>
      timers.push(
        setTimeout(() => {
          setGreeting(true);
          timers.push(setTimeout(() => setGreeting(false), 3200));
        }, delay),
      );
    greet(400);
    const every = setInterval(() => greet(0), 14000);
    return () => {
      clearInterval(every);
      timers.forEach(clearTimeout);
      setGreeting(false);
    };
  }, [visible]);

  const talking = greeting || hovered;

  return (
    <a
      href="#contact"
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={`group fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-30 block rounded-3xl transition-[translate,scale,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-32 scale-50 opacity-0"
      }`}
    >
      {/* speech bubble */}
      <span
        aria-hidden
        className={`border-chunk shadow-chunk-sm font-display absolute right-[70%] bottom-[85%] origin-bottom-right rounded-2xl rounded-br-sm bg-white px-3 py-1.5 text-base whitespace-nowrap transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] sm:text-lg ${
          talking ? "scale-100 -rotate-3 opacity-100" : "scale-50 rotate-6 opacity-0"
        }`}
      >
        {bubble}
      </span>

      <span className="relative block size-16 animate-kit-float sm:size-20">
        <Kit
          eyes={hovered ? "wink" : "open"}
          mouth={talking ? "blep" : "fang"}
          className="h-auto w-full drop-shadow-[3px_3px_0_var(--color-ink)] transition-transform duration-300 group-hover:-rotate-6 group-active:scale-90"
        />
      </span>
    </a>
  );
}
