"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { featuredProjects } from "@/data/projects";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PortfolioPreview() {
  const t = useTranslations();
  const hasProjects = featuredProjects.length > 0;
  const isSingle = featuredProjects.length === 1;

  // Grid columns adapt automatically to how many featured projects there are
  const gridClass = cn(
    "grid gap-6",
    featuredProjects.length >= 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : featuredProjects.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1"
  );

  return (
    <section className="section-py relative overflow-hidden bg-muted/10">
      {/* Background glow */}
      <div className="absolute top-0 end-0 w-[400px] h-[300px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
          className="mb-14"
        />

        {hasProjects ? (
          isSingle ? (
            // Single featured project — large hero card
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProjectCard project={featuredProjects[0]} size="lg" />
            </motion.div>
          ) : (
            // Multiple featured projects — adaptive grid
            <StaggerContainer className={gridClass} staggerChildren={0.1}>
              {featuredProjects.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} size="sm" />
              ))}
            </StaggerContainer>
          )
        ) : (
          // Empty state
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-24 gap-5 rounded-2xl border border-dashed border-border/50 bg-muted/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FolderOpen className="w-8 h-8 text-primary/60" />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-lg text-foreground">
                {t("portfolio.empty.title")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {t("portfolio.empty.subtitle")}
              </p>
            </div>
          </motion.div>
        )}

        {/* "View All" link — always shown when projects exist */}
        {hasProjects && (
          <div className="flex justify-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-glow-sm group"
            >
              {t("portfolio.viewAll")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
