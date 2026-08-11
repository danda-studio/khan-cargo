/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import { ContactForm } from "@/features/contact-form/ui/contact-form";
import { Container } from "@/shared/ui/container/container";

export function CtaSection() {
  return (
    <section id="hesabla" className="scroll-mt-[4rem] bg-page pb-[3.25rem] md:relative md:min-h-[63.3333rem] md:scroll-mt-[6rem] md:overflow-hidden md:pb-0">
      {}
      <div className="relative h-[20rem] w-full overflow-hidden md:absolute md:inset-0 md:h-auto">
        <video
          src="/videos/cta-background.mp4"
          poster="/images/cta-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      {}
      <Container className="relative -mt-[1.75rem] md:mt-0 md:pt-[3rem]">
        <div className="rounded-[0.375rem] bg-accent md:rounded-[0.5rem]">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
