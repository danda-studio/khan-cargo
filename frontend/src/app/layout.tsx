import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { cookies, headers } from "next/headers";
import { QueryProvider } from "@/app/providers/query-provider";
import { defaultLocale, type Locale } from "@/shared/config/i18n/dictionary";
import { LanguageProvider } from "@/shared/config/i18n/language-provider";
import { isLocale, LOCALE_COOKIE, LOCALE_HEADER } from "@/shared/config/i18n/locale-path";
import { OrganizationJsonLd } from "@/shared/ui/seo/organization-json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  preload: true,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://khan.az";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Khan Cargo — Beynəlxalq yükdaşıma",
    template: "%s | Khan Cargo",
  },
  description:
    "Khan Cargo beynəlxalq yükdaşımalarını sürətli, təhlükəsiz və sərfəli şəkildə həyata keçirir. Azərbaycan, Türkiyə və Çin arasında etibarlı logistika xidmətləri.",
  keywords: [
    "Khan Cargo",
    "yükdaşıma",
    "logistika",
    "kargo",
    "Azərbaycan",
    "Türkiyə",
    "Çin",
    "beynəlxalq daşıma",
    "freight",
    "shipping",
    "cargo Azerbaijan",
  ],
  authors: [{ name: "Khan Cargo", url: siteUrl }],
  creator: "Khan Cargo",
  publisher: "Khan Cargo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/images/logo-sm.webp", type: "image/webp" }],
    apple: [{ url: "/images/logo-sm.webp", type: "image/webp" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      az: "/",
      en: "/?lang=en",
      ru: "/?lang=ru",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: siteUrl,
    siteName: "Khan Cargo",
    title: "Khan Cargo — Beynəlxalq yükdaşıma",
    description:
      "Khan Cargo beynəlxalq yükdaşımalarını sürətli, təhlükəsiz və sərfəli şəkildə həyata keçirir. Azərbaycan, Türkiyə və Çin arasında etibarlı logistika xidmətləri.",
    // Prefer /images/og.webp when available; until then use hero (or logo) webp.
    images: [
      {
        url: "/images/hero-img-sm.webp",
        width: 900,
        height: 925,
        alt: "Khan Cargo — beynəlxalq yükdaşıma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Cargo — Beynəlxalq yükdaşıma",
    description:
      "Khan Cargo beynəlxalq yükdaşımalarını sürətli, təhlükəsiz və sərfəli şəkildə həyata keçirir.",
    images: ["/images/hero-img-sm.webp"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const fromHeader = headerStore.get(LOCALE_HEADER);
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  const initialLocale: Locale = isLocale(fromHeader)
    ? fromHeader
    : isLocale(fromCookie)
      ? fromCookie
      : defaultLocale;

  return (
    <html lang={initialLocale} className={`${inter.variable} ${geist.variable}`}>
      <head>
        <OrganizationJsonLd />
        <link
          rel="preload"
          as="image"
          href="/images/hero-img-sm.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <LanguageProvider initialLocale={initialLocale}>
          <QueryProvider>{children}</QueryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
