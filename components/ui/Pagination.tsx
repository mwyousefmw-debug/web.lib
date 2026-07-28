import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  prevLabel: string;
  nextLabel: string;
  pageLabel: (page: number) => string;
}

function PaginationImpl({
  currentPage,
  totalPages,
  onPageChange,
  prevLabel,
  nextLabel,
  pageLabel,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center flex-wrap gap-2 pt-4"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={prevLabel}
        className={cn(
          "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium border border-border/50 text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all",
          focusRing
        )}
      >
        <ChevronLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
        {prevLabel}
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          aria-current={p === currentPage ? "page" : undefined}
          aria-label={pageLabel(p)}
          className={cn(
            "w-9 h-9 rounded-full text-sm font-medium transition-all duration-200",
            p === currentPage
              ? "bg-primary text-black"
              : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/50",
            focusRing
          )}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label={nextLabel}
        className={cn(
          "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium border border-border/50 text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all",
          focusRing
        )}
      >
        {nextLabel}
        <ChevronRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
      </button>
    </nav>
  );
}

export const Pagination = memo(PaginationImpl);
