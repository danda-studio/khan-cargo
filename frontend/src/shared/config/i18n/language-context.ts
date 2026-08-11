/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Dictionary, Locale } from "./dictionary";
import { createContext, use } from "react";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = use(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslations() {
  return useLanguage().t;
}
