import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ButtonLink, SectionHeading, Sticker, Tape } from "@/components/ui/chunky";
import { tigersStoreUrl } from "@/content/site";
import { hasLocale } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { TIGERS_STORE_PATH, tigersStoreJsonLd, tigersStoreMetadata } from "@/lib/tigers-store-case-study";

const PATH = TIGERS_STORE_PATH;

export async function generateMetadata({ params }: PageProps<"/[lang]/work/tigers-store">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? tigersStoreMetadata(lang) : {};
}

export default async function TigersStoreCaseStudy() {
  const [lang, dict] = await Promise.all([getLocale(), getDictionary()]);
  const c = dict.caseStudy;
  const t = c.tigersStore;
  const visitProps = { href: tigersStoreUrl, target: "_blank", rel: "noopener" } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: tigersStoreJsonLd(lang) }}
      />
      <Header path={PATH} />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 md:pt-12">
          <nav aria-label={c.breadcrumb} className="mb-8 text-sm font-bold">
            <ol className="flex flex-wrap items-center gap-2 text-ink/60">
              <li>
                <Link href={`/${lang}`} className="hover:text-tiger-dark">{c.home}</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/${lang}#work`} className="hover:text-tiger-dark">{c.work}</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">{dict.work.items.tigersStore.name}</li>
            </ol>
          </nav>
          <Sticker tone="sun" className="-rotate-3">{t.sticker}</Sticker>
          <h1 className="font-display mt-5 max-w-[18ch] text-[clamp(40px,6.5vw,80px)] leading-[0.95] tracking-[-0.02em] text-balance">
            {t.title.before}
            <Tape>{t.title.tape}</Tape>
            {t.title.after}
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg font-medium md:text-xl">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink {...visitProps}>
              {t.visit} <span aria-hidden>↗</span>
              <span className="sr-only"> {t.newTab}</span>
            </ButtonLink>
            <ButtonLink href={`/${lang}#contact`} tone="white">{t.startProject}</ButtonLink>
          </div>

          {/* Browser-window mock that links to the live product */}
          <a
            {...visitProps}
            className="group border-chunk shadow-chunk-lg mt-14 block overflow-hidden rounded-[18px] bg-lilac p-6 sm:p-10"
          >
            <div className="border-chunk mx-auto max-w-3xl rounded-lg bg-white transition group-hover:-translate-y-1">
              <div className="flex items-center gap-1.5 border-b-[2.5px] border-ink p-3">
                <i className="size-3 rounded-full bg-tiger" />
                <i className="size-3 rounded-full bg-sun" />
                <i className="size-3 rounded-full bg-mint" />
                <span className="ml-2 truncate text-xs font-bold text-ink/60">{new URL(tigersStoreUrl).host}</span>
                <span aria-hidden className="ml-auto text-sm font-bold">↗</span>
                <span className="sr-only">{t.visit} {t.newTab}</span>
              </div>
              <div aria-hidden className="grid gap-4 p-5 sm:grid-cols-[1fr_2fr_1fr]">
                <div className="hidden space-y-2 sm:block">
                  {[70, 55, 80, 60].map((w) => (
                    <div key={w} className="h-2.5 rounded bg-ink/15" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="border-chunk space-y-2 rounded-md bg-cream p-3">
                  <div className="h-16 rounded bg-tiger/70" />
                  <div className="h-3 w-2/3 rounded bg-ink" />
                  <div className="h-2 w-full rounded bg-ink/20" />
                  <div className="h-2 w-4/5 rounded bg-ink/20" />
                </div>
                <div className="hidden space-y-2 sm:block">
                  <div className="h-6 rounded bg-mint" />
                  <div className="h-6 rounded bg-sun" />
                  <div className="h-6 rounded bg-blush" />
                </div>
              </div>
            </div>
          </a>

          <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.facts.map((f) => (
              <div key={f.label} className="border-chunk rounded-xl bg-white p-4">
                <dt className="text-sm font-bold text-ink/60">{f.label}</dt>
                <dd className="mt-1 font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow={t.problem.eyebrow}>{t.problem.title}</SectionHeading>
          <p className="mt-6 max-w-[62ch] text-lg font-medium">{t.problem.body}</p>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow={t.steps.eyebrow}>{t.steps.title}</SectionHeading>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.items.map((s, i) => (
              <li key={s.title} className="border-chunk shadow-chunk rounded-2xl bg-white p-5">
                <span className="font-display grid size-10 place-items-center rounded-full border-[2.5px] border-ink bg-tiger text-lg">
                  {i + 1}
                </span>
                <h3 className="font-display mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 font-medium text-ink/75">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow={t.features.eyebrow}>{t.features.title}</SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.features.items.map((f, i) => (
              <div
                key={f.title}
                className={`border-chunk shadow-chunk rounded-2xl p-6 ${["bg-mint", "bg-sun", "bg-sky", "bg-blush"][i % 4]}`}
              >
                <h3 className="font-display text-2xl">{f.title}</h3>
                <p className="mt-2 text-lg font-medium">{f.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.numbers.map((n) => (
              <li key={n.label} className="border-chunk rounded-2xl bg-white p-6 text-center">
                <span className="font-display block text-5xl">{n.value}</span>
                <span className="mt-2 block font-bold text-ink/70">{n.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Build */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow={t.build.eyebrow}>{t.build.title}</SectionHeading>
          <p className="mt-6 max-w-[62ch] text-lg font-medium">{t.build.body}</p>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pt-8 pb-24 sm:px-6">
          <div className="border-chunk shadow-chunk-lg rounded-3xl bg-tiger p-8 sm:p-12">
            <h2 className="font-display text-[clamp(30px,4.5vw,48px)] leading-none">{t.cta.title}</h2>
            <p className="mt-4 max-w-[52ch] text-lg font-medium">{t.cta.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={`/${lang}#contact`} tone="ink">{t.cta.contact}</ButtonLink>
              <ButtonLink {...visitProps} tone="white">
                {t.visit} <span aria-hidden>↗</span>
                <span className="sr-only"> {t.newTab}</span>
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
