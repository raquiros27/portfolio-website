"use client";

import React from "react";
import { motion } from "framer-motion";
import type { CaseStudyProject } from "./types";

interface LushLayoutProps {
  project: CaseStudyProject;
}

function Figure({
  src,
  alt,
  caption,
  imgClassName,
  imgStyle,
}: {
  src: string;
  alt: string;
  caption: string;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="m-0"
    >
      <img
        src={src}
        alt={alt}
        className={imgClassName ?? "w-full h-auto block rounded-[22px] border border-white/20 shadow-lg"}
        style={imgStyle ?? { boxShadow: "0 10px 28px rgba(0,0,0,0.25)" }}
      />
      {caption ? (
        <figcaption className="text-sm text-white/70 mt-3 leading-relaxed">{caption}</figcaption>
      ) : null}
    </motion.figure>
  );
}

function VideoFigure({
  src,
  ariaLabel,
  caption,
  trimTopBottomPx,
}: {
  src: string;
  ariaLabel: string;
  caption: string;
  trimTopBottomPx?: number;
}) {
  const trim = trimTopBottomPx ?? 0;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="m-0"
    >
      <video
        src={src}
        aria-label={ariaLabel}
        className="w-full h-auto block rounded-[22px] border border-white/20 bg-black"
        style={{
          boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
          ...(trim > 0 && { clipPath: `inset(${trim}px 0 ${trim}px 0)` }),
        }}
        autoPlay
        loop
        muted
        playsInline
      />
      {caption ? (
        <figcaption className="text-sm text-white/70 mt-3 leading-relaxed">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}

export default function LushLayout({ project }: LushLayoutProps) {
  const base = "/projects/lush";

  return (
    <main className="relative w-full" style={{ backgroundColor: "transparent" }}>
      {/* HERO */}
      <section className="w-full mb-8 md:mb-12">
        <div className="relative w-full h-[38vh] md:h-[56vh] overflow-hidden">
          <img
            src={`${base}/lush-wrappingpaper-christmas-mockup.png`}
            alt="LUSH seasonal wrapping paper hero mockup"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none border-0"
            loading="eager"
          />
        </div>
      </section>

      {/* PROJECT TITLE & METADATA,  same as CP/HM */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {project.subtitle}
            </p>
          )}
          {project.projectType && (
            <div className="mb-8 flex justify-center">
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                {project.projectType}
              </span>
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {project.year && (
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                <strong>Year:</strong> {project.year}
              </span>
            )}
            {project.location && (
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                <strong>Location:</strong> {project.location}
              </span>
            )}
            {project.role && (
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                <strong>Role:</strong> {project.role}
              </span>
            )}
          </div>
        </motion.div>
      </section>

      {/* INTRO PARAGRAPH, same style as Caribbean Paradise */}
      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-base text-white/90 leading-relaxed"
        >
          <p>
            A collection of illustrated seasonal patterns for Lush, translating handcrafted
            sensibility into scalable systems designed to carry narrative, consistency, and impact
            across product and retail.
          </p>
        </motion.div>
      </section>

      {/* COSY WITCH APOTHECARY,  HALLOWEEN,  glassy card */}
      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Cosy Witch Apothecary, Halloween
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              A warm, intimate interpretation of Halloween inspired by apothecaries,
              rituals, and cosy witchcraft,  designed to feel handcrafted rather than spooky.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] items-start gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-0"
          >
            <img
              src={`${base}/lush-witchy-single-elements.png`}
              alt="LUSH Halloween illustrated element library"
              className="w-full h-auto block rounded-[22px] border border-white/20"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,0.25)" }}
            />
            <figcaption className="text-sm text-white/70 mt-3 leading-relaxed">
              Vector illustration system designed as modular elements for pattern construction.
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-0"
          >
            <div
              className="relative aspect-square overflow-hidden rounded-[22px] border border-white/20"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,0.25)" }}
            >
              <video
                src={`${base}/Halloween-comp.mp4`}
                aria-label="Animated composition of LUSH Halloween pattern elements"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: "cover" }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <figcaption className="text-sm text-white/70 mt-3 leading-relaxed">
              Animated composition showcasing rhythm and balance within the illustrated system.
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Figure
            src={`${base}/witchy-print-wrap.png`}
            alt="LUSH Halloween gift wrap pattern applied to a mockup"
            caption="Primary seamless pattern developed for official Halloween gift wrap."
          />
        </div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Figure
            src={`${base}/witchy-print-wrap-V2.png`}
            alt="LUSH Halloween gift wrap colour variation in alternative palette"
            caption="Colour variation,  alternative palette for seasonal versatility."
          />
          <Figure
            src={`${base}/witchy-print-wrap-V3.png`}
            alt="LUSH Halloween gift wrap secondary colour variation"
            caption="Colour variation,  secondary tone exploration for dynamic application."
          />
        </div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Figure
            src={`${base}/witchy-final-gift-box.png`}
            alt="LUSH Halloween illustrated pattern applied to seasonal gift packaging"
            caption="Final mockup demonstrating real-world application on seasonal gift packaging."
          />
        </div>
      </section>

      {/* WARM COMFY CHRISTMAS,  glassy card */}
      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Warm Comfy Christmas
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Individually hand-painted in gouache, then digitised into a cohesive pattern
              system, retaining the softness and imperfection of the medium while supporting
              consistent use across packaging.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] items-start gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-0"
          >
            <img
              src={`${base}/christmas-single-elements.png`}
              alt="LUSH Christmas illustrated element system derived from gouache artwork"
              className="w-full h-auto block rounded-[22px] border border-white/20"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,0.25)" }}
            />
            <figcaption className="text-sm text-white/70 mt-3 leading-relaxed">
              Digitised illustrated elements created from hand-painted gouache artwork.
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-0"
          >
            <div
              className="relative aspect-square overflow-hidden rounded-[22px] border border-white/20"
              style={{ boxShadow: "0 10px 28px rgba(0,0,0,0.25)" }}
            >
              <video
                src={`${base}/christmas-comp.mp4`}
                aria-label="Animated composition of LUSH Christmas pattern elements"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: "cover" }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.figure>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Figure
            src={`${base}/christmas-print-wrap.png`}
            alt="LUSH Christmas hand-painted wrap pattern showcased as final print"
            caption="Primary Christmas gift wrap pattern preserving hand-painted warmth at scale."
          />
        </div>
      </section>

      {/* Gouache process,  same-size pair */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-0"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[22px] border border-white/20 bg-black" style={{ boxShadow: '0 10px 28px rgba(0,0,0,0.25)' }}>
              <img
                src={`${base}/process-gouache1.JPG`}
                alt="Gouache painting process"
                className="w-full h-full object-cover block"
              />
            </div>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">Gouache painting process,  building texture and warmth by hand.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="m-0"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[22px] border border-white/20 bg-black" style={{ boxShadow: '0 10px 28px rgba(0,0,0,0.25)' }}>
              <img
                src={`${base}/process-gouach2.jpeg`}
                alt="Close-up of painted details"
                className="w-full h-full object-cover block"
              />
            </div>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">Close-up of painted details prior to digitalisation.</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Figure
            src={`${base}/christmas-final-gift-box.png`}
            alt="LUSH Christmas pattern applied to final gift packaging mockup"
            caption="Final gift mockup showing the Christmas wrap applied to seasonal packaging."
          />

          <p className="mt-12 text-lg md:text-xl font-light italic text-white/90 leading-relaxed">
            The result is a pattern system that feels intimate and human, yet structured
            enough to scale seamlessly across seasonal ranges.
          </p>
        </div>
      </section>
    </main>
  );
}
