import { cn } from "@/lib/utils";

type SectionPadding = "default" | "compact" | "hero" | "none";

const paddingClasses: Record<SectionPadding, string> = {
  default: "py-12 sm:py-16 md:py-24",
  compact: "py-10 sm:py-14 md:py-20",
  hero: "min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24",
  none: "",
};

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  padding?: SectionPadding;
  lighting?: React.ReactNode;
  as?: "section" | "footer";
};

export default function SectionShell({
  id,
  children,
  className,
  padding = "default",
  lighting,
  as: Tag = "section",
}: SectionShellProps) {
  const isHero = padding === "hero";

  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full overflow-hidden bg-bg-primary",
        isHero && "flex items-center",
        paddingClasses[padding],
        className
      )}
    >
      {lighting}
      {children}
    </Tag>
  );
}
