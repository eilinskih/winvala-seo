import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { VoxBand, VoxCta } from "@/components/VoxCta";

export const metadata: Metadata = {
  title: "Winvala giriş",
  description:
    "Winvala giriş ve login kapısı. Casino Winvala hesabına resmi salondan gir.",
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
              <p className="wv-kicker">Kapı</p>
              <h1>Winvala giriş</h1>
              <p className="wv-lede">
                Login burada. Winvala giriş adresi değişse de hesabın, bakiye ve
                lobi aynı çatıda kalır. Bizim kapımız tek hesap çalıştırır.
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
            text="Winvala giriş: kullanıcı adı ve şifre aynı kalır. Sahte kopya kapılardan uzak dur."
            label="Resmi giriş"
          />
          <article className="wv-section wv-prose">
            <h2>Login nasıl yürür</h2>
            <p>
              Winvala giriş üç adımdır: kapıyı aç, bilgilerini yaz, lobiye düş.
              Yeni üyede kayıt formu login’in yanında durur. Biz şifreyi burada
              saklamayız — form salonun kendi ekranındadır.
            </p>
            <p>
              Erişim kesilirse güncel giriş yine bu sayfadan salona bağlanır.
              Adres kılıfı değişir, üyelik dosyası değişmez.
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
                Önce bu sayfadaki kapıyı kullan. Eski bookmark’lar kapanmış
                ayna olabilir. Hesap silinmez; kapı yenilenir.
              </p>
            </details>
            <details>
              <summary>Login ve kayıt aynı yerde mi?</summary>
              <p>
                Evet. Winvala login ekranı üyelik formunu da taşır. Kayıt
                sonrası lobi hemen açılır.
              </p>
            </details>
          </section>
          <VoxBand
            slot="after"
            text="Kapı hazır. Winvala giriş için salona geç."
            label="Hesaba gir"
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
