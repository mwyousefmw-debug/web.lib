"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLocale } from "next-intl";
import type { Testimonial } from "@/types";
import { GlowCard } from "@/components/ui/GlowCard";
import { cn, getInitials } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const locale = useLocale();

  const name = locale === "ar" ? testimonial.nameAr : testimonial.name;
  const role = locale === "ar" ? testimonial.roleAr : testimonial.role;
  const company = locale === "ar" ? testimonial.companyAr : testimonial.company;
  const quote = locale === "ar" ? testimonial.quoteAr : testimonial.quote;

  return (
    <motion.div variants={fadeUp} className={cn("h-full", className)}>
      <GlowCard className="h-full flex flex-col p-6">
        {/* Quote icon */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Quote className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < testimonial.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-muted/40"
              )}
            />
          ))}
        </div>

        {/* Quote text */}
        <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          {testimonial.avatar ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <SafeImage
                src={testimonial.avatar}
                alt={name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-sm">
                {getInitials(name)}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role} — {company}
            </p>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
