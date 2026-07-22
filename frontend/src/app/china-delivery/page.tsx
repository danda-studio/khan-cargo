import type { Metadata } from "next";
import { ChinaDeliveryPage } from "@/views/china-delivery-page/china-delivery-page";
import { dictionary, defaultLocale } from "@/shared/config/i18n/dictionary";

const copy = dictionary[defaultLocale].chinaDelivery;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

export default function Page() {
  return <ChinaDeliveryPage />;
}
