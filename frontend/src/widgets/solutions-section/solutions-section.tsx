"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

const IMAGES = [
  "/images/solution-1.jpg",
  "/images/solution-2.jpg",
  "/images/solution-3.png",
  "/images/solution-4.jpg",
];

const INDEXES = ["01", "02", "03", "04"];

export function SolutionsSection() {
  const t = useTranslations();

  return (
    <section className="bg-page pt-[6.6667rem] pb-0">
      <Container className="flex flex-col gap-[4.4rem]">
        <div className="flex flex-col gap-[1.3333rem]">
          <SectionEyebrow>{t.solutions.eyebrow}</SectionEyebrow>
          <div className="flex flex-col justify-between gap-[2rem] lg:flex-row lg:items-center">
            <h2 className="max-w-[43.6667rem] text-[3rem] leading-[1.1] tracking-[-0.0167rem] text-white">
              {t.solutions.title}
            </h2>
            <p className="max-w-[37.3333rem] text-[1.3333rem] leading-[1.2] text-white/48">
              {t.solutions.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[1.3333rem]">
          {t.solutions.items.map((solution, index) => (
            <div key={solution.title} className="flex flex-col gap-[2rem] rounded-[1rem] bg-surface-2 p-[1rem] lg:flex-row lg:items-stretch">
              <img
                src={IMAGES[index]}
                alt={solution.title}
                className="aspect-[660/302] w-full rounded-[0.6667rem] object-cover lg:max-w-[55rem]"
              />
              <div className="flex flex-1 flex-col justify-between gap-[2rem] py-[1.75rem] lg:flex-row lg:gap-[2rem]">
                <div className="flex h-full max-w-[34.6667rem] flex-col justify-between gap-[1.3333rem]">
                  <h3 className="text-[1.6667rem] leading-[1.1] text-white">{solution.title}</h3>
                  <p className="text-[1.3333rem] leading-[1.2] text-white/48">{solution.description}</p>
                </div>
                <div className="flex flex-row justify-between text-right lg:flex-col lg:self-stretch">
                  <span className="text-[1.3333rem] text-white/48">{INDEXES[index]}</span>
                  <span className="font-mono text-[1rem] tracking-[-0.1rem] text-white/12 uppercase">
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
