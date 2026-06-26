import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllProjectSlugs } from "@/data/projects";

const base = siteConfig.url;

const staticRoutes = [
  { path: "",             changeFreq: "weekly"  as const, priority: 1.0 },
  { path: "/about",       changeFreq: "monthly" as const, priority: 0.8 },
  { path: "/services",    changeFreq: "monthly" as const, priority: 0.8 },
  { path: "/portfolio",   changeFreq: "monthly" as const, priority: 0.9 },
  { path: "/tutorials",   changeFreq: "monthly" as const, priority: 0.8 },
  { path: "/downloads",   changeFreq: "monthly" as const, priority: 0.7 },
  { path: "/testimonials",changeFreq: "monthly" as const, priority: 0.7 },
  { path: "/faq",         changeFreq: "monthly" as const, priority: 0.7 },
  { path: "/contact",     changeFreq: "monthly" as const, priority: 0.8 },
  { path: "/privacy-policy", changeFreq: "yearly" as const, priority: 0.3 },
  { path: "/terms",       changeFreq: "yearly"  as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // One entry per route with hreflang alternates — avoids duplicating each URL
  const pages: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFreq, priority }) => ({
    url: `${base}/en${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
    alternates: {
      languages: {
        en: `${base}/en${path}`,
        ar: `${base}/ar${path}`,
      },
    },
  }));

  // Project pages — one entry per slug with alternates
  const slugs = getAllProjectSlugs();
  const projects: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/en/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${base}/en/portfolio/${slug}`,
        ar: `${base}/ar/portfolio/${slug}`,
      },
    },
  }));

  return [...pages, ...projects];
}
