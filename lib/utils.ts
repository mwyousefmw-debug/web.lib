import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string, locale: string = "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "ar" ? "ar-LY" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + "...";
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "beginner":
      return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "intermediate":
      return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    case "advanced":
      return "text-rose-400 bg-rose-400/10 border-rose-400/20";
    default:
      return "text-primary bg-primary/10 border-primary/20";
  }
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "web-app": "text-blue-400 bg-blue-400/10 border-blue-400/20",
    "dashboard": "text-violet-400 bg-violet-400/10 border-violet-400/20",
    "landing-page": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    "e-commerce": "text-amber-400 bg-amber-400/10 border-amber-400/20",
    "business-system": "text-rose-400 bg-rose-400/10 border-rose-400/20",
    "ui-ux": "text-primary bg-primary/10 border-primary/20",
  };
  return colors[category] ?? "text-primary bg-primary/10 border-primary/20";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
