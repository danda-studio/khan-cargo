"use client";

import Image from "next/image";
import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-[45rem] overflow-hidden bg-page md:min-h-[76.25rem]">
      <div className="absolute top-[24.5625rem] left-[calc(50%-3rem)] h-[15.75rem] w-[22.75rem] -translate-x-1/2 overflow-hidden rounded-[0.6667rem] md:top-0 md:left-[41.6667rem] md:h-[58rem] md:w-[84rem] md:translate-x-0">
        <Image
          src="/images/image-bg-sm.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 364px, 1400px"
          className="object-cover"
          // Do not compete with LCP container image
          loading="lazy"
        />
      </div>
      <Image
        src="/images/hero-img-sm.webp"
        alt="Khan Cargo konteyner daşınması"
        width={900}
        height={925}
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 350px, 900px"
        className="absolute top-[22.5rem] left-[calc(50%+0.375rem)] h-[22.5rem] w-[21.875rem] -translate-x-1/2 object-contain md:top-[-2.25rem] md:left-[49rem] md:h-[78.5rem] md:w-[76.3333rem] md:translate-x-0"
      />

      <Container className="relative pt-[5.25rem] pb-[2rem] md:pt-[10rem] md:pb-[2.25rem]">
        <div className="flex w-full flex-col md:max-w-[46.94vw]">
          <p className="max-w-[17.4375rem] text-[1rem] leading-[1.2] font-medium text-white/48 md:max-w-[34.44vw] md:text-[1.389vw]">
            {t.hero.subtitle}
          </p>

          <div className="mt-[2rem] flex flex-col gap-[2rem] md:mt-[20.56vw] md:gap-[2.22vw]">
            <h1 className="text-[2rem] leading-none font-medium text-white md:text-[4.443vw]">
              {t.hero.title}
            </h1>
            <ContactFormDialog trigger={<Button className="w-full md:w-fit">{t.hero.cta}</Button>} />
          </div>

          <div className="relative my-[2rem] hidden h-0 md:block">
            <div
              aria-hidden
              className="absolute top-0 left-0 h-px w-[56.6667rem]"
              style={{
                backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.28) 0, rgba(255,255,255,0.28) 0.625rem, transparent 0.625rem, transparent 1.125rem)",
              }}
            />
          </div>

          <SectionEyebrow className="hidden max-w-[41.3333rem] md:flex">
            {t.hero.bullet}
          </SectionEyebrow>
        </div>
      </Container>
    </section>
  );
}
