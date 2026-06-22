import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  compact?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  compact = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        compact ? "mb-8 md:mb-10" : "mb-8 sm:mb-10 md:mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-eyebrow mb-3">{eyebrow}</p>
      )}
      <h2 className={cn("text-h2 text-balance", titleClassName)}>{title}</h2>
      {description && (
        <p
          className={cn(
            "text-body-lg mt-4 text-pretty",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
