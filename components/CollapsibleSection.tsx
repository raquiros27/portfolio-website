"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleSectionProps {
  title: string;
  introLine?: string;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  defaultCollapsed?: boolean;
}

export default function CollapsibleSection({
  title,
  introLine,
  image,
  defaultCollapsed = true,
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(!defaultCollapsed);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-4 p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 hover:border-white/30 transition-all"
      >
        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
            {title}
          </h3>
          {introLine && !isExpanded && (
            <p className="text-white/70 text-sm md:text-base">{introLine}</p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white text-xl ml-4"
        >
          ▼
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="relative w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              {image.caption && (
                <p className="text-sm text-white/70 mt-3 leading-relaxed">{image.caption}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


