import type { Prompt } from "@/types";

// Front-End Development — Prompts 1-20
// Source: docs/WebLib-100-AI-Prompts-Every-Programmer.pdf
export const frontendPrompts: Prompt[] = [
  {
    id: "1",
    slug: "build-a-responsive-landing-page",
    title: "Build a Responsive Landing Page",
    titleAr: "Build a Responsive Landing Page",
    description: "Use this when you need to ship a high-converting marketing or product landing page quickly. It's ideal for freelancers building client sites, indie hackers launching products, or developers who need a polished page without starting from a blank file.",
    descriptionAr: "Use this when you need to ship a high-converting marketing or product landing page quickly. It's ideal for freelancers building client sites, indie hackers launching products, or developers who need a polished page without starting from a blank file.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior front-end engineer specializing in conversion-focused
marketing sites. Build a complete, responsive landing page using
React, Next.js (App Router) and Tailwind CSS.
Product context:
- Product name: [PRODUCT NAME]
- What it does: [ONE-SENTENCE DESCRIPTION]
- Target audience: [WHO IT'S FOR]
- Primary call to action: [E.G. "Start free trial"]
Requirements:
1. Sections in this order: sticky navbar, hero with headline + subhead +
   primary CTA, social proof/logos, 3-column feature grid, how-it-works
   (3 steps), testimonial, pricing teaser, FAQ accordion, footer.
2. Mobile-first and fully responsive (sm, md, lg breakpoints).
3. Semantic HTML5 and accessible (proper headings, alt text, ARIA on the
   accordion, visible focus states, color contrast >= 4.5:1).
4. Use Tailwind only — no external UI libraries. Use a clean, modern
   aesthetic with generous whitespace and a single accent color.
5. Provide reusable components (Navbar, Hero, FeatureCard, etc.) in
   separate code blocks.
6. Include subtle hover/transition effects, no layout shift.
Output the full code, then a short note on where to swap in real content.`,
    promptAr: `You are a senior front-end engineer specializing in conversion-focused
marketing sites. Build a complete, responsive landing page using
React, Next.js (App Router) and Tailwind CSS.
Product context:
- Product name: [PRODUCT NAME]
- What it does: [ONE-SENTENCE DESCRIPTION]
- Target audience: [WHO IT'S FOR]
- Primary call to action: [E.G. "Start free trial"]
Requirements:
1. Sections in this order: sticky navbar, hero with headline + subhead +
   primary CTA, social proof/logos, 3-column feature grid, how-it-works
   (3 steps), testimonial, pricing teaser, FAQ accordion, footer.
2. Mobile-first and fully responsive (sm, md, lg breakpoints).
3. Semantic HTML5 and accessible (proper headings, alt text, ARIA on the
   accordion, visible focus states, color contrast >= 4.5:1).
4. Use Tailwind only — no external UI libraries. Use a clean, modern
   aesthetic with generous whitespace and a single accent color.
5. Provide reusable components (Navbar, Hero, FeatureCard, etc.) in
   separate code blocks.
6. Include subtle hover/transition effects, no layout shift.
Output the full code, then a short note on where to swap in real content.`,
    featured: false,
  },
  {
    id: "2",
    slug: "create-a-reusable-react-component-library",
    title: "Create a Reusable React Component Library",
    titleAr: "Create a Reusable React Component Library",
    description: "Use this when you keep rewriting the same buttons, inputs, and cards across projects and want a consistent, typed, reusable set of UI primitives. Great for teams standardizing their design language or freelancers reusing code between clients.",
    descriptionAr: "Use this when you keep rewriting the same buttons, inputs, and cards across projects and want a consistent, typed, reusable set of UI primitives. Great for teams standardizing their design language or freelancers reusing code between clients.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior React + TypeScript engineer building a small, reusable UI
component library with Tailwind CSS.
Create the following components with full TypeScript types:
[Button, Input, Textarea, Card, Badge, Modal, Spinner]
For EACH component:
1. Use a typed props interface; extend the correct native HTML element
   props (e.g. ButtonHTMLAttributes) so consumers can pass standard props.
2. Support variants and sizes via a clean prop API (e.g. variant:
   "primary" | "secondary" | "ghost"; size: "sm" | "md" | "lg").
3. Use class-variance-authority or a simple cn() helper for class merging;
   show the helper code too.
4. Forward refs where appropriate (forwardRef).
5. Be fully accessible (correct roles, keyboard support, focus management
   for Modal).
Also provide:
- A usage example for each component.
- A short README snippet documenting the props.
Keep the API minimal and predictable. No external UI kits.`,
    promptAr: `Act as a senior React + TypeScript engineer building a small, reusable UI
component library with Tailwind CSS.
Create the following components with full TypeScript types:
[Button, Input, Textarea, Card, Badge, Modal, Spinner]
For EACH component:
1. Use a typed props interface; extend the correct native HTML element
   props (e.g. ButtonHTMLAttributes) so consumers can pass standard props.
2. Support variants and sizes via a clean prop API (e.g. variant:
   "primary" | "secondary" | "ghost"; size: "sm" | "md" | "lg").
3. Use class-variance-authority or a simple cn() helper for class merging;
   show the helper code too.
4. Forward refs where appropriate (forwardRef).
5. Be fully accessible (correct roles, keyboard support, focus management
   for Modal).
Also provide:
- A usage example for each component.
- A short README snippet documenting the props.
Keep the API minimal and predictable. No external UI kits.`,
    featured: false,
  },
  {
    id: "3",
    slug: "build-a-dark-mode-toggle-with-persistence",
    title: "Build a Dark Mode Toggle with Persistence",
    titleAr: "Build a Dark Mode Toggle with Persistence",
    description: "Use this when you need a proper light/dark theme that respects the user's system preference, persists across reloads, and avoids the \"flash of wrong theme.\" Common in dashboards, blogs, and SaaS apps.",
    descriptionAr: "Use this when you need a proper light/dark theme that respects the user's system preference, persists across reloads, and avoids the \"flash of wrong theme.\" Common in dashboards, blogs, and SaaS apps.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a front-end engineer. Implement a complete dark mode system for a
Next.js (App Router) app using Tailwind CSS.
Requirements:
1. Three modes: "light", "dark", and "system" (follows OS preference).
2. Persist the user's choice in localStorage and re-apply it on load.
3. Prevent the flash of incorrect theme (FOUC) by setting the theme class
   before first paint — show the inline script or approach needed.
4. Use Tailwind's "class" dark mode strategy.
5. Provide a reusable <ThemeProvider> (React context) and a <ThemeToggle>
   button component with accessible labels and an icon for each state.
6. Expose a useTheme() hook returning { theme, setTheme }.
Explain where each piece goes in the Next.js project structure, and call
out any caveats with server vs client components.`,
    promptAr: `You are a front-end engineer. Implement a complete dark mode system for a
Next.js (App Router) app using Tailwind CSS.
Requirements:
1. Three modes: "light", "dark", and "system" (follows OS preference).
2. Persist the user's choice in localStorage and re-apply it on load.
3. Prevent the flash of incorrect theme (FOUC) by setting the theme class
   before first paint — show the inline script or approach needed.
4. Use Tailwind's "class" dark mode strategy.
5. Provide a reusable <ThemeProvider> (React context) and a <ThemeToggle>
   button component with accessible labels and an icon for each state.
6. Expose a useTheme() hook returning { theme, setTheme }.
Explain where each piece goes in the Next.js project structure, and call
out any caveats with server vs client components.`,
    featured: false,
  },
  {
    id: "4",
    slug: "convert-a-design-mockup-into-react-tailwind",
    title: "Convert a Design Mockup into React + Tailwind",
    titleAr: "Convert a Design Mockup into React + Tailwind",
    description: "Use this when you have a screenshot, Figma export, or written description of a UI and want clean, responsive code from it. Saves hours of manual translation from design to markup.",
    descriptionAr: "Use this when you have a screenshot, Figma export, or written description of a UI and want clean, responsive code from it. Saves hours of manual translation from design to markup.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are an expert at translating designs into pixel-aware, responsive code.
I will describe (or attach) a UI design. Convert it into React + Tailwind CSS.
Design description:
[PASTE DESCRIPTION OR ATTACH IMAGE — include layout, colors, spacing,
fonts, and any interactive elements.]
Requirements:
1. Match the layout, spacing, and visual hierarchy as closely as possible.
2. Use semantic HTML and a mobile-first responsive approach.
3. Break the UI into logical, reusable components.
4. Use Tailwind utility classes only; define any repeated values (colors,
   radii) as comments so I can move them into the Tailwind config.
5. Use placeholder data and clearly mark where real content/props go.
6. Ensure accessibility: alt text, labels, focus states, contrast.
After the code, list any assumptions you made and anything you'd confirm
with the designer.`,
    promptAr: `You are an expert at translating designs into pixel-aware, responsive code.
I will describe (or attach) a UI design. Convert it into React + Tailwind CSS.
Design description:
[PASTE DESCRIPTION OR ATTACH IMAGE — include layout, colors, spacing,
fonts, and any interactive elements.]
Requirements:
1. Match the layout, spacing, and visual hierarchy as closely as possible.
2. Use semantic HTML and a mobile-first responsive approach.
3. Break the UI into logical, reusable components.
4. Use Tailwind utility classes only; define any repeated values (colors,
   radii) as comments so I can move them into the Tailwind config.
5. Use placeholder data and clearly mark where real content/props go.
6. Ensure accessibility: alt text, labels, focus states, contrast.
After the code, list any assumptions you made and anything you'd confirm
with the designer.`,
    featured: false,
  },
  {
    id: "5",
    slug: "build-an-accessible-navigation-menu",
    title: "Build an Accessible Navigation Menu",
    titleAr: "Build an Accessible Navigation Menu",
    description: "Use this when you need a navbar that works for everyone — keyboard users, screen readers, and mobile visitors — including a proper hamburger menu and dropdowns. Accessibility is where most hand-rolled navs fail.",
    descriptionAr: "Use this when you need a navbar that works for everyone — keyboard users, screen readers, and mobile visitors — including a proper hamburger menu and dropdowns. Accessibility is where most hand-rolled navs fail.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an accessibility-focused front-end engineer. Build a responsive,
fully accessible navigation bar in React + Tailwind CSS.
Requirements:
1. Desktop: horizontal nav with one dropdown menu containing sub-links.
2. Mobile: collapsible hamburger menu (animated open/close, no layout shift).
3. Full keyboard support: Tab order, Enter/Space to open, Escape to close,
   arrow keys to move within the dropdown.
4. Correct ARIA: aria-expanded, aria-controls, aria-haspopup, role="menu"/
   "menuitem" where appropriate; manage focus when opening/closing.
5. Visible focus indicators and screen-reader-only labels where needed.
6. Trap focus inside the mobile menu when open; return focus to the toggle
   on close.
Provide the component code and a brief checklist I can use to verify
accessibility manually.`,
    promptAr: `Act as an accessibility-focused front-end engineer. Build a responsive,
fully accessible navigation bar in React + Tailwind CSS.
Requirements:
1. Desktop: horizontal nav with one dropdown menu containing sub-links.
2. Mobile: collapsible hamburger menu (animated open/close, no layout shift).
3. Full keyboard support: Tab order, Enter/Space to open, Escape to close,
   arrow keys to move within the dropdown.
4. Correct ARIA: aria-expanded, aria-controls, aria-haspopup, role="menu"/
   "menuitem" where appropriate; manage focus when opening/closing.
5. Visible focus indicators and screen-reader-only labels where needed.
6. Trap focus inside the mobile menu when open; return focus to the toggle
   on close.
Provide the component code and a brief checklist I can use to verify
accessibility manually.`,
    featured: false,
  },
  {
    id: "6",
    slug: "build-a-multi-step-form-with-validation",
    title: "Build a Multi-Step Form with Validation",
    titleAr: "Build a Multi-Step Form with Validation",
    description: "Use this for checkout flows, onboarding wizards, or long sign-up forms where breaking input into steps improves completion rates. Handles state, validation, and navigation between steps.",
    descriptionAr: "Use this for checkout flows, onboarding wizards, or long sign-up forms where breaking input into steps improves completion rates. Handles state, validation, and navigation between steps.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior React engineer. Build a multi-step form ("wizard") in
React + TypeScript + Tailwind, using react-hook-form and zod for validation.
Steps:
1. Account (email, password)
2. Profile (full name, role, company)
3. Review (read-only summary) + submit
Requirements:
1. Validate each step with a zod schema before allowing "Next".
2. Persist data across steps in a single form state; allow "Back" without
   losing input.
3. Show a progress indicator (step X of 3) and per-field error messages.
4. Disable "Next"/"Submit" while invalid or submitting; show a loading state.
5. On final submit, log the assembled payload (placeholder for an API call).
6. Make it accessible: labeled inputs, aria-invalid, focus the first error.
Return the full component(s), the zod schemas, and a short explanation of
the state flow.`,
    promptAr: `You are a senior React engineer. Build a multi-step form ("wizard") in
React + TypeScript + Tailwind, using react-hook-form and zod for validation.
Steps:
1. Account (email, password)
2. Profile (full name, role, company)
3. Review (read-only summary) + submit
Requirements:
1. Validate each step with a zod schema before allowing "Next".
2. Persist data across steps in a single form state; allow "Back" without
   losing input.
3. Show a progress indicator (step X of 3) and per-field error messages.
4. Disable "Next"/"Submit" while invalid or submitting; show a loading state.
5. On final submit, log the assembled payload (placeholder for an API call).
6. Make it accessible: labeled inputs, aria-invalid, focus the first error.
Return the full component(s), the zod schemas, and a short explanation of
the state flow.`,
    featured: false,
  },
  {
    id: "7",
    slug: "build-a-developer-portfolio-website",
    title: "Build a Developer Portfolio Website",
    titleAr: "Build a Developer Portfolio Website",
    description: "Use this when you need a personal portfolio that actually lands interviews and clients. Ideal for students, freelancers, and job-seekers who want a professional site without spending a weekend on layout decisions.",
    descriptionAr: "Use this when you need a personal portfolio that actually lands interviews and clients. Ideal for students, freelancers, and job-seekers who want a professional site without spending a weekend on layout decisions.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a front-end engineer and personal-branding expert. Build a modern,
fast developer portfolio using Next.js + Tailwind CSS.
About me:
- Name / role: [NAME, E.G. "Full-Stack Developer"]
- Top skills: [LIST]
- Notable projects: [2–4 PROJECTS WITH ONE-LINE DESCRIPTIONS]
- Links: [GITHUB, LINKEDIN, EMAIL]
Requirements:
1. Sections: hero (name, tagline, CTA buttons), about, skills grid,
   featured projects (cards with image, stack, links), experience timeline,
   contact section, footer.
2. Responsive, accessible, and SEO-friendly (proper meta tags, semantic
   headings, descriptive alt text).
3. Clean, minimal, professional aesthetic with one accent color and tasteful
   motion (subtle fade/slide on scroll).
4. Project data driven by a typed array so it's easy to update.
5. Include a downloadable-resume button placeholder.
Output the components plus the project data structure I should edit.`,
    promptAr: `You are a front-end engineer and personal-branding expert. Build a modern,
fast developer portfolio using Next.js + Tailwind CSS.
About me:
- Name / role: [NAME, E.G. "Full-Stack Developer"]
- Top skills: [LIST]
- Notable projects: [2–4 PROJECTS WITH ONE-LINE DESCRIPTIONS]
- Links: [GITHUB, LINKEDIN, EMAIL]
Requirements:
1. Sections: hero (name, tagline, CTA buttons), about, skills grid,
   featured projects (cards with image, stack, links), experience timeline,
   contact section, footer.
2. Responsive, accessible, and SEO-friendly (proper meta tags, semantic
   headings, descriptive alt text).
3. Clean, minimal, professional aesthetic with one accent color and tasteful
   motion (subtle fade/slide on scroll).
4. Project data driven by a typed array so it's easy to update.
5. Include a downloadable-resume button placeholder.
Output the components plus the project data structure I should edit.`,
    featured: false,
  },
  {
    id: "8",
    slug: "optimize-react-rendering-performance",
    title: "Optimize React Rendering Performance",
    titleAr: "Optimize React Rendering Performance",
    description: "Use this when a React app feels sluggish — laggy typing, slow lists, janky interactions. The AI audits your component for unnecessary re-renders and expensive work, then proposes targeted fixes.",
    descriptionAr: "Use this when a React app feels sluggish — laggy typing, slow lists, janky interactions. The AI audits your component for unnecessary re-renders and expensive work, then proposes targeted fixes.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a React performance expert. I'll paste a component (or several) that
feels slow. Diagnose and fix the performance problems.
For your analysis:
1. Identify the specific causes of unnecessary re-renders (unstable props,
   inline objects/functions, missing keys, context misuse, etc.).
2. Identify expensive operations running on every render and where to
   memoize them (useMemo, useCallback) — but only where it genuinely helps;
   call out cases where memoization is NOT worth it.
3. Recommend structural fixes: component splitting, lifting/colocating
   state, list virtualization, lazy loading.
4. Provide the refactored code with comments explaining each change.
5. Suggest how to measure the improvement (React DevTools Profiler, what
   metrics to watch).
Here is the code:
[PASTE COMPONENT CODE]`,
    promptAr: `Act as a React performance expert. I'll paste a component (or several) that
feels slow. Diagnose and fix the performance problems.
For your analysis:
1. Identify the specific causes of unnecessary re-renders (unstable props,
   inline objects/functions, missing keys, context misuse, etc.).
2. Identify expensive operations running on every render and where to
   memoize them (useMemo, useCallback) — but only where it genuinely helps;
   call out cases where memoization is NOT worth it.
3. Recommend structural fixes: component splitting, lifting/colocating
   state, list virtualization, lazy loading.
4. Provide the refactored code with comments explaining each change.
5. Suggest how to measure the improvement (React DevTools Profiler, what
   metrics to watch).
Here is the code:
[PASTE COMPONENT CODE]`,
    featured: false,
  },
  {
    id: "9",
    slug: "build-a-data-table-with-sorting-filtering-pagination",
    title: "Build a Data Table with Sorting, Filtering & Pagination",
    titleAr: "Build a Data Table with Sorting, Filtering & Pagination",
    description: "Use this when you need an interactive table for admin panels or dashboards — the kind of component that's deceptively time-consuming to build well. Handles sorting, search, and paging cleanly.",
    descriptionAr: "Use this when you need an interactive table for admin panels or dashboards — the kind of component that's deceptively time-consuming to build well. Handles sorting, search, and paging cleanly.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior React + TypeScript engineer. Build a reusable, accessible
data table component with Tailwind CSS.
Features:
1. Generic typing: <DataTable<T>> accepts a typed array and a column config
   (key, header, optional custom cell renderer, sortable flag).
2. Column sorting (asc/desc/none) with visible sort indicators.
3. Global text search/filter across configured columns.
4. Client-side pagination with page size selector and page controls.
5. Empty state, loading state, and a "no results" state.
6. Accessible markup: proper <table> semantics, aria-sort, keyboard-usable
   controls.
Constraints:
- No table libraries — vanilla React + Tailwind.
- Keep it performant for a few thousand rows.
Provide the component, the column config type, and a usage example with
sample data.`,
    promptAr: `You are a senior React + TypeScript engineer. Build a reusable, accessible
data table component with Tailwind CSS.
Features:
1. Generic typing: <DataTable<T>> accepts a typed array and a column config
   (key, header, optional custom cell renderer, sortable flag).
2. Column sorting (asc/desc/none) with visible sort indicators.
3. Global text search/filter across configured columns.
4. Client-side pagination with page size selector and page controls.
5. Empty state, loading state, and a "no results" state.
6. Accessible markup: proper <table> semantics, aria-sort, keyboard-usable
   controls.
Constraints:
- No table libraries — vanilla React + Tailwind.
- Keep it performant for a few thousand rows.
Provide the component, the column config type, and a usage example with
sample data.`,
    featured: false,
  },
  {
    id: "10",
    slug: "create-a-custom-react-hook",
    title: "Create a Custom React Hook",
    titleAr: "Create a Custom React Hook",
    description: "Use this when you find repeated stateful logic (fetching, debouncing, local storage, media queries) scattered across components and want to extract it into a clean, reusable, well-typed hook.",
    descriptionAr: "Use this when you find repeated stateful logic (fetching, debouncing, local storage, media queries) scattered across components and want to extract it into a clean, reusable, well-typed hook.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a React + TypeScript expert. Create a production-quality custom hook.
Hook to build: [DESCRIBE — e.g. "useFetch", "useDebounce", "useLocalStorage",
"useMediaQuery", "useClickOutside"]
Requirements:
1. Full TypeScript types with generics where it makes the hook flexible.
2. Handle edge cases (cleanup on unmount, stale closures, SSR safety if
   relevant, race conditions for async hooks).
3. Return a clear, predictable API.
4. Include inline comments explaining non-obvious decisions.
5. Provide a usage example component.
6. Note any gotchas or limitations.
If the hook does async work, ensure it cancels/ignores outdated responses
and exposes loading and error states.`,
    promptAr: `Act as a React + TypeScript expert. Create a production-quality custom hook.
Hook to build: [DESCRIBE — e.g. "useFetch", "useDebounce", "useLocalStorage",
"useMediaQuery", "useClickOutside"]
Requirements:
1. Full TypeScript types with generics where it makes the hook flexible.
2. Handle edge cases (cleanup on unmount, stale closures, SSR safety if
   relevant, race conditions for async hooks).
3. Return a clear, predictable API.
4. Include inline comments explaining non-obvious decisions.
5. Provide a usage example component.
6. Note any gotchas or limitations.
If the hook does async work, ensure it cancels/ignores outdated responses
and exposes loading and error states.`,
    featured: false,
  },
  {
    id: "11",
    slug: "optimize-a-next-js-site-for-seo",
    title: "Optimize a Next.js Site for SEO",
    titleAr: "Optimize a Next.js Site for SEO",
    description: "Use this when your site ranks poorly or doesn't preview well when shared. The AI sets up metadata, structured data, sitemaps, and performance basics so search engines and social platforms understand your pages.",
    descriptionAr: "Use this when your site ranks poorly or doesn't preview well when shared. The AI sets up metadata, structured data, sitemaps, and performance basics so search engines and social platforms understand your pages.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a technical SEO engineer working in Next.js (App Router). Make my
site fully SEO-optimized.
Site context:
- Type: [BLOG / SAAS / PORTFOLIO / ECOMMERCE]
- Main pages: [LIST]
- Primary keywords/topics: [LIST]
Deliver:
1. A metadata strategy using the App Router Metadata API — title templates,
   descriptions, canonical URLs, and per-page overrides.
2. Open Graph and Twitter card tags for rich link previews.
3. JSON-LD structured data appropriate to the site type (e.g. Article,
   Product, BreadcrumbList, Organization).
4. A dynamic sitemap.xml and robots.txt setup.
5. Performance/SEO checklist: image optimization, semantic headings, alt
   text, Core Web Vitals considerations, internal linking.
6. Code examples for the metadata, sitemap, and one JSON-LD block.
Explain what to customize per page and how to verify with Google's tools.`,
    promptAr: `You are a technical SEO engineer working in Next.js (App Router). Make my
site fully SEO-optimized.
Site context:
- Type: [BLOG / SAAS / PORTFOLIO / ECOMMERCE]
- Main pages: [LIST]
- Primary keywords/topics: [LIST]
Deliver:
1. A metadata strategy using the App Router Metadata API — title templates,
   descriptions, canonical URLs, and per-page overrides.
2. Open Graph and Twitter card tags for rich link previews.
3. JSON-LD structured data appropriate to the site type (e.g. Article,
   Product, BreadcrumbList, Organization).
4. A dynamic sitemap.xml and robots.txt setup.
5. Performance/SEO checklist: image optimization, semantic headings, alt
   text, Core Web Vitals considerations, internal linking.
6. Code examples for the metadata, sitemap, and one JSON-LD block.
Explain what to customize per page and how to verify with Google's tools.`,
    featured: false,
  },
  {
    id: "12",
    slug: "build-a-responsive-image-gallery-with-lightbox",
    title: "Build a Responsive Image Gallery with Lightbox",
    titleAr: "Build a Responsive Image Gallery with Lightbox",
    description: "Use this for photography sites, portfolios, or product galleries where users browse images and open them full-size. Handles responsive grids and an accessible lightbox modal.",
    descriptionAr: "Use this for photography sites, portfolios, or product galleries where users browse images and open them full-size. Handles responsive grids and an accessible lightbox modal.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a front-end engineer. Build a responsive image gallery with a
lightbox in React + Tailwind CSS.
Requirements:
1. Responsive masonry-style or CSS grid layout (1 col mobile → 3–4 cols
   desktop) with lazy-loaded images and proper aspect-ratio handling to
   avoid layout shift.
2. Clicking an image opens an accessible lightbox modal showing the full
   image with next/previous navigation.
3. Lightbox supports keyboard navigation (arrows to move, Escape to close)
   and traps focus while open.
4. Smooth transitions, no scrollbar jump when the modal opens.
5. Driven by a typed array of images (src, alt, width, height).
6. Fully accessible: alt text, aria-label on controls, focus return on close.
Provide the gallery and lightbox components plus the image data type.`,
    promptAr: `You are a front-end engineer. Build a responsive image gallery with a
lightbox in React + Tailwind CSS.
Requirements:
1. Responsive masonry-style or CSS grid layout (1 col mobile → 3–4 cols
   desktop) with lazy-loaded images and proper aspect-ratio handling to
   avoid layout shift.
2. Clicking an image opens an accessible lightbox modal showing the full
   image with next/previous navigation.
3. Lightbox supports keyboard navigation (arrows to move, Escape to close)
   and traps focus while open.
4. Smooth transitions, no scrollbar jump when the modal opens.
5. Driven by a typed array of images (src, alt, width, height).
6. Fully accessible: alt text, aria-label on controls, focus return on close.
Provide the gallery and lightbox components plus the image data type.`,
    featured: false,
  },
  {
    id: "13",
    slug: "build-a-toast-notification-system",
    title: "Build a Toast Notification System",
    titleAr: "Build a Toast Notification System",
    description: "Use this when you need app-wide success/error/info messages triggered from anywhere in your code — after saving, on errors, on copy-to-clipboard. A reusable, accessible toast system you call with one function.",
    descriptionAr: "Use this when you need app-wide success/error/info messages triggered from anywhere in your code — after saving, on errors, on copy-to-clipboard. A reusable, accessible toast system you call with one function.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior React + TypeScript engineer. Build a reusable toast
notification system with Tailwind CSS — no external libraries.
Requirements:
1. A <ToastProvider> using React context, plus a useToast() hook exposing
   toast.success(), toast.error(), toast.info(), toast.dismiss().
2. Toasts stack, auto-dismiss after a configurable duration, and can be
   dismissed manually; pausing on hover is a plus.
3. Smooth enter/exit animations and a fixed, responsive position (e.g.
   bottom-right on desktop, full-width bottom on mobile).
4. Accessible: use role="status"/aria-live="polite" for info/success and
   an assertive region for errors; dismiss buttons are keyboard-usable.
5. Fully typed API.
Provide the provider, the hook, the toast component, and a usage example
calling it from a button click and from a try/catch.`,
    promptAr: `Act as a senior React + TypeScript engineer. Build a reusable toast
notification system with Tailwind CSS — no external libraries.
Requirements:
1. A <ToastProvider> using React context, plus a useToast() hook exposing
   toast.success(), toast.error(), toast.info(), toast.dismiss().
2. Toasts stack, auto-dismiss after a configurable duration, and can be
   dismissed manually; pausing on hover is a plus.
3. Smooth enter/exit animations and a fixed, responsive position (e.g.
   bottom-right on desktop, full-width bottom on mobile).
4. Accessible: use role="status"/aria-live="polite" for info/success and
   an assertive region for errors; dismiss buttons are keyboard-usable.
5. Fully typed API.
Provide the provider, the hook, the toast component, and a usage example
calling it from a button click and from a try/catch.`,
    featured: false,
  },
  {
    id: "14",
    slug: "build-a-drag-and-drop-interface",
    title: "Build a Drag-and-Drop Interface",
    titleAr: "Build a Drag-and-Drop Interface",
    description: "Use this for kanban boards, sortable lists, or file-reordering UIs. The AI implements smooth, accessible drag-and-drop with the right state updates.",
    descriptionAr: "Use this for kanban boards, sortable lists, or file-reordering UIs. The AI implements smooth, accessible drag-and-drop with the right state updates.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a front-end engineer experienced with interaction design. Build a
drag-and-drop [KANBAN BOARD / SORTABLE LIST] in React + TypeScript + Tailwind.
Use [@dnd-kit/core OR the native HTML Drag and Drop API — recommend which
fits this case and why].
Requirements:
1. Items can be reordered within a list; (for kanban) cards can move between
   columns.
2. Visual feedback: drag handle, drag preview, drop placeholder/indicator.
3. State updates immutably; expose the new order via an onChange callback.
4. Keyboard accessibility for drag-and-drop (move items without a mouse).
5. Smooth transitions and no layout jank.
6. Typed data model for columns/items.
Provide the component(s), the data model, a usage example, and notes on the
accessibility approach.`,
    promptAr: `You are a front-end engineer experienced with interaction design. Build a
drag-and-drop [KANBAN BOARD / SORTABLE LIST] in React + TypeScript + Tailwind.
Use [@dnd-kit/core OR the native HTML Drag and Drop API — recommend which
fits this case and why].
Requirements:
1. Items can be reordered within a list; (for kanban) cards can move between
   columns.
2. Visual feedback: drag handle, drag preview, drop placeholder/indicator.
3. State updates immutably; expose the new order via an onChange callback.
4. Keyboard accessibility for drag-and-drop (move items without a mouse).
5. Smooth transitions and no layout jank.
6. Typed data model for columns/items.
Provide the component(s), the data model, a usage example, and notes on the
accessibility approach.`,
    featured: false,
  },
  {
    id: "15",
    slug: "build-an-admin-panel-layout",
    title: "Build an Admin Panel Layout",
    titleAr: "Build an Admin Panel Layout",
    description: "Use this when starting an internal tool, CMS, or SaaS back office. It scaffolds the classic admin shell — sidebar, topbar, content area — so you can focus on features instead of layout plumbing.",
    descriptionAr: "Use this when starting an internal tool, CMS, or SaaS back office. It scaffolds the classic admin shell — sidebar, topbar, content area — so you can focus on features instead of layout plumbing.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior front-end engineer. Build a responsive admin panel layout
in Next.js (App Router) + Tailwind CSS.
Requirements:
1. Layout shell: collapsible left sidebar (nav with icons + labels, active
   state, grouped sections), sticky top bar (search, notifications, user
   menu dropdown), and a main content area with a page header + breadcrumbs.
2. Responsive: sidebar collapses to icons on tablet and becomes an overlay
   drawer on mobile.
3. Reusable building blocks: <StatCard>, <DataSection>, page <Header>.
4. A sample dashboard page using these blocks (4 stat cards + a placeholder
   chart area + a recent-activity list).
5. Accessible navigation (keyboard, aria-current on active link, focus
   management for the mobile drawer).
6. Clean, professional, neutral styling.
Provide the layout components, the sample page, and the folder structure.`,
    promptAr: `You are a senior front-end engineer. Build a responsive admin panel layout
in Next.js (App Router) + Tailwind CSS.
Requirements:
1. Layout shell: collapsible left sidebar (nav with icons + labels, active
   state, grouped sections), sticky top bar (search, notifications, user
   menu dropdown), and a main content area with a page header + breadcrumbs.
2. Responsive: sidebar collapses to icons on tablet and becomes an overlay
   drawer on mobile.
3. Reusable building blocks: <StatCard>, <DataSection>, page <Header>.
4. A sample dashboard page using these blocks (4 stat cards + a placeholder
   chart area + a recent-activity list).
5. Accessible navigation (keyboard, aria-current on active link, focus
   management for the mobile drawer).
6. Clean, professional, neutral styling.
Provide the layout components, the sample page, and the folder structure.`,
    featured: false,
  },
  {
    id: "16",
    slug: "build-skeleton-loading-states",
    title: "Build Skeleton Loading States",
    titleAr: "Build Skeleton Loading States",
    description: "Use this to replace jarring spinners and blank screens with polished skeleton placeholders that match your content's shape, improving perceived performance while data loads.",
    descriptionAr: "Use this to replace jarring spinners and blank screens with polished skeleton placeholders that match your content's shape, improving perceived performance while data loads.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a front-end engineer focused on perceived performance. Create a
reusable skeleton-loading system in React + Tailwind CSS.
Requirements:
1. A base <Skeleton> primitive (configurable width, height, radius) with a
   subtle shimmer/pulse animation using Tailwind.
2. Composed skeletons that mirror real components: SkeletonCard,
   SkeletonTableRow, SkeletonAvatar+text line, SkeletonList.
3. Respect prefers-reduced-motion (disable shimmer for those users).
4. Show how to swap between skeleton and real content based on a loading
   boolean, avoiding layout shift between the two states.
5. Accessible: mark skeletons as aria-hidden and expose an aria-busy/status
   region for screen readers.
Provide the primitives, the composed skeletons, and a usage example for a
card grid that's loading.`,
    promptAr: `Act as a front-end engineer focused on perceived performance. Create a
reusable skeleton-loading system in React + Tailwind CSS.
Requirements:
1. A base <Skeleton> primitive (configurable width, height, radius) with a
   subtle shimmer/pulse animation using Tailwind.
2. Composed skeletons that mirror real components: SkeletonCard,
   SkeletonTableRow, SkeletonAvatar+text line, SkeletonList.
3. Respect prefers-reduced-motion (disable shimmer for those users).
4. Show how to swap between skeleton and real content based on a loading
   boolean, avoiding layout shift between the two states.
5. Accessible: mark skeletons as aria-hidden and expose an aria-busy/status
   region for screen readers.
Provide the primitives, the composed skeletons, and a usage example for a
card grid that's loading.`,
    featured: false,
  },
  {
    id: "17",
    slug: "build-a-form-with-react-hook-form-zod",
    title: "Build a Form with React Hook Form + Zod",
    titleAr: "Build a Form with React Hook Form + Zod",
    description: "Use this for any non-trivial form where you want robust validation, great DX, and minimal re-renders. This is the modern standard combo for forms in React.",
    descriptionAr: "Use this for any non-trivial form where you want robust validation, great DX, and minimal re-renders. This is the modern standard combo for forms in React.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a React + TypeScript expert. Build a fully validated form using
react-hook-form and zod with Tailwind styling.
Form: [DESCRIBE FIELDS — e.g. "sign up: name, email, password, confirm
password, terms checkbox"]
Requirements:
1. Define a single zod schema as the source of truth; infer the TS type from
   it (z.infer).
2. Use zodResolver with react-hook-form; show per-field inline errors and
   handle cross-field validation (e.g. password >>= confirmPassword).
3. Disable submit while invalid or submitting; show a submitting state.
4. Accessible: associate labels, set aria-invalid and aria-describedby for
   errors, focus the first invalid field on submit.
5. On submit, validate then log/return the typed data (placeholder for API).
6. Keep components clean and reusable (a small <FormField> wrapper is fine).
Provide the schema, the form component, and the wrapper.`,
    promptAr: `You are a React + TypeScript expert. Build a fully validated form using
react-hook-form and zod with Tailwind styling.
Form: [DESCRIBE FIELDS — e.g. "sign up: name, email, password, confirm
password, terms checkbox"]
Requirements:
1. Define a single zod schema as the source of truth; infer the TS type from
   it (z.infer).
2. Use zodResolver with react-hook-form; show per-field inline errors and
   handle cross-field validation (e.g. password >>= confirmPassword).
3. Disable submit while invalid or submitting; show a submitting state.
4. Accessible: associate labels, set aria-invalid and aria-describedby for
   errors, focus the first invalid field on submit.
5. On submit, validate then log/return the typed data (placeholder for API).
6. Keep components clean and reusable (a small <FormField> wrapper is fine).
Provide the schema, the form component, and the wrapper.`,
    featured: false,
  },
  {
    id: "18",
    slug: "build-a-responsive-dashboard-layout",
    title: "Build a Responsive Dashboard Layout",
    titleAr: "Build a Responsive Dashboard Layout",
    description: "Use this when you need an analytics or metrics dashboard with cards, charts, and responsive grids. Focuses on the layout and composition so you can plug in real data and chart libraries later.",
    descriptionAr: "Use this when you need an analytics or metrics dashboard with cards, charts, and responsive grids. Focuses on the layout and composition so you can plug in real data and chart libraries later.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a front-end engineer. Build a responsive analytics dashboard UI in
React + Tailwind CSS.
Requirements:
1. A responsive grid: top row of 4 KPI stat cards (label, value, delta vs
   last period with up/down color), then a 2/3 + 1/3 split for a main chart
   area and a side panel (e.g. top items list), then a full-width data table
   placeholder.
2. Each section is a reusable component with a header and optional actions.
3. Responsive behavior: cards stack on mobile, grid reflows at breakpoints.
4. Include a charts placeholder component with a comment on where to wire in
   Recharts/Chart.js.
5. Accessible and keyboard-navigable; meaningful headings and labels.
6. Clean, data-dense but readable styling.
Provide the layout, the reusable components, and sample placeholder data.`,
    promptAr: `You are a front-end engineer. Build a responsive analytics dashboard UI in
React + Tailwind CSS.
Requirements:
1. A responsive grid: top row of 4 KPI stat cards (label, value, delta vs
   last period with up/down color), then a 2/3 + 1/3 split for a main chart
   area and a side panel (e.g. top items list), then a full-width data table
   placeholder.
2. Each section is a reusable component with a header and optional actions.
3. Responsive behavior: cards stack on mobile, grid reflows at breakpoints.
4. Include a charts placeholder component with a comment on where to wire in
   Recharts/Chart.js.
5. Accessible and keyboard-navigable; meaningful headings and labels.
6. Clean, data-dense but readable styling.
Provide the layout, the reusable components, and sample placeholder data.`,
    featured: false,
  },
  {
    id: "19",
    slug: "add-internationalization-i18n-to-a-react-app",
    title: "Add Internationalization (i18n) to a React App",
    titleAr: "Add Internationalization (i18n) to a React App",
    description: "Use this when you need to support multiple languages — translating UI text, handling locale formatting, and letting users switch languages. Essential for products expanding to new markets.",
    descriptionAr: "Use this when you need to support multiple languages — translating UI text, handling locale formatting, and letting users switch languages. Essential for products expanding to new markets.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an internationalization expert. Add i18n to my [REACT / NEXT.JS]
application.
Languages to support: [E.G. English, Spanish, Arabic]
Deliver:
1. A recommended library for my framework (e.g. next-intl or react-i18next)
   and why.
2. Project structure for translation files (JSON per locale) and a clean
   key naming convention.
3. Setup code: provider/config, a useTranslation-style hook, and a language
   switcher component that persists the choice.
4. Examples of: simple strings, interpolation (variables), pluralization,
   and date/number formatting via Intl.
5. RTL support guidance if any language requires it (e.g. Arabic) — how to
   flip layout direction.
6. How to handle missing translations gracefully.
Show the config, two sample locale files, and a translated component.`,
    promptAr: `Act as an internationalization expert. Add i18n to my [REACT / NEXT.JS]
application.
Languages to support: [E.G. English, Spanish, Arabic]
Deliver:
1. A recommended library for my framework (e.g. next-intl or react-i18next)
   and why.
2. Project structure for translation files (JSON per locale) and a clean
   key naming convention.
3. Setup code: provider/config, a useTranslation-style hook, and a language
   switcher component that persists the choice.
4. Examples of: simple strings, interpolation (variables), pluralization,
   and date/number formatting via Intl.
5. RTL support guidance if any language requires it (e.g. Arabic) — how to
   flip layout direction.
6. How to handle missing translations gracefully.
Show the config, two sample locale files, and a translated component.`,
    featured: false,
  },
  {
    id: "20",
    slug: "migrate-a-javascript-react-project-to-typescript",
    title: "Migrate a JavaScript React Project to TypeScript",
    titleAr: "Migrate a JavaScript React Project to TypeScript",
    description: "Use this when you have a working JS React codebase and want type safety without a risky big-bang rewrite. The AI gives you a safe, incremental migration plan and converts files correctly.",
    descriptionAr: "Use this when you have a working JS React codebase and want type safety without a risky big-bang rewrite. The AI gives you a safe, incremental migration plan and converts files correctly.",
    category: "front-end",
    difficulty: "intermediate",
    tags: ["Front-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a TypeScript migration specialist. Help me migrate a React project
from JavaScript to TypeScript incrementally and safely.
Provide:
1. A recommended tsconfig.json for a gradual migration (allowJs, strict
   settings to enable over time) with comments.
2. A step-by-step migration order (config → rename leaf components → shared
   utils → context/state → entry points) and why this order reduces risk.
3. How to type: component props, useState, useRef, event handlers, context,
   and API response data.
4. How to handle third-party libs without types (@types packages or
   declaration files).
5. Common migration errors and how to fix them.
Then convert this file as a worked example:
[PASTE A .JS/.JSX FILE]
Return the typed version with comments on each meaningful type added.`,
    promptAr: `You are a TypeScript migration specialist. Help me migrate a React project
from JavaScript to TypeScript incrementally and safely.
Provide:
1. A recommended tsconfig.json for a gradual migration (allowJs, strict
   settings to enable over time) with comments.
2. A step-by-step migration order (config → rename leaf components → shared
   utils → context/state → entry points) and why this order reduces risk.
3. How to type: component props, useState, useRef, event handlers, context,
   and API response data.
4. How to handle third-party libs without types (@types packages or
   declaration files).
5. Common migration errors and how to fix them.
Then convert this file as a worked example:
[PASTE A .JS/.JSX FILE]
Return the typed version with comments on each meaningful type added.`,
    featured: false,
  },
];
