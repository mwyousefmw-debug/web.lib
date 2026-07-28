"use client";

import { useTranslations, useLocale } from "next-intl";
import { History as HistoryIcon, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useCopyHistory } from "@/hooks/useCopyHistory";
import { cn, focusRing } from "@/lib/utils";

export function CopyHistoryList() {
  const t = useTranslations("prompts");
  const locale = useLocale();
  const { history } = useCopyHistory();

  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <HistoryIcon className="w-10 h-10 text-primary/60" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display font-semibold text-xl text-foreground mb-2">
            {t("history.empty.title")}
          </p>
          <p className="text-muted-foreground">{t("history.empty.subtitle")}</p>
        </div>
        <Link
          href="/tutorials/prompts"
          className={cn(
            "px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black font-medium text-sm transition-all duration-200",
            focusRing
          )}
        >
          {t("history.empty.cta")}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
      {history.map((entry) => (
        <div
          key={`${entry.id}-${entry.copiedAt}`}
          className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-border/50 bg-card"
        >
          <div className="min-w-0">
            <p className="font-medium text-foreground truncate">{entry.title}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(entry.copiedAt).toLocaleString(locale === "ar" ? "ar-LY" : "en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          </div>
          <Link
            href={`/tutorials/prompts/${entry.slug}`}
            className={cn(
              "flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black font-medium text-sm transition-all duration-200",
              focusRing
            )}
          >
            {t("history.open")}
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      ))}
    </div>
  );
}
