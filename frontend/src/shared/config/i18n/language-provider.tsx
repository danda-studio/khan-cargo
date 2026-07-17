"use client";

import type { ReactNode } from "react";
import type { Locale } from "./dictionary";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultLocale, dictionary, locales } from "./dictionary";
import { LanguageContext } from "./language-context";

const STORAGE_KEY = "khan-cargo-locale";

function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as readonly string[]).includes(value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleValue] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const next = isLocale(fromQuery) ? fromQuery : isLocale(stored) ? stored : null;
    if (next) {
      // eslint-disable-next-line react/set-state-in-effect -- hydrating from URL/localStorage
      setLocaleValue(next);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

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
