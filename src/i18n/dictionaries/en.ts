// English copy. vi.ts must match this shape (enforced by the Dictionary type).
// Kept in English on purpose in every language: the brand (tigers.build, Kit, "RAWR!"),
// project names, tech names (Next.js, React Native, iOS, MVP…) and the "</> grr :)" sticker.

export const en = {
  meta: {
    title: "tigers.build · Web & App Development Studio",
    description:
      "Design and development studio building fast websites, iOS & Android apps and MVPs with Next.js and React Native. Small team, big roar.",
    notFoundTitle: "Page not found",
  },
  nav: {
    label: "Main",
    language: "Language",
    work: "Work",
    services: "Services",
    process: "Process",
    studio: "Studio",
    sayHi: "Say hi",
  },
  hero: {
    sticker: "Design & dev studio ✦",
    title: {
      before: "We build websites & apps that ",
      tape: "roar.",
      after: "",
    },
    lead: "A small, loud studio for design and development. Websites, mobile apps, and the odd wild idea.",
    ctaPrimary: "Start a project →",
    ctaSecondary: "See our work",
    stickerWebsites: "Websites!",
    stickerApps: "Apps too ✦",
    kitLabel: "Kit the tiger. Press to make Kit roar.",
  },
  marquee: [
    "Websites",
    "iOS & Android",
    "Web apps",
    "Design systems",
    "E-commerce",
    "MVPs",
  ],
  services: {
    eyebrow: "What we build",
    title: "Three things, done properly.",
    items: [
      {
        title: "Websites",
        blurb:
          "Marketing sites and landing pages that load fast and are easy to edit.",
        points: [
          "Next.js & headless CMS",
          "SEO + performance baked in",
          "Your team can edit it",
        ],
      },
      {
        title: "Apps",
        blurb:
          "iOS, Android and web apps, from first sketch to the store listing.",
        points: [
          "React Native & web",
          "Design → build → launch",
          "Analytics from day one",
        ],
      },
      {
        title: "Products",
        blurb:
          "MVPs for founders who need something real in weeks, not quarters.",
        points: [
          "Scope the smallest thing",
          "Ship, measure, repeat",
          "Hand-off or stick around",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From “hmm” to “it’s live”.",
    steps: [
      {
        title: "Sniff around",
        body: "A call, a few questions, and a clear idea of what we're actually building.",
      },
      {
        title: "Sketch",
        body: "Wireframes and a clickable prototype before a single line of production code.",
      },
      {
        title: "Build",
        body: "Weekly demos you can click. No black boxes, no surprise invoices.",
      },
      {
        title: "Ship & roar",
        body: "Launch, monitor, and polish. Then we celebrate (loudly).",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Fresh off the workbench.",
    newTab: "(opens in a new tab)",
    teaserTape: "Top secret",
    items: {
      tigersStore: {
        name: "Tigers Store",
        kind: "Template builder",
        blurb: "Pick a template, make it yours, launch a site.",
      },
      projectTwo: {
        name: "Your app, maybe?",
        kind: "Open slot",
        blurb:
          "This spot is still free. Bring the idea, we'll bring the stripes.",
      },
      projectThree: {
        name: "Something crazy",
        kind: "Coming soon",
        blurb: "Top secret for now. We'd tell you, but then we'd have to roar.",
      },
    },
  },
  studio: {
    eyebrow: "The studio",
    title: "Small team. Big stripes.",
    body: "We're a compact crew of designers and developers who like clear plans, clean code and a little mischief. You talk directly to the people building your product, with no account managers in between.",
    kit: "That's Kit. Kit keeps an eye on things (one eye, mostly).",
    kitTitle: "Kit, the tigers.build mascot, sitting in a mint scarf",
    values: [
      "Small team",
      "Senior hands",
      "Honest timelines",
      "Weekly demos",
      "Zero jargon",
    ],
  },
  contact: {
    title: { before: "Got an idea? ", tape: "Roar", after: " at us." },
    body: "Tell us what you're building. We reply within one working day, usually with a few good questions.",
    methods: { email: "Email", phone: "Phone / Zalo", telegram: "Telegram" },
    form: {
      title: "Shy? Slide a note under the door.",
      body: "No calls, no small talk. Tell us a little and we'll reach out.",
      name: "Your name",
      optional: "(optional)",
      contact: "Email or phone",
      contactPlaceholder: "So we can reply",
      message: "What's on your mind?",
      messagePlaceholder: "An app, a website, a wild idea…",
      submit: "Send it",
      sending: "Sending…",
      sent: "Got it! We'll get back to you within one working day.",
      invalid: "Please tell us how to reach you and leave a short message.",
      error: "Something went wrong. Please email us instead.",
    },
  },
  footer: {
    email: "Email",
    taxId: "Tax ID",
    madeWith: "Made with stripes in a small studio.",
  },
  themeToggle: {
    toFocus: "Focus mode",
    toPlayful: "Playful mode",
    toFocusHint: "Switch to a calmer, more formal layout",
    toPlayfulHint: "Switch back to the playful layout",
    kitTip: { lead: "Feeling a bit much?", action: "See the formal page →" },
    playfulTip: {
      lead: "Prefer something livelier? The original site has Kit, colour and a few jokes.",
      action: "Switch to playful mode",
    },
  },
  // Focus mode: the calm, formal Bento layout. Plain, precise wording; no mascot jokes.
  focus: {
    meta: {
      title: "tigers.build · Web & App Development Studio",
      description:
        "We design and build websites, mobile apps and digital products for growing businesses.",
    },
    nav: { contact: "Contact us" },
    hero: {
      eyebrow: "Design & development studio",
      title: { before: "Websites and apps, ", em: "built to last", after: "." },
      body: "We design, build and maintain websites, mobile apps and digital products for growing businesses. One senior team, from the first call to launch and beyond.",
      ctaPrimary: "Discuss your project",
      ctaSecondary: "View our work",
    },
    reply: {
      label: "Response time",
      value: "1 working day",
      body: "Every inquiry is answered by the people who will do the work.",
    },
    services: {
      eyebrow: "Services",
      title: "What we deliver",
      items: [
        {
          title: "Websites",
          body: "Corporate sites and landing pages that load fast, rank well and are easy for your team to update.",
        },
        {
          title: "Applications",
          body: "iOS, Android and web applications, from specification to store release.",
        },
      ],
      products: {
        title: "Products & MVPs",
        body: "Internal tools and first versions of new products, with a tightly defined scope and delivered in weeks.",
      },
      stackLabel: "Technologies",
    },
    process: {
      eyebrow: "Process",
      title: "A clear, predictable process",
      steps: [
        {
          title: "Discovery",
          body: "We review your goals, users and constraints, then agree on scope, timeline and budget in writing.",
        },
        {
          title: "Design",
          body: "Wireframes and an interactive prototype, approved by you before development begins.",
        },
        {
          title: "Development",
          body: "Iterative delivery on a staging environment you can review at any time.",
        },
        {
          title: "Launch & support",
          body: "Deployment, monitoring and ongoing maintenance under a support agreement.",
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Recent projects",
      visit: "Visit site",
      inquire: "Enquire",
      items: {
        tigersStore: {
          name: "Tigers Store",
          kind: "Website builder",
          blurb:
            "A template-based platform that lets retailers launch a branded online store in minutes.",
        },
        projectThree: {
          name: "Upcoming release",
          kind: "In development",
          blurb:
            "A new product in private development. Details will be published at launch.",
        },
        projectTwo: {
          name: "Your project",
          kind: "Availability",
          blurb: "We are accepting new projects for the coming quarter.",
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "A senior team that works directly with you",
      body: "tigers.build is an independent studio of designers and engineers. You work directly with the people building your product, with no intermediaries.",
      facts: [
        { value: "Direct", label: "Access to designers and engineers" },
        { value: "Weekly", label: "Progress reviews" },
        { value: "Fixed", label: "Scope and timeline, agreed upfront" },
        { value: "Full", label: "Ownership of code and designs" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s discuss your project",
      body: "Send a short description of what you need. We reply within one working day.",
      formTitle: "Send an inquiry",
      form: {
        name: "Full name",
        optional: "(optional)",
        contact: "Email or phone number",
        contactPlaceholder: "name@company.com",
        message: "Project details",
        messagePlaceholder: "Briefly describe your goals, timeline and budget.",
        submit: "Send inquiry",
        sending: "Sending…",
        sent: "Thank you. We will reply within one working day.",
        invalid: "Please provide your contact details and a short message.",
        error: "Your message could not be sent. Please email us directly.",
      },
    },
    footer: { rights: "All rights reserved." },
  },
  notFound: {
    body: "Kit dozed off and this page wandered away. Let's get you home.",
    back: "← Back to tigers.build",
  },
};

export type Dictionary = typeof en;
