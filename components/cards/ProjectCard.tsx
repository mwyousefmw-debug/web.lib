"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn, getCategoryColor } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  /** "sm" = standard grid card · "lg" = full-width hero card for single project */
  size?: "sm" | "lg";
  className?: string;
}

export function ProjectCard({ project, size = "sm", className }: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations("portfolio");

  const name = locale === "ar" ? project.nameAr : project.name;
  const client = locale === "ar" ? project.clientAr : project.client;
  const description = locale === "ar" ? project.descriptionAr : project.description;

  // ── Hero card (single project / featured showcase) ──────────────────────────
  if (size === "lg") {
    return (
      <motion.div variants={fadeUp} className={cn("group", className)}>
        <Link href={`/portfolio/${project.slug}`} className="block">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border/50 bg-card",
              "hover:border-primary/30 hover:shadow-glow-lg transition-all duration-500"
            )}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image — 58% width on desktop, full-width on mobile */}
              <div className="relative lg:w-[58%] flex-shrink-0 overflow-hidden bg-muted aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
                <SafeImage
                  src={project.coverImage}
                  alt={name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Gradient: fades into card on desktop, fades down on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/70" />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-bold text-sm shadow-glow-sm">
                    {t("viewProject")} <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-5 start-5">
                    <Badge variant="primary">{t("featured")}</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14 lg:flex-1">
                {/* Category */}
                <span
                  className={cn(
                    "inline-flex w-fit items-center rounded-full border px-3 py-1 text-sm font-medium mb-6",
                    getCategoryColor(project.category)
                  )}
                >
                  {project.category.replace(/-/g, " ")}
                </span>

                {/* Title */}
                <h3 className="font-display font-extrabold text-3xl lg:text-[2.6rem] lg:leading-[1.1] text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {name}
                </h3>

                {/* Client */}
                <p className="text-sm text-muted-foreground/70 mb-6 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {client}
                </p>

                {/* Description — full, no truncation */}
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {description}
                </p>

                {/* Tech stack — all badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default">{tech}</Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-black font-bold text-sm w-fit group-hover:bg-primary/90 transition-all duration-200 hover:shadow-glow-sm">
                  {t("viewProject")}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // ── Standard grid card ───────────────────────────────────────────────────────
  return (
    <motion.div variants={fadeUp} className={cn("group relative", className)}>
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border/50 bg-card",
            "hover:border-primary/30 hover:shadow-glow-sm transition-all duration-500"
          )}
        >
          {/* Cover Image */}
          <div className="relative overflow-hidden bg-muted aspect-[4/3]">
            <SafeImage
              src={project.coverImage}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-base/90 via-dark-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-black font-semibold text-sm">
                {t("viewProject")} <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            {/* Badges */}
            {project.featured && (
              <div className="absolute top-3 start-3">
                <Badge variant="primary" size="sm">{t("featured")}</Badge>
              </div>
            )}
            <div className="absolute top-3 end-3">
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-2 py-0.5 text-2xs font-medium backdrop-blur-sm",
                  getCategoryColor(project.category)
                )}
              >
                {project.category.replace("-", " ")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-display font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                {name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
            </div>
            <p className="text-xs text-muted-foreground/70 mb-3">{client}</p>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="default" size="sm">{tech}</Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" size="sm">+{project.technologies.length - 4}</Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
