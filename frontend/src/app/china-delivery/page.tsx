/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { defaultLocale, dictionary } from "@/shared/config/i18n/dictionary";
import { ChinaDeliveryPage } from "@/views/china-delivery-page/china-delivery-page";

const copy = dictionary[defaultLocale].chinaDelivery;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/china-delivery" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "/china-delivery",
  },
};

export default function Page() {
  return <ChinaDeliveryPage />;
}
