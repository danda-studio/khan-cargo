/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/cn";

type FadeImageProps = ImageProps & {
  fadeClassName?: string;
};

export function FadeImage({
  className,
  fadeClassName,
  onLoad,
  quality = 100,
  unoptimized = true,
  ...props
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      quality={quality}
      unoptimized={unoptimized}
      onLoad={event => {
        setLoaded(true);
        onLoad?.(event);
      }}
      className={cn(
        "transition-opacity duration-700 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        fadeClassName,
        className,
      )}
    />
  );
}
