"use client";

import type { CaseStudyProject } from "./types";
import WeddingInvitationProcessSection from "./WeddingInvitationProcessSection";

interface WeddingInvitationLayoutProps {
  project: CaseStudyProject;
}

export default function WeddingInvitationLayout({ project }: WeddingInvitationLayoutProps) {
  return (
    <main className="relative w-full" style={{ backgroundColor: "transparent" }}>
      {/* HERO */}
      <section className="-mx-4 -mt-4 w-full mb-8 md:mb-12 md:-mx-6 md:-mt-6">
        <div className="relative w-full h-[38vh] md:h-[46vh] overflow-hidden">
          <img
            src="/projects/invitation/invitation-mock-up.png"
            alt="Wedding invitation print mock-up"
            className="absolute inset-0 w-full h-full object-cover rounded-none border-0"
            loading="eager"
          />
        </div>
      </section>

      <WeddingInvitationProcessSection />
    </main>
  );
}
