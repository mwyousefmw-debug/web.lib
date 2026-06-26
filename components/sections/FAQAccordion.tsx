"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";
import type { FAQCategory } from "@/types";

const categoryKeys: { value: "all" | FAQCategory; labelKey: string }[] = [
  { value: "all", labelKey: "faq.categories.all" },
  { value: "general", labelKey: "faq.categories.general" },
  { value: "services", labelKey: "faq.categories.services" },
  { value: "timeline", labelKey: "faq.categories.timeline" },
  { value: "technical", labelKey: "faq.categories.technical" },
  { value: "support", labelKey: "faq.categories.support" },
];

export function FAQAccordion() {
  const locale = useLocale();
  const t = useTranslations();
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | FAQCategory>("all");

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  return (
    <section className="section-py-sm">
      <div className="container-tight">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categoryKeys.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat.value
                  ? "bg-primary text-black shadow-glow-sm"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/50"
              )}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            const question = locale === "ar" ? item.questionAr : item.question;
            const answer = locale === "ar" ? item.answerAr : item.answer;

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-primary/30 bg-primary/5 shadow-glow-sm"
                    : "border-border/50 bg-card hover:border-primary/20"
                )}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className={cn(
                    "font-display font-semibold text-sm md:text-base transition-colors",
                    isOpen ? "text-primary" : "text-foreground"
                  )}>
                    {question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 flex-shrink-0 transition-all duration-300",
                      isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-border/50 mb-4" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
