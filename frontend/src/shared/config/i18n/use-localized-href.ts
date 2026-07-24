"use client";

import { useLanguage } from "@/shared/config/i18n/language-context";
import { withLocale } from "@/shared/config/i18n/locale-path";

export function useLocalizedHref() {
  const { locale } = useLanguage();
  return (href: string) => withLocale(href, locale);
}
