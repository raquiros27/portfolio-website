"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  centered?: boolean;
};

/** In-view accent reveal for a more premium section transition. */
export default function SectionAccentLine({
  className = "",
  centered = false,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`mt-6 h-px w-full max-w-xs origin-left bg-gradient-to-r from-terracotta/70 via-terracotta/40 to-transparent ${centered ? "mx-auto" : ""} ${className}`}
      initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0.65 }}
      whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  );
}
