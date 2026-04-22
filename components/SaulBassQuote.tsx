"use client";

/** Slim quote band between experience and process. */
export default function SaulBassQuote() {
  return (
    <section
      aria-label="Quote"
      className="relative z-[1] bg-sand/30 px-6 py-4 md:py-5"
    >
      <div className="mx-auto max-w-2xl text-center">
        <blockquote className="font-display text-base font-medium leading-relaxed text-terracottaDeep md:text-lg">
          “Logos are a graphic extension of the internal realities of a company”
        </blockquote>
        <cite className="mt-2 block text-xs font-medium not-italic text-terracottaDeep/90 md:text-sm">
          — Saul Bass
        </cite>
      </div>
    </section>
  );
}
