import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/chunky";
import { serviceColors } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Services() {
  const { services } = await getDictionary();
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={services.eyebrow}>{services.title}</SectionHeading>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.items.map((s, i) => (
          <article
            key={s.title}
            data-reveal="slap"
            style={{ "--i": i, "--reveal-rotate": i % 2 ? "5deg" : "-5deg" } as CSSProperties}
            className={`group border-chunk shadow-chunk tilt mr-[5px] rounded-[18px] p-6 ${serviceColors[i]}`}
          >
            <h3 className="font-display text-2xl">{s.title}</h3>
            <p className="mt-2">{s.blurb}</p>
            <ul className="mt-5 space-y-2 text-[15px] font-medium">
              {s.points.map((p, j) => (
                <li key={p} className="flex gap-2">
                  {/* Bullets spin in turn when the card is hovered. */}
                  <span
                    aria-hidden="true"
                    style={{ transitionDelay: `${j * 60}ms` }}
                    className="inline-block transition-transform duration-500 ease-out group-hover:rotate-180"
                  >
                    ✸
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
