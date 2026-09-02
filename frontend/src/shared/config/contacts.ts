/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

export const contactEmail = {
  display: "info@khan-cargo.com",
  mailto: "mailto:info@khan-cargo.com",
} as const;

export const contactPhones = {
  az: {
    display: "(+944) 55 123 34 44",
    plain: "+944 55 123 34 44",
    tel: "+944551233444",
  },
  cn: {
    display: "+86 181 0579 6454",
    plain: "+86 18105796454",
    tel: "+8618105796454",
  },
  tr: {
    display: "+90 537 254 30 00",
    plain: "+90 537 254 30 00",
    tel: "+905372543000",
  },
} as const;

export type ContactMarket = keyof typeof contactPhones;

export function contactMarketFromPathname(pathname: string): ContactMarket {
  if (pathname.startsWith("/china-delivery")) return "cn";
  if (pathname.startsWith("/turkey-delivery")) return "tr";
  return "az";
}

export function getContactPhone(pathname: string) {
  return contactPhones[contactMarketFromPathname(pathname)];
}
