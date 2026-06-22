import { cn } from "@/lib/utils";

type GlassCardPadding = "sm" | "md" | "lg";

const paddingClasses: Record<GlassCardPadding, string> = {
  sm: "p-5 sm:p-6",
  md: "p-6 sm:p-7 md:p-8",
  lg: "p-7 sm:p-8 md:p-10",
};

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: GlassCardPadding;
  hover?: boolean;
  lift?: boolean;
  rounded?: "lg" | "xl";
};

export default function GlassCard({
  children,
  className,
  padding = "md",
  hover = true,
  lift = false,
  rounded = "xl",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface rounded-3xl shadow-[var(--shadow-glass)]",
        rounded === "lg" && "rounded-2xl",
        paddingClasses[padding],
        hover && "glass-surface-hover",
        lift && "hover-lift",
        className
      )}
    >
      {children}
    </div>
  );
}
