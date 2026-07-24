"use client";

import type { ReactNode } from "react";
import type { Locale } from "./dictionary";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultLocale, dictionary } from "./dictionary";
import { LanguageContext } from "./language-context";
import {
  isLocale,
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
} from "./locale-path";

function writeLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

function syncLocaleToUrl(locale: Locale) {
  const url = new URL(window.location.href);
  if (locale === defaultLocale) {
    url.searchParams.delete("lang");
  }
  else {
    url.searchParams.set("lang", locale);
  }
  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next !== current) {
    window.history.replaceState(window.history.state, "", next);
  }
}

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleValue] = useState<Locale>(
    isLocale(initialLocale) ? initialLocale : defaultLocale,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    const next = isLocale(fromQuery)
      ? fromQuery
      : isLocale(stored)
        ? stored
        : isLocale(initialLocale)
          ? initialLocale
          : defaultLocale;

    // eslint-disable-next-line react/set-state-in-effect -- hydrate from URL/storage after SSR cookie
    setLocaleValue(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    writeLocaleCookie(next);
    syncLocaleToUrl(next);
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleValue(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    writeLocaleCookie(next);
    syncLocaleToUrl(next);
  }, []);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: dictionary[locale],
  }), [locale, setLocale]);

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
