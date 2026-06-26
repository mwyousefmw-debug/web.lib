import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// Middleware handles locale detection from Accept-Language.
// This page is only hit if middleware skips the root (e.g. static export edge cases).
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
