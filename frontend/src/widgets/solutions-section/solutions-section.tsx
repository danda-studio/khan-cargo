/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { Container } from "@/shared/ui/container/container";
import { FadeImage } from "@/shared/ui/fade-image/fade-image";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

const IMAGES = [
  "/images/solution-1.webp",
  "/images/solution-2.webp",
  "/images/solution-3.webp",
  "/images/solution-4.webp",
];

const INDEXES = ["01", "02", "03", "04"];

export function SolutionsSection() {
  const t = useTranslations();

  return (
    <section id="catdirilma" className="scroll-mt-[4rem] bg-page pt-[3.25rem] pb-0 md:scroll-mt-[6rem] md:pt-[6.6667rem]">
      <Container className="flex flex-col gap-[2rem] md:gap-[4.4rem]">
        <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
          <SectionEyebrow>{t.solutions.eyebrow}</SectionEyebrow>
          <div className="flex flex-col justify-between gap-[1.5rem] md:flex-row md:items-center md:gap-[2rem]">
            <h2 className="max-w-[19.75rem] text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:max-w-[43.6667rem] md:text-[3rem] md:tracking-[-0.0167rem]">
              {t.solutions.title}
            </h2>
            <p className="max-w-[20.5rem] text-[1rem] leading-[1.2] text-white/48 md:max-w-[37.3333rem] md:text-[1.3333rem]">
              {t.solutions.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
          {t.solutions.items.map((solution, index) => (
            <div
              key={solution.title}
              className="flex flex-col gap-[1.5rem] rounded-[0.75rem] bg-surface-2 p-[0.5rem] md:flex-row md:items-stretch md:gap-[2rem] md:rounded-[1rem] md:p-[1rem]"
            >
              <FadeImage
                src={IMAGES[index]}
                alt={solution.title}
                width={1600}
                height={893}
                sizes="(max-width: 768px) 100vw, min(880px, 58vw)"
                loading="lazy"
                className="h-[11rem] w-full rounded-[0.5rem] object-cover md:aspect-[660/302] md:h-auto md:w-[58%] md:max-w-[55rem] md:shrink-0 md:rounded-[0.6667rem]"
              />
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-[1.5rem] py-0 md:flex-row md:items-stretch md:gap-[2rem] md:py-[1.75rem]">
                <div className="flex min-w-0 max-w-[34.6667rem] flex-1 flex-col justify-center gap-[1rem] md:gap-[1.3333rem]">
                  <h3 className="text-[1.25rem] leading-[1.1] text-white md:text-[1.6667rem]">{solution.title}</h3>
                  <p className="text-[0.875rem] leading-[1.2] text-white/48 md:text-[1.3333rem]">{solution.description}</p>
                </div>
                <div className="flex flex-row justify-between text-right md:flex-col md:justify-between md:self-stretch">
                  <span className="text-[1rem] text-white/48 md:text-[1.3333rem]">{INDEXES[index]}</span>
                  <span className="font-mono text-[0.75rem] tracking-[-0.075rem] text-white/12 uppercase md:text-[1rem] md:tracking-[-0.1rem]">
                    {"/".repeat(index + 1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
