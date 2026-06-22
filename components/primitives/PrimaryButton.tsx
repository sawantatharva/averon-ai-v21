import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  size?: "default" | "lg";
};

export default function PrimaryButton({
  href,
  children,
  className,
  external = false,
  size = "default",
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full bg-white font-medium text-black",
    "font-body shadow-[var(--shadow-glow-white)] transition-all duration-300 hover-scale focus-ring active:scale-[0.98]",
    "hover:shadow-[var(--shadow-glow-white-hover)]",
    size === "default" && "px-7 py-3.5 text-sm sm:px-8 sm:text-base",
    size === "lg" && "px-10 py-4 font-heading text-lg",
    className
  );

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
