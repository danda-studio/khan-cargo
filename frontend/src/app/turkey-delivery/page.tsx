/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Metadata } from "next";
import { defaultLocale, dictionary } from "@/shared/config/i18n/dictionary";
import { TurkeyDeliveryPage } from "@/views/turkey-delivery-page/turkey-delivery-page";

const copy = dictionary[defaultLocale].turkeyDelivery;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/turkey-delivery" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "/turkey-delivery",
  },
};

export default function Page() {
  return <TurkeyDeliveryPage />;
}
