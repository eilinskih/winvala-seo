import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";

export const metadata: Metadata = {
  title: "Winvala promo",
  description:
    "Winvala promo tahtası: salon kampanyaları kasa ve lobi duyurularında durur.",
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
              <p className="wv-kicker">Tahta</p>
              <h1>Winvala promo</h1>
              <p className="wv-lede">
                Kampanyalar salonda döner. Winvala promo listesini burada
                uydurmayız: canlı tahta kasa bildirimlerinde açılır.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="promo" label="Kampanyayı gör" />
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
            text="Winvala promo ekranı hesap açılınca görünür."
            label="Tahtayı aç"
          />
          <article className="wv-section wv-prose">
            <h2>Nasıl okunur</h2>
            <p>
              Promo, hoş geldin paketi dışında kalan duyurulardır. Günlük
              takvim, kayıp iadesi veya spin sayısı elimizde doğrulanmadığı
              için yazılmıyor. Salona gir, tahtayı orada oku.
            </p>
            <div className="wv-linkrow">
              <a href="/giris/">Giriş</a>
              <a href="/bonus/">Hoş geldin paketi</a>
              <a href="/">Salon</a>
            </div>
          </article>
          <VoxBand
            slot="after"
            text="Tahta salonda. Winvala promo için kapıdan geç."
            label="Duyuruları aç"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
