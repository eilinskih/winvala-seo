import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";
import { FACTS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Winvala bonus",
  description:
    "Winvala bonus masası: hoş geldin paketi 100% 5.000 TL’ye kadar. Şartlar kasada.",
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
              <p className="wv-kicker">Kasa üstü</p>
              <h1>Winvala bonus</h1>
              <p className="wv-lede">
                Bizim hoş geldin paketi: {FACTS.welcomeBonus}. Sayıyı şişirmeyiz.
                Çevrim ve oyun listesi kasa ekranında durur.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="bonus" label="Bonusu aç" />
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
            text="Winvala bonus hesabına bağlanır. Önce kapı, sonra kasa."
            label="Paketi al"
          />
          <article className="wv-section wv-prose">
            <h2>Ne yayınlıyoruz</h2>
            <p>
              Winvala bonus olarak doğrulanan tek paket: yüzde yüz eşleşme, tavan
              5.000 TL. Başka tutar, bedava spin adedi veya gizli kod burada
              yok — elimizde yoksa yazmayız.
            </p>
            <p>
              Talep butonu salonda “Bonus talebi” olarak durur. Kampanya
              takvimi <a href="/promo/">promo</a> tahtasına bağlıdır.
            </p>
          </article>
          <section className="wv-section wv-faq">
            <h2>Bonus soruları</h2>
            <details>
              <summary>Winvala bonus kimde açılır?</summary>
              <p>
                Yeni hesapta hoş geldin paketi kasa üzerinden bağlanır. Eski
                üye için ayrı bir rakam yayınlamıyoruz.
              </p>
            </details>
            <details>
              <summary>Çevrim nedir?</summary>
              <p>
                Çevrim, bonusun bakiyeye dönmesi için salonda tamamlanan
                çevrimdir. Katı rakamı kasa metninden oku; burada uydurmayız.
              </p>
            </details>
          </section>
          <VoxBand
            slot="after"
            text="Paket seni bekler. Winvala bonus için salona gir."
            label="Bonusu seç"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
