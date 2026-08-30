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
    default: "Winvala Casino | Resmi salon",
    template: "%s | Winvala",
  },
  description:
    "Winvala casino salonunda slotlar, canlı masalar ve sağlayıcı lobisi. Casino Winvala kapısı burada açılır.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Winvala",
    title: "Winvala Casino",
    description: "Winvala casino — resmi salon. Casino Winvala kapısı.",
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
