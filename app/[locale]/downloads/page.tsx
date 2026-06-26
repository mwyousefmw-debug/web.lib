import { getTranslations } from "next-intl/server";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TutorialCard } from "@/components/cards/TutorialCard";
import { tutorials } from "@/data/tutorials";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "downloads" });
  return constructMetadata({ title: t("title"), locale });
}

export default async function DownloadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "downloads" });
  const hasTutorials = tutorials.length > 0;

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section-py-sm">
        <div className="container-wide">
          {hasTutorials ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Download className="w-10 h-10 text-primary/60" />
              </div>
              <p className="text-muted-foreground text-center">{t("empty")}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
