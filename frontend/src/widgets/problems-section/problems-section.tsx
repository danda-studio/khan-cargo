"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

const ICONS = [
  "/images/icon-problem-1.svg",
  "/images/icon-problem-2.svg",
  "/images/icon-problem-3.svg",
  "/images/icon-problem-4.svg",
];

export function ProblemsSection() {
  const t = useTranslations();

  return (
    <section id="xidmetler" className="scroll-mt-[4rem] bg-black py-[3.25rem] md:scroll-mt-[6rem] md:py-[6.6667rem]">
      <Container className="flex flex-col gap-[2rem] md:gap-[3rem]">
        <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
          <SectionEyebrow>{t.problems.eyebrow}</SectionEyebrow>
          <h2 className="max-w-[16.3125rem] text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:max-w-[31.6667rem] md:text-[3rem] md:tracking-[-0.0167rem]">
            {t.problems.title}
          </h2>
        </div>

        <div className="scrollbar-hide -mx-[1rem] flex w-[calc(100%+2rem)] flex-row gap-[0.5rem] overflow-x-auto pl-[1rem] md:mx-0 md:w-full md:gap-[0.6667rem] md:overflow-visible md:pl-0">
          {t.problems.items.map((problem, index) => (
            <div
              key={problem.title}
              className="flex min-h-[17.375rem] w-[19.5rem] shrink-0 flex-col justify-between gap-[4rem] rounded-[0.5rem] bg-surface-1 p-[1.25rem] shadow-[1px_1px_1.5px_rgba(14,14,14,0.12)] md:min-h-[23.1667rem] md:w-auto md:min-w-0 md:flex-1 md:shrink md:p-[1.6667rem]"
            >
              <img src={ICONS[index]} alt="" className="size-[2rem] md:size-[4rem]" />
              <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
                <h3 className="text-[1.25rem] text-white md:text-[1.6667rem]">{problem.title}</h3>
                <p className="text-[1rem] leading-[1.2] text-white/48 md:text-[1.3333rem]">{problem.description}</p>
              </div>
            </div>
          ))}
          <div className="w-[0.5rem] shrink-0 md:hidden" aria-hidden />
        </div>

        <p className="text-[1rem] leading-[1.2] font-medium text-white/48 md:text-[1.3333rem]">
          {t.problems.caption}
        </p>
      </Container>
    </section>
  );
}
