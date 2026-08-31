import { NAV, SITE_NAME, SITE_URL, offerUrl } from "@/lib/offer";
import { VoxCta } from "@/components/VoxCta";

export function SiteHeader({ current }: { current: string }) {
  return (
    <header className="wv-header">
      <div className="wv-wrap wv-header-row">
        <a className="wv-brand" href="/">
          <GateMark />
          <span>
            <span className="wv-mark">{SITE_NAME}</span>
            <span className="wv-mark-sub">Casino</span>
          </span>
        </a>
        <nav className="wv-nav" aria-label="Winvala menüsü">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={current === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <VoxCta slot="header" label="Giriş yap" compact />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="wv-footer">
      <div className="wv-wrap">
        <nav className="wv-footer-nav" aria-label="Winvala sayfaları">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={offerUrl("footer")} rel="nofollow sponsored noopener" target="_blank">
            Salona gir
          </a>
        </nav>
        <p className="wv-fine">
          18+ · Sorumlu oyun. Vanta Technology LTD · Anjouan Gaming.
        </p>
      </div>
    </footer>
  );
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Winvala",
    alternateName: ["Winvala Casino", "casino Winvala"],
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: [
      "https://www.instagram.com/winvalaofficial/",
      "https://twitter.com/winvalacom",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function GateMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="6" fill="#12151c" stroke="#e6c16a" strokeWidth="2" />
      <path
        d="M12 52 V18 L32 8 L52 18 V52"
        fill="none"
        stroke="#e26a1a"
        strokeWidth="2.4"
      />
      <path d="M22 52 V28 H42 V52" fill="none" stroke="#e6c16a" strokeWidth="2" />
      <circle cx="32" cy="38" r="3.2" fill="#e6c16a" />
    </svg>
  );
}

export function GateHero() {
  return (
    <svg className="wv-gate" viewBox="0 0 220 140" role="img" aria-label="Winvala Casino">
      <title>Winvala Casino — Valhalla</title>
      <defs>
        <linearGradient id="ember" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e26a1a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e6c16a" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="8" y="18" width="28" height="110" fill="#1a1e27" stroke="#a7843a" />
      <rect x="184" y="18" width="28" height="110" fill="#1a1e27" stroke="#a7843a" />
      <path d="M8 28 H212" stroke="#e6c16a" strokeWidth="4" />
      <path d="M36 50 H184" stroke="#e26a1a" strokeWidth="2" />
      <rect x="86" y="62" width="48" height="66" fill="#07080b" stroke="#e6c16a" />
      <circle cx="110" cy="96" r="5" fill="url(#ember)" />
      <path d="M20 128 H200" stroke="#6e1612" strokeWidth="6" />
    </svg>
  );
}
