"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { TutorialCard } from "@/components/cards/TutorialCard";
import { PromptLibraryCard } from "@/components/cards/PromptLibraryCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { tutorials } from "@/data/tutorials";
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

  // Grid columns adapt to how many results are visible (+1 for the
  // permanent Prompt Library card, which isn't affected by filtering)
  const visibleCount = filtered.length + 1;
  const gridClass = cn(
    "grid gap-6",
    visibleCount >= 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : visibleCount === 2
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
          // No downloadable tutorials yet — still surface the Prompt Library
          <StaggerContainer className={gridClass} staggerChildren={0.08}>
            <PromptLibraryCard />
          </StaggerContainer>
        ) : (
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <StaggerContainer
                key={`${category}-${difficulty}-${search}`}
                className={gridClass}
                staggerChildren={0.08}
              >
                <PromptLibraryCard />
                {filtered.map((tutorial) => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </StaggerContainer>
            ) : (
              // No results after filtering — Prompt Library still reachable
              <StaggerContainer
                key="no-results"
                className={gridClass}
                staggerChildren={0.08}
              >
                <PromptLibraryCard />
              </StaggerContainer>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
