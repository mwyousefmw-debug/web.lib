"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TutorialCard } from "@/components/cards/TutorialCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { featuredTutorials } from "@/data/tutorials";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TutorialsPreview() {
  const t = useTranslations();
  const hasTutorials = featuredTutorials.length > 0;

  // Grid adapts automatically based on how many featured tutorials exist
  const gridClass = cn(
    "grid gap-6",
    featuredTutorials.length >= 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : featuredTutorials.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 max-w-2xl mx-auto"
  );

  return (
    <section className="section-py relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 start-0 w-[350px] h-[250px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow={t("tutorials.eyebrow")}
          title={t("tutorials.title")}
          subtitle={t("tutorials.subtitle")}
          className="mb-14"
        />

        {hasTutorials ? (
          <StaggerContainer className={gridClass} staggerChildren={0.1}>
            {featuredTutorials.slice(0, 3).map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </StaggerContainer>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-24 gap-5 rounded-2xl border border-dashed border-border/50 bg-muted/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary/60" />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-lg text-foreground">
                {t("tutorials.empty.title")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {t("tutorials.empty.subtitle")}
              </p>
            </div>
          </motion.div>
        )}

        {hasTutorials && (
          <div className="flex justify-center mt-12">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 bg-muted/20 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
            >
              {t("tutorials.viewAll")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
