import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[120rem] px-[1rem] md:px-[3rem]", className)}>
      {children}
    </div>
  );
}
