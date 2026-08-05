const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://khan.az";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Khan Cargo",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/images/logo.webp`,
      description:
        "Khan Cargo Azərbaycan daxilində, eləcə də Azərbaycan, Türkiyə və Çin arasında beynəlxalq yükdaşıma və logistika xidmətləri göstərir.",
      telephone: "+994702101039",
      email: "info@khan-cargo.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Abşeron T/M sıra 2, korpus 2, Mağaza 10",
        addressLocality: "Baku",
        addressCountry: "AZ",
      },
      areaServed: [
        { "@type": "Country", name: "Azerbaijan" },
        { "@type": "Country", name: "Turkey" },
        { "@type": "Country", name: "China" },
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Beynəlxalq yükdaşıma və logistika xidmətləri",
      description:
        "Azərbaycan, Türkiyə və Çin arasında beynəlxalq yükdaşımalarının təşkili, nəqliyyatın seçilməsi, daşınmanın monitorinqi, yükləmə və boşaltma proseslərinin koordinasiyası.",
      serviceType: "International Freight Transportation",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: `${siteUrl}/`,
      areaServed: [
        { "@type": "Country", name: "Azerbaijan" },
        { "@type": "Country", name: "Turkey" },
        { "@type": "Country", name: "China" },
      ],
    },
  ],
} as const;

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
