"use client";

import type { LegalDocDict } from "@/shared/config/i18n/legal-pages";
import { useLocalizedHref } from "@/shared/config/i18n/use-localized-href";
import { Button } from "@/shared/ui/button/button";
import { Container } from "@/shared/ui/container/container";
import { Footer } from "@/widgets/footer/footer";
import { Header } from "@/widgets/header/header";

const ACCENT_PATTERN = /(www\.khan\.az|info@khan-cargo\.com)/g;

function RichText({ text }: { text: string }) {
  const parts = text.split(ACCENT_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (part === "www.khan.az") {
          return (
            <a
              key={index}
              href="https://www.khan.az"
              className="text-accent transition-colors hover:text-white"
            >
              www.khan.az
            </a>
          );
        }
        if (part === "info@khan-cargo.com") {
          return (
            <a
              key={index}
              href="mailto:info@khan-cargo.com"
              className="text-accent transition-colors hover:text-white"
            >
              info@khan-cargo.com
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function CompanyLine({ line }: { line: string }) {
  return (
    <p className="text-[0.875rem] leading-[1.4] font-medium text-white/60">
      <RichText text={line} />
    </p>
  );
}

function SectionBlock({
  index,
  title,
  paragraphs,
}: {
  index: number;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="flex flex-col gap-[0.75rem]">
      <div className="flex items-center gap-[0.75rem]">
        <span className="flex size-[2rem] shrink-0 items-center justify-center rounded-[0.25rem] bg-white/8 text-[0.875rem] leading-none font-semibold text-white/60">
          {index}
        </span>
        <h2 className="text-[1.125rem] leading-[1.4] font-medium text-white md:text-[1.6667rem]">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-[0.75rem] text-[0.875rem] leading-[1.571] text-white/76 md:text-[1.25rem] md:leading-[1.6]">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
    </section>
  );
}

function Divider({ className = "bg-white/6" }: { className?: string }) {
  return <div className={`h-px w-full ${className}`} />;
}

export function LegalDocumentPage({ doc }: { doc: LegalDocDict }) {
  const href = useLocalizedHref();

  return (
    <>
      <Header />
      <main className="bg-page pt-[6.25rem] pb-[2.5rem] md:pt-[13.6667rem] md:pb-[5rem]">
        <Container className="flex flex-col gap-[1.5rem] pt-[0.5rem] md:flex-row md:items-start md:gap-[3.6667rem] md:pt-0">
          <aside className="flex w-full flex-col gap-[1rem] md:sticky md:top-[8rem] md:w-[26.333rem] md:shrink-0 md:gap-[1.5rem] md:self-start">
            <h1 className="text-[2.125rem] leading-[1.15] font-medium break-words text-white md:text-[4rem] md:leading-[1.1]">
              {doc.title}
            </h1>
            <CompanyLine line={doc.companyLine} />
            <a href={href("/")} className="mt-[0.5rem] block w-full md:mt-0 md:w-fit">
              <Button className="w-full md:w-auto">{doc.backHome}</Button>
            </a>
          </aside>

          <article className="flex min-w-0 flex-1 flex-col gap-[1.5rem] md:gap-[2.5rem]">
            <div className="hidden flex-col gap-[1.5rem] md:flex">
              <h2 className="text-[2.8333rem] leading-[1.2] font-medium break-words text-white">
                {doc.title}
              </h2>
              <CompanyLine line={doc.companyLine} />
            </div>

            <Divider className="hidden bg-white/12 md:block" />

            <div className="flex flex-col gap-[1rem] text-[0.875rem] leading-[1.571] text-white/76 md:gap-[0.75rem] md:text-[1.25rem] md:leading-[1.6]">
              {doc.intro.map((paragraph, i) => (
                <p key={i}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>

            <Divider className="bg-white/8" />

            <div className="flex flex-col gap-[1.75rem] md:gap-[2.5rem]">
              {doc.sections.map((section, index) => (
                <div key={section.title} className="flex flex-col gap-[1.75rem] md:gap-[2.5rem]">
                  <SectionBlock
                    index={index + 1}
                    title={section.title}
                    paragraphs={section.paragraphs}
                  />
                  <Divider />
                </div>
              ))}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
