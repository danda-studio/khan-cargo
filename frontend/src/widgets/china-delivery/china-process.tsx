"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaBtn, chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import type { RouteDeliveryVariant } from "@/widgets/china-delivery/route-delivery-assets";

export function ChinaProcess({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;

  return (
    <section className="bg-page pt-[3.25rem] md:pt-[5rem]">
      <div className={`flex flex-col ${chinaPad}`}>
        <SectionEyebrow className={chinaEyebrow}>{t.process.eyebrow}</SectionEyebrow>

        <div className="mt-[1rem] flex flex-col gap-[2rem] md:mt-[2.25rem] md:flex-row md:items-start md:justify-between md:gap-[4.5rem]">
          <p className="max-w-[43rem] flex-1 text-[1.25rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[clamp(1.5rem,1.75vw,1.75rem)]">
            <span>{t.process.title} </span>
            <span className="text-white/48">{t.process.titleMuted}</span>
          </p>

          <div className="flex w-full flex-col md:w-[min(35.75rem,40%)] md:shrink-0">
            <p className="text-[1rem] leading-[1.2] text-white/48 md:text-[clamp(1rem,1.25vw,1.25rem)]">
              {t.process.side}
            </p>
            <div className="mt-[2rem] mb-[3.25rem] flex self-start md:mt-[3.125rem] md:mb-[5rem]">
              <ContactFormDialog trigger={<Button className={chinaBtn}>{t.process.cta}</Button>} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
