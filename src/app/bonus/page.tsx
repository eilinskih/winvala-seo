import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";
import { FACTS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Winvala bonus",
  description:
    "Winvala hoş geldin bonusu %100, 5.000 TL’ye kadar. Koşullar üyelik sonrası kasa ekranında.",
  alternates: { canonical: "/bonus/" },
};

export default function BonusPage() {
  return (
    <>
      <SiteHeader current="/bonus/" />
      <main>
        <section className="wv-hero">
          <div className="wv-wrap">
            <div className="wv-hero-frame">
              <p className="wv-kicker">Hoş geldin</p>
              <h1>Winvala bonus</h1>
              <p className="wv-lede">
                Hoş geldin bonusu {FACTS.welcomeBonus}. Koşullar üyelik sonrası
                kasa ekranında.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="bonus" label="Bonusu al" />
                <a className="wv-cta wv-cta--ghost" href="/giris/">
                  Giriş
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="wv-wrap">
          <VoxBand
            slot="bonus"
            text="Bonusu almak için üye ol, kasadan talep et."
            label="Bonusu al"
          />
          <article className="wv-section wv-prose">
            <h2>Hoş geldin bonusu</h2>
            <p>
              Hoş geldin bonusu yüzde yüz eşleşme, tavan 5.000 TL. Çevrim ve
              oyun listesi kasa ekranında. Başka tutar veya gizli kod burada yok.
            </p>
            <p>
              Talep butonu salonda “Bonus talebi” olarak durur. Kampanyalar{" "}
              <a href="/promo/">promo</a> sayfasında.
            </p>
          </article>
          <section className="wv-section wv-faq">
            <h2>Bonus soruları</h2>
            <details>
              <summary>Hoş geldin bonusu kimlere geçerli?</summary>
              <p>
                Yeni hesapta hoş geldin paketi kasa üzerinden bağlanır. Eski üye
                için ayrı bir rakam yok.
              </p>
            </details>
            <details>
              <summary>Çevrim nedir?</summary>
              <p>
                Çevrim, bonusun bakiyeye dönmesi için salonda oynanması gereken
                tutar. Katı rakamı kasa metninden oku.
              </p>
            </details>
          </section>
          <VoxBand
            slot="after"
            text="Bonusu almak için salona gir."
            label="Bonusu al"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
