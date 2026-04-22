"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { CaseStudyProject } from "./types";

interface UrnaLayoutProps {
  project: CaseStudyProject;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function Figure({
  src,
  alt,
  caption,
  maxWidth = 1120,
  priority = false,
  imgClassName,
  imgStyle,
}: {
  src: string;
  alt: string;
  caption: string;
  maxWidth?: number;
  priority?: boolean;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="m-0"
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
    >
      <img
        src={src}
        alt={alt}
        className={imgClassName ?? "w-full h-auto block rounded-[22px] border border-white/20"}
        style={imgStyle ?? { boxShadow: "0 10px 28px rgba(0,0,0,0.22)" }}
        loading={priority ? "eager" : "lazy"}
      />
      {caption ? (
        <figcaption className="text-sm text-white/70 mt-3 leading-relaxed">{caption}</figcaption>
      ) : null}
    </motion.figure>
  );
}

function SnapshotRow({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div
      className="flex flex-wrap justify-center gap-3 items-center"
      role="list"
    >
      {items.map((it) => (
        <span
          key={it.label}
          role="listitem"
          className="px-3 py-1.5 text-xs md:text-sm backdrop-blur-md bg-white/10 rounded-full text-white/90 border border-white/20"
        >
          <strong>{it.label}:</strong> {it.value}
        </span>
      ))}
    </div>
  );
}

export default function UrnaLayout({ project }: UrnaLayoutProps) {
  const base = "/projects/urna";

  return (
    <main className="relative w-full" style={{ backgroundColor: "transparent" }}>
      {/* HERO */}
      <section className="w-full mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[38vh] md:h-[56vh] overflow-hidden"
        >
          <img
            src={`${base}/urna-hero.png`}
            alt="URNArtist hero banner"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none border-0"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* TITLE & SNAPSHOT */}
      <section className="container mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-white/75 mt-2">Case Study</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">{project.subtitle}</p>
          </div>
          <SnapshotRow
            items={[
              { label: "Audience", value: "Kids · Women's workshops (future-ready)" },
              { label: "Tone", value: "Warm · playful · calm · trustworthy" },
              { label: "Goal", value: "Belonging, expression, and community visibility" },
            ]}
          />
        </motion.div>
      </section>

      {/* Intro (same style as Caribbean Paradise intro) */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px] mx-auto text-base text-white/90 leading-relaxed"
        >
          <p>
            URNArtist, &quot;You Are An Artist&quot; began as my personal initiative to create a
            safe creative space for children and community workshops.
          </p>
          <p className="mt-4">
            A space to show kids different art mediums (acrylics, watercolour, ink, and mixed
            media) to teach them grounding and self-expression.
          </p>
        </motion.div>
      </section>

      {/* BRAND FOUNDATION (card) , between Snapshot and Logo */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1180px] mx-auto"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
                Brand Foundation
              </h2>
              <p className="text-base text-white/90 leading-relaxed mb-4">
                The name carries the philosophy behind the project:{" "}
                <strong className="text-white">
                  a reminder that creativity is not a skill reserved for a few,  it is something we all carry.
                </strong>
              </p>
              <p className="text-base text-white/90 leading-relaxed mb-4">
                The name is both an affirmation and a positioning statement. It removes hierarchy from art. It removes
                intimidation. It invites participation.
              </p>
              <p className="text-base text-white/90 leading-relaxed">
                This was not just an art class,  it was a carefully designed creative environment.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto lg:mx-0 lg:ml-auto w-full">
              <Figure
                src={`${base}/urna-logo.png`}
                alt="URNArtist logo"
                caption="Logo designed as an affirmation and a positioning statement: creativity belongs to everyone."
                maxWidth={520}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* COLOUR & VISUAL LANGUAGE */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Colour & Visual Language
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-4">
              Developed to create a sense of psychological comfort, the colour palette balances softness and warmth
              without feeling infantilising, calm enough for reflective workshops, playful enough to invite exploration,
              and consistent across print, digital, and physical touchpoints, while remaining refined and approachable
              for adults.
            </p>
          </motion.div>
          <Figure
            src={`${base}/urna-colour-palette.png`}
            alt="URNArtist colour palette"
            caption=""
          />
        </div>
      </section>

      {/* FLYERS */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Communication & Trust, Flyer System
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-4">
              For URNArtist, clarity builds trust. The flyer system was designed with a clear hierarchy, allowing
              parents to immediately understand structure, expectations, and materials.
            </p>
          </motion.div>
          <Figure
            src={`${base}/urna-flyer-mockups.jpg`}
            alt="URNArtist flyer mockups"
            caption=""
          />
        </div>
      </section>

      {/* SOCIALS */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Community as Marketing Strategy
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              URNArtist doesn’t rely on aggressive advertising, it grows through community visibility. Content focuses on
              atmosphere, process, and real creative moments, creating space for exploration. Rather than selling art,
              the brand builds a sense of belonging.
            </p>
          </motion.div>
          <Figure
            src={`${base}/urna-socials.png`}
            alt="URNArtist social media posts"
            caption="Instagram content designed for trust and traction through consistency, presence, and an authentic class atmosphere."
          />
        </div>
      </section>

      {/* PHYSICAL TOUCHPOINTS */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Physical Touchpoints
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Extending the identity into physical touchpoints strengthens recognition, memorability, and emotional
              connection, carrying the experience beyond the studio.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Figure
              src={`${base}/urna-tote.jpg`}
              alt="URNArtist tote mockup"
              caption="Tote bag application,  reinforcing identity in a practical, everyday format."
            />
            <Figure
              src={`${base}/urna-stickers.jpg`}
              alt="URNArtist stickers mockup"
              caption="Stickers as emotional touchpoints,  small, playful artifacts that build attachment and recognition."
            />
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="container mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[720px] mx-auto"
        >
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
            <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
              Impact
            </h2>
            <ul className="list-none pl-0 space-y-2 text-base text-white/90 leading-relaxed">
              {[
                "Strengthened brand recognition through a consistent and cohesive visual system",
                "Built trust with parents through clarity, tone, and accessible communication",
                "Created emotional connection by centring process, atmosphere, and belonging",
                "Extended the identity across digital and physical touchpoints for a unified experience",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-white/60 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-lg md:text-xl font-light italic text-white/90 leading-relaxed">
            URNArtist reflects my belief that art is not a product, but a process. It sits at the
            intersection of mindful art practices, strong identity design, and community building.
            It shows that branding is not just about recognition, but about resonance, building
            systems that connect, endure, and belong to people.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
