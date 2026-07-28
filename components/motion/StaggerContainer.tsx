"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
  /**
   * Set false to animate in as soon as the container mounts instead of
   * waiting for viewport intersection. Use for grids whose children run
   * their own hooks (e.g. localStorage-backed state) that can re-render
   * shortly after mount and disrupt a pending `whileInView` trigger.
   */
  whileInView?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.1,
  whileInView = true,
}: StaggerContainerProps) {
  const variants = staggerContainer(staggerChildren, delayChildren);

  if (!whileInView) {
    return (
      <motion.div variants={variants} initial="hidden" animate="visible" className={cn(className)}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
