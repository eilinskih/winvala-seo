"use client";

import { useMemo, useState } from "react";
import { ProvidersGallery } from "@/components/ProvidersGallery";
import { VOL_TR, type Provider, type Slot } from "@/lib/catalog";
import { gameOfferUrl } from "@/lib/offer";

function Tile({ game }: { game: Slot }) {
  return (
    <a
      className="wv-game"
      href={gameOfferUrl(game.slug)}
      rel="nofollow sponsored noopener"
      target="_blank"
    >
      <div className="wv-thumb">
        {game.thumb ? (
          <img
            src={game.thumb}
            alt={`${game.name} — ${game.provider}, Winvala Casino`}
            title={`${game.name} | Winvala Casino`}
            width={200}
            height={200}
            loading="lazy"
          />
        ) : (
          <div className="wv-ph" aria-hidden="true">
            {game.name
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")}
            <small>{game.provider}</small>
          </div>
        )}
      </div>
      <div className="wv-game-body">
        <h3>{game.name}</h3>
        <p className="wv-game-meta">
          {game.provider}
          {game.rtp ? ` · RTP ${game.rtp}%` : ""}
          {game.volatility ? ` · ${VOL_TR[game.volatility] ?? game.volatility}` : ""}
        </p>
      </div>
    </a>
  );
}

export function LobbyGalleries({
  slots,
  providers,
}: {
  slots: Slot[];
  providers: Provider[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const visible = useMemo(
    () => (active ? slots.filter((s) => s.provider_slug === active) : slots),
    [active, slots],
  );

  return (
    <>
      <section className="wv-section" id="saglayicilar">
        <h2>Oyun sağlayıcıları</h2>
        <p className="wv-section-lead">
          Logoya tıkla, o stüdyonun oyunlarını gör.
        </p>
        <ProvidersGallery providers={providers} active={active} onPick={setActive} />
      </section>
      <section className="wv-section" id="oyunlar">
        <h2>Slot oyunları</h2>
        <p className="wv-section-lead">
          Oyuna tıkla, salonda açılsın
          {active ? ` · ${providers.find((p) => p.slug === active)?.name}` : ""}.
        </p>
        <div className="wv-chips">
          <button
            type="button"
            className="wv-chip"
            aria-pressed={active === null}
            onClick={() => setActive(null)}
          >
            Tümü ({slots.length})
          </button>
          {providers
            .filter((p) => p.kind === "slots")
            .map((p) => (
              <button
                key={p.slug}
                type="button"
                className="wv-chip"
                aria-pressed={active === p.slug}
                onClick={() => setActive(p.slug)}
              >
                {p.name}
              </button>
            ))}
        </div>
        <div className="wv-game-grid">
          {visible.length ? (
            visible.map((g) => <Tile key={g.slug} game={g} />)
          ) : (
            <p className="wv-section-lead">
              Bu sağlayıcı canlı casino masaları sunuyor. Slotlar diğer
              stüdyolarda.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
