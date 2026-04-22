"use client";

import { motion } from "framer-motion";
import type { CaseStudyProject } from "./types";

interface AyaLayoutProps {
  project: CaseStudyProject;
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[1200px] mx-auto"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto rounded-lg"
        style={{ objectFit: "contain" }}
      />
      <p className="text-sm text-white/70 mt-3 leading-relaxed">{caption}</p>
    </motion.div>
  );
}

function TextBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-[720px] mx-auto text-base text-white/90 leading-relaxed ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <TextBlock>
      <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
          {title}
        </h2>
        {children}
      </div>
    </TextBlock>
  );
}

export default function AyaLayout(_props: AyaLayoutProps) {
  return (
    <div className="relative" style={{ backgroundColor: "transparent" }}>
      {/* HERO */}
      <section className="relative w-full mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[38vh] md:h-[56vh] overflow-hidden"
        >
          <img
            src="/projects/aya/water-hero.png"
            alt="AyA Think of Others , water awareness campaign hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* 1) TITLE BLOCK */}
      <section className="container mx-auto px-6 mb-12 md:mb-16 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-4 leading-tight">
            AyA &ldquo;Think of Others&rdquo;
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">COVID-19 Water Awareness Campaign</p>
          <div className="mb-8 flex justify-center">
            <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
              Concept Marketing Campaign · Behavioural Change · Public Awareness
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
              <strong>Year:</strong> 2020
            </span>
            <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
              <strong>Location:</strong> Costa Rica
            </span>
            <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
              <strong>Role:</strong> Concept &amp; Visual Design
            </span>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-base text-white/90 leading-relaxed text-center"
        >
          <p>
            A public awareness campaign developed during COVID-19 to address the rise in domestic
            water consumption.
          </p>
          <p className="mt-4">
            The project reframes water waste as a shared human impact, making an invisible issue
            immediate and emotionally tangible.
          </p>
        </motion.div>
      </section>

      {/* 2) CAMPAIGN OBJECTIVE */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Campaign Objective">
          <p className="mb-4">
            To reduce water waste during COVID-19 by making its consequences visible and emotionally immediate.
          </p>
          <p>
            The campaign reframes water use as a shared system, where excess in one place directly limits access elsewhere.
          </p>
        </SectionHeading>
      </section>

      {/* Key visuals image , after Campaign Objective */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-key-visuals.png"
          alt="Key visual concept , split-scene composition"
          caption=""
        />
      </section>

      {/* 5) CONCEPT (TEXT + BULLETS) */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Concept">
          <p className="mb-4">
            The campaign is built around a split-scene composition connected by a continuous pipe,
            transforming an invisible issue into a clear visual narrative.
          </p>
          <p className="mb-4">
            One side represents everyday overuse in familiar domestic environments, while the other
            shows reduced access elsewhere.
          </p>
          <p>
            The pipe acts as a visual connector, establishing a direct and immediate cause-effect
            relationship.
          </p>
        </SectionHeading>
      </section>

      {/* 6) IMAGE #1 , immediately after Key Visual Concept */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-spread.png"
          alt="Editorial magazine spread , water awareness campaign"
          caption="Editorial magazine spread , the core narrative format."
        />
      </section>

      {/* 7) DESIGN SYSTEM & VISUAL LANGUAGE */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Design System & Visual Language">
          <p className="mb-4">
            The visual system uses colour contrast to distinguish excess from scarcity.
          </p>
          <p className="mb-4">
            Warm, saturated tones represent abundance and casual overuse, while cooler, restrained
            tones signal limitation and essential need.
          </p>
          <p className="mb-4">
            Typography is clean and highly legible, ensuring accessibility across a broad audience.
          </p>
          <p>
            Compositions are designed for instant readability, allowing the message to be
            understood at a glance.
          </p>
        </SectionHeading>
      </section>

      {/* 8) IMAGE #2 , immediately after Design System */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-billboard.png"
          alt="Billboard , water awareness campaign"
          caption="Billboard adaptation , distilled for rapid comprehension at distance."
        />
      </section>

      {/* 9) CAMPAIGN APPLICATIONS */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Applications">
          <p className="mb-4">
            The campaign was designed as a flexible visual system adaptable across multiple public
            formats, including editorial spreads, billboards, and environmental placements.
          </p>
          <p>
            Each application preserves conceptual clarity while responding to its context, ensuring
            the message remains immediate and consistent.
          </p>
        </SectionHeading>
      </section>

      {/* 10) IMAGE #3 , immediately after Campaign Applications */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-roll-on.png"
          alt="Roll-up banner , water awareness campaign"
          caption="Roll-up banner , environmental placement for public and institutional spaces."
        />
      </section>

      {/* Closing editorial note */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto"
        >
          <p className="text-lg md:text-xl font-light italic text-white/90 leading-relaxed">
            This project reflects how graphic design can be a powerful tool to translate complex
            social issues into visible, relatable campaigns. It effectively bridges distance
            between people, making shared impact impossible to ignore.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
