import type { CaseStudyProject } from "@/components/types";

export const weddingInvitationData: CaseStudyProject = {
  title: "Wedding Invitation",
  subtitle: "Bespoke Watercolour & Illustration Invitation Design",
  year: "2025",
  role: "Illustrator & Designer",
  projectType: "Illustration & Print, Invitation Design",
  designDecisions:
    "An invitation designed as both artwork and announcement , translating atmosphere, emotion, and story into a physical object. Hand-painted watercolour base, digitised and refined in Procreate with delicate linework, then composed into a final layout integrating illustration and typography.",
  tools: ["Procreate", "Adobe Illustrator", "Watercolour"],
  images: [
    { src: "/projects/invitation/invite-part1.png", alt: "Hand-painted watercolour base", caption: "Hand-painted watercolour base establishing palette and tone.", priority: true },
    { src: "/projects/invitation/invite-part2.png", alt: "Digitised watercolour with ocean linework", caption: "Digitised and refined in Procreate with layered transparencies." },
    { src: "/projects/invitation/invitation-mock-up.png", alt: "Invitation print mock-up", caption: "Final invitation , print mock-up." },
  ],
};
