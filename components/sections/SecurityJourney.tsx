"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Server, FlaskConical, Shield, KeyRound, Ban, Info } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { fadeUp } from "@/lib/motion";
import { ciaTriad, responsiblePrinciples, securityStatus } from "@/data/security";
import type { SecurityIcon } from "@/types";

const icons: Record<SecurityIcon, typeof Lock> = {
  Lock,
  ShieldCheck,
  Server,
  FlaskConical,
  Shield,
  KeyRound,
  Ban,
};

export function SecurityJourney() {
  const t = useTranslations("security");
  const isAr = useLocale() === "ar";

  return (
    <>
      {/* CIA Triad — general concepts */}
      <section className="pb-16 md:pb-20">
        <div className="container-wide">
          <div className="mb-12 md:mb-14 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden="true" />
          <SectionHeader
            eyebrow={t("cia.eyebrow")}
            title={t("cia.title")}
            subtitle={t("cia.subtitle")}
            className="mb-8 md:mb-10"
          />
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerChildren={0.08}>
            {ciaTriad.map((concept) => {
              const Icon = icons[concept.icon];
              const examples = isAr ? concept.examplesAr : concept.examples;
              return (
                <motion.div key={concept.id} variants={fadeUp}>
                  <GlowCard className="p-6 h-full flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center" aria-hidden="true">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="primary">{t("cia.badge")}</Badge>
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {isAr ? concept.titleAr : concept.title}
                      {isAr && (
                        <span className="ms-2 text-sm font-medium text-muted-foreground" lang="en">
                          {concept.title}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isAr ? concept.definitionAr : concept.definition}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2.5">
                        {t("cia.examples")}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {examples.map((example) => (
                          <li key={example} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" aria-hidden="true" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Responsible approach */}
      <section className="py-16 md:py-20 bg-muted/10 border-y border-border/30">
        <div className="container-wide">
          <SectionHeader
            eyebrow={t("principles.eyebrow")}
            title={t("principles.title")}
            subtitle={t("principles.subtitle")}
            className="mb-8 md:mb-10"
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
            {responsiblePrinciples.map((principle) => {
              const Icon = icons[principle.icon];
              return (
                <motion.div key={principle.id} variants={fadeUp}>
                  <GlowCard className="p-6 h-full flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center" aria-hidden="true">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground">
                      {isAr ? principle.titleAr : principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isAr ? principle.descriptionAr : principle.description}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Honest status */}
      <section className="py-16 md:py-20">
        <div className="container-wide max-w-3xl">
          <SectionHeader
            eyebrow={t("status.eyebrow")}
            title={t("status.title")}
            subtitle={t("status.subtitle")}
            className="mb-8 md:mb-10"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-border/50 bg-card p-6 md:p-8"
          >
            <ul className="divide-y divide-border/50">
              {securityStatus.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display font-semibold text-base text-foreground">
                      {isAr ? item.titleAr : item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isAr ? item.statusAr : item.status}
                    </p>
                  </div>
                  <Badge variant="default" className="self-start sm:self-center flex-shrink-0">
                    {t("status.badge")}
                  </Badge>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
              {t("status.note")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
