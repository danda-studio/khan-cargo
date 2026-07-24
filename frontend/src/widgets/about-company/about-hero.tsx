"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { FadeImage } from "@/shared/ui/fade-image/fade-image";
import { chinaBtn, chinaPad } from "@/widgets/china-delivery/china-pad";

const ABOUT_HERO_ALT = "Magistral yolda yük maşınları";

export function AboutHero() {
  const t = useTranslations().aboutCompany;

  return (
    <>
      <section className="bg-page pt-[3.75rem] lg:hidden">
        <div className={`flex flex-col gap-[1.5rem] pt-[2.5rem] pb-[1rem] ${chinaPad}`}>
          <h1 className="max-w-[28rem] text-[2rem] leading-none font-medium text-white md:text-[2.5rem]">
            {t.hero.titleBefore}
            <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="max-w-[36rem] text-[1rem] leading-[1.2] text-white/48 md:text-[1.125rem]">
            <span className="text-white">{t.hero.lead} </span>
            {t.hero.leadMuted}
          </p>
        </div>
        <div className="relative aspect-[360/352] w-full overflow-hidden md:aspect-[16/10]">
          <div className="absolute inset-0 overflow-hidden">
            <FadeImage
              src="/images/about-company/hero.webp"
              alt={ABOUT_HERO_ALT}
              width={2400}
              height={1500}
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={90}
              className="absolute top-[-4%] left-1/2 h-[126%] w-[126%] max-w-none -translate-x-1/2 object-cover object-center"
            />
          </div>
          <div className={`absolute inset-x-0 bottom-0 z-10 pb-[1rem] ${chinaPad}`}>
            <ContactFormDialog
              trigger={<Button className={`${chinaBtn} w-full md:w-fit`}>{t.hero.ctaMobile}</Button>}
            />
          </div>
        </div>
      </section>

      <section className="relative mt-[6rem] hidden h-[calc(100svh-6rem)] min-h-[37.5rem] w-full overflow-hidden bg-page lg:flex">
        <div className="absolute inset-0">
          <FadeImage
            src="/images/about-company/hero.webp"
            alt={ABOUT_HERO_ALT}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className={`relative flex h-full flex-col pt-[2.25rem] ${chinaPad}`}>
          <h1 className="max-w-[46.6875rem] text-[clamp(2.75rem,5.5vw,4rem)] leading-none font-medium text-white">
            {t.hero.titleBefore}
            <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-auto max-w-[24.5rem] text-[1rem] leading-[1.25] text-white">
            {t.hero.lead} {t.hero.leadMuted}
          </p>
          <div className="mt-[2rem] mb-[2.25rem] flex self-start">
            <ContactFormDialog trigger={<Button className={chinaBtn}>{t.hero.cta}</Button>} />
          </div>
        </div>
      </section>
    </>
  );
}
