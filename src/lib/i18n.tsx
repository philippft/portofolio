"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L, Lang } from "@/content/content";

const STORAGE_KEY = "lang";

type LangContext = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (x: L) => string;
};

const Ctx = createContext<LangContext | null>(null);

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render always use "en" so hydration matches;
  // the saved choice is applied right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) setLangState(saved);
    } catch {
      // Storage blocked (private mode, disabled site data): keep the default.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice still applies for this visit.
    }
  }, []);

  const t = useCallback((x: L) => x[lang], [lang]);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang(): LangContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
