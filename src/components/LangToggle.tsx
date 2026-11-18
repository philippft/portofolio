"use client";

import { ui, type Lang } from "@/content/content";
import { useLang } from "@/lib/i18n";

const LANGS: Lang[] = ["en", "id"];

/** EN/ID switch. "onNavy" sits on the navy hero, "onDark" on the darker footer. */
export function LangToggle({ variant = "onNavy" }: { variant?: "onNavy" | "onDark" }) {
  const { lang, setLang, t } = useLang();
  const idle =
    variant === "onNavy"
      ? "border-white/40 hover:border-white/70"
      : "border-white/30 hover:border-white/60";

  return (
    <div role="group" aria-label={t(ui.langToggle.label)} className="inline-flex gap-1.5">
      {LANGS.map((code) => {
        const active = code === lang;
        const option = ui.langToggle[code];
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={option.name}
            onClick={() => setLang(code)}
            className={`min-h-9 min-w-11 rounded border-[1.5px] px-3 text-[15px] leading-none transition-colors ${
              active ? "border-gold bg-gold font-bold text-ink" : `${idle} bg-transparent text-white`
            }`}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}
