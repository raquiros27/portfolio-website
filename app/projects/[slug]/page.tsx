"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import type { CaseStudyProject } from "@/components/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caribbeanParadiseData } from "@/data/caribbeanParadise";
import { ayaData } from "@/data/aya";

// Project data - in a real app, this would come from a CMS or database
const projects: Record<string, CaseStudyProject> = {
  "caribbean-paradise": caribbeanParadiseData,
  "aya": ayaData,
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <a href="/#projects" className="text-white/80 hover:text-white underline">
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen" style={{ backgroundColor: 'transparent' }}>
      <Header />
      <div className="pt-24 pb-12">
        {/* Back Button */}
        <div className="container mx-auto px-6 mb-8">
          <Link href="/#projects">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors"
              whileHover={{ x: -4 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </motion.button>
          </Link>
        </div>
        <CaseStudyLayout project={project} />
      </div>
      <Footer />
    </main>
  );
}

