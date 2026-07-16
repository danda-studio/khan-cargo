import type { ComponentProps } from "react";
import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import { cn } from "@/shared/lib/cn";

type TextFieldProps = ComponentProps<typeof Input> & {
  label: string;
  className?: string;
};

export function TextField({ label, placeholder, className, ...props }: TextFieldProps) {
  return (
    <Field.Root className={cn("w-full", className)}>
      <Field.Label className="sr-only">{label}</Field.Label>
      <Input
        placeholder={placeholder ?? label}
        className="h-[3.6667rem] w-full rounded-[0.3333rem] bg-accent-input px-[2rem] text-[1.1667rem] font-medium text-black placeholder:text-black/46 outline-none"
        {...props}
      />
    </Field.Root>
  );
}
