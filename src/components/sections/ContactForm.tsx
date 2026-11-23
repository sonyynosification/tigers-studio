"use client";

import { useActionState, useEffect } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import type { Dictionary } from "@/i18n/dictionaries/en";

type FormText = Omit<Dictionary["contact"]["form"], "title" | "body">;

// One form, two looks: the chunky sticker style and the calm Focus (Bento) style.
const styles = {
  playful: {
    label: "block text-sm font-bold",
    optional: "font-medium text-ink/50",
    input:
      "border-chunk mt-1.5 w-full rounded-xl bg-cream px-3.5 py-2.5 font-medium placeholder:text-ink/40 focus:bg-white focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink",
    submit:
      "border-chunk shadow-chunk press inline-flex cursor-pointer items-center gap-2 rounded-xl bg-tiger px-5 py-3 text-[15px] font-bold text-ink disabled:cursor-wait disabled:opacity-70",
    note: "text-sm font-bold",
    ok: "text-ink",
  },
  focus: {
    label: "block text-sm font-medium",
    optional: "font-normal text-bt-muted",
    input:
      "mt-1.5 w-full rounded-xl border border-bt-line bg-white px-3.5 py-2.5 text-bt-ink placeholder:text-bt-muted/70 transition-colors focus:border-bt-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tiger",
    submit:
      "inline-flex cursor-pointer items-center gap-2 rounded-full bg-bt-ink px-5 py-3 text-[15px] font-semibold text-bt-paper transition-colors hover:bg-black disabled:cursor-wait disabled:opacity-70",
    note: "text-sm font-medium",
    ok: "text-bt-ink",
  },
};

export function ContactForm({ t, variant = "playful" }: { t: FormText; variant?: keyof typeof styles }) {
  const s = styles[variant];
  const input = s.input;
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendContact,
    { status: "idle" },
  );
  // Count successful sends in Umami (no-op when the tracker isn't loaded).
  useEffect(() => {
    if (state.status === "sent") {
      (window as { umami?: { track: (event: string, data?: object) => void } }).umami?.track(
        "contact-sent",
        { variant },
      );
    }
  }, [state, variant]);

  const note =
    state.status === "idle"
      ? ""
      : state.status === "sent"
        ? t.sent
        : t[state.status];

  return (
    <form action={action} className="space-y-4">
      <label className={s.label}>
        {t.name} <span className={s.optional}>{t.optional}</span>
        <input
          name="name"
          autoComplete="name"
          maxLength={100}
          className={input}
        />
      </label>
      <label className={s.label}>
        {t.contact}
        <input
          name="contact"
          required
          maxLength={200}
          autoComplete="email"
          placeholder={t.contactPlaceholder}
          className={input}
        />
      </label>
      <label className={s.label}>
        {t.message}
        <textarea
          name="message"
          required
          minLength={2}
          maxLength={3000}
          rows={4}
          placeholder={t.messagePlaceholder}
          className={`${input} resize-y`}
        />
      </label>
      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={pending}
          className={s.submit}
        >
          {pending ? t.sending : t.submit} <span aria-hidden>→</span>
        </button>
        <p
          aria-live="polite"
          className={`${s.note} ${state.status === "sent" ? s.ok : "text-[#b42318]"}`}
        >
          {note}
        </p>
      </div>
    </form>
  );
}
