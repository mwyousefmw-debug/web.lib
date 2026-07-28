"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

export interface AIProvider {
  id: string;
  name: string;
  actionLabel: string;
  url: string;
}

interface OpenInAIProps {
  text: string;
  providers: AIProvider[];
  successMessage: (providerName: string) => string;
  blockedMessage: (providerName: string) => string;
  onCopied?: () => void;
  className?: string;
}

export function OpenInAI({
  text,
  providers,
  successMessage,
  blockedMessage,
  onCopied,
  className,
}: OpenInAIProps) {
  const [feedback, setFeedback] = useState<{ provider: string; blocked: boolean } | null>(null);

  async function handleOpen(provider: AIProvider) {
    let copied = true;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      copied = false;
    }

    const win = window.open(provider.url, "_blank", "noopener,noreferrer");

    if (copied) onCopied?.();
    setFeedback({ provider: provider.name, blocked: !win });
    setTimeout(() => setFeedback(null), 2500);
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-wrap gap-2">
        {providers.map((provider) => (
          <button
            key={provider.id}
            type="button"
            onClick={() => handleOpen(provider)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 text-foreground border border-border/50 hover:border-primary/30 hover:text-primary font-medium text-sm transition-all duration-200",
              focusRing
            )}
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            {provider.actionLabel}
          </button>
        ))}
      </div>
      {feedback && (
        <p
          className={cn(
            "text-xs",
            feedback.blocked
              ? "text-amber-500 dark:text-amber-400"
              : "text-emerald-500 dark:text-emerald-400"
          )}
        >
          {feedback.blocked ? blockedMessage(feedback.provider) : successMessage(feedback.provider)}
        </p>
      )}
    </div>
  );
}
