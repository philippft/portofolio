import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/content";
import { LanguageProvider } from "@/lib/i18n";
import { Footer } from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Philip Tomasui, back-end and ML",
  description: profile.intro.en,
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
