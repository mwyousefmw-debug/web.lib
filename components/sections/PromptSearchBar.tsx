import { Search } from "lucide-react";

interface PromptSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export function PromptSearchBar({ value, onChange, placeholder }: PromptSearchBarProps) {
  return (
    <div className="relative max-w-xl mx-auto w-full">
      <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full ps-11 pe-4 py-3 rounded-xl border border-border/50 bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:bg-muted/50 transition-all"
      />
    </div>
  );
}
