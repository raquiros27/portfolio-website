"use client";

import { useId, useRef, useEffect, useState, type ReactNode } from "react";

/** Matches Tailwind `rounded-2xl` (1rem) — keep in sync with wrapper + inner classes. */
const BOX_RADIUS_PX = 16;

type Props = {
  children: ReactNode;
  className?: string;
  /** Extra classes on the inner content wrapper (background, padding, etc.) */
  innerClassName?: string;
};

/**
 * Thin stroke on the real rounded-rect edge. ViewBox matches box pixels so corners stay
 * circular (no non-uniform stretch) and stroke reads even on all sides.
 */
export default function PremiumBoxFrame({
  children,
  className = "",
  innerClassName = "",
}: Props) {
  const uid = useId().replace(/:/g, "");
  const gid = `pf-grad-${uid}`;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = wrapRef.current;
    if (!el) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      const nw = r.width;
      const nh = r.height;
      if (!Number.isFinite(nw) || !Number.isFinite(nh) || nw <= 0 || nh <= 0) {
        return;
      }
      setBox((prev) =>
        Math.abs(prev.w - nw) < 0.5 && Math.abs(prev.h - nh) < 0.5
          ? prev
          : { w: nw, h: nh }
      );
    };

    const scheduleMeasure = () => requestAnimationFrame(measure);

    scheduleMeasure();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleMeasure)
        : null;
    ro?.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = wrapRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setDrawn(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setDrawn(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const w = box.w;
  const h = box.h;
  const sw = 0.85;
  const x = sw / 2;
  const y = sw / 2;
  const rw = Math.max(0, w - sw);
  const rh = Math.max(0, h - sw);
  const rMax = Math.max(0, Math.min(rw, rh) / 2);
  const rx = Math.min(Math.max(0, BOX_RADIUS_PX - sw / 2), rMax);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <div className={`relative z-[1] rounded-2xl ${innerClassName}`}>
        {children}
      </div>
      {w > 0 && h > 0 && (
        <svg
          viewBox={`0 0 ${w} ${h}`}
          fill="none"
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden rounded-2xl"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id={gid}
              x1="0"
              y1="0"
              x2={w}
              y2={h}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#B86B52" stopOpacity="0.95" />
              <stop offset="42%" stopColor="#7D8B72" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#D4C4B0" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <rect
            x={x}
            y={y}
            width={rw}
            height={rh}
            rx={rx}
            ry={rx}
            stroke={`url(#${gid})`}
            strokeWidth={sw}
            pathLength={100}
            strokeDasharray={100}
            strokeDashoffset={drawn ? 0 : 100}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="premium-frame-stroke"
          />
        </svg>
      )}
    </div>
  );
}
