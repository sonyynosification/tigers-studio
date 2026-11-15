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
          <article key={s.title} className={`border-chunk shadow-chunk tilt mr-[5px] rounded-[18px] p-6 ${serviceColors[i]}`}>
            <h3 className="font-display text-2xl">{s.title}</h3>
            <p className="mt-2">{s.blurb}</p>
            <ul className="mt-5 space-y-2 text-[15px] font-medium">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span aria-hidden="true">✸</span>
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
