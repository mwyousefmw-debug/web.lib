"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="section-py relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-hero-dark pointer-events-none" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Big center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/12 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/8 text-primary text-xs font-semibold tracking-wide mb-4">
              <Zap className="w-3.5 h-3.5" />
              {t("eyebrow")}
            </div>
            <h2 className="font-display font-black text-display-md md:text-display-lg text-foreground tracking-tight text-balance">
              {t("title1")}{" "}
              <span className="text-gradient">{t("title2")}</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-black font-bold text-base hover:bg-primary/90 transition-all duration-200 hover:shadow-glow-md group"
            >
              {t("ctaPrimary")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-border/50 bg-muted/20 text-foreground font-semibold text-base hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200"
            >
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
