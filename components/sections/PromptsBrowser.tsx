"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { SearchX } from "lucide-react";
import { PromptCard } from "@/components/cards/PromptCard";
import { PromptSearchBar } from "@/components/sections/PromptSearchBar";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { FilterChips } from "@/components/ui/FilterChips";
import { Pagination } from "@/components/ui/Pagination";
import { prompts as allPrompts, getAllPromptCategories, getAllAiModels } from "@/content/prompts";
import { cn, focusRing } from "@/lib/utils";
import type { Prompt } from "@/types";

const PAGE_SIZE = 12;

function toPageNumber(value: string | null): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 1;
}

function toTitleCase(value: string): string {
  return value.replace(/-/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());
}

interface PromptsBrowserProps {
  /** Prompt pool to browse. Defaults to the full library. */
  prompts?: Prompt[];
}

export function PromptsBrowser({ prompts = allPrompts }: PromptsBrowserProps) {
  const t = useTranslations("prompts");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const [category, setCategory] = useState(() => searchParams.get("category") ?? "all");
  const [model, setModel] = useState(() => searchParams.get("model") ?? "all");
  const [page, setPage] = useState(() => toPageNumber(searchParams.get("page")));

  const categoryOptions = useMemo(
    () => [
      { value: "all", label: t("filter.all") },
      ...getAllPromptCategories().map((c) => ({ value: c, label: toTitleCase(c) })),
    ],
    [t]
  );

  const modelOptions = useMemo(
    () => [
      { value: "all", label: t("filter.all") },
      ...getAllAiModels().map((m) => ({ value: m, label: m })),
    ],
    [t]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return prompts.filter((p) => {
      const title = locale === "ar" ? p.titleAr : p.title;
      const description = locale === "ar" ? p.descriptionAr : p.description;
      const matchesQuery =
        !q ||
        title.toLowerCase().includes(q) ||
        description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchesCategory = category === "all" || p.category === category;
      const matchesModel = model === "all" || p.aiModels.includes(model);
      return matchesQuery && matchesCategory && matchesModel;
    });
  }, [prompts, query, category, model, locale]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const paged = useMemo(
    () => filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filtered, currentPage]
  );

  // Keep the URL in sync with the current view so refreshing preserves it.
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "all") params.set("category", category);
    if (model !== "all") params.set("model", model);
    if (currentPage !== 1) params.set("page", String(currentPage));
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [query, category, model, currentPage, pathname, router]);

  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    setPage(1);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setCategory(value);
    setPage(1);
  }, []);

  const handleModelChange = useCallback((value: string) => {
    setModel(value);
    setPage(1);
  }, []);

  const handleClearFilters = useCallback(() => {
    setQuery("");
    setCategory("all");
    setModel("all");
    setPage(1);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="sr-only">{t("filter.heading")}</h2>
      <PromptSearchBar
        value={query}
        onChange={handleSearchChange}
        placeholder={t("search.placeholder")}
      />

      <div className="flex flex-col gap-3">
        <FilterChips options={categoryOptions} active={category} onChange={handleCategoryChange} />
        <FilterChips options={modelOptions} active={model} onChange={handleModelChange} />
      </div>

      <p className="text-sm text-muted-foreground">
        {t("filter.showing", { shown: filtered.length, total: prompts.length })}
      </p>

      {paged.length > 0 ? (
        <>
          <StaggerContainer
            key={`${category}-${model}-${query}-${currentPage}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerChildren={0.05}
            whileInView={false}
          >
            {paged.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </StaggerContainer>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
            prevLabel={t("pagination.prev")}
            nextLabel={t("pagination.next")}
            pageLabel={(p) => t("pagination.page", { page: p })}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <SearchX className="w-10 h-10 text-primary/60" aria-hidden="true" />
          </div>
          <div>
            <p className="font-display font-semibold text-xl text-foreground mb-2">
              {t("empty.title")}
            </p>
            <p className="text-muted-foreground">{t("empty.subtitle")}</p>
          </div>
          <button
            type="button"
            onClick={handleClearFilters}
            className={cn(
              "px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black font-medium text-sm transition-all duration-200",
              focusRing
            )}
          >
            {t("empty.clearFilters")}
          </button>
        </div>
      )}
    </div>
  );
}
