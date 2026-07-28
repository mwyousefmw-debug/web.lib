"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

interface ShareButtonProps {
  title: string;
  text?: string;
  url: string;
  label: string;
  sharedLabel: string;
  copiedLabel: string;
  className?: string;
}

export function ShareButton({
  title,
  text,
  url,
  label,
  sharedLabel,
  copiedLabel,
  className,
}: ShareButtonProps) {
  const [status, setStatus] = useState<"idle" | "shared" | "copied">("idle");

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setStatus("shared");
        setTimeout(() => setStatus("idle"), 2000);
      } catch {
        // User cancelled the native share sheet, or it failed — no feedback needed.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      // Clipboard unavailable/denied — fail silently rather than claim success.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={status === "idle" ? label : status === "shared" ? sharedLabel : copiedLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-4 py-2 rounded-xl",
        "font-medium text-sm transition-all duration-200",
        status === "idle"
          ? "bg-muted/50 text-foreground border border-border/50 hover:border-primary/30 hover:text-primary"
          : "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20",
        focusRing,
        className
      )}
    >
      {status === "idle" && (
        <>
          <Share2 className="w-4 h-4" aria-hidden="true" />
          {label}
        </>
      )}
      {status === "shared" && (
        <>
          <Check className="w-4 h-4" aria-hidden="true" />
          {sharedLabel}
        </>
      )}
      {status === "copied" && (
        <>
          <Check className="w-4 h-4" aria-hidden="true" />
          {copiedLabel}
        </>
      )}
    </button>
  );
}
