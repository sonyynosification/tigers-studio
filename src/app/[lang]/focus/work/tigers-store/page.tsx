import type { Metadata } from "next";
import Link from "next/link";
import { FocusFooter } from "@/components/focus/FocusFooter";
import { FocusHeader } from "@/components/focus/FocusHeader";
import { StepIcon, StoreWire } from "@/components/focus/illustrations";
import { Eyebrow, Heading, lift, tile } from "@/components/focus/bento";
import { tigersStoreUrl } from "@/content/site";
import { hasLocale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { TIGERS_STORE_PATH, tigersStoreJsonLd, tigersStoreMetadata } from "@/lib/tigers-store-case-study";

// Focus (Bento) version of /[lang]/work/tigers-store. The proxy serves it at that URL
// when the visitor picked Focus mode, so it shares the playful page's metadata and canonical.
export async function generateMetadata({ params }: PageProps<"/[lang]/focus/work/tigers-store">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? tigersStoreMetadata(lang) : {};
}

const featureColors = ["bg-bt-sky", "bg-bt-lime", "bg-bt-lilac", "bg-tiger"];
const pill = "font-bento inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-[15px] font-bold transition-colors";

export default async function FocusTigersStoreCaseStudy() {
  const [lang, dict] = await Promise.all([getLocale(), getDictionary()]);
  const c = dict.caseStudy;
  const t = c.tigersStore;
  const visit = { href: tigersStoreUrl, target: "_blank", rel: "noopener" } as const;
  const visitLabel = (
    <>
      {t.visit} <span aria-hidden>↗</span>
      <span className="sr-only"> {t.newTab}</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: tigersStoreJsonLd(lang) }} />
      <FocusHeader path={TIGERS_STORE_PATH} />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pt-4 pb-24 sm:px-6">
        {/* Intro bento */}
        <section aria-labelledby="case-title">
          <nav aria-label={c.breadcrumb} className="mb-4 text-sm font-medium">
            <ol className="flex flex-wrap items-center gap-2 text-bt-muted">
              <li>
                <Link href={`/${lang}`} className="hover:text-bt-ink">{c.home}</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/${lang}#work`} className="hover:text-bt-ink">{c.work}</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-bt-ink">{dict.work.items.tigersStore.name}</li>
            </ol>
          </nav>

          <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
            <div className={`${tile} flex flex-col justify-between gap-8 border border-bt-line bg-white lg:p-8`}>
              <Eyebrow>{t.sticker}</Eyebrow>
              <div>
                <h1
                  id="case-title"
                  className="font-bento text-[clamp(34px,4.6vw,54px)] leading-[1] font-extrabold tracking-[-0.035em] text-balance"
                >
                  {t.title.before}
                  <em className="text-tiger not-italic">{t.title.tape}</em>
                  {t.title.after}
                </h1>
                <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-bt-muted">{t.lead}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a {...visit} className={`${pill} bg-bt-ink text-bt-paper hover:bg-black`}>
                  {visitLabel}
                </a>
                <a href={`/${lang}#contact`} className={`${pill} border border-bt-line hover:border-bt-ink`}>
                  {t.startProject}
                </a>
              </div>
            </div>

            <a {...visit} className={`${tile} ${lift} group flex flex-col justify-between gap-6 bg-bt-lilac`}>
              <span className="flex items-center justify-between">
                <Eyebrow>{dict.focus.work.items.tigersStore.kind}</Eyebrow>
                <span aria-hidden className="text-lg transition-transform group-hover:-rotate-45">→</span>
              </span>
              <StoreWire host={new URL(tigersStoreUrl).host} className="w-full" />
              <span className="sr-only">{t.visit} {t.newTab}</span>
            </a>
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {t.facts.map((f) => (
              <div key={f.label} className={`${tile} border border-bt-line bg-white py-5`}>
                <dt><Eyebrow>{f.label}</Eyebrow></dt>
                <dd className="font-bento mt-1.5 text-[17px] leading-snug font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Problem */}
        <section>
          <Heading eyebrow={t.problem.eyebrow}>{t.problem.title}</Heading>
          <p className="max-w-[62ch] text-[17px] leading-relaxed text-bt-muted">{t.problem.body}</p>
        </section>

        {/* Steps */}
        <section>
          <Heading eyebrow={t.steps.eyebrow}>{t.steps.title}</Heading>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.items.map((s, i) => (
              <li key={s.title} className={`${tile} ${lift} border border-bt-line bg-white`}>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-bt-paper text-bt-ink ring-1 ring-bt-line">
                    <StepIcon step={i} className="size-[22px]" />
                  </span>
                  <span className="font-bento text-sm font-bold text-bt-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bento mt-6 text-xl font-extrabold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-snug text-bt-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Features + numbers */}
        <section>
          <Heading eyebrow={t.features.eyebrow}>{t.features.title}</Heading>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.features.items.map((f, i) => (
              <div key={f.title} className={`${tile} ${lift} ${featureColors[i % featureColors.length]}`}>
                <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                <h3 className="font-bento mt-1.5 text-[22px] leading-tight font-extrabold tracking-[-0.02em]">{f.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[15px] leading-snug">{f.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {t.numbers.map((n) => (
              <li key={n.label} className={`${tile} border border-bt-line bg-white`}>
                <span className="font-bento block text-[44px] leading-none font-extrabold tracking-[-0.03em]">{n.value}</span>
                <span className="mt-2 block text-[15px] text-bt-muted">{n.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Build */}
        <section>
          <Heading eyebrow={t.build.eyebrow}>{t.build.title}</Heading>
          <p className="max-w-[62ch] text-[17px] leading-relaxed text-bt-muted">{t.build.body}</p>
        </section>

        {/* CTA */}
        <section className={`${tile} flex flex-col gap-6 bg-bt-ink p-8 text-bt-paper sm:p-10 md:flex-row md:items-end md:justify-between`}>
          <div>
            <h2 className="font-bento text-[clamp(26px,3.4vw,38px)] leading-[1.05] font-extrabold tracking-[-0.03em]">{t.cta.title}</h2>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed opacity-75">{t.cta.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href={`/${lang}#contact`} className={`${pill} bg-tiger text-bt-ink hover:bg-tiger-dark`}>{t.cta.contact}</a>
            <a {...visit} className={`${pill} border border-white/25 hover:border-white`}>
              {visitLabel}
            </a>
          </div>
        </section>
      </main>
      <FocusFooter />
    </>
  );
}
