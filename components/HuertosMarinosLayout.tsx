"use client";

import { motion } from "framer-motion";
import type { CaseStudyProject } from "./types";

interface HuertosMarinosLayoutProps {
  project: CaseStudyProject;
}

function Figure({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  imgClassName,
  imgStyle,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      <div className="max-w-[1200px] mx-auto text-[0px]">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={imgClassName ?? "w-full h-auto rounded-lg"}
          style={imgStyle ?? { objectFit: "contain" }}
        />
        {caption && (
          <p className="text-sm text-inkMuted mt-3 leading-relaxed">{caption}</p>
        )}
      </div>
    </motion.div>
  );
}

function TextBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-[1200px] mx-auto text-base text-white/90 leading-relaxed ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
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

export default function HuertosMarinosLayout({ project }: HuertosMarinosLayoutProps) {
  return (
    <div className="relative" style={{ backgroundColor: "transparent" }}>
      <section className="w-full mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[38vh] md:h-[56vh] overflow-hidden"
        >
          <img
            src="/projects/huertos-marinos/hm-logo-primary-hero.png"
            alt="Huertos Marinos primary logo lockup"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none border-0"
            loading="eager"
          />
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8">{project.subtitle}</p>
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

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-base text-white/90 leading-relaxed mb-12"
        >
          <p>
            Huertos Marinos is a Costa Rica–based aquaculture project dedicated to cultivating
            high-quality oysters through sustainable, small-scale practices.
          </p>
          <p className="mt-4">
            The challenge was to create a brand that felt both grounded in its origin and elevated
            enough to resonate within a more refined market, aligning its natural roots with a
            sense of care, craftsmanship, and strategic positioning.
          </p>
        </motion.div>

        <SectionHeading title="Exploration">
          <p className="mb-8">
            Logo exploration starts with free-hand sketches with the client. Broad ideation
            refined into a symbol that represents ocean + the oyster craft, careful to avoid
            &quot;seafood&quot; aesthetics.
          </p>
        </SectionHeading>

        <Figure
          className="mt-8"
          src="/projects/huertos-marinos/hm-logo-exploration-board.png"
          alt="Huertos Marinos logo exploration board"
        />
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Brand System">
          <p className="mb-8">
            A complete visual system was built, which has ensured consistency across print,
            digital and commercial touchpoints, creating an impactful recognisability across
            platforms.
          </p>
        </SectionHeading>

        <div className="mt-8 mb-12">
          <Figure
            src="/projects/huertos-marinos/hm-complete-brand-04.png"
            alt="Brand system: marks, palette, typography"
            caption="Brandmarks (Primary and Secondary) + icon"
          />
        </div>

        <div className="mb-12">
          <Figure
            src="/projects/huertos-marinos/hm-complete-brand-05.png"
            alt="Brand system: palette and typography"
            caption="Showcasing luxury with coastal warmth through typography"
          />
        </div>

        <Figure
          src="/projects/huertos-marinos/hm-complete-brand-06.png"
          alt="Brand system: applications overview"
          caption="Colour palette that reflects the same brand consistency. It creates impact through intentional psychology of colour, and the subconscious brain of the audience."
        />
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Social Media Presence">
          <p className="mb-8">
            Social presence designed as an extension of the brand system, shaping perception,
            building trust, and communicating product value with clarity and consistency across
            platforms.
          </p>
        </SectionHeading>

        <div className="mt-8 mb-12">
          <Figure
            src="/projects/huertos-marinos/hm-social-mockup.png"
            alt="Instagram profile / feed mockup"
            caption="Instagram feed designed to signal quality instantly, supporting both B2B credibility and B2C connection."
          />
        </div>
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Sales & Positioning">
          <p className="mb-8">
            Sales collateral designed as a strategic tool for high-end positioning, clearly
            communicating product quality, traceability, and credibility to chefs, premium
            restaurants, and hospitality buyers.
          </p>
        </SectionHeading>

        <Figure
          className="mt-8"
          src="/projects/huertos-marinos/hm-b2b-brochure-mockup.png"
          alt="B2B tri-fold brochure mockup"
          caption="B2B brochure designed to communicate origin, quality, and trust, supporting confident purchasing decisions in a premium market."
        />
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Storytelling">
          <p className="mb-8">
            Large-scale visual storytelling designed to translate production and sustainability
            into a clear, engaging narrative, supporting understanding, trust, and brand
            transparency in physical spaces.
          </p>
        </SectionHeading>

        <Figure
          className="mt-8"
          src="/projects/huertos-marinos/hm-banner.png"
          alt="Huertos Marinos process infographic banner"
          caption="Process storytelling, making production + sustainability tangible and memorable."
        />
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <SectionHeading title="Digital">
          <p className="mb-8">
            Full website design and development, translating the brand into a digital experience
            that communicates quality, builds trust, and supports conversion in a premium market
            with clarity and intention.
          </p>
        </SectionHeading>

        <Figure
          className="mt-8"
          src="/projects/huertos-marinos/hm-website.png"
          alt="Huertos Marinos website UI concept"
          caption="Using UI/UX to translate brand perception into a clear user journey to support trust, understanding, and conversion."
        />
      </section>

      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-6">
                Impact
              </h2>
              <ul className="text-base text-white/90 leading-relaxed space-y-3 list-none">
                <li className="flex items-start">
                  <span className="mr-3 text-white/60 mt-1">•</span>
                  <span>
                    Positioned the brand clearly within the premium oyster market, differentiating it
                    from traditional seafood competitors
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-white/60 mt-1">•</span>
                  <span>
                    Strengthened recognition and trust among chefs, restaurants, and hospitality
                    buyers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-white/60 mt-1">•</span>
                  <span>
                    Elevated perceived value to support high-end pricing and more confident
                    purchasing decisions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-white/60 mt-1">•</span>
                  <span>
                    Built a cohesive system across packaging, digital, and marketing, ensuring
                    consistency at every touchpoint
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-12 text-lg md:text-xl font-light italic text-white/90 leading-relaxed">
              At its core, designing for Huertos Marinos meant translating craftsmanship and
              aquaculture into something elevated, so that quality is not just understood, but
              experienced at a glance, through clarity, consistency, and intention.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
