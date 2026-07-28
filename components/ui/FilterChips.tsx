import { memo } from "react";
import { cn, focusRing } from "@/lib/utils";

interface FilterChipsProps {
  options: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

function FilterChipsImpl({ options, active, onChange, className }: FilterChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={active === option.value}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
            active === option.value
              ? "bg-primary text-black"
              : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/50",
            focusRing
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export const FilterChips = memo(FilterChipsImpl);
