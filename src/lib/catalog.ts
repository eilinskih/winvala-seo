import slotsJson from "../../data/slots.json";
import providersJson from "../../data/providers.json";

export type Slot = {
  name: string;
  slug: string;
  provider: string;
  provider_slug: string;
  rtp: string | null;
  volatility: string | null;
  max_win: string | null;
  thumb: string | null;
};

export type Provider = {
  name: string;
  slug: string;
  kind: "slots" | "live";
};

export const slots = slotsJson as Slot[];
export const providers = providersJson as Provider[];

export function logoUrl(slug: string): string {
  return `https://cdn2.softswiss.net/logos/providers/color/${slug}.svg`;
}

export const VOL_TR: Record<string, string> = {
  low: "düşük",
  medium: "orta",
  high: "yüksek",
};
