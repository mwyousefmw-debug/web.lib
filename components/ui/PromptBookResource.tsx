import { Download, BookOpen } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { promptBook } from "@/content/prompt-book";
import { cn, focusRing } from "@/lib/utils";

interface PromptBookResourceProps {
  label: string;
  variant?: "card" | "inline";
  className?: string;
}

export function PromptBookResource({ label, variant = "card", className }: PromptBookResourceProps) {
  if (variant === "inline") {
    return (
      <a
        href={promptBook.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-xl",
          "bg-muted/50 text-foreground border border-border/50",
          "hover:border-primary/30 hover:text-primary",
          "font-medium text-sm transition-all duration-200",
          focusRing,
          className
        )}
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <GlowCard
      className={cn(
        "p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-start",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
        <BookOpen className="w-7 h-7 text-primary" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-lg text-foreground mb-1">{promptBook.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{promptBook.description}</p>
      </div>
      <a
        href={promptBook.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-3 rounded-xl flex-shrink-0",
          "bg-primary text-black hover:bg-primary/90 hover:shadow-glow-sm",
          "font-medium text-sm transition-all duration-200",
          focusRing
        )}
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        {label}
      </a>
    </GlowCard>
  );
}
