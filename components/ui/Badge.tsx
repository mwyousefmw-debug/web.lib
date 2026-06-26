import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-muted text-muted-foreground border-border/50",
  primary: "bg-primary/10 text-primary border-primary/20",
  outline: "bg-transparent text-foreground border-border",
  success: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  danger: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

const sizes = {
  sm: "px-2 py-0.5 text-2xs font-medium",
  md: "px-2.5 py-1 text-xs font-medium",
};

export function Badge({ children, variant = "default", size = "md", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border",
        "leading-none tracking-wide",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
