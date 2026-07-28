"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { PromptCard } from "@/components/cards/PromptCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { getPromptById } from "@/content/prompts";

export function RecentlyViewed() {
  const t = useTranslations("prompts");
  const { recentIds } = useRecentlyViewed();

  const recentPrompts = useMemo(
    () => recentIds.map((id) => getPromptById(id)).filter((p) => p !== undefined),
    [recentIds]
  );

  if (recentPrompts.length === 0) return null;

  return (
    <section className="section-py-sm border-t border-border/40">
      <div className="container-wide">
        <h2 className="font-display font-bold text-2xl text-foreground mb-6">
          {t("recentlyViewed.title")}
        </h2>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerChildren={0.05}
          whileInView={false}
        >
          {recentPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
