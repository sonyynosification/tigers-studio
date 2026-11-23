import { SectionHeading, Sticker } from "@/components/ui/chunky";
import { work } from "@/content/site";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function Work() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const t = dict.work;
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <SectionHeading eyebrow={t.eyebrow}>{t.title}</SectionHeading>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {work.map((w) => {
          const href = "caseStudy" in w ? `/${locale}${w.caseStudy}` : w.href;
          const external = href.startsWith("http");
          const text = t.items[w.key];
          return (
            <a
              key={w.key}
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`group block ${w.rotate} transition hover:rotate-0`}
            >
              <div
                className={`border-chunk shadow-chunk-lg relative mr-2 grid aspect-[4/3] place-items-center overflow-hidden rounded-[18px] ${w.color}`}
              >
                {/* TODO: replace with a real project screenshot (next/image) */}
                {"teaser" in w ? (
                  <Teaser tape={t.teaserTape} />
                ) : "slot" in w ? (
                  <Slot />
                ) : (
                  <div className="border-chunk w-3/4 rounded-lg bg-white transition group-hover:-translate-y-1">
                    <div className="flex items-center gap-1.5 border-b-[2.5px] border-ink p-2">
                      <i className="size-2.5 rounded-full bg-tiger" />
                      <i className="size-2.5 rounded-full bg-sun" />
                      <i className="size-2.5 rounded-full bg-mint" />
                      {w.href.startsWith("http") && (
                        <span className="ml-1 truncate text-[10px] font-bold text-ink/60">
                          {new URL(w.href).host}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="h-3 w-2/3 rounded bg-ink" />
                      <div className="h-2 w-full rounded bg-ink/20" />
                      <div className="h-2 w-4/5 rounded bg-ink/20" />
                    </div>
                  </div>
                )}
                <Sticker
                  tone={"teaser" in w ? "sun" : "white"}
                  className="absolute top-3 left-3 z-10"
                >
                  {text.kind}
                </Sticker>
              </div>
              <h3 className="font-display mt-5 text-xl">
                {text.name}{" "}
                <span className="inline-block transition group-hover:translate-x-1">
                  {external ? "↗" : "→"}
                </span>
                {external && <span className="sr-only"> {t.newTab}</span>}
              </h3>
              {text.blurb && (
                <p className="mt-1 font-medium text-ink/70">{text.blurb}</p>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}

// "Coming soon" card art: a locked, blurred window under a scrolling caution tape.
function Teaser({ tape }: { tape: string }) {
  const strip = Array.from({ length: 8 }, () => `${tape} ✦ `).join("");
  return (
    <>
      <div className="border-chunk w-3/4 rounded-lg bg-white transition group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b-[2.5px] border-ink p-2">
          <i className="size-2.5 rounded-full bg-tiger" />
          <i className="size-2.5 rounded-full bg-sun" />
          <i className="size-2.5 rounded-full bg-mint" />
          <span className="ml-1 text-[10px] font-bold tracking-widest text-ink/60">
            ???.???
          </span>
        </div>
        <div className="relative p-3">
          <div aria-hidden className="space-y-2 blur-[3px]">
            <div className="h-3 w-2/3 rounded bg-ink" />
            <div className="h-2 w-full rounded bg-tiger/60" />
            <div className="h-2 w-4/5 rounded bg-lilac" />
          </div>
          <span
            aria-hidden
            className="font-display animate-kit-float absolute inset-0 grid place-items-center text-5xl text-ink"
          >
            ?
          </span>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none border-y-[2.5px] border-ink absolute bottom-[14%] left-[-10%] w-[120%] -rotate-6 overflow-hidden bg-ink py-1.5"
      >
        <div className="animate-marquee flex w-max text-xs font-bold tracking-[0.2em] whitespace-nowrap text-sun uppercase">
          <span>{strip}</span>
          <span>{strip}</span>
        </div>
      </div>
    </>
  );
}

// Empty "your app here" card: a dashed phone outline with a plus button.
function Slot() {
  return (
    <div
      aria-hidden
      className="grid aspect-[9/16] h-3/4 place-items-center rounded-[22px] border-[2.5px] border-dashed border-ink bg-white/40 transition group-hover:-translate-y-1"
    >
      <span className="border-chunk shadow-chunk-sm font-display grid size-12 place-items-center rounded-full bg-tiger text-3xl leading-none text-ink transition group-hover:rotate-90">
        +
      </span>
    </div>
  );
}
