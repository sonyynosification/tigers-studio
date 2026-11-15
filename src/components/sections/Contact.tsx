import type { ReactNode } from "react";
import { Kit } from "@/components/kit/Kit";
import { Tape } from "@/components/ui/chunky";
import { site } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";

const icon = "size-5";
export const icons = {
  email: (
    <svg
      viewBox="0 0 24 24"
      className={icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg
      viewBox="0 0 24 24"
      className={icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden
    >
      <path
        d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  telegram: (
    <svg
      viewBox="0 0 24 24"
      className={icon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden
    >
      <path
        d="M21 4 3 11l6 2.5M21 4l-3 16-9-6.5M21 4 9 13.5V19l3-3.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function Method({
  href,
  label,
  value,
  icon,
  bg,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  bg: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="border-chunk shadow-chunk-sm press mr-[3px] flex items-center gap-3 rounded-2xl bg-white p-3 pr-4"
    >
      <span
        className={`border-chunk grid size-10 shrink-0 place-items-center rounded-full ${bg}`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold tracking-wide text-ink/60 uppercase">
          {label}
        </span>
        <span className="block truncate font-bold">{value}</span>
      </span>
    </a>
  );
}

export async function Contact() {
  const { contact } = await getDictionary();
  const { title, methods } = contact;
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-8 sm:px-6"
    >
      <div className="border-chunk shadow-chunk-lg relative mr-2 overflow-hidden rounded-[28px] bg-mint px-5 pt-12 pb-44 text-ink sm:px-12 sm:pb-52 md:py-16">
        <div className="relative z-10 max-w-2xl md:max-w-[min(42rem,calc(100%-18rem))]">
          <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-tight text-balance">
            {title.before}
            <Tape tone="sun">{title.tape}</Tape>
            {title.after}
          </h2>
          <p className="mt-5 max-w-[44ch] text-lg font-medium text-ink/80">
            {contact.body}
          </p>
          <div className="mt-8 grid max-w-md gap-3">
            <Method
              href={`mailto:${site.email}`}
              label={methods.email}
              value={site.email}
              icon={icons.email}
              bg="bg-tiger"
            />
            <Method
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              label={methods.phone}
              value={site.phone}
              icon={icons.phone}
              bg="bg-sun"
            />
            <Method
              href={`https://t.me/${site.telegram}`}
              label={methods.telegram}
              value={`@${site.telegram}`}
              icon={icons.telegram}
              bg="bg-sky"
            />
          </div>
        </div>
        <Kit className="pointer-events-none absolute -right-4 -bottom-10 w-48 rotate-[-12deg] sm:w-64 md:right-6 md:w-80" />
      </div>
    </section>
  );
}
