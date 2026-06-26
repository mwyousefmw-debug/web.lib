"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Inner component — only mounted after the client hydrates, so useScroll/useSpring
 * never run on the server and can never produce a style mismatch.
 */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/60 origin-left z-[60] shadow-[0_0_8px_rgba(0,200,232,0.6)]"
    />
  );
}

/**
 * Shell — renders null on the server and on the first client render so both match,
 * then swaps in ProgressBar after mount (no hydration mismatch possible).
 */
export function ScrollProgress() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ProgressBar />;
}
