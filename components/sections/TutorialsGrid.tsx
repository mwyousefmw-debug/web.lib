"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { TutorialCard } from "@/components/cards/TutorialCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { tutorials } from "@/data/tutorials";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { TutorialCategory, TutorialDifficulty } from "@/types";

const categories: { value: "all" | TutorialCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "next-js", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwind", label: "Tailwind" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "ui-ux", label: "UI/UX" },
  { value: "framer-motion", label: "Framer Motion" },
  { value: "general", label: "General" },
];

const difficulties: { value: "all" | TutorialDifficulty; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export function TutorialsGrid() {
  const t = useTranslations("tutorials");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | TutorialCategory>("all");
  const [difficulty, setDifficulty] = useState<"all" | TutorialDifficulty>("all");

  const hasTutorials = tutorials.length > 0;
  const showFilters = tutorials.length > 1;

  const filtered = tutorials.filter((tut) => {
    const matchesSearch =
      !search ||
      tut.title.toLowerCase().includes(search.toLowerCase()) ||
      tut.titleAr.includes(search) ||
      tut.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || tut.category === category;
    const matchesDifficulty = difficulty === "all" || tut.difficulty === difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Grid columns adapt to how many results are visible
  const gridClass = cn(
    "grid gap-6",
    filtered.length >= 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : filtered.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 max-w-sm mx-auto"
  );

  return (
    <section className="section-py-sm">
      <div className="container-wide">
        {/* Filters — only shown when 2+ tutorials exist */}
        {showFilters && (
          <div className="flex flex-col gap-5 mb-10">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("filter.search")}
                className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    category === cat.value
                      ? "bg-primary text-black"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/50"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Difficulty filter */}
            <div className="flex flex-wrap gap-2">
              {difficulties.map((diff) => (
                <button
                  key={diff.value}
                  onClick={() => setDifficulty(diff.value)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    difficulty === diff.value
                      ? "bg-foreground text-background"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/50"
                  )}
                >
                  {diff.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {!hasTutorials ? (
          // Empty state — no tutorials at all
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-32 gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary/60" />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-xl text-foreground mb-2">
                {t("empty.title")}
              </p>
              <p className="text-muted-foreground">{t("empty.subtitle")}</p>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <StaggerContainer
                key={`${category}-${difficulty}-${search}`}
                className={gridClass}
                staggerChildren={0.08}
              >
                {filtered.map((tutorial) => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </StaggerContainer>
            ) : (
              // No results after filtering
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
