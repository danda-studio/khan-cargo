import type { ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "@/shared/lib/cn";

const variants = {
  primary: "bg-accent text-black hover:bg-white",
  light: "bg-white text-black hover:bg-black hover:text-white",
} as const;

type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "className"> & {
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-[0.3333rem] px-[1.9375rem] py-[1rem] font-semibold text-[1rem] leading-none whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-60 md:px-[2.5833rem] md:py-[1.3333rem] md:text-[1.3333rem]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
