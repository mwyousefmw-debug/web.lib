import type { Prompt } from "@/types";

// Productivity & Career — Prompts 81-100
// Source: docs/WebLib-100-AI-Prompts-Every-Programmer.pdf
export const careerPrompts: Prompt[] = [
  {
    id: "81",
    slug: "generate-a-professional-readme",
    title: "Generate a Professional README",
    titleAr: "Generate a Professional README",
    description: "Use this when your project's README is missing or weak. A great README is the first thing employers, clients, and contributors see — it makes or breaks first impressions on GitHub.",
    descriptionAr: "Use this when your project's README is missing or weak. A great README is the first thing employers, clients, and contributors see — it makes or breaks first impressions on GitHub.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an open-source maintainer. Write a professional, polished README.md
for my project.
Project details:
- Name & one-line description: [>>.]
- What problem it solves / key features: [>>.]
- Tech stack: [>>.]
- How to install & run locally: [STEPS / COMMANDS]
- Environment variables needed: [LIST]
- How to use it (basic example): [>>.]
- License: [>>.], repo URL: [>>.]
Produce a complete README in Markdown with:
1. A title, concise description, and (placeholder) badges (build, license,
   version).
2. A short "Features" list and, if useful, a screenshot/demo placeholder.
3. Tech stack, prerequisites, and clear step-by-step installation & setup.
4. Usage examples with code blocks.
5. Environment variable documentation (as a table).
6. Project structure overview, scripts, and a Contributing + License section.
7. A table of contents if the README is long.
Make it scannable, well-formatted, and welcoming to newcomers. Fill what you
can and clearly mark placeholders for what I must complete.`,
    promptAr: `Act as an open-source maintainer. Write a professional, polished README.md
for my project.
Project details:
- Name & one-line description: [>>.]
- What problem it solves / key features: [>>.]
- Tech stack: [>>.]
- How to install & run locally: [STEPS / COMMANDS]
- Environment variables needed: [LIST]
- How to use it (basic example): [>>.]
- License: [>>.], repo URL: [>>.]
Produce a complete README in Markdown with:
1. A title, concise description, and (placeholder) badges (build, license,
   version).
2. A short "Features" list and, if useful, a screenshot/demo placeholder.
3. Tech stack, prerequisites, and clear step-by-step installation & setup.
4. Usage examples with code blocks.
5. Environment variable documentation (as a table).
6. Project structure overview, scripts, and a Contributing + License section.
7. A table of contents if the README is long.
Make it scannable, well-formatted, and welcoming to newcomers. Fill what you
can and clearly mark placeholders for what I must complete.`,
    featured: false,
  },
  {
    id: "82",
    slug: "write-conventional-git-commit-messages",
    title: "Write Conventional Git Commit Messages",
    titleAr: "Write Conventional Git Commit Messages",
    description: "Use this when your commit history is a mess of \"fix\", \"update\", \"wip\". Clean, conventional commits make history readable and enable automated changelogs and versioning.",
    descriptionAr: "Use this when your commit history is a mess of \"fix\", \"update\", \"wip\". Clean, conventional commits make history readable and enable automated changelogs and versioning.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a Git workflow expert. Write clean commit messages following the
Conventional Commits specification for the changes I describe.
My changes: [DESCRIBE WHAT YOU DID, OR PASTE THE DIFF / git status]
For each logical change, produce a commit message that:
1. Uses the correct type (feat, fix, docs, style, refactor, perf, test,
   build, ci, chore) and an optional scope.
2. Has a concise, imperative-mood subject line under ~50 chars ("add" not
   "added").
3. Includes a body (when the change isn't trivial) explaining WHAT and WHY,
   not how.
4. Notes BREAKING CHANGE in the footer when applicable.
5. References issues if I mention any.
Also:
- If my described changes mix unrelated things, recommend how to SPLIT them
  into separate atomic commits, and give a message for each.
- Show the final message(s) in copy-paste-ready format.`,
    promptAr: `You are a Git workflow expert. Write clean commit messages following the
Conventional Commits specification for the changes I describe.
My changes: [DESCRIBE WHAT YOU DID, OR PASTE THE DIFF / git status]
For each logical change, produce a commit message that:
1. Uses the correct type (feat, fix, docs, style, refactor, perf, test,
   build, ci, chore) and an optional scope.
2. Has a concise, imperative-mood subject line under ~50 chars ("add" not
   "added").
3. Includes a body (when the change isn't trivial) explaining WHAT and WHY,
   not how.
4. Notes BREAKING CHANGE in the footer when applicable.
5. References issues if I mention any.
Also:
- If my described changes mix unrelated things, recommend how to SPLIT them
  into separate atomic commits, and give a message for each.
- Show the final message(s) in copy-paste-ready format.`,
    featured: false,
  },
  {
    id: "83",
    slug: "document-a-codebase",
    title: "Document a Codebase",
    titleAr: "Document a Codebase",
    description: "Use this when a project lacks documentation and new developers (or future-you) struggle to understand it. Produces the architectural docs that READMEs alone don't cover.",
    descriptionAr: "Use this when a project lacks documentation and new developers (or future-you) struggle to understand it. Produces the architectural docs that READMEs alone don't cover.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior engineer who writes excellent technical documentation. Help
me document my codebase so a new developer can become productive quickly.
Project overview: [WHAT IT IS, STACK]
Structure / key modules: [PASTE FOLDER TREE OR DESCRIBE MAIN PARTS]
Key flows: [E.G. AUTH FLOW, REQUEST LIFECYCLE]
Produce:
1. An ARCHITECTURE.md: high-level overview, the main components and how they
   interact, the request/data flow, and key design decisions (and why).
2. A "Getting Started for Developers" guide: prerequisites, local setup,
   running tests, common scripts, and how to make a first change.
3. Documentation of the most important modules: each module's responsibility,
   its public interface, and how it's used.
4. A glossary of domain-specific terms.
5. A simple diagram described in text or Mermaid syntax for the architecture.
Write clearly for a developer new to the project. Mark anything you need me
to fill in. Prioritize the docs that reduce onboarding time the most.`,
    promptAr: `Act as a senior engineer who writes excellent technical documentation. Help
me document my codebase so a new developer can become productive quickly.
Project overview: [WHAT IT IS, STACK]
Structure / key modules: [PASTE FOLDER TREE OR DESCRIBE MAIN PARTS]
Key flows: [E.G. AUTH FLOW, REQUEST LIFECYCLE]
Produce:
1. An ARCHITECTURE.md: high-level overview, the main components and how they
   interact, the request/data flow, and key design decisions (and why).
2. A "Getting Started for Developers" guide: prerequisites, local setup,
   running tests, common scripts, and how to make a first change.
3. Documentation of the most important modules: each module's responsibility,
   its public interface, and how it's used.
4. A glossary of domain-specific terms.
5. A simple diagram described in text or Mermaid syntax for the architecture.
Write clearly for a developer new to the project. Mark anything you need me
to fill in. Prioritize the docs that reduce onboarding time the most.`,
    featured: false,
  },
  {
    id: "84",
    slug: "write-code-comments-and-jsdoc",
    title: "Write Code Comments and JSDoc",
    titleAr: "Write Code Comments and JSDoc",
    description: "Use this to add high-value comments and JSDoc/TSDoc to code — explaining the \"why\" behind tricky logic and documenting function signatures for editor tooltips and autocompletion.",
    descriptionAr: "Use this to add high-value comments and JSDoc/TSDoc to code — explaining the \"why\" behind tricky logic and documenting function signatures for editor tooltips and autocompletion.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are an expert at writing useful code comments. Add high-quality comments
and JSDoc/TSDoc to the following code.
Code: [PASTE]
Language: [JS / TS]
Follow these rules:
1. Add JSDoc/TSDoc to exported functions/classes: a one-line summary, @param
   with types/meaning, @returns, @throws where relevant, and an @example for
   non-obvious usage.
2. Add INLINE comments only where they add value — explain WHY (intent,
   trade-offs, non-obvious decisions, gotchas, references to specs/issues),
   NOT what the code obviously does.
3. Do NOT add noise like ">/ increment i" or restate the code.
4. Flag any code that's so unclear it needs a comment as a sign it should be
   refactored instead — suggest the refactor.
5. Keep comments concise and maintainable (comments that won't quickly go
   stale).
Return the commented code, and a short note on anything you'd refactor rather
than comment.`,
    promptAr: `You are an expert at writing useful code comments. Add high-quality comments
and JSDoc/TSDoc to the following code.
Code: [PASTE]
Language: [JS / TS]
Follow these rules:
1. Add JSDoc/TSDoc to exported functions/classes: a one-line summary, @param
   with types/meaning, @returns, @throws where relevant, and an @example for
   non-obvious usage.
2. Add INLINE comments only where they add value — explain WHY (intent,
   trade-offs, non-obvious decisions, gotchas, references to specs/issues),
   NOT what the code obviously does.
3. Do NOT add noise like ">/ increment i" or restate the code.
4. Flag any code that's so unclear it needs a comment as a sign it should be
   refactored instead — suggest the refactor.
5. Keep comments concise and maintainable (comments that won't quickly go
   stale).
Return the commented code, and a short note on anything you'd refactor rather
than comment.`,
    featured: false,
  },
  {
    id: "85",
    slug: "write-a-dockerfile-and-docker-compose-setup",
    title: "Write a Dockerfile and docker-compose Setup",
    titleAr: "Write a Dockerfile and docker-compose Setup",
    description: "Use this when you need to containerize an app for consistent environments and deployment. Covers a production-grade, optimized Dockerfile and local multi-service orchestration.",
    descriptionAr: "Use this when you need to containerize an app for consistent environments and deployment. Covers a production-grade, optimized Dockerfile and local multi-service orchestration.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a DevOps engineer. Containerize my application with a production-grade
Dockerfile and a docker-compose setup for local development.
App: [E.G. "Node.js + Express + TypeScript API"], also needs: [E.G.
PostgreSQL, Redis]
Build/run commands: [E.G. npm run build, npm start]
Deliver:
1. A multi-stage Dockerfile that: installs deps efficiently (leveraging layer
   caching), builds the app, and produces a small final image (slim/alpine
   base, only production deps, non-root user).
2. A .dockerignore to keep the image clean and builds fast.
3. A docker-compose.yml for local dev wiring the app + database + cache, with
   environment variables, volumes for persistence, health checks, and
   sensible service dependencies (depends_on with conditions).
4. How to handle env vars/secrets (not baked into the image).
5. Commands to build, run, and tear down, plus how to view logs.
Explain each significant choice (multi-stage, non-root, caching) briefly.`,
    promptAr: `Act as a DevOps engineer. Containerize my application with a production-grade
Dockerfile and a docker-compose setup for local development.
App: [E.G. "Node.js + Express + TypeScript API"], also needs: [E.G.
PostgreSQL, Redis]
Build/run commands: [E.G. npm run build, npm start]
Deliver:
1. A multi-stage Dockerfile that: installs deps efficiently (leveraging layer
   caching), builds the app, and produces a small final image (slim/alpine
   base, only production deps, non-root user).
2. A .dockerignore to keep the image clean and builds fast.
3. A docker-compose.yml for local dev wiring the app + database + cache, with
   environment variables, volumes for persistence, health checks, and
   sensible service dependencies (depends_on with conditions).
4. How to handle env vars/secrets (not baked into the image).
5. Commands to build, run, and tear down, plus how to view logs.
Explain each significant choice (multi-stage, non-root, caching) briefly.`,
    featured: false,
  },
  {
    id: "86",
    slug: "set-up-a-ci-cd-pipeline-with-github-actions",
    title: "Set Up a CI/CD Pipeline with GitHub Actions",
    titleAr: "Set Up a CI/CD Pipeline with GitHub Actions",
    description: "Use this to automate testing, linting, building, and deployment on every push. A solid CI/CD pipeline catches bugs early and removes manual deployment steps.",
    descriptionAr: "Use this to automate testing, linting, building, and deployment on every push. A solid CI/CD pipeline catches bugs early and removes manual deployment steps.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a DevOps engineer. Create a CI/CD pipeline using GitHub Actions for
my project.
Project: [STACK — e.g. "Next.js app" / "Node.js API"], package manager: [npm/
pnpm/yarn], deploy target: [E.G. VERCEL / A VPS VIA SSH / DOCKER REGISTRY]
Create workflow file(s) that:
1. CI (on pull requests and pushes to main): install deps with caching, run
   lint, type-check, and tests; fail fast and run jobs in parallel where
   sensible.
2. Build the app and (if applicable) build/push a Docker image.
3. CD (on push/merge to main, after CI passes): deploy to the target, using
   GitHub Secrets for credentials — never hardcode secrets.
4. Use a matrix for multiple Node versions if useful, and concurrency control
   to cancel superseded runs.
5. Add a status badge snippet for the README.
Provide the complete .github/workflows/*.yml file(s) with comments, and list
exactly which GitHub Secrets I need to configure.`,
    promptAr: `You are a DevOps engineer. Create a CI/CD pipeline using GitHub Actions for
my project.
Project: [STACK — e.g. "Next.js app" / "Node.js API"], package manager: [npm/
pnpm/yarn], deploy target: [E.G. VERCEL / A VPS VIA SSH / DOCKER REGISTRY]
Create workflow file(s) that:
1. CI (on pull requests and pushes to main): install deps with caching, run
   lint, type-check, and tests; fail fast and run jobs in parallel where
   sensible.
2. Build the app and (if applicable) build/push a Docker image.
3. CD (on push/merge to main, after CI passes): deploy to the target, using
   GitHub Secrets for credentials — never hardcode secrets.
4. Use a matrix for multiple Node versions if useful, and concurrency control
   to cancel superseded runs.
5. Add a status badge snippet for the README.
Provide the complete .github/workflows/*.yml file(s) with comments, and list
exactly which GitHub Secrets I need to configure.`,
    featured: false,
  },
  {
    id: "87",
    slug: "write-a-technical-blog-post",
    title: "Write a Technical Blog Post",
    titleAr: "Write a Technical Blog Post",
    description: "Use this to turn something you built or learned into a clear technical article — great for personal branding, sharing knowledge, and demonstrating expertise to employers.",
    descriptionAr: "Use this to turn something you built or learned into a clear technical article — great for personal branding, sharing knowledge, and demonstrating expertise to employers.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a technical writer who creates clear, engaging developer content. Help
me write a technical blog post.
Topic: [WHAT YOU WANT TO WRITE ABOUT — e.g. "how I built X" / "explaining
concept Y"]
Audience level: [BEGINNER / INTERMEDIATE / ADVANCED]
Key points I want to cover: [LIST]
Goal: [TEACH / SHOWCASE A PROJECT / SHARE A LESSON]
Write a post that:
1. Opens with a hook and clearly states what the reader will learn/gain.
2. Is well-structured with descriptive headings and a logical progression.
3. Explains concepts clearly with analogies where helpful, building from
   simple to complex.
4. Includes well-commented, correct code examples that actually run.
5. Anticipates and answers the reader's likely questions and common pitfalls.
6. Ends with a concise summary and a clear next step / call to action.
7. Has an SEO-friendly title (give 3 options) and a meta description.
Keep the tone knowledgeable but approachable; avoid filler. Mark where I
should add screenshots or my own anecdotes.`,
    promptAr: `Act as a technical writer who creates clear, engaging developer content. Help
me write a technical blog post.
Topic: [WHAT YOU WANT TO WRITE ABOUT — e.g. "how I built X" / "explaining
concept Y"]
Audience level: [BEGINNER / INTERMEDIATE / ADVANCED]
Key points I want to cover: [LIST]
Goal: [TEACH / SHOWCASE A PROJECT / SHARE A LESSON]
Write a post that:
1. Opens with a hook and clearly states what the reader will learn/gain.
2. Is well-structured with descriptive headings and a logical progression.
3. Explains concepts clearly with analogies where helpful, building from
   simple to complex.
4. Includes well-commented, correct code examples that actually run.
5. Anticipates and answers the reader's likely questions and common pitfalls.
6. Ends with a concise summary and a clear next step / call to action.
7. Has an SEO-friendly title (give 3 options) and a meta description.
Keep the tone knowledgeable but approachable; avoid filler. Mark where I
should add screenshots or my own anecdotes.`,
    featured: false,
  },
  {
    id: "88",
    slug: "prepare-for-a-technical-interview",
    title: "Prepare for a Technical Interview",
    titleAr: "Prepare for a Technical Interview",
    description: "Use this to prepare for coding and system-design interviews with targeted practice, explanations, and mock questions tailored to the role you're targeting.",
    descriptionAr: "Use this to prepare for coding and system-design interviews with targeted practice, explanations, and mock questions tailored to the role you're targeting.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a technical interview coach who has interviewed at top tech companies.
Help me prepare for an interview.
Role: [E.G. "frontend developer" / "full-stack" / "backend"], level: [JUNIOR/
MID/SENIOR], company type: [STARTUP / BIG TECH / AGENCY]
My current strengths & weak areas: [BE HONEST]
Help me by:
1. Listing the topics likely to be tested for this role/level (DSA, system
   design, framework-specific, behavioral) and how heavily each is weighted.
2. Creating a focused prep plan for the next [X DAYS/WEEKS] prioritizing my
   weak areas.
3. Giving me 5 realistic technical questions for this role — but DON'T give
   answers yet; let me attempt them, then you review my solutions for
   correctness, edge cases, complexity, and communication.
4. For coding problems, coach me on explaining my thought process out loud
   (what interviewers actually score).
5. Providing 5 behavioral questions and the STAR-method structure to answer
   them.
Start with the topic breakdown and prep plan, then ask me which area to drill
first.`,
    promptAr: `Act as a technical interview coach who has interviewed at top tech companies.
Help me prepare for an interview.
Role: [E.G. "frontend developer" / "full-stack" / "backend"], level: [JUNIOR/
MID/SENIOR], company type: [STARTUP / BIG TECH / AGENCY]
My current strengths & weak areas: [BE HONEST]
Help me by:
1. Listing the topics likely to be tested for this role/level (DSA, system
   design, framework-specific, behavioral) and how heavily each is weighted.
2. Creating a focused prep plan for the next [X DAYS/WEEKS] prioritizing my
   weak areas.
3. Giving me 5 realistic technical questions for this role — but DON'T give
   answers yet; let me attempt them, then you review my solutions for
   correctness, edge cases, complexity, and communication.
4. For coding problems, coach me on explaining my thought process out loud
   (what interviewers actually score).
5. Providing 5 behavioral questions and the STAR-method structure to answer
   them.
Start with the topic breakdown and prep plan, then ask me which area to drill
first.`,
    featured: false,
  },
  {
    id: "89",
    slug: "optimize-your-developer-resume",
    title: "Optimize Your Developer Resume",
    titleAr: "Optimize Your Developer Resume",
    description: "Use this to transform a flat resume into one that passes applicant tracking systems and impresses hiring managers — with quantified, impact-focused bullet points.",
    descriptionAr: "Use this to transform a flat resume into one that passes applicant tracking systems and impresses hiring managers — with quantified, impact-focused bullet points.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a tech recruiter and resume expert who has screened thousands of
developer resumes. Review and improve mine.
Target role: [JOB TITLE], target companies: [TYPE], years of experience: [X]
My current resume content: [PASTE — experience bullets, skills, projects]
(Optional) Job description I'm targeting: [PASTE]
Improve it by:
1. Rewriting experience bullets to be impact- and result-focused using strong
   action verbs and QUANTIFIED outcomes (e.g. "reduced load time 40%",
   "served 10k users") — not just listed responsibilities. Where I lack
   numbers, ask me what to measure.
2. Tailoring keywords to the target role/JD so it passes ATS, without keyword
   stuffing.
3. Tightening to be concise and scannable (most-relevant first); flagging
   filler, clichés ("team player"), and anything to cut.
4. Advising on structure/section order and length for my experience level.
5. Strengthening the skills and projects sections (relevance over volume).
Give me the rewritten bullets and a prioritized list of changes. Ask me for
any missing metrics rather than inventing them.`,
    promptAr: `Act as a tech recruiter and resume expert who has screened thousands of
developer resumes. Review and improve mine.
Target role: [JOB TITLE], target companies: [TYPE], years of experience: [X]
My current resume content: [PASTE — experience bullets, skills, projects]
(Optional) Job description I'm targeting: [PASTE]
Improve it by:
1. Rewriting experience bullets to be impact- and result-focused using strong
   action verbs and QUANTIFIED outcomes (e.g. "reduced load time 40%",
   "served 10k users") — not just listed responsibilities. Where I lack
   numbers, ask me what to measure.
2. Tailoring keywords to the target role/JD so it passes ATS, without keyword
   stuffing.
3. Tightening to be concise and scannable (most-relevant first); flagging
   filler, clichés ("team player"), and anything to cut.
4. Advising on structure/section order and length for my experience level.
5. Strengthening the skills and projects sections (relevance over volume).
Give me the rewritten bullets and a prioritized list of changes. Ask me for
any missing metrics rather than inventing them.`,
    featured: false,
  },
  {
    id: "90",
    slug: "write-a-test-suite",
    title: "Write a Test Suite",
    titleAr: "Write a Test Suite",
    description: "Use this when code lacks tests and you want meaningful unit and integration coverage — not just trivial tests, but ones that catch real bugs and document behavior.",
    descriptionAr: "Use this when code lacks tests and you want meaningful unit and integration coverage — not just trivial tests, but ones that catch real bugs and document behavior.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a testing expert who values meaningful coverage over vanity metrics.
Write a thorough test suite for the following code.
Code under test: [PASTE]
Test framework: [JEST / VITEST / etc.], type: [UNIT / INTEGRATION]
Write tests that:
1. Cover the happy path AND the important edge cases: empty/null/undefined
   inputs, boundary values, invalid inputs, and error paths.
2. Follow Arrange-Act-Assert structure with clear, descriptive test names
   that document the expected behavior.
3. Test behavior and public contracts, not implementation details (so tests
   don't break on harmless refactors).
4. Mock external dependencies (DB, network, time, randomness) appropriately,
   and explain what to mock vs not.
5. Stay isolated and deterministic (no shared state, no order dependence).
6. Include at least one test that would FAIL if a likely bug were introduced.
Provide the full test file, and note any code that's hard to test and how to
refactor it for testability.`,
    promptAr: `You are a testing expert who values meaningful coverage over vanity metrics.
Write a thorough test suite for the following code.
Code under test: [PASTE]
Test framework: [JEST / VITEST / etc.], type: [UNIT / INTEGRATION]
Write tests that:
1. Cover the happy path AND the important edge cases: empty/null/undefined
   inputs, boundary values, invalid inputs, and error paths.
2. Follow Arrange-Act-Assert structure with clear, descriptive test names
   that document the expected behavior.
3. Test behavior and public contracts, not implementation details (so tests
   don't break on harmless refactors).
4. Mock external dependencies (DB, network, time, randomness) appropriately,
   and explain what to mock vs not.
5. Stay isolated and deterministic (no shared state, no order dependence).
6. Include at least one test that would FAIL if a likely bug were introduced.
Provide the full test file, and note any code that's hard to test and how to
refactor it for testability.`,
    featured: false,
  },
  {
    id: "91",
    slug: "write-an-architecture-decision-record-adr",
    title: "Write an Architecture Decision Record (ADR)",
    titleAr: "Write an Architecture Decision Record (ADR)",
    description: "Use this when making a significant technical decision and you want to document the context, options, and reasoning so the team (and future-you) understands why — not just what.",
    descriptionAr: "Use this when making a significant technical decision and you want to document the context, options, and reasoning so the team (and future-you) understands why — not just what.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a staff engineer. Help me write an Architecture Decision Record (ADR)
for a technical decision.
The decision: [WHAT YOU'RE DECIDING — e.g. "choosing a state management
approach" / "adopting a message queue"]
Context: [THE PROBLEM, CONSTRAINTS, AND FORCES AT PLAY]
Options considered: [LIST THE OPTIONS YOU EVALUATED]
The decision I'm leaning toward: [IF ANY]
Write a clear ADR with these sections:
1. Title and status (Proposed / Accepted / Superseded).
2. Context: the problem and the forces/constraints driving the decision
   (technical and business).
3. Options considered: each with pros, cons, and trade-offs — fairly, not
   strawmanned.
4. Decision: what we chose and the concrete reasoning.
5. Consequences: the positive and negative results of this choice, and what
   becomes easier/harder.
6. Follow-ups / what would cause us to revisit this.
Keep it concise but complete. If my reasoning has gaps, point them out.`,
    promptAr: `Act as a staff engineer. Help me write an Architecture Decision Record (ADR)
for a technical decision.
The decision: [WHAT YOU'RE DECIDING — e.g. "choosing a state management
approach" / "adopting a message queue"]
Context: [THE PROBLEM, CONSTRAINTS, AND FORCES AT PLAY]
Options considered: [LIST THE OPTIONS YOU EVALUATED]
The decision I'm leaning toward: [IF ANY]
Write a clear ADR with these sections:
1. Title and status (Proposed / Accepted / Superseded).
2. Context: the problem and the forces/constraints driving the decision
   (technical and business).
3. Options considered: each with pros, cons, and trade-offs — fairly, not
   strawmanned.
4. Decision: what we chose and the concrete reasoning.
5. Consequences: the positive and negative results of this choice, and what
   becomes easier/harder.
6. Follow-ups / what would cause us to revisit this.
Keep it concise but complete. If my reasoning has gaps, point them out.`,
    featured: false,
  },
  {
    id: "92",
    slug: "break-down-a-project-into-tasks",
    title: "Break Down a Project into Tasks",
    titleAr: "Break Down a Project into Tasks",
    description: "Use this when facing a big, vague project and not knowing where to start. The AI decomposes it into ordered, manageable tasks you can actually begin.",
    descriptionAr: "Use this when facing a big, vague project and not knowing where to start. The AI decomposes it into ordered, manageable tasks you can actually begin.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior engineer and technical project planner. Break down the
following project into a clear, ordered task plan I can execute.
Project: [DESCRIBE WHAT YOU WANT TO BUILD]
Stack/constraints: [>>.], timeline/effort available: [>>.], solo or team: [>>.]
Produce:
1. A short clarification of scope: the MVP (must-haves) vs nice-to-haves —
   call out anything that should be cut from v1.
2. A breakdown into phases/milestones, each delivering something usable.
3. Within each phase, concrete tasks ordered by DEPENDENCY (what must come
   first), each small enough to finish in a focused session, with a rough
   effort estimate (S/M/L).
4. Identify the riskiest/most-uncertain tasks to tackle early (de-risk first).
5. Note external dependencies, decisions to make upfront, and potential
   blockers.
6. A suggested "first 3 tasks to start today".
Present it as a structured, checklist-style plan. Bias toward shipping a thin
slice end-to-end before polishing.`,
    promptAr: `Act as a senior engineer and technical project planner. Break down the
following project into a clear, ordered task plan I can execute.
Project: [DESCRIBE WHAT YOU WANT TO BUILD]
Stack/constraints: [>>.], timeline/effort available: [>>.], solo or team: [>>.]
Produce:
1. A short clarification of scope: the MVP (must-haves) vs nice-to-haves —
   call out anything that should be cut from v1.
2. A breakdown into phases/milestones, each delivering something usable.
3. Within each phase, concrete tasks ordered by DEPENDENCY (what must come
   first), each small enough to finish in a focused session, with a rough
   effort estimate (S/M/L).
4. Identify the riskiest/most-uncertain tasks to tackle early (de-risk first).
5. Note external dependencies, decisions to make upfront, and potential
   blockers.
6. A suggested "first 3 tasks to start today".
Present it as a structured, checklist-style plan. Bias toward shipping a thin
slice end-to-end before polishing.`,
    featured: false,
  },
  {
    id: "93",
    slug: "create-a-study-plan-for-a-new-technology",
    title: "Create a Study Plan for a New Technology",
    titleAr: "Create a Study Plan for a New Technology",
    description: "Use this when you need to learn a new framework, language, or tool efficiently. The AI builds a structured, project-based learning path instead of aimless tutorial-hopping.",
    descriptionAr: "Use this when you need to learn a new framework, language, or tool efficiently. The AI builds a structured, project-based learning path instead of aimless tutorial-hopping.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an experienced engineer and mentor. Create a structured, project-based
study plan to help me learn [TECHNOLOGY — e.g. "Next.js" / "TypeScript" /
"Docker"].
My background: [WHAT I ALREADY KNOW], goal: [WHAT I WANT TO BUILD/ACHIEVE],
time available: [E.G. "1 hr/day for 4 weeks"].
Build a plan that:
1. Lists the core concepts I must learn, in dependency order (foundations
   before advanced), and explicitly excludes things I can skip for now.
2. Is project-based: for each phase, a small project that forces me to apply
   what I learned (learning by building, not just reading).
3. Fits my available time, broken into weekly goals and daily-sized chunks.
4. Recommends high-quality, specific resources (official docs first, plus
   reputable tutorials/courses) — avoid low-quality fluff.
5. Includes checkpoints to test my understanding (what I should be able to
   build/explain at each stage).
6. Warns about common beginner mistakes and misconceptions for this tech.
End with the capstone project that proves I've learned it.`,
    promptAr: `Act as an experienced engineer and mentor. Create a structured, project-based
study plan to help me learn [TECHNOLOGY — e.g. "Next.js" / "TypeScript" /
"Docker"].
My background: [WHAT I ALREADY KNOW], goal: [WHAT I WANT TO BUILD/ACHIEVE],
time available: [E.G. "1 hr/day for 4 weeks"].
Build a plan that:
1. Lists the core concepts I must learn, in dependency order (foundations
   before advanced), and explicitly excludes things I can skip for now.
2. Is project-based: for each phase, a small project that forces me to apply
   what I learned (learning by building, not just reading).
3. Fits my available time, broken into weekly goals and daily-sized chunks.
4. Recommends high-quality, specific resources (official docs first, plus
   reputable tutorials/courses) — avoid low-quality fluff.
5. Includes checkpoints to test my understanding (what I should be able to
   build/explain at each stage).
6. Warns about common beginner mistakes and misconceptions for this tech.
End with the capstone project that proves I've learned it.`,
    featured: false,
  },
  {
    id: "94",
    slug: "write-api-documentation-openapi",
    title: "Write API Documentation (OpenAPI)",
    titleAr: "Write API Documentation (OpenAPI)",
    description: "Use this when your API needs proper documentation for frontend devs, partners, or your future self. Produces clear reference docs and an OpenAPI spec.",
    descriptionAr: "Use this when your API needs proper documentation for frontend devs, partners, or your future self. Produces clear reference docs and an OpenAPI spec.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a technical writer specializing in API documentation. Document my
REST API clearly and produce an OpenAPI 3 spec.
API details: [DESCRIBE OR PASTE ENDPOINTS — methods, paths, request/response
shapes, auth]
Deliver:
1. A human-readable overview: what the API does, the base URL, authentication
   (how to get and pass a token), and the standard error format.
2. For each endpoint: purpose, method + path, path/query params (with types
   and required flags), request body schema with an example, response schema
   with example(s), and the possible status codes/errors.
3. An OpenAPI 3.0 (YAML) specification covering the endpoints, schemas
   (components), and security scheme — valid and importable into Swagger UI/
   Postman.
4. Notes on pagination, rate limits, and versioning if applicable.
5. A "Getting Started" section with a copy-paste example request (curl).
Be precise and consistent. Mark anything you need me to confirm.`,
    promptAr: `You are a technical writer specializing in API documentation. Document my
REST API clearly and produce an OpenAPI 3 spec.
API details: [DESCRIBE OR PASTE ENDPOINTS — methods, paths, request/response
shapes, auth]
Deliver:
1. A human-readable overview: what the API does, the base URL, authentication
   (how to get and pass a token), and the standard error format.
2. For each endpoint: purpose, method + path, path/query params (with types
   and required flags), request body schema with an example, response schema
   with example(s), and the possible status codes/errors.
3. An OpenAPI 3.0 (YAML) specification covering the endpoints, schemas
   (components), and security scheme — valid and importable into Swagger UI/
   Postman.
4. Notes on pagination, rate limits, and versioning if applicable.
5. A "Getting Started" section with a copy-paste example request (curl).
Be precise and consistent. Mark anything you need me to confirm.`,
    featured: false,
  },
  {
    id: "95",
    slug: "estimate-project-time-realistically",
    title: "Estimate Project Time Realistically",
    titleAr: "Estimate Project Time Realistically",
    description: "Use this when a client or manager asks \"how long will this take?\" and you want a defensible estimate that accounts for the things developers usually forget.",
    descriptionAr: "Use this when a client or manager asks \"how long will this take?\" and you want a defensible estimate that accounts for the things developers usually forget.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an experienced engineering lead who estimates projects realistically.
Help me produce a defensible time estimate.
Project/feature: [DESCRIBE], my experience with this kind of work: [>>.],
known unknowns/risks: [>>.], working solo or team: [>>.]
Help me estimate by:
1. Breaking the work into tasks small enough to estimate individually (large
   tasks hide uncertainty).
2. Estimating each task with a range (optimistic / likely / pessimistic)
   rather than a single number.
3. Explicitly adding the things developers under-estimate: testing, code
   review, bug-fixing, edge cases, integration, deployment/devops, meetings/
   context-switching, and unknowns.
4. Applying a buffer for uncertainty proportional to how novel the work is,
   and explaining the reasoning (not a magic multiplier).
5. Separating "ideal focused hours" from "calendar time" (since real days
   aren't 8 focused hours).
6. Flagging the highest-uncertainty items that could blow the estimate, and
   suggesting a spike to de-risk them.
Give me a total range with the assumptions stated clearly.`,
    promptAr: `Act as an experienced engineering lead who estimates projects realistically.
Help me produce a defensible time estimate.
Project/feature: [DESCRIBE], my experience with this kind of work: [>>.],
known unknowns/risks: [>>.], working solo or team: [>>.]
Help me estimate by:
1. Breaking the work into tasks small enough to estimate individually (large
   tasks hide uncertainty).
2. Estimating each task with a range (optimistic / likely / pessimistic)
   rather than a single number.
3. Explicitly adding the things developers under-estimate: testing, code
   review, bug-fixing, edge cases, integration, deployment/devops, meetings/
   context-switching, and unknowns.
4. Applying a buffer for uncertainty proportional to how novel the work is,
   and explaining the reasoning (not a magic multiplier).
5. Separating "ideal focused hours" from "calendar time" (since real days
   aren't 8 focused hours).
6. Flagging the highest-uncertainty items that could blow the estimate, and
   suggesting a spike to de-risk them.
Give me a total range with the assumptions stated clearly.`,
    featured: false,
  },
  {
    id: "96",
    slug: "refactor-toward-clean-architecture",
    title: "Refactor Toward Clean Architecture",
    titleAr: "Refactor Toward Clean Architecture",
    description: "Use this when business logic is tangled with framework and database code, making the app hard to test and change. The AI restructures it toward clean, layered, maintainable architecture.",
    descriptionAr: "Use this when business logic is tangled with framework and database code, making the app hard to test and change. The AI restructures it toward clean, layered, maintainable architecture.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a software architect who applies Clean Architecture pragmatically.
Help me restructure my code so business logic is decoupled from frameworks,
the database, and external services.
Current code/structure: [PASTE OR DESCRIBE — note where logic, DB access,
and HTTP handling currently live]
Stack: [E.G. Node.js + Express + Prisma]
Guide me to:
1. Identify the layers: entities/domain, use cases/services (business logic),
   interface adapters (controllers, presenters), and frameworks/drivers
   (Express, Prisma, external APIs).
2. Apply the Dependency Rule: dependencies point inward; the domain knows
   nothing about Express or Prisma. Use interfaces/ports for data access
   (repository pattern) so the DB is swappable and the logic is testable.
3. Show the target folder structure and where each responsibility goes.
4. Refactor a concrete example (one feature/use case) from my code into this
   structure, including a repository interface and its Prisma implementation.
5. Be pragmatic — call out where strict Clean Architecture would be
   over-engineering for my project size and what to simplify.
Show before → after for the example feature and explain the testability win.`,
    promptAr: `Act as a software architect who applies Clean Architecture pragmatically.
Help me restructure my code so business logic is decoupled from frameworks,
the database, and external services.
Current code/structure: [PASTE OR DESCRIBE — note where logic, DB access,
and HTTP handling currently live]
Stack: [E.G. Node.js + Express + Prisma]
Guide me to:
1. Identify the layers: entities/domain, use cases/services (business logic),
   interface adapters (controllers, presenters), and frameworks/drivers
   (Express, Prisma, external APIs).
2. Apply the Dependency Rule: dependencies point inward; the domain knows
   nothing about Express or Prisma. Use interfaces/ports for data access
   (repository pattern) so the DB is swappable and the logic is testable.
3. Show the target folder structure and where each responsibility goes.
4. Refactor a concrete example (one feature/use case) from my code into this
   structure, including a repository interface and its Prisma implementation.
5. Be pragmatic — call out where strict Clean Architecture would be
   over-engineering for my project size and what to simplify.
Show before → after for the example feature and explain the testability win.`,
    featured: false,
  },
  {
    id: "97",
    slug: "write-a-tailored-job-application",
    title: "Write a Tailored Job Application",
    titleAr: "Write a Tailored Job Application",
    description: "Use this when applying for a developer role and you want a cover letter or application message that's specific and compelling — not a generic template that gets ignored.",
    descriptionAr: "Use this when applying for a developer role and you want a cover letter or application message that's specific and compelling — not a generic template that gets ignored.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a career coach for developers. Write a tailored, compelling cover
letter / application message for a job I'm applying to.
The job description: [PASTE]
My background: [RELEVANT EXPERIENCE, SKILLS, AND 1–2 PROJECTS/ACHIEVEMENTS]
Why I'm interested in THIS company/role: [GENUINE REASON, IF ANY]
Write a letter that:
1. Opens with a specific, genuine hook — why this role/company, not a generic
   "I am writing to apply".
2. Connects MY concrete experience and achievements directly to the key
   requirements in the job description (quantify where possible).
3. Demonstrates I understand what they do and the value I'd add, without
   flattery or fluff.
4. Stays concise (3–4 short paragraphs), confident but not arrogant, and in a
   natural human voice — not robotic or clichéd.
5. Ends with a clear, low-pressure call to action.
Avoid generic filler and overused phrases. If I'm missing a key requirement,
suggest how to honestly address it. Give me the letter plus 2 subject-line
options if it's an email.`,
    promptAr: `Act as a career coach for developers. Write a tailored, compelling cover
letter / application message for a job I'm applying to.
The job description: [PASTE]
My background: [RELEVANT EXPERIENCE, SKILLS, AND 1–2 PROJECTS/ACHIEVEMENTS]
Why I'm interested in THIS company/role: [GENUINE REASON, IF ANY]
Write a letter that:
1. Opens with a specific, genuine hook — why this role/company, not a generic
   "I am writing to apply".
2. Connects MY concrete experience and achievements directly to the key
   requirements in the job description (quantify where possible).
3. Demonstrates I understand what they do and the value I'd add, without
   flattery or fluff.
4. Stays concise (3–4 short paragraphs), confident but not arrogant, and in a
   natural human voice — not robotic or clichéd.
5. Ends with a clear, low-pressure call to action.
Avoid generic filler and overused phrases. If I'm missing a key requirement,
suggest how to honestly address it. Give me the letter plus 2 subject-line
options if it's an email.`,
    featured: false,
  },
  {
    id: "98",
    slug: "build-your-developer-personal-brand",
    title: "Build Your Developer Personal Brand",
    titleAr: "Build Your Developer Personal Brand",
    description: "Use this when you want to grow your visibility — on LinkedIn, GitHub, or X — to attract opportunities. The AI helps you craft a strategy and content that reflect your real strengths.",
    descriptionAr: "Use this when you want to grow your visibility — on LinkedIn, GitHub, or X — to attract opportunities. The AI helps you craft a strategy and content that reflect your real strengths.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a personal-branding strategist for developers. Help me build an
authentic developer brand that attracts opportunities (jobs, clients,
network).
About me: [SKILLS, EXPERIENCE, NICHE/INTERESTS, WHAT I WANT — e.g. "land a
senior frontend role" / "get freelance clients"]
Platforms I'll use: [LINKEDIN / X / GITHUB / BLOG]
Help me with:
1. Positioning: a clear, honest one-line "what I do and who I help" statement,
   and the niche/themes I should be known for (based on my real strengths).
2. Profile optimization: specific improvements to my LinkedIn/GitHub/X bios
   and headlines so they're clear and compelling.
3. A content strategy: 3–5 content pillars I can post about consistently, and
   10 concrete post/topic ideas drawn from my actual work and learning.
4. A realistic, sustainable posting cadence given a busy schedule.
5. How to engage/network genuinely (not spammy) to grow reach.
6. What to AVOID (cringe, fake-guru tactics, dishonesty).
Keep it authentic — built on real skills and value, not hype.`,
    promptAr: `Act as a personal-branding strategist for developers. Help me build an
authentic developer brand that attracts opportunities (jobs, clients,
network).
About me: [SKILLS, EXPERIENCE, NICHE/INTERESTS, WHAT I WANT — e.g. "land a
senior frontend role" / "get freelance clients"]
Platforms I'll use: [LINKEDIN / X / GITHUB / BLOG]
Help me with:
1. Positioning: a clear, honest one-line "what I do and who I help" statement,
   and the niche/themes I should be known for (based on my real strengths).
2. Profile optimization: specific improvements to my LinkedIn/GitHub/X bios
   and headlines so they're clear and compelling.
3. A content strategy: 3–5 content pillars I can post about consistently, and
   10 concrete post/topic ideas drawn from my actual work and learning.
4. A realistic, sustainable posting cadence given a busy schedule.
5. How to engage/network genuinely (not spammy) to grow reach.
6. What to AVOID (cringe, fake-guru tactics, dishonesty).
Keep it authentic — built on real skills and value, not hype.`,
    featured: false,
  },
  {
    id: "99",
    slug: "do-a-self-code-review-before-opening-a-pr",
    title: "Do a Self Code-Review Before Opening a PR",
    titleAr: "Do a Self Code-Review Before Opening a PR",
    description: "Use this right before you push, to catch issues yourself — so your PRs get approved faster and you build a reputation for clean work. The review you do before others do.",
    descriptionAr: "Use this right before you push, to catch issues yourself — so your PRs get approved faster and you build a reputation for clean work. The review you do before others do.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as the strict but fair reviewer I want to impress. Review my changes as a
PRE-PR self-review so I can fix problems before anyone else sees them.
What this change does: [GOAL], the diff: [PASTE DIFF]
Run through a thorough self-review checklist and flag anything I should fix
first:
1. Does the code actually do what the goal says, and ONLY that (no
   accidental scope creep, no leftover debug logs / commented-out code / TODO
   I forgot)?
2. Correctness & edge cases: nulls, empties, error handling, async issues.
3. Tests: are the changes covered? What test is missing?
4. Readability: naming, dead code, magic values, anything a reviewer would
   nitpick — fix it now.
5. Security & performance red flags.
6. Did I update related docs/types/comments and not break anything adjacent?
7. Is the PR a reasonable SIZE, or should it be split for easier review?
Give me a prioritized "fix before pushing" list and a clean PR description +
title I can use.`,
    promptAr: `Act as the strict but fair reviewer I want to impress. Review my changes as a
PRE-PR self-review so I can fix problems before anyone else sees them.
What this change does: [GOAL], the diff: [PASTE DIFF]
Run through a thorough self-review checklist and flag anything I should fix
first:
1. Does the code actually do what the goal says, and ONLY that (no
   accidental scope creep, no leftover debug logs / commented-out code / TODO
   I forgot)?
2. Correctness & edge cases: nulls, empties, error handling, async issues.
3. Tests: are the changes covered? What test is missing?
4. Readability: naming, dead code, magic values, anything a reviewer would
   nitpick — fix it now.
5. Security & performance red flags.
6. Did I update related docs/types/comments and not break anything adjacent?
7. Is the PR a reasonable SIZE, or should it be split for easier review?
Give me a prioritized "fix before pushing" list and a clean PR description +
title I can use.`,
    featured: false,
  },
  {
    id: "100",
    slug: "create-a-deployment-checklist",
    title: "Create a Deployment Checklist",
    titleAr: "Create a Deployment Checklist",
    description: "Use this before deploying to production — especially your first deploy or a high-stakes release. A checklist prevents the small omissions that cause outages and 2 a.m. pages.",
    descriptionAr: "Use this before deploying to production — especially your first deploy or a high-stakes release. A checklist prevents the small omissions that cause outages and 2 a.m. pages.",
    category: "career",
    difficulty: "intermediate",
    tags: ["Productivity & Career"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior DevOps/SRE engineer. Create a thorough, practical
pre-deployment and deployment checklist for my application.
App & stack: [E.G. "Next.js frontend + Node.js API + PostgreSQL"], hosting:
[E.G. VERCEL / VPS / DOCKER / CLOUD], deploy method: [CI/CD / MANUAL]
Produce a checklist grouped into phases:
1. PRE-DEPLOY: tests/lint/build pass in CI, env vars/secrets set for prod,
   database migrations prepared and tested, dependencies audited, feature
   flags configured, and a rollback plan ready.
2. SECURITY & CONFIG: HTTPS/TLS, security headers, CORS, secrets not exposed,
   correct prod environment settings, rate limiting on.
3. PERFORMANCE & RELIABILITY: caching/CDN, asset optimization, health-check
   endpoint, error tracking + logging + monitoring/alerts configured.
4. DEPLOY: the deploy steps in order, how to run migrations safely (and in
   what order relative to the deploy), and how to verify with a smoke test.
5. POST-DEPLOY: verify key user flows, watch error rates/metrics, and the
   exact rollback procedure if something breaks.
Make it concrete and checkbox-style for my specific stack. Highlight the
top mistakes that cause production incidents.`,
    promptAr: `Act as a senior DevOps/SRE engineer. Create a thorough, practical
pre-deployment and deployment checklist for my application.
App & stack: [E.G. "Next.js frontend + Node.js API + PostgreSQL"], hosting:
[E.G. VERCEL / VPS / DOCKER / CLOUD], deploy method: [CI/CD / MANUAL]
Produce a checklist grouped into phases:
1. PRE-DEPLOY: tests/lint/build pass in CI, env vars/secrets set for prod,
   database migrations prepared and tested, dependencies audited, feature
   flags configured, and a rollback plan ready.
2. SECURITY & CONFIG: HTTPS/TLS, security headers, CORS, secrets not exposed,
   correct prod environment settings, rate limiting on.
3. PERFORMANCE & RELIABILITY: caching/CDN, asset optimization, health-check
   endpoint, error tracking + logging + monitoring/alerts configured.
4. DEPLOY: the deploy steps in order, how to run migrations safely (and in
   what order relative to the deploy), and how to verify with a smoke test.
5. POST-DEPLOY: verify key user flows, watch error rates/metrics, and the
   exact rollback procedure if something breaks.
Make it concrete and checkbox-style for my specific stack. Highlight the
top mistakes that cause production incidents.`,
    featured: false,
  },
];
