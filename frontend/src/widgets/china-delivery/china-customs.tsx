/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import type { RouteDeliveryVariant } from "@/widgets/china-delivery/route-delivery-assets";

export function ChinaCustoms({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;

  return (

    <section className="bg-black pt-[3.25rem] pb-[3.25rem] md:pt-[4.6875rem] md:pb-[3.6875rem]">
      <div className={`flex flex-col gap-[2.5rem] ${chinaPad}`}>
        <div className="flex flex-col gap-[1rem]">
          <SectionEyebrow className={chinaEyebrow}>{t.customs.eyebrow}</SectionEyebrow>
          <h2 className="max-w-[30.8125rem] text-[1.25rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[clamp(1.25rem,1.75vw,1.75rem)]">
            {t.customs.title}
          </h2>
        </div>

        <div className="flex flex-col gap-[0.5rem] md:flex-row">
          {t.customs.cards.map((card, index) => (
            <div
              key={card}
              className="relative flex min-h-[7.25rem] flex-1 items-center overflow-hidden rounded-[0.5rem] bg-[#151515] px-[1.5rem] py-[1.5rem] md:h-[7.25rem] md:py-0"
            >
              <span className="max-w-[19.375rem] text-[1.5rem] leading-[1.1] font-medium tracking-[-0.0125rem] text-white md:text-[clamp(1.5rem,2vw,2rem)]">
                {card}
              </span>
              <span className="absolute top-[1.25rem] right-[1.25rem] font-mono text-[0.75rem] tracking-[-0.075rem] text-white/12 uppercase">
                {"/".repeat(index + 1)}
              </span>
            </div>
          ))}
        </div>

        <p className="max-w-[53.0625rem] text-[1rem] leading-[1.2] text-white/48 md:text-[clamp(1rem,1.25vw,1.25rem)]">
          {t.customs.note}
        </p>
      </div>
    </section>
  );
}
