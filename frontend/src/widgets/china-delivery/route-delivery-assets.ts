export type RouteDeliveryVariant = "china" | "turkey";

export const routeDeliveryAssets = {
  china: {
    hero: "/images/china-delivery/hero-dock.webp",
    heroSm: "/images/china-delivery/hero-dock-sm.webp",
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
