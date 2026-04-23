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
      <section className="w-full mb-8 md:mb-12">
        <div className="relative w-full h-[38vh] md:h-[46vh] overflow-hidden">
          <img
            src="/projects/invitation/invite-part3-optimized.jpg"
            alt="Wedding invitation print mock-up"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none border-0"
            loading="eager"
          />
        </div>
      </section>

      <WeddingInvitationProcessSection
        metadata={{
          year: project.year,
          location: project.location,
          role: project.role,
          projectType: project.projectType,
        }}
      />
    </main>
  );
}
