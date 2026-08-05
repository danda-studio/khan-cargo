"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { LanguageSwitcher } from "@/features/language-switcher/ui/language-switcher";
import { contactEmail } from "@/shared/config/contacts";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { useLocalizedHref } from "@/shared/config/i18n/use-localized-href";
import { usePageContactPhone } from "@/shared/config/use-page-contact-phone";

export function Header() {
  const t = useTranslations();
  const href = useLocalizedHref();
  const pathname = usePathname();
  const phone = usePageContactPhone();
  const homePrefix = pathname === "/" ? "" : "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.services, href: href(`${homePrefix}#xidmetler`) },
    { label: t.nav.company, href: href("/company") },
    { label: t.nav.contacts, href: href(`${homePrefix}#elaqe`) },
    { label: t.nav.chinaDelivery, href: href("/china-delivery") },
    { label: t.nav.turkeyDelivery, href: href("/turkey-delivery") },
  ];

  const isActive = (linkHref: string) => {
    const path = linkHref.split("?")[0].split("#")[0];
    return (
      (path === "/company" && pathname === "/company")
      || (path === "/china-delivery" && pathname === "/china-delivery")
      || (path === "/turkey-delivery" && pathname === "/turkey-delivery")
    );
  };

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-[3.75rem] items-center justify-between border-b border-dashed border-white/28 bg-white/4 backdrop-blur-[1.6667rem] px-[1rem] lg:h-[6rem] lg:px-[3rem]">
        <div className="flex items-center gap-[3.6667rem]">
          <a href={href("/")} className="shrink-0" aria-label="Khan Cargo">
            <Image
              src="/images/logo-sm.webp"
              alt="Khan Cargo"
              width={280}
              height={93}
              priority
              className="h-[1.75rem] w-[5.25rem] object-contain lg:h-[2.3333rem] lg:w-[7rem]"
            />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-[1.5rem] text-[1.125rem] leading-none xl:gap-[2.3333rem] xl:text-[1.3333rem] xl:leading-[1.3333rem] lg:flex">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "text-accent transition-colors"
                    : "text-white/70 transition-colors hover:text-accent"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex h-full items-center lg:gap-[1.6667rem]">
          <LanguageSwitcher />

          {/* Mobile/tablet — dashed strip between language and hamburger */}
          <span aria-hidden className="mx-[0.75rem] h-full border-l border-dashed border-white/28 lg:hidden" />

          <ContactFormDialog
            trigger={(
              <button type="button" className="hidden cursor-pointer items-center gap-[2rem] text-[1.3333rem] font-medium text-white lg:flex">
                <span className="size-[0.8333rem] shrink-0 bg-accent" />
                {t.nav.cta}
              </button>
            )}
          />

          <button
            type="button"
            className="flex size-[1.5rem] shrink-0 cursor-pointer items-center justify-center lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <img src="/images/icon-menu.svg" alt="" width={16} height={10} className="h-[0.625rem] w-[1rem]" />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-transparent"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="relative flex h-[32rem] w-full flex-col bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-[3.75rem] shrink-0 items-center justify-between border-b border-dashed border-white/28 px-[1rem]">
              <a href={href("/")} className="shrink-0" aria-label="Khan Cargo" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/images/logo-sm.webp"
                  alt="Khan Cargo"
                  width={280}
                  height={93}
                  className="h-[1.75rem] w-[5.25rem] object-contain"
                />
              </a>

              <div className="flex h-full items-center">
                <LanguageSwitcher />
                <span aria-hidden className="mx-[0.75rem] h-full border-l border-dashed border-white/28" />
                <button
                  type="button"
                  className="flex size-[1.5rem] shrink-0 cursor-pointer items-center justify-center"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <img src="/images/icon-menu-close.svg" alt="" width={17} height={17} className="size-[1rem]" />
                </button>
              </div>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col items-center justify-center gap-[1.75rem] px-[1rem] text-[1rem] leading-[1.25rem] text-white/70"
            >
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={isActive(link.href) ? "text-accent" : "transition-colors hover:text-white"}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-[1rem] border-t border-dashed border-white/28 px-[1rem] pt-[2.25rem] pb-[2.5rem] text-[1.5rem] leading-[1.1] tracking-[-0.0125rem]">
              <a href={`tel:${phone.tel}`} className="text-accent transition-opacity hover:opacity-80">
                {phone.display}
              </a>
              <a href={contactEmail.mailto} className="text-white transition-opacity hover:opacity-80">
                {contactEmail.display}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
