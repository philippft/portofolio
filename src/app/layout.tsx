import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Philip Tomasui, back-end and ML",
  description:
    "I build Laravel and Express back-ends, and train machine-learning models on Indonesian and Balinese data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
