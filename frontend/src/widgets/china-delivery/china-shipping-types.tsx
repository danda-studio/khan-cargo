"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { cn } from "@/shared/lib/cn";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import type { RouteDeliveryVariant } from "@/widgets/china-delivery/route-delivery-assets";

function MatrixSection({
  eyebrow,
  title,
  rowLabels,
  rows,
  chipBg = "bg-[#151515]",
}: {
  eyebrow: string;
  title: string;
  rowLabels: string[];
  rows: string[][];
  chipBg?: string;
}) {
  return (
    <div className="flex flex-col gap-[2.5rem] md:gap-[3.75rem]">
      <div className="flex flex-col gap-[1rem]">
        <SectionEyebrow className={chinaEyebrow}>{eyebrow}</SectionEyebrow>
        <h2 className="max-w-[23.75rem] text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[clamp(1.5rem,2.25vw,2.25rem)]">
          {title}
        </h2>
      </div>

      {/* Mobile 66:867+ — yellow label then vertical chips · Desktop — H matrix */}
      <div className="relative flex flex-col">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 bottom-0 left-[13.125rem] hidden w-px bg-white/20 md:block"
        />

        {rowLabels.map((label, rowIndex) => (
          <div
            key={label}
            className={cn(
              "flex flex-col gap-[0.75rem] py-[1.75rem] md:flex-row md:items-center md:gap-[3.75rem]",
              rowIndex < rowLabels.length - 1 && "border-b border-solid border-white/20",
            )}
          >
            <div className="flex w-auto shrink-0 self-start md:w-[11.25rem]">
              <div className="flex h-12 items-center justify-center rounded-[0.25rem] bg-accent px-[1.9375rem] md:w-full">
                <span className="text-center text-[1rem] leading-none font-semibold text-black">{label}</span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-[0.75rem] md:flex-row md:flex-wrap">
              {(rows[rowIndex] ?? []).map(item => (
                <div
                  key={item}
                  className={cn(
                    "inline-flex h-12 items-center justify-center self-start rounded-[0.25rem] px-[1.9375rem]",
                    chipBg,
                  )}
                >
                  <span className="text-center text-[1rem] leading-none font-semibold text-white">{item}</span>
                </div>
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
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;
  const rows = [0, 1, 2].map(rowIndex => t.shippingTypes.columns.map(col => col[rowIndex]));

  return (
    <section className="bg-black pt-[3.25rem] pb-[3.25rem] md:pt-[5rem] md:pb-[5rem]">
      <div className={chinaPad}>
        <MatrixSection
          eyebrow={t.shippingTypes.eyebrow}
          title={t.shippingTypes.title}
          rowLabels={t.shippingTypes.rowLabels}
          rows={rows}
        />
      </div>
    </section>
  );
}

export function ChinaClients({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;

  return (
    /* Figma: 80px under note before local-delivery photo */
    <section className="bg-page pt-[3.25rem] pb-[3.25rem] md:pt-[5rem] md:pb-[5rem]">
      <div className={`flex flex-col gap-[2rem] ${chinaPad}`}>
        <MatrixSection
          eyebrow={t.clients.eyebrow}
          title={t.clients.title}
          rowLabels={t.clients.rowLabels}
          rows={t.clients.rows}
          chipBg="bg-surface-2"
        />
        <p className="max-w-[40.0625rem] text-[1rem] leading-[1.2] text-white/48 md:text-[clamp(1rem,1.25vw,1.25rem)]">
          {t.clients.note}
        </p>
      </div>
    </section>
  );
}
