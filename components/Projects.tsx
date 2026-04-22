"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import type { CaseStudyProject } from "./types";
import AmbientBackdrop from "./AmbientBackdrop";
import PremiumBoxFrame from "./PremiumBoxFrame";
import SectionAccentLine from "./SectionAccentLine";
import { caribbeanParadiseData } from "@/data/caribbeanParadise";
import { huertosMarinos } from "@/data/huertosMarinos";
import { lushSeasonalData } from "@/data/lush";
import { urnaData } from "@/data/urna";
import { weddingInvitationData } from "@/data/weddingInvitation";
import { ayaData } from "@/data/aya";

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  link?: string;
  images?: string[];
  problem?: string;
  subtitle?: string;
  location?: string;
  year?: string;
  industry?: string;
  projectType?: string;
  role?: string;
  challenge?: string;
  strategicQuestion?: string;
  approach?: string;
  visualIdentity?: string;
  colorVisual?: string;
  systemApplications?: string;
  outcome?: string;
  tools?: string[];
  /** Tailwind object-position classes for the project grid hero (e.g. `object-bottom`). */
  previewImageObjectPosition?: string;
}

const brandIdentityProjects: Project[] = [
  {
    title: "Huertos Marinos",
    subtitle: "Brand Identity & Full Design System",
    description:
      "A premium brand identity and packaging system for an oyster-focused aquaculture business, positioning the product for high-end restaurants, hotels, and conscious consumers.",
    category: "Brand Identity",
    location: "Golfo de Nicoya, Costa Rica",
    year: "2022",
    industry: "Food & Beverage / Aquaculture",
    projectType: "Brand Identity, Social Media Managment, Marketing & UI/UX",
    role: "Lead Designer & Strategist",
    tags: ["Brand Identity", "UI/UX", "Marketing", "Social Media"],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Procreate",
      "Digital Marketing Platforms",
    ],
    images: ["/projects/huertos-marinos/hm-b2b-brochure-mockup.png"],
  },
  {
    title: "Caribbean Paradise",
    subtitle: "Brand Identity & Visual System",
    description:
      "A comprehensive brand identity project for an eco-tourism hotel in Tortuguero, Costa Rica, creating a cohesive visual system rooted in cultural and natural richness.",
    category: "Brand Identity",
    location: "Tortuguero, Limón, Costa Rica",
    year: "2023",
    industry: "Hospitality / Eco-Tourism",
    projectType:
      "Full Brand Identity, Visual System, UI Concept, Environmental & Print Design",
    role: "Lead Designer & Strategist (Solo Project)",
    challenge:
      "Caribbean Paradise had suffered from years of visual inconsistency and brand confusion. Following a change in ownership, the hotel alternated between two names, Caribbean Paradise and Lapa Verde, without establishing a clear identity, making it difficult for travel agencies, tourists, and even locals to recognise or accurately refer to the brand.\n\nThis lack of cohesion weakened brand recognition and positioning within the eco-tourism market, despite the hotel’s exceptional natural setting.",
    strategicQuestion:
      "How could a consistent brand identity be created for Caribbean Paradise,  rooted in the cultural and natural richness of Costa Rica's northeastern Caribbean,  to increase recognition and attract international eco-tourism to Tortuguero?",
    approach:
      "This project was developed as a full graduation thesis, allowing for deep strategic and cultural research. I conducted qualitative research through interviews with international tourists and local residents of Tortuguero, alongside benchmarking within the eco-tourism and hospitality sector. These insights informed both the strategic positioning and the visual language of the brand. Together with the client, I made the strategic decision to return to the name Caribbean Paradise and fully embody it,  not as a cliché, but as a truthful reflection of the hotel's environment: lush Caribbean gardens, direct access to the canals, and the national park bordering the property. Paradise, in this case, was real.",
    visualIdentity:
      "The visual identity was built around the idea of nature as sanctuary. Tortuguero is internationally known for turtle nesting and conservation, which led to the creation of a logo symbolising a turtle carrying a paradise within its shell,  a metaphor for protection, biodiversity, and coexistence with nature. The logo development process involved extensive sketching and exploration, combining organic forms, cultural references, and symbolic clarity before arriving at the final mark.",
    colorVisual:
      "The colour palette was intentionally developed using colour theory and contextual observation. It originates from the distinctive red used on the hotel's cabins, expanded through analogous Caribbean tones inspired by vegetation, water, soil, and tropical light. A custom brand pattern was created, drawing inspiration from Caribbean textile weaving traditions, reinforcing cultural connection while providing a flexible graphic system applicable across formats.",
    systemApplications:
      "The identity was designed as a complete, living system, not a standalone logo. Deliverables included: A comprehensive brand guidelines book, Environmental signage and wayfinding, Printed and digital communication materials, Custom illustrated labels and amenities, A fully illustrated landscape map to help guests navigate the hotel grounds, A conceptual UI wireframe for the hotel's website, built around original vector illustrations, Hand-painted murals in guest rooms, translating the visual identity into physical space. Each application was developed to maintain consistency, clarity, and emotional resonance,  ensuring the brand experience felt cohesive at every touchpoint.",
    outcome:
      "The result was a strong, recognisable, and culturally grounded brand identity that clearly positioned Caribbean Paradise as an eco-tourism destination with soul. The new identity improved brand recognition, strengthened storytelling for travel agencies and visitors, and transformed the hotel's visual presence into a coherent, memorable experience,  from digital interfaces to the physical environment itself.",
    tags: ["Brand Identity", "Illustration", "UI Design", "Print"],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop", "Procreate"],
    images: ["/projects/caribbean-paradise/cp-brand-guidelines.jpg"],
  },
  {
    title: "URNArtist",
    subtitle: "Community Art Identity & Workshop Platform",
    description:
      "A brand designed to make creativity feel accessible, comforting, and real,  for kids today, and community workshops as it grows.",
    category: "Brand Identity",
    location: "Personal initiative",
    year: "2024",
    projectType: "Community Art Identity, Brand Design, Workshop Platform",
    role: "Founder, Designer & Facilitator",
    tags: ["Brand Identity", "Community", "Naming", "Social Media", "Social"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
    images: ["/projects/urna/urna-flyer-mockups.jpg"],
  },
];

const seasonalIllustrationProjects: Project[] = [
  {
    title: "LUSH Seasonal Pattern Design",
    subtitle: "Halloween & Christmas 2026,  Talent Pool Selection",
    description:
      "Illustrated seasonal pattern systems developed for Lush's gift designs, combining handcrafted techniques, storytelling, and scalable production thinking.",
    category: "Digital and Traditional Illustration Designs",
    location: "Lush Talent Pool",
    year: "2025",
    projectType: "Digital and Traditional Illustration Designs",
    role: "Illustrator & Pattern Designer",
    tags: ["Vector Illustration", "Pattern Design", "Packaging", "Gouache", "Christmas"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate", "Gouache", "After Effects"],
    images: ["/projects/lush/lush-wrappingpaper-christmas-mockup.png"],
  },
  {
    title: "Wedding Invitation",
    subtitle: "Bespoke Watercolour & Illustration Invitation Design",
    description:
      "An invitation designed as both artwork and announcement, translating atmosphere, emotion, and story into a physical object.",
    category: "Digital and Traditional Illustration Designs",
    year: "2023",
    projectType: "Illustration & Print, Invitation Design",
    role: "Illustrator & Designer",
    tags: ["Illustration", "Watercolour", "Invitation", "Print"],
    tools: ["Procreate", "Adobe Illustrator", "Watercolour"],
    images: ["/projects/invitation/invitation-mock-up.png"],
  },
];

const campaignDesignProjects: Project[] = [
  {
    title: "AyA",
    subtitle: "Think of Others, COVID-19 Water Awareness Campaign",
    description:
      "A behavioural awareness campaign designed to turn water waste into something visible. Concept project for water company, Costa Rica.",
    category: "Campaign Design",
    location: "Costa Rica · 2020",
    year: "2020",
    projectType: "Concept Marketing Campaign · Behavioural Change · Public Awareness",
    role: "Concept & Visual Design",
    tags: ["Campaign", "Behavioural", "Editorial", "Outdoor"],
    images: ["/projects/aya/water-spread.png"],
  },
];

/** Single scroll order: HM → CP → URN → Lush → AyA → Wedding. */
const allProjects: Project[] = [
  brandIdentityProjects[0]!,
  brandIdentityProjects[1]!,
  brandIdentityProjects[2]!,
  seasonalIllustrationProjects[0]!,
  campaignDesignProjects[0]!,
  seasonalIllustrationProjects[1]!,
];

const accentGradients = [
  "from-terracotta/25 to-sand/40",
  "from-sage/30 to-creamDeep",
  "from-sand/50 to-terracotta/15",
  "from-ink/20 to-sage/25",
];

function slugFor(project: Project) {
  return project.title.toLowerCase().replace(/\s+/g, "-");
}

function caseStudyForSlug(slug: string): CaseStudyProject | null {
  if (slug === "caribbean-paradise") return caribbeanParadiseData;
  if (slug === "huertos-marinos") return huertosMarinos;
  if (slug === "urnartist") return urnaData;
  if (slug === "lush-seasonal-pattern-design") return lushSeasonalData;
  if (slug === "wedding-invitation") return weddingInvitationData;
  if (slug === "aya") return ayaData;
  return null;
}

/** Matches Experience key-skills icons, stroke SVGs tinted via brightness-0 on light backgrounds. */
function categoryStripIcon(category: string): string {
  if (category === "Brand Identity") return "/icons/brand.svg";
  if (category === "Digital and Traditional Illustration Designs") return "/icons/creative.svg";
  if (category === "Campaign Design") return "/icons/marketing.svg";
  return "/icons/design.svg";
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyProject | null>(
    null
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section
        id="work"
        className="relative overflow-hidden border-y border-ink/5 bg-cream px-6 pt-20 pb-28"
      >
        <AmbientBackdrop variant="cream" />
        {/* Legacy hash from the previous layout */}
        <div id="projects" className="sr-only" aria-hidden />
        <div className="container relative z-[1] mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
              Selected work
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl">
              Projects
            </h2>
            <SectionAccentLine centered />
            <p className="mt-5 text-lg leading-relaxed text-inkMuted">
              Click on a project to learn more.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {allProjects.map((project, index) => {
              const slug = slugFor(project);
              const caseStudy = caseStudyForSlug(slug);
              const gradient = accentGradients[index % accentGradients.length];
              const hero = project.images?.[0];
              const categoryWord = project.category.split(/\s/)[0];

              return (
                <motion.div
                  key={slug}
                  whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.006 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                  className="h-full"
                >
                  <PremiumBoxFrame
                    className="h-full"
                    innerClassName="group flex h-full cursor-pointer flex-col overflow-hidden border border-ink/10 bg-paper shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-ink/10"
                  >
                    <button
                      type="button"
                      className="flex h-full w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                      onClick={() => {
                        if (caseStudy) setSelectedCaseStudy(caseStudy);
                        else setSelectedProject(project);
                      }}
                    >
                      <div className="flex shrink-0 items-center gap-2 border-b border-ink/10 bg-paper/90 px-4 py-2 text-xs font-medium uppercase tracking-wider text-inkFaint backdrop-blur-sm">
                        <img
                          src={categoryStripIcon(project.category)}
                          alt=""
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5 shrink-0 brightness-0 opacity-[0.55]"
                          aria-hidden
                        />
                        <span>{project.category}</span>
                      </div>
                      <div
                        className={
                          slug === "aya"
                            ? "relative aspect-[16/10] min-h-0 w-full overflow-hidden bg-[linear-gradient(90deg,#cacbcb_0%,#d1d3d2_100%)]"
                            : `relative aspect-[16/10] min-h-0 w-full overflow-hidden bg-gradient-to-br ${gradient}`
                        }
                      >
                        {hero ? (
                          slug === "aya" ? (
                            <img
                              src={hero}
                              alt={`${project.title} preview`}
                              className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                          ) : (
                            <img
                              src={hero}
                              alt={`${project.title} preview`}
                              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${project.previewImageObjectPosition ?? ""} ${slug === "caribbean-paradise" ? "brightness-[1.07] contrast-[1.03]" : ""}`}
                            />
                          )
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <span className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium text-ink/10 transition-colors group-hover:text-ink/15">
                              {categoryWord}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-8">
                        <h3 className="font-display text-2xl font-semibold text-ink">
                          {project.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-inkMuted">
                          {project.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag, tagIdx) => (
                            <span
                              key={tag}
                              className="rounded-full bg-creamDeep px-3 py-1 text-xs font-medium text-inkMuted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-cream group-hover:text-ink"
                              style={{ transitionDelay: `${tagIdx * 35}ms` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="mt-6 text-sm font-medium text-terracottaDeep transition-transform duration-300 group-hover:translate-x-0.5">
                          {caseStudy ? "View case study →" : "View project →"}
                        </p>
                      </div>
                    </button>
                  </PremiumBoxFrame>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple project modal, frosted cream glass */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              className="fixed inset-0 z-[100] bg-ink/25 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              className="fixed inset-4 z-[101] flex max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-2xl border border-white/55 bg-paper/50 shadow-[0_24px_80px_rgba(43,37,32,0.1)] ring-1 ring-ink/10 backdrop-blur-2xl backdrop-saturate-150 md:inset-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: shouldReduceMotion ? 0 : 0.06 }}
                className="relative flex-shrink-0 border-b border-ink/10 bg-creamDeep/80 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl md:px-8 md:py-6"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-xl font-light leading-none text-ink/80 transition-colors hover:bg-paper/60 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-creamDeep md:right-5"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="mx-auto max-w-3xl px-10 text-center md:px-14">
                  <h2 className="font-display text-xs font-semibold uppercase leading-[1.75] tracking-[0.35em] text-ink md:text-sm md:tracking-[0.3em]">
                    {selectedProject.title}
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: shouldReduceMotion ? 0 : 0.12 }}
                className="min-h-0 flex-1 overflow-y-auto [overflow-y:overlay]"
              >
                {(selectedProject.subtitle ||
                  selectedProject.location ||
                  selectedProject.year ||
                  selectedProject.industry ||
                  selectedProject.role) && (
                  <div className="border-b border-ink/10 bg-paper/25 px-6 py-5 text-center md:px-8">
                    {selectedProject.subtitle && (
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-inkMuted">
                        {selectedProject.subtitle}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-inkMuted">
                      {selectedProject.location && <span>{selectedProject.location}</span>}
                      {selectedProject.year && <span>{selectedProject.year}</span>}
                      {selectedProject.industry && <span>{selectedProject.industry}</span>}
                    </div>
                    {selectedProject.role && (
                      <p className="mt-2 text-sm text-inkFaint">Role: {selectedProject.role}</p>
                    )}
                  </div>
                )}
                <div className="grid h-full md:grid-cols-2">
                  <div className="space-y-4 border-b border-ink/10 p-6 md:border-b-0 md:border-r md:p-8">
                    {selectedProject.images && selectedProject.images.length > 0 ? (
                      selectedProject.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="overflow-hidden rounded-xl border border-ink/10"
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} - ${idx + 1}`}
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-ink/15 bg-creamDeep/50 text-inkFaint">
                        No images available
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 p-6 md:p-8">
                    {selectedProject.projectType && (
                      <div>
                        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-inkFaint">
                          Project type
                        </p>
                        <p className="leading-relaxed text-inkMuted">{selectedProject.projectType}</p>
                      </div>
                    )}
                    {selectedProject.challenge && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">The Challenge</h3>
                        <p className="mt-2 whitespace-pre-line leading-relaxed text-inkMuted">
                          {selectedProject.challenge}
                        </p>
                      </div>
                    )}
                    {selectedProject.strategicQuestion && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          The Strategic Question
                        </h3>
                        <p className="mt-2 leading-relaxed text-inkMuted">
                          {selectedProject.strategicQuestion}
                        </p>
                      </div>
                    )}
                    {selectedProject.approach && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">The Approach</h3>
                        <p className="mt-2 whitespace-pre-line leading-relaxed text-inkMuted">
                          {selectedProject.approach}
                        </p>
                      </div>
                    )}
                    {selectedProject.visualIdentity && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          Visual Identity Concept
                        </h3>
                        <p className="mt-2 whitespace-pre-line leading-relaxed text-inkMuted">
                          {selectedProject.visualIdentity}
                        </p>
                      </div>
                    )}
                    {selectedProject.colorVisual && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          Colour & Visual Language
                        </h3>
                        <p className="mt-2 whitespace-pre-line leading-relaxed text-inkMuted">
                          {selectedProject.colorVisual}
                        </p>
                      </div>
                    )}
                    {selectedProject.systemApplications && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          System & Applications
                        </h3>
                        <p className="mt-2 whitespace-pre-line leading-relaxed text-inkMuted">
                          {selectedProject.systemApplications}
                        </p>
                      </div>
                    )}
                    {selectedProject.outcome && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">The Outcome</h3>
                        <p className="mt-2 whitespace-pre-line leading-relaxed text-inkMuted">
                          {selectedProject.outcome}
                        </p>
                      </div>
                    )}
                    {selectedProject.tools && selectedProject.tools.length > 0 && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">Tools</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedProject.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-ink/10 bg-creamDeep px-3 py-1 text-xs text-inkMuted"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedProject.tags && selectedProject.tags.length > 0 && (
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">Tags</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-ink/10 bg-creamDeep px-3 py-1 text-xs text-inkMuted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Case study modal, frosted cream glass; body uses data-modal-cream-glass for ink-on-cream overrides */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              className="fixed inset-0 z-[100] bg-ink/25 backdrop-blur-md"
              onClick={() => setSelectedCaseStudy(null)}
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              className="fixed inset-4 z-[101] flex max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-2xl border border-white/60 bg-cream/45 shadow-[0_24px_80px_rgba(43,37,32,0.1)] ring-1 ring-ink/10 backdrop-blur-2xl backdrop-saturate-150 md:inset-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: shouldReduceMotion ? 0 : 0.06 }}
                className="relative flex-shrink-0 border-b border-ink/10 bg-creamDeep/80 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-xl md:px-8 md:py-6"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-xl font-light leading-none text-ink/80 transition-colors hover:bg-paper/60 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-creamDeep md:right-5"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="mx-auto max-w-3xl px-10 text-center md:px-14">
                  <h2 className="font-display text-xs font-semibold uppercase leading-[1.75] tracking-[0.35em] text-ink md:text-sm md:tracking-[0.3em]">
                    {selectedCaseStudy.title}
                  </h2>
                </div>
              </motion.div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: shouldReduceMotion ? 0 : 0.12 }}
                className="min-h-0 flex-1 overflow-y-auto [overflow-y:overlay]"
                data-modal-cream-glass="true"
              >
                <div className="p-0">
                  <CaseStudyLayout project={selectedCaseStudy} />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
