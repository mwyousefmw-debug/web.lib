"use client";

import { useCallback, useEffect, useState } from "react";
import { readStorage, writeStorage } from "@/lib/storage";

const RECENT_KEY = "weblib:prompt-recently-viewed";
const MAX_RECENT = 10;

export function useRecentlyViewed() {
  const [recentIds, setRecentIds] = useState<string[]>([]);

  useEffect(() => {
    setRecentIds(readStorage<string[]>(RECENT_KEY, []));
  }, []);

  const trackView = useCallback((id: string) => {
    setRecentIds((prev) => {
      if (prev[0] === id) return prev;
      const next = [id, ...prev.filter((r) => r !== id)].slice(0, MAX_RECENT);
      writeStorage(RECENT_KEY, next);
      return next;
    });
  }, []);

  return { recentIds, trackView };
}
