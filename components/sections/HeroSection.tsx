"use client";

import { SafeImage, LogoFallback } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/motion";

// Static values to avoid server/client hydration mismatch (no Math.random())
const techBadges: { label: string; pos: string; yOffset: number[]; duration: number; delay: number }[] = [
  { label: "Next.js",    pos: "top-4 end-0",      yOffset: [0, -8, 0], duration: 4,   delay: 0   },
  { label: "React",      pos: "bottom-4 start-0",  yOffset: [0, -6, 0], duration: 3.5, delay: 0.5 },
  { label: "TypeScript", pos: "top-1/2 -start-8",  yOffset: [0, -9, 0], duration: 5,   delay: 1   },
  { label: "Tailwind",   pos: "top-1/2 -end-6",    yOffset: [0, -7, 0], duration: 4.5, delay: 1.5 },
];

export function HeroSection() {
  const t = useTranslations("hero");
  const roles = t.raw("roles") as string[];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero-dark pointer-events-none" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/5 blur-[80px] rounded-full" />
      </div>

      {/* ── Floating Orbs ── */}
      <FloatingElement
        className="absolute top-32 start-[8%] w-64 h-64 rounded-full bg-primary/5 border border-primary/10 blur-[2px]"
        duration={8}
        amplitude={15}
      />
      <FloatingElement
        className="absolute bottom-32 end-[6%] w-48 h-48 rounded-full bg-primary/5 border border-primary/10 blur-[2px]"
        duration={7}
        delay={1}
        amplitude={12}
      />
      <FloatingElement
        className="absolute top-1/2 start-[3%] w-20 h-20 rounded-full bg-primary/10 border border-primary/20"
        duration={5}
        delay={2}
        amplitude={10}
      />

      {/* ── Content ── */}
      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 w-fit">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                {t("eyebrow")}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <h1 className="font-display font-extrabold text-display-lg md:text-display-xl text-foreground leading-[1.1]">
                {t("headline1")}{" "}
                <span className="text-gradient">{t("headline2")}</span>
              </h1>
              <h1 className="font-display font-extrabold text-display-lg md:text-display-xl text-foreground leading-[1.1]">
                {t("headline3")}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed max-w-lg"
            >
              {t("subtitle")}
            </motion.p>

            {/* Role chips — translated */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="px-3 py-1 rounded-full bg-muted/60 border border-border/50 text-sm text-muted-foreground"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-glow-md group"
              >
                {t("ctaPrimary")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border/50 bg-muted/20 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                {t("ctaSecondary")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-primary/15"
              />

              {/* Center logo */}
              <FloatingElement
                className="absolute inset-0 flex items-center justify-center"
                duration={4}
                amplitude={12}
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-glow-lg">
                  <SafeImage
                    src="/images/projects/logo.jpg"
                    alt="WebLib Logo"
                    fill
                    sizes="192px"
                    className="object-cover"
                    priority
                    fallback={<LogoFallback size="lg" />}
                  />
                </div>
              </FloatingElement>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-2.5 h-2.5 rounded-full bg-primary/60"
                  style={{
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 160}px - 5px)`,
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 160}px - 5px)`,
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
              ))}

              {/* Tech badges — static delays to prevent hydration mismatch */}
              {techBadges.map(({ label, pos, yOffset, duration, delay }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos}`}
                  animate={{ y: yOffset }}
                  transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
                >
                  <div className="px-3 py-1.5 rounded-lg bg-card border border-border/50 shadow-card-dark text-xs font-semibold text-foreground whitespace-nowrap">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — translated */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">
          {t("scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
