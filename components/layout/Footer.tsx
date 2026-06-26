"use client";

import { SafeImage, LogoFallback } from "@/components/ui/SafeImage";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Twitter, Instagram, Youtube, Facebook,
  Mail, Phone, MapPin, ArrowUpRight, Heart
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.2 8.2 0 0 0 4.79 1.52V7.01a4.85 4.85 0 0 1-1.02-.32Z" />
    </svg>
  );
}

const footerLinks = {
  company: [
    { href: "/about", labelKey: "nav.about" },
    { href: "/services", labelKey: "nav.services" },
    { href: "/portfolio", labelKey: "nav.portfolio" },
    { href: "/testimonials", labelKey: "nav.testimonials" },
  ],
  resources: [
    { href: "/tutorials", labelKey: "nav.tutorials" },
    { href: "/downloads", labelKey: "nav.downloads" },
    { href: "/faq", labelKey: "nav.faq" },
    { href: "/contact", labelKey: "nav.contact" },
  ],
  legal: [
    { href: "/privacy-policy", labelKey: "footer.privacy" },
    { href: "/terms", labelKey: "footer.terms" },
  ],
};

const socialLinks = [
  { icon: Facebook,    href: siteConfig.social.facebook,  label: "Facebook"  },
  { icon: Instagram,   href: siteConfig.social.instagram, label: "Instagram" },
  { icon: TikTokIcon,  href: siteConfig.social.tiktok,    label: "TikTok"    },
  { icon: Linkedin,    href: siteConfig.social.linkedin,  label: "LinkedIn"  },
  { icon: Twitter,     href: siteConfig.social.twitter,   label: "Twitter/X" },
  { icon: Github,      href: siteConfig.social.github,    label: "GitHub"    },
  { icon: Youtube,     href: siteConfig.social.youtube,   label: "YouTube"   },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-hero-dark dark:block hidden pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10 pt-16 pb-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <SafeImage src="/images/projects/logo.jpg" alt="WebLib" fill sizes="40px" className="object-cover" fallback={<LogoFallback />} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Web<span className="text-primary">Lib</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              {locale === "ar" ? siteConfig.descriptionAr : siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  {siteConfig.email}
                </a>
              )}
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  {siteConfig.phone}
                </a>
              )}
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary/70" />
                {locale === "ar" ? siteConfig.locationAr : siteConfig.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks
                .filter((s) => s.href)
                .map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center",
                      "border border-border/50 bg-muted/30",
                      "text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5",
                      "transition-all duration-200"
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-widest">
              {t("footer.company")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {t(link.labelKey)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-widest">
              {t("footer.resources")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {t(link.labelKey)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-widest">
              {t("footer.getInTouch")}
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              {t("footer.ctaText")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary hover:text-black transition-all duration-200 group"
            >
              {t("footer.startProject")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              © {year} {siteConfig.name}. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
            <p className="flex items-center gap-1">
              {t("footer.madeWith")} <Heart className="w-3 h-3 text-primary fill-primary mx-0.5" /> {t("footer.inLibya")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
