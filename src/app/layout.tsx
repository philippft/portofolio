import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GrainOverlay } from "@/components/GrainOverlay";
import { AmbientGlowOrbs } from "@/components/AmbientGlowOrbs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Philip Filadelphia Tomasui — AI/ML & Systems Portfolio",
  description:
    "AI/ML Engineer & Full-Stack Systems Developer bridging deep learning pipelines, generative preservation frameworks, and scalable distributed backends.",
  keywords: [
    "Philip Tomasui",
    "Machine Learning",
    "AI Engineer",
    "Data Scientist",
    "Informatics Universitas Udayana",
    "Full-Stack Developer",
    "PyTorch",
    "Next.js",
    "Laravel",
  ],
  authors: [{ name: "Philip Filadelphia Tomasui" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth scroll-pt-24 antialiased`}
    >
      <body className="bg-canvas text-on-surface font-sans antialiased relative selection:bg-signal-orange selection:text-white min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GrainOverlay />
          <AmbientGlowOrbs />
          <Navbar />
          <main className="relative z-10 w-full pt-28 pb-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
