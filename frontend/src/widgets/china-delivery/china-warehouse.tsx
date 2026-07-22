"use client";

import Image from "next/image";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import {
  routeDeliveryAssets,
  type RouteDeliveryVariant,
} from "@/widgets/china-delivery/route-delivery-assets";

export function ChinaWarehouse({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;
  const images = routeDeliveryAssets[variant];

  return (
    <section className="relative overflow-hidden">
      <div className="md:hidden">
        <div className="relative aspect-[360/281] w-full">
          <Image
            src={images.warehouseSm}
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className={`relative z-10 -mt-[3.6875rem] pb-[3.25rem] ${chinaPad}`}>
          <div className="flex flex-col rounded-[0.375rem] bg-accent p-[1.5rem]">
            <SectionEyebrow onAccent className={`${chinaEyebrow} mb-[2rem]`}>
              {t.warehouse.eyebrow}
            </SectionEyebrow>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[1rem] leading-[1.2] font-medium text-black">{t.warehouse.title}</p>
              <p className="text-[1rem] leading-[1.2] font-medium text-black/48">{t.warehouse.body}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[47.5rem] md:flex">
        <Image
          src={images.warehouse}
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        <div className={`relative flex min-h-[47.5rem] flex-1 items-end py-[2.25rem] ${chinaPad}`}>
          <div className="flex w-full max-w-[47rem] flex-col rounded-[0.375rem] bg-accent p-[1.5rem]">
            <SectionEyebrow onAccent className={`${chinaEyebrow} mb-[2rem]`}>
              {t.warehouse.eyebrow}
            </SectionEyebrow>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[clamp(1.5rem,2.25vw,2.25rem)] leading-9 tracking-[-0.0125rem] text-black">
                {t.warehouse.title}
              </p>
              <p className="text-[1rem] leading-[1.2] font-medium text-black/48">{t.warehouse.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
