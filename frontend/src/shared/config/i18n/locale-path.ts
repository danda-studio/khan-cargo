/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import { defaultLocale, locales, type Locale } from "./dictionary";

export const LOCALE_COOKIE = "khan-cargo-locale";
export const LOCALE_STORAGE_KEY = "khan-cargo-locale";
export const LOCALE_HEADER = "x-khan-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value !== null && value !== undefined && (locales as readonly string[]).includes(value);
}

export function withLocale(href: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return stripLocaleParam(href);
  }

  if (href.startsWith("#")) {
    return `?lang=${locale}${href}`;
  }

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const pathAndQuery = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const [pathname, existingQuery = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(existingQuery);
  params.set("lang", locale);
  const query = params.toString();
  return `${pathname}?${query}${hash}`;
}

function stripLocaleParam(href: string): string {
  if (href.startsWith("#") || !href.includes("lang=")) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const pathAndQuery = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const [pathname, existingQuery = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(existingQuery);
  params.delete("lang");
  const query = params.toString();
  return `${pathname}${query ? `?${query}` : ""}${hash}`;
}

export function localeFromSearchParams(searchParams: URLSearchParams): Locale | null {
  const lang = searchParams.get("lang");
  return isLocale(lang) ? lang : null;
}
