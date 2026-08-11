/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useState } from "react";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { cn } from "@/shared/lib/cn";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import type { RouteDeliveryVariant } from "@/widgets/china-delivery/route-delivery-assets";

export function ChinaFaq({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;
  const [openIndex, setOpenIndex] = useState(1);

  return (

    <section className="bg-page pt-[3.25rem] pb-[3.25rem] md:pt-[5rem] md:pb-[5rem]">
      <div
        className={`flex flex-col gap-[2rem] md:flex-row md:items-start md:justify-between md:gap-[3rem] ${chinaPad}`}
      >
        <div className="flex flex-col gap-[1rem] md:sticky md:top-[7rem] md:max-w-[23.75rem]">
          <SectionEyebrow className={chinaEyebrow}>{t.faq.eyebrow}</SectionEyebrow>
          <h2 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[clamp(2rem,3.5vw,3.5rem)]">
            {t.faq.title}
          </h2>
        </div>

        <div className="flex w-full flex-col gap-[0.75rem] md:max-w-[40.125rem]">
          {t.faq.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <button
                key={item.q}
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className={cn(
                  "flex w-full cursor-pointer gap-[0.75rem] rounded-[0.75rem] p-[1.75rem] text-left transition-colors",
                  open ? "items-start bg-accent" : "items-center bg-surface-2",
                )}
              >
                <div className="flex min-w-0 flex-1 flex-col gap-[0.75rem]">
                  <span
                    className={cn(
                      "text-[1.125rem] leading-none font-medium md:text-[1.25rem]",
                      open ? "text-black" : "text-white",
                    )}
                  >
                    {item.q}
                  </span>
                  {open && (
                    <span className="text-[1rem] leading-[1.2] font-medium text-black/48 md:text-[1.1875rem]">
                      {item.a}
                    </span>
                  )}
                </div>
                <span className="relative size-[2rem] shrink-0 opacity-40">
                  <img
                    src={
                      open
                        ? "/images/china-delivery/faq-plus-active.svg"
                        : "/images/china-delivery/faq-plus.svg"
                    }
                    alt=""
                    className={cn("size-full", open && "rotate-45")}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
