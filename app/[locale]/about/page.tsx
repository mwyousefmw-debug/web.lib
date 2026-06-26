import { getTranslations } from "next-intl/server";
import { Check, Target, Lightbulb } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { AboutValues } from "@/components/sections/AboutValues";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return constructMetadata({ title: t("eyebrow"), locale });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const whyItems: string[] = t.raw("about.why.items") as string[];

  return (
    <>
      <PageHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      {/* Mission & Vision */}
      <section className="section-py">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {t("about.mission.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.mission.text")}
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {t("about.vision.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <AboutValues />

      {/* Why Choose Us */}
      <section className="section-py bg-muted/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary/50" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {t("about.eyebrow")}
                </span>
              </div>
              <h2 className="font-display font-bold text-display-sm md:text-display-md text-foreground tracking-tight mb-6">
                {t("about.why.title")}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyItems.map((item: string) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-primary/10" />
                <div className="absolute inset-8 rounded-full border border-dashed border-primary/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glow-md">
                    <span className="font-display font-black text-5xl text-gradient">
                      WL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
