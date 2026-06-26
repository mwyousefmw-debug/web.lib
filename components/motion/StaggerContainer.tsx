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
}

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
