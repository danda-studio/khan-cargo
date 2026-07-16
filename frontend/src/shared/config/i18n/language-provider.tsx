"use client";

import type { ReactNode } from "react";
import type { Locale } from "./dictionary";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultLocale, dictionary } from "./dictionary";
import { LanguageContext } from "./language-context";

const STORAGE_KEY = "khan-cargo-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleValue] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "az" || stored === "en") {
      // eslint-disable-next-line react/set-state-in-effect -- hydrating from localStorage, unavailable during SSR
      setLocaleValue(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleValue(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: dictionary[locale],
  }), [locale, setLocale]);

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
