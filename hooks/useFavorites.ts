"use client";

import { useCallback, useEffect, useState } from "react";
import { readStorage, writeStorage } from "@/lib/storage";

const FAVORITES_KEY = "weblib:prompt-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(readStorage<string[]>(FAVORITES_KEY, []));
  }, []);

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      writeStorage(FAVORITES_KEY, next);
      return next;
    });
  }, []);

  return { favorites, isFavorite, toggleFavorite };
}
