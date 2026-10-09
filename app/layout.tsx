import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Sora } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Interactions } from "@/components/Interactions";
import { site } from "@/lib/site";
import "./globals.css";

const display = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif", display: "swap" });

const description =
  "BiznorX is a Dubai-based recruitment and manpower agency supplying pre-screened professionals and skilled workforce to UAE businesses — part of a group with BiznorX Realty (Mumbai) and BiznorX Tech.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "BiznorX | Recruitment & Manpower Agency in the UAE", template: "%s | BiznorX" },
  description,
  robots: { index: true, follow: true, "max-image-preview": "large" },
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: site.name,
    url: "/",
    title: "BiznorX — The right people for every role in your business",
    description,
    images: [{ url: "/images/logo.png", alt: "BiznorX logo" }],
  },
  twitter: { card: "summary" },
  other: { "geo.region": "AE-DU", "geo.placename": "Dubai" },
};

export const viewport: Viewport = { themeColor: "#021A3B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={`${display.variable} ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        {/* Hide the homepage intro before first paint if this visitor has already seen it (see components/Intro.tsx) */}
        <Script id="intro-seen" strategy="beforeInteractive">
          {"try{if(sessionStorage.getItem('bx-intro-seen'))document.documentElement.classList.add('intro-seen')}catch(e){}"}
        </Script>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
