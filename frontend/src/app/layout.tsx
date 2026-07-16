import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { QueryProvider } from "@/app/providers/query-provider";
import { LanguageProvider } from "@/shared/config/i18n/language-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khan Cargo",
  description: "Khan Cargo beynəlxalq yükdaşımalarını sürətli, təhlükəsiz və sərfəli şəkildə həyata keçirir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">
        <LanguageProvider>
          <QueryProvider>{children}</QueryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
