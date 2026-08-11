/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

"use client";

import { usePathname } from "next/navigation";
import { getContactPhone } from "./contacts";

export function usePageContactPhone() {
  const pathname = usePathname();
  return getContactPhone(pathname);
}
