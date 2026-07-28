import { notFound } from "next/navigation";
import { getPromptBySlug, getAllPromptSlugs } from "@/content/prompts";
import { PromptDetails } from "@/components/sections/PromptDetails";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllPromptSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) return constructMetadata({ locale });

  const title = locale === "ar" ? prompt.titleAr : prompt.title;
  const description = locale === "ar" ? prompt.descriptionAr : prompt.description;

  return constructMetadata({
    title,
    description,
    locale,
    path: `/tutorials/prompts/${prompt.slug}`,
  });
}

export default async function PromptPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const prompt = getPromptBySlug(slug);
  if (!prompt) notFound();

  const title = locale === "ar" ? prompt.titleAr : prompt.title;
  const description = locale === "ar" ? prompt.descriptionAr : prompt.description;
  const url = `${siteConfig.url}/${locale}/tutorials/prompts/${prompt.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url,
    inLanguage: locale,
    keywords: prompt.tags.join(", "),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Prompt Library",
      url: `${siteConfig.url}/${locale}/tutorials/prompts`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PromptDetails prompt={prompt} />
    </>
  );
}
