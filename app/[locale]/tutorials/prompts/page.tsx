import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import { Heart, History } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { PromptStats } from "@/components/sections/PromptStats";
import { PromptsBrowser } from "@/components/sections/PromptsBrowser";
import { PromptsGridSkeleton } from "@/components/ui/PromptsGridSkeleton";
import { PromptBookResource } from "@/components/ui/PromptBookResource";
import { constructMetadata } from "@/lib/metadata";
import { cn, focusRing } from "@/lib/utils";
import { prompts, getAllPromptCategories, getAllAiModels } from "@/content/prompts";
import type { Metadata } from "next";

// Below-the-fold and optional — deferred into its own chunk instead of the main bundle.
const RecentlyViewed = dynamic(() =>
  import("@/components/sections/RecentlyViewed").then((m) => m.RecentlyViewed)
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "prompts" });
  return constructMetadata({ title: t("title"), locale });
}

export default async function PromptLibraryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "prompts" });

  return (
    <>
      <PageHeader
        eyebrow={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="container-wide -mt-4 mb-12 md:-mt-8">
        <PromptBookResource label={t("promptBook.download")} className="max-w-3xl mx-auto" />
      </div>

      <PromptStats
        labels={{
          prompts: t("stats.prompts"),
          categories: t("stats.categories"),
          aiModels: t("stats.aiModels"),
          freeAccess: t("stats.freeAccess"),
        }}
        values={{
          prompts: prompts.length,
          categories: getAllPromptCategories().length,
          aiModels: getAllAiModels().length,
        }}
      />

      <section className="section-py-sm">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link
              href="/tutorials/prompts/favorites"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded",
                focusRing
              )}
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              {t("favorites.title")}
            </Link>
            <Link
              href="/tutorials/prompts/history"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded",
                focusRing
              )}
            >
              <History className="w-4 h-4" aria-hidden="true" />
              {t("history.title")}
            </Link>
          </div>
          <Suspense fallback={<PromptsGridSkeleton />}>
            <PromptsBrowser />
          </Suspense>
        </div>
      </section>

      <RecentlyViewed />
    </>
  );
}
