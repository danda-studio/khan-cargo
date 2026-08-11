/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";
import { AboutHero } from "@/widgets/about-company/about-hero";
import { AboutProblem } from "@/widgets/about-company/about-problem";
import { AboutWhy } from "@/widgets/about-company/about-why";
import { MobileStickyCta } from "@/widgets/mobile-sticky-cta/mobile-sticky-cta";

export function AboutCompanyPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <AboutHero />
        <AboutProblem />
        <AboutWhy />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
