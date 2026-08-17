/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { PersonalDataPage } from "@/views/personal-data-page/personal-data-page";
import { dictionary, defaultLocale } from "@/shared/config/i18n/dictionary";

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
