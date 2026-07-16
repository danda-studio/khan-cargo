"use client";

import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { LanguageSwitcher } from "@/features/language-switcher/ui/language-switcher";
import { useTranslations } from "@/shared/config/i18n/language-context";

export function Header() {
  const t = useTranslations();

  const navLinks = [
    { label: t.nav.services, active: false },
    { label: t.nav.delivery, active: true },
    { label: t.nav.company, active: false },
    { label: t.nav.contacts, active: false },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[6rem] items-center justify-between border-b border-dashed border-white/28 bg-white/4 px-[3rem] backdrop-blur-[1.6667rem]">
      <div className="flex items-center gap-[3.6667rem]">
        <img src="/images/logo.png" alt="Khan Cargo" className="h-[2.3333rem] w-[7rem] object-contain" />

        <nav className="flex items-center gap-[2.3333rem] text-[1.3333rem] leading-[1.3333rem]">
          {navLinks.map(link => (
            <a
              key={link.label}
              href="#"
              className={link.active ? "text-accent" : "text-white/70 transition-colors hover:text-white"}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-[1.6667rem]">
        <LanguageSwitcher />

        <span aria-hidden className="h-[6rem] border-l border-dashed border-white/28" />

        <ContactFormDialog
          trigger={(
            <button type="button" className="flex cursor-pointer items-center gap-[2rem] text-[1.3333rem] font-medium text-white">
              <span className="size-[0.8333rem] shrink-0 bg-accent" />
              {t.nav.cta}
            </button>
          )}
        />
      </div>
    </header>
  );
}
