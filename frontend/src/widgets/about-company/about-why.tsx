"use client";

import { contactPhones } from "@/shared/config/contacts";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";

const ICONS = [
  "/images/about-company/icon-warehouse.svg",
  "/images/about-company/icon-shield.svg",
  "/images/about-company/icon-doc.svg",
  "/images/about-company/icon-pin-a.svg",
];

const TRUCK = "/images/about-company/truck.webp";

export function AboutWhy() {
  const t = useTranslations().aboutCompany;

  return (
    <section className="overflow-x-clip bg-black pt-[3.25rem] pb-[3rem] lg:pt-[5rem] lg:pb-[5rem]">
      <div className={`flex flex-col gap-[1rem] ${chinaPad}`}>
        <SectionEyebrow className={chinaEyebrow}>{t.why.eyebrow}</SectionEyebrow>
        <h2 className="max-w-[16.3rem] text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white lg:max-w-[23.75rem] lg:text-[2.25rem]">
          {t.why.title}
        </h2>
      </div>

      <div className="mt-[2rem] flex gap-[0.5rem] overflow-x-auto pl-[1rem] lg:mt-[2.5rem] lg:overflow-visible lg:px-[2.25rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {t.why.items.map((item, i) => (
          <article
            key={item.title}
            className="flex h-[17.375rem] w-[19.5rem] shrink-0 flex-col gap-[1.5rem] rounded-[0.375rem] bg-[#151515] p-[1.25rem] lg:h-auto lg:min-h-[17.375rem] lg:w-auto lg:min-w-0 lg:flex-1"
          >
            <img src={ICONS[i]!} alt="" className="size-[3rem] shrink-0" />
            <div className="flex min-h-0 flex-1 flex-col gap-[1rem]">
              <h3 className="text-[1.25rem] leading-[1.2] text-white">{item.title}</h3>
              <p className="text-[1rem] leading-[1.2] text-white/48">{item.body}</p>
            </div>
          </article>
        ))}
        <div className="w-[1rem] shrink-0 lg:hidden" aria-hidden />
      </div>

      <div className={`mt-[2rem] lg:mt-[3.5rem] ${chinaPad}`}>
        <div className="relative lg:pt-[2.75rem]">
          <div className="relative flex flex-col overflow-hidden rounded-[0.375rem] bg-accent lg:min-h-[12rem] lg:overflow-visible">
            {/* Desktop truck */}
            <div className="pointer-events-none absolute bottom-0 left-[38.38%] z-[1] hidden h-[14.75rem] w-[28.75rem] overflow-hidden lg:block">
              <img
                src={TRUCK}
                alt=""
                className="absolute top-[-37.39%] left-[-23.48%] h-[199.52%] w-[144.35%] max-w-none"
              />
            </div>

            <div className="relative z-10 flex w-full flex-col justify-between gap-[1.5rem] p-[1.5rem] lg:flex-row lg:items-start">
              <div className="flex max-w-[24.5625rem] flex-col gap-[1rem]">
                <p className="text-[1.5rem] leading-[1.2] tracking-[-0.0125rem] text-black lg:text-[clamp(1.5rem,2.25vw,2.25rem)] lg:leading-9">
                  {t.banner.title}
                </p>
                <p className="text-[1rem] leading-[1.25rem] font-medium text-black/48">
                  {t.banner.lead}
                </p>
              </div>

              <div className="flex w-full flex-col gap-[0.5rem] lg:w-[20.5rem] lg:shrink-0">
                <a
                  href={`tel:${contactPhones.az.tel}`}
                  className="flex h-[4.25rem] items-center justify-between rounded-[0.5rem] bg-white px-[1.5rem] transition-opacity hover:opacity-90"
                >
                  <span className="text-[1rem] leading-[1.2] font-medium text-black">
                    {t.banner.call}
                  </span>
                  <img src="/images/arrow-top-right-1.svg" alt="" className="size-[1.25rem]" />
                </a>
                <a
                  href="mailto:info@khan.az"
                  className="flex h-[4.25rem] items-center justify-between rounded-[0.5rem] bg-surface-2 px-[1.5rem] transition-opacity hover:opacity-90"
                >
                  <span className="text-[1rem] leading-[1.2] font-medium text-white">
                    {t.banner.write}
                  </span>
                  <img src="/images/arrow-top-right-2.svg" alt="" className="size-[1.25rem]" />
                </a>
              </div>
            </div>

            {/* Phone — Figma mobile crop in narrow card */}
            <div className="relative h-[11.5rem] w-[109.756%] shrink-0 overflow-hidden md:hidden">
              <img
                src={TRUCK}
                alt=""
                className="absolute top-[-37.39%] left-[-23.48%] h-[199.52%] w-[144.35%] max-w-none"
              />
            </div>

            {/* Tablet — same crop window as desktop, centered (won't squash on wide cards) */}
            <div className="relative mx-auto hidden h-[14.75rem] w-full max-w-[28.75rem] shrink-0 overflow-hidden md:block lg:hidden">
              <img
                src={TRUCK}
                alt=""
                className="absolute top-[-37.39%] left-[-23.48%] h-[199.52%] w-[144.35%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
