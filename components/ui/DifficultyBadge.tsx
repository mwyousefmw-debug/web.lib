import { cn, capitalize, getDifficultyColor } from "@/lib/utils";

interface DifficultyBadgeProps {
  difficulty: string;
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        getDifficultyColor(difficulty),
        className
      )}
    >
      {capitalize(difficulty)}
    </span>
  );
}
