"use client";

import Image from "next/image";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function Footer() {
  const t = useTranslations();

  const navLinks = [
    { label: t.footer.linkAbout, href: "/company" },
    { label: t.footer.linkTurkey, href: "/turkey-delivery" },
    { label: t.footer.linkChina, href: "/china-delivery" },
  ];

  return (
    <footer id="elaqe" className="relative scroll-mt-[4rem] overflow-hidden bg-page pt-0 pb-[6.5rem] md:scroll-mt-[6rem] md:pt-[6.6667rem] md:pb-[3.3333rem]">
      <div className="pointer-events-none absolute right-[-20%] bottom-0 h-[18rem] w-[23rem] opacity-90 md:top-[3.25rem] md:right-auto md:bottom-auto md:left-[55.833rem] md:h-[63.667rem] md:w-[84rem] md:opacity-100">
        <Image
          src="/images/image-bg-sm.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 366px, 1400px"
          loading="lazy"
          className="object-contain md:object-cover"
          style={{ maskImage: "linear-gradient(to left, black 55%, transparent 100%)" }}
        />
      </div>

      <Container className="relative flex flex-col gap-[2.5rem] md:gap-[3.3333rem]">
        <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
          <SectionEyebrow>{t.footer.eyebrow}</SectionEyebrow>
          <h2 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[3rem] md:tracking-[-0.0167rem]">{t.footer.title}</h2>
        </div>

        <div className="flex flex-col gap-[3.25rem] md:flex-row md:items-start md:gap-[0.6667rem]">
          <div className="flex flex-col gap-[0.5rem] md:contents">
            <a
              href="tel:+994702101039"
              className="group flex h-[4.25rem] w-full flex-row items-center justify-between rounded-[0.5rem] bg-accent p-[1.5rem] transition-colors hover:bg-white md:h-[21rem] md:max-w-[28rem] md:flex-col md:items-stretch md:justify-between md:rounded-[0.6667rem] md:p-[2rem]"
            >
              <span className="text-[1rem] font-medium text-black md:text-[1.3333rem]">{t.footer.contactCard}</span>
              <img src="/images/arrow-top-right-1.svg" alt="" className="size-[1.25rem] md:size-[1.6667rem] md:self-end" />
            </a>

            <a
              href="https://www.google.com/maps?q=40.318143,49.751090&ll=40.318143,49.751090&z=16"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[5.375rem] w-full flex-row items-center justify-between rounded-[0.5rem] bg-surface-2 p-[1.5rem] transition-colors hover:bg-accent md:h-[21rem] md:max-w-[28rem] md:flex-col md:items-stretch md:justify-between md:rounded-[0.6667rem] md:p-[2rem]"
            >
              <span className="max-w-[12.125rem] text-[1rem] font-medium text-white transition-colors group-hover:text-black md:max-w-[19.25rem] md:text-[1.3333rem]">
                {t.footer.addressCard}
              </span>
              <span className="relative size-[1.25rem] md:size-[1.6667rem] md:self-end">
                <img
                  src="/images/arrow-top-right-2.svg"
                  alt=""
                  className="absolute inset-0 size-full transition-opacity group-hover:opacity-0"
                />
                <img
                  src="/images/arrow-top-right-1.svg"
                  alt=""
                  className="absolute inset-0 size-full opacity-0 transition-opacity group-hover:opacity-100"
                />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-[2rem] py-0 pl-0 md:gap-[2.3333rem] md:py-[0.6667rem] md:pl-[1.3333rem]">
            <div className="flex flex-col gap-[1rem] text-[1.75rem] leading-[1.1] tracking-[-0.0125rem] text-white md:gap-[1.3333rem] md:text-[2.3333rem] md:tracking-[-0.0167rem]">
              <a href="tel:+994702101039" className="transition-colors hover:text-accent">{t.footer.phone}</a>
              <a href="mailto:info@khan.az" className="transition-colors hover:text-accent">{t.footer.email}</a>
            </div>

            <nav aria-label="Footer" className="flex flex-col gap-[1rem] text-[1rem] leading-[1.25rem] text-white md:gap-[1.75rem]">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] pt-[3.25rem] text-[0.75rem] text-white/48 md:gap-[1.3333rem] md:pt-[2rem] md:text-[1rem] md:flex-row md:flex-nowrap md:items-center">
          <p className="shrink-0 leading-[1.2]">
            {t.footer.legalNotice}
          </p>
          <div className="ml-0 flex flex-col flex-nowrap gap-[1rem] md:ml-[2.1667rem] md:flex-row md:gap-0 md:whitespace-nowrap">
            <a href="#" className="transition-colors hover:text-white">{t.footer.privacyPolicy}</a>
            <a href="#" className="transition-colors hover:text-white md:ml-[11.0833rem]">{t.footer.dataConsent}</a>
            <a href="#" className="transition-colors hover:text-white md:ml-[8.0833rem]">{t.footer.credit}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
