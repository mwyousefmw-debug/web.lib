/** Suspense fallback for PromptsBrowser — mirrors its layout to avoid layout shift. */
export function PromptsGridSkeleton() {
  return (
    <div className="flex flex-col gap-8" aria-hidden="true">
      <div className="max-w-xl mx-auto w-full h-[52px] rounded-xl bg-muted/30 animate-pulse" />

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-muted/30 animate-pulse" />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-muted/30 animate-pulse" />
          ))}
        </div>
      </div>

      <div className="h-4 w-40 rounded bg-muted/30 animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-64 rounded-2xl border border-border/50 bg-muted/20 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
