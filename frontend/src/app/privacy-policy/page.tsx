/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/views/privacy-policy-page/privacy-policy-page";
import { dictionary, defaultLocale } from "@/shared/config/i18n/dictionary";

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
