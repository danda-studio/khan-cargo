/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { AzerbaijanMap } from "@/shared/ui/azerbaijan-map/azerbaijan-map";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { cn } from "@/shared/lib/cn";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import type { RouteDeliveryVariant } from "@/widgets/china-delivery/route-delivery-assets";

function StageColumns({
  left,
  right,
  mid,
  total,
}: {
  left: string[];
  right: string[];
  mid: number;
  total: number;
}) {
  return (
    <div className="mt-[2rem] flex flex-col gap-[0.75rem] md:flex-row">
      {[left, right].map((column, colIndex) => (
        <div key={colIndex} className="flex min-w-0 flex-1 flex-col gap-[0.75rem]">
          {column.map((stage, index) => {
            const n = colIndex * mid + index + 1;
            const highlight = n === total;
            return (
              <div
                key={stage}
                className={cn(
                  "flex h-[2.75rem] w-full items-center gap-[0.75rem] rounded-[0.1875rem] px-[0.925rem]",
                  highlight ? "bg-accent text-black" : "bg-surface-2 text-white",
                )}
              >
                <span
                  className={cn(
                    "shrink-0 font-mono text-[0.75rem] leading-[1.1] uppercase opacity-80",
                    highlight ? "text-black" : "text-white",
                  )}
                >
                  {String(n).padStart(2, "0")}
                </span>
                <span className="text-[0.75rem] leading-[1.1]">{stage}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function ChinaInsurance({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;
  const mid = Math.ceil(t.insurance.stages.length / 2);
  const left = t.insurance.stages.slice(0, mid);
  const right = t.insurance.stages.slice(mid);

  return (
    <section className="overflow-x-clip bg-page pt-[3.25rem] pb-[5rem] md:pt-[3.875rem]">
      {}
      <div className={`flex flex-col gap-[2.5rem] md:hidden ${chinaPad}`}>
        <div className="flex flex-col gap-[1rem]">
          <SectionEyebrow className={chinaEyebrow}>{t.insurance.eyebrow}</SectionEyebrow>
          <h2 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white">{t.insurance.title}</h2>
        </div>
        <p className="text-[1rem] leading-[1.2] text-white/48">{t.insurance.body}</p>
      </div>

      
      <div className="relative mt-[2.5rem] w-[107.7778%] -translate-x-[4.1667%] md:hidden">
        <AzerbaijanMap alt={t.insurance.mapAlt} pinLayout="china" className="w-full" />
      </div>

      <div className={`mt-[2.5rem] md:hidden ${chinaPad}`}>
        <h3 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white">
          {t.insurance.stagesTitle}
        </h3>
        <StageColumns left={left} right={right} mid={mid} total={t.insurance.stages.length} />
      </div>

      
      <div
        className={`hidden flex-col gap-[2.5rem] md:flex md:flex-row md:items-start md:justify-between md:gap-[2rem] ${chinaPad}`}
      >
        <div className="relative z-10 flex w-full flex-col md:w-[min(42.625rem,45%)] md:shrink-0 md:pt-[1.125rem]">
          <div className="flex flex-col gap-[1rem]">
            <SectionEyebrow className={chinaEyebrow}>{t.insurance.eyebrow}</SectionEyebrow>
            <h2 className="max-w-[38.625rem] text-[clamp(1.5rem,1.75vw,1.75rem)] leading-[1.1] tracking-[-0.0125rem] text-white">
              {t.insurance.title}
            </h2>
          </div>

          <p className="mt-[2rem] max-w-[35.75rem] text-[clamp(1rem,1.25vw,1.25rem)] leading-[1.2] text-white/48">
            {t.insurance.body}
          </p>

          <div>
            <h3 className="mt-[5rem] text-[clamp(1.5rem,1.75vw,1.75rem)] leading-[1.1] tracking-[-0.0125rem] text-white">
              {t.insurance.stagesTitle}
            </h3>
            <StageColumns left={left} right={right} mid={mid} total={t.insurance.stages.length} />
          </div>
        </div>

        <AzerbaijanMap
          alt={t.insurance.mapAlt}
          pinLayout="china"
          className="ml-auto w-[55.576%] max-w-[50.01875rem] shrink-0"
        />
      </div>
    </section>
  );
}
