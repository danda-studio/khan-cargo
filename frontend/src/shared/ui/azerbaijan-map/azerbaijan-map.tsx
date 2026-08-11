/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import Image from "next/image";
import { cn } from "@/shared/lib/cn";

const pinLayouts = {

  default: {
    className: "absolute top-[23%] left-[21%] h-[55.11%] w-[59%]",
    src: "/images/map-pin-illustration.svg",
    mapSrc: "/images/map-image-sm.webp",
    mapObject: "object-contain",
    aspect: "aspect-[779/668]",
  },

  china: {
    className:
      "absolute top-[18.6186%] left-[16.4948%] h-[63.0631%] w-[67.7835%] md:top-[15.17%] md:left-[17.92%] md:h-[63.58%] md:w-[68.07%]",
    src: "/images/china-delivery/map-pins-mobile.svg",
    srcMd: "/images/china-delivery/map-pins-figma.svg",
    mapSrc: "/images/china-delivery/map-az-mobile.png",
    mapSrcMd: "/images/china-delivery/map-az.webp",
    mapObject: "object-cover md:object-contain md:object-left-top",
    aspect: "aspect-[388/333] md:aspect-[800/686]",
  },
} as const;

export function AzerbaijanMap({
  alt,
  className,
  pinLayout = "default",
}: {
  alt: string;
  className?: string;
  pinLayout?: keyof typeof pinLayouts;
}) {
  const pins = pinLayouts[pinLayout];
  const hasMdAssets = "srcMd" in pins && "mapSrcMd" in pins;

  return (
    <div className={cn("relative w-full", pins.aspect, className)}>
      {hasMdAssets ? (
        <>
          <Image
            src={pins.mapSrc}
            alt={alt}
            fill
            sizes="360px"
            loading="lazy"
            className={cn(pins.mapObject, "md:hidden")}
          />
          <Image
            src={pins.mapSrcMd}
            alt={alt}
            fill
            sizes="800px"
            loading="lazy"
            className="hidden object-contain object-left-top md:block"
          />
          <img src={pins.src} alt="" className={cn(pins.className, "md:hidden")} />
          <img src={pins.srcMd} alt="" className={cn(pins.className, "hidden md:block")} />
        </>
      ) : (
        <>
          <Image
            src={pins.mapSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 360px, 800px"
            loading="lazy"
            className={pins.mapObject}
          />
          <img src={pins.src} alt="" className={pins.className} />
        </>
      )}
    </div>
  );
}
