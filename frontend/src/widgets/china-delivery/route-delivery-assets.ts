/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { ContactMarket } from "@/shared/config/contacts";
import type { Dictionary } from "@/shared/config/i18n/dictionary";

export type RouteDeliveryVariant = "china" | "turkey" | "uzbekistan";

export const routeDeliveryAssets = {
  china: {
    hero: "/images/china-delivery/hero-dock.webp",
    heroSm: "/images/china-delivery/hero-dock-sm.webp",
    heroMobile: null,
    warehouseMobile: null,
    localMobile: null,
    warehouse: "/images/china-delivery/warehouse.webp",
    warehouseSm: "/images/china-delivery/warehouse-sm.webp",
    local: "/images/china-delivery/local-delivery.webp",
    localSm: "/images/china-delivery/local-delivery-sm.webp",
    truck: "/images/china-delivery/truck.webp",
    workflowIcons: [
      "/images/china-delivery/icon-chat.svg",
      "/images/china-delivery/icon-route.svg",
      "/images/china-delivery/icon-send.svg",
      "/images/china-delivery/icon-shield.svg",
    ],
  },
  turkey: {
    hero: "/images/turkey-delivery/hero-highway.webp",
    heroSm: "/images/turkey-delivery/hero-highway-sm.webp",
    heroMobile: null,
    warehouseMobile: null,
    localMobile: null,
    warehouse: "/images/turkey-delivery/warehouse.webp",
    warehouseSm: "/images/turkey-delivery/warehouse-sm.webp",
    local: "/images/china-delivery/local-delivery.webp",
    localSm: "/images/china-delivery/local-delivery-sm.webp",
    truck: "/images/turkey-delivery/truck.webp",
    workflowIcons: [
      "/images/china-delivery/icon-chat.svg",
      "/images/china-delivery/icon-route.svg",
      "/images/china-delivery/icon-send.svg",
      "/images/china-delivery/icon-shield.svg",
    ],
  },
  uzbekistan: {
    hero: "/images/uzbekistan-delivery/hero-trucks.webp",
    heroSm: "/images/uzbekistan-delivery/hero-trucks-sm.webp",
    heroMobile: "/images/uzbekistan-delivery/hero-trucks-mobile.webp",
    warehouseMobile: "/images/uzbekistan-delivery/warehouse-mobile.webp",
    localMobile: "/images/uzbekistan-delivery/local-mobile.webp",
    warehouse: "/images/turkey-delivery/warehouse.webp",
    warehouseSm: "/images/turkey-delivery/warehouse-sm.webp",
    local: "/images/china-delivery/local-delivery.webp",
    localSm: "/images/china-delivery/local-delivery-sm.webp",
    truck: "/images/turkey-delivery/truck.webp",
    workflowIcons: [
      "/images/china-delivery/icon-chat.svg",
      "/images/china-delivery/icon-route.svg",
      "/images/china-delivery/icon-send.svg",
      "/images/china-delivery/icon-shield.svg",
    ],
  },
} as const;

export const routeDeliveryMarket = {
  china: "cn",
  turkey: "tr",
  uzbekistan: "uz",
} as const satisfies Record<RouteDeliveryVariant, ContactMarket>;

export function routeDeliveryCopy(dict: Dictionary, variant: RouteDeliveryVariant) {
  if (variant === "turkey")
    return dict.turkeyDelivery;
  if (variant === "uzbekistan")
    return dict.uzbekistanDelivery;
  return dict.chinaDelivery;
}
