"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { AzerbaijanMap } from "@/shared/ui/azerbaijan-map/azerbaijan-map";
import { Button } from "@/shared/ui/button/button";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaBtn, chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";

function StatCard({
  value,
  label,
  slashes,
}: {
  value: string;
  label: string;
  slashes: number;
}) {
  return (
    <div className="relative h-[7.25rem] flex-1 overflow-hidden rounded-[0.5rem] bg-surface-2 px-[1.5rem] py-[1.5rem]">
      <div className="flex h-full flex-col justify-center gap-[0.5rem]">
        <p className="text-[2.25rem] leading-[1.1] font-medium tracking-[-0.0125rem] text-white">
          {value}
        </p>
        <p className="text-[1rem] leading-[1.24] text-white/48">{label}</p>
      </div>
      <span
        aria-hidden
        className="absolute top-[1.25rem] right-[1.25rem] font-mono text-[0.75rem] leading-[0.75rem] tracking-[-0.075rem] text-white/12 uppercase"
      >
        {"/".repeat(slashes)}
      </span>
    </div>
  );
}

export function AboutProblem() {
  const t = useTranslations().aboutCompany;

  return (
    <section className={`bg-page pt-[3rem] pb-[2rem] md:pt-[5rem] md:pb-[3rem] ${chinaPad}`}>
      <div className="flex flex-col gap-[2rem] md:grid md:grid-cols-[minmax(0,38.625rem)_minmax(0,41.5rem)] md:items-start md:gap-x-[3.75rem]">
        <div className="flex flex-col gap-[1rem]">
          <SectionEyebrow className={chinaEyebrow}>{t.problem.eyebrow}</SectionEyebrow>
          <p className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[1.75rem]">
            {t.problem.body}
          </p>
        </div>

        <div className="mx-[-1rem] w-[calc(100%+2rem)] md:mx-0 md:w-full">
          <AzerbaijanMap alt="" pinLayout="china" />
        </div>

        <div className="flex flex-col gap-[1.5rem] md:col-start-1 md:row-start-2 md:mt-[-8rem] md:max-w-[26.3rem]">
          <p className="text-[1.25rem] leading-[1.2] text-white/48 md:text-[1.5rem]">
            {t.problem.solution}
          </p>
          <ContactFormDialog
            trigger={<Button className={`${chinaBtn} self-start`}>{t.problem.cta}</Button>}
          />
        </div>
      </div>

      <div className="mt-[2rem] flex flex-col gap-[0.5rem] md:mt-[3rem] md:flex-row md:gap-[0.5rem]">
        {t.stats.map(stat => (
          <StatCard key={stat.value} {...stat} />
        ))}
      </div>
    </section>
  );
}
