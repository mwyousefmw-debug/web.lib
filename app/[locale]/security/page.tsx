import { getTranslations } from "next-intl/server";
import { SecurityHero } from "@/components/sections/SecurityHero";
import { SecurityJourney } from "@/components/sections/SecurityJourney";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "security" });
  return constructMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
    path: "/security",
  });
}

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />
      <SecurityJourney />
    </>
  );
}
