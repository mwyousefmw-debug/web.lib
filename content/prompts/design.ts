import type { Prompt } from "@/types";

// UI/UX & Design — Prompts 61-80
// Source: docs/WebLib-100-AI-Prompts-Every-Programmer.pdf
export const designPrompts: Prompt[] = [
  {
    id: "61",
    slug: "create-a-design-system-with-design-tokens",
    title: "Create a Design System with Design Tokens",
    titleAr: "Create a Design System with Design Tokens",
    description: "Use this when your UI looks inconsistent across pages and you want a single source of truth for colors, spacing, and typography. Essential for any project that will grow beyond a few screens.",
    descriptionAr: "Use this when your UI looks inconsistent across pages and you want a single source of truth for colors, spacing, and typography. Essential for any project that will grow beyond a few screens.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a design systems engineer. Create a foundational design system as
design tokens for a [WEB APP / MARKETING SITE], implemented for Tailwind CSS.
Brand context: [INDUSTRY, VIBE — e.g. "fintech, trustworthy, modern" — and
any existing brand colors]
Deliver:
1. A color system: a primary scale (50–900), neutral/gray scale, and
   semantic colors (success, warning, error, info), each meeting WCAG AA
   contrast for text. Note which shades to use for backgrounds vs text.
2. A typographic scale (font sizes + line heights + weights) and a font
   pairing recommendation.
3. A spacing scale, border-radius scale, and shadow/elevation scale.
4. All of the above expressed as a tailwind.config theme extension AND as CSS
   variables (so they work outside Tailwind too).
5. Brief usage guidelines (when to use each semantic color, spacing rhythm).
Keep it practical and not bloated — a real working foundation.`,
    promptAr: `You are a design systems engineer. Create a foundational design system as
design tokens for a [WEB APP / MARKETING SITE], implemented for Tailwind CSS.
Brand context: [INDUSTRY, VIBE — e.g. "fintech, trustworthy, modern" — and
any existing brand colors]
Deliver:
1. A color system: a primary scale (50–900), neutral/gray scale, and
   semantic colors (success, warning, error, info), each meeting WCAG AA
   contrast for text. Note which shades to use for backgrounds vs text.
2. A typographic scale (font sizes + line heights + weights) and a font
   pairing recommendation.
3. A spacing scale, border-radius scale, and shadow/elevation scale.
4. All of the above expressed as a tailwind.config theme extension AND as CSS
   variables (so they work outside Tailwind too).
5. Brief usage guidelines (when to use each semantic color, spacing rhythm).
Keep it practical and not bloated — a real working foundation.`,
    featured: false,
  },
  {
    id: "62",
    slug: "improve-the-ux-of-an-existing-page",
    title: "Improve the UX of an Existing Page",
    titleAr: "Improve the UX of an Existing Page",
    description: "Use this when a page works but feels clunky and you want concrete, prioritized UX improvements rather than a vague \"make it better.\"",
    descriptionAr: "Use this when a page works but feels clunky and you want concrete, prioritized UX improvements rather than a vague \"make it better.\"",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior UX designer doing a practical critique. Improve the user
experience of this page.
Page purpose & primary user goal: [WHAT USERS COME HERE TO DO]
Current page: [DESCRIBE THE LAYOUT/FLOW OR PASTE THE MARKUP/SCREENSHOT]
Known problems / metrics: [E.G. "high drop-off", "users miss the CTA"]
Critique and improve:
1. Evaluate whether the page makes the primary action obvious and easy.
2. Identify specific UX issues: unclear hierarchy, cognitive load, weak
   affordances, poor feedback, confusing copy, friction in the flow.
3. Give prioritized, concrete recommendations (high/medium/low impact) — for
   each, state the problem, the change, and the expected effect.
4. Address mobile experience and accessibility issues too.
5. Suggest what to A/B test if the change is uncertain.
Be specific ("move X above the fold and make it the only primary button"),
not generic ("improve usability").`,
    promptAr: `Act as a senior UX designer doing a practical critique. Improve the user
experience of this page.
Page purpose & primary user goal: [WHAT USERS COME HERE TO DO]
Current page: [DESCRIBE THE LAYOUT/FLOW OR PASTE THE MARKUP/SCREENSHOT]
Known problems / metrics: [E.G. "high drop-off", "users miss the CTA"]
Critique and improve:
1. Evaluate whether the page makes the primary action obvious and easy.
2. Identify specific UX issues: unclear hierarchy, cognitive load, weak
   affordances, poor feedback, confusing copy, friction in the flow.
3. Give prioritized, concrete recommendations (high/medium/low impact) — for
   each, state the problem, the change, and the expected effect.
4. Address mobile experience and accessibility issues too.
5. Suggest what to A/B test if the change is uncertain.
Be specific ("move X above the fold and make it the only primary button"),
not generic ("improve usability").`,
    featured: false,
  },
  {
    id: "63",
    slug: "design-a-color-palet-te",
    title: "Design a Color Palet te",
    titleAr: "Design a Color Palet te",
    description: "Use this when starting a project and you need a cohesive, accessible color palette but aren't confident picking colors. Produces something professional you can use immediately.",
    descriptionAr: "Use this when starting a project and you need a cohesive, accessible color palette but aren't confident picking colors. Produces something professional you can use immediately.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a color and brand expert. Create a cohesive, accessible color palette
for a [PROJECT TYPE] with this personality: [E.G. "calm, premium, trustworthy"
/ "energetic, playful, bold"].
Deliver:
1. A primary brand color and the reasoning (color psychology fit for the
   brand and audience).
2. A full palette: primary, secondary/accent, neutrals, and semantic colors
   (success/warning/error/info) — give exact HEX values.
3. For each, provide a usable tint/shade scale (e.g. 50–900).
4. Accessibility: verify text/background combinations meet WCAG AA (4.5:1
   for body text) and list which pairings are safe for text vs decoration.
5. Example UI usage: background, surface, text, primary button, link, border.
6. A dark-mode variant of the palette.
Present it as a clean spec with HEX codes I can paste into Tailwind/CSS.`,
    promptAr: `You are a color and brand expert. Create a cohesive, accessible color palette
for a [PROJECT TYPE] with this personality: [E.G. "calm, premium, trustworthy"
/ "energetic, playful, bold"].
Deliver:
1. A primary brand color and the reasoning (color psychology fit for the
   brand and audience).
2. A full palette: primary, secondary/accent, neutrals, and semantic colors
   (success/warning/error/info) — give exact HEX values.
3. For each, provide a usable tint/shade scale (e.g. 50–900).
4. Accessibility: verify text/background combinations meet WCAG AA (4.5:1
   for body text) and list which pairings are safe for text vs decoration.
5. Example UI usage: background, surface, text, primary button, link, border.
6. A dark-mode variant of the palette.
Present it as a clean spec with HEX codes I can paste into Tailwind/CSS.`,
    featured: false,
  },
  {
    id: "64",
    slug: "conduct-a-heuristic-usability-audit",
    title: "Conduct a Heuristic Usability Audit",
    titleAr: "Conduct a Heuristic Usability Audit",
    description: "Use this to evaluate an interface against established usability principles (Nielsen's heuristics) and get a structured list of issues — like a professional UX audit without hiring one.",
    descriptionAr: "Use this to evaluate an interface against established usability principles (Nielsen's heuristics) and get a structured list of issues — like a professional UX audit without hiring one.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a UX researcher conducting a heuristic evaluation using Nielsen's 10
usability heuristics. Audit the following interface.
Interface: [DESCRIBE THE SCREEN/FLOW OR PASTE MARKUP/SCREENSHOT]
Primary tasks users perform: [LIST]
For the audit:
1. Go through each relevant heuristic (visibility of system status, match to
   real world, user control/freedom, consistency, error prevention,
   recognition over recall, flexibility, aesthetic/minimalist design, error
   recovery, help/docs).
2. For each, note whether the interface passes or has issues; describe each
   issue concretely.
3. Rate each issue's severity (0–4: cosmetic → catastrophic).
4. Give a specific recommendation to fix each issue.
5. Summarize the top 5 issues to address first by severity × frequency.
Be concrete and reference the actual elements, not abstractions.`,
    promptAr: `Act as a UX researcher conducting a heuristic evaluation using Nielsen's 10
usability heuristics. Audit the following interface.
Interface: [DESCRIBE THE SCREEN/FLOW OR PASTE MARKUP/SCREENSHOT]
Primary tasks users perform: [LIST]
For the audit:
1. Go through each relevant heuristic (visibility of system status, match to
   real world, user control/freedom, consistency, error prevention,
   recognition over recall, flexibility, aesthetic/minimalist design, error
   recovery, help/docs).
2. For each, note whether the interface passes or has issues; describe each
   issue concretely.
3. Rate each issue's severity (0–4: cosmetic → catastrophic).
4. Give a specific recommendation to fix each issue.
5. Summarize the top 5 issues to address first by severity × frequency.
Be concrete and reference the actual elements, not abstractions.`,
    featured: false,
  },
  {
    id: "65",
    slug: "design-a-user-onboarding-flow",
    title: "Design a User Onboarding Flow",
    titleAr: "Design a User Onboarding Flow",
    description: "Use this when new users sign up but don't reach the \"aha\" moment. The AI designs an onboarding flow that gets users to value quickly and reduces early churn.",
    descriptionAr: "Use this when new users sign up but don't reach the \"aha\" moment. The AI designs an onboarding flow that gets users to value quickly and reduces early churn.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a product designer specializing in activation and onboarding. Design
an onboarding flow for my product.
Product: [WHAT IT IS]
The "aha moment" / core value: [WHAT MAKES USERS GET IT]
Target user: [WHO], signup context: [WEB APP / MOBILE]
Design:
1. Map the ideal path from signup to the aha moment in the fewest steps
   (define the activation milestone explicitly).
2. Decide the onboarding pattern(s) that fit: progressive disclosure, a setup
   checklist, contextual tooltips, an interactive product tour, sample/seed
   data, or empty-state guidance — and justify the choice.
3. Step-by-step flow with what each screen asks/shows and why; defer anything
   non-essential.
4. Reduce friction: what to remove, what to delay, sensible defaults, and
   personalization based on a single key question.
5. Re-engagement: what to do if a user drops off mid-onboarding.
6. Metrics to track activation success.
Keep it short — the best onboarding gets out of the way fast.`,
    promptAr: `You are a product designer specializing in activation and onboarding. Design
an onboarding flow for my product.
Product: [WHAT IT IS]
The "aha moment" / core value: [WHAT MAKES USERS GET IT]
Target user: [WHO], signup context: [WEB APP / MOBILE]
Design:
1. Map the ideal path from signup to the aha moment in the fewest steps
   (define the activation milestone explicitly).
2. Decide the onboarding pattern(s) that fit: progressive disclosure, a setup
   checklist, contextual tooltips, an interactive product tour, sample/seed
   data, or empty-state guidance — and justify the choice.
3. Step-by-step flow with what each screen asks/shows and why; defer anything
   non-essential.
4. Reduce friction: what to remove, what to delay, sensible defaults, and
   personalization based on a single key question.
5. Re-engagement: what to do if a user drops off mid-onboarding.
6. Metrics to track activation success.
Keep it short — the best onboarding gets out of the way fast.`,
    featured: false,
  },
  {
    id: "66",
    slug: "write-ux-microcopy",
    title: "Write UX Microcopy",
    titleAr: "Write UX Microcopy",
    description: "Use this when buttons, error messages, tooltips, and empty states need clear, on-brand wording. Good microcopy quietly improves usability and trust everywhere.",
    descriptionAr: "Use this when buttons, error messages, tooltips, and empty states need clear, on-brand wording. Good microcopy quietly improves usability and trust everywhere.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a UX writer. Write clear, helpful microcopy for the following UI
elements, matching this brand voice: [E.G. "friendly but professional",
"concise and confident"].
Context: [WHAT THE PRODUCT DOES, WHO THE USER IS]
Elements I need copy for:
[LIST — e.g. primary CTA buttons, an empty state for "no projects yet", a
form validation error for invalid email, a delete-confirmation dialog, a
success toast, a loading message, tooltip for a tricky setting]
For each element:
1. Provide the recommended copy (and 1–2 alternatives where tone could vary).
2. Keep it concise, action-oriented, and human — avoid jargon and blame
   ("Please enter a valid email" → friendlier, clearer).
3. For errors: say what happened and how to fix it, never just "error".
4. For confirmations of destructive actions: be explicit about consequences.
5. Ensure consistency in terminology and capitalization across all of them.
Present as a table: element → copy → short rationale.`,
    promptAr: `Act as a UX writer. Write clear, helpful microcopy for the following UI
elements, matching this brand voice: [E.G. "friendly but professional",
"concise and confident"].
Context: [WHAT THE PRODUCT DOES, WHO THE USER IS]
Elements I need copy for:
[LIST — e.g. primary CTA buttons, an empty state for "no projects yet", a
form validation error for invalid email, a delete-confirmation dialog, a
success toast, a loading message, tooltip for a tricky setting]
For each element:
1. Provide the recommended copy (and 1–2 alternatives where tone could vary).
2. Keep it concise, action-oriented, and human — avoid jargon and blame
   ("Please enter a valid email" → friendlier, clearer).
3. For errors: say what happened and how to fix it, never just "error".
4. For confirmations of destructive actions: be explicit about consequences.
5. Ensure consistency in terminology and capitalization across all of them.
Present as a table: element → copy → short rationale.`,
    featured: false,
  },
  {
    id: "67",
    slug: "design-an-effective-empty-state",
    title: "Design an Effective Empty State",
    titleAr: "Design an Effective Empty State",
    description: "Use this for the first thing users see before they have any data — empty dashboards, lists, or inboxes. A good empty state guides users to act instead of leaving them confused.",
    descriptionAr: "Use this for the first thing users see before they have any data — empty dashboards, lists, or inboxes. A good empty state guides users to act instead of leaving them confused.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a product designer. Design an effective empty state for [E.G. "a
projects list when the user has no projects yet"].
Context: [WHAT THE FEATURE DOES, WHAT THE USER SHOULD DO FIRST]
Design the empty state covering:
1. The purpose: orient the user, reduce confusion, and prompt the right first
   action.
2. Content: a clear headline, a one-line explanation of the value, a primary
   CTA (the single most useful next action), and an optional secondary action
   or link to docs/sample data.
3. Visual treatment guidance (illustration/icon, not just blank space) and
   layout.
4. Differentiate the THREE empty-state types and tell me which applies:
   first-use (no data yet), user-cleared (e.g. all tasks done — celebrate),
   and no-results (search/filter returned nothing — offer to adjust).
5. Provide the actual copy and a React + Tailwind component implementing it.
Make it encouraging and action-oriented, never a dead end.`,
    promptAr: `You are a product designer. Design an effective empty state for [E.G. "a
projects list when the user has no projects yet"].
Context: [WHAT THE FEATURE DOES, WHAT THE USER SHOULD DO FIRST]
Design the empty state covering:
1. The purpose: orient the user, reduce confusion, and prompt the right first
   action.
2. Content: a clear headline, a one-line explanation of the value, a primary
   CTA (the single most useful next action), and an optional secondary action
   or link to docs/sample data.
3. Visual treatment guidance (illustration/icon, not just blank space) and
   layout.
4. Differentiate the THREE empty-state types and tell me which applies:
   first-use (no data yet), user-cleared (e.g. all tasks done — celebrate),
   and no-results (search/filter returned nothing — offer to adjust).
5. Provide the actual copy and a React + Tailwind component implementing it.
Make it encouraging and action-oriented, never a dead end.`,
    featured: false,
  },
  {
    id: "68",
    slug: "improve-form-ux",
    title: "Improve Form UX",
    titleAr: "Improve Form UX",
    description: "Use this when a form has high abandonment or frustrates users. Forms are where conversions die — this prompt applies proven form-design best practices.",
    descriptionAr: "Use this when a form has high abandonment or frustrates users. Forms are where conversions die — this prompt applies proven form-design best practices.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a UX designer specializing in forms and conversion. Improve the UX of
this form.
Form purpose: [E.G. SIGNUP / CHECKOUT / SETTINGS]
Current fields & layout: [LIST FIELDS, DESCRIBE LAYOUT, OR PASTE MARKUP]
Problems: [E.G. "high abandonment", "many validation errors"]
Improve it by addressing:
1. Field reduction: which fields are unnecessary or can be deferred/derived;
   ask only for what's truly needed now.
2. Layout: single-column, logical grouping, label placement, and field order.
3. Input design: correct input types/keyboards, autocomplete attributes,
   smart defaults, masks/formatting, and clear required vs optional marking.
4. Validation: inline, real-time-but-not-annoying, validate on blur, helpful
   error messages, and never clear the user's input on error.
5. Feedback: clear progress (if multi-step), disabled-until-valid submit,
   and a visible submitting/success state.
6. Accessibility: labels, focus order, error association (aria-describedby).
Give prioritized recommendations and a revised field list/layout.`,
    promptAr: `Act as a UX designer specializing in forms and conversion. Improve the UX of
this form.
Form purpose: [E.G. SIGNUP / CHECKOUT / SETTINGS]
Current fields & layout: [LIST FIELDS, DESCRIBE LAYOUT, OR PASTE MARKUP]
Problems: [E.G. "high abandonment", "many validation errors"]
Improve it by addressing:
1. Field reduction: which fields are unnecessary or can be deferred/derived;
   ask only for what's truly needed now.
2. Layout: single-column, logical grouping, label placement, and field order.
3. Input design: correct input types/keyboards, autocomplete attributes,
   smart defaults, masks/formatting, and clear required vs optional marking.
4. Validation: inline, real-time-but-not-annoying, validate on blur, helpful
   error messages, and never clear the user's input on error.
5. Feedback: clear progress (if multi-step), disabled-until-valid submit,
   and a visible submitting/success state.
6. Accessibility: labels, focus order, error association (aria-describedby).
Give prioritized recommendations and a revised field list/layout.`,
    featured: false,
  },
  {
    id: "69",
    slug: "run-an-accessibility-wcag-audit",
    title: "Run an Accessibility (WCAG) Audit",
    titleAr: "Run an Accessibility (WCAG) Audit",
    description: "Use this to check whether your UI is usable by people with disabilities and meets WCAG standards — a legal requirement in many places and simply the right thing to do.",
    descriptionAr: "Use this to check whether your UI is usable by people with disabilities and meets WCAG standards — a legal requirement in many places and simply the right thing to do.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are an accessibility (a11y) specialist. Audit the following UI against
WCAG 2.1 AA and tell me how to fix the issues.
Component/page markup: [PASTE HTML/JSX]
Context: [WHAT IT DOES, ANY INTERACTIONS]
Audit for:
1. Semantic structure: correct landmarks, heading order, lists, and use of
   semantic elements vs divs.
2. Keyboard accessibility: everything operable without a mouse, logical focus
   order, visible focus indicators, no keyboard traps.
3. ARIA: correct roles/states/properties — and where ARIA is misused or
   unnecessary (prefer native elements).
4. Forms: labels, error association, instructions.
5. Color & contrast: text contrast ratios, not relying on color alone.
6. Images/media: alt text, decorative vs informative.
7. Dynamic content: focus management for modals/menus, live regions for
   updates.
For each issue: cite the relevant WCAG criterion, rate severity, and show the
corrected markup. End with a manual + automated testing checklist.`,
    promptAr: `You are an accessibility (a11y) specialist. Audit the following UI against
WCAG 2.1 AA and tell me how to fix the issues.
Component/page markup: [PASTE HTML/JSX]
Context: [WHAT IT DOES, ANY INTERACTIONS]
Audit for:
1. Semantic structure: correct landmarks, heading order, lists, and use of
   semantic elements vs divs.
2. Keyboard accessibility: everything operable without a mouse, logical focus
   order, visible focus indicators, no keyboard traps.
3. ARIA: correct roles/states/properties — and where ARIA is misused or
   unnecessary (prefer native elements).
4. Forms: labels, error association, instructions.
5. Color & contrast: text contrast ratios, not relying on color alone.
6. Images/media: alt text, decorative vs informative.
7. Dynamic content: focus management for modals/menus, live regions for
   updates.
For each issue: cite the relevant WCAG criterion, rate severity, and show the
corrected markup. End with a manual + automated testing checklist.`,
    featured: false,
  },
  {
    id: "70",
    slug: "design-a-mobile-first-responsive-layout",
    title: "Design a Mobile-First Responsive Layout",
    titleAr: "Design a Mobile-First Responsive Layout",
    description: "Use this when you need a layout that works beautifully on phones first, then scales up — instead of cramming a desktop design onto small screens.",
    descriptionAr: "Use this when you need a layout that works beautifully on phones first, then scales up — instead of cramming a desktop design onto small screens.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a responsive design expert. Design a mobile-first responsive layout
for [DESCRIBE THE PAGE — e.g. "a product detail page" / "a dashboard"].
Content/sections to include: [LIST]
Provide:
1. The mobile (smallest) layout first: stacking order, what's prioritized
   above the fold, and what's hidden behind taps/accordions.
2. How the layout adapts at tablet and desktop breakpoints (when columns
   appear, when nav changes, when the sidebar shows) — define the breakpoints.
3. Touch considerations: tap target sizes (>= 44px), spacing, thumb-reachable
   primary actions, no hover-only interactions.
4. Performance: image handling and avoiding layout shift across breakpoints.
5. The implementation as React + Tailwind using mobile-first utility classes
   (base styles for mobile, sm:/md:/lg: for larger).
Show the responsive component and annotate the breakpoint decisions.`,
    promptAr: `Act as a responsive design expert. Design a mobile-first responsive layout
for [DESCRIBE THE PAGE — e.g. "a product detail page" / "a dashboard"].
Content/sections to include: [LIST]
Provide:
1. The mobile (smallest) layout first: stacking order, what's prioritized
   above the fold, and what's hidden behind taps/accordions.
2. How the layout adapts at tablet and desktop breakpoints (when columns
   appear, when nav changes, when the sidebar shows) — define the breakpoints.
3. Touch considerations: tap target sizes (>= 44px), spacing, thumb-reachable
   primary actions, no hover-only interactions.
4. Performance: image handling and avoiding layout shift across breakpoints.
5. The implementation as React + Tailwind using mobile-first utility classes
   (base styles for mobile, sm:/md:/lg: for larger).
Show the responsive component and annotate the breakpoint decisions.`,
    featured: false,
  },
  {
    id: "71",
    slug: "design-a-high-converting-pricing-page",
    title: "Design a High-Converting Pricing Page",
    titleAr: "Design a High-Converting Pricing Page",
    description: "Use this when building or improving a SaaS pricing page — one of the highest-stakes pages on any product site. Combines UX, psychology, and clear plan presentation.",
    descriptionAr: "Use this when building or improving a SaaS pricing page — one of the highest-stakes pages on any product site. Combines UX, psychology, and clear plan presentation.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a product designer and conversion specialist. Design a pricing page
for my SaaS.
Product: [WHAT IT IS], plans: [LIST PLANS, PRICES, KEY FEATURES/LIMITS],
target customer: [WHO]
Design covering:
1. Plan structure and layout: how many tiers to show, ordering, and which
   plan to visually highlight as "recommended" and why.
2. Feature presentation: a clear comparison (cards and/or a comparison table)
   that makes differences scannable; lead with value, not feature dumps.
3. Pricing psychology applied honestly: anchoring, monthly/annual toggle with
   savings shown, framing of the recommended tier.
4. Trust & friction reducers: FAQ, money-back/cancel-anytime, social proof
   placement, and a clear CTA per plan.
5. Handling edge cases: a free/enterprise tier, "contact us", usage limits.
6. Accessibility and mobile layout (how the comparison table behaves on
   phones).
7. The React + Tailwind implementation for the pricing cards + toggle.
Give the layout rationale, then the code.`,
    promptAr: `You are a product designer and conversion specialist. Design a pricing page
for my SaaS.
Product: [WHAT IT IS], plans: [LIST PLANS, PRICES, KEY FEATURES/LIMITS],
target customer: [WHO]
Design covering:
1. Plan structure and layout: how many tiers to show, ordering, and which
   plan to visually highlight as "recommended" and why.
2. Feature presentation: a clear comparison (cards and/or a comparison table)
   that makes differences scannable; lead with value, not feature dumps.
3. Pricing psychology applied honestly: anchoring, monthly/annual toggle with
   savings shown, framing of the recommended tier.
4. Trust & friction reducers: FAQ, money-back/cancel-anytime, social proof
   placement, and a clear CTA per plan.
5. Handling edge cases: a free/enterprise tier, "contact us", usage limits.
6. Accessibility and mobile layout (how the comparison table behaves on
   phones).
7. The React + Tailwind implementation for the pricing cards + toggle.
Give the layout rationale, then the code.`,
    featured: false,
  },
  {
    id: "72",
    slug: "create-wireframes-from-requirements",
    title: "Create Wireframes from Requirements",
    titleAr: "Create Wireframes from Requirements",
    description: "Use this when you have a feature idea or requirements but no design, and need a low-fidelity structural blueprint before writing code or hiring a designer.",
    descriptionAr: "Use this when you have a feature idea or requirements but no design, and need a low-fidelity structural blueprint before writing code or hiring a designer.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a UX designer. Turn the following requirements into low-fidelity
wireframe descriptions I can build or hand to a designer.
Feature/requirements: [DESCRIBE WHAT THE FEATURE MUST DO AND USER GOALS]
Platform: [WEB / MOBILE], constraints: [ANY]
For each screen/state in the flow:
1. Describe the layout structurally (regions, sections, and their hierarchy)
   using a text wireframe / ASCII-style block layout.
2. List the key components on each screen and their purpose (no visual
   styling — structure only).
3. Define the primary action and where it sits.
4. Note the important states: loading, empty, error, success.
5. Describe the flow/navigation between screens.
6. Call out the most important content to prioritize visually.
Keep it low-fidelity and focused on structure and flow, not aesthetics. Cover
the full happy path plus key edge states.`,
    promptAr: `Act as a UX designer. Turn the following requirements into low-fidelity
wireframe descriptions I can build or hand to a designer.
Feature/requirements: [DESCRIBE WHAT THE FEATURE MUST DO AND USER GOALS]
Platform: [WEB / MOBILE], constraints: [ANY]
For each screen/state in the flow:
1. Describe the layout structurally (regions, sections, and their hierarchy)
   using a text wireframe / ASCII-style block layout.
2. List the key components on each screen and their purpose (no visual
   styling — structure only).
3. Define the primary action and where it sits.
4. Note the important states: loading, empty, error, success.
5. Describe the flow/navigation between screens.
6. Call out the most important content to prioritize visually.
Keep it low-fidelity and focused on structure and flow, not aesthetics. Cover
the full happy path plus key edge states.`,
    featured: false,
  },
  {
    id: "73",
    slug: "design-error-and-success-states",
    title: "Design Error and Success States",
    titleAr: "Design Error and Success States",
    description: "Use this when your app handles the happy path but feels broken when things go wrong (or right). Well-designed states make an app feel trustworthy and polished.",
    descriptionAr: "Use this when your app handles the happy path but feels broken when things go wrong (or right). Well-designed states make an app feel trustworthy and polished.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a UX designer. Design the error and success states for [DESCRIBE THE
FEATURE/FLOW — e.g. "submitting a payment form"].
For this flow, design:
1. SUCCESS state: confirmation messaging, what the user sees next, clear next
   action, and whether to celebrate or stay subtle.
2. ERROR states — handle each distinctly:
   - Validation errors (user can fix): inline, specific, blame-free.
   - Recoverable system errors (e.g. network): explain + offer retry,
     preserve the user's input.
   - Unrecoverable errors: clear explanation + a path forward (contact/
     support/alternative).
3. Loading/in-progress state so users aren't left guessing.
4. Tone of all messaging (helpful, not technical jargon, never blaming the
   user).
5. Accessibility: announce errors/success to screen readers (live regions),
   move focus appropriately.
6. Provide the actual copy and a React + Tailwind example showing the states.
Make failure feel handled and recoverable, not scary.`,
    promptAr: `You are a UX designer. Design the error and success states for [DESCRIBE THE
FEATURE/FLOW — e.g. "submitting a payment form"].
For this flow, design:
1. SUCCESS state: confirmation messaging, what the user sees next, clear next
   action, and whether to celebrate or stay subtle.
2. ERROR states — handle each distinctly:
   - Validation errors (user can fix): inline, specific, blame-free.
   - Recoverable system errors (e.g. network): explain + offer retry,
     preserve the user's input.
   - Unrecoverable errors: clear explanation + a path forward (contact/
     support/alternative).
3. Loading/in-progress state so users aren't left guessing.
4. Tone of all messaging (helpful, not technical jargon, never blaming the
   user).
5. Accessibility: announce errors/success to screen readers (live regions),
   move focus appropriately.
6. Provide the actual copy and a React + Tailwind example showing the states.
Make failure feel handled and recoverable, not scary.`,
    featured: false,
  },
  {
    id: "74",
    slug: "choose-a-typography-pairing",
    title: "Choose a Typography Pairing",
    titleAr: "Choose a Typography Pairing",
    description: "Use this when text looks amateurish and you need a professional font pairing and type scale, without design training. Typography is the fastest way to make a UI look credible.",
    descriptionAr: "Use this when text looks amateurish and you need a professional font pairing and type scale, without design training. Typography is the fastest way to make a UI look credible.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a typography expert. Recommend a typography system for a [PROJECT TYPE]
with this personality: [E.G. "modern and trustworthy" / "editorial and
elegant" / "technical and clean"].
Deliver:
1. A font pairing recommendation (heading + body) using freely available
   fonts (Google Fonts / system fonts). Give 2 pairing options and explain
   why each fits the brand. Avoid overused/cliché pairings unless justified.
2. When a single well-chosen typeface (with weights) is better than a pairing.
3. A modular type scale (e.g. base 16px with a ratio): exact sizes, line
   heights, and weights for h1–h6, body, small, and caption.
4. Guidance on line length (measure), paragraph spacing, and letter-spacing
   for headings.
5. The implementation as Tailwind config + the font import/link.
6. Accessibility notes (minimum sizes, contrast, not relying on light weights
   for body text).
Present a clean, copy-pasteable spec.`,
    promptAr: `Act as a typography expert. Recommend a typography system for a [PROJECT TYPE]
with this personality: [E.G. "modern and trustworthy" / "editorial and
elegant" / "technical and clean"].
Deliver:
1. A font pairing recommendation (heading + body) using freely available
   fonts (Google Fonts / system fonts). Give 2 pairing options and explain
   why each fits the brand. Avoid overused/cliché pairings unless justified.
2. When a single well-chosen typeface (with weights) is better than a pairing.
3. A modular type scale (e.g. base 16px with a ratio): exact sizes, line
   heights, and weights for h1–h6, body, small, and caption.
4. Guidance on line length (measure), paragraph spacing, and letter-spacing
   for headings.
5. The implementation as Tailwind config + the font import/link.
6. Accessibility notes (minimum sizes, contrast, not relying on light weights
   for body text).
Present a clean, copy-pasteable spec.`,
    featured: false,
  },
  {
    id: "75",
    slug: "design-a-dashboard-data-visualization-layout",
    title: "Design a Dashboard / Data Visualization Layout",
    titleAr: "Design a Dashboard / Data Visualization Layout",
    description: "Use this when you have metrics to display and need to organize them into a clear, scannable dashboard — choosing the right charts and hierarchy instead of dumping numbers on a screen.",
    descriptionAr: "Use this when you have metrics to display and need to organize them into a clear, scannable dashboard — choosing the right charts and hierarchy instead of dumping numbers on a screen.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a data visualization and dashboard design expert. Help me design a
dashboard.
Audience & goal: [WHO USES IT AND WHAT DECISIONS THEY MAKE]
Metrics/data available: [LIST THE KEY METRICS AND THEIR TYPES]
Design:
1. Prioritize: which metrics matter most and belong at the top; apply the
   inverted-pyramid (most important, glanceable info first).
2. For each metric, recommend the RIGHT visualization (single stat/KPI,
   line for trends, bar for comparison, etc.) and why — avoid chart types
   that mislead.
3. Layout & grouping: logical sections, an F/Z reading pattern, and how the
   grid reflows on smaller screens.
4. Reduce clutter: what to remove, sensible use of color (and not relying on
   color alone), clear labels and units, and meaningful comparisons (vs prior
   period / target).
5. Interaction: filters, date ranges, drill-downs — only where they add value.
6. A React + Tailwind layout skeleton with placeholders noting where to wire
   in a charting library.
Prioritize clarity and decision-making over visual flashiness.`,
    promptAr: `You are a data visualization and dashboard design expert. Help me design a
dashboard.
Audience & goal: [WHO USES IT AND WHAT DECISIONS THEY MAKE]
Metrics/data available: [LIST THE KEY METRICS AND THEIR TYPES]
Design:
1. Prioritize: which metrics matter most and belong at the top; apply the
   inverted-pyramid (most important, glanceable info first).
2. For each metric, recommend the RIGHT visualization (single stat/KPI,
   line for trends, bar for comparison, etc.) and why — avoid chart types
   that mislead.
3. Layout & grouping: logical sections, an F/Z reading pattern, and how the
   grid reflows on smaller screens.
4. Reduce clutter: what to remove, sensible use of color (and not relying on
   color alone), clear labels and units, and meaningful comparisons (vs prior
   period / target).
5. Interaction: filters, date ranges, drill-downs — only where they add value.
6. A React + Tailwind layout skeleton with placeholders noting where to wire
   in a charting library.
Prioritize clarity and decision-making over visual flashiness.`,
    featured: false,
  },
  {
    id: "76",
    slug: "improve-visual-hierarchy",
    title: "Improve Visual Hierarchy",
    titleAr: "Improve Visual Hierarchy",
    description: "Use this when a screen feels flat or cluttered and users don't know where to look. Strong visual hierarchy guides the eye to what matters most.",
    descriptionAr: "Use this when a screen feels flat or cluttered and users don't know where to look. Strong visual hierarchy guides the eye to what matters most.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a visual designer. Improve the visual hierarchy of this UI so users
instantly know where to look and what's most important.
UI: [DESCRIBE OR PASTE MARKUP/SCREENSHOT]
The single most important thing on this screen: [WHAT THE USER SHOULD NOTICE/
DO FIRST]
Analyze and improve hierarchy using:
1. Size & scale: is the most important element appropriately dominant?
2. Color & contrast: drawing attention to primary actions, de-emphasizing
   secondary ones.
3. Spacing & grouping: using whitespace and proximity to create clear
   sections and relationships (Gestalt principles).
4. Typography: weight and size to distinguish headings, body, and labels.
5. Position & flow: aligning to the natural reading pattern.
6. Reducing competing elements: too many bold/colored/primary items dilute
   hierarchy — recommend what to tone down.
Give specific before→after changes for each element, and the reasoning.
Limit the screen to ONE primary action visually.`,
    promptAr: `Act as a visual designer. Improve the visual hierarchy of this UI so users
instantly know where to look and what's most important.
UI: [DESCRIBE OR PASTE MARKUP/SCREENSHOT]
The single most important thing on this screen: [WHAT THE USER SHOULD NOTICE/
DO FIRST]
Analyze and improve hierarchy using:
1. Size & scale: is the most important element appropriately dominant?
2. Color & contrast: drawing attention to primary actions, de-emphasizing
   secondary ones.
3. Spacing & grouping: using whitespace and proximity to create clear
   sections and relationships (Gestalt principles).
4. Typography: weight and size to distinguish headings, body, and labels.
5. Position & flow: aligning to the natural reading pattern.
6. Reducing competing elements: too many bold/colored/primary items dilute
   hierarchy — recommend what to tone down.
Give specific before→after changes for each element, and the reasoning.
Limit the screen to ONE primary action visually.`,
    featured: false,
  },
  {
    id: "77",
    slug: "design-a-modal-dialog-pat-tern",
    title: "Design a Modal / Dialog Pat tern",
    titleAr: "Design a Modal / Dialog Pat tern",
    description: "Use this when you need modals done right — accessible, non-intrusive, and used only when appropriate. Modals are frequently misused and inaccessible.",
    descriptionAr: "Use this when you need modals done right — accessible, non-intrusive, and used only when appropriate. Modals are frequently misused and inaccessible.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a UX engineer. Help me design and implement a modal/dialog correctly.
Use case: [E.G. "confirm deletion" / "edit profile in a dialog" / "show
details"]
Cover:
1. First, tell me whether a modal is even the right pattern here, or whether
   an inline expansion, a separate page, or a non-blocking panel would be
   better — and why.
2. If a modal fits, design it: clear title, focused content, primary +
   secondary actions, and a sensible size; avoid modals-on-modals.
3. Accessibility (critical): role="dialog"/aria-modal, focus moves into the
   modal on open and is TRAPPED, Escape closes, focus returns to the trigger
   on close, background is inert and non-scrollable, and the title is the
   accessible name.
4. Behavior: close on backdrop click (but not for destructive confirms),
   prevent body scroll, animate in/out.
5. For destructive actions: require explicit confirmation and label the
   button with the actual action ("Delete project", not "OK").
6. A reusable, accessible React + Tailwind <Modal> implementation.
Lead with the "should this be a modal?" decision.`,
    promptAr: `You are a UX engineer. Help me design and implement a modal/dialog correctly.
Use case: [E.G. "confirm deletion" / "edit profile in a dialog" / "show
details"]
Cover:
1. First, tell me whether a modal is even the right pattern here, or whether
   an inline expansion, a separate page, or a non-blocking panel would be
   better — and why.
2. If a modal fits, design it: clear title, focused content, primary +
   secondary actions, and a sensible size; avoid modals-on-modals.
3. Accessibility (critical): role="dialog"/aria-modal, focus moves into the
   modal on open and is TRAPPED, Escape closes, focus returns to the trigger
   on close, background is inert and non-scrollable, and the title is the
   accessible name.
4. Behavior: close on backdrop click (but not for destructive confirms),
   prevent body scroll, animate in/out.
5. For destructive actions: require explicit confirmation and label the
   button with the actual action ("Delete project", not "OK").
6. A reusable, accessible React + Tailwind <Modal> implementation.
Lead with the "should this be a modal?" decision.`,
    featured: false,
  },
  {
    id: "78",
    slug: "create-a-component-spec-for-developers",
    title: "Create a Component Spec for Developers",
    titleAr: "Create a Component Spec for Developers",
    description: "Use this to translate a UI component idea into a precise spec a developer can build from without guessing — covering props, states, behavior, and edge cases.",
    descriptionAr: "Use this to translate a UI component idea into a precise spec a developer can build from without guessing — covering props, states, behavior, and edge cases.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior product designer writing a component specification for an
engineer. Spec out the following component so it can be built with zero
ambiguity.
Component: [E.G. "a searchable multi-select dropdown"]
Where it's used / purpose: [CONTEXT]
Write a complete spec covering:
1. Purpose and usage guidelines (when to use / not use it).
2. Anatomy: the visual parts of the component.
3. Props/API: every configurable prop with type, default, and description.
4. ALL states: default, hover, focus, active, disabled, loading, error,
   empty, and selected — describe each.
5. Behavior & interactions: keyboard support, what each action does, edge
   cases (long text, many items, no results).
6. Accessibility requirements (roles, ARIA, keyboard, focus).
7. Responsive behavior.
8. Content guidelines (placeholder text, truncation rules).
Present it as a structured spec doc. Be exhaustive about states and edge
cases — that's where build ambiguity hides.`,
    promptAr: `Act as a senior product designer writing a component specification for an
engineer. Spec out the following component so it can be built with zero
ambiguity.
Component: [E.G. "a searchable multi-select dropdown"]
Where it's used / purpose: [CONTEXT]
Write a complete spec covering:
1. Purpose and usage guidelines (when to use / not use it).
2. Anatomy: the visual parts of the component.
3. Props/API: every configurable prop with type, default, and description.
4. ALL states: default, hover, focus, active, disabled, loading, error,
   empty, and selected — describe each.
5. Behavior & interactions: keyboard support, what each action does, edge
   cases (long text, many items, no results).
6. Accessibility requirements (roles, ARIA, keyboard, focus).
7. Responsive behavior.
8. Content guidelines (placeholder text, truncation rules).
Present it as a structured spec doc. Be exhaustive about states and edge
cases — that's where build ambiguity hides.`,
    featured: false,
  },
  {
    id: "79",
    slug: "design-a-dark-mode-variant",
    title: "Design a Dark Mode Variant",
    titleAr: "Design a Dark Mode Variant",
    description: "Use this when you have a light theme and need a proper dark mode — not just inverted colors, but a thoughtfully designed dark palette that's comfortable and accessible.",
    descriptionAr: "Use this when you have a light theme and need a proper dark mode — not just inverted colors, but a thoughtfully designed dark palette that's comfortable and accessible.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a UI designer experienced in dark mode. Design a dark-mode variant of
my existing light theme.
Current light palette: [PASTE COLORS — backgrounds, surfaces, text, primary,
borders]
Design the dark theme covering:
1. The core principle: dark mode is NOT just inverted colors. Use dark gray
   (not pure black) backgrounds, and lighten/desaturate brand colors so they
   don't vibrate on dark surfaces.
2. An elevation system: lighter surfaces = higher elevation (since shadows
   are weak on dark) — define background, surface, and elevated-surface
   colors.
3. Text colors: avoid pure white for body text (use slightly off-white) to
   reduce eye strain; define primary/secondary/disabled text.
4. Adjust accent/semantic colors for sufficient contrast on dark backgrounds
   (verify WCAG AA).
5. Borders, dividers, and how to handle images/illustrations in dark mode.
6. Deliver the dark palette as exact HEX values mapped to the same token
   names as the light theme, ready for a Tailwind dark: setup.
Explain each adjustment briefly.`,
    promptAr: `You are a UI designer experienced in dark mode. Design a dark-mode variant of
my existing light theme.
Current light palette: [PASTE COLORS — backgrounds, surfaces, text, primary,
borders]
Design the dark theme covering:
1. The core principle: dark mode is NOT just inverted colors. Use dark gray
   (not pure black) backgrounds, and lighten/desaturate brand colors so they
   don't vibrate on dark surfaces.
2. An elevation system: lighter surfaces = higher elevation (since shadows
   are weak on dark) — define background, surface, and elevated-surface
   colors.
3. Text colors: avoid pure white for body text (use slightly off-white) to
   reduce eye strain; define primary/secondary/disabled text.
4. Adjust accent/semantic colors for sufficient contrast on dark backgrounds
   (verify WCAG AA).
5. Borders, dividers, and how to handle images/illustrations in dark mode.
6. Deliver the dark palette as exact HEX values mapped to the same token
   names as the light theme, ready for a Tailwind dark: setup.
Explain each adjustment briefly.`,
    featured: false,
  },
  {
    id: "80",
    slug: "optimize-ctas-and-conversion-copy",
    title: "Optimize CTAs and Conversion Copy",
    titleAr: "Optimize CTAs and Conversion Copy",
    description: "Use this when a page gets traffic but not conversions. The AI sharpens calls-to-action and key copy to be clearer and more compelling — without resorting to dark patterns.",
    descriptionAr: "Use this when a page gets traffic but not conversions. The AI sharpens calls-to-action and key copy to be clearer and more compelling — without resorting to dark patterns.",
    category: "design",
    difficulty: "intermediate",
    tags: ["UI/UX & Design"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a conversion copywriter and UX strategist. Optimize the calls-to-
action and key copy on my page to increase conversions — ethically, no dark
patterns.
Page goal & desired action: [WHAT YOU WANT USERS TO DO]
Audience: [WHO], current copy: [PASTE HEADLINE, SUBHEAD, CTA BUTTONS, KEY
SECTIONS]
Improve:
1. The headline: make it benefit-led and specific (what the user gets), not
   feature- or company-centric. Give 3 options.
2. The subhead: support the headline and address the main objection.
3. CTA buttons: replace vague labels ("Submit", "Learn more") with specific,
   value-driven, first-person-friendly text; give options and explain.
4. Reduce friction & objections: what doubt is stopping users, and the copy/
   microcopy that addresses it (risk reversal, social proof placement).
5. Clarity over cleverness: cut jargon and fluff; tighten everything.
6. Suggest 1–2 things to A/B test.
Keep it honest and clear — persuasion through clarity and real value, not
manipulation. Present as before → after with reasoning.`,
    promptAr: `Act as a conversion copywriter and UX strategist. Optimize the calls-to-
action and key copy on my page to increase conversions — ethically, no dark
patterns.
Page goal & desired action: [WHAT YOU WANT USERS TO DO]
Audience: [WHO], current copy: [PASTE HEADLINE, SUBHEAD, CTA BUTTONS, KEY
SECTIONS]
Improve:
1. The headline: make it benefit-led and specific (what the user gets), not
   feature- or company-centric. Give 3 options.
2. The subhead: support the headline and address the main objection.
3. CTA buttons: replace vague labels ("Submit", "Learn more") with specific,
   value-driven, first-person-friendly text; give options and explain.
4. Reduce friction & objections: what doubt is stopping users, and the copy/
   microcopy that addresses it (risk reversal, social proof placement).
5. Clarity over cleverness: cut jargon and fluff; tighten everything.
6. Suggest 1–2 things to A/B test.
Keep it honest and clear — persuasion through clarity and real value, not
manipulation. Present as before → after with reasoning.`,
    featured: false,
  },
];
