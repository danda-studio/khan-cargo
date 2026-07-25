"use client";

import { useTranslations } from "@/shared/config/i18n/language-context";
import { FadeImage } from "@/shared/ui/fade-image/fade-image";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";
import { chinaEyebrow, chinaPad } from "@/widgets/china-delivery/china-pad";
import {
  routeDeliveryAssets,
  type RouteDeliveryVariant,
} from "@/widgets/china-delivery/route-delivery-assets";

const stickySafePad = "pb-[calc(1rem+4.5rem)] lg:pb-[2.25rem]";

export function ChinaLocalDelivery({ variant = "china" }: { variant?: RouteDeliveryVariant }) {
  const dict = useTranslations();
  const t = variant === "turkey" ? dict.turkeyDelivery : dict.chinaDelivery;
  const images = routeDeliveryAssets[variant];

  return (
    <section className="relative overflow-hidden">
      {/* Mobile + tablet */}
      <div className="lg:hidden">
        <div className="relative aspect-[360/281] w-full overflow-hidden md:aspect-[16/10]">
          <div className="absolute top-0 left-0 h-[126%] w-full">
            <FadeImage
              src={images.localSm}
              alt=""
              fill
              sizes="100vw"
              loading="lazy"
              className="object-cover object-[center_32%]"
            />
          </div>
        </div>
        <div className={`relative z-10 -mt-[2rem] ${stickySafePad} ${chinaPad}`}>
          <div className="flex flex-col rounded-[0.375rem] bg-accent p-[1.5rem]">
            <SectionEyebrow onAccent className={`${chinaEyebrow} mb-[2rem]`}>
              {t.localDelivery.eyebrow}
            </SectionEyebrow>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[1.25rem] leading-[1.25] tracking-[-0.0125rem] text-black">
                {t.localDelivery.title}
              </p>
              <p className="text-[1rem] leading-[1.2] font-medium text-black/48">{t.localDelivery.body}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden aspect-[1440/760] w-full overflow-hidden lg:block">
        <div className="absolute top-0 left-0 h-[126%] w-full">
          <FadeImage
            src={images.local}
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-center"
          />
        </div>
        <div className={`absolute inset-0 flex items-end pb-[2.25rem] ${chinaPad}`}>
          <div className="flex w-full max-w-[34.6875rem] flex-col rounded-[0.375rem] bg-accent p-[1.5rem] lg:min-h-[13.3125rem]">
            <SectionEyebrow onAccent className={`${chinaEyebrow} mb-[2.25rem]`}>
              {t.localDelivery.eyebrow}
            </SectionEyebrow>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-[clamp(1.5rem,2.25vw,2.25rem)] leading-9 tracking-[-0.0125rem] text-black">
                {t.localDelivery.title}
              </p>
              <p className="text-[1rem] leading-[1.2] font-medium text-black/48">{t.localDelivery.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
