"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const valueEmojis = ["🎯", "💡", "💬", "⏰"];
const valueTitleKeys = ["values.quality", "values.innovation", "values.communication", "values.delivery"];
const valueDescKeys = ["values.qualityDesc", "values.innovationDesc", "values.communicationDesc", "values.deliveryDesc"];

export function AboutValues() {
  const t = useTranslations("about");

  return (
    <section className="section-py">
      <div className="container-wide">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("values.title")}
          className="mb-12"
        />
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
          {valueTitleKeys.map((titleKey, i) => (
            <motion.div key={titleKey} variants={fadeUp}>
              <GlowCard className="p-6 h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl" aria-hidden="true">
                  {valueEmojis[i]}
                </div>
                <h3 className="font-display font-bold text-base text-foreground">
                  {t(titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(valueDescKeys[i])}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
