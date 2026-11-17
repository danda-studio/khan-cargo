/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import { ChinaCustoms } from "@/widgets/china-delivery/china-customs";
import { ChinaFaq } from "@/widgets/china-delivery/china-faq";
import { ChinaHero } from "@/widgets/china-delivery/china-hero";
import { ChinaInsurance } from "@/widgets/china-delivery/china-insurance";
import { ChinaLocalDelivery } from "@/widgets/china-delivery/china-local-delivery";
import { ChinaProcess } from "@/widgets/china-delivery/china-process";
import { ChinaClients, ChinaShippingTypes } from "@/widgets/china-delivery/china-shipping-types";

import { ChinaWarehouse } from "@/widgets/china-delivery/china-warehouse";
import { ChinaWorkflow } from "@/widgets/china-delivery/china-workflow";
import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";
import { MobileStickyCta } from "@/widgets/mobile-sticky-cta/mobile-sticky-cta";

export function UzbekistanDeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <ChinaHero variant="uzbekistan" />
        <ChinaProcess variant="uzbekistan" />
        <ChinaWarehouse variant="uzbekistan" />
        <ChinaInsurance variant="uzbekistan" />
        <ChinaShippingTypes variant="uzbekistan" />
        <ChinaCustoms variant="uzbekistan" />
        <ChinaWorkflow variant="uzbekistan" />
        <ChinaClients variant="uzbekistan" />
        <ChinaLocalDelivery variant="uzbekistan" />
        <ChinaFaq variant="uzbekistan" />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
