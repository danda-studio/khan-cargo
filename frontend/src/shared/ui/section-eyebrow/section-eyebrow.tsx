import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export function SectionEyebrow({ children, className, muted = false }: { children: ReactNode; className?: string; muted?: boolean }) {
  return (
    <div className={cn("flex items-center gap-[1.5rem] md:gap-[2rem]", className)}>
      <span className="size-[0.625rem] shrink-0 bg-accent md:size-[0.8333rem]" />
      <span className={cn("text-[1rem] leading-[1.25rem] text-white md:text-[1.3333rem] md:leading-[1.6667rem]", muted && "text-white/70")}>
        {children}
      </span>
    </div>
  );
}
