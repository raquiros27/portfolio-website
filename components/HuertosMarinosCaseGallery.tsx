"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  src: string;
  alt: string;
  caption: string;
  variant?: "hero" | "split" | "grid2" | "full";
};

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
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="w-full" style={{ position: 'relative', zIndex: 1 }}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-auto block rounded-xl mb-4"
        style={{ 
          display: 'block', 
          maxWidth: '100%',
          opacity: 1,
          visibility: 'visible',
          position: 'relative',
          zIndex: 1
        }}
        onError={(e) => {
          console.error(`❌ Failed to load image: ${src}`);
          const target = e.target as HTMLImageElement;
          target.style.border = '3px solid red';
          target.style.backgroundColor = 'rgba(255,0,0,0.1)';
          target.alt = `Error loading: ${alt}`;
        }}
        onLoad={() => {
          console.log(`✅ Image loaded successfully: ${src}`);
        }}
      />
      <div className="text-sm text-white/70 leading-relaxed pl-2">{caption}</div>
    </div>
  );
}

export default function HuertosMarinosCaseGallery() {
  const base = "/projects/huertos-marinos";

  useEffect(() => {
    console.log('🖼️ HuertosMarinosCaseGallery component mounted');
  }, []);

  const items: Item[] = useMemo(
    () => [
      {
        src: `${base}/hm-logo-primary.png`,
        alt: "Huertos Marinos primary logo lockup",
        caption:
          "Primary identity lockup,  designed to feel premium, crafted, and trustworthy for high-end culinary markets.",
        variant: "hero",
      },
      {
        src: `${base}/hm-logo-exploration-board.png`,
        alt: "Huertos Marinos logo exploration board",
        caption:
          "Logo exploration,  broad ideation refined into a symbol that reads as heritage + ocean craft (without generic 'seafood' cues).",
        variant: "full",
      },

      // Brand system trio
      {
        src: `${base}/hm-complete-brand-04.png`,
        alt: "Brand system: marks, palette, typography",
        caption: "Brand foundation,  mark family, color logic, and typographic voice.",
        variant: "split",
      },
      {
        src: `${base}/hm-complete-brand-05.png`,
        alt: "Brand system: palette and typography",
        caption: "Typography + palette,  restrained luxury with coastal warmth.",
        variant: "split",
      },
      {
        src: `${base}/hm-complete-brand-06.png`,
        alt: "Brand system: applications overview",
        caption: "System scalability,  consistent across print, digital, and packaging touchpoints.",
        variant: "split",
      },

      // Social presence
      {
        src: `${base}/hm-socialmedia-mockup.png`,
        alt: "Social media presence mockup",
        caption:
          "Social presence,  premium tone, clear product storytelling, and brand recall across posts.",
        variant: "full",
      },
      {
        src: `${base}/hm-social-mockup.png`,
        alt: "Instagram profile / feed mockup",
        caption:
          "Instagram feed,  designed to signal quality instantly and support both B2B and B2C trust.",
        variant: "full",
      },

      // Trifold / B2B
      {
        src: `${base}/hm-b2b-brochure-mockup.png`,
        alt: "B2B tri-fold brochure mockup",
        caption:
          "B2B brochure,  positioning crafted for chefs, premium restaurants, and hospitality buyers.",
        variant: "full",
      },

      // Process banner / infographic
      {
        src: `${base}/hm-banner.png`,
        alt: "Huertos Marinos process infographic banner",
        caption:
          "Process storytelling, making production + sustainability tangible and memorable.",
        variant: "full",
      },

      // Website
      {
        src: `${base}/hm-website.png`,
        alt: "Huertos Marinos website UI concept",
        caption:
          "Website concept, brand-led UI designed to convert premium buyers with clarity and confidence.",
        variant: "full",
      },
    ],
    []
  );

  // Layout helpers
  const hero = items.find((i) => i.variant === "hero");
  const rest = items.filter((i) => i !== hero);

  console.log('🖼️ HuertosMarinosCaseGallery rendering with', items.length, 'items');

  return (
    <section className="w-full min-h-screen py-16 px-6" style={{ backgroundColor: 'transparent', position: 'relative', zIndex: 1 }}>
      {/* Sticky highlights rail + content */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-[320px_1fr] gap-16 lg:grid-cols-1 lg:gap-12" style={{ position: 'relative', zIndex: 1 }}>
        <aside className="relative">
          <div className="sticky top-24 p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl lg:relative lg:top-0">
            <div className="text-sm uppercase tracking-wider text-white/70 mb-2">Huertos Marinos</div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight lg:text-2xl">Premium oyster brand system</h2>
            <p className="text-[0.9375rem] leading-relaxed text-white/90 mb-6">
              Built to communicate <b className="font-semibold text-white">trust</b>, <b className="font-semibold text-white">high-end quality</b>, and <b className="font-semibold text-white">environmental responsibility</b> across
              B2B (chefs/hospitality) and B2C.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Brand identity",
                "Packaging-ready system",
                "Social strategy & content",
                "B2B collateral",
                "Website UI",
              ].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 backdrop-blur-md bg-white/20 border border-white/30 rounded-full text-white">
                  {t}
                </span>
              ))}
            </div>

            <div className="h-px bg-white/20 my-8" />

            <p className="text-sm text-white/60 text-center">
              Scroll for the full visual story ↓
            </p>
          </div>
        </aside>

        <div className="flex flex-col gap-16 md:gap-12" style={{ position: 'relative', zIndex: 1 }}>
          {/* HERO */}
          {hero && (
            <div className="w-full mb-8" style={{ position: 'relative', zIndex: 1 }}>
              <Figure src={hero.src} alt={hero.alt} caption={hero.caption} priority />
            </div>
          )}

          {/* Main flow: alternating rhythm */}
          {rest.map((it) => {
            return (
              <div key={it.src} className="w-full" style={{ position: 'relative', zIndex: 1 }}>
                <Figure src={it.src} alt={it.alt} caption={it.caption} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
