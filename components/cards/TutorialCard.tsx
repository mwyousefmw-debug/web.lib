"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import type { Tutorial } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { cn, getDifficultyColor, formatDate } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface TutorialCardProps {
  tutorial: Tutorial;
  className?: string;
}

export function TutorialCard({ tutorial, className }: TutorialCardProps) {
  const t = useTranslations();
  const locale = useLocale();

  const title = locale === "ar" ? tutorial.titleAr : tutorial.title;
  const description = locale === "ar" ? tutorial.descriptionAr : tutorial.description;

  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <GlowCard className="h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-muted">
          <SafeImage
            src={tutorial.thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 start-3">
            <Badge variant="primary" size="sm">
              {tutorial.category.replace("-", " ").toUpperCase()}
            </Badge>
          </div>
          {tutorial.featured && (
            <div className="absolute top-3 end-3">
              <Badge variant="success" size="sm">Featured</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Difficulty + Date */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                getDifficultyColor(tutorial.difficulty)
              )}
            >
              {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(tutorial.publishDate, locale)}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-base text-foreground leading-snug line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>

          {/* Tags */}
          {tutorial.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tutorial.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="default" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Download Button */}
          <a
            href={tutorial.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-auto flex items-center justify-center gap-2",
              "px-4 py-2.5 rounded-xl",
              "bg-primary/10 text-primary border border-primary/20",
              "hover:bg-primary hover:text-black",
              "font-medium text-sm transition-all duration-200",
              "group/btn"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
            {t("tutorials.download")}
          </a>
        </div>
      </GlowCard>
    </motion.div>
  );
}
