export const SITE_URL = "https://winvala.com.tr";
export const SITE_NAME = "Winvala";
export const CONTENT_DATE = "2026-08-30";
export const LOCALE = "tr";

/** Live Vox tracker copied from book-of-fallen-seo/src/lib/offer.ts */
export const OFFER_BASE =
  "https://winahoralabs.com/l/6a55f026a3933fe375078ca2";

export type OfferSlot =
  | "header"
  | "home"
  | "lobby"
  | "mid"
  | "after"
  | "footer"
  | "sticky"
  | "giris"
  | "bonus"
  | "promo"
  | "app";

export function offerUrl(slot: OfferSlot = "home"): string {
  const params = new URLSearchParams({
    sub_id: `tr-${slot}`,
    click_id: "",
  });
  return `${OFFER_BASE}?${params.toString()}`;
}

export const NAV = [
  { href: "/", label: "Salon" },
  { href: "/giris/", label: "Giriş" },
  { href: "/bonus/", label: "Bonus" },
  { href: "/promo/", label: "Promo" },
  { href: "/app/", label: "Uygulama" },
] as const;

export const PAYMENTS = [
  "Mastercard",
  "VISA",
  "Banka havalesi",
  "Kripto transfer",
  "FulgurPay",
  "Anında Havale",
  "NakitX",
] as const;

export const FACTS = {
  operator: "Vanta Technology LTD",
  license: "Anjouan Gaming (Komorlar)",
  established: "2026",
  welcomeBonus: "100% 5.000 TL’ye kadar",
  withdrawTry: "500.000 TL / gün",
  withdrawUsdt: "10.000 USDT / gün",
  winLimit: null as string | null,
  providerCountLabel: "yüzden fazla sağlayıcı",
} as const;
