import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";
import { FACTS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Winvala bonus",
  description:
    "Winvala hoş geldin bonusu %100, 5.000 TL’ye kadar. Çevrim şartları üyelik sonrası kasa ekranında görünür.",
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
                Hoş geldin bonusu {FACTS.welcomeBonus}. Çevrim ve diğer koşullar
                üyelik sonrası kasa ekranında görünür.
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
              İlk yatırımına %100 bonus, 5.000 TL’ye kadar. Çevrim şartı ve
              hangi oyunların çevrime sayıldığı kasa ekranında yazar. Burada
              başka tutar veya gizli kod yok.
            </p>
            <p>
              Salonda “Bonus talebi” butonundan talep edersin. Diğer kampanyalar{" "}
              <a href="/promo/">kampanyalar</a> sayfasında.
            </p>
          </article>
          <section className="wv-section wv-faq">
            <h2>Bonus soruları</h2>
            <details>
              <summary>Hoş geldin bonusu kimlere geçerli?</summary>
              <p>
                Hoş geldin paketi yeni hesaplara kasa üzerinden tanımlanır. Eski
                üyeler için ayrı bir hoş geldin tutarı yok.
              </p>
            </details>
            <details>
              <summary>Çevrim nedir?</summary>
              <p>
                Çevrim, bonusun gerçek bakiyeye geçmesi için salonda çevirmen
                gereken tutar. Net rakamı kasa ekranından oku.
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
