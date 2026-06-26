import type { Variants, Transition } from "framer-motion";

/* ─── Easing Curves ────────────────────────────────────────────────────────── */
export const ease = {
  out: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  gentleSpring: { type: "spring" as const, stiffness: 200, damping: 25 },
  bouncySpring: { type: "spring" as const, stiffness: 400, damping: 20 },
};

/* ─── Transitions ──────────────────────────────────────────────────────────── */
export const transition = {
  fast: { duration: 0.2, ease: ease.out },
  normal: { duration: 0.4, ease: ease.expo },
  slow: { duration: 0.6, ease: ease.expo },
  verySlow: { duration: 0.8, ease: ease.expo },
  spring: ease.spring,
  gentleSpring: ease.gentleSpring,
} satisfies Record<string, Transition>;

/* ─── Page Transition ──────────────────────────────────────────────────────── */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: ease.expo,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(2px)",
    transition: {
      duration: 0.25,
      ease: ease.inOut,
    },
  },
};

/* ─── Fade Variants ────────────────────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.expo },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.expo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.expo },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.expo },
  },
};

/* ─── Scale Variants ───────────────────────────────────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.expo },
  },
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ease.spring,
  },
};

/* ─── Stagger Container ────────────────────────────────────────────────────── */
export function staggerContainer(
  staggerChildren = 0.1,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

/* ─── Card Hover ───────────────────────────────────────────────────────────── */
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: ease.out },
  },
};

/* ─── Button Tap ───────────────────────────────────────────────────────────── */
export const buttonTap = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02 },
  transition: ease.spring,
};

/* ─── Float Animation ──────────────────────────────────────────────────────── */
export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ─── Reveal on Scroll ─────────────────────────────────────────────────────── */
export const revealInView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
};
