"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  promptId: string;
  favoriteLabel: string;
  unfavoriteLabel: string;
  className?: string;
}

export function FavoriteButton({
  promptId,
  favoriteLabel,
  unfavoriteLabel,
  className,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(promptId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(promptId);
      }}
      aria-pressed={active}
      aria-label={active ? unfavoriteLabel : favoriteLabel}
      title={active ? unfavoriteLabel : favoriteLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-full border transition-all duration-200",
        active
          ? "bg-primary/10 text-primary border-primary/20"
          : "bg-muted/50 text-muted-foreground border-border/50 hover:text-primary hover:border-primary/30",
        className
      )}
    >
      <Heart className={cn("w-4 h-4", active && "fill-current")} />
    </button>
  );
}
