/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { LegalDocumentPage } from "@/views/legal-document-page/legal-document-page";

export function PrivacyPolicyPage() {
  const t = useTranslations();
  return <LegalDocumentPage doc={t.legalPages.privacyPolicy} />;
}
