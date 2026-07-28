"use client";

import { useEffect, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, ArrowRight, Bot } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { CopyButton } from "@/components/ui/CopyButton";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { ShareButton } from "@/components/ui/ShareButton";
import { OpenInAI, type AIProvider } from "@/components/ui/OpenInAI";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { PromptBookResource } from "@/components/ui/PromptBookResource";
import { PromptCard } from "@/components/cards/PromptCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { prompts, getPromptsByCategory } from "@/content/prompts";
import { useCopyHistory } from "@/hooks/useCopyHistory";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn, formatCategoryBadge, focusRing } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import type { Prompt } from "@/types";

interface PromptDetailsProps {
  prompt: Prompt;
}

export function PromptDetails({ prompt }: PromptDetailsProps) {
  const locale = useLocale();
  const t = useTranslations("prompts");
  const tNav = useTranslations("nav");
  const isRTL = locale === "ar";

  const title = locale === "ar" ? prompt.titleAr : prompt.title;
  const description = locale === "ar" ? prompt.descriptionAr : prompt.description;
  const promptText = locale === "ar" ? prompt.promptAr : prompt.prompt;

  const { addToHistory } = useCopyHistory();
  const { trackView } = useRecentlyViewed();

  useEffect(() => {
    trackView(prompt.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt.id]);

  const handleCopied = () => {
    addToHistory({ id: prompt.id, slug: prompt.slug, title });
  };

  const aiProviders: AIProvider[] = useMemo(
    () => [
      {
        id: "chatgpt",
        name: "ChatGPT",
        actionLabel: t("details.openInAi.action", { provider: "ChatGPT" }),
        url: "https://chat.openai.com/",
      },
      {
        id: "claude",
        name: "Claude",
        actionLabel: t("details.openInAi.action", { provider: "Claude" }),
        url: "https://claude.ai/new",
      },
      {
        id: "gemini",
        name: "Gemini",
        actionLabel: t("details.openInAi.action", { provider: "Gemini" }),
        url: "https://gemini.google.com/app",
      },
    ],
    [t]
  );

  const currentIndex = prompts.findIndex((p) => p.slug === prompt.slug);
  const prevPrompt = currentIndex > 0 ? prompts[currentIndex - 1] : null;
  const nextPrompt = currentIndex < prompts.length - 1 ? prompts[currentIndex + 1] : null;

  const PrevArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  const related = getPromptsByCategory(prompt.category)
    .filter((p) => p.slug !== prompt.slug)
    .slice(0, 4);

  return (
    <article className="pt-32 pb-16 md:pt-40">
      <div className="container-wide">
        {/* Breadcrumb */}
        <nav
          className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/tutorials" className={cn("hover:text-primary transition-colors rounded", focusRing)}>
            {tNav("tutorials")}
          </Link>
          <ChevronRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          <Link
            href="/tutorials/prompts"
            className={cn("hover:text-primary transition-colors rounded", focusRing)}
          >
            {t("title")}
          </Link>
          <ChevronRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          <span aria-current="page" className="text-foreground font-medium truncate max-w-[200px]">
            {title}
          </span>
        </nav>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" size="sm">
                {formatCategoryBadge(prompt.category)}
              </Badge>
              <DifficultyBadge difficulty={prompt.difficulty} />
            </div>
            <div className="flex items-center gap-2">
              <ShareButton
                title={title}
                text={description}
                url={`${siteConfig.url}/${locale}/tutorials/prompts/${prompt.slug}`}
                label={t("details.share")}
                sharedLabel={t("details.shared")}
                copiedLabel={t("details.linkCopied")}
                className={focusRing}
              />
              <FavoriteButton
                promptId={prompt.id}
                favoriteLabel={t("favorite")}
                unfavoriteLabel={t("unfavorite")}
                className={cn("w-9 h-9", focusRing)}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-display-sm md:text-display-md text-foreground tracking-tight mb-4"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-4">
            {description}
          </motion.p>

          {/* AI Models */}
          {prompt.aiModels.length > 0 && (
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-1.5 mb-8">
              <Bot className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              {prompt.aiModels.map((model) => (
                <Badge key={model} variant="default" size="sm">
                  {model}
                </Badge>
              ))}
            </motion.div>
          )}

          {/* Code Block */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border/50 bg-card overflow-hidden shadow-card-dark"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/70" />
                <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
              </div>
              <CopyButton
                text={promptText}
                label={t("details.copyPrompt")}
                copiedLabel={t("details.copied")}
                onCopied={handleCopied}
                className={focusRing}
              />
            </div>
            <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
              <code className="font-mono text-foreground whitespace-pre-wrap">{promptText}</code>
            </pre>
          </motion.div>

          {/* Open in AI */}
          <motion.div variants={fadeUp} className="mt-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {t("details.openInAi.heading")}
            </p>
            <OpenInAI
              text={promptText}
              providers={aiProviders}
              successMessage={(provider) => t("details.openInAi.opened", { provider })}
              blockedMessage={(provider) => t("details.openInAi.blocked", { provider })}
              onCopied={handleCopied}
            />
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} className="mt-6 pt-6 border-t border-border/40">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {t("promptBook.resources")}
            </p>
            <PromptBookResource label={t("promptBook.download")} variant="inline" />
          </motion.div>
        </motion.div>

        {/* Prev / Next Navigation */}
        {(prevPrompt || nextPrompt) && (
          <section className="max-w-3xl pt-10 mt-12 border-t border-border/40">
            <div className="flex items-center justify-between gap-4">
              {prevPrompt ? (
                <Link
                  href={`/tutorials/prompts/${prevPrompt.slug}`}
                  className={cn("flex items-center gap-3 group hover:text-primary transition-colors rounded", focusRing)}
                >
                  <PrevArrow className="w-5 h-5" aria-hidden="true" />
                  <div className="text-start">
                    <p className="text-xs text-muted-foreground">{t("details.prevPrompt")}</p>
                    <p className="text-sm font-semibold line-clamp-1">
                      {locale === "ar" ? prevPrompt.titleAr : prevPrompt.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPrompt ? (
                <Link
                  href={`/tutorials/prompts/${nextPrompt.slug}`}
                  className={cn(
                    "flex items-center gap-3 group hover:text-primary transition-colors text-end rounded",
                    focusRing
                  )}
                >
                  <div className="text-end">
                    <p className="text-xs text-muted-foreground">{t("details.nextPrompt")}</p>
                    <p className="text-sm font-semibold line-clamp-1">
                      {locale === "ar" ? nextPrompt.titleAr : nextPrompt.title}
                    </p>
                  </div>
                  <NextArrow className="w-5 h-5" aria-hidden="true" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </section>
        )}

        {/* Related Prompts */}
        {related.length > 0 && (
          <section className="pt-16">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              {t("details.related")}
            </h2>
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerChildren={0.08}
              whileInView={false}
            >
              {related.map((p) => (
                <PromptCard key={p.id} prompt={p} />
              ))}
            </StaggerContainer>
          </section>
        )}
      </div>
    </article>
  );
}
