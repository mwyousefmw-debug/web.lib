"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-start",
        align === "right" && "items-end text-end",
        className
      )}
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
      <motion.h2
        variants={fadeUp}
        className={cn(
          "font-display font-bold text-display-sm md:text-display-md text-foreground tracking-tight",
          "text-balance",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-muted-foreground text-base md:text-lg leading-relaxed",
            align === "center" && "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
