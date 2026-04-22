"use client";

import { motion } from "framer-motion";
import type { CaseStudyProject } from "./types";
import ProcessSwitcher from "./ProcessSwitcher";

interface CaribbeanParadiseLayoutProps {
  project: CaseStudyProject;
}

function renderBoldAsterisks(text: string) {
  const parts = text.split("**");
  return parts.map((part, idx) =>
    idx % 2 === 1 ? (
      <strong key={idx} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

function RichParagraphs({ text }: { text: string }) {
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);
  return (
    <>
      {paragraphs.map((p, idx) => (
        <p
          key={idx}
          className={idx === 0 ? undefined : "mt-4"}
          style={{ whiteSpace: "pre-line" }}
        >
          {renderBoldAsterisks(p)}
        </p>
      ))}
    </>
  );
}

function ImpactContent({ text }: { text: string }) {
  const trimmed = text.trim();
  const blocks = trimmed.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  const isBulletLine = (line: string) => /^\s*(\*|-)\s+/.test(line);

  const parseBulletText = (line: string) => line.replace(/^\s*(\*|-)\s+/, "").trim();

  const linesForClassicListCheck = trimmed
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const isClassicDashList =
    linesForClassicListCheck.length > 0 &&
    linesForClassicListCheck.every((l) => l.startsWith("-"));

  // If the whole field is a classic "- ..." list (one item per line), keep the original rendering.
  if (isClassicDashList) {
    return (
      <ul className="text-base text-white/90 leading-relaxed space-y-2 list-none">
        {trimmed.split("\n").map((item, index) => {
          const cleanItem = item.trim().replace(/^-\s*/, "");
          return cleanItem ? (
            <li key={index} className="flex items-start">
              <span className="mr-3 text-white/60">•</span>
              <span>{cleanItem}</span>
            </li>
          ) : null;
        })}
      </ul>
    );
  }

  return (
    <div className="space-y-4 text-base text-white/90 leading-relaxed">
      {blocks.map((block, blockIdx) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);

        const bulletLines = lines.filter(isBulletLine);
        const nonBulletLines = lines.filter((l) => !isBulletLine(l));

        if (bulletLines.length > 0) {
          return (
            <div key={blockIdx}>
              {nonBulletLines.length > 0 ? (
                <p className="whitespace-pre-line">{nonBulletLines.join("\n")}</p>
              ) : null}
              <ul className="mt-3 space-y-2 list-none">
                {bulletLines.map((line, idx) => (
                  <li key={`${blockIdx}-${idx}`} className="flex items-start">
                    <span className="mr-3 text-white/60">•</span>
                    <span>{parseBulletText(line)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <p key={blockIdx} className="whitespace-pre-line">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default function CaribbeanParadiseLayout({ project }: CaribbeanParadiseLayoutProps) {
  return (
    <div className="relative" style={{ backgroundColor: 'transparent' }}>
      {/* Hero Image - Brand Guidelines */}
      <section className="w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[40vh] md:h-[56vh] overflow-hidden"
        >
          <img
            src="/projects/caribbean-paradise/cp-brand-guidelines.jpg"
            alt="Caribbean Paradise brand guidelines"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Title & Metadata */}
      <section className="container mx-auto px-6 mb-12 md:mb-16 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-tight">
            {project.title}
          </h1>
          
          {/* Type as tag/pill - 2pts bigger */}
          {project.projectType && (
            <div className="mb-8 flex justify-center">
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                {project.projectType}
              </span>
            </div>
          )}
          
          {/* Metadata cards - 3 separate circular pills on same line */}
          <div className="flex flex-wrap justify-center gap-3 items-center">
            {/* Year Card */}
            {project.year && (
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                <strong>Year:</strong> {project.year}
              </span>
            )}
            
            {/* Location Card */}
            {project.location && (
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                <strong>Location:</strong> {project.location}
              </span>
            )}
            
            {/* Role Card */}
            {project.role && (
              <span className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20">
                <strong>Role:</strong> {project.role}
              </span>
            )}
          </div>
        </motion.div>
      </section>

      {/* Brand Intro */}
      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-base text-white/90 leading-relaxed"
        >
          <p>
            Caribbean Paradise is an eco-tourism hotel located in Tortuguero, Costa Rica, known
            for its rich biodiversity and turtle nesting seasons, and deeply rooted in
            sustainability and local culture.
          </p>
          <p className="mt-4">
            The challenge was to translate this richness into a visual identity that feels vibrant
            and intentional, capturing its essence while balancing warmth, clarity, and structure
            across diverse applications.
          </p>
        </motion.div>
      </section>

      {/* Challenge - In Card */}
      {project.challenge && (
        <section className="container mx-auto px-6 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 h-full">
                <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                  Challenge
                </h2>
                <p className="text-base text-white/90 leading-relaxed whitespace-pre-line">
                  {project.challenge}
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 h-full flex flex-col">
                <div className="w-full flex-1 flex items-center justify-center">
                  <img
                    src="/projects/caribbean-paradise/cp-logo-primary.jpg"
                    alt="Logo symbolising sanctuary and biodiversity"
                    className="w-full h-full max-h-[420px] object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-white/70 text-sm mt-4 text-left">
                  Logo symbolising sanctuary and biodiversity, a turtle carrying a paradise within its shell.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Project Goal - In Card */}
      {project.goal && (
        <section className="container mx-auto px-6 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                Project Goal
              </h2>
              <p className="text-base text-white/90 leading-relaxed whitespace-pre-line">
                {project.goal}
              </p>
            </div>
            
            {/* Logo Exploration Image */}
            <div className="w-full">
              <img
                src="/projects/caribbean-paradise/cp-logo-exploration-board.jpg"
                alt="Logo exploration showing various conceptual directions"
                className="w-full h-auto"
                loading="lazy"
              />
              <p className="text-white/70 text-sm mt-4 text-left">
                A curated exploration of symbolic and conceptual directions developed before defining the final mark.
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Visual bridge , between Project Goal and Design & Identity */}
      <section className="container mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src="/projects/caribbean-paradise/Caribbean-paradise.png"
            alt="Caribbean Paradise visual overview"
            className="w-full h-auto rounded-2xl border border-white/20 shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Design & Identity - In Card */}
      {project.designDecisions && (
        <section className="container mx-auto px-6 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                Design & Identity
              </h2>
              <div className="text-base text-white/90 leading-relaxed">
                <RichParagraphs text={project.designDecisions} />
              </div>
            </div>
            
            {/* Complete Brand Image */}
            <div className="w-full mb-8">
              <img
                src="/projects/caribbean-paradise/cp-complete-brand.png"
                alt="Complete brand system"
                className="w-full h-auto"
                loading="lazy"
              />
              <p className="text-white/70 text-sm mt-4 text-left">
                Complete brand system
              </p>
            </div>
            
            {/* Stationery Image */}
            <div className="w-full">
              <img
                src="/projects/caribbean-paradise/cp-stationery-set.jpg"
                alt="Stationery system reinforcing brand consistency"
                className="w-full h-auto"
                loading="lazy"
              />
              <p className="text-white/70 text-sm mt-4 text-left">
                Stationery system reinforcing brand consistency and recognition.
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Map / Guide Section - Process Switcher */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <ProcessSwitcher
            images={[
              {
                src: "/projects/caribbean-paradise/cp-illustrated-map-final.jpg",
                alt: "Final illustrated map for guest wayfinding and brand storytelling",
                caption:
                  "Final illustrated map designed as a cohesive brand system, communicating space, experience, and identity at a glance.",
              },
              {
                src: "/projects/caribbean-paradise/cp-map-illustration.jpg",
                alt: "Illustration build: map composition, structure, and key brand details",
                caption: "Illustration build, layer and structure work that supports clarity, hierarchy, and wayfinding legibility.",
              },
              {
                src: "/projects/caribbean-paradise/cp-map-application.jpg",
                alt: "Map application in a real guest context for orientation and exploration",
                caption: "Map application, guest-facing context for orientation, confidence, and discovery in the property environment.",
              },
            ]}
            labels={["Illustration", "Sketch", "Application"]}
            defaultIndex={0}
          />
        </motion.div>
      </section>

      {/* Impact , imagery first, Impact card beneath */}
      {project.results && (
        <section className="container mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="space-y-8 md:space-y-10">
              {/* Imagery */}
              <div className="grid w-full grid-cols-2 gap-4 md:gap-8">
                <img
                  src="/projects/caribbean-paradise/paradise.JPG"
                  alt="Caribbean Paradise brand atmosphere and environment"
                  className="w-full h-auto rounded-2xl border border-white/20 shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                  loading="lazy"
                />
                <img
                  src="/projects/caribbean-paradise/application-hair-body.jpg"
                  alt="Hair and body amenities application showcasing branded packaging"
                  className="w-full h-auto rounded-2xl border border-white/20 shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                  loading="lazy"
                />
              </div>

              {/* Impact , full width beneath imagery */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-6">
                  Impact
                </h2>
                <ImpactContent text={project.results} />
              </div>
            </div>
          </motion.div>
        </section>
      )}

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
            This project for Caribbean Paradise brought clarity and cohesion to a place already rich in character, allowing its
            identity to be recognised, understood, and remembered. Revealing what was already there, shaping a brand that feels
            as immersive and alive as the place itself.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

