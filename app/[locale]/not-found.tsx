"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero-dark pointer-events-none" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center gap-6 px-4 relative z-10"
      >
        {/* 404 */}
        <motion.div
          variants={fadeUp}
          className="font-display font-black leading-none text-gradient"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
        >
          404
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-2xl md:text-3xl text-foreground"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground max-w-sm"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary/90 transition-all hover:shadow-glow-md group"
          >
            <Home className="w-4 h-4" />
            {t("cta")}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
