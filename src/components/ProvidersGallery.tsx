"use client";

import { logoUrl, type Provider } from "@/lib/catalog";

export function ProvidersGallery({
  providers,
  active,
  onPick,
}: {
  providers: Provider[];
  active: string | null;
  onPick: (slug: string | null) => void;
}) {
  return (
    <div className="wv-logo-grid" role="list">
      {providers.map((p) => (
        <button
          key={p.slug}
          type="button"
          className="wv-logo-card"
          role="listitem"
          aria-pressed={active === p.slug}
          onClick={() => onPick(active === p.slug ? null : p.slug)}
        >
          <img
            src={logoUrl(p.slug)}
            alt={`${p.name} — Winvala casino`}
            title={`${p.name} — Winvala casino`}
            width={120}
            height={36}
            loading="lazy"
          />
          <span>
            {p.name}
            {p.kind === "live" ? (
              <>
                {" "}
                <em className="wv-live-tag">Canlı</em>
              </>
            ) : null}
          </span>
        </button>
      ))}
    </div>
  );
}
