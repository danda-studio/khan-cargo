"use client";

import { useEffect, useState } from "react";
import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { cn } from "@/shared/lib/cn";

const SHOW_AFTER_PX = 800;

/** Fixed mobile CTA — appears after scrolling 800px. */
export function MobileStickyCta() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 px-[1rem] pb-[1rem] transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <ContactFormDialog
        trigger={(
          <Button
            type="button"
            className={cn(
              "pointer-events-auto w-full shadow-[0_-0.5rem_1.5rem_rgba(0,0,0,0.35)]",
              !visible && "pointer-events-none",
            )}
          >
            {t.nav.cta}
          </Button>
        )}
      />
    </div>
  );
}
