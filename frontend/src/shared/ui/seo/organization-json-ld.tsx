const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://khan.az";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Khan Cargo",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-sm.webp`,
  image: `${siteUrl}/images/hero-img-sm.webp`,
  email: "info@khan.az",
  telephone: "+994702101039",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abşeron T/M sıra 2, korpus 2, Mağaza 10",
    addressLocality: "Bakı",
    addressCountry: "AZ",
  },
  areaServed: ["AZ", "TR", "CN"],
  description:
    "Khan Cargo beynəlxalq yükdaşımalarını sürətli, təhlükəsiz və sərfəli şəkildə həyata keçirir. Azərbaycan, Türkiyə və Çin arasında etibarlı logistika xidmətləri.",
} as const;

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
