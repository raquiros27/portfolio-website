"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CaseStudyImage } from "./CaseStudyLayout";

interface ImageLightboxProps {
  images: CaseStudyImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const paginate = useCallback((nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    setCurrentIndex((prev) => {
      if (nextDirection === -1) {
        return prev > 0 ? prev - 1 : images.length - 1;
      }
      return prev < images.length - 1 ? prev + 1 : 0;
    });
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, paginate]);

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4 md:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: direction * 44, scale: 0.985 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, x: direction * -44, scale: 0.985 }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            {(currentImage.caption || images.length > 1) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 rounded-b-lg">
                {currentImage.caption && (
                  <p className="text-white text-sm md:text-base mb-2">
                    {currentImage.caption}
                  </p>
                )}
                {images.length > 1 && (
                  <p className="text-white/60 text-xs md:text-sm">
                    {currentIndex + 1} / {images.length}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

