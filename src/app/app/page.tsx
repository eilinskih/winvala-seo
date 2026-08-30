import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";

export const metadata: Metadata = {
  title: "Winvala uygulama",
  description:
    "Winvala uygulama: tarayıcı salonu, ana ekrana ekleme. Mağaza APK uydurmayız.",
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
              <p className="wv-kicker">Cep</p>
              <h1>Winvala uygulama</h1>
              <p className="wv-lede">
                Salon tarayıcıda tam açılır. Winvala uygulama olarak mağaza
                paketi doğrulanmadığı için APK veya store linki yayınlamıyoruz.
                Ana ekrana ekle, lobi cebinde kalsın.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="app" label="Mobil salonu aç" />
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
            text="Winvala uygulama kısayolu: salonu aç, paylaş menüsünden ana ekrana ekle."
            label="Cepte aç"
          />
          <article className="wv-section wv-prose">
            <h2>Nasıl eklenir</h2>
            <p>
              iOS Safari’de paylaş → Ana Ekrana Ekle. Android Chrome’da menü →
              Ana ekrana ekle. Resmi sitede PWA manifest durur; tema koyu,
              kısayol adı Winvala.
            </p>
            <p>
              Native iOS/Android sürüm numarası elimizde yok. Sahte APK
              kapılarından uzak dur; Winvala giriş yine tarayıcı kapısından
              yürür.
            </p>
          </article>
          <VoxBand
            slot="after"
            text="Kısayol hazır. Winvala uygulama lobisi tarayıcıda."
            label="Mobilde gir"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
