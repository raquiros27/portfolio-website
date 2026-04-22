"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHref, setActiveHref] = useState("#work");
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const navRailRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const indicatorHref = hoveredHref ?? activeHref;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? window.scrollY / totalScrollable : 0;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
      const midpoint = window.innerHeight * 0.38;
      let nextActive: string | null = null;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.href.slice(1));
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
          nextActive = item.href;
          break;
        }
      }

      if (nextActive) {
        setActiveHref((prev) => (prev === nextActive ? prev : nextActive));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const rail = navRailRef.current;
      const target = indicatorHref ? linkRefs.current[indicatorHref] : null;
      if (!rail || !target) {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }
      const railRect = rail.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      setIndicatorStyle({
        left: targetRect.left - railRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [indicatorHref]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-ink/5 bg-paper/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-terracotta/85 via-sage/60 to-transparent transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden
      />
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-xl font-semibold tracking-tight text-ink transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:text-2xl"
          >
            RQD
          </a>

          <div ref={navRailRef} className="relative hidden items-center gap-10 md:flex">
            <div
              className="pointer-events-none absolute -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-terracotta/95 via-terracotta/70 to-sage/65 transition-all duration-300"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
              aria-hidden
            />
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                ref={(el) => {
                  linkRefs.current[item.href] = el;
                }}
                className={`rounded-md px-1 py-0.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                  activeHref === item.href ? "text-ink" : "text-inkMuted hover:text-ink"
                }`}
                onMouseEnter={() => setHoveredHref(item.href)}
                onFocus={() => setHoveredHref(item.href)}
                onMouseLeave={() => setHoveredHref(null)}
                onBlur={() => setHoveredHref(null)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="flex h-6 w-6 flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-full origin-center bg-current transition-transform ${
                  isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full origin-center bg-current transition-transform ${
                  isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            isMobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 border-t border-ink/5 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md py-2.5 text-sm font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
