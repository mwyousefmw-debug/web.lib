"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn, focusRing } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label: string;
  copiedLabel: string;
  onCopied?: () => void;
  className?: string;
}

export function CopyButton({ text, label, copiedLabel, onCopied, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return; // Clipboard unavailable/denied — fail silently rather than claim success.
    }
    setCopied(true);
    onCopied?.();
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-5 py-3 rounded-xl",
        "font-medium text-sm transition-all duration-200",
        copied
          ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20"
          : "bg-primary text-black hover:bg-primary/90 hover:shadow-glow-sm",
        focusRing,
        className
      )}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" aria-hidden="true" />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" aria-hidden="true" />
          {label}
        </>
      )}
    </button>
  );
}
