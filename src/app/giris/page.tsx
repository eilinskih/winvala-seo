import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";

export const metadata: Metadata = {
  title: "Winvala giriş",
  description:
    "Winvala güncel giriş. Adres değişse de kullanıcı adı ve şifre aynı kalır. Sahte sitelere girme.",
  alternates: { canonical: "/giris/" },
};

export default function GirisPage() {
  return (
    <>
      <SiteHeader current="/giris/" />
      <main>
        <section className="wv-hero">
          <div className="wv-wrap">
            <div className="wv-hero-frame">
              <p className="wv-kicker">Güncel giriş</p>
              <h1>Winvala giriş</h1>
              <p className="wv-lede">
                Winvala güncel giriş. Adres değişse de kullanıcı adı ve şifre
                aynı kalır. Sahte sitelere girme.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="giris" label="Giriş yap" />
                <a className="wv-cta wv-cta--ghost" href="/">
                  Salon
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="wv-wrap">
          <VoxBand
            slot="giris"
            text="Kullanıcı adı ve şifren aynı kalır. Sahte sitelere girme."
            label="Giriş yap"
          />
          <article className="wv-section wv-prose">
            <h2>Nasıl giriş yapılır</h2>
            <p>
              Üç adım: salonu aç, bilgilerini yaz, lobiye gir. Yeniysen üye ol
              butonu giriş ekranının yanında. Form salonda açılır.
            </p>
            <p>
              Site açılmazsa güncel giriş yine bu sayfadan salona bağlanır.
              Adres değişir, hesabın değişmez.
            </p>
            <div className="wv-linkrow">
              <a href="/bonus/">Bonus</a>
              <a href="/app/">Mobil giriş</a>
              <a href="/promo/">Promo</a>
            </div>
          </article>
          <section className="wv-section wv-faq">
            <h2>Giriş soruları</h2>
            <details>
              <summary>Winvala giriş çalışmazsa?</summary>
              <p>
                Önce bu sayfadaki güncel girişi kullan. Eski yer imleri
                çalışmayabilir. Hesap silinmez; adres yenilenir.
              </p>
            </details>
            <details>
              <summary>Giriş ve üye ol aynı yerde mi?</summary>
              <p>
                Evet. Winvala giriş ekranında üye ol formu da var. Kayıt sonrası
                lobi hemen açılır.
              </p>
            </details>
          </section>
          <VoxBand
            slot="after"
            text="Hazırsan giriş yap, salona gir."
            label="Giriş yap"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
