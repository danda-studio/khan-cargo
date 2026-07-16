"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function StatsSection() {
  const t = useTranslations();

  return (
    <section className="bg-page pt-[5rem] pb-[2.25rem]">
      <Container className="flex flex-col gap-[3.5rem]">
        <div className="flex flex-col items-center gap-[4rem] lg:flex-row lg:items-start lg:justify-between">
          <div className="relative z-20 flex w-full max-w-[49.6667rem] flex-col gap-[3.3333rem]">
            <div className="flex flex-col gap-[1.3333rem]">
              <SectionEyebrow>{t.stats.eyebrow}</SectionEyebrow>
              <h2 className="text-[3rem] leading-[1.1] tracking-[-0.0167rem]">
                <span className="text-accent">{t.stats.titleHighlight}</span>
                <span className="text-white">{t.stats.titleRest}</span>
              </h2>
            </div>

            <div className="mt-[13.2rem] flex flex-col gap-[2.25rem]">
              <p className="max-w-[30.3333rem] text-[1.3333rem] leading-[1.2] text-white/48">
                {t.stats.paragraph}
              </p>
              <ContactFormDialog trigger={<Button className="w-fit">{t.stats.cta}</Button>} />
            </div>
          </div>

          <div className="relative aspect-[779/668] w-full max-w-[64.9167rem] shrink-0">
            <img src="/images/map-image.png" alt={t.stats.mapAlt} className="absolute inset-0 size-full object-contain" />
            <img src="/images/map-pin-illustration.svg" alt="" className="absolute top-[23%] left-[21%] h-[55.11%] w-[59%]" />
          </div>
        </div>

        <div className="relative z-10 mt-[-8.0833rem] flex flex-col gap-[0.6667rem] lg:flex-row">
          {t.stats.items.map((stat, index) => (
            <div key={stat.label} className="relative flex h-[9.6667rem] flex-1 items-center overflow-hidden rounded-[0.6667rem] bg-surface-2 px-[2rem]">
              <div className="flex flex-col gap-[0.6667rem]">
                <span className="text-[3rem] leading-[1.1] font-medium tracking-[-0.0167rem] text-white">{stat.value}</span>
                <span className="text-[1.3333rem] leading-[1.24] text-white/48">{stat.label}</span>
              </div>
              <span className="absolute top-[1.6667rem] right-[1.6667rem] font-mono text-[1rem] tracking-[-0.1rem] text-white/12 uppercase">
                {"/".repeat(index + 1)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
