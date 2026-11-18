"use client";

import type { L } from "@/content/content";
import { useLang } from "@/lib/i18n";

/** Renders one bilingual string in the active language. Lets server components show translated text. */
export function T({ x }: { x: L }) {
  const { t } = useLang();
  return <>{t(x)}</>;
}
