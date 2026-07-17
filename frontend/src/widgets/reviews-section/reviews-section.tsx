"use client";

import { ReviewCard } from "@/entities/review/ui/review-card";
import { ContactFormDialog } from "@/features/contact-form/ui/contact-form-dialog";
import { useTranslations } from "@/shared/config/i18n/language-context";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { SectionEyebrow } from "@/shared/ui/section-eyebrow/section-eyebrow";

export function ReviewsSection() {
  const t = useTranslations();

  return (
    <section className="bg-black py-[3.25rem] md:py-[6.6667rem]">
      <Container className="flex flex-col gap-[2rem] md:gap-[4rem]">
        <div className="flex flex-col justify-between gap-[2rem] md:flex-row md:items-center">
          <div className="flex flex-col gap-[1rem] md:gap-[1.3333rem]">
            <SectionEyebrow>{t.reviews.eyebrow}</SectionEyebrow>
            <h2 className="text-[1.5rem] leading-[1.1] tracking-[-0.0125rem] text-white md:text-[3rem] md:tracking-[-0.0167rem]">{t.reviews.title}</h2>
          </div>
          <div className="hidden md:block">
            <ContactFormDialog trigger={<Button className="w-fit">{t.reviews.cta}</Button>} />
          </div>
        </div>

        <div className="scrollbar-hide flex flex-row gap-[0.75rem] overflow-x-auto md:gap-[1rem] md:overflow-visible">
          {t.reviews.items.map(review => (
            <ReviewCard key={review.authorName} review={{ id: review.authorName, ...review }} />
          ))}
        </div>
      </Container>
    </section>
  );
}
