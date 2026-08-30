import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import { SITE_URL } from "@/lib/offer";
import { JsonLd } from "@/components/SiteChrome";
import { StickyBar } from "@/components/VoxCta";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Winvala Casino | Slot ve canlı casino",
    template: "%s | Winvala",
  },
  description:
    "Winvala'da slotlar, canlı casino ve kasa tek hesapta. Resmi siteden giriş yap, lobide oyna.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Winvala",
    title: "Winvala Casino",
    description:
      "Winvala casino — slotlar, canlı casino, kasa. Casino Winvala'ya resmi siteden giriş.",
  },
  twitter: {
    card: "summary",
    site: "@winvalacom",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${cinzel.variable} ${outfit.variable}`}>
      <body>
        <JsonLd />
        {children}
        <StickyBar />
      </body>
    </html>
  );
}
