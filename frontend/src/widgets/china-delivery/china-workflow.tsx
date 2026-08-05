"use client";

import { contactPhones } from "@/shared/config/contacts";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import {
  routeDeliveryAssets,
  type RouteDeliveryVariant,
} from "@/widgets/china-delivery/route-delivery-assets";

export function ChinaWorkflow({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;
  const images = routeDeliveryAssets[variant];
  const icons = images.workflowIcons;
  const phone = variant === "turkey" ? contactPhones.tr : contactPhones.cn;

  return (
    <section className="overflow-x-clip bg-black pt-[3.25rem] pb-[3.25rem] lg:pt-[3.6875rem] lg:pb-[5rem]">
      <div className="flex flex-col gap-[2.5rem]">
        <div className={`flex flex-col gap-[1rem] ${chinaPad}`}>
          <SectionEyebrow className={chinaEyebrow}>{t.workflow.eyebrow}</SectionEyebrow>
          <h2 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white lg:text-[clamp(1.5rem,2.25vw,2.25rem)]">
            {t.workflow.title}
          </h2>
        </div>

        <div className="scrollbar-hide flex gap-[0.5rem] overflow-x-auto pl-[1rem] lg:overflow-visible lg:px-[2.25rem]">
          {t.workflow.steps.map((step, index) => (
            <div
              key={step}
              className="flex h-[12rem] w-[17.5rem] shrink-0 flex-col justify-between rounded-[0.375rem] bg-[#151515] p-[1.25rem] lg:h-auto lg:min-h-[12rem] lg:w-auto lg:min-w-0 lg:flex-1"
            >
              <img src={icons[index] ?? icons[0]} alt="" className="size-[3rem]" />
              <p className="text-[1.125rem] leading-[1.2] text-white lg:text-[1.25rem]">{step}</p>
            </div>
          ))}
          <div className="w-[1rem] shrink-0 lg:hidden" aria-hidden />
        </div>

        <div className={chinaPad}>
          <div className="relative lg:pt-[2.75rem]">
            <div className="relative flex flex-col overflow-hidden rounded-[0.375rem] bg-accent lg:min-h-[12rem] lg:overflow-visible">
              {/* Desktop truck — Figma absolute crop */}
              <div className="pointer-events-none absolute bottom-0 left-[38.38%] z-[1] hidden h-[14.75rem] w-[28.75rem] overflow-hidden lg:block">
                <img
                  src={images.truck}
                  alt=""
                  className="absolute top-[-37.39%] left-[-23.48%] h-[199.52%] w-[144.35%] max-w-none"
                />
              </div>

              <div className="relative z-10 flex w-full flex-col justify-between gap-[1.5rem] p-[1.5rem] lg:flex-row lg:items-start">
                <div className="flex max-w-[24.5625rem] flex-col gap-[1rem]">
                  <p className="text-[1.5rem] leading-[1.2] tracking-[-0.0125rem] text-black lg:text-[clamp(1.5rem,2.25vw,2.25rem)] lg:leading-9">
                    {t.workflow.bannerTitle}
                  </p>
                  <p className="text-[1rem] leading-[1.25rem] font-medium text-black/48">
                    {t.workflow.bannerSubtitle}
                  </p>
                </div>

                <div className="flex w-full flex-col gap-[0.5rem] lg:w-[20.5rem] lg:shrink-0">
                  <a
                    href={`tel:${phone.tel}`}
                    className="flex h-[4.25rem] items-center justify-between rounded-[0.5rem] bg-white px-[1.5rem] transition-opacity hover:opacity-90"
                  >
                    <span className="text-[1rem] leading-[1.2] font-medium text-black">
                      {t.workflow.callLabel}
                    </span>
                    <img src="/images/arrow-top-right-1.svg" alt="" className="size-[1.25rem]" />
                  </a>
                  <a
                    href="mailto:info@khan.az"
                    className="flex h-[4.25rem] items-center justify-between rounded-[0.5rem] bg-surface-2 px-[1.5rem] transition-opacity hover:opacity-90"
                  >
                    <span className="text-[1rem] leading-[1.2] font-medium text-white">
                      {t.workflow.emailLabel}
                    </span>
                    <img src="/images/arrow-top-right-2.svg" alt="" className="size-[1.25rem]" />
                  </a>
                </div>
              </div>

              {/* Phone — Figma mobile crop */}
              <div className="relative h-[11.5rem] w-[109.756%] shrink-0 overflow-hidden md:hidden">
                <img
                  src={images.truck}
                  alt=""
                  className="absolute top-[-37.39%] left-[-23.48%] h-[199.52%] w-[144.35%] max-w-none"
                />
              </div>

              {/* Tablet — fixed crop window like desktop */}
              <div className="relative mx-auto hidden h-[14.75rem] w-full max-w-[28.75rem] shrink-0 overflow-hidden md:block lg:hidden">
                <img
                  src={images.truck}
                  alt=""
                  className="absolute top-[-37.39%] left-[-23.48%] h-[199.52%] w-[144.35%] max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
