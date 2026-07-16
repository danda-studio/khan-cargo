"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-[76.25rem] overflow-hidden bg-page">
      {/* Full-bleed decorative background — starts at the very top of the page so it
          shows through the fixed, semi-transparent header above it. */}
      <div className="absolute top-0 left-[41.6667rem] h-[58rem] w-[84rem] overflow-hidden rounded-[0.6667rem]">
        <img src="/images/image-bg.png" alt="" className="size-full object-cover" />
      </div>
      <img
        src="/images/hero-img.png"
        alt="Khan Cargo konteyner daşınması"
        className="absolute top-[-2.25rem] left-[49rem] h-[78.5rem] w-[76.3333rem] object-contain"
      />

      <Container className="relative pt-[10rem] pb-[2.25rem]">
        <div className="flex w-full max-w-[56.3333rem] flex-col">
          <p className="max-w-[41.3333rem] text-[1.6667rem] leading-[1.2] font-medium text-white/48">
            {t.hero.subtitle}
          </p>

          <div className="mt-[24.6667rem] flex flex-col gap-[2.6667rem]">
            <h1 className="text-[4rem] leading-none font-medium text-white lg:text-[5.3333rem]">
              {t.hero.title}
            </h1>
            <ContactFormDialog trigger={<Button className="w-fit">{t.hero.cta}</Button>} />
          </div>

          {/* Vertically centered between the button and the bullet below via equal
              my-[2rem] margins, so it tracks the real rendered flow instead of a
              hardcoded absolute offset. Extends past the text column into the image. */}
          <div className="relative my-[2rem] h-0">
            <div
              aria-hidden
              className="absolute top-0 left-0 h-px w-[56.6667rem]"
              style={{
                backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.28) 0, rgba(255,255,255,0.28) 0.625rem, transparent 0.625rem, transparent 1.125rem)",
              }}
            />
          </div>

          <SectionEyebrow className="max-w-[41.3333rem]">
            {t.hero.bullet}
          </SectionEyebrow>
        </div>
      </Container>
    </section>
  );
}
