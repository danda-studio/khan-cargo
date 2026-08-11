/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { ComponentProps, ReactNode } from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { cn } from "@/shared/lib/cn";

type CheckboxProps = Omit<ComponentProps<typeof BaseCheckbox.Root>, "className"> & {
  label: ReactNode;
  error?: string;
  className?: string;
};

export function Checkbox({ label, error, className, ...props }: CheckboxProps) {
  return (
    <div className={cn("flex flex-col gap-[0.35rem]", className)}>
      <label className="flex cursor-pointer items-center gap-[0.75rem] md:gap-[1rem]">
        <BaseCheckbox.Root
          aria-invalid={Boolean(error)}
          className={cn(
            "flex size-[1.5rem] shrink-0 items-center justify-center border border-black/60 outline-none data-[checked]:bg-black md:size-[2rem]",
            error && "border-red-600",
          )}
          {...props}
        >
          <BaseCheckbox.Indicator className="flex text-white">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </BaseCheckbox.Indicator>
        </BaseCheckbox.Root>
        <span className="text-[0.75rem] font-medium text-black/48 md:text-[1rem]">{label}</span>
      </label>
      {error && (
        <p className="text-[0.75rem] font-medium text-red-700 md:text-[0.875rem]" role="alert">{error}</p>
      )}
    </div>
  );
}
