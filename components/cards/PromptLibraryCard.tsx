"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface PromptLibraryCardProps {
  className?: string;
}

export function PromptLibraryCard({ className }: PromptLibraryCardProps) {
  const t = useTranslations("tutorials.promptLibrary");

  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <Link href="/tutorials/prompts" className="block h-full group">
        <GlowCard className="h-full flex flex-col" hoverScale>
          {/* Visual */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-gradient-hero-dark flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary/70" />
            <div className="absolute bottom-3 start-3">
              <Badge variant="primary" size="sm">AI PROMPTS</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <h3 className="font-display font-bold text-base text-foreground leading-snug line-clamp-2">
              {t("title")}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
              {t("description")}
            </p>
            <span
              className={cn(
                "mt-auto flex items-center justify-center gap-2",
                "px-4 py-2.5 rounded-xl",
                "bg-primary/10 text-primary border border-primary/20",
                "group-hover:bg-primary group-hover:text-black",
                "font-medium text-sm transition-all duration-200"
              )}
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}
