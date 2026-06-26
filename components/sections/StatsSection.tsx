"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import * as LucideIcons from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { stats } from "@/data/site";
import { cn } from "@/lib/utils";

export function StatsSection() {
  const t = useTranslations();

  return (
    <section className="relative py-12 md:py-16 border-y border-border/40 bg-muted/20 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-primary/2 pointer-events-none" />

      <div className="container-wide">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, index) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[stat.icon];

            return (
              <motion.div
                key={stat.labelKey}
                variants={fadeUp}
                className={cn(
                  "flex flex-col items-center text-center gap-3 py-4",
                  index < stats.length - 1 &&
                    "md:border-e md:border-border/40"
                )}
              >
                {IconComponent && (
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div>
                  <div className="font-display font-black text-4xl md:text-5xl text-gradient tabular-nums">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(stat.labelKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
