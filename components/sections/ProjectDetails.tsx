"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn, formatDate, getCategoryColor } from "@/lib/utils";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const locale = useLocale();
  const t = useTranslations("portfolio");
  const isRTL = locale === "ar";

  const name = locale === "ar" ? project.nameAr : project.name;
  const client = locale === "ar" ? project.clientAr : project.client;
  const description = locale === "ar" ? project.descriptionAr : project.description;
  const longDescription = locale === "ar" ? project.longDescriptionAr : project.longDescription;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const PrevArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <article>
      {/* Hero Cover */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-muted">
        <SafeImage
          src={project.coverImage}
          alt={name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        {/* Back button */}
        <div className="absolute top-28 start-0 end-0 container-wide">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/60 backdrop-blur-md border border-border/50 text-sm font-medium text-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            <BackArrow className="w-4 h-4" />
            {t("backToPortfolio")}
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <section className="container-wide -mt-16 relative z-10 pb-12">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-card-dark"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex flex-col gap-3">
              {/* Category */}
              <span
                className={cn(
                  "inline-flex w-fit items-center rounded-full border px-3 py-1 text-sm font-medium",
                  getCategoryColor(project.category)
                )}
              >
                {project.category.replace(/-/g, " ")}
              </span>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="font-display font-black text-display-sm md:text-display-md text-foreground tracking-tight"
              >
                {name}
              </motion.h1>

              {/* Meta */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-primary" />
                  {client}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {formatDate(project.completedAt, locale)}
                </span>
              </motion.div>
            </div>

            {/* Live URL */}
            {project.liveUrl && (
              <motion.a
                variants={fadeUp}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary/90 transition-all hover:shadow-glow-sm flex-shrink-0 group"
              >
                {t("viewLiveSite")}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            )}
          </div>

          {/* Description + Technologies */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">
                {t("overview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {longDescription || description}
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground mb-3">
                {t("technologies")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Desktop Screenshots */}
      {project.desktopScreenshots.length > 0 && (
        <section className="container-wide pb-12">
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            {t("desktopScreenshots")}
          </h2>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            staggerChildren={0.1}
          >
            {project.desktopScreenshots.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted hover:border-primary/30 transition-all hover:shadow-glow-sm group"
              >
                <SafeImage
                  src={img}
                  alt={`${name} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* Mobile Screenshots */}
      {project.mobileScreenshots.length > 0 && (
        <section className="container-wide pb-16">
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            {t("mobileScreenshots")}
          </h2>
          <StaggerContainer
            className="flex flex-wrap gap-5 justify-center"
            staggerChildren={0.08}
          >
            {project.mobileScreenshots.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative w-44 aspect-[9/16] rounded-2xl overflow-hidden border border-border/50 bg-muted hover:border-primary/30 transition-all hover:shadow-glow-sm group flex-shrink-0"
              >
                <SafeImage
                  src={img}
                  alt={`${name} mobile screenshot ${i + 1}`}
                  fill
                  sizes="176px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* Prev / Next Navigation — hidden when only one project exists */}
      {(prevProject || nextProject) && (
        <section className="container-wide pb-16 border-t border-border/40 pt-10">
          <div className="flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="flex items-center gap-3 group hover:text-primary transition-colors"
              >
                <PrevArrow className="w-5 h-5" />
                <div className="text-start">
                  <p className="text-xs text-muted-foreground">{t("prevProject")}</p>
                  <p className="text-sm font-semibold">
                    {locale === "ar" ? prevProject.nameAr : prevProject.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="flex items-center gap-3 group hover:text-primary transition-colors text-end"
              >
                <div className="text-end">
                  <p className="text-xs text-muted-foreground">{t("nextProject")}</p>
                  <p className="text-sm font-semibold">
                    {locale === "ar" ? nextProject.nameAr : nextProject.name}
                  </p>
                </div>
                <NextArrow className="w-5 h-5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}
    </article>
  );
}
