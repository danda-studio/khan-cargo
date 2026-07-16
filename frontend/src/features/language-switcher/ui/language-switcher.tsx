"use client";

import { Menu } from "@base-ui/react/menu";
import { localeLabels, locales } from "@/shared/config/i18n/dictionary";
import { useLanguage } from "@/shared/config/i18n/language-context";
import { cn } from "@/shared/lib/cn";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <Menu.Root modal={false}>
      <Menu.Trigger
        className="flex h-[3.3333rem] w-fit cursor-pointer items-center gap-[0.6667rem] rounded-[0.3333rem] border border-white/20 text-[1.3333rem] font-medium tracking-[-0.04rem] text-white outline-none transition-colors data-[popup-open]:border-white/40"
      >
        <img src="/images/arrow-bottom.svg" alt="" className="ml-[0.6875rem] size-[1.6667rem]" />
        <span className="mr-[0.6875rem]">{locale.toUpperCase()}</span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={12} className="z-50 outline-none">
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
