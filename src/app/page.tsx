import type { Metadata } from "next";
import { GateHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { LobbyGalleries } from "@/components/GamesGallery";
import { VoxBand, VoxCta } from "@/components/VoxCta";
import { providers, slots } from "@/lib/catalog";
import { FACTS, PAYMENTS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Winvala Casino | Resmi salon",
  description:
    "Winvala casino salonunda slotlar, canlı masalar ve sağlayıcı lobisi. Casino Winvala kapısı resmi sitede açılır.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "Winvala nedir?",
    a: "Biz Winvala’yız: slotlar ve canlı masaları aynı çatı altında toplayan casino salonumuz. Kapıdan geçince lobi, oyunlar ve kasa aynı hesaba bağlıdır.",
  },
  {
    q: "Casino Winvala’da hangi stüdyolar var?",
    a: "Lobide Pragmatic Play, Play’n GO, Hacksaw, Nolimit, Evolution (canlı masa etiketi) ve diğer stüdyoların logoları durur. Kartlar stüdyo sitelerine çıkmaz.",
  },
  {
    q: "Ödeme nasıl yürür?",
    a: "Kasa Mastercard, VISA, banka havalesi, kripto, FulgurPay, Anında Havale ve NakitX kabul eder. Günlük çekim tavanı 500.000 TL ve 10.000 USDT olarak yayınlanır.",
  },
  {
    q: "Mobilde salon açık mı?",
    a: "Evet. Winvala tarayıcıda tam salon verir; ana ekrana ekleme adımları Uygulama sayfasında durur.",
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
              <p className="wv-kicker">Resmi salon</p>
              <h1>Winvala Casino</h1>
              <p className="wv-lede">
                Kapı Valhalla kemerinin altında durur. Bizim salonumuzda lobi,
                masalar ve kasa tek hesapta toplanır — casino Winvala’ya buradan
                girersin.
              </p>
              <div className="wv-cta-row">
                <VoxCta slot="home" label="Salona gir" />
                <a className="wv-cta wv-cta--ghost" href="#oyunlar">
                  Oyun lobisi
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="wv-wrap">
          <VoxBand
            slot="mid"
            text="Winvala kapısı açık. Hesabın lobide seni bekler."
            label="Hesabı aç"
          />

          <LobbyGalleries slots={slots} providers={providers} />

          <VoxBand
            slot="lobby"
            text="Beğendiğin kapağı seç, sonra salona geç. Stüdyo sitelerine çıkış yok."
            label="Oyunu aç"
          />

          <section className="wv-section" id="salon">
            <h2>Casino salonu</h2>
            <div className="wv-prose">
              <p>
                Winvala casino tek çatı: slot ızgarası, canlı masalar ve kasa.
                Operatör Vanta Technology LTD, lisans Anjouan Gaming. 2026’da
                açılan salonumuz TR dilinde yürür.
              </p>
              <p>
                Canlı tarafta Evolution etiketi lobide durur. Slot tarafında
                yüzden fazla sağlayıcı kataloğu yayınlanır; bu sayfada sık
                dönen stüdyoların logolarını ve kapaklarını gösteriyoruz.
              </p>
            </div>
            <div className="wv-linkrow">
              <a href="/giris/">Giriş kapısı</a>
              <a href="/bonus/">Bonus masası</a>
              <a href="/promo/">Kampanya tahtası</a>
            </div>
          </section>

          <section className="wv-section" id="odeme">
            <h2>Kasa ve ödemeler</h2>
            <p className="wv-section-lead">
              Casino Winvala kasasında yedi yöntem durur. Kazanç tavanı
              yayınlanmaz; günlük çekim 500.000 TL ve 10.000 USDT.
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
            <h2>Bonus masası</h2>
            <div className="wv-prose">
              <p>
                Salon hoş geldin paketi: {FACTS.welcomeBonus}. Şartlar kasa
                ekranında durur. Sayı uydurmayız — ayrıntı{" "}
                <a href="/bonus/">bonus</a> sayfasında.
              </p>
            </div>
          </section>

          <section className="wv-section" id="uygulama">
            <h2>Mobil salon</h2>
            <div className="wv-prose">
              <p>
                Winvala tarayıcıda tam lobi verir. Mağaza uygulaması
                yayınlamıyoruz; ana ekrana ekleme adımları{" "}
                <a href="/app/">uygulama</a> sayfasında durur.
              </p>
            </div>
          </section>

          <VoxBand
            slot="after"
            text="Metin bitti. Kapı hâlâ açık — Winvala salonuna geç."
            label="Şimdi oyna"
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
