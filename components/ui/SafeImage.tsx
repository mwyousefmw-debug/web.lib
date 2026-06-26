"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  /** Custom React node to render when the image fails to load. */
  fallback?: React.ReactNode;
};

/**
 * Drop-in replacement for next/image that renders a branded gradient
 * placeholder when the source image is missing or fails to load.
 * Designed primarily for fill-mode containers (position: relative).
 */
export function SafeImage({ className, fallback, alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    if (fallback) return <>{fallback}</>;

    return (
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          "bg-gradient-to-br from-muted/60 to-muted/30",
          className
        )}
        aria-label={alt}
        role="img"
      >
        <ImageOff className="w-8 h-8 text-muted-foreground/20" />
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

/** Branded WL monogram — used as a logo fallback when logo.jpg is missing. */
export function LogoFallback({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textSize = size === "sm" ? "text-[10px]" : size === "lg" ? "text-base" : "text-xs";
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
      <span className={cn("font-display font-extrabold text-primary tracking-tight", textSize)}>
        WL
      </span>
    </div>
  );
}
