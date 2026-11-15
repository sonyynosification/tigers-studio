import type { ReactNode } from "react";
import { Kit } from "@/components/kit/Kit";
import { ContactForm } from "@/components/sections/ContactForm";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { icons } from "@/components/sections/Contact";
import { focusStack, site, work } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  BrowserWire,
  Clock,
  EmptySlot,
  LockedWire,
  PhoneWire,
  StepIcon,
  StoreWire,
} from "./illustrations";

/* ── shared bits ─────────────────────────────────────────────── */

const tile = "relative min-w-0 overflow-hidden rounded-[22px] p-6";
const lift = "transition-transform duration-300 ease-out hover:-translate-y-1";

function Eyebrow({
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

function Heading({
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

/* ── hero bento: intro + services overview ─────────────────── */

export async function FocusHero() {
  const { focus: t } = await getDictionary();
  const [web, apps] = t.services.items;
  return (
    <section
      id="services"
      aria-labelledby="focus-title"
      className="scroll-mt-24"
    >
      <div className="grid auto-rows-[minmax(170px,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* intro */}
        <div
          className={`${tile} flex flex-col justify-between gap-8 border border-bt-line bg-white sm:col-span-2 lg:row-span-2 lg:p-8`}
        >
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <div>
            <h1
              id="focus-title"
              className="font-bento text-[clamp(36px,5vw,58px)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance"
            >
              {t.hero.title.before}
              <em className="text-tiger not-italic">{t.hero.title.em}</em>
              {t.hero.title.after}
            </h1>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-bt-muted">
              {t.hero.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="font-bento rounded-full bg-bt-ink px-5 py-3 text-[15px] font-bold text-bt-paper transition-colors hover:bg-black"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#work"
              className="font-bento rounded-full border border-bt-line px-5 py-3 text-[15px] font-bold transition-colors hover:border-bt-ink"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* response time */}
        <div
          className={`${tile} group flex flex-col gap-4 bg-tiger lg:row-span-2`}
        >
          <Eyebrow>{t.reply.label}</Eyebrow>
          <p className="font-bento text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em]">
            {t.reply.value}
          </p>
          <p className="max-w-[24ch] text-[15px] leading-snug">
            {t.reply.body}
          </p>
          <Clock className="mt-auto w-28 self-end sm:w-32" />
        </div>

        {/* services */}
        <ServiceTile
          n="01"
          title={web.title}
          body={web.body}
          className="bg-bt-sky pb-24"
        >
          <BrowserWire className="absolute -right-3 -bottom-5 w-32 transition-transform duration-300 group-hover:-translate-y-2" />
        </ServiceTile>
        <ServiceTile
          n="02"
          title={apps.title}
          body={apps.body}
          className="bg-bt-lime pb-24 sm:pr-24 lg:pr-6"
        >
          <PhoneWire className="absolute right-5 -bottom-8 w-16 transition-transform duration-300 group-hover:-translate-y-2" />
        </ServiceTile>

        <div className={`${tile} ${lift} bg-bt-lilac sm:col-span-2`}>
          <Eyebrow>03</Eyebrow>
          <h3 className="font-bento mt-1.5 text-[22px] leading-tight font-extrabold tracking-[-0.02em]">
            {t.services.products.title}
          </h3>
          <p className="mt-2 max-w-[52ch] text-[15px] leading-snug">
            {t.services.products.body}
          </p>
          <p className="sr-only">{t.services.stackLabel}:</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {focusStack.map((s) => (
              <li
                key={s}
                className="rounded-full bg-white px-3 py-1 text-[13px] font-medium"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          className={`${tile} group flex items-end justify-between gap-4 bg-bt-ink text-bt-paper sm:col-span-2`}
        >
          <span>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <span className="font-bento mt-1.5 block text-[clamp(24px,3vw,30px)] leading-tight font-extrabold tracking-[-0.02em]">
              {t.hero.ctaPrimary}
            </span>
          </span>
          <span
            aria-hidden
            className="grid size-13 shrink-0 place-items-center rounded-full bg-tiger text-2xl text-bt-ink transition-transform duration-300 group-hover:-rotate-45"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}

function ServiceTile({
  n,
  title,
  body,
  className = "",
  children,
}: {
  n: string;
  title: string;
  body: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`${tile} group ${className}`}>
      <Eyebrow>{n}</Eyebrow>
      <h3 className="font-bento mt-1.5 text-[22px] leading-tight font-extrabold tracking-[-0.02em]">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-[15px] leading-snug">{body}</p>
      {children}
    </div>
  );
}

/* ── process ───────────────────────────────────────────────── */

/** Quiet way back to the playful site, for visitors who miss Kit. */
async function PlayfulSwitch() {
  const { themeToggle: t } = await getDictionary();
  return (
    <div className="-mt-10 mb-14 flex flex-col items-start gap-3 rounded-[22px] border border-dashed border-bt-ink/25 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[15px] text-bt-muted">{t.playfulTip.lead}</p>
      <ThemeToggle
        current="focus"
        className="group font-bento shrink-0 gap-2 rounded-full border border-bt-line bg-white py-1.5 pr-4 pl-1.5 text-sm font-bold transition-colors hover:border-bt-ink"
      >
        <Kit className="size-7 transition-transform duration-300 group-hover:-rotate-12" />
        {t.playfulTip.action}
      </ThemeToggle>
    </div>
  );
}

export async function FocusProcess() {
  const { focus: t } = await getDictionary();
  return (
    <section id="process" className="scroll-mt-24">
      <PlayfulSwitch />
      <Heading eyebrow={t.process.eyebrow}>{t.process.title}</Heading>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((s, i) => (
          <li
            key={s.title}
            className={`${tile} ${lift} border border-bt-line bg-white`}
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-2xl bg-bt-paper text-bt-ink ring-1 ring-bt-line">
                <StepIcon step={i} className="size-[22px]" />
              </span>
              <span className="font-bento text-sm font-bold text-bt-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-bento mt-6 text-xl font-extrabold tracking-[-0.02em]">
              {s.title}
            </h3>
            <p className="mt-2 text-[15px] leading-snug text-bt-muted">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── work ──────────────────────────────────────────────────── */

export async function FocusWork() {
  const { focus: t } = await getDictionary();
  const { newTab } = (await getDictionary()).work;
  return (
    <section id="work" className="scroll-mt-24">
      <Heading eyebrow={t.work.eyebrow}>{t.work.title}</Heading>
      <div className="grid gap-3 md:grid-cols-3">
        {work.map((w) => {
          const external = w.href.startsWith("http");
          const text = t.work.items[w.key];
          const teaser = "teaser" in w;
          const slot = "slot" in w;
          return (
            <a
              key={w.key}
              href={w.href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`${tile} group flex flex-col gap-5 ${
                slot
                  ? "border border-bt-line bg-transparent"
                  : teaser
                    ? "border border-bt-line bg-white"
                    : "bg-bt-lilac"
              }`}
            >
              {teaser ? (
                <LockedWire />
              ) : slot ? (
                <EmptySlot className="aspect-[200/124]" />
              ) : (
                <StoreWire host={external ? new URL(w.href).host : undefined} />
              )}
              <div className="mt-auto">
                <Eyebrow>{text.kind}</Eyebrow>
                <h3 className="font-bento mt-1.5 text-xl font-extrabold tracking-[-0.02em]">
                  {text.name}
                </h3>
                <p className="mt-1.5 text-[15px] leading-snug text-bt-ink/75">
                  {text.blurb}
                </p>
                {!teaser && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                    {external ? t.work.visit : t.work.inquire}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      {external ? "↗" : "→"}
                    </span>
                    {external && <span className="sr-only"> {newTab}</span>}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/* ── about ─────────────────────────────────────────────────── */

export async function FocusAbout() {
  const { focus: t } = await getDictionary();
  return (
    <section id="studio" className="scroll-mt-24">
      <div className="grid gap-3 lg:grid-cols-4">
        <div
          className={`${tile} border border-bt-line bg-white lg:col-span-2 lg:p-8`}
        >
          <Eyebrow className="text-bt-muted opacity-100">
            {t.about.eyebrow}
          </Eyebrow>
          <h2 className="font-bento mt-3 text-[clamp(26px,3.4vw,38px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance">
            {t.about.title}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-bt-muted">
            {t.about.body}
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
          {t.about.facts.map((f, i) => (
            <li
              key={f.value}
              className={`${tile} ${lift} flex flex-col justify-between gap-6 ${i === 0 ? "bg-bt-ink text-bt-paper" : "border border-bt-line bg-white"}`}
            >
              <span
                className={`font-bento text-[26px] leading-none font-extrabold tracking-[-0.02em] ${i === 0 ? "text-tiger" : ""}`}
              >
                {f.value}
              </span>
              <span
                className={`text-[15px] leading-snug ${i === 0 ? "text-bt-paper/80" : "text-bt-muted"}`}
              >
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── contact ───────────────────────────────────────────────── */

export async function FocusContact() {
  const dict = await getDictionary();
  const t = dict.focus.contact;
  const { methods } = dict.contact;
  const items = [
    {
      href: `mailto:${site.email}`,
      label: methods.email,
      value: site.email,
      icon: icons.email,
    },
    {
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      label: methods.phone,
      value: site.phone,
      icon: icons.phone,
    },
    {
      href: `https://t.me/${site.telegram}`,
      label: methods.telegram,
      value: `@${site.telegram}`,
      icon: icons.telegram,
    },
  ];
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="grid gap-3 lg:grid-cols-[1fr_1.2fr]">
        <div
          className={`${tile} flex flex-col gap-8 bg-bt-ink text-bt-paper lg:p-8`}
        >
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="font-bento mt-3 text-[clamp(28px,4vw,44px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
              {t.title}
            </h2>
            <p className="mt-4 max-w-[40ch] text-[16px] leading-relaxed text-bt-paper/75">
              {t.body}
            </p>
          </div>
          <ul className="mt-auto grid gap-2">
            {items.map((m) => {
              const external = m.href.startsWith("http");
              return (
                <li key={m.href}>
                  <a
                    href={m.href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-3 pr-4 transition-colors hover:bg-white/[0.12]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tiger text-bt-ink">
                      {m.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium tracking-wide text-bt-paper/60 uppercase">
                        {m.label}
                      </span>
                      <span className="block truncate font-semibold">
                        {m.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          id="note"
          className={`${tile} scroll-mt-24 border border-bt-line bg-white lg:p-8`}
        >
          <h3 className="font-bento mb-6 text-2xl font-extrabold tracking-[-0.02em]">
            {t.formTitle}
          </h3>
          <ContactForm t={t.form} variant="focus" />
        </div>
      </div>
    </section>
  );
}
