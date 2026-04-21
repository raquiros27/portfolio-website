export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  priority?: boolean;
}

export interface CaseStudyProject {
  title: string;
  subtitle?: string;
  year?: string;
  location?: string;
  role?: string;
  projectType?: string;
  challenge?: string;
  goal?: string;
  designDecisions?: string;
  businessContext?: string;
  results?: string;
  tools?: string[];
  images: CaseStudyImage[];
}

