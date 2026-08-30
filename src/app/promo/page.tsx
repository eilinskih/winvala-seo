import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";

export const metadata: Metadata = {
  title: "Winvala promo",
  description:
    "Winvala güncel kampanyalar üyelik sonrası lobide görünür.",
  alternates: { canonical: "/promo/" },
};

export default function PromoPage() {
  return (
    <>
      <SiteHeader current="/promo/" />
      <main>
        <section className="wv-hero">
          <div className="wv-wrap">
            <div className="wv-hero-frame">
              <p className="wv-kicker">Kampanyalar</p>
              <h1>Winvala promo</h1>
              <p className="wv-lede">
                Güncel kampanyalar üyelik sonrası lobide görünür. Burada sabit
                kod listesi yok.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="promo" label="Salona gir" />
                <a className="wv-cta wv-cta--ghost" href="/bonus/">
                  Bonus
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="wv-wrap">
          <VoxBand
            slot="promo"
            text="Kampanyalar hesap açılınca lobide görünür."
            label="Salona gir"
          />
          <article className="wv-section wv-prose">
            <h2>Güncel kampanyalar</h2>
            <p>
              Promo, hoş geldin bonusu dışında kalan duyurulardır. Günlük
              takvim, kayıp iadesi veya spin sayısı lobide açılır. Üye ol,
              kampanyaları orada gör.
            </p>
            <div className="wv-linkrow">
              <a href="/giris/">Giriş</a>
              <a href="/bonus/">Hoş geldin bonusu</a>
              <a href="/">Salon</a>
            </div>
          </article>
          <VoxBand
            slot="after"
            text="Kampanyalar lobide. Üye ol, bak."
            label="Salona gir"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
