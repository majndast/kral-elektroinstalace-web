import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Král Elektroinstalace | Revize, Opravy, Chytrá domácnost",
  description:
    "Profesionální elektroinstalace, revize a chytrá domácnost v Praze a okolí. Tomáš Král - spolehlivost a kvalita na prvním místě.",
  keywords: [
    "elektrikář",
    "elektroinstalace",
    "revize",
    "chytrá domácnost",
    "Loxone",
    "Praha",
    "elektrikář Praha",
  ],
  authors: [{ name: "Tomáš Král" }],
  openGraph: {
    title: "Král Elektroinstalace | Revize, Opravy, Chytrá domácnost",
    description:
      "Profesionální elektroinstalace, revize a chytrá domácnost v Praze a okolí.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        {/* Premium Display Font - Clash Display */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg-cream text-text-primary antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
