"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Bot } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { CopyButton } from "@/components/ui/CopyButton";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { useCopyHistory } from "@/hooks/useCopyHistory";
import { cn, formatCategoryBadge, focusRing } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import type { Prompt } from "@/types";

interface PromptCardProps {
  prompt: Prompt;
  className?: string;
}

function PromptCardImpl({ prompt, className }: PromptCardProps) {
  const t = useTranslations("prompts");
  const locale = useLocale();
  const { addToHistory } = useCopyHistory();

  const title = locale === "ar" ? prompt.titleAr : prompt.title;
  const description = locale === "ar" ? prompt.descriptionAr : prompt.description;
  const promptText = locale === "ar" ? prompt.promptAr : prompt.prompt;

  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <GlowCard className="h-full flex flex-col p-5 gap-3">
        <FavoriteButton
          promptId={prompt.id}
          favoriteLabel={t("favorite")}
          unfavoriteLabel={t("unfavorite")}
          className={cn("absolute top-3 end-3 z-10 w-8 h-8", focusRing)}
        />

        {/* Category + Difficulty */}
        <div className="flex items-center justify-between gap-2 pe-8">
          <Badge variant="primary" size="sm">
            {formatCategoryBadge(prompt.category)}
          </Badge>
          <DifficultyBadge difficulty={prompt.difficulty} />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base text-foreground leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* AI Models */}
        {prompt.aiModels.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
            {prompt.aiModels.map((model) => (
              <Badge key={model} variant="default" size="sm">
                {model}
              </Badge>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2 pt-1">
          <CopyButton
            text={promptText}
            label={t("copy")}
            copiedLabel={t("details.copied")}
            onCopied={() => addToHistory({ id: prompt.id, slug: prompt.slug, title })}
            className={cn("flex-1 px-4 py-2.5", focusRing)}
          />
          <Link
            href={`/tutorials/prompts/${prompt.slug}`}
            className={cn(
              "flex-1 flex items-center justify-center gap-2",
              "px-4 py-2.5 rounded-xl",
              "bg-primary/10 text-primary border border-primary/20",
              "hover:bg-primary hover:text-black",
              "font-medium text-sm transition-all duration-200",
              "group/btn",
              focusRing
            )}
          >
            {t("view")}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export const PromptCard = memo(PromptCardImpl);
