"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { LegalDocumentPage } from "@/views/legal-document-page/legal-document-page";

export function PersonalDataPage() {
  const t = useTranslations();
  return <LegalDocumentPage doc={t.legalPages.personalData} />;
}
