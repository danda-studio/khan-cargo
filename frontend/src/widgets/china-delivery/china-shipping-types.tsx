/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import type { RouteDeliveryVariant } from "@/widgets/china-delivery/route-delivery-assets";
import { useLayoutEffect, useRef } from "react";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { cn } from "@/shared/lib/cn";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import { routeDeliveryCopy } from "@/widgets/china-delivery/route-delivery-assets";

function MatrixChip({ className, children }: { className: string; children: string }) {
  const chipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const chip = chipRef.current;
    const parent = chip?.parentElement;
    const label = chip?.firstElementChild;
    if (!chip || !parent || !label) {
      return;
    }

    const fit = () => {
      chip.style.width = "";
      const range = document.createRange();
      range.selectNodeContents(label);
      const style = getComputedStyle(chip);
      const padding = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight);
      const textWidth = range.getBoundingClientRect().width;
      if (textWidth > 0 && textWidth + padding < chip.getBoundingClientRect().width) {
        chip.style.width = `${Math.ceil(textWidth + padding)}px`;
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(parent);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div ref={chipRef} className={className}>
      <span className="text-left text-[1rem] leading-none font-semibold text-white">{children}</span>
    </div>
  );
}

function withUniqueKeys(items: string[]) {
  const seen = new Map<string, number>();
  return items.map((item) => {
    const count = (seen.get(item) ?? 0) + 1;
    seen.set(item, count);
    return { item, key: count === 1 ? item : `${item}#${count}` };
  });
}

function MatrixSection({
  eyebrow,
  title,
  rowLabels,
  rows,
  chipBg = "bg-[#151515]",
  titleMaxW = "max-w-[23.75rem]",
  mobileChipGaps = ["max-md:gap-[0.5rem]", "max-md:gap-[0.75rem]", "max-md:gap-[0.75rem]"],
  mobileLastPad = "max-md:pb-0",
}: {
  eyebrow: string;
  title: string;
  rowLabels: string[];
  rows: string[][];
  chipBg?: string;
  titleMaxW?: string;
  mobileChipGaps?: string[];
  mobileLastPad?: string;
}) {
  return (
    <div className="flex flex-col gap-[2.5rem] md:gap-[3.75rem]">
      <div className="flex flex-col gap-[1rem]">
        <SectionEyebrow className={chinaEyebrow}>{eyebrow}</SectionEyebrow>
        <h2 className={`${titleMaxW} text-[1.75rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[clamp(1.5rem,2.25vw,2.25rem)]`}>
          {title}
        </h2>
      </div>

      {}
      <div className="relative flex flex-col">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 left-[13.125rem] hidden w-px bg-white/20 md:block"
        />

        {rowLabels.map((label, rowIndex) => (
          <div
            key={label}
            className={cn(
              "flex flex-col gap-[1.5rem] py-[1.375rem] md:flex-row md:items-center md:gap-[3.75rem] md:py-[1.75rem]",
              rowIndex === 0 && "max-md:pt-0",
              rowIndex === rowLabels.length - 1 && mobileLastPad,
              rowIndex < rowLabels.length - 1 && "border-b border-solid border-white/20",
            )}
          >
            <div className="flex w-auto shrink-0 self-start md:w-[11.25rem]">
              <div className="flex h-12 items-center justify-center rounded-[0.25rem] bg-accent px-[1.9375rem] md:w-full md:px-[1rem]">
                <span className="text-center whitespace-nowrap text-[1rem] leading-none font-semibold text-black">{label}</span>
              </div>
            </div>

            <div className={cn("flex min-w-0 flex-1 flex-col md:flex-row md:flex-wrap md:gap-[0.75rem]", mobileChipGaps[rowIndex] ?? mobileChipGaps[0])}>
              {withUniqueKeys(rows[rowIndex] ?? []).map(({ item, key }) => (
                <MatrixChip
                  key={key}
                  className={cn(
                    "inline-flex min-h-12 items-center justify-center self-start rounded-[0.25rem] px-[1.9375rem] py-4",
                    chipBg,
                  )}
                >
                  {item}
                </MatrixChip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChinaShippingTypes({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = routeDeliveryCopy(dict, variant);
  const rows = [0, 1, 2].map(rowIndex =>
    t.shippingTypes.columns.map(col => col[rowIndex]).filter(Boolean),
  );
  const titleMaxW = variant === "uzbekistan" ? "max-w-[31.75rem]" : undefined;

  return (
    <section className="bg-black pt-[3.25rem] pb-0 md:pt-[5rem] md:pb-[5rem]">
      <div className={chinaPad}>
        <MatrixSection
          eyebrow={t.shippingTypes.eyebrow}
          title={t.shippingTypes.title}
          rowLabels={t.shippingTypes.rowLabels}
          rows={rows}
          titleMaxW={titleMaxW}
        />
      </div>
    </section>
  );
}

export function ChinaClients({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = routeDeliveryCopy(dict, variant);
  const titleMaxW = variant === "uzbekistan" ? "max-w-[29.5rem]" : undefined;

  return (

    <section className="bg-page pt-[3.25rem] pb-[3.25rem] md:pt-[5rem] md:pb-[5rem]">
      <div className={`flex flex-col gap-[2rem] ${chinaPad}`}>
        <MatrixSection
          eyebrow={t.clients.eyebrow}
          title={t.clients.title}
          rowLabels={t.clients.rowLabels}
          rows={t.clients.rows}
          chipBg="bg-surface-2"
          titleMaxW={titleMaxW}
          mobileChipGaps={["max-md:gap-[0.75rem]"]}
          mobileLastPad="max-md:pb-[2.5rem]"
        />
        <p className="max-w-[40.0625rem] text-[1rem] leading-[1.2] font-medium text-white/48 md:text-[1rem]">
          {t.clients.note}
        </p>
      </div>
    </section>
  );
}
