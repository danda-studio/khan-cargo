import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://khan.az";

export default function sitemap(): MetadataRoute.Sitemap {
  const chinaUrl = `${siteUrl}/china-delivery`;
  const turkeyUrl = `${siteUrl}/turkey-delivery`;
  const companyUrl = `${siteUrl}/company`;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          az: siteUrl,
          en: `${siteUrl}?lang=en`,
          ru: `${siteUrl}?lang=ru`,
        },
      },
    },
    {
      url: companyUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          az: companyUrl,
          en: `${companyUrl}?lang=en`,
          ru: `${companyUrl}?lang=ru`,
        },
      },
    },
    {
      url: chinaUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          az: chinaUrl,
          en: `${chinaUrl}?lang=en`,
          ru: `${chinaUrl}?lang=ru`,
        },
      },
    },
    {
      url: turkeyUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          az: turkeyUrl,
          en: `${turkeyUrl}?lang=en`,
          ru: `${turkeyUrl}?lang=ru`,
        },
      },
    },
  ];
}
