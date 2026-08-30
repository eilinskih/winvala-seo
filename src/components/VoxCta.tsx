import { offerUrl, type OfferSlot } from "@/lib/offer";

export function VoxCta({
  slot,
  label,
  compact = false,
  ghost = false,
}: {
  slot: OfferSlot;
  label: string;
  compact?: boolean;
  ghost?: boolean;
}) {
  const cls = [
    "wv-cta",
    compact ? "wv-cta--compact" : "",
    ghost ? "wv-cta--ghost" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a
      className={cls}
      href={offerUrl(slot)}
      rel="nofollow sponsored noopener"
      target="_blank"
    >
      {label}
    </a>
  );
}

export function VoxBand({
  slot,
  text,
  label,
}: {
  slot: OfferSlot;
  text: string;
  label: string;
}) {
  return (
    <aside className="wv-band" aria-label="Winvala salon çıkışı">
      <p>{text}</p>
      <VoxCta slot={slot} label={label} />
    </aside>
  );
}

export function StickyBar() {
  return (
    <aside className="wv-sticky" aria-label="Winvala salon çıkışı">
      <p>Winvala kapısı açık. 18+ · Sorumlu oyun.</p>
      <VoxCta slot="sticky" label="Salona gir" compact />
    </aside>
  );
}
