import { getDictionary } from "@/i18n/get-dictionary";

export async function Marquee() {
  const { marquee } = await getDictionary();
  const items = [...marquee, ...marquee];
  return (
    <div
      className="overflow-hidden border-y-[2.5px] border-ink bg-tiger whitespace-nowrap"
      aria-label={marquee.join(", ")}
    >
      <div className="animate-marquee font-display inline-flex gap-7 py-3 text-xl" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="after:ml-7 after:content-['✸']">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
