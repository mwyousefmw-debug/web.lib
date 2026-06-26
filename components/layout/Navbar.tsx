"use client";

import { useState, useEffect, useRef } from "react";
import { SafeImage, LogoFallback } from "@/components/ui/SafeImage";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/portfolio", labelKey: "nav.portfolio" },
  { href: "/tutorials", labelKey: "nav.tutorials" },
  { href: "/testimonials", labelKey: "nav.testimonials" },
  { href: "/faq", labelKey: "nav.faq" },
  { href: "/contact", labelKey: "nav.contact" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
  }, [pathname]);

  // Close lang dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // usePathname from @/i18n/navigation already strips the locale prefix
  const switchLocale = (newLocale: string) => {
    router.push(pathname, { locale: newLocale as "en" | "ar" });
    setLangOpen(false);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_0_rgba(0,200,232,0.06)]"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 group-hover:shadow-glow-sm"
          >
            <SafeImage
              src="/images/projects/logo.jpg"
              alt="WebLib Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
              fallback={<LogoFallback />}
            />
          </motion.div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight hidden sm:block">
            Web<span className="text-primary">Lib</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                "hover:text-primary hover:bg-primary/5",
                isActive(link.href)
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground"
              )}
            >
              {t(link.labelKey)}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Switch language"
              aria-expanded={langOpen}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                "transition-all duration-200"
              )}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline uppercase tracking-wide text-xs">
                {locale}
              </span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  langOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-1.5 end-0 w-32 rounded-xl border border-border/50 bg-popover shadow-card-light dark:shadow-card-dark overflow-hidden"
                >
                  {[
                    { code: "en", label: "English" },
                    { code: "ar", label: "العربية" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={cn(
                        "w-full text-start px-4 py-2.5 text-sm transition-colors",
                        "hover:bg-muted/60 hover:text-primary",
                        locale === lang.code
                          ? "text-primary bg-primary/5 font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-black font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:shadow-glow-sm"
          >
            {t("nav.cta")}
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <nav className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive(link.href)
                        ? "text-primary bg-primary/8 border border-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/40"
                    )}
                  >
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 pt-3 border-t border-border/50">
                <Link
                  href="/contact"
                  className="flex items-center justify-center py-3 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary/90 transition-all"
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
