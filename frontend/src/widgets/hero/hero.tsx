"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { FadeImage } from "@/shared/ui/fade-image/fade-image";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative mt-[3.75rem] flex flex-col overflow-hidden bg-page md:mt-[3.75rem] md:h-[calc(100svh-3.75rem)] lg:mt-[6rem] lg:h-[calc(100svh-6rem)]">
      {/* Tablet + desktop map */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] overflow-hidden md:block lg:w-[58%]">
        <FadeImage
          src="/images/image-bg.webp"
          alt=""
          fill
          sizes="min(1400px, 65vw)"
          className="object-cover object-left"
          loading="lazy"
        />
      </div>

      {/* Tablet + desktop: h-full w-auto so square art reaches section top */}
      <FadeImage
        src="/images/hero-img.webp"
        alt="Khan Cargo konteyner daşınması"
        width={1800}
        height={1800}
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) min(1220px, 58vw), 70vw"
        quality={90}
        className="pointer-events-none absolute top-0 right-0 z-[1] hidden h-full w-auto max-w-[75%] object-contain object-right md:block lg:max-w-[62%]"
      />

      {/* Phone — height follows content (no 100svh gap under containers) */}
      <Container className="relative z-[2] flex flex-col pt-[1.5rem] md:hidden">
        <p className="max-w-[17.4375rem] text-[1rem] leading-[1.2] font-medium text-white/48">
          {t.hero.subtitle}
        </p>
        <h1 className="mt-[1.5rem] max-w-[20.5rem] text-[2rem] leading-none font-medium text-white">
          {t.hero.title}
        </h1>
        <div className="relative z-10 mt-[1.5rem]">
          <ContactFormDialog trigger={<Button className="w-full">{t.hero.cta}</Button>} />
        </div>

        <div className="relative z-0 -mx-[1rem] -mt-[0.75rem] aspect-square w-[calc(100%+2rem)]">
          <div className="pointer-events-none absolute top-[8%] left-1/2 h-[70%] w-[92%] -translate-x-1/2 overflow-hidden rounded-[0.6667rem]">
            <FadeImage
              src="/images/image-bg.webp"
              alt=""
              fill
              sizes="90vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <FadeImage
            src="/images/hero-img.webp"
            alt="Khan Cargo konteyner daşınması"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={90}
            className="object-contain object-top"
          />
        </div>
      </Container>

      {/* Tablet + desktop copy */}
      <Container className="relative z-[2] hidden min-h-0 flex-1 flex-col py-[2rem] md:flex lg:py-[2.5rem]">
        <div className="flex min-h-0 max-w-[48%] flex-1 flex-col lg:max-w-[44%]">
          <p className="max-w-[34rem] shrink-0 text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.2] font-medium text-white/48">
            {t.hero.subtitle}
          </p>

          <div className="mt-auto flex flex-col gap-[1.5rem] lg:gap-[2rem]">
            <h1 className="text-[clamp(2rem,3.8vw,4rem)] leading-none font-medium text-white">
              {t.hero.title}
            </h1>
            <ContactFormDialog trigger={<Button className="w-fit">{t.hero.cta}</Button>} />
          </div>

          <div className="relative my-[1.25rem] h-0 shrink-0">
            <div
              aria-hidden
              className="absolute top-0 left-0 h-px w-full max-w-[56.6667rem]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(255,255,255,0.28) 0, rgba(255,255,255,0.28) 0.625rem, transparent 0.625rem, transparent 1.125rem)",
              }}
            />
          </div>

          <SectionEyebrow className="max-w-[41.3333rem] shrink-0">{t.hero.bullet}</SectionEyebrow>
        </div>
      </Container>
    </section>
  );
}
