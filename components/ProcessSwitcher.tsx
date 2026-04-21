"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessImage {
  src: string;
  alt: string;
  caption: string;
}

interface ProcessSwitcherProps {
  images: ProcessImage[];
  labels: string[];
  defaultIndex?: number;
}

export default function ProcessSwitcher({ 
  images, 
  labels, 
  defaultIndex = 1 
}: ProcessSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 justify-center md:justify-start">
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeIndex === index
                ? "backdrop-blur-md bg-white/20 text-white border border-white/30"
                : "backdrop-blur-md bg-white/10 text-white/70 hover:text-white hover:bg-white/15 border border-white/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Display */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full flex justify-center"
          >
            <div className="w-full max-w-7xl">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="w-full h-auto"
                loading="lazy"
              />
              {images[activeIndex].caption && (
                <p className="text-white/70 text-sm mt-4 text-left">
                  {images[activeIndex].caption}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

