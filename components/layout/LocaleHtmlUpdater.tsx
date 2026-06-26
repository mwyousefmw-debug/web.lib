"use client";

import { useEffect } from "react";

// Sets lang and dir on <html> after hydration so screen readers and SEO
// bots see the correct locale. The root layout uses suppressHydrationWarning
// so React does not complain about the attribute change.
export function LocaleHtmlUpdater({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  return null;
}
