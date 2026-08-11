/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { AzerbaijanMap } from "@/shared/ui/azerbaijan-map/azerbaijan-map";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function StatsSection() {
  const t = useTranslations();

  return (
    <section id="sirket" className="scroll-mt-[4rem] bg-page pt-[3.25rem] pb-[2.25rem] md:scroll-mt-[6rem] md:pt-[5rem]">
      <Container className="flex flex-col gap-0 md:gap-[3.5rem]">
        <div className="flex flex-col gap-[2.25rem] md:flex-row md:items-start md:justify-between md:gap-[2rem] xl:gap-[4rem]">
          {}
          <div className="relative z-20 flex w-full min-w-0 flex-col gap-[1.5rem] md:max-w-[49.6667rem] md:flex-1 md:gap-[2.25rem]">
            <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
              <SectionEyebrow>{t.stats.eyebrow}</SectionEyebrow>
              <h2 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] md:text-[2.5vw] md:tracking-[-0.0167rem]">
                <span className="text-accent">{t.stats.titleHighlight}</span>
                <span className="text-white">{t.stats.titleRest}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-[1.5rem] md:gap-[2.25rem]">
              <p className="max-w-[30.3333rem] text-[1rem] leading-[1.2] text-white/48 md:text-[1.3333rem]">
                {t.stats.paragraph}
              </p>
              <ContactFormDialog trigger={<Button className="w-full md:w-fit">{t.stats.cta}</Button>} />
            </div>
          </div>

          <AzerbaijanMap
            alt={t.stats.mapAlt}
            className="relative mx-auto aspect-[779/668] w-full max-w-[22.5rem] shrink-0 sm:max-w-[28rem] md:mx-0 md:w-[48%] md:max-w-[64.9167rem] md:flex-1"
          />
        </div>

        <div className="relative z-10 mt-[2.5rem] flex flex-col gap-[0.5rem] md:mt-[-8.0833rem] md:flex-row md:gap-[0.6667rem]">
          {t.stats.items.map((stat, index) => (
            <div key={stat.label} className="relative flex min-h-[9.25rem] flex-1 items-center overflow-hidden rounded-[0.5rem] bg-surface-2 px-[1.5rem] py-[1.5rem] md:min-h-[9.6667rem] md:rounded-[0.6667rem] md:px-[2rem] md:py-[2rem]">
              <div className="flex flex-col gap-[0.5rem] md:gap-[0.6667rem]">
                <span className="text-[2.75rem] leading-[1.1] font-medium tracking-[-0.0167rem] text-white md:text-[3rem]">{stat.value}</span>
                <span className="text-[1.125rem] leading-[1.24] text-white/48 md:text-[1.3333rem]">{stat.label}</span>
              </div>
              <span className="absolute top-[1.5rem] right-[1.5rem] font-mono text-[1rem] tracking-[-0.1rem] text-white/12 uppercase md:top-[1.6667rem] md:right-[1.6667rem]">
                {"/".repeat(index + 1)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
