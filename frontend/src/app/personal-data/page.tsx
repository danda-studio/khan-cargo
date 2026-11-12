/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { defaultLocale, dictionary } from "@/shared/config/i18n/dictionary";
import { PersonalDataPage } from "@/views/personal-data-page/personal-data-page";

const copy = dictionary[defaultLocale].legalPages.personalData;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/personal-data" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "/personal-data",
  },
};

export default function Page() {
  return <PersonalDataPage />;
}
