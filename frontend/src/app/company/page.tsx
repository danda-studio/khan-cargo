/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { defaultLocale, dictionary } from "@/shared/config/i18n/dictionary";
import { AboutCompanyPage } from "@/views/about-company-page/about-company-page";

const copy = dictionary[defaultLocale].aboutCompany;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/company" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "/company",
  },
};

export default function Page() {
  return <AboutCompanyPage />;
}
