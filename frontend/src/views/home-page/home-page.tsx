import { CtaSection } from "@/widgets/cta-section/cta-section";
import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";
import { Hero } from "@/widgets/hero/hero";
import { ProblemsSection } from "@/widgets/problems-section/problems-section";
import { ReviewsSection } from "@/widgets/reviews-section/reviews-section";
import { SolutionsSection } from "@/widgets/solutions-section/solutions-section";
import { StatsSection } from "@/widgets/stats-section/stats-section";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <ProblemsSection />
        <SolutionsSection />
        <StatsSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
