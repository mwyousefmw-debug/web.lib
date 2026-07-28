"use client";

import { useCallback, useEffect, useState } from "react";
import { readStorage, writeStorage } from "@/lib/storage";

const HISTORY_KEY = "weblib:prompt-copy-history";
const MAX_HISTORY = 20;

export interface CopyHistoryEntry {
  id: string;
  slug: string;
  title: string;
  copiedAt: string;
}

export function useCopyHistory() {
  const [history, setHistory] = useState<CopyHistoryEntry[]>([]);

  useEffect(() => {
    setHistory(readStorage<CopyHistoryEntry[]>(HISTORY_KEY, []));
  }, []);

  const addToHistory = useCallback((entry: Omit<CopyHistoryEntry, "copiedAt">) => {
    setHistory((prev) => {
      const next = [
        { ...entry, copiedAt: new Date().toISOString() },
        ...prev.filter((h) => h.id !== entry.id),
      ].slice(0, MAX_HISTORY);
      writeStorage(HISTORY_KEY, next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    writeStorage(HISTORY_KEY, []);
  }, []);

  return { history, addToHistory, clearHistory };
}
