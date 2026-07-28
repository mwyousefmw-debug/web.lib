import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { FavoritesBrowser } from "@/components/sections/FavoritesBrowser";
import { PromptsGridSkeleton } from "@/components/ui/PromptsGridSkeleton";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "prompts" });
  return constructMetadata({
    title: t("favorites.title"),
    locale,
    noIndex: true,
    path: "/tutorials/prompts/favorites",
  });
}

export default async function FavoritesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "prompts" });

  return (
    <>
      <PageHeader
        eyebrow={t("title")}
        title={t("favorites.title")}
        subtitle={t("favorites.subtitle")}
      />
      <section className="section-py-sm">
        <div className="container-wide">
          <Suspense fallback={<PromptsGridSkeleton />}>
            <FavoritesBrowser />
          </Suspense>
        </div>
      </section>
    </>
  );
}
