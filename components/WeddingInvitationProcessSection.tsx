"use client";

// Wedding Invitation — Process strip + narrative
// Files: public/projects/invitation/invite-part1.png, invite-part2.png, invitation-mock-up.png (lowercase)

type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

const slug = "invitation";
const weddingInviteMedia: MediaItem[] = [
  {
    src: `/projects/${slug}/invite-part1.png`,
    alt: "Watercolour base wash — siren palette exploration",
    caption:
      "01 — Hand-painted watercolour base to set mood, palette, and atmosphere.",
  },
  {
    src: `/projects/${slug}/invite-part2.png`,
    alt: "Digital ocean elements added around the watercolour base",
    caption:
      "02 — Ocean linework added in Procreate: thin, elegant strokes + layered transparencies.",
  },
  {
    src: `/projects/${slug}/invite-part3-optimized.jpg`,
    alt: "Invite-part3.png",
    caption:
      "03 — Final invitation: print mock-up showing the finished piece in context.",
  },
];

export default function WeddingInvitationProcessSection() {
  return (
    <section
      className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Title */}
      <div className="mb-8">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-2 leading-tight">
          Wedding Invitation
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Bespoke Watercolour & Illustration Invitation Design
        </p>
      </div>

      {/* Intro (same style as Caribbean Paradise intro) */}
      <div className="mb-8 md:mb-12">
        <div className="max-w-[720px] mx-auto text-base text-white/90 leading-relaxed">
          <p>
            This project was approached as a commissioned wedding invitation design, built around
            a siren-inspired theme the bride envisioned: elegant, ocean-rooted, and artful —
            avoiding cliché while preserving refinement.
          </p>
          <p className="mt-4">
            The intention was to create an invitation that felt personal and handcrafted, yet
            polished and timeless.
          </p>
        </div>
      </div>

      {/* TEXT BLOCKS */}
      <div className="space-y-8">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
            Concept & Artistic Direction
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            The process began with a hand-painted watercolour base, allowing
            colour and texture to emerge organically.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            The palette was carefully chosen to align with the event&apos;s
            visual direction — soft blues and greens that evoke depth, calm, and
            fluidity, without overwhelming the composition.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            This analogue foundation ensured the final piece carried emotional
            authenticity rather than purely digital precision.
          </p>
        </div>

        {/* PROCESS STRIP */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {weddingInviteMedia.map((item) => (
            <figure key={item.src} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-sm backdrop-blur-md">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
              {item.caption && (
                <figcaption className="mt-3 text-xs leading-relaxed text-white/80">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
            Digital Illustration & Composition
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            The watercolour was then digitised and developed further in Procreate.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Delicate, linear ocean elements were introduced — drawn with
            intentionally thin linework to maintain elegance and restraint.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Transparency and opacity variations were used to create depth without
            visual heaviness, allowing the illustration to feel immersive while
            preserving balance.
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
            Typography & Final Invitation System
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            The final stage focused on typographic composition and hierarchy.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Careful attention was given to spacing, contrast, and readability,
            ensuring the invitation functioned clearly while maintaining its
            artistic integrity.
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <h2 className="font-display text-3xl md:text-4xl font-semibold italic text-white mb-4">
            Outcome
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            The result is an invitation that exists equally as:
          </p>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-white/85 list-disc list-inside">
            <li>A functional communication piece</li>
            <li>A personal artwork</li>
            <li>A cohesive visual statement aligned with the event&apos;s atmosphere</li>
          </ul>
        </div>

        <p className="mt-12 text-lg md:text-xl font-light italic text-white/90 leading-relaxed">
          It highlights my ability to translate emotional direction into visual form —
          creating work that feels intentional, refined, and deeply personal.
        </p>
      </div>
    </section>
  );
}
