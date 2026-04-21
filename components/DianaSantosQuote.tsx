"use client";

/** Slim quote band between hero and projects — static markup so copy always paints (no opacity animation). */
export default function DianaSantosQuote() {
  return (
    <section
      aria-label="Quote"
      className="relative z-[1] border-b border-ink/5 bg-cream px-6 py-4 md:py-5"
    >
      <div className="mx-auto max-w-2xl text-center">
        <blockquote className="font-display text-base font-medium leading-relaxed text-ink md:text-lg">
          “Creativity is nothing but the way to solve new problems.”
        </blockquote>
        <cite className="mt-2 block text-xs font-medium not-italic text-inkMuted md:text-sm">
          — Diana Santos
        </cite>
      </div>
    </section>
  );
}
