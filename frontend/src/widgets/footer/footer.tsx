"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative overflow-hidden bg-page pt-[6.6667rem] pb-[3.3333rem]">
      <img
        src="/images/image-bg.png"
        alt=""
        className="pointer-events-none absolute top-[3.25rem] left-[55.833rem] h-[63.667rem] w-[84rem] object-cover"
        style={{ maskImage: "linear-gradient(to left, black 55%, transparent 100%)" }}
      />

      <Container className="relative flex flex-col gap-[3.3333rem]">
        <div className="flex flex-col gap-[1.3333rem]">
          <SectionEyebrow>{t.footer.eyebrow}</SectionEyebrow>
          <h2 className="text-[3rem] leading-[1.1] tracking-[-0.0167rem] text-white">{t.footer.title}</h2>
        </div>

        <div className="flex flex-col gap-[0.6667rem] lg:flex-row lg:items-start">
          <a
            href="tel:+994702101039"
            className="flex h-[21rem] w-full max-w-[28rem] flex-col justify-between rounded-[0.6667rem] bg-accent p-[2rem]"
          >
            <span className="text-[1.3333rem] font-medium text-black">{t.footer.contactCard}</span>
            <img src="/images/arrow-top-right-1.svg" alt="" className="size-[1.6667rem] self-end" />
          </a>

          <a
            href="#"
            className="flex h-[21rem] w-full max-w-[28rem] flex-col justify-between rounded-[0.6667rem] bg-surface-2 p-[2rem]"
          >
            <span className="max-w-[19.25rem] text-[1.3333rem] font-medium text-white">
              {t.footer.addressCard}
            </span>
            <img src="/images/arrow-top-right-2.svg" alt="" className="size-[1.6667rem] self-end" />
          </a>

          <div className="flex flex-col gap-[1.3333rem] py-[0.6667rem] pl-[1.3333rem] text-[2.3333rem] leading-[1.1] tracking-[-0.0167rem] text-white">
            <a href="tel:+994702101039" className="transition-opacity hover:opacity-80">{t.footer.phone}</a>
            <a href="mailto:info@khan.az" className="transition-opacity hover:opacity-80">{t.footer.email}</a>
          </div>
        </div>

        <div className="flex flex-col gap-[1.3333rem] pt-[2rem] text-[1rem] text-white/48 lg:flex-row lg:flex-nowrap lg:items-center">
          <p className="shrink-0 leading-[1.2] whitespace-nowrap">
            {t.footer.legalNotice}
          </p>
          <div className="ml-[2.1667rem] flex flex-nowrap whitespace-nowrap">
            <a href="#" className="transition-colors hover:text-white">{t.footer.privacyPolicy}</a>
            <a href="#" className="ml-[11.0833rem] transition-colors hover:text-white">{t.footer.dataConsent}</a>
            <a href="#" className="ml-[8.0833rem] transition-colors hover:text-white">{t.footer.credit}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
