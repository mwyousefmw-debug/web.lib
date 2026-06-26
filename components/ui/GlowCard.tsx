"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: boolean;
  onClick?: () => void;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(0,200,232,0.15)",
  hoverScale = false,
  onClick,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  }

  function handleMouseLeave() {
    setGlowPos((p) => ({ ...p, opacity: 0 }));
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={hoverScale ? { scale: 1.02, y: -4 } : {}}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-border/50 hover:border-primary/30",
        "bg-card transition-all duration-300",
        "hover:shadow-glow-sm",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(350px circle at ${glowPos.x}px ${glowPos.y}px, ${glowColor}, transparent 70%)`,
          opacity: glowPos.opacity,
        }}
      />
      {children}
    </motion.div>
  );
}
