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
    <section className="bg-black py-[6.6667rem]">
      <Container className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[1.3333rem]">
          <SectionEyebrow>{t.problems.eyebrow}</SectionEyebrow>
          <h2 className="max-w-[31.6667rem] text-[3rem] leading-[1.1] tracking-[-0.0167rem] text-white">
            {t.problems.title}
          </h2>
        </div>

        <div className="flex flex-col gap-[0.6667rem] lg:flex-row">
          {t.problems.items.map((problem, index) => (
            <div key={problem.title} className="flex min-h-[23.1667rem] flex-1 flex-col justify-between gap-[4rem] rounded-[0.5rem] bg-surface-1 p-[1.6667rem] shadow-[1px_1px_1.5px_rgba(14,14,14,0.12)]">
              <img src={ICONS[index]} alt="" className="size-[4rem]" />
              <div className="flex flex-col gap-[1.3333rem]">
                <h3 className="text-[1.6667rem] text-white">{problem.title}</h3>
                <p className="text-[1.3333rem] leading-[1.2] text-white/48">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[1.3333rem] leading-[1.2] font-medium text-white/48">
          {t.problems.caption}
        </p>
      </Container>
    </section>
  );
}
