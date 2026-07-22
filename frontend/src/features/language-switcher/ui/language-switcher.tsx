"use client";

import { Menu } from "@base-ui/react/menu";
import { localeLabels, locales } from "@/shared/config/i18n/dictionary";
import { useLanguage } from "@/shared/config/i18n/language-context";
import { cn } from "@/shared/lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <Menu.Root modal={false}>
      <Menu.Trigger
        className={cn(
          "flex h-[2rem] w-fit cursor-pointer items-center gap-[0.375rem] rounded-[0.3333rem] border border-white/20 text-[0.875rem] font-medium tracking-[-0.04rem] text-white outline-none transition-colors data-[popup-open]:border-white/40 md:h-[3.3333rem] md:gap-[0.6667rem] md:text-[1.3333rem]",
          className,
        )}
      >
        <img src="/images/arrow-bottom.svg" alt="" className="ml-[0.5rem] size-[1rem] md:ml-[0.6875rem] md:size-[1.6667rem]" />
        <span className="mr-[0.5rem] md:mr-[0.6875rem]">{locale.toUpperCase()}</span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={12} className="z-[70] outline-none">
          <Menu.Popup className="w-[10rem] overflow-hidden rounded-[0.3333rem] border border-dashed border-white/28 bg-page py-[0.5rem] text-[1.3333rem] text-white shadow-2xl outline-none">
            {locales.map(item => (
              <Menu.Item
                key={item}
                onClick={() => setLocale(item)}
                className={cn(
                  "cursor-pointer px-[1.3333rem] py-[0.75rem] outline-none transition-colors data-[highlighted]:bg-white/10",
                  item === locale && "text-accent",
                )}
              >
                {localeLabels[item]}
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
