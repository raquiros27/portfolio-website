"use client";

import { motion } from "framer-motion";
import AmbientBackdrop from "./AmbientBackdrop";
import SectionAccentLine from "./SectionAccentLine";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper px-6 pt-20 pb-28">
      <AmbientBackdrop variant="paper" />
      <div className="container relative z-[1] mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
            About
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl lg:text-6xl">
            About Me
          </h2>
          <SectionAccentLine centered />
        </motion.div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-ink/10 bg-cream/60 p-10 shadow-sm backdrop-blur-sm md:p-12"
          >
            <p className="font-display text-2xl font-medium leading-[1.2] tracking-tight text-ink text-pretty md:text-3xl md:leading-[1.15] lg:text-[2.125rem]">
              I&apos;m a multidisciplinary designer working across brand identity, illustration, and
              campaigns. I combine strategic thinking with an expressive, art-led approach to create
              brands that feel{" "}
              <span className="font-bold text-ink">memorable, intentional, and alive</span>.
            </p>

            <div className="mt-10 border-t border-ink/10 pt-10 md:mt-12 md:pt-12">
              <p className="text-[0.975rem] leading-[1.8] text-inkMuted text-pretty md:text-[1.0625rem] md:leading-[1.85]">
                With a background in Graphic Design and Fine Arts, I approach each project
                holistically—shaping brand identities, visual systems, and campaigns that are both
                thoughtful and effective. From concept to execution, I focus on clarity, cohesion,
                and meaning, ensuring every element serves a purpose and contributes to a stronger,
                more memorable brand.
              </p>

              <div className="mt-7 border-t border-ink/10 pt-7 md:mt-8 md:pt-8">
                <p className="text-lg font-semibold leading-relaxed text-ink text-pretty md:text-xl">
                  I&apos;m especially drawn to projects where strategy and creativity meet—where brands
                  are not only seen, but felt.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex h-full flex-col gap-4"
          >
            {[
              {
                title: "Art-led design",
                icon: "/AboutMe/Art-led.png",
                body:
                  "I use an artistic approach to create designs with personality, depth and storytelling, intentionally made to resonate and connect emotionally with the target audience.",
              },
              {
                title: "Strategic thinking",
                icon: "/AboutMe/Strategy.png",
                body:
                  "Research-driven design rooted in strategy, marketing insights, and deep audience study. This gives place to clear and cohesive visual communication.",
              },
              {
                title: "Holistic designs",
                icon: "/AboutMe/Holistic.png",
                body:
                  "I design recognising at all times how every components of a brand connects and interacts, from concept to execution, as a unified system that ensures consistency, clarity, and impact across every touchpoint.",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-ink/10 bg-cream/50 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-terracotta/25 md:p-7 ${
                  idx === 2 ? "mt-auto" : ""
                }`}
              >
                <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                  <div className="flex items-center justify-center md:justify-start">
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden
                      style={{ opacity: 0.85 }}
                      className={
                        item.icon === "/AboutMe/Holistic.png"
                          ? "h-52 w-52 object-contain md:h-60 md:w-60"
                          : "h-44 w-44 object-contain md:h-52 md:w-52"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-inkMuted md:text-[0.98rem] md:leading-[1.75]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
