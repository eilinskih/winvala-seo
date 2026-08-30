import type { Metadata } from "next";
import { GateHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { LobbyGalleries } from "@/components/GamesGallery";
import { VoxBand, VoxCta } from "@/components/VoxCta";
import { providers, slots } from "@/lib/catalog";
import { FACTS, PAYMENTS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Winvala Casino | Slot ve canlı casino",
  description:
    "Winvala'da slotlar, canlı casino ve kasa tek hesapta. Resmi siteden giriş yap, lobide oyna. Casino Winvala.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "Winvala nedir?",
    a: "Biz Winvala’yız. Slot oyunları, canlı casino ve kasa tek hesapta. Giriş yap, lobide oyna.",
  },
  {
    q: "Casino Winvala’da hangi oyunlar var?",
    a: "Lobide Pragmatic Play, Play’n GO, Hacksaw, Nolimit City, Evolution (canlı casino) ve yüzden fazla sağlayıcı durur. Logoya bas, o stüdyonun slotlarını gör.",
  },
  {
    q: "Nasıl para yatırılır / çekilir?",
    a: "Kasa Mastercard, VISA, banka havalesi, kripto, FulgurPay, Anında Havale ve NakitX kabul eder. Günlük çekim limiti 500.000 TL ve 10.000 USDT.",
  },
  {
    q: "Mobilde oynanır mı?",
    a: "Evet. Winvala tarayıcıda açılır. App Store / Play uygulaması yok. Safari veya Chrome’dan Ana Ekrana Ekle — adımlar Uygulama sayfasında.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader current="/" />
      <main>
        <section className="wv-hero">
          <div className="wv-wrap">
            <div className="wv-hero-frame">
              <GateHero />
              <p className="wv-kicker">Güncel giriş</p>
              <h1>Winvala Casino</h1>
              <p className="wv-lede">
                Winvala’da slotlar, canlı casino ve kasa tek hesapta. Resmi
                siteden giriş yap, lobide oyna.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="home" label="Salona gir" />
                <a className="wv-cta wv-cta--ghost" href="#oyunlar">
                  Slot oyunları
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="wv-wrap">
          <VoxBand
            slot="mid"
            text="Hesabın hazır. Giriş yap, lobide oyna."
            label="Üye ol"
          />

          <LobbyGalleries slots={slots} providers={providers} />

          <VoxBand
            slot="lobby"
            text="Beğendiğin oyuna tıkla, salonda açılsın."
            label="Oyunu aç"
          />

          <section className="wv-section" id="salon">
            <h2>Casino salonu</h2>
            <div className="wv-prose">
              <p>
                Winvala’da slotlar, canlı casino ve kasa tek hesapta. Operatör
                Vanta Technology LTD, lisans Anjouan Gaming. 2026’da açıldık;
                site TR dilinde.
              </p>
              <p>
                Canlı casinoda Evolution masaları var. Slot tarafında yüzden
                fazla sağlayıcı; burada sık oynanan stüdyoların logolarını ve
                oyunlarını gösteriyoruz.
              </p>
            </div>
            <div className="wv-linkrow">
              <a href="/giris/">Güncel giriş</a>
              <a href="/bonus/">Hoş geldin bonusu</a>
              <a href="/promo/">Kampanyalar</a>
            </div>
          </section>

          <section className="wv-section" id="odeme">
            <h2>Kasa ve ödemeler</h2>
            <p className="wv-section-lead">
              Winvala kasasında yedi yöntem var. Günlük çekim limiti 500.000 TL
              ve 10.000 USDT.
            </p>
            <div className="wv-pay-grid">
              {PAYMENTS.map((p) => (
                <div className="wv-pay" key={p}>
                  {p}
                </div>
              ))}
            </div>
          </section>

          <section className="wv-section" id="bonuslar">
            <h2>Hoş geldin bonusu</h2>
            <div className="wv-prose">
              <p>
                Hoş geldin bonusu {FACTS.welcomeBonus}. Koşullar üyelik sonrası
                kasa ekranında. Ayrıntı <a href="/bonus/">bonus</a> sayfasında.
              </p>
            </div>
          </section>

          <section className="wv-section" id="uygulama">
            <h2>Mobilde oyna</h2>
            <div className="wv-prose">
              <p>
                Winvala tarayıcıda açılır. App Store / Play uygulaması yok.
                Safari veya Chrome’dan Ana Ekrana Ekle — adımlar{" "}
                <a href="/app/">uygulama</a> sayfasında.
              </p>
            </div>
          </section>

          <VoxBand
            slot="after"
            text="Hazırsan salona gir."
            label="Giriş yap"
          />

          <section className="wv-section wv-faq" id="sss">
            <h2>Sık sorulanlar</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
