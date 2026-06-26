import type { Tutorial } from "@/types";

/**
 * Tutorials library — add each tutorial here as download URLs are provided.
 * The downloadUrl field points directly to the file (Google Drive, Dropbox,
 * GitHub Releases, Cloudinary, etc.) — the Download button opens it directly.
 */
export const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Essential English Vocabulary PDF",
    titleAr: "ملف أهم الكلمات الإنجليزية",
    description:
      "A free PDF containing essential English vocabulary for everyday conversations and learning. Perfect for beginners who want to improve their vocabulary with commonly used words.",
    descriptionAr:
      "ملف PDF مجاني يحتوي على مجموعة من أهم الكلمات الإنجليزية المستخدمة في الحياة اليومية، مناسب للمبتدئين والراغبين في تطوير مفرداتهم.",
    category: "general",
    difficulty: "beginner",
    thumbnail: "/images/projects/english-vocabulary.jpg",
    downloadUrl:
      "https://docs.google.com/spreadsheets/d/1XuNzmnTiOAo5ht9IGg1YqKgFGdVEcTbq/edit?usp=drivesdk&ouid=110133456513644490303&rtpof=true&sd=true",
    publishDate: "2026-06",
    featured: true,
    tags: ["English", "Vocabulary", "PDF", "Learning"],
  },
];

export const featuredTutorials = tutorials.filter((t) => t.featured);

export function getTutorialById(id: string): Tutorial | undefined {
  return tutorials.find((t) => t.id === id);
}

export function getTutorialsByCategory(category: string): Tutorial[] {
  return tutorials.filter((t) => t.category === category);
}

export function getTutorialsByDifficulty(difficulty: string): Tutorial[] {
  return tutorials.filter((t) => t.difficulty === difficulty);
}
