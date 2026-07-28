import type { Prompt } from "@/types";

// Debugging & Code Review — Prompts 41-60
// Source: docs/WebLib-100-AI-Prompts-Every-Programmer.pdf
export const debuggingPrompts: Prompt[] = [
  {
    id: "41",
    slug: "debug-a-runtime-error-from-a-stack-trace",
    title: "Debug a Runtime Error from a Stack Trace",
    titleAr: "Debug a Runtime Error from a Stack Trace",
    description: "Use this when your app crashes and you have an error message and stack trace but aren't sure what's actually wrong. The AI traces it back to the root cause instead of guessing.",
    descriptionAr: "Use this when your app crashes and you have an error message and stack trace but aren't sure what's actually wrong. The AI traces it back to the root cause instead of guessing.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a senior engineer and expert debugger. I have a runtime error.
Diagnose the root cause and give me a fix.
Error message + stack trace:
[PASTE FULL ERROR AND STACK TRACE]
Relevant code:
[PASTE THE CODE NEAR THE FAILING LINE]
Context: [LANGUAGE/FRAMEWORK, WHEN IT HAPPENS, WHAT I EXPECTED]
Walk through this systematically:
1. Explain in plain language what the error actually means.
2. Read the stack trace and identify the exact line and call path where it
   originates (not just where it surfaces).
3. State the most likely root cause and 1–2 alternative causes, ranked.
4. Give the corrected code with the change explained.
5. Suggest how to prevent this class of bug in future (a guard, a type, a
   test).
If you need more info to be sure, tell me exactly what to check.`,
    promptAr: `You are a senior engineer and expert debugger. I have a runtime error.
Diagnose the root cause and give me a fix.
Error message + stack trace:
[PASTE FULL ERROR AND STACK TRACE]
Relevant code:
[PASTE THE CODE NEAR THE FAILING LINE]
Context: [LANGUAGE/FRAMEWORK, WHEN IT HAPPENS, WHAT I EXPECTED]
Walk through this systematically:
1. Explain in plain language what the error actually means.
2. Read the stack trace and identify the exact line and call path where it
   originates (not just where it surfaces).
3. State the most likely root cause and 1–2 alternative causes, ranked.
4. Give the corrected code with the change explained.
5. Suggest how to prevent this class of bug in future (a guard, a type, a
   test).
If you need more info to be sure, tell me exactly what to check.`,
    featured: false,
  },
  {
    id: "42",
    slug: "explain-unfamiliar-code",
    title: "Explain Unfamiliar Code",
    titleAr: "Explain Unfamiliar Code",
    description: "Use this when you inherit a codebase, read a confusing function, or study someone else's solution and need to understand exactly what it does and why.",
    descriptionAr: "Use this when you inherit a codebase, read a confusing function, or study someone else's solution and need to understand exactly what it does and why.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a patient senior engineer mentoring me. Explain the following code so
I fully understand it.
Code:
[PASTE CODE]
Please:
1. Give a one-paragraph high-level summary of what this code does and why it
   exists.
2. Walk through it step by step, explaining each significant block and any
   non-obvious lines.
3. Clarify any tricky language features, patterns, or idioms used.
4. Trace what happens with a concrete example input → output.
5. Point out any bugs, edge cases, or code smells you notice.
6. Suggest how it could be made clearer or more robust (without changing
   behavior).
Assume I know the basics of the language but not this codebase. Avoid jargon
without defining it.`,
    promptAr: `Act as a patient senior engineer mentoring me. Explain the following code so
I fully understand it.
Code:
[PASTE CODE]
Please:
1. Give a one-paragraph high-level summary of what this code does and why it
   exists.
2. Walk through it step by step, explaining each significant block and any
   non-obvious lines.
3. Clarify any tricky language features, patterns, or idioms used.
4. Trace what happens with a concrete example input → output.
5. Point out any bugs, edge cases, or code smells you notice.
6. Suggest how it could be made clearer or more robust (without changing
   behavior).
Assume I know the basics of the language but not this codebase. Avoid jargon
without defining it.`,
    featured: false,
  },
  {
    id: "43",
    slug: "perform-a-senior-level-code-review",
    title: "Perform a Senior-Level Code Review",
    titleAr: "Perform a Senior-Level Code Review",
    description: "Use this to get a thorough, prioritized review of your code before opening a PR — covering correctness, readability, security, and performance, the way a thoughtful senior engineer would.",
    descriptionAr: "Use this to get a thorough, prioritized review of your code before opening a PR — covering correctness, readability, security, and performance, the way a thoughtful senior engineer would.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a principal engineer doing a rigorous but constructive code review.
Review the code below.
Code / diff:
[PASTE CODE OR DIFF]
Context: [WHAT IT'S SUPPOSED TO DO, LANGUAGE/FRAMEWORK]
Review across these dimensions and ORGANIZE findings by severity
(Blocker / Should-fix / Nice-to-have):
1. Correctness & edge cases (off-by-one, null/empty, error paths, async).
2. Security (injection, auth, secrets, unsafe input handling).
3. Readability & maintainability (naming, structure, duplication, comments).
4. Performance (obvious inefficiencies, N+1, unnecessary work).
5. Testing (what's untested, what tests to add).
6. Adherence to common best practices/conventions for this stack.
For each finding: explain WHY it matters and show the suggested change. End
with the top 3 things to fix first. Be direct but kind.`,
    promptAr: `You are a principal engineer doing a rigorous but constructive code review.
Review the code below.
Code / diff:
[PASTE CODE OR DIFF]
Context: [WHAT IT'S SUPPOSED TO DO, LANGUAGE/FRAMEWORK]
Review across these dimensions and ORGANIZE findings by severity
(Blocker / Should-fix / Nice-to-have):
1. Correctness & edge cases (off-by-one, null/empty, error paths, async).
2. Security (injection, auth, secrets, unsafe input handling).
3. Readability & maintainability (naming, structure, duplication, comments).
4. Performance (obvious inefficiencies, N+1, unnecessary work).
5. Testing (what's untested, what tests to add).
6. Adherence to common best practices/conventions for this stack.
For each finding: explain WHY it matters and show the suggested change. End
with the top 3 things to fix first. Be direct but kind.`,
    featured: false,
  },
  {
    id: "44",
    slug: "find-and-fix-a-memory-leak",
    title: "Find and Fix a Memory Leak",
    titleAr: "Find and Fix a Memory Leak",
    description: "Use this when your app's memory usage grows over time and eventually crashes or slows down. Common with event listeners, timers, subscriptions, and caches.",
    descriptionAr: "Use this when your app's memory usage grows over time and eventually crashes or slows down. Common with event listeners, timers, subscriptions, and caches.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a performance engineer specializing in memory issues. I suspect a
memory leak.
Symptoms: [E.G. "memory climbs steadily and never drops; eventually OOM"]
Environment: [NODE.JS / BROWSER / REACT, etc.]
Relevant code: [PASTE COMPONENTS/MODULES THAT MANAGE LISTENERS, TIMERS,
SUBSCRIPTIONS, CACHES, OR CLOSURES]
Help me by:
1. Listing the most common causes of leaks in this environment (uncleared
   intervals/timeouts, unremoved event listeners, lingering subscriptions,
   detached DOM nodes, unbounded caches, closures holding references).
2. Pinpointing the likely culprit(s) in my code and explaining the mechanism.
3. Providing the corrected code with proper cleanup (e.g. useEffect cleanup,
   removeEventListener, unsubscribe, bounded cache).
4. Explaining how to confirm the leak is gone using profiling tools (heap
   snapshots, what to look for).
Give me a short checklist to audit the rest of the codebase for the same
pattern.`,
    promptAr: `Act as a performance engineer specializing in memory issues. I suspect a
memory leak.
Symptoms: [E.G. "memory climbs steadily and never drops; eventually OOM"]
Environment: [NODE.JS / BROWSER / REACT, etc.]
Relevant code: [PASTE COMPONENTS/MODULES THAT MANAGE LISTENERS, TIMERS,
SUBSCRIPTIONS, CACHES, OR CLOSURES]
Help me by:
1. Listing the most common causes of leaks in this environment (uncleared
   intervals/timeouts, unremoved event listeners, lingering subscriptions,
   detached DOM nodes, unbounded caches, closures holding references).
2. Pinpointing the likely culprit(s) in my code and explaining the mechanism.
3. Providing the corrected code with proper cleanup (e.g. useEffect cleanup,
   removeEventListener, unsubscribe, bounded cache).
4. Explaining how to confirm the leak is gone using profiling tools (heap
   snapshots, what to look for).
Give me a short checklist to audit the rest of the codebase for the same
pattern.`,
    featured: false,
  },
  {
    id: "45",
    slug: "debug-an-async-promise-issue",
    title: "Debug an Async / Promise Issue",
    titleAr: "Debug an Async / Promise Issue",
    description: "Use this when async code misbehaves — unhandled rejections, code running out of order, awaits that don't wait, or data arriving as undefined. Async bugs are among the most confusing.",
    descriptionAr: "Use this when async code misbehaves — unhandled rejections, code running out of order, awaits that don't wait, or data arriving as undefined. Async bugs are among the most confusing.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are an expert in asynchronous JavaScript/TypeScript. My async code is
behaving incorrectly.
Expected behavior: [WHAT SHOULD HAPPEN]
Actual behavior: [WHAT HAPPENS — e.g. "result is undefined", "runs out of
order", "unhandled rejection"]
Code: [PASTE THE ASYNC CODE]
Diagnose and fix:
1. Identify the exact async mistake (missing await, not returning a promise,
   awaiting in a forEach, fire-and-forget, mixing callbacks/promises, racing
   state updates, unhandled rejection).
2. Explain the event-loop / promise behavior that causes the observed result.
3. Provide corrected code using proper async/await patterns (and
   Promise.all / for>>.of where parallel vs sequential matters).
4. Ensure errors are handled and nothing is silently swallowed.
5. Note how to make this kind of bug visible earlier (linting, error
   handling).
Be explicit about which parts should run in parallel vs sequence.`,
    promptAr: `You are an expert in asynchronous JavaScript/TypeScript. My async code is
behaving incorrectly.
Expected behavior: [WHAT SHOULD HAPPEN]
Actual behavior: [WHAT HAPPENS — e.g. "result is undefined", "runs out of
order", "unhandled rejection"]
Code: [PASTE THE ASYNC CODE]
Diagnose and fix:
1. Identify the exact async mistake (missing await, not returning a promise,
   awaiting in a forEach, fire-and-forget, mixing callbacks/promises, racing
   state updates, unhandled rejection).
2. Explain the event-loop / promise behavior that causes the observed result.
3. Provide corrected code using proper async/await patterns (and
   Promise.all / for>>.of where parallel vs sequential matters).
4. Ensure errors are handled and nothing is silently swallowed.
5. Note how to make this kind of bug visible earlier (linting, error
   handling).
Be explicit about which parts should run in parallel vs sequence.`,
    featured: false,
  },
  {
    id: "46",
    slug: "fix-a-react-re-render-or-infinite-loop-bug",
    title: "Fix a React Re-render or Infinite Loop Bug",
    titleAr: "Fix a React Re-render or Infinite Loop Bug",
    description: "Use this when a component re-renders endlessly, a useEffect fires repeatedly, or state updates trigger a loop and crash the page — classic React footguns.",
    descriptionAr: "Use this when a component re-renders endlessly, a useEffect fires repeatedly, or state updates trigger a loop and crash the page — classic React footguns.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a React expert. My component has an infinite render loop or excessive
re-renders.
Symptom: [E.G. "Maximum update depth exceeded", "useEffect runs forever",
"page freezes"]
Code: [PASTE THE COMPONENT AND ANY HOOKS/EFFECTS]
Diagnose and fix:
1. Identify the exact cause (setState during render, missing/incorrect
   useEffect dependency array, new object/array/function identity each render
   used as a dependency, state derived in a loop, etc.).
2. Explain why it loops, step by step.
3. Provide corrected code (proper dependency arrays, useMemo/useCallback only
   where needed, moving derived values, functional updates).
4. Confirm the fix won't introduce stale-closure bugs.
5. Give a rule of thumb to avoid this in future.
Explain the dependency-array reasoning clearly.`,
    promptAr: `Act as a React expert. My component has an infinite render loop or excessive
re-renders.
Symptom: [E.G. "Maximum update depth exceeded", "useEffect runs forever",
"page freezes"]
Code: [PASTE THE COMPONENT AND ANY HOOKS/EFFECTS]
Diagnose and fix:
1. Identify the exact cause (setState during render, missing/incorrect
   useEffect dependency array, new object/array/function identity each render
   used as a dependency, state derived in a loop, etc.).
2. Explain why it loops, step by step.
3. Provide corrected code (proper dependency arrays, useMemo/useCallback only
   where needed, moving derived values, functional updates).
4. Confirm the fix won't introduce stale-closure bugs.
5. Give a rule of thumb to avoid this in future.
Explain the dependency-array reasoning clearly.`,
    featured: false,
  },
  {
    id: "47",
    slug: "diagnose-and-fix-a-cors-error",
    title: "Diagnose and Fix a CORS Error",
    titleAr: "Diagnose and Fix a CORS Error",
    description: "Use this when your frontend can't talk to your backend because of CORS errors in the console. CORS confuses almost everyone — this prompt explains it and fixes it correctly (not by disabling security).",
    descriptionAr: "Use this when your frontend can't talk to your backend because of CORS errors in the console. CORS confuses almost everyone — this prompt explains it and fixes it correctly (not by disabling security).",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a web engineer who deeply understands CORS. I'm getting a CORS error.
Error in console: [PASTE EXACT ERROR]
Setup: frontend at [ORIGIN], backend at [ORIGIN], framework [E.G. Express],
request type [GET/POST>>.], using cookies/credentials? [YES/NO]
Relevant server/client code: [PASTE]
Explain and fix:
1. In plain language, explain what CORS is and what this specific error means.
2. Identify whether the problem is missing headers, the preflight (OPTIONS)
   request, credentials handling, or a misconfigured origin.
3. Provide the correct server-side fix (e.g. proper cors() config in Express)
   with an explicit origin allowlist — NOT a wildcard when credentials are
   used, and explain why.
4. If credentials/cookies are involved, show both the server (credentials:
   true) and client (withCredentials / credentials: "include") changes.
5. Note why disabling CORS or using "*" blindly is the wrong fix.
Confirm the secure, correct configuration.`,
    promptAr: `You are a web engineer who deeply understands CORS. I'm getting a CORS error.
Error in console: [PASTE EXACT ERROR]
Setup: frontend at [ORIGIN], backend at [ORIGIN], framework [E.G. Express],
request type [GET/POST>>.], using cookies/credentials? [YES/NO]
Relevant server/client code: [PASTE]
Explain and fix:
1. In plain language, explain what CORS is and what this specific error means.
2. Identify whether the problem is missing headers, the preflight (OPTIONS)
   request, credentials handling, or a misconfigured origin.
3. Provide the correct server-side fix (e.g. proper cors() config in Express)
   with an explicit origin allowlist — NOT a wildcard when credentials are
   used, and explain why.
4. If credentials/cookies are involved, show both the server (credentials:
   true) and client (withCredentials / credentials: "include") changes.
5. Note why disabling CORS or using "*" blindly is the wrong fix.
Confirm the secure, correct configuration.`,
    featured: false,
  },
  {
    id: "48",
    slug: "debug-a-failing-test",
    title: "Debug a Failing Test",
    titleAr: "Debug a Failing Test",
    description: "Use this when a unit or integration test fails and the message isn't obvious — flaky tests, wrong assertions, bad mocks, or an actual bug the test correctly caught.",
    descriptionAr: "Use this when a unit or integration test fails and the message isn't obvious — flaky tests, wrong assertions, bad mocks, or an actual bug the test correctly caught.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a testing expert. A test is failing and I need to understand why.
Test framework: [JEST / VITEST / etc.]
Failing test code: [PASTE TEST]
Code under test: [PASTE IMPLEMENTATION]
Failure output: [PASTE THE ERROR/DIFF]
Determine:
1. Whether the test is correct and caught a real bug, OR the test itself is
   wrong (bad assertion, incorrect mock, wrong expected value, async not
   awaited, shared state between tests).
2. The exact reason for the failure, referencing the diff/output.
3. The fix — either correcting the implementation or correcting the test —
   and which one is appropriate here.
4. If the test is flaky, identify the source of nondeterminism (time,
   randomness, order dependence, network) and how to make it deterministic.
5. Whether the test is actually testing the right thing; suggest a better
   assertion if not.
Show the corrected code.`,
    promptAr: `Act as a testing expert. A test is failing and I need to understand why.
Test framework: [JEST / VITEST / etc.]
Failing test code: [PASTE TEST]
Code under test: [PASTE IMPLEMENTATION]
Failure output: [PASTE THE ERROR/DIFF]
Determine:
1. Whether the test is correct and caught a real bug, OR the test itself is
   wrong (bad assertion, incorrect mock, wrong expected value, async not
   awaited, shared state between tests).
2. The exact reason for the failure, referencing the diff/output.
3. The fix — either correcting the implementation or correcting the test —
   and which one is appropriate here.
4. If the test is flaky, identify the source of nondeterminism (time,
   randomness, order dependence, network) and how to make it deterministic.
5. Whether the test is actually testing the right thing; suggest a better
   assertion if not.
Show the corrected code.`,
    featured: false,
  },
  {
    id: "49",
    slug: "find-and-fix-a-race-condition",
    title: "Find and Fix a Race Condition",
    titleAr: "Find and Fix a Race Condition",
    description: "Use this when bugs appear intermittently — duplicate records, inconsistent state, or \"works on my machine\" issues caused by concurrent operations happening in an unexpected order.",
    descriptionAr: "Use this when bugs appear intermittently — duplicate records, inconsistent state, or \"works on my machine\" issues caused by concurrent operations happening in an unexpected order.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a concurrency expert. I think I have a race condition.
Symptom: [E.G. "sometimes two records are created", "balance goes negative
under load", "state is occasionally inconsistent"]
Environment: [NODE.JS / BROWSER / DB], relevant code: [PASTE]
Help me:
1. Confirm whether this is a race condition and explain the interleaving of
   operations that produces the bug (a concrete timeline of events).
2. Identify the unprotected shared resource or check-then-act sequence.
3. Provide a correct fix appropriate to the context: e.g. database
   transactions + proper isolation level, unique constraints, atomic
   operations, optimistic/pessimistic locking, idempotency keys, debouncing,
   or request deduplication.
4. Explain the trade-offs of the chosen approach (performance, contention).
5. Suggest how to reproduce/test it (simulating concurrency).
Be concrete about the locking or atomicity mechanism and why it closes the
window.`,
    promptAr: `You are a concurrency expert. I think I have a race condition.
Symptom: [E.G. "sometimes two records are created", "balance goes negative
under load", "state is occasionally inconsistent"]
Environment: [NODE.JS / BROWSER / DB], relevant code: [PASTE]
Help me:
1. Confirm whether this is a race condition and explain the interleaving of
   operations that produces the bug (a concrete timeline of events).
2. Identify the unprotected shared resource or check-then-act sequence.
3. Provide a correct fix appropriate to the context: e.g. database
   transactions + proper isolation level, unique constraints, atomic
   operations, optimistic/pessimistic locking, idempotency keys, debouncing,
   or request deduplication.
4. Explain the trade-offs of the chosen approach (performance, contention).
5. Suggest how to reproduce/test it (simulating concurrency).
Be concrete about the locking or atomicity mechanism and why it closes the
window.`,
    featured: false,
  },
  {
    id: "50",
    slug: "review-code-for-security-vulnerabilities",
    title: "Review Code for Security Vulnerabilities",
    titleAr: "Review Code for Security Vulnerabilities",
    description: "Use this to audit code for security holes before shipping — injection, auth flaws, exposed secrets, unsafe input handling. A focused security pass that general reviews often miss.",
    descriptionAr: "Use this to audit code for security holes before shipping — injection, auth flaws, exposed secrets, unsafe input handling. A focused security pass that general reviews often miss.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an application security engineer doing a focused security audit.
Review the code below for vulnerabilities.
Code: [PASTE CODE — e.g. API routes, auth logic, DB queries, input handling]
Context: [WHAT IT DOES, STACK]
Audit for (at minimum):
1. Injection (SQL/NoSQL, command, etc.) and unsafe query construction.
2. Broken authentication/authorization (missing checks, IDOR, privilege
   escalation, trusting client input for identity/role).
3. Sensitive data exposure (secrets in code, leaking errors, logging PII,
   weak hashing).
4. Input validation/sanitization gaps and XSS where output is rendered.
5. Insecure configuration (CORS, cookies, headers) and dependency risks.
For each issue: rate severity (Critical/High/Medium/Low), explain the exploit
scenario, and show the secure fix. Map findings to OWASP Top 10 categories
where relevant. List the most critical fix first.`,
    promptAr: `Act as an application security engineer doing a focused security audit.
Review the code below for vulnerabilities.
Code: [PASTE CODE — e.g. API routes, auth logic, DB queries, input handling]
Context: [WHAT IT DOES, STACK]
Audit for (at minimum):
1. Injection (SQL/NoSQL, command, etc.) and unsafe query construction.
2. Broken authentication/authorization (missing checks, IDOR, privilege
   escalation, trusting client input for identity/role).
3. Sensitive data exposure (secrets in code, leaking errors, logging PII,
   weak hashing).
4. Input validation/sanitization gaps and XSS where output is rendered.
5. Insecure configuration (CORS, cookies, headers) and dependency risks.
For each issue: rate severity (Critical/High/Medium/Low), explain the exploit
scenario, and show the secure fix. Map findings to OWASP Top 10 categories
where relevant. List the most critical fix first.`,
    featured: false,
  },
  {
    id: "51",
    slug: "optimize-a-slow-database-query",
    title: "Optimize a Slow Database Query",
    titleAr: "Optimize a Slow Database Query",
    description: "Use this when an endpoint is slow and the database is the bottleneck — missing indexes, N+1 queries, or inefficient joins. The AI reads the query plan and tells you exactly what to fix.",
    descriptionAr: "Use this when an endpoint is slow and the database is the bottleneck — missing indexes, N+1 queries, or inefficient joins. The AI reads the query plan and tells you exactly what to fix.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a database performance expert. Help me optimize a slow query.
Database: [POSTGRESQL / MYSQL / MONGODB]
The query (or ORM call): [PASTE]
Relevant schema/indexes: [PASTE TABLE/COLLECTION DEFINITIONS + EXISTING
INDEXES]
EXPLAIN/EXPLAIN ANALYZE output (if available): [PASTE]
Approx row counts: [PER TABLE]
Optimize:
1. Read the query plan and identify the bottleneck (sequential scans,
   missing index, bad join order, sorting/temp files, N+1 from the ORM).
2. Recommend specific indexes (including composite/covering indexes) and
   explain why each helps and the write-cost trade-off.
3. Rewrite the query if structure is the problem (avoid SELECT *, fix joins,
   push filtering down, paginate).
4. For ORM N+1s, show how to eager-load/batch correctly.
5. Estimate the expected impact and how to verify with EXPLAIN ANALYZE.
Be specific about the exact index definitions to create.`,
    promptAr: `You are a database performance expert. Help me optimize a slow query.
Database: [POSTGRESQL / MYSQL / MONGODB]
The query (or ORM call): [PASTE]
Relevant schema/indexes: [PASTE TABLE/COLLECTION DEFINITIONS + EXISTING
INDEXES]
EXPLAIN/EXPLAIN ANALYZE output (if available): [PASTE]
Approx row counts: [PER TABLE]
Optimize:
1. Read the query plan and identify the bottleneck (sequential scans,
   missing index, bad join order, sorting/temp files, N+1 from the ORM).
2. Recommend specific indexes (including composite/covering indexes) and
   explain why each helps and the write-cost trade-off.
3. Rewrite the query if structure is the problem (avoid SELECT *, fix joins,
   push filtering down, paginate).
4. For ORM N+1s, show how to eager-load/batch correctly.
5. Estimate the expected impact and how to verify with EXPLAIN ANALYZE.
Be specific about the exact index definitions to create.`,
    featured: false,
  },
  {
    id: "52",
    slug: "decode-a-confusing-error-message",
    title: "Decode a Confusing Error Message",
    titleAr: "Decode a Confusing Error Message",
    description: "Use this when you hit a cryptic error you've never seen — from a library, build tool, or runtime — and need it translated into plain language with a path to a fix.",
    descriptionAr: "Use this when you hit a cryptic error you've never seen — from a library, build tool, or runtime — and need it translated into plain language with a path to a fix.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as an experienced engineer. Decode this confusing error message for me.
Error: [PASTE THE FULL ERROR, INCLUDING ANY CODES OR LIBRARY NAMES]
What I was doing when it happened: [CONTEXT]
Stack/tooling: [LANGUAGE, FRAMEWORK, BUILD TOOL, VERSIONS IF KNOWN]
Explain:
1. In plain English, what this error is actually saying.
2. The usual root causes for this specific error, ranked by likelihood.
3. The most likely fix given my context, with exact steps/commands.
4. How to verify the fix worked.
5. If it's a known library/tooling quirk, mention that and the typical
   resolution.
If the error alone isn't enough to be sure, tell me exactly what additional
info or files to share.`,
    promptAr: `Act as an experienced engineer. Decode this confusing error message for me.
Error: [PASTE THE FULL ERROR, INCLUDING ANY CODES OR LIBRARY NAMES]
What I was doing when it happened: [CONTEXT]
Stack/tooling: [LANGUAGE, FRAMEWORK, BUILD TOOL, VERSIONS IF KNOWN]
Explain:
1. In plain English, what this error is actually saying.
2. The usual root causes for this specific error, ranked by likelihood.
3. The most likely fix given my context, with exact steps/commands.
4. How to verify the fix worked.
5. If it's a known library/tooling quirk, mention that and the typical
   resolution.
If the error alone isn't enough to be sure, tell me exactly what additional
info or files to share.`,
    featured: false,
  },
  {
    id: "53",
    slug: "refactor-legacy-code-safely",
    title: "Refactor Legacy Code Safely",
    titleAr: "Refactor Legacy Code Safely",
    description: "Use this when you need to improve messy, working code without breaking it. The AI proposes incremental refactors that preserve behavior — not a risky rewrite.",
    descriptionAr: "Use this when you need to improve messy, working code without breaking it. The AI proposes incremental refactors that preserve behavior — not a risky rewrite.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a refactoring expert who values behavior preservation above all.
Refactor the following legacy code to be cleaner and more maintainable
WITHOUT changing its external behavior.
Code: [PASTE]
Constraints: [E.G. "must keep the same public API/signature", "no new deps"]
Approach:
1. First summarize what the code currently does and any behavior I must
   preserve (including quirks/edge cases that callers may rely on).
2. Identify the specific problems (long functions, duplication, poor naming,
   tight coupling, deep nesting, mixed responsibilities).
3. Refactor in small, safe, ordered steps — describe each step and show the
   resulting code, so I can apply and verify them incrementally.
4. Recommend characterization tests to add BEFORE refactoring to lock in
   current behavior.
5. Confirm the public interface is unchanged.
Prioritize readability and low risk over cleverness.`,
    promptAr: `You are a refactoring expert who values behavior preservation above all.
Refactor the following legacy code to be cleaner and more maintainable
WITHOUT changing its external behavior.
Code: [PASTE]
Constraints: [E.G. "must keep the same public API/signature", "no new deps"]
Approach:
1. First summarize what the code currently does and any behavior I must
   preserve (including quirks/edge cases that callers may rely on).
2. Identify the specific problems (long functions, duplication, poor naming,
   tight coupling, deep nesting, mixed responsibilities).
3. Refactor in small, safe, ordered steps — describe each step and show the
   resulting code, so I can apply and verify them incrementally.
4. Recommend characterization tests to add BEFORE refactoring to lock in
   current behavior.
5. Confirm the public interface is unchanged.
Prioritize readability and low risk over cleverness.`,
    featured: false,
  },
  {
    id: "54",
    slug: "find-the-root-cause-root-cause-analysis",
    title: "Find the Root Cause (Root Cause Analysis)",
    titleAr: "Find the Root Cause (Root Cause Analysis)",
    description: "Use this when a bug keeps coming back or you've fixed symptoms without understanding the underlying cause. Drives toward the real source instead of patching surface issues.",
    descriptionAr: "Use this when a bug keeps coming back or you've fixed symptoms without understanding the underlying cause. Drives toward the real source instead of patching surface issues.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a senior engineer leading a root-cause analysis. Help me find the TRUE
cause of a recurring problem, not just the symptom.
Problem: [DESCRIBE THE BUG/INCIDENT AND HOW OFTEN IT RECURS]
What we've tried/observed: [LIST]
Relevant code/logs/config: [PASTE]
Lead me through:
1. A "5 Whys" style chain from the symptom down to the underlying cause —
   ask me targeted questions if a link is missing.
2. Separate the proximate cause (what directly triggered it) from the root
   cause (the deeper reason it was possible).
3. Identify whether the root cause is in code, design, process, or
   assumptions.
4. Propose a fix that addresses the ROOT cause so it can't recur, plus a
   quick mitigation if needed now.
5. Recommend a guardrail (test, type, validation, alert, process change) to
   prevent the whole class of issue.
Be rigorous; don't stop at the first plausible cause.`,
    promptAr: `Act as a senior engineer leading a root-cause analysis. Help me find the TRUE
cause of a recurring problem, not just the symptom.
Problem: [DESCRIBE THE BUG/INCIDENT AND HOW OFTEN IT RECURS]
What we've tried/observed: [LIST]
Relevant code/logs/config: [PASTE]
Lead me through:
1. A "5 Whys" style chain from the symptom down to the underlying cause —
   ask me targeted questions if a link is missing.
2. Separate the proximate cause (what directly triggered it) from the root
   cause (the deeper reason it was possible).
3. Identify whether the root cause is in code, design, process, or
   assumptions.
4. Propose a fix that addresses the ROOT cause so it can't recur, plus a
   quick mitigation if needed now.
5. Recommend a guardrail (test, type, validation, alert, process change) to
   prevent the whole class of issue.
Be rigorous; don't stop at the first plausible cause.`,
    featured: false,
  },
  {
    id: "55",
    slug: "debug-a-production-incident",
    title: "Debug a Production Incident",
    titleAr: "Debug a Production Incident",
    description: "Use this during or after a production outage when you need to triage fast, stop the bleeding, and then investigate calmly. Brings structure to a high-pressure moment.",
    descriptionAr: "Use this during or after a production outage when you need to triage fast, stop the bleeding, and then investigate calmly. Brings structure to a high-pressure moment.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are an experienced on-call SRE. Help me triage and resolve a production
incident calmly and systematically.
What's happening: [SYMPTOMS, ERROR RATES, AFFECTED USERS/ENDPOINTS]
When it started + recent changes: [DEPLOYS, CONFIG, TRAFFIC SPIKES]
Available signals: [LOGS, METRICS, ALERTS — PASTE RELEVANT EXCERPTS]
Guide me through:
1. IMMEDIATE: how to assess blast radius and the fastest safe mitigation
   (rollback, feature flag, scale up, circuit-break) to stop user impact —
   before full diagnosis.
2. A prioritized list of likely causes given the timing and recent changes,
   and the single highest-signal thing to check first.
3. What to look for in logs/metrics to confirm or rule out each hypothesis.
4. Once mitigated, how to confirm recovery.
5. A short post-incident checklist (root cause, action items, prevention).
Prioritize stopping user impact over finding the perfect explanation.`,
    promptAr: `You are an experienced on-call SRE. Help me triage and resolve a production
incident calmly and systematically.
What's happening: [SYMPTOMS, ERROR RATES, AFFECTED USERS/ENDPOINTS]
When it started + recent changes: [DEPLOYS, CONFIG, TRAFFIC SPIKES]
Available signals: [LOGS, METRICS, ALERTS — PASTE RELEVANT EXCERPTS]
Guide me through:
1. IMMEDIATE: how to assess blast radius and the fastest safe mitigation
   (rollback, feature flag, scale up, circuit-break) to stop user impact —
   before full diagnosis.
2. A prioritized list of likely causes given the timing and recent changes,
   and the single highest-signal thing to check first.
3. What to look for in logs/metrics to confirm or rule out each hypothesis.
4. Once mitigated, how to confirm recovery.
5. A short post-incident checklist (root cause, action items, prevention).
Prioritize stopping user impact over finding the perfect explanation.`,
    featured: false,
  },
  {
    id: "56",
    slug: "review-a-pull-request",
    title: "Review a Pull Request",
    titleAr: "Review a Pull Request",
    description: "Use this when reviewing a teammate's PR (or your own before requesting review) and want a structured, fair assessment that catches issues without nitpicking trivia.",
    descriptionAr: "Use this when reviewing a teammate's PR (or your own before requesting review) and want a structured, fair assessment that catches issues without nitpicking trivia.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a thoughtful senior reviewer. Review this pull request and give
feedback I can paste as review comments.
PR description / goal: [WHAT IT'S MEANT TO ACCOMPLISH]
The diff: [PASTE DIFF]
Provide:
1. A quick verdict: does the change accomplish its stated goal? Any scope
   creep or missing pieces?
2. Findings grouped as: must-fix (correctness/security/breaking), should-fix
   (maintainability/tests), and optional (style/nits — keep these minimal).
3. For each must/should item: the file/line area, why it matters, and a
   concrete suggested change.
4. Whether the tests adequately cover the change; what test cases are missing.
5. Anything that should be documented or that affects other parts of the
   system.
6. One or two genuine positives.
Be specific and constructive; avoid bikeshedding and subjective style debates.`,
    promptAr: `Act as a thoughtful senior reviewer. Review this pull request and give
feedback I can paste as review comments.
PR description / goal: [WHAT IT'S MEANT TO ACCOMPLISH]
The diff: [PASTE DIFF]
Provide:
1. A quick verdict: does the change accomplish its stated goal? Any scope
   creep or missing pieces?
2. Findings grouped as: must-fix (correctness/security/breaking), should-fix
   (maintainability/tests), and optional (style/nits — keep these minimal).
3. For each must/should item: the file/line area, why it matters, and a
   concrete suggested change.
4. Whether the tests adequately cover the change; what test cases are missing.
5. Anything that should be documented or that affects other parts of the
   system.
6. One or two genuine positives.
Be specific and constructive; avoid bikeshedding and subjective style debates.`,
    featured: false,
  },
  {
    id: "57",
    slug: "identify-and-fix-code-smells",
    title: "Identify and Fix Code Smells",
    titleAr: "Identify and Fix Code Smells",
    description: "Use this when code \"works\" but feels wrong and you can't articulate why. The AI names the specific smells and shows the refactoring patterns that address each.",
    descriptionAr: "Use this when code \"works\" but feels wrong and you can't articulate why. The AI names the specific smells and shows the refactoring patterns that address each.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a clean-code expert. Identify code smells in the following code and
show me how to fix each one.
Code: [PASTE]
For your analysis:
1. Name each specific code smell you find (e.g. long method, large class,
   duplicated code, feature envy, primitive obsession, long parameter list,
   shotgun surgery, magic numbers, deep nesting, god object).
2. For each smell: explain why it's a problem in practical terms (what it
   makes harder).
3. Recommend the specific refactoring technique that addresses it (e.g.
   extract method, introduce parameter object, replace conditional with
   polymorphism, guard clauses).
4. Show the refactored code applying these techniques.
5. Prioritize: which smells matter most here and which are minor.
Don't over-engineer — only refactor where it genuinely improves the code.`,
    promptAr: `You are a clean-code expert. Identify code smells in the following code and
show me how to fix each one.
Code: [PASTE]
For your analysis:
1. Name each specific code smell you find (e.g. long method, large class,
   duplicated code, feature envy, primitive obsession, long parameter list,
   shotgun surgery, magic numbers, deep nesting, god object).
2. For each smell: explain why it's a problem in practical terms (what it
   makes harder).
3. Recommend the specific refactoring technique that addresses it (e.g.
   extract method, introduce parameter object, replace conditional with
   polymorphism, guard clauses).
4. Show the refactored code applying these techniques.
5. Prioritize: which smells matter most here and which are minor.
Don't over-engineer — only refactor where it genuinely improves the code.`,
    featured: false,
  },
  {
    id: "58",
    slug: "fix-a-build-or-compilation-error",
    title: "Fix a Build or Compilation Error",
    titleAr: "Fix a Build or Compilation Error",
    description: "Use this when your project won't build — TypeScript errors, bundler failures, dependency conflicts, or config issues blocking you from even running the code.",
    descriptionAr: "Use this when your project won't build — TypeScript errors, bundler failures, dependency conflicts, or config issues blocking you from even running the code.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a build-tooling expert. My project won't build/compile. Help me fix it.
Build/compile error: [PASTE FULL OUTPUT]
Tooling: [E.G. TYPESCRIPT, VITE/WEBPACK, NODE VERSION, PACKAGE MANAGER]
Relevant config: [PASTE tsconfig / bundler config / package.json SNIPPETS]
What changed recently: [NEW DEP, VERSION BUMP, CONFIG EDIT, NOTHING]
Diagnose:
1. Parse the error and explain what the build tool is complaining about.
2. Identify the likely cause (type error, missing/mismatched dependency,
   version conflict, misconfigured path/alias, ESM vs CommonJS mismatch,
   missing types).
3. Give the exact fix — config change, command, or code edit — step by step.
4. If it's a dependency/version conflict, show how to inspect and resolve it
   (lockfile, peer deps).
5. How to verify the build succeeds and avoid the issue recurring.
Give exact commands and config diffs.`,
    promptAr: `Act as a build-tooling expert. My project won't build/compile. Help me fix it.
Build/compile error: [PASTE FULL OUTPUT]
Tooling: [E.G. TYPESCRIPT, VITE/WEBPACK, NODE VERSION, PACKAGE MANAGER]
Relevant config: [PASTE tsconfig / bundler config / package.json SNIPPETS]
What changed recently: [NEW DEP, VERSION BUMP, CONFIG EDIT, NOTHING]
Diagnose:
1. Parse the error and explain what the build tool is complaining about.
2. Identify the likely cause (type error, missing/mismatched dependency,
   version conflict, misconfigured path/alias, ESM vs CommonJS mismatch,
   missing types).
3. Give the exact fix — config change, command, or code edit — step by step.
4. If it's a dependency/version conflict, show how to inspect and resolve it
   (lockfile, peer deps).
5. How to verify the build succeeds and avoid the issue recurring.
Give exact commands and config diffs.`,
    featured: false,
  },
  {
    id: "59",
    slug: "reproduce-an-intermit-tent-bug",
    title: "Reproduce an Intermit tent Bug",
    titleAr: "Reproduce an Intermit tent Bug",
    description: "Use this for the worst kind of bug — one that happens \"sometimes.\" You can't fix what you can't reproduce, so this prompt builds a strategy to make it consistent and observable.",
    descriptionAr: "Use this for the worst kind of bug — one that happens \"sometimes.\" You can't fix what you can't reproduce, so this prompt builds a strategy to make it consistent and observable.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `You are a debugging strategist. I have an intermittent bug I can't reliably
reproduce. Help me make it reproducible and then fix it.
Bug: [DESCRIBE WHAT HAPPENS AND HOW OFTEN]
What seems to correlate with it (if anything): [TIMING, LOAD, SPECIFIC USER/
DATA, DEVICE, ORDER OF ACTIONS]
Relevant code/area: [PASTE OR DESCRIBE]
Help me:
1. Brainstorm the categories of intermittent causes to consider (race
   conditions, uninitialized/stale state, time/timezone, caching, network
   flakiness, environment differences, random data, order dependence).
2. Design a reproduction strategy: what to control/vary, added logging/
   instrumentation, and conditions to force the bug to appear consistently.
3. Suggest targeted logging or assertions to capture state at the moment of
   failure.
4. Once reproduced, outline how to isolate the cause via bisection.
5. Recommend a fix approach and a regression test that would have caught it.
Start by asking me the 2–3 most useful clarifying questions.`,
    promptAr: `You are a debugging strategist. I have an intermittent bug I can't reliably
reproduce. Help me make it reproducible and then fix it.
Bug: [DESCRIBE WHAT HAPPENS AND HOW OFTEN]
What seems to correlate with it (if anything): [TIMING, LOAD, SPECIFIC USER/
DATA, DEVICE, ORDER OF ACTIONS]
Relevant code/area: [PASTE OR DESCRIBE]
Help me:
1. Brainstorm the categories of intermittent causes to consider (race
   conditions, uninitialized/stale state, time/timezone, caching, network
   flakiness, environment differences, random data, order dependence).
2. Design a reproduction strategy: what to control/vary, added logging/
   instrumentation, and conditions to force the bug to appear consistently.
3. Suggest targeted logging or assertions to capture state at the moment of
   failure.
4. Once reproduced, outline how to isolate the cause via bisection.
5. Recommend a fix approach and a regression test that would have caught it.
Start by asking me the 2–3 most useful clarifying questions.`,
    featured: false,
  },
  {
    id: "60",
    slug: "compare-two-approaches-trade-off-analysis",
    title: "Compare Two Approaches (Trade-off Analysis)",
    titleAr: "Compare Two Approaches (Trade-off Analysis)",
    description: "Use this when you're stuck between two technical choices — libraries, patterns, architectures — and want an objective comparison rather than a gut decision.",
    descriptionAr: "Use this when you're stuck between two technical choices — libraries, patterns, architectures — and want an objective comparison rather than a gut decision.",
    category: "debugging",
    difficulty: "intermediate",
    tags: ["Debugging & Code Review"],
    aiModels: ["ChatGPT", "Claude", "Gemini"],
    prompt: `Act as a pragmatic staff engineer. Help me choose between two approaches with
a clear, unbiased trade-off analysis.
Decision: [E.G. "REST vs GraphQL", "Redux vs React Query", "monolith vs
services", "SQL vs NoSQL for this feature"]
My context: [APP, TEAM SIZE/EXPERIENCE, SCALE, TIMELINE, EXISTING STACK,
CONSTRAINTS]
Deliver:
1. A side-by-side comparison across the dimensions that matter HERE (dev
   speed, performance, scalability, complexity, maintainability, ecosystem,
   team familiarity, cost).
2. The concrete trade-offs of each — what I gain and give up.
3. Which scenarios favor option A vs option B.
4. A clear recommendation FOR MY SPECIFIC CONTEXT, with the reasoning, and
   what would change your recommendation.
5. The cost of being wrong / how reversible each choice is.
Don't sit on the fence — give a recommendation, but show your reasoning so I
can disagree.`,
    promptAr: `Act as a pragmatic staff engineer. Help me choose between two approaches with
a clear, unbiased trade-off analysis.
Decision: [E.G. "REST vs GraphQL", "Redux vs React Query", "monolith vs
services", "SQL vs NoSQL for this feature"]
My context: [APP, TEAM SIZE/EXPERIENCE, SCALE, TIMELINE, EXISTING STACK,
CONSTRAINTS]
Deliver:
1. A side-by-side comparison across the dimensions that matter HERE (dev
   speed, performance, scalability, complexity, maintainability, ecosystem,
   team familiarity, cost).
2. The concrete trade-offs of each — what I gain and give up.
3. Which scenarios favor option A vs option B.
4. A clear recommendation FOR MY SPECIFIC CONTEXT, with the reasoning, and
   what would change your recommendation.
5. The cost of being wrong / how reversible each choice is.
Don't sit on the fence — give a recommendation, but show your reasoning so I
can disagree.`,
    featured: false,
  },
];
