import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn2.softswiss.net", pathname: "/logos/**" },
      { protocol: "https", hostname: "common-static.ppgames.net", pathname: "/game_pic/**" },
    ],
  },
  async redirects() {
    return [{ source: "/sitemap", destination: "/sitemap.xml", permanent: true }];
  },
};

export default nextConfig;
