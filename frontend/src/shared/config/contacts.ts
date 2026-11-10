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
  uz: {
    display: "(+998) 77 351 53 83",
    plain: "+998 77 351 53 83",
    tel: "+998773515383",
  },
} as const;

export type ContactMarket = keyof typeof contactPhones;

export function contactMarketFromPathname(pathname: string): ContactMarket {
  if (pathname.startsWith("/china-delivery"))
    return "cn";
  if (pathname.startsWith("/turkey-delivery"))
    return "tr";
  if (pathname.startsWith("/uzbekistan-delivery"))
    return "uz";
  return "az";
}

export const contactEmails = {
  az: contactEmail,
  cn: contactEmail,
  tr: contactEmail,
  uz: {
    display: "info@khan.az",
    mailto: "mailto:info@khan.az",
  },
} as const;

export function getContactEmail(pathname: string) {
  return contactEmails[contactMarketFromPathname(pathname)];
}

export function getContactPhone(pathname: string) {
  return contactPhones[contactMarketFromPathname(pathname)];
}
