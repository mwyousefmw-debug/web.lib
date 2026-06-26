import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  locale?: string;
}

export function constructMetadata({
  title,
  description,
  image = "/images/projects/logo.jpg",
  noIndex = false,
  locale = "en",
}: MetaProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Modern Web Development`;

  const desc =
    description ??
    (locale === "ar" ? siteConfig.descriptionAr : siteConfig.description);

  return {
    title: fullTitle,
    description: desc,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_LY" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_LY",
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [{ url: "/images/projects/logo.jpg", type: "image/jpeg" }],
      apple: [{ url: "/images/projects/logo.jpg" }],
    },
  };
}
