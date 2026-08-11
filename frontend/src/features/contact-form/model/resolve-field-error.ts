/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { Dictionary } from "@/shared/config/i18n/dictionary";

type ErrorDict = Dictionary["ctaForm"]["errors"];

export function shouldShowFieldError(meta: {
  isBlurred: boolean;
  isDirty: boolean;
}): boolean {
  return meta.isBlurred && meta.isDirty;
}

export function resolveFieldError(
  errors: unknown[],
  dict: ErrorDict,
): string | undefined {
  if (!errors.length)
    return undefined;

  const raw = errors[0];
  const key
    = typeof raw === "string"
      ? raw
      : raw && typeof raw === "object" && "message" in raw
        ? String((raw as { message: unknown }).message)
        : undefined;

  if (!key)
    return undefined;

  if (key in dict)
    return dict[key as keyof ErrorDict];

  return key;
}
