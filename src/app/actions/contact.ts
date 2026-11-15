"use server";

export type ContactState = { status: "idle" | "sent" | "invalid" | "error" };

const field = (data: FormData, key: string, max: number) =>
  String(data.get(key) ?? "")
    .trim()
    .slice(0, max);

/** Public, unauthenticated form: validate everything and never trust the client. */
export async function sendContact(
  _prev: ContactState,
  data: FormData,
): Promise<ContactState> {
  // Honeypot: real people never see this field, bots fill it. Pretend it worked.
  if (field(data, "website", 200)) return { status: "sent" };

  const name = field(data, "name", 100);
  const contact = field(data, "contact", 200);
  const message = field(data, "message", 3000);
  if (!contact || message.length < 2) return { status: "invalid" };

  const text = [
    `New note from tigers.build`,
    `Name: ${name || "-"}`,
    `Reach: ${contact}`,
    "",
    message,
  ].join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact form] Telegram not configured, message:\n${text}`);
      return { status: "sent" };
    }
    console.error(
      "[contact form] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing",
    );
    return { status: "error" };
  }

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!res.ok) throw new Error(`Telegram ${res.status}`);
    return { status: "sent" };
  } catch (err) {
    console.error("[contact form] delivery failed", err);
    return { status: "error" };
  }
}
