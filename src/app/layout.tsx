import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/content";
import { LanguageProvider } from "@/lib/i18n";
import { ogImage, siteName, siteUrl } from "@/lib/site";
import { Footer } from "@/components/Footer";

// Variable font: one file covers every weight used (400–800); the width axis is added for the condensed headings.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const defaultTitle = "Philip Tomasui, back-end and ML";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: "%s, Philip Tomasui" },
  description: profile.intro.en,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    title: defaultTitle,
    description: profile.intro.en,
    url: "/",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [ogImage],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: profile.intro.en,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body id="top" className="min-h-screen bg-white font-sans text-ink antialiased">
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
