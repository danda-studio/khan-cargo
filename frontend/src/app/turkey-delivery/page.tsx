import type { Metadata } from "next";
import { TurkeyDeliveryPage } from "@/views/turkey-delivery-page/turkey-delivery-page";
import { dictionary, defaultLocale } from "@/shared/config/i18n/dictionary";

const copy = dictionary[defaultLocale].turkeyDelivery;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

export default function Page() {
  return <TurkeyDeliveryPage />;
}
