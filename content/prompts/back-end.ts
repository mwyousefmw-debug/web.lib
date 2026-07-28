import type { Prompt } from "@/types";

// Back-End Development — Prompts 21-40
// Source: docs/WebLib-100-AI-Prompts-Every-Programmer.pdf
export const backendPrompts: Prompt[] = [
  {
    id: "21",
    slug: "design-a-restful-api",
    title: "Design a RESTful API",
    titleAr: "Design a RESTful API",
    description: "Use this when starting a new service and you want clean, predictable, well-versioned REST endpoints before writing any code. Avoids the inconsistent, hard-to-maintain APIs that come from designing as you go.",
    descriptionAr: "Use this when starting a new service and you want clean, predictable, well-versioned REST endpoints before writing any code. Avoids the inconsistent, hard-to-maintain APIs that come from designing as you go.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior backend architect. Design a clean, RESTful API for the
following domain.
Domain: [DESCRIBE — e.g. "a task management app with users, projects, tasks"]
Stack: Node.js + Express + Prisma + PostgreSQL
Deliver:
1. The resource model and relationships (list entities and how they relate).
2. A full endpoint table: method, path, purpose, auth required?, request
   body shape, success response, status codes. Follow REST conventions
   (plural nouns, nesting only where it makes sense, proper verbs).
3. Consistent JSON response envelope and a standard error format.
4. Pagination, filtering, and sorting conventions for list endpoints.
5. Versioning strategy (e.g. /api/v1) and naming conventions.
6. Auth approach at a high level (which endpoints are protected).
Present the endpoints as a clear table, then note 3 design trade-offs you made.`,
    promptAr: `You are a senior backend architect. Design a clean, RESTful API for the
following domain.
Domain: [DESCRIBE — e.g. "a task management app with users, projects, tasks"]
Stack: Node.js + Express + Prisma + PostgreSQL
Deliver:
1. The resource model and relationships (list entities and how they relate).
2. A full endpoint table: method, path, purpose, auth required?, request
   body shape, success response, status codes. Follow REST conventions
   (plural nouns, nesting only where it makes sense, proper verbs).
3. Consistent JSON response envelope and a standard error format.
4. Pagination, filtering, and sorting conventions for list endpoints.
5. Versioning strategy (e.g. /api/v1) and naming conventions.
6. Auth approach at a high level (which endpoints are protected).
Present the endpoints as a clear table, then note 3 design trade-offs you made.`,
    featured: false,
  },
  {
    id: "22",
    slug: "build-jwt-authentication-with-node-express",
    title: "Build JWT Authentication with Node & Express",
    titleAr: "Build JWT Authentication with Node & Express",
    description: "Use this when you need secure login/registration with JSON Web Tokens. Covers hashing, token issuing, and protecting routes — the foundation of most app authentication.",
    descriptionAr: "Use this when you need secure login/registration with JSON Web Tokens. Covers hashing, token issuing, and protecting routes — the foundation of most app authentication.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend security engineer. Implement JWT authentication in
Node.js + Express + TypeScript with Prisma + PostgreSQL.
Requirements:
1. Endpoints: POST /auth/register, POST /auth/login, GET /auth/me (protected).
2. Hash passwords with bcrypt (correct salt rounds); never store plaintext.
3. Issue a signed JWT on login containing minimal claims (user id, role);
   set a sensible expiry. Read the secret from an env var.
4. An authenticate middleware that verifies the token, attaches the user to
   req, and returns 401 on failure.
5. Input validation (zod) and a consistent error format; never leak whether
   an email exists on failed login.
6. Notes on storing the token securely on the client (httpOnly cookie vs
   header) and the trade-offs.
Provide the Prisma user model, the routes, the middleware, and the validation
schemas.`,
    promptAr: `You are a backend security engineer. Implement JWT authentication in
Node.js + Express + TypeScript with Prisma + PostgreSQL.
Requirements:
1. Endpoints: POST /auth/register, POST /auth/login, GET /auth/me (protected).
2. Hash passwords with bcrypt (correct salt rounds); never store plaintext.
3. Issue a signed JWT on login containing minimal claims (user id, role);
   set a sensible expiry. Read the secret from an env var.
4. An authenticate middleware that verifies the token, attaches the user to
   req, and returns 401 on failure.
5. Input validation (zod) and a consistent error format; never leak whether
   an email exists on failed login.
6. Notes on storing the token securely on the client (httpOnly cookie vs
   header) and the trade-offs.
Provide the Prisma user model, the routes, the middleware, and the validation
schemas.`,
    featured: false,
  },
  {
    id: "23",
    slug: "design-a-postgresql-schema-with-prisma",
    title: "Design a PostgreSQL Schema with Prisma",
    titleAr: "Design a PostgreSQL Schema with Prisma",
    description: "Use this when you need a normalized, performant database schema for a new feature or app. The AI turns your requirements into a proper Prisma schema with correct relations and indexes.",
    descriptionAr: "Use this when you need a normalized, performant database schema for a new feature or app. The AI turns your requirements into a proper Prisma schema with correct relations and indexes.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a database architect. Design a PostgreSQL schema using Prisma for
the following application.
Requirements: [DESCRIBE THE APP AND KEY ENTITIES — e.g. "blog with users,
posts, comments, tags, likes"]
Deliver:
1. A complete schema.prisma with models, fields, correct types, and
   relations (one-to-one, one-to-many, many-to-many with explicit join
   tables where needed).
2. Sensible constraints: required vs optional, @unique, default values,
   created/updated timestamps, soft-delete field if appropriate.
3. Indexes on columns used for lookups/filtering/foreign keys, with a note
   on why each index exists.
4. Enums where they fit; cascade rules on relations.
5. A short explanation of the normalization choices and any intentional
   denormalization for performance.
6. 2–3 example queries (Prisma client) for common access patterns.
Flag any decisions that depend on expected scale or read/write patterns.`,
    promptAr: `Act as a database architect. Design a PostgreSQL schema using Prisma for
the following application.
Requirements: [DESCRIBE THE APP AND KEY ENTITIES — e.g. "blog with users,
posts, comments, tags, likes"]
Deliver:
1. A complete schema.prisma with models, fields, correct types, and
   relations (one-to-one, one-to-many, many-to-many with explicit join
   tables where needed).
2. Sensible constraints: required vs optional, @unique, default values,
   created/updated timestamps, soft-delete field if appropriate.
3. Indexes on columns used for lookups/filtering/foreign keys, with a note
   on why each index exists.
4. Enums where they fit; cascade rules on relations.
5. A short explanation of the normalization choices and any intentional
   denormalization for performance.
6. 2–3 example queries (Prisma client) for common access patterns.
Flag any decisions that depend on expected scale or read/write patterns.`,
    featured: false,
  },
  {
    id: "24",
    slug: "build-a-crud-api-with-express-prisma",
    title: "Build a CRUD API with Express & Prisma",
    titleAr: "Build a CRUD API with Express & Prisma",
    description: "Use this to scaffold complete create/read/update/delete endpoints for a resource quickly, with validation and error handling baked in — so you're not hand-writing boilerplate every time.",
    descriptionAr: "Use this to scaffold complete create/read/update/delete endpoints for a resource quickly, with validation and error handling baked in — so you're not hand-writing boilerplate every time.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior Node.js engineer. Build a complete CRUD API for a single
resource using Express + TypeScript + Prisma + PostgreSQL.
Resource: [E.G. "Product" with fields name, description, price, stock,
categoryId]
Requirements:
1. Endpoints: list (with pagination, filtering, sorting), get one, create,
   update, delete. Use correct HTTP methods and status codes.
2. Layered structure: routes → controller → service → Prisma. Keep business
   logic out of the controllers.
3. Validate request bodies and query params with zod.
4. Centralized error handling middleware returning a consistent error shape;
   handle "not found" (404) and validation (400) cleanly.
5. Async errors caught properly (wrapper or try/catch).
6. Type-safe throughout.
Provide the folder structure, the route/controller/service files, the
validation schemas, and the error middleware.`,
    promptAr: `You are a senior Node.js engineer. Build a complete CRUD API for a single
resource using Express + TypeScript + Prisma + PostgreSQL.
Resource: [E.G. "Product" with fields name, description, price, stock,
categoryId]
Requirements:
1. Endpoints: list (with pagination, filtering, sorting), get one, create,
   update, delete. Use correct HTTP methods and status codes.
2. Layered structure: routes → controller → service → Prisma. Keep business
   logic out of the controllers.
3. Validate request bodies and query params with zod.
4. Centralized error handling middleware returning a consistent error shape;
   handle "not found" (404) and validation (400) cleanly.
5. Async errors caught properly (wrapper or try/catch).
6. Type-safe throughout.
Provide the folder structure, the route/controller/service files, the
validation schemas, and the error middleware.`,
    featured: false,
  },
  {
    id: "25",
    slug: "implement-role-based-access-control-rbac",
    title: "Implement Role-Based Access Control (RBAC)",
    titleAr: "Implement Role-Based Access Control (RBAC)",
    description: "Use this when different users need different permissions — admins, editors, viewers. The AI builds a flexible authorization layer so you can protect routes and actions by role.",
    descriptionAr: "Use this when different users need different permissions — admins, editors, viewers. The AI builds a flexible authorization layer so you can protect routes and actions by role.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a backend security engineer. Implement role-based access control
(RBAC) for an Express + TypeScript API that already uses JWT auth.
Requirements:
1. Define roles and a permissions model: [E.G. roles admin, editor, viewer;
   permissions like post:create, post:delete, user:manage]. Recommend
   role→permission mapping vs direct permission checks and justify it.
2. An authorize() middleware that checks the authenticated user's role/
   permissions against what a route requires; returns 403 on failure.
3. Support resource-level checks (e.g. a user can edit only their own posts)
   in addition to role checks.
4. Keep it declarative — protecting a route should be one readable line.
5. Avoid common pitfalls (privilege escalation, missing checks on nested
   routes, trusting client-sent roles).
Provide the roles/permissions config, the middleware, example protected
routes, and an ownership-check example.`,
    promptAr: `Act as a backend security engineer. Implement role-based access control
(RBAC) for an Express + TypeScript API that already uses JWT auth.
Requirements:
1. Define roles and a permissions model: [E.G. roles admin, editor, viewer;
   permissions like post:create, post:delete, user:manage]. Recommend
   role→permission mapping vs direct permission checks and justify it.
2. An authorize() middleware that checks the authenticated user's role/
   permissions against what a route requires; returns 403 on failure.
3. Support resource-level checks (e.g. a user can edit only their own posts)
   in addition to role checks.
4. Keep it declarative — protecting a route should be one readable line.
5. Avoid common pitfalls (privilege escalation, missing checks on nested
   routes, trusting client-sent roles).
Provide the roles/permissions config, the middleware, example protected
routes, and an ownership-check example.`,
    featured: false,
  },
  {
    id: "26",
    slug: "build-rate-limiting-middleware",
    title: "Build Rate Limiting Middleware",
    titleAr: "Build Rate Limiting Middleware",
    description: "Use this to protect your API from abuse, brute-force attacks, and accidental overload. Especially important for auth endpoints and public APIs.",
    descriptionAr: "Use this to protect your API from abuse, brute-force attacks, and accidental overload. Especially important for auth endpoints and public APIs.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend engineer hardening an Express + TypeScript API. Implement
rate limiting.
Requirements:
1. Recommend an approach: in-memory for a single instance vs Redis-backed
   for multiple instances — explain when to use each.
2. Implement a configurable limiter (max requests per window per key) where
   the key is IP by default but can be user id for authenticated routes.
3. Apply stricter limits to sensitive endpoints (login, password reset) and
   looser limits elsewhere; show how to compose multiple limiters.
4. Return proper 429 responses with Retry-After and rate-limit headers.
5. Make limits configurable via env vars.
Provide the middleware (both the simple and the Redis-backed version),
example usage on a login route, and notes on bypassing limits for trusted
clients.`,
    promptAr: `You are a backend engineer hardening an Express + TypeScript API. Implement
rate limiting.
Requirements:
1. Recommend an approach: in-memory for a single instance vs Redis-backed
   for multiple instances — explain when to use each.
2. Implement a configurable limiter (max requests per window per key) where
   the key is IP by default but can be user id for authenticated routes.
3. Apply stricter limits to sensitive endpoints (login, password reset) and
   looser limits elsewhere; show how to compose multiple limiters.
4. Return proper 429 responses with Retry-After and rate-limit headers.
5. Make limits configurable via env vars.
Provide the middleware (both the simple and the Redis-backed version),
example usage on a login route, and notes on bypassing limits for trusted
clients.`,
    featured: false,
  },
  {
    id: "27",
    slug: "design-a-mongodb-schema-with-mongoose",
    title: "Design a MongoDB Schema with Mongoose",
    titleAr: "Design a MongoDB Schema with Mongoose",
    description: "Use this when building on MongoDB and you want a thoughtful document model — knowing when to embed vs reference, and how to index for your access patterns.",
    descriptionAr: "Use this when building on MongoDB and you want a thoughtful document model — knowing when to embed vs reference, and how to index for your access patterns.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a MongoDB data modeling expert. Design a schema for the following
app using Mongoose (Node.js + TypeScript).
App: [DESCRIBE ENTITIES AND MAIN ACCESS PATTERNS — what gets read/written
most]
Deliver:
1. The collections and Mongoose schemas with proper types and validation.
2. For each relationship, decide embed vs reference and JUSTIFY it based on
   access patterns, document growth, and update frequency.
3. Indexes (including compound indexes) tuned to the main queries, each with
   a reason.
4. Sensible schema options: timestamps, default values, required fields,
   enums.
5. TypeScript interfaces for the documents.
6. 2–3 example queries showing the intended access patterns.
Explicitly call out where the model is optimized for reads vs writes and any
trade-offs.`,
    promptAr: `Act as a MongoDB data modeling expert. Design a schema for the following
app using Mongoose (Node.js + TypeScript).
App: [DESCRIBE ENTITIES AND MAIN ACCESS PATTERNS — what gets read/written
most]
Deliver:
1. The collections and Mongoose schemas with proper types and validation.
2. For each relationship, decide embed vs reference and JUSTIFY it based on
   access patterns, document growth, and update frequency.
3. Indexes (including compound indexes) tuned to the main queries, each with
   a reason.
4. Sensible schema options: timestamps, default values, required fields,
   enums.
5. TypeScript interfaces for the documents.
6. 2–3 example queries showing the intended access patterns.
Explicitly call out where the model is optimized for reads vs writes and any
trade-offs.`,
    featured: false,
  },
  {
    id: "28",
    slug: "build-a-secure-file-upload-endpoint",
    title: "Build a Secure File Upload Endpoint",
    titleAr: "Build a Secure File Upload Endpoint",
    description: "Use this when users need to upload images, documents, or avatars. File uploads are a common security hole — this prompt covers validation, size limits, and safe storage.",
    descriptionAr: "Use this when users need to upload images, documents, or avatars. File uploads are a common security hole — this prompt covers validation, size limits, and safe storage.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend security engineer. Implement a secure file upload endpoint
in Express + TypeScript.
Requirements:
1. Use multer (or recommend a better fit) to accept [SINGLE / MULTIPLE]
   files of type [E.G. images: jpg, png, webp].
2. Validate strictly: allowed MIME types AND file extension AND magic-byte/
   content check (don't trust the client-sent MIME), max file size, max
   number of files.
3. Generate safe, unique filenames (no path traversal, no user-controlled
   names); never execute or serve uploads from a code path.
4. Show two storage strategies: local disk and uploading to cloud storage
   (e.g. S3-compatible) — and which to prefer for production.
5. Return a clean response with the stored file URL/metadata; handle errors
   (too large, wrong type) with proper status codes.
6. Note virus-scanning and access-control considerations.
Provide the route, the validation/config, and the error handling.`,
    promptAr: `You are a backend security engineer. Implement a secure file upload endpoint
in Express + TypeScript.
Requirements:
1. Use multer (or recommend a better fit) to accept [SINGLE / MULTIPLE]
   files of type [E.G. images: jpg, png, webp].
2. Validate strictly: allowed MIME types AND file extension AND magic-byte/
   content check (don't trust the client-sent MIME), max file size, max
   number of files.
3. Generate safe, unique filenames (no path traversal, no user-controlled
   names); never execute or serve uploads from a code path.
4. Show two storage strategies: local disk and uploading to cloud storage
   (e.g. S3-compatible) — and which to prefer for production.
5. Return a clean response with the stored file URL/metadata; handle errors
   (too large, wrong type) with proper status codes.
6. Note virus-scanning and access-control considerations.
Provide the route, the validation/config, and the error handling.`,
    featured: false,
  },
  {
    id: "29",
    slug: "add-pagination-filtering-sorting-to-an-api",
    title: "Add Pagination, Filtering & Sorting to an API",
    titleAr: "Add Pagination, Filtering & Sorting to an API",
    description: "Use this when a list endpoint returns too much data and clients need to page, filter, and sort it. Establishes consistent, reusable query conventions across your API.",
    descriptionAr: "Use this when a list endpoint returns too much data and clients need to page, filter, and sort it. Establishes consistent, reusable query conventions across your API.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior backend engineer. Add robust pagination, filtering, and
sorting to a list endpoint in Express + Prisma + TypeScript.
Resource: [E.G. "GET /products"]
Requirements:
1. Support both offset (page/limit) AND cursor-based pagination — explain
   when each is appropriate and implement the one best suited here, noting
   how to switch.
2. Filtering via query params with an allowlist of filterable fields
   (prevent arbitrary/unsafe filters); support common operators (equals,
   contains, gt/lt, in).
3. Sorting via query param with an allowlist of sortable fields and asc/desc.
4. Validate and sanitize all query params with zod; apply sane defaults and
   max limits.
5. Return a consistent response: data array + meta (total, page, pageSize,
   hasNext / nextCursor).
6. Translate the validated params into a Prisma query safely.
Provide the validation schema, the query builder, and the controller.`,
    promptAr: `Act as a senior backend engineer. Add robust pagination, filtering, and
sorting to a list endpoint in Express + Prisma + TypeScript.
Resource: [E.G. "GET /products"]
Requirements:
1. Support both offset (page/limit) AND cursor-based pagination — explain
   when each is appropriate and implement the one best suited here, noting
   how to switch.
2. Filtering via query params with an allowlist of filterable fields
   (prevent arbitrary/unsafe filters); support common operators (equals,
   contains, gt/lt, in).
3. Sorting via query param with an allowlist of sortable fields and asc/desc.
4. Validate and sanitize all query params with zod; apply sane defaults and
   max limits.
5. Return a consistent response: data array + meta (total, page, pageSize,
   hasNext / nextCursor).
6. Translate the validated params into a Prisma query safely.
Provide the validation schema, the query builder, and the controller.`,
    featured: false,
  },
  {
    id: "30",
    slug: "implement-a-refresh-token-flow",
    title: "Implement a Refresh Token Flow",
    titleAr: "Implement a Refresh Token Flow",
    description: "Use this when short-lived access tokens need to be renewed without forcing users to log in repeatedly. Covers secure refresh token storage, rotation, and revocation.",
    descriptionAr: "Use this when short-lived access tokens need to be renewed without forcing users to log in repeatedly. Covers secure refresh token storage, rotation, and revocation.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend security engineer. Implement a secure access + refresh
token flow for an Express + TypeScript + Prisma API.
Requirements:
1. Short-lived access token (JWT) + longer-lived refresh token. Store the
   refresh token in an httpOnly, Secure, SameSite cookie; explain why.
2. Endpoints: POST /auth/login (issues both), POST /auth/refresh (rotates
   the refresh token and issues a new access token), POST /auth/logout
   (revokes the refresh token).
3. Implement refresh token ROTATION and detection of reuse (revoke the whole
   session/family if a used token is replayed).
4. Persist refresh tokens (or their hashes) in the DB so they can be revoked;
   never store them in plaintext.
5. Handle expiry, invalid, and revoked tokens with proper status codes.
6. Note CSRF considerations given cookie usage.
Provide the Prisma model for tokens, the three endpoints, and the rotation/
reuse-detection logic.`,
    promptAr: `You are a backend security engineer. Implement a secure access + refresh
token flow for an Express + TypeScript + Prisma API.
Requirements:
1. Short-lived access token (JWT) + longer-lived refresh token. Store the
   refresh token in an httpOnly, Secure, SameSite cookie; explain why.
2. Endpoints: POST /auth/login (issues both), POST /auth/refresh (rotates
   the refresh token and issues a new access token), POST /auth/logout
   (revokes the refresh token).
3. Implement refresh token ROTATION and detection of reuse (revoke the whole
   session/family if a used token is replayed).
4. Persist refresh tokens (or their hashes) in the DB so they can be revoked;
   never store them in plaintext.
5. Handle expiry, invalid, and revoked tokens with proper status codes.
6. Note CSRF considerations given cookie usage.
Provide the Prisma model for tokens, the three endpoints, and the rotation/
reuse-detection logic.`,
    featured: false,
  },
  {
    id: "31",
    slug: "build-reusable-validation-middleware",
    title: "Build Reusable Validation Middleware",
    titleAr: "Build Reusable Validation Middleware",
    description: "Use this to validate request bodies, params, and query strings consistently across all routes with a single, reusable mechanism — eliminating scattered, inconsistent validation.",
    descriptionAr: "Use this to validate request bodies, params, and query strings consistently across all routes with a single, reusable mechanism — eliminating scattered, inconsistent validation.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a Node.js + TypeScript engineer. Create reusable request-validation
middleware for Express using zod.
Requirements:
1. A validate() higher-order middleware that accepts a schema for body,
   params, and/or query and validates the matching parts of the request.
2. On failure, return 400 with a structured error listing each invalid
   field and message; on success, attach the parsed/typed data to the
   request for downstream handlers.
3. Strip unknown fields and coerce types where appropriate (e.g. numeric
   query params) safely.
4. Make the typing strong so controllers get fully typed req.body/params/
   query.
5. Provide a couple of example schemas and a route using the middleware.
Explain how this centralizes validation and keeps controllers clean.`,
    promptAr: `Act as a Node.js + TypeScript engineer. Create reusable request-validation
middleware for Express using zod.
Requirements:
1. A validate() higher-order middleware that accepts a schema for body,
   params, and/or query and validates the matching parts of the request.
2. On failure, return 400 with a structured error listing each invalid
   field and message; on success, attach the parsed/typed data to the
   request for downstream handlers.
3. Strip unknown fields and coerce types where appropriate (e.g. numeric
   query params) safely.
4. Make the typing strong so controllers get fully typed req.body/params/
   query.
5. Provide a couple of example schemas and a route using the middleware.
Explain how this centralizes validation and keeps controllers clean.`,
    featured: false,
  },
  {
    id: "32",
    slug: "build-a-background-job-queue",
    title: "Build a Background Job Queue",
    titleAr: "Build a Background Job Queue",
    description: "Use this when slow tasks (sending emails, processing images, generating reports) shouldn't block the request. Offloads work to a queue processed by background workers.",
    descriptionAr: "Use this when slow tasks (sending emails, processing images, generating reports) shouldn't block the request. Offloads work to a queue processed by background workers.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend engineer. Design and implement a background job system for
a Node.js + TypeScript app.
Use case: [E.G. "send welcome emails and generate PDF reports without
blocking the request"]
Deliver:
1. A recommended queue (e.g. BullMQ with Redis) and why it fits.
2. Producer code: how an API route enqueues a job with a typed payload.
3. Worker code: a separate process that consumes jobs, with concurrency
   control.
4. Reliability: retries with exponential backoff, max attempts, and a
   dead-letter/failed-jobs strategy; make jobs idempotent.
5. Observability: logging job lifecycle and how to monitor the queue.
6. Graceful shutdown so in-flight jobs aren't lost on deploy.
Provide the queue setup, a producer example, a worker example, and notes on
running the worker as a separate process.`,
    promptAr: `You are a backend engineer. Design and implement a background job system for
a Node.js + TypeScript app.
Use case: [E.G. "send welcome emails and generate PDF reports without
blocking the request"]
Deliver:
1. A recommended queue (e.g. BullMQ with Redis) and why it fits.
2. Producer code: how an API route enqueues a job with a typed payload.
3. Worker code: a separate process that consumes jobs, with concurrency
   control.
4. Reliability: retries with exponential backoff, max attempts, and a
   dead-letter/failed-jobs strategy; make jobs idempotent.
5. Observability: logging job lifecycle and how to monitor the queue.
6. Graceful shutdown so in-flight jobs aren't lost on deploy.
Provide the queue setup, a producer example, a worker example, and notes on
running the worker as a separate process.`,
    featured: false,
  },
  {
    id: "33",
    slug: "design-a-microservices-architecture",
    title: "Design a Microservices Architecture",
    titleAr: "Design a Microservices Architecture",
    description: "Use this when an app has outgrown a single codebase and you're considering splitting it into services. The AI helps you decide service boundaries and how they communicate — including whether you should split at all.",
    descriptionAr: "Use this when an app has outgrown a single codebase and you're considering splitting it into services. The AI helps you decide service boundaries and how they communicate — including whether you should split at all.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a software architect. Help me design a microservices architecture for
the following system — and first tell me honestly whether microservices are
even the right call versus a modular monolith.
System: [DESCRIBE THE APP, TEAM SIZE, SCALE, AND PAIN POINTS]
Deliver:
1. A recommendation: microservices vs modular monolith, with reasoning based
   on my context. Don't default to microservices.
2. If microservices: proposed service boundaries (by business capability),
   what data each owns, and why these boundaries.
3. Communication patterns: sync (REST/gRPC) vs async (message/event queue),
   and where to use each.
4. How to handle cross-service data, transactions (saga pattern), and
   eventual consistency.
5. Cross-cutting concerns: auth, API gateway, service discovery, logging/
   tracing.
6. Key risks and a phased migration path from the current setup.
Be pragmatic and call out where microservices would add unjustified
complexity.`,
    promptAr: `Act as a software architect. Help me design a microservices architecture for
the following system — and first tell me honestly whether microservices are
even the right call versus a modular monolith.
System: [DESCRIBE THE APP, TEAM SIZE, SCALE, AND PAIN POINTS]
Deliver:
1. A recommendation: microservices vs modular monolith, with reasoning based
   on my context. Don't default to microservices.
2. If microservices: proposed service boundaries (by business capability),
   what data each owns, and why these boundaries.
3. Communication patterns: sync (REST/gRPC) vs async (message/event queue),
   and where to use each.
4. How to handle cross-service data, transactions (saga pattern), and
   eventual consistency.
5. Cross-cutting concerns: auth, API gateway, service discovery, logging/
   tracing.
6. Key risks and a phased migration path from the current setup.
Be pragmatic and call out where microservices would add unjustified
complexity.`,
    featured: false,
  },
  {
    id: "34",
    slug: "implement-caching-with-redis",
    title: "Implement Caching with Redis",
    titleAr: "Implement Caching with Redis",
    description: "Use this when expensive database queries or external API calls slow down your API. Adds a caching layer to cut latency and load — with the invalidation strategy that usually gets overlooked.",
    descriptionAr: "Use this when expensive database queries or external API calls slow down your API. Adds a caching layer to cut latency and load — with the invalidation strategy that usually gets overlooked.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend performance engineer. Add Redis caching to an Express +
TypeScript + Prisma API.
Target: [E.G. "an expensive GET /products endpoint that hits multiple tables"]
Deliver:
1. A cache-aside (lazy loading) implementation: check cache → on miss, query
   DB → store in cache with a TTL → return.
2. A sensible, collision-free key naming scheme that includes query params.
3. An invalidation strategy: which writes invalidate which keys, and how to
   do it reliably (avoid stale data). Discuss TTL vs explicit invalidation.
4. Protection against cache stampede (e.g. locking or jittered TTLs).
5. A reusable cache helper/wrapper so caching any function is one call.
6. Notes on what NOT to cache and the consistency trade-offs.
Provide the Redis client setup, the reusable wrapper, a cached endpoint, and
the invalidation on the related write.`,
    promptAr: `You are a backend performance engineer. Add Redis caching to an Express +
TypeScript + Prisma API.
Target: [E.G. "an expensive GET /products endpoint that hits multiple tables"]
Deliver:
1. A cache-aside (lazy loading) implementation: check cache → on miss, query
   DB → store in cache with a TTL → return.
2. A sensible, collision-free key naming scheme that includes query params.
3. An invalidation strategy: which writes invalidate which keys, and how to
   do it reliably (avoid stale data). Discuss TTL vs explicit invalidation.
4. Protection against cache stampede (e.g. locking or jittered TTLs).
5. A reusable cache helper/wrapper so caching any function is one call.
6. Notes on what NOT to cache and the consistency trade-offs.
Provide the Redis client setup, the reusable wrapper, a cached endpoint, and
the invalidation on the related write.`,
    featured: false,
  },
  {
    id: "35",
    slug: "build-a-webhook-handler",
    title: "Build a Webhook Handler",
    titleAr: "Build a Webhook Handler",
    description: "Use this when integrating with services like Stripe, GitHub, or payment providers that notify your app via webhooks. Covers signature verification, idempotency, and reliable processing.",
    descriptionAr: "Use this when integrating with services like Stripe, GitHub, or payment providers that notify your app via webhooks. Covers signature verification, idempotency, and reliable processing.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a backend engineer. Implement a secure, reliable webhook receiver in
Express + TypeScript for [E.G. Stripe / GitHub / a generic provider].
Requirements:
1. Verify the webhook signature using the provider's secret BEFORE trusting
   the payload (use the raw request body — show how to configure the body
   parser correctly for this).
2. Respond quickly with 2xx to acknowledge receipt, then process
   asynchronously (enqueue) so slow processing doesn't cause retries.
3. Idempotency: dedupe events by their event id so retries don't double-
   process.
4. Handle different event types via a clean switch/handler map.
5. Robust error handling and logging; return appropriate status codes so the
   provider retries only when it should.
6. Notes on testing locally (e.g. CLI tunneling / provider test events).
Provide the route with signature verification, the handler map, and the
idempotency check.`,
    promptAr: `Act as a backend engineer. Implement a secure, reliable webhook receiver in
Express + TypeScript for [E.G. Stripe / GitHub / a generic provider].
Requirements:
1. Verify the webhook signature using the provider's secret BEFORE trusting
   the payload (use the raw request body — show how to configure the body
   parser correctly for this).
2. Respond quickly with 2xx to acknowledge receipt, then process
   asynchronously (enqueue) so slow processing doesn't cause retries.
3. Idempotency: dedupe events by their event id so retries don't double-
   process.
4. Handle different event types via a clean switch/handler map.
5. Robust error handling and logging; return appropriate status codes so the
   provider retries only when it should.
6. Notes on testing locally (e.g. CLI tunneling / provider test events).
Provide the route with signature verification, the handler map, and the
idempotency check.`,
    featured: false,
  },
  {
    id: "36",
    slug: "create-a-database-migration-strategy",
    title: "Create a Database Migration Strategy",
    titleAr: "Create a Database Migration Strategy",
    description: "Use this when schema changes keep breaking environments or causing downtime. The AI defines a safe, repeatable migration workflow — including how to make breaking changes without downtime.",
    descriptionAr: "Use this when schema changes keep breaking environments or causing downtime. The AI defines a safe, repeatable migration workflow — including how to make breaking changes without downtime.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a database/DevOps engineer. Define a safe database migration strategy
for a [POSTGRESQL + PRISMA] app deployed to production.
Deliver:
1. A migration workflow: how migrations are created, reviewed, versioned in
   Git, and applied in dev/staging/prod (including in CI/CD).
2. The expand-and-contract (parallel change) pattern for breaking changes
   (e.g. renaming a column, splitting a table) so deploys cause zero
   downtime — with a concrete worked example.
3. How to handle data backfills for large tables safely (batching).
4. Rollback strategy and how to recover from a failed migration.
5. Guardrails: never edit applied migrations, how to handle migration drift,
   and reviewing migrations in PRs.
6. A checklist to run before applying a migration to production.
Use a concrete example like "rename users.name to users.full_name with no
downtime".`,
    promptAr: `You are a database/DevOps engineer. Define a safe database migration strategy
for a [POSTGRESQL + PRISMA] app deployed to production.
Deliver:
1. A migration workflow: how migrations are created, reviewed, versioned in
   Git, and applied in dev/staging/prod (including in CI/CD).
2. The expand-and-contract (parallel change) pattern for breaking changes
   (e.g. renaming a column, splitting a table) so deploys cause zero
   downtime — with a concrete worked example.
3. How to handle data backfills for large tables safely (batching).
4. Rollback strategy and how to recover from a failed migration.
5. Guardrails: never edit applied migrations, how to handle migration drift,
   and reviewing migrations in PRs.
6. A checklist to run before applying a migration to production.
Use a concrete example like "rename users.name to users.full_name with no
downtime".`,
    featured: false,
  },
  {
    id: "37",
    slug: "build-an-email-sending-service",
    title: "Build an Email Sending Service",
    titleAr: "Build an Email Sending Service",
    description: "Use this when your app needs to send transactional emails — verification, password resets, receipts — reliably and with maintainable templates instead of inline HTML strings.",
    descriptionAr: "Use this when your app needs to send transactional emails — verification, password resets, receipts — reliably and with maintainable templates instead of inline HTML strings.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend engineer. Build a reusable transactional email service in
Node.js + TypeScript.
Requirements:
1. An abstraction (interface) so the provider (e.g. Nodemailer/SMTP,
   Resend, SES) can be swapped without changing calling code.
2. A typed sendEmail() and typed helpers per email type (e.g.
   sendVerificationEmail(user, token)).
3. Templating: keep HTML templates separate from logic; support variables
   and a plain-text fallback.
4. Reliability: send asynchronously via a queue/worker so requests aren't
   blocked; retries on transient failures.
5. Config from env vars; a dev mode that logs emails instead of sending.
6. Error handling and logging.
Provide the interface, one provider implementation, a template example, and
a typed helper, plus how to call it from a route.`,
    promptAr: `You are a backend engineer. Build a reusable transactional email service in
Node.js + TypeScript.
Requirements:
1. An abstraction (interface) so the provider (e.g. Nodemailer/SMTP,
   Resend, SES) can be swapped without changing calling code.
2. A typed sendEmail() and typed helpers per email type (e.g.
   sendVerificationEmail(user, token)).
3. Templating: keep HTML templates separate from logic; support variables
   and a plain-text fallback.
4. Reliability: send asynchronously via a queue/worker so requests aren't
   blocked; retries on transient failures.
5. Config from env vars; a dev mode that logs emails instead of sending.
6. Error handling and logging.
Provide the interface, one provider implementation, a template example, and
a typed helper, plus how to call it from a route.`,
    featured: false,
  },
  {
    id: "38",
    slug: "implement-api-versioning",
    title: "Implement API Versioning",
    titleAr: "Implement API Versioning",
    description: "Use this when you need to evolve a public or shared API without breaking existing clients. The AI sets up a versioning strategy and a deprecation path.",
    descriptionAr: "Use this when you need to evolve a public or shared API without breaking existing clients. The AI sets up a versioning strategy and a deprecation path.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an API architect. Design and implement an API versioning strategy for
an Express + TypeScript API.
Deliver:
1. Compare versioning approaches (URI path /v1, header-based, query param)
   and recommend one for a public REST API, with reasoning.
2. Implement the chosen approach: folder/router structure that keeps v1 and
   v2 isolated while sharing common logic where safe.
3. A clear policy for what counts as a breaking vs non-breaking change.
4. A deprecation workflow: how to signal deprecation (headers, docs,
   timeline) and sunset an old version gracefully.
5. How to avoid duplicating logic across versions (shared services,
   version-specific controllers/serializers).
6. An example: v1 and v2 of the same endpoint where the response shape
   changed.
Provide the router structure and the example endpoint in both versions.`,
    promptAr: `Act as an API architect. Design and implement an API versioning strategy for
an Express + TypeScript API.
Deliver:
1. Compare versioning approaches (URI path /v1, header-based, query param)
   and recommend one for a public REST API, with reasoning.
2. Implement the chosen approach: folder/router structure that keeps v1 and
   v2 isolated while sharing common logic where safe.
3. A clear policy for what counts as a breaking vs non-breaking change.
4. A deprecation workflow: how to signal deprecation (headers, docs,
   timeline) and sunset an old version gracefully.
5. How to avoid duplicating logic across versions (shared services,
   version-specific controllers/serializers).
6. An example: v1 and v2 of the same endpoint where the response shape
   changed.
Provide the router structure and the example endpoint in both versions.`,
    featured: false,
  },
  {
    id: "39",
    slug: "build-a-graphql-api",
    title: "Build a GraphQL API",
    titleAr: "Build a GraphQL API",
    description: "Use this when clients need flexible queries and you want to avoid over- and under-fetching common with REST. Covers schema design, resolvers, and the N+1 problem.",
    descriptionAr: "Use this when clients need flexible queries and you want to avoid over- and under-fetching common with REST. Covers schema design, resolvers, and the N+1 problem.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a backend engineer experienced with GraphQL. Build a GraphQL API in
Node.js + TypeScript (Apollo Server or GraphQL Yoga) backed by Prisma.
Domain: [DESCRIBE ENTITIES AND RELATIONSHIPS]
Deliver:
1. A typed GraphQL schema (SDL): types, queries, mutations, inputs, and
   relationships.
2. Resolvers wired to Prisma, with proper typing.
3. Solve the N+1 query problem (DataLoader or Prisma's relation loading) —
   explain the issue and the fix.
4. Auth/context: how to pass the authenticated user into resolvers and
   protect specific fields/mutations.
5. Error handling and input validation.
6. Pagination on list fields (cursor-based / Relay-style or simple).
Provide the schema, key resolvers, the DataLoader setup, and the context/auth
wiring. Note when GraphQL is a worse fit than REST.`,
    promptAr: `You are a backend engineer experienced with GraphQL. Build a GraphQL API in
Node.js + TypeScript (Apollo Server or GraphQL Yoga) backed by Prisma.
Domain: [DESCRIBE ENTITIES AND RELATIONSHIPS]
Deliver:
1. A typed GraphQL schema (SDL): types, queries, mutations, inputs, and
   relationships.
2. Resolvers wired to Prisma, with proper typing.
3. Solve the N+1 query problem (DataLoader or Prisma's relation loading) —
   explain the issue and the fix.
4. Auth/context: how to pass the authenticated user into resolvers and
   protect specific fields/mutations.
5. Error handling and input validation.
6. Pagination on list fields (cursor-based / Relay-style or simple).
Provide the schema, key resolvers, the DataLoader setup, and the context/auth
wiring. Note when GraphQL is a worse fit than REST.`,
    featured: false,
  },
  {
    id: "40",
    slug: "harden-an-express-app-for-production",
    title: "Harden an Express App for Production",
    titleAr: "Harden an Express App for Production",
    description: "Use this before shipping a Node.js API to production. The AI runs through the essential security and reliability hardening that's easy to forget until something breaks.",
    descriptionAr: "Use this before shipping a Node.js API to production. The AI runs through the essential security and reliability hardening that's easy to forget until something breaks.",
    category: "back-end",
    difficulty: "intermediate",
    tags: ["Back-End Development"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a backend security engineer. Review and harden my Express + TypeScript
API for production. Give me a prioritized hardening checklist with code.
Cover:
1. Security headers (helmet), strict CORS configuration (allowlist origins),
   and disabling fingerprinting (x-powered-by).
2. Input validation everywhere, payload size limits, and protection against
   common injection (parameterized queries via Prisma, no string-built SQL).
3. Rate limiting and brute-force protection on auth routes.
4. Secrets management (env vars, never committed) and secure cookie flags.
5. Centralized error handling that never leaks stack traces/internal details
   in responses; structured logging instead.
6. Graceful shutdown, request timeouts, and health-check endpoints.
7. Dependency hygiene (audit, lockfile) and HTTPS/TLS assumptions behind a
   proxy.
Present it as an ordered checklist (most critical first) with a short code
snippet for each item, then anything I should add to CI.`,
    promptAr: `Act as a backend security engineer. Review and harden my Express + TypeScript
API for production. Give me a prioritized hardening checklist with code.
Cover:
1. Security headers (helmet), strict CORS configuration (allowlist origins),
   and disabling fingerprinting (x-powered-by).
2. Input validation everywhere, payload size limits, and protection against
   common injection (parameterized queries via Prisma, no string-built SQL).
3. Rate limiting and brute-force protection on auth routes.
4. Secrets management (env vars, never committed) and secure cookie flags.
5. Centralized error handling that never leaks stack traces/internal details
   in responses; structured logging instead.
6. Graceful shutdown, request timeouts, and health-check endpoints.
7. Dependency hygiene (audit, lockfile) and HTTPS/TLS assumptions behind a
   proxy.
Present it as an ordered checklist (most critical first) with a short code
snippet for each item, then anything I should add to CI.`,
    featured: false,
  },
];
