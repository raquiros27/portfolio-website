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
      {/* HERO — full image visible, not trimmed */}
      <section className="relative -mx-4 -mt-4 w-full mb-12 md:mb-16 md:-mx-6 md:-mt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          <img
            src="/projects/aya/water-hero.png"
            alt="AyA Think of Others — water awareness campaign hero"
            className="w-full h-auto object-contain"
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
          className="max-w-[720px] mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-2 leading-tight">
            AyA &ldquo;Think of Others&rdquo;
          </h1>
          <p className="text-xl text-white/90 mb-4">COVID-19 Water Awareness Campaign</p>
          <p className="text-white/80 text-sm mb-2">
            Concept Marketing Campaign · Behavioural Change · Public Awareness · Water Company, Costa Rica · 2020
          </p>
          <p className="text-white/60 text-xs italic">Concept campaign developed for university.</p>
        </motion.div>
      </section>

      {/* 2) CAMPAIGN OBJECTIVE */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Campaign Objective">
          <p className="mb-4">
            To prevent an increase in water waste during the COVID-19 pandemic, when hygiene measures significantly raised daily consumption.
          </p>
          <p className="mb-4">
            The campaign focused on adults aged 25–30, encouraging responsible habits by making the consequences of water overuse visible and emotionally immediate.
          </p>
          <p>
            Rather than instructing people to simply &ldquo;save water,&rdquo; the objective was to foster empathy, reframing water waste as a shared human impact, where excess in one place directly affects someone else&apos;s access to basic needs.
          </p>
        </SectionHeading>
      </section>

      {/* 3) CAMPAIGN GOALS (BULLETS) */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Campaign Goals">
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>Be understood immediately by the general public</li>
            <li>Encourage behaviour change through empathy, not instruction</li>
            <li>Translate an invisible consequence into a visible reality</li>
            <li>Work consistently across multiple mass-reach formats</li>
            <li>Reach audiences through traditional public media placements</li>
          </ul>
        </SectionHeading>
      </section>

      {/* 4) CORE INSIGHT */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Core Insight">
          <p className="mb-4">
            People understand the idea of saving water, but they don&apos;t feel the consequence of waste.
          </p>
          <p className="mb-4">
            Because water loss happens invisibly and gradually, it disconnects action from impact.
          </p>
          <p className="mb-4">
            Water waste isn&apos;t just an environmental issue.
          </p>
          <p className="mb-4">
            It is a direct reduction of someone else&apos;s access to essential daily needs.
          </p>
          <p>
            The campaign&apos;s role was to make that relationship visible.
          </p>
        </SectionHeading>
      </section>

      {/* Key visuals image — before Key Visual Concept */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-key-visuals.png"
          alt="Key visual concept — split-scene composition"
          caption=""
        />
      </section>

      {/* 5) KEY VISUAL CONCEPT (TEXT + BULLETS) */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Key Visual Concept">
          <p className="mb-4">
            The visual system is built around a split-scene composition connected by a pipe.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>On one side, everyday domestic spaces where water is used excessively</li>
            <li>On the other, only minimal drops remain, representing essential access elsewhere</li>
            <li>The pipe acts as a narrative device: cause → effect, instantly readable</li>
          </ul>
        </SectionHeading>
      </section>

      {/* 6) IMAGE #1 — immediately after Key Visual Concept */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-spread.png"
          alt="Editorial magazine spread — water awareness campaign"
          caption="Editorial magazine spread — the core narrative format."
        />
      </section>

      {/* 7) DESIGN SYSTEM & VISUAL LANGUAGE */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Design System & Visual Language">
          <p className="mb-4">
            Colour contrast separates excess from scarcity.
          </p>
          <p className="mb-4">
            Warm, saturated tones represent abundance and casual overuse.
            Cooler, restrained tones represent limitation and essential need.
          </p>
          <p className="mb-4">
            Typography remains clean, direct, and highly legible, ensuring accessibility across a wide demographic.
          </p>
          <p>
            The composition guides the viewer&apos;s eye through the narrative, allowing the message to be understood without requiring explanation.
          </p>
        </SectionHeading>
      </section>

      {/* 8) IMAGE #2 — immediately after Design System */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-billboard.png"
          alt="Billboard — water awareness campaign"
          caption="Billboard adaptation — distilled for rapid comprehension at distance."
        />
      </section>

      {/* 9) CAMPAIGN APPLICATIONS */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Campaign Applications">
          <p className="mb-4">
            The campaign was developed as a flexible system adapted across multiple public touchpoints:
            Editorial magazine spread, billboard, and environmental roll-up banner.
          </p>
          <p>
            Each format preserves conceptual integrity while adapting to its context and viewing conditions.
          </p>
        </SectionHeading>
      </section>

      {/* 10) IMAGE #3 — immediately after Campaign Applications */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <Figure
          src="/projects/aya/water-roll-on.png"
          alt="Roll-up banner — water awareness campaign"
          caption="Roll-up banner — environmental placement for public and institutional spaces."
        />
      </section>
    </div>
  );
}
