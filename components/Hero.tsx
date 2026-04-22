"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 26,
        y: (e.clientY / window.innerHeight - 0.5) * 26,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduceMotion]);

  return (
    <section
      id="home"
      className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-gradient-to-b from-paper via-cream to-creamDeep md:min-h-[82svh]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ambient-mesh ambient-mesh--paper absolute inset-[-20%] opacity-90"
          aria-hidden
        />

        <div className="absolute inset-0" aria-hidden>
          <div
            className="hero-float-blob hero-float-blob--1 left-[-8%] top-[8%] h-[min(22rem,48vw)] w-[min(26rem,55vw)] bg-gradient-to-br from-terracotta/35 via-sand/25 to-transparent"
            style={{
              borderRadius: "58% 42% 48% 52% / 46% 54% 46% 54%",
            }}
          />
          <div
            className="hero-float-blob hero-float-blob--2 right-[-5%] top-[32%] h-[min(18rem,42vw)] w-[min(20rem,44vw)] bg-gradient-to-bl from-sage/30 to-creamDeep/50"
            style={{
              borderRadius: "45% 55% 52% 48% / 55% 45% 48% 52%",
            }}
          />
          <div
            className="hero-float-blob hero-float-blob--3 left-[18%] bottom-[12%] h-[min(16rem,38vw)] w-[min(22rem,50vw)] bg-gradient-to-tr from-sand/40 via-terracotta/15 to-transparent"
            style={{
              borderRadius: "52% 48% 45% 55% / 48% 52% 55% 45%",
            }}
          />
          <div
            className="hero-float-blob hero-float-blob--4 right-[12%] bottom-[18%] h-[min(14rem,34vw)] w-[min(18rem,40vw)] bg-gradient-to-tl from-terracotta/25 to-sage/20"
            style={{
              borderRadius: "50% 50% 42% 58% / 54% 46% 50% 50%",
            }}
          />
          <div
            className="hero-float-blob hero-float-blob--5 left-[20%] top-[36%] h-[min(20rem,45vw)] w-[min(24rem,52vw)] bg-gradient-to-b from-creamDeep/70 via-terracotta/12 to-sage/18"
            style={{
              borderRadius: "48% 52% 55% 45% / 52% 48% 45% 55%",
            }}
          />
        </div>

        <div
          className="absolute left-[12%] top-[18%]"
          style={
            reduceMotion
              ? undefined
              : { transform: `translate(${mouse.x}px, ${mouse.y}px)` }
          }
        >
          <div className="hero-blob-breathe h-[min(28rem,50vw)] w-[min(28rem,50vw)] rounded-full bg-gradient-to-br from-terracotta/15 to-sand/30 blur-3xl" />
        </div>

        <div
          className="absolute bottom-[12%] right-[8%]"
          style={
            reduceMotion
              ? undefined
              : {
                  transform: `translate(${-mouse.x * 0.8}px, ${-mouse.y * 0.8}px)`,
                }
          }
        >
          <div className="hero-blob-breathe-slow h-[min(24rem,45vw)] w-[min(24rem,45vw)] rounded-full bg-gradient-to-tr from-sage/20 to-creamDeep blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(43,37,32,0.07) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-20 md:pb-28 md:pt-24">
        <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.35em] text-inkFaint md:mb-9">
          Graphic design &amp; marketing
        </p>

        <div className="text-center">
          <h1 className="font-display text-[clamp(2.6rem,7.5vw,5.25rem)] font-medium leading-[0.95] tracking-tight text-ink">
            <span className="block">Raquel</span>
            <span className="block text-terracottaDeep">Quirós Delgado</span>
          </h1>
        </div>

        <p className="mx-auto mt-7 max-w-xl text-center text-lg leading-relaxed text-inkMuted md:mt-8 md:text-xl">
          Brand identity, illustration, and marketing strategy, designed with intention for teams who value clarity, warmth, and intentional visuals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 md:mt-11">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-ink px-10 py-3.5 text-sm font-medium text-paper shadow-sm transition-transform hover:bg-terracottaDeep active:scale-[0.98] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/80 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-paper/60 px-10 py-3.5 text-sm font-medium text-ink backdrop-blur-sm transition-colors hover:border-terracotta/40 hover:text-terracottaDeep active:scale-[0.98] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/80 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Get in touch
          </a>
        </div>

        <div
          className="hero-scroll-wrap absolute bottom-9 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden
        >
          <div className="flex h-11 w-7 items-start justify-center rounded-full border border-ink/20 pt-2">
            <span className="hero-scroll-dot block h-2 w-1 rounded-full bg-terracotta" />
          </div>
        </div>
      </div>
    </section>
  );
}
