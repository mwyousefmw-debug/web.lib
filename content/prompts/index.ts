import type { Prompt, PromptCategory } from "@/types";
import { frontendPrompts } from "./front-end";
import { backendPrompts } from "./back-end";
import { debuggingPrompts } from "./debugging";
import { designPrompts } from "./design";
import { careerPrompts } from "./career";

/**
 * Combined Prompt Library content — sourced from
 * docs/WebLib-100-AI-Prompts-Every-Programmer.pdf
 */
export const prompts: Prompt[] = [
  ...frontendPrompts,
  ...backendPrompts,
  ...debuggingPrompts,
  ...designPrompts,
  ...careerPrompts,
];

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((p) => p.id === id);
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((p) => p.slug === slug);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter((p) => p.category === category);
}

export function getAllPromptSlugs(): string[] {
  return prompts.map((p) => p.slug);
}

export function getAllPromptCategories(): PromptCategory[] {
  return Array.from(new Set(prompts.map((p) => p.category)));
}

export function getAllAiModels(): string[] {
  return Array.from(new Set(prompts.flatMap((p) => p.aiModels)));
}
