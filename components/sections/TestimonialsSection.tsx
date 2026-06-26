"use client";

import { useTranslations } from "next-intl";
import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { testimonials } from "@/data/testimonials";
import { fadeUp } from "@/lib/motion";

export function TestimonialsSection() {
  const t = useTranslations();
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="section-py relative overflow-hidden bg-muted/10">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
          className="mb-14"
        />

        {hasTestimonials ? (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerChildren={0.1}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </StaggerContainer>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-24 gap-5 rounded-2xl border border-dashed border-border/50 bg-muted/10"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <MessageSquareQuote className="w-8 h-8 text-primary/60" />
            </div>
            <p className="text-sm text-muted-foreground">
              {t("testimonials.empty")}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
