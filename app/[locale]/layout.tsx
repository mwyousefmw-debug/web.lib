import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LocaleHtmlUpdater } from "@/components/layout/LocaleHtmlUpdater";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

// ── Types ──────────────────────────────────────────────────────────────────────
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// ── Static params (SSG) ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ── Page metadata ──────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({ locale });
}

// ── Layout ────────────────────────────────────────────────────────────────────
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  // Organization structured data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/projects/logo.jpg`,
    email: siteConfig.email || undefined,
    telephone: siteConfig.phone || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tripoli",
      addressCountry: "LY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone || undefined,
      email: siteConfig.email || undefined,
      contactType: "customer support",
      areaServed: "LY",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.github,
      siteConfig.social.tiktok,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ].filter(Boolean),
  };

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {/* Structured data in head via script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sets html[lang] and html[dir] after hydration for accessibility/SEO.
          The wrapper div below carries dir so Tailwind RTL works from first paint. */}
      <LocaleHtmlUpdater locale={locale} />

      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange={false}
      >
        {/* dir here makes [dir="rtl"] CSS selectors work server-side.
            lang here satisfies semantics for this subtree. */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          lang={locale}
          className={`flex flex-col min-h-screen${isRTL ? " font-arabic" : ""}`}
        >
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
