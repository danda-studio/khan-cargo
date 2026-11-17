/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { defaultLocale, dictionary } from "@/shared/config/i18n/dictionary";
import { PrivacyPolicyPage } from "@/views/privacy-policy-page/privacy-policy-page";

const copy = dictionary[defaultLocale].legalPages.privacyPolicy;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
