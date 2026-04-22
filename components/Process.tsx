"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import AmbientBackdrop from "./AmbientBackdrop";
import SectionAccentLine from "./SectionAccentLine";

const researchBenchmarkingImages = [
  { src: "/projects/animal-instinct/benchmarking-animal-instinct.png", alt: "Benchmarking Animal Instinct" },
];

const brainstormingCarouselImages = [
  { src: "/projects/animal-instinct/logo-animal-instinct.png", alt: "Logo Animal Instinct" },
];

const digitisingCarouselImages = [
  { src: "/projects/animal-instinct/digital-animal-instinct.png", alt: "Digital Animal Instinct" },
];

const refineFinaliseCarouselImages = [
  { src: "/projects/animal-instinct/final-animal-instinct.png", alt: "Final Animal Instinct" },
];

const processSteps = [
  {
    title: "Research & Benchmarking",
    mainLine: "Understanding the brand, the audience, and the space it lives in.",
    supportingLine: "This is where strategy and creative direction are defined.",
    seeMoreImages: researchBenchmarkingImages,
  },
  {
    title: "Brainstorming & Sketching",
    mainLine: "Turning insights into ideas through exploration and experimentation.",
    supportingLine: "Loose sketches allow unexpected solutions to emerge.",
    seeMoreImages: brainstormingCarouselImages,
  },
  {
    title: "Digitising & Prototyping",
    mainLine: "Testing structure, hierarchy, and flow through digital mockups.",
    supportingLine: "Ideas are challenged and improved through iteration.",
    seeMoreImages: digitisingCarouselImages,
  },
  {
    title: "Refine & Finalise",
    mainLine: "Polishing the solution until it communicates clearly and confidently.",
    supportingLine: "The final outcome aligns intention, aesthetics, and impact.",
    seeMoreImages: refineFinaliseCarouselImages,
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselStepIndex, setCarouselStepIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const carouselImages = carouselStepIndex !== null && processSteps[carouselStepIndex].seeMoreImages
    ? processSteps[carouselStepIndex].seeMoreImages
    : [];

  const paginateCarousel = useCallback((nextDirection: 1 | -1) => {
    if (carouselImages.length <= 1) return;
    setCarouselDirection(nextDirection);
    setCarouselIndex((prev) => {
      if (nextDirection === -1) {
        return prev > 0 ? prev - 1 : carouselImages.length - 1;
      }
      return prev < carouselImages.length - 1 ? prev + 1 : 0;
    });
  }, [carouselImages.length]);

  useEffect(() => {
    if (carouselOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [carouselOpen]);

  useEffect(() => {
    if (!carouselOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCarouselOpen(false);
      if (e.key === "ArrowLeft") paginateCarousel(-1);
      if (e.key === "ArrowRight") paginateCarousel(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [carouselOpen, paginateCarousel]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-paper px-6 pt-16 pb-24">
        <AmbientBackdrop variant="paper" />
        <div
          id="process"
          ref={ref}
          className="container relative z-[1] mx-auto max-w-6xl py-12"
        >
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-16 max-w-2xl mx-auto text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
              Process
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl">
              How I work
            </h2>
            <SectionAccentLine centered />
            <p className="mt-5 text-lg leading-relaxed text-inkMuted md:text-xl">
              Every brand project follows a flexible, research-led process that brings together
              strategy, intuition, and exploration to create work that is both thoughtful and
              effective.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {processSteps.map((step, index) => (
              (() => {
                const hasCarousel =
                  !!step.seeMoreImages && step.seeMoreImages.length > 0;

                const openCarousel = () => {
                  if (!hasCarousel) return;
                  setCarouselStepIndex(index);
                  setCarouselIndex(0);
                  setCarouselDirection(1);
                  setCarouselOpen(true);
                };

                return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative min-h-[18rem] rounded-2xl border border-ink/12 bg-cream/70 py-8 px-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-terracotta/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:min-h-[19.5rem] ${hasCarousel ? "cursor-pointer" : "cursor-default"}`}
                role={hasCarousel ? "button" : undefined}
                tabIndex={hasCarousel ? 0 : undefined}
                onClick={hasCarousel ? openCarousel : undefined}
                onKeyDown={
                  hasCarousel
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openCarousel();
                        }
                      }
                    : undefined
                }
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.005 }}
              >
                {/* Big number in corner */}
                <div
                  className={`pointer-events-none absolute top-3 right-3 z-20 font-display text-6xl font-bold text-terracottaDeep opacity-30 transition-opacity duration-300 md:text-7xl ${
                    hasCarousel ? "group-hover:opacity-0 group-focus-visible:opacity-0" : ""
                  }`}
                >
                  {index + 1}
                </div>

                {/* Full-card hover image (only when there is a carousel) */}
                {hasCarousel && (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl bg-paper/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <img
                      src={step.seeMoreImages?.[0]?.src}
                      alt={step.seeMoreImages?.[0]?.alt ?? ""}
                      className="h-full w-full object-contain p-5"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className={`relative z-10 transition-opacity duration-300 ${hasCarousel ? "group-hover:opacity-0 group-focus-visible:opacity-0" : ""}`}>
                  {/* Title */}
                  <h3 className="mb-4 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>

                  {/* Main line - always visible */}
                  <p className="mb-2 text-lg leading-relaxed text-inkMuted">
                    {step.mainLine}
                  </p>

                  {/* Supporting line - always visible */}
                  <p className="text-base leading-relaxed text-inkFaint">
                    {step.supportingLine}
                  </p>
                </div>
              </motion.div>
                );
              })()
            ))}
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Carousel card modal (See more – Brainstorming & Sketching) */}
      <AnimatePresence>
        {carouselOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => { setCarouselOpen(false); setCarouselStepIndex(null); }}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-2xl border border-ink/12 bg-paper p-6 shadow-xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => { setCarouselOpen(false); setCarouselStepIndex(null); }}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-paper/90 hover:bg-creamDeep border border-ink/12 text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {carouselImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      paginateCarousel(-1);
                    }}
                    className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/12 bg-paper/90 text-ink transition-colors hover:bg-creamDeep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    aria-label="Previous image"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      paginateCarousel(1);
                    }}
                    className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/12 bg-paper/90 text-ink transition-colors hover:bg-creamDeep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    aria-label="Next image"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIndex}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: carouselDirection * 40, scale: 0.985 }
                    }
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, x: carouselDirection * -40, scale: 0.985 }
                    }
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center items-center w-full"
                  >
                    <img
                      src={carouselImages[carouselIndex]?.src}
                      alt={carouselImages[carouselIndex]?.alt ?? ""}
                      className="max-h-[60vh] w-auto object-contain rounded-lg"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Margin before Contact */}
      <div className="h-12" />
    </>
  );
}

