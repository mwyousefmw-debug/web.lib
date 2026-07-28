import { Sparkles, LayoutGrid, Bot, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromptStatsProps {
  labels: {
    prompts: string;
    categories: string;
    aiModels: string;
    freeAccess: string;
  };
  values: {
    prompts: number;
    categories: number;
    aiModels: number;
  };
}

export function PromptStats({ labels, values }: PromptStatsProps) {
  const stats = [
    { icon: Sparkles, value: `${values.prompts}`, label: labels.prompts },
    { icon: LayoutGrid, value: `${values.categories}`, label: labels.categories },
    { icon: Bot, value: `${values.aiModels}`, label: labels.aiModels },
    { icon: Gift, value: "100%", label: labels.freeAccess },
  ];

  return (
    <section className="relative py-12 md:py-16 border-y border-border/40 bg-muted/20">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center text-center gap-3 py-4",
                index < stats.length - 1 && "md:border-e md:border-border/40"
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display font-black text-4xl md:text-5xl text-gradient tabular-nums">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
