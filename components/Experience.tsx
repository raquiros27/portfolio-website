"use client";

import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AmbientBackdrop from "./AmbientBackdrop";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Independent Graphic Designer & Marketer",
    company: "Independent Graphic Designer",
    period: "2022 - 2026",
    location: "Costa Rica",
    description: [
      "Led the end-to-end development of brand identities from concept to execution, including digital, print, and marketing systems.",
      "Built the full brand ecosystem for Huertos Marinos, including social media, website (Figma/Wix), and advertising content, contributing to an estimated 65% increase in B2B and B2C client acquisition.",
      "Developed a complete brand book for Caribbean Paradise, positioning the brand within the hospitality and eco-lodge market through cohesive visual identity and strategic design direction.",
      "Delivered packaging design concepts, leading to selection for the Lush Talent Pool and invitation to contribute to the Halloween and Christmas 2026 product lines.",
    ],
  },
  {
    title: "Lead Graphic Designer & Marketer",
    company: "Amsy Chartered Surveyors",
    period: "2022 - 2024",
    location: "Great Manchester, England",
    description: [
      "Refined and streamlined brand identity to ensure consistency across all touchpoints, improving clarity and recognition.",
      "Designed targeted marketing materials (flyers, newspapers, templates) based on defined audience personas, increasing engagement and campaign reach.",
      "Developed and launched a tailored marketing campaign, achieving an 11% increase in conversion rates in 3 months.",
    ],
  },
  {
    title: "Midweight Graphic Designer & Illustrator",
    company: "Castegnaro Marketing & Design",
    period: "2020 - 2022",
    location: "La Uruca, Costa Rica",
    description: [
      "Managed social media accounts for multiple clients, creating structured monthly content (photography, video, advertising assets, and copy-writing), increasing engagement and follower growth by 67% within six months.",
      "Designed user interfaces for a yoga app, toy products, and a bakery website using Figma, improving usability and user interaction through intuitive and responsive design.",
      "Conceptualized and illustrated board games, packaging, and brand identities, delivering cohesive and authentic visual systems that strengthened brand recognition and consistency.",
    ],
  },
  {
    title: "Junior Graphic Designer",
    company: "PIXELS Digital Printing",
    period: "2018 - 2020",
    location: "Pavas, Costa Rica",
    description: [
      "Designed on-demand materials for walk-in clients, including stationery, flyers, brochures, magazines, and menus using Adobe Illustrator, InDesign, and Photoshop.",
      "Produced and prepared files for small and large format printing (banners, posters, billboards, roll-ups, booklets), gaining a strong understanding of print production processes.",
    ],
  },
];

const skills = [
  "Creative",
  "Responsible",
  "Passionate",
  "Empathetic",
  "Organised",
  "Team worker",
  "Adaptable",
  "Hard Working",
];

// First row: Ai, Ps, Id. Second row underneath: Ae, Figma.
const technicalSkillsIconsRow1 = [
  { name: "Ai", icon: "/icons/ai.svg" },
  { name: "Ps", icon: "/icons/ps.svg" },
  { name: "Id", icon: "/icons/id.svg" },
];
const technicalSkillsIconsRow2 = [
  { name: "Ae", icon: "/icons/ae.svg" },
  { name: "Pr", icon: "/icons/pr.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
];

const softwareSkills = [
  { name: "Ai", icon: "/icons/ai.svg" },
  { name: "Ps", icon: "/icons/ps.svg" },
  { name: "Id", icon: "/icons/id.svg" },
  { name: "Pr", icon: "/icons/pr.svg" },
  { name: "Ae", icon: "/icons/ae.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Procreate", icon: "/icons/procreate.svg" },
];

const keySkillsSections = [
  {
    id: "brand-identity",
    title: "Brand Identity Systems",
    icon: "/icons/brand.svg",
    items: [
      "Concept Development & Visual Storytelling",
      "Brand Strategy & Positioning",
      "Market Research & Insight Analysis",
      "Buyer Personas & Audience Definition",
      "Creative Direction",
      "Campaign Concepting",
    ],
  },
  {
    id: "design-visual",
    title: "Design & Visual Craft",
    icon: "/icons/design.svg",
    items: [
      "Logo Design",
      "Visual Identity & Brand Guidelines",
      "Illustration (Traditional & Vector)",
      "Editorial Design & Layout",
      "Packaging Design & Patterns",
      "Typography & Hierarchy",
      "Print Design & Production Knowledge",
    ],
  },
  {
    id: "marketing-digital",
    title: "Marketing & Digital",
    icon: "/icons/marketing.svg",
    note: "This is a huge differentiator for employers.",
    items: [
      "Marketing Strategy (B2B & B2C)",
      "Social Media Design Systems",
      "Campaign Assets & Content Planning",
      "UI / UX Design (Web & Digital Products)",
      "Website Design (Concept to Execution)",
    ],
  },
  {
    id: "creative-process",
    title: "Creative Process",
    icon: "/icons/creative.svg",
    items: [
      "Cross-disciplinary Problem Solving",
      "Research-Driven Design",
      "Human-Centred Design",
      "Strategic & Intuitive Thinking",
      "Attention to Detail",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  // Key Skills is temporarily hidden, but we keep these stubs so the block can be
  // re-enabled later without reintroducing build/type errors.
  const hoveredSkill: string | null = null;
  const setHoveredSkill = (_next: string | null) => {};
  const allSkills: Array<any> = [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-cream px-6 pt-20 pb-14 md:pt-24 md:pb-16">
      <AmbientBackdrop variant="cream" />
      <div
        id="experience"
        ref={ref}
        className="container relative z-[1] mx-auto max-w-6xl"
      >
        {/* Key Skills Section (temporarily removed) */}
        {false && (
        <motion.div
          initial={{ y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center">
            <motion.div
              initial={{ y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block rounded-2xl border border-ink/10 bg-paper/90 px-6 py-4 text-center shadow-sm backdrop-blur-sm"
            >
              <h2 className="font-display text-4xl font-medium text-ink md:text-5xl lg:text-6xl">
                Key Skills
              </h2>
            </motion.div>
          </div>
          
          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-2xl border border-ink/12 bg-paper/95 backdrop-blur-sm shadow-sm hover:border-terracotta/35 transition-all flex flex-col p-6 min-h-[240px]"
                onMouseEnter={skill.type !== "software" ? () => setHoveredSkill(skill.id) : undefined}
                onMouseLeave={skill.type !== "software" ? () => setHoveredSkill(null) : undefined}
              >
                {skill.type === "software" ? (
                  /* PDF-style Technical Skills: title, icon rows, procreate */
                  <div className="flex flex-col w-full items-center text-center">
                    <h4 className="font-bold text-xl uppercase tracking-tight text-ink mb-5" style={{ letterSpacing: "0.02em" }}>
                      TECHNICAL SKILLS
                    </h4>
                    <div className="flex flex-wrap justify-center gap-3 mb-3">
                      {technicalSkillsIconsRow1.map((s, idx) => (
                        <motion.div
                          key={s.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.06 }}
                          className="rounded-xl border-2 border-ink/35 flex items-center justify-center w-14 h-14 bg-transparent"
                        >
                          <img
                            src={s.icon}
                            alt={s.name}
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3 mb-4">
                      {technicalSkillsIconsRow2.map((s, idx) => (
                        <motion.div
                          key={s.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.06 }}
                          className="rounded-xl border-2 border-ink/35 flex items-center justify-center w-14 h-14 bg-transparent"
                        >
                          <img
                            src={s.icon}
                            alt={s.name}
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-col items-center text-ink">
                      <span className="text-lg font-medium italic" style={{ fontFamily: "Georgia, serif" }}>
                        procreate
                      </span>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    {hoveredSkill !== skill.id ? (
                      <motion.div
                        key="header"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center justify-center flex-1"
                      >
                        <div className="backdrop-blur-md bg-creamDeep rounded-lg flex items-center justify-center border-2 border-ink/15 mb-4 w-14 h-14">
                          <img
                            src={skill.section.icon}
                            alt={skill.section.title}
                            className="object-contain w-7 h-7"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-xl uppercase tracking-tight text-ink" style={{ letterSpacing: "0.02em" }}>
                            {skill.section.title}
                          </h4>
                          <div className="text-ink text-lg">▼</div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <div className="space-y-2">
                          {skill.section.note && (
                            <p className="text-sm text-inkFaint italic mb-2">{skill.section.note}</p>
                          )}
                          <ul className="space-y-1 ml-4">
                            {skill.section.items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex} className="text-inkMuted text-sm list-disc">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}

        <div className="mb-16">
          <div className="grid items-center md:grid-cols-[7.5rem_1.5rem_1fr] md:gap-8">
            <div className="hidden md:block" aria-hidden />
            <div className="hidden md:block" aria-hidden />
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
                  Through the years
                </p>
                <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl">
                  Experience
                </h2>
                <div
                  className="mt-6 h-px w-full max-w-xs bg-gradient-to-r from-terracotta/65 via-terracotta/35 to-transparent"
                  aria-hidden="true"
                />
                <p className="mt-5 text-lg leading-relaxed text-inkMuted">
                  Hover or focus each role to reveal details.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Spine (no circles), between years and cards */}
          <div
            className="pointer-events-none absolute top-0 hidden h-full w-px bg-ink/10 md:block left-[calc(7.5rem+0.75rem)]"
            aria-hidden
          />

          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.25 }}
              >
                <div className="grid gap-3 md:grid-cols-[7.5rem_1.5rem_1fr] md:items-center md:gap-8">
                  <div className="text-inkFaint md:text-right">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-terracottaDeep">
                      Years
                    </p>
                    <p className="mt-1 font-display text-lg font-medium text-inkMuted">
                      {exp.period}
                    </p>
                  </div>

                  {/* Tick into the card */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="h-px w-full bg-ink/12" aria-hidden />
                  </div>

                  <div
                    className="group rounded-2xl border border-ink/12 bg-paper/95 px-6 py-4 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                    tabIndex={0}
                  >
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-ink">{exp.title}</h3>
                      <p className="text-inkMuted">
                        {exp.company}
                        {exp.location && ` • ${exp.location}`}
                      </p>
                    </div>

                    <div className="overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out motion-reduce:transition-none max-h-0 opacity-0 mt-0 group-hover:mt-4 group-hover:max-h-64 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:max-h-64 group-focus-within:opacity-100">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-inkMuted flex items-start text-sm"
                          >
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Margin before Contact */}
      <div className="h-12" />
    </section>
  );
}

