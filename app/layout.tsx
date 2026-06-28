import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WebLib — Modern Web Development",
    template: "%s | WebLib",
  },
  description:
    "WebLib is a modern software company specialized in designing and developing high-quality websites, web applications, dashboards, and UI/UX solutions.",
};

// suppressHydrationWarning on <html> lets next-themes toggle the dark class
// without a React hydration warning (class differs between server and client).
// The locale layout sets lang/dir via LocaleHtmlUpdater after hydration.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} ${cairo.variable} font-sans bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}