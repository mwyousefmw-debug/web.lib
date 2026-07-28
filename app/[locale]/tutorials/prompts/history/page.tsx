import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { CopyHistoryList } from "@/components/sections/CopyHistoryList";
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
    title: t("history.title"),
    locale,
    noIndex: true,
    path: "/tutorials/prompts/history",
  });
}

export default async function HistoryPage({
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
        title={t("history.title")}
        subtitle={t("history.subtitle")}
      />
      <section className="section-py-sm">
        <div className="container-wide">
          <CopyHistoryList />
        </div>
      </section>
    </>
  );
}
