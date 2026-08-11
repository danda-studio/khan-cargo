/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export function SectionEyebrow({
  children,
  className,
  muted = false,
  onAccent = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;

  onAccent?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-[1.5rem] md:gap-[2rem]", className)}>
      <span className={cn("size-[0.625rem] shrink-0 md:size-[0.8333rem]", onAccent ? "bg-black" : "bg-accent")} />
      <span
        className={cn(
          "text-[1rem] leading-[1.25rem] md:text-[1.3333rem] md:leading-[1.6667rem]",
          onAccent ? "text-black" : muted ? "text-white/70" : "text-white",
        )}
      >
        {children}
      </span>
    </div>
  );
}
