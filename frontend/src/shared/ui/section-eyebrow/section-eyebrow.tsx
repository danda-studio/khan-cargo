import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export function SectionEyebrow({ children, className, muted = false }: { children: ReactNode; className?: string; muted?: boolean }) {
  return (
    <div className={cn("flex items-center gap-[2rem]", className)}>
      <span className="size-[0.8333rem] shrink-0 bg-accent" />
      <span className={cn("text-[1.3333rem] leading-[1.6667rem] text-white", muted && "text-white/70")}>
        {children}
      </span>
    </div>
  );
}
