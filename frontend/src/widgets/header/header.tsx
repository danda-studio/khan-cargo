"use client";

import Image from "next/image";
import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { LanguageSwitcher } from "@/features/language-switcher/ui/language-switcher";
import { useTranslations } from "@/shared/config/i18n/language-context";

export function Header() {
  const t = useTranslations();

  const navLinks = [
    { label: t.nav.services, href: "#xidmetler" },
    { label: t.nav.delivery, href: "#catdirilma" },
    { label: t.nav.company, href: "#sirket" },
    { label: t.nav.contacts, href: "#elaqe" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[3.75rem] items-center justify-between border-b border-dashed border-white/28 bg-white/4 px-[1rem] backdrop-blur-[1.6667rem] md:h-[6rem] md:px-[3rem]">
      <div className="flex items-center gap-[3.6667rem]">
        <a href="/" className="shrink-0" aria-label="Khan Cargo">
          <Image
            src="/images/logo-sm.webp"
            alt="Khan Cargo"
            width={280}
            height={93}
            priority
            className="h-[1.75rem] w-[5.25rem] object-contain md:h-[2.3333rem] md:w-[7rem]"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-[2.3333rem] text-[1.3333rem] leading-[1.3333rem] md:flex">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-[1.25rem] md:gap-[1.6667rem]">
        <LanguageSwitcher />

        <span aria-hidden className="hidden h-[6rem] border-l border-dashed border-white/28 md:block" />

        <ContactFormDialog
          trigger={(
            <button type="button" className="hidden cursor-pointer items-center gap-[2rem] text-[1.3333rem] font-medium text-white md:flex">
              <span className="size-[0.8333rem] shrink-0 bg-accent" />
              {t.nav.cta}
            </button>
          )}
        />
      </div>
    </header>
  );
}
