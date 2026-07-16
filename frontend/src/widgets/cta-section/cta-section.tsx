import { ContactForm } from "@/features/contact-form/ui/contact-form";
import { Container } from "@/shared/ui/container/container";

export function CtaSection() {
  return (
    <section className="relative min-h-[63.3333rem] overflow-hidden bg-page">
      <video
        src="/videos/cta-background.mp4"
        poster="/images/cta-background.png"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover"
      />

      <Container className="relative pt-[3rem]">
        <div className="overflow-hidden rounded-[0.5rem] bg-accent">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
