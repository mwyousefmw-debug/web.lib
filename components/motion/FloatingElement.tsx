"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  amplitude?: number;
}

export function FloatingElement({
  children,
  className,
  duration = 6,
  delay = 0,
  amplitude = 20,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
