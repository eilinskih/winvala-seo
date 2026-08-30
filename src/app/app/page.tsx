import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";

export const metadata: Metadata = {
  title: "Winvala uygulama",
  description:
    "Winvala tarayıcıda açılır. App Store / Play uygulaması yok. Safari veya Chrome’dan Ana Ekrana Ekle.",
  alternates: { canonical: "/app/" },
};

export default function AppPage() {
  return (
    <>
      <SiteHeader current="/app/" />
      <main>
        <section className="wv-hero">
          <div className="wv-wrap">
            <div className="wv-hero-frame">
              <p className="wv-kicker">Mobil</p>
              <h1>Winvala uygulama</h1>
              <p className="wv-lede">
                Winvala tarayıcıda açılır. App Store / Play uygulaması yok.
                Safari veya Chrome’dan Ana Ekrana Ekle.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="app" label="Salona gir" />
                <a className="wv-cta wv-cta--ghost" href="/giris/">
                  Giriş
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="wv-wrap">
          <VoxBand
            slot="app"
            text="Salonu aç, paylaş menüsünden Ana Ekrana Ekle."
            label="Mobilde aç"
          />
          <article className="wv-section wv-prose">
            <h2>Nasıl eklenir</h2>
            <p>
              iOS Safari’de paylaş → Ana Ekrana Ekle. Android Chrome’da menü →
              Ana ekrana ekle. Kısayol koyu temayla, Winvala adıyla eklenir.
            </p>
            <p>
              App Store veya Play Store’da Winvala uygulaması yok. Sahte APK
              indirme. Giriş tarayıcıdan yapılır.
            </p>
          </article>
          <VoxBand
            slot="after"
            text="Kısayol hazır. Winvala tarayıcıda açılır."
            label="Giriş yap"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
