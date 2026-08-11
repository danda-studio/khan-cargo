/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { ComponentProps } from "react";
import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import { cn } from "@/shared/lib/cn";

type TextFieldProps = ComponentProps<typeof Input> & {
  label: string;
  error?: string;
  className?: string;
};

export function TextField({ label, placeholder, error, className, ...props }: TextFieldProps) {
  return (
    <Field.Root className={cn("w-full", className)} invalid={Boolean(error)}>
      <Field.Label className="sr-only">{label}</Field.Label>
      <Input
        placeholder={placeholder ?? label}
        aria-invalid={Boolean(error)}
        className={cn(
          "h-[2.75rem] w-full rounded-[0.3333rem] bg-accent-input px-[1.5rem] text-[0.875rem] font-medium text-black placeholder:text-black/46 outline-none md:h-[3.6667rem] md:px-[2rem] md:text-[1.1667rem]",
          error && "ring-1 ring-red-500/50",
        )}
        {...props}
      />
      {error && (
        <p className="mt-[0.35rem] text-[0.75rem] font-medium text-red-700 md:text-[0.875rem]" role="alert">
          {error}
        </p>
      )}
    </Field.Root>
  );
}
