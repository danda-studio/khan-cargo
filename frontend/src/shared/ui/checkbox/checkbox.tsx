import type { ComponentProps, ReactNode } from "react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { cn } from "@/shared/lib/cn";

type CheckboxProps = Omit<ComponentProps<typeof BaseCheckbox.Root>, "className"> & {
  label: ReactNode;
  className?: string;
};

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={cn("flex cursor-pointer items-center gap-[1rem]", className)}>
      <BaseCheckbox.Root
        className="flex size-[2rem] shrink-0 items-center justify-center border border-black/60 outline-none data-[checked]:bg-black"
        {...props}
      >
        <BaseCheckbox.Indicator className="flex text-white">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      <span className="text-[1rem] font-medium text-black/48">{label}</span>
    </label>
  );
}
