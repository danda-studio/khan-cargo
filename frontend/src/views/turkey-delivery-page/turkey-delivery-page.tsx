/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";
import { ChinaClients } from "@/widgets/china-delivery/china-shipping-types";
import { ChinaCustoms } from "@/widgets/china-delivery/china-customs";
import { ChinaFaq } from "@/widgets/china-delivery/china-faq";
import { ChinaHero } from "@/widgets/china-delivery/china-hero";
import { ChinaInsurance } from "@/widgets/china-delivery/china-insurance";
import { ChinaLocalDelivery } from "@/widgets/china-delivery/china-local-delivery";
import { ChinaProcess } from "@/widgets/china-delivery/china-process";
import { ChinaShippingTypes } from "@/widgets/china-delivery/china-shipping-types";
import { ChinaWarehouse } from "@/widgets/china-delivery/china-warehouse";
import { ChinaWorkflow } from "@/widgets/china-delivery/china-workflow";
import { MobileStickyCta } from "@/widgets/mobile-sticky-cta/mobile-sticky-cta";

export function TurkeyDeliveryPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <ChinaHero variant="turkey" />
        <ChinaProcess variant="turkey" />
        <ChinaWarehouse variant="turkey" />
        <ChinaInsurance variant="turkey" />
        <ChinaShippingTypes variant="turkey" />
        <ChinaCustoms variant="turkey" />
        <ChinaWorkflow variant="turkey" />
        <ChinaClients variant="turkey" />
        <ChinaLocalDelivery variant="turkey" />
        <ChinaFaq variant="turkey" />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
