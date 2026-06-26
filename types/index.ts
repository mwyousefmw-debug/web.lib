// ─── Locale ───────────────────────────────────────────────────────────────────
export type Locale = "en" | "ar";

// ─── Project ──────────────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  name: string;
  nameAr: string;
  client: string;
  clientAr: string;
  description: string;
  descriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  category: ProjectCategory;
  technologies: string[];
  coverImage: string;
  desktopScreenshots: string[];
  mobileScreenshots: string[];
  liveUrl: string;
  featured: boolean;
  completedAt: string;
}

export type ProjectCategory =
  | "web-app"
  | "dashboard"
  | "landing-page"
  | "e-commerce"
  | "business-system"
  | "ui-ux";

// ─── Tutorial ─────────────────────────────────────────────────────────────────
export interface Tutorial {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: TutorialCategory;
  difficulty: TutorialDifficulty;
  thumbnail: string;
  downloadUrl: string;
  publishDate: string;
  featured: boolean;
  tags: string[];
}

export type TutorialCategory =
  | "react"
  | "next-js"
  | "typescript"
  | "tailwind"
  | "css"
  | "javascript"
  | "ui-ux"
  | "framer-motion"
  | "general";

export type TutorialDifficulty = "beginner" | "intermediate" | "advanced";

// ─── Service ──────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  company: string;
  companyAr: string;
  quote: string;
  quoteAr: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  projectSlug?: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  category: FAQCategory;
}

export type FAQCategory =
  | "general"
  | "services"
  | "pricing"
  | "timeline"
  | "technical"
  | "support";

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  href: string;
  labelKey: string;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
}

// ─── Stat ─────────────────────────────────────────────────────────────────────
export interface StatItem {
  value: number;
  suffix: string;
  labelKey: string;
  icon: string;
}
