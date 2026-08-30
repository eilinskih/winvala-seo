import type { MetadataRoute } from "next";
import { CONTENT_DATE, SITE_URL } from "@/lib/offer";

const pages = [
  { path: "/", priority: 1 },
  { path: "/giris/", priority: 0.9 },
  { path: "/bonus/", priority: 0.8 },
  { path: "/promo/", priority: 0.7 },
  { path: "/app/", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(CONTENT_DATE),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
