"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageLightbox from "./ImageLightbox";
import { CaseStudyImage } from "./CaseStudyLayout";

interface CaseStudyGalleryProps {
  images: CaseStudyImage[];
}

export default function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Responsive Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="mb-4 md:mb-6 break-inside-avoid cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300">
              <div className="relative w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              {image.caption && (
                <div className="p-3 md:p-4">
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <ImageLightbox
            images={images}
            initialIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

