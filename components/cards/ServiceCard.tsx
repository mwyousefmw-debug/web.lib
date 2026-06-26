"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useLocale } from "next-intl";
import * as LucideIcons from "lucide-react";
import type { Service } from "@/types";
import { GlowCard } from "@/components/ui/GlowCard";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface ServiceCardProps {
  service: Service;
  className?: string;
  showFeatures?: boolean;
}

export function ServiceCard({ service, className, showFeatures = false }: ServiceCardProps) {
  const locale = useLocale();

  const title = locale === "ar" ? service.titleAr : service.title;
  const description = locale === "ar" ? service.descriptionAr : service.description;
  const features = locale === "ar" ? service.featuresAr : service.features;

  // Dynamically get Lucide icon
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon];

  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <GlowCard className="h-full flex flex-col p-6 group">
        {/* Icon */}
        <div className="mb-5">
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center",
              "bg-primary/10 border border-primary/20",
              "group-hover:bg-primary/20 group-hover:border-primary/40",
              "transition-all duration-300"
            )}
          >
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-primary" />
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Features (optional) */}
        {showFeatures && features.length > 0 && (
          <ul className="flex flex-col gap-2 mb-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Arrow indicator */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground/50 group-hover:text-primary transition-colors mt-auto">
          <span className="text-xs">Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </GlowCard>
    </motion.div>
  );
}
