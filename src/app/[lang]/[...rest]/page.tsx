import { notFound } from "next/navigation";

// Unknown paths under a locale (e.g. /vi/nope) render [lang]/not-found.tsx.
export default function CatchAll() {
  notFound();
}
