"use client";

import { motion } from "framer-motion";
import { LockKeyhole, ShieldCheck, Server, ScanLine } from "lucide-react";
import { useTranslations } from "next-intl";
import { fadeUp, staggerContainer } from "@/lib/motion";

const pillars = [
  { key: "confidentiality", icon: LockKeyhole },
  { key: "integrity", icon: ShieldCheck },
  { key: "availability", icon: Server },
] as const;

export function SecurityHero() {
  const t = useTranslations("security");
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="absolute inset-0 -z-20 bg-gradient-hero-dark dark:bg-gradient-hero-dark" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,232,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-32 left-1/2 -z-10 h-80 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" aria-hidden="true" />

      <div className="container-wide">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-5 text-start"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3.5 py-2 text-xs font-semibold tracking-wide text-primary">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t("eyebrow")}
            </motion.div>

            <div className="flex flex-col gap-3">
              <motion.h1 variants={fadeUp} className="font-display text-display-md font-extrabold tracking-tight text-foreground md:text-display-xl text-balance">
                {t("title")}
              </motion.h1>
              <motion.p variants={fadeUp} className="font-display text-xl font-semibold leading-snug text-primary md:text-2xl">
                {t("hero.line")}
              </motion.p>
            </div>

            <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              {t("subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary" aria-hidden="true">
                <ScanLine className="h-4 w-4" />
              </span>
              <span>{t("hero.caption")}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[360px] lg:max-w-[420px]"
            aria-label={t("hero.diagramLabel")}
            role="img"
          >
            <div className="absolute inset-[8%] rounded-full border border-primary/10" />
            <div className="absolute inset-[18%] rounded-full border border-dashed border-primary/20" />
            <div className="absolute inset-[29%] rounded-full bg-primary/[0.06] blur-2xl" />
            <div className="relative flex h-[34%] w-[34%] items-center justify-center rounded-[2rem] border border-primary/30 bg-card/80 shadow-[0_0_70px_rgba(0,200,232,0.18)] backdrop-blur-xl">
              <div className="absolute inset-2 rounded-[1.5rem] border border-primary/10" />
              <ShieldCheck className="h-10 w-10 text-primary sm:h-14 sm:w-14 md:h-16 md:w-16" strokeWidth={1.35} />
            </div>

            {pillars.map(({ key, icon: Icon }, index) => {
              const positions = [
                "top-[7%] left-1/2 -translate-x-1/2",
                "bottom-[11%] start-[5%]",
                "bottom-[11%] end-[5%]",
              ];
              return (
                // Position on a static wrapper: framer-motion's transform would override translate utilities
                <div key={key} className={`absolute ${positions[index]}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.12, duration: 0.4 }}
                    className="flex min-w-24 flex-col items-center gap-1.5 rounded-2xl border border-border/70 bg-card/80 px-3 py-2.5 shadow-card-dark backdrop-blur-xl sm:min-w-28 sm:gap-2 sm:px-4 sm:py-3"
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold text-foreground">
                      {t(`hero.pillars.${key}`)}
                    </span>
                  </motion.div>
                </div>
              );
            })}

            <span className="absolute end-[12%] top-[28%] h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,200,232,0.8)]" aria-hidden="true" />
            <span className="absolute bottom-[30%] start-[12%] h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
