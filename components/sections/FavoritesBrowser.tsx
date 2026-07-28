"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PromptsBrowser } from "@/components/sections/PromptsBrowser";
import { useFavorites } from "@/hooks/useFavorites";
import { prompts } from "@/content/prompts";
import { cn, focusRing } from "@/lib/utils";

export function FavoritesBrowser() {
  const t = useTranslations("prompts");
  const { favorites } = useFavorites();

  const favoritePrompts = useMemo(
    () => prompts.filter((p) => favorites.includes(p.id)),
    [favorites]
  );

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Heart className="w-10 h-10 text-primary/60" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display font-semibold text-xl text-foreground mb-2">
            {t("favorites.empty.title")}
          </p>
          <p className="text-muted-foreground">{t("favorites.empty.subtitle")}</p>
        </div>
        <Link
          href="/tutorials/prompts"
          className={cn(
            "px-5 py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black font-medium text-sm transition-all duration-200",
            focusRing
          )}
        >
          {t("favorites.empty.cta")}
        </Link>
      </div>
    );
  }

  return <PromptsBrowser prompts={favoritePrompts} />;
}
