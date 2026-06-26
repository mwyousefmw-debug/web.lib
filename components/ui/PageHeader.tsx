"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ eyebrow, title, subtitle, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero-dark dark:bg-gradient-hero-dark pointer-events-none" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-primary/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-4"
        >
          {eyebrow && (
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <div className="w-8 h-px bg-primary/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>
              <div className="w-8 h-px bg-primary/50" />
            </motion.div>
          )}
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-display-md md:text-display-lg text-foreground tracking-tight text-balance"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
