"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { services } from "@/data/services";

interface ServicesSectionProps {
  preview?: boolean;
}

export function ServicesSection({ preview = false }: ServicesSectionProps) {
  const t = useTranslations();
  const displayedServices = preview ? services.slice(0, 6) : services;

  return (
    <section className="section-py relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          className="mb-14"
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerChildren={0.08}
        >
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerContainer>

        {preview && (
          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 bg-muted/20 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
            >
              {t("services.viewAll")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
