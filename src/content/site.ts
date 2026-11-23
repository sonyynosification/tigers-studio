// Language-independent site data. Translated copy lives in src/i18n/dictionaries.
// TODO: confirm email, phone and Telegram before launch.

export const site = {
  name: "tigers.build",
  url: "https://tigers.build",
  email: "hello@tigers.build",
  /** Shown as written; `tel:` link strips spaces. */
  phone: "+84 776 703 343",
  /** Telegram username without the @. */
  telegram: "tigersbuild",
  /**
   * Self-hosted Umami (Upwind: tigers-store/umami). The website ID comes from the
   * Umami dashboard; with none set (e.g. local dev) no tracking script is loaded.
   */
  analytics: {
    host: "https://tigers-analytics.dx.devtigers.net",
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
  /** Legal company details shown in the footer and in the structured data. */
  company: {
    legalName: "TIGERS BUILD",
    taxId: "056092006797",
    address: {
      street: "53 Lê Đại Hành",
      ward: "Phường Nha Trang",
      province: "Khánh Hòa",
      country: "Việt Nam",
      countryCode: "VN",
    },
  },
};

/** One-line postal address, e.g. for the footer. */
export const formattedAddress = (() => {
  const { street, ward, province, country } = site.company.address;
  return [street, ward, province, country].join(", ");
})();

export const nav = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "studio", href: "#studio" },
] as const;

// Mascot art for each "How we work" step, in the same order as dictionary `process.steps`.
// Small square art (about 90px) in each card's top-right corner. Drop square images in public/mascots/ and set e.g.
// "/mascots/process-1.png"; null shows a placeholder.
export const processMascots: (string | null)[] = [
  "/mascots/process-1.svg",
  "/mascots/process-2.svg",
  "/mascots/process-3.svg",
  "/mascots/process-4.svg",
];

// Card colours, in the same order as dictionary `services.items`.
export const serviceColors = ["bg-white", "bg-mint", "bg-sun"];

// Project links. Override the store URL per environment with TIGERS_STORE_URL.
export const tigersStoreUrl =
  process.env.TIGERS_STORE_URL ?? "https://tigers-store.dx.devtigers.net";

// `href` starting with http opens in a new tab; "#contact" for unreleased work.
// `caseStudy` (a path under /[lang]) makes the card open that page instead of `href`.
// Text for each key is in dictionary `work.items`. `teaser` renders a "coming soon" card;
// `slot` renders an empty "your app here" card inviting the visitor to get in touch.
export const work = [
  {
    key: "tigersStore",
    href: tigersStoreUrl,
    caseStudy: "/work/tigers-store",
    color: "bg-lilac",
    rotate: "-rotate-1",
  },
  {
    key: "projectThree",
    href: "#contact",
    color: "bg-blush",
    rotate: "rotate-1",
    teaser: true,
  },
  {
    key: "projectTwo",
    href: "#contact",
    color: "bg-sky",
    rotate: "-rotate-1",
    slot: true,
  },
] as const;

// Focus mode (Bento): technology chips on the services tile. Names stay in English.
export const focusStack = ["Next.js", "React", "React Native", "Flutter", "Headless CMS", "Figma"];
