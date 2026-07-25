"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/shared/config/turnstile";

interface TurnstileFieldProps {
  onTokenChange: (token: string) => void;
  error?: string;
  /** Remount key — e.g. dialog open state — so the widget reloads cleanly */
  resetKey?: string | number | boolean;
}

export function TurnstileField({ onTokenChange, error, resetKey = 0 }: TurnstileFieldProps) {
  if (!TURNSTILE_SITE_KEY) {
    throw new Error("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set");
  }
  return (
    <div className="hidden">
      <Turnstile
        key={String(resetKey)}
        siteKey={TURNSTILE_SITE_KEY}
        options={{ size: "invisible" }}
        onSuccess={token => onTokenChange(token)}
        onExpire={() => onTokenChange("")}
        onError={() => onTokenChange("")}
        onTimeout={() => onTokenChange("")}
      />
      {error
        ? <span className="text-[0.75rem] font-medium text-red-700 md:text-[0.875rem]">{error}</span>
        : null}
    </div>
  );
}
