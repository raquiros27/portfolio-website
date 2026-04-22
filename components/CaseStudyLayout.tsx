"use client";

import { motion } from "framer-motion";
import CaseStudyGallery from "./CaseStudyGallery";
import ProcessSwitcher from "./ProcessSwitcher";
import CollapsibleSection from "./CollapsibleSection";
import CaribbeanParadiseLayout from "./CaribbeanParadiseLayout";
import HuertosMarinosLayout from "./HuertosMarinosLayout";
import LushLayout from "./LushLayout";
import UrnaLayout from "./UrnaLayout";
import WeddingInvitationLayout from "./WeddingInvitationLayout";
import AyaLayout from "./AyaLayout";
import type { CaseStudyImage, CaseStudyProject } from "./types";

export type { CaseStudyImage, CaseStudyProject };

interface CaseStudyLayoutProps {
  project: CaseStudyProject;
}

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  // Special editorial layout for Caribbean Paradise
  if (project.title === "Caribbean Paradise") {
    return <CaribbeanParadiseLayout project={project} />;
  }

  // Special editorial layout for Huertos Marinos
  if (project.title === "Huertos Marinos") {
    return <HuertosMarinosLayout project={project} />;
  }

  // Special layout for LUSH Seasonal Pattern Design
  if (project.title.toLowerCase() === "lush seasonal pattern design") {
    return <LushLayout project={project} />;
  }

  // Special layout for URNArtist
  if (project.title === "URNArtist") {
    return <UrnaLayout project={project} />;
  }

  // Special layout for Wedding Invitation
  if (project.title === "Wedding Invitation") {
    return <WeddingInvitationLayout project={project} />;
  }

  // Special layout for AyA Water Awareness Campaign
  if (project.title.startsWith("AyA")) {
    return <AyaLayout project={project} />;
  }

  // Default layout for other projects
  const heroImage = project.images[0];

  return (
    <div className="relative" style={{ backgroundColor: 'transparent' }}>
      {/* Hero Section */}
      <section className="relative w-full mb-16 md:mb-24">
        {heroImage && (
          <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <motion.img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a4a]/80 via-transparent to-transparent" />
          </div>
        )}
        
        {/* Title Overlay or Adjacent Block */}
        <div className="container mx-auto px-6 mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-4 drop-shadow-lg leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
                {project.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* At-a-Glance Strip */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {project.year && (
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-xs md:text-sm text-white/60 mb-1">Year</p>
              <p className="text-lg md:text-xl font-semibold text-white">{project.year}</p>
            </div>
          )}
          {project.location && (
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-xs md:text-sm text-white/60 mb-1">Location</p>
              <p className="text-lg md:text-xl font-semibold text-white">{project.location}</p>
            </div>
          )}
          {project.role && (
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-xs md:text-sm text-white/60 mb-1">Role</p>
              <p className="text-lg md:text-xl font-semibold text-white">{project.role}</p>
            </div>
          )}
          {project.projectType && (
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 col-span-2 md:col-span-1">
              <p className="text-xs md:text-sm text-white/60 mb-1">Type</p>
              <p className="text-lg md:text-xl font-semibold text-white">{project.projectType}</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Process Switcher - Special section for Caribbean Paradise */}
      {project.title === "Caribbean Paradise" && (
        <section className="container mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
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
      )}

      {/* Story Blocks */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {/* Business Challenge */}
          {project.challenge && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                  Business Challenge
                </h2>
                <p className="text-base text-white/90 leading-relaxed whitespace-pre-line">{project.challenge}</p>
              </div>
              <div className="hidden md:block" /> {/* Spacer for editorial layout */}
            </motion.div>
          )}

          {/* Project Goal */}
          {project.goal && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              <div className="hidden md:block" /> {/* Spacer for editorial layout */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                  Project Goal
                </h2>
                <p className="text-base text-white/90 leading-relaxed whitespace-pre-line">{project.goal}</p>
              </div>
            </motion.div>
          )}

          {/* Design & Identity Decisions */}
          {project.designDecisions && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                  Design & Identity Decisions
                </h2>
                <p className="text-base text-white/90 leading-relaxed whitespace-pre-line">{project.designDecisions}</p>
              </div>
              <div className="hidden md:block" /> {/* Spacer for editorial layout */}
            </motion.div>
          )}

          {/* Results */}
          {project.results && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              <div className="hidden md:block" /> {/* Spacer for editorial layout */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                  Results
                </h2>
                {project.results.startsWith("-") ? (
                  <ul className="text-base text-white/90 leading-relaxed space-y-2 list-none">
                    {project.results.split("\n").map((item, index) => {
                      const cleanItem = item.trim().replace(/^-\s*/, "");
                      return cleanItem ? (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-white/60">•</span>
                          <span>{cleanItem}</span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                ) : (
                  <p className="text-base text-white/90 leading-relaxed whitespace-pre-line">{project.results}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-6">
                Tools
              </h2>
              <p className="text-base text-white/90 leading-relaxed">
                {project.tools.join(" · ")}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Logo Section - Special for Caribbean Paradise */}
      {project.title === "Caribbean Paradise" && (
        <section className="container mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/projects/caribbean-paradise/cp-logo-primary.jpg"
                alt="Logo symbolising sanctuary and biodiversity,  a turtle carrying a paradise within its shell"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Logo symbolising sanctuary and biodiversity,  a turtle carrying a paradise within its shell.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Logo Exploration - Collapsible for Caribbean Paradise */}
      {project.title === "Caribbean Paradise" && (
        <section className="container mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <CollapsibleSection
              title="Logo Exploration"
              introLine="A curated exploration of symbolic and conceptual directions developed before defining the final mark."
              image={{
                src: "/projects/caribbean-paradise/cp-logo-exploration-board.jpg",
                alt: "Logo exploration showing various conceptual directions",
              }}
              defaultCollapsed={true}
            />
          </motion.div>
        </section>
      )}

      {/* Gallery Section */}
      {project.images && project.images.length > 1 && (
        <section className="container mx-auto px-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {project.title !== "Caribbean Paradise" && (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
                Project Gallery
              </h2>
            )}
            <CaseStudyGallery images={project.images.slice(1)} /> {/* Skip first image (hero) */}
          </motion.div>
        </section>
      )}
    </div>
  );
}

