/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { defaultLocale, dictionary } from "@/shared/config/i18n/dictionary";
import { UzbekistanDeliveryPage } from "@/views/uzbekistan-delivery-page/uzbekistan-delivery-page";

const copy = dictionary[defaultLocale].uzbekistanDelivery;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/uzbekistan-delivery" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "/uzbekistan-delivery",
  },
};

export default function Page() {
  return <UzbekistanDeliveryPage />;
}
