"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { projects } from "@/data/projects";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

const categories: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web-app", label: "Web Apps" },
  { value: "dashboard", label: "Dashboards" },
  { value: "landing-page", label: "Landing Pages" },
  { value: "e-commerce", label: "E-Commerce" },
  { value: "business-system", label: "Business Systems" },
  { value: "ui-ux", label: "UI/UX" },
];

export function PortfolioGrid() {
  const t = useTranslations("portfolio");
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

  const hasProjects = projects.length > 0;
  const isSingle = projects.length === 1;

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Grid columns adapt automatically based on how many projects are visible
  const gridClass = cn(
    "grid gap-6",
    filtered.length >= 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : filtered.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1"
  );

  return (
    <section className="section-py-sm">
      <div className="container-wide">
        {/* Category filter — only shown when 2+ projects exist */}
        {hasProjects && !isSingle && (
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === cat.value
                    ? "bg-primary text-black shadow-glow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {!hasProjects ? (
          // Empty state
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-32 gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FolderOpen className="w-10 h-10 text-primary/60" />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-xl text-foreground mb-2">
                {t("empty.title")}
              </p>
              <p className="text-muted-foreground">{t("empty.subtitle")}</p>
            </div>
          </motion.div>
        ) : isSingle ? (
          // Single project — full-width hero card, no filter chrome
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectCard project={projects[0]} size="lg" />
          </motion.div>
        ) : (
          // Multiple projects — adaptive grid with category filter
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <StaggerContainer
                key={activeCategory}
                className={gridClass}
                staggerChildren={0.08}
              >
                {filtered.map((project) => (
                  <ProjectCard key={project.slug} project={project} size="sm" />
                ))}
              </StaggerContainer>
            ) : (
              <motion.div
                key="no-results"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center py-24 gap-4"
              >
                <p className="text-muted-foreground">{t("empty.subtitle")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
