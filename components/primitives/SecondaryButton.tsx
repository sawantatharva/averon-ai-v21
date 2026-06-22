import Link from "next/link";
import { cn } from "@/lib/utils";

type SecondaryButtonVariant = "outline" | "glass";

type SecondaryButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: SecondaryButtonVariant;
  size?: "default" | "lg";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  style?: React.CSSProperties;
};

export default function SecondaryButton({
  href,
  children,
  className,
  external = false,
  variant = "outline",
  size = "default",
  onClick,
  style,
}: SecondaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium text-white",
    "font-body transition-all duration-300 hover-scale focus-ring",
    variant === "outline" && "border border-white/20 hover:bg-white/10",
    variant === "glass" &&
      "glass-surface glass-surface-hover font-heading hover:bg-white/10",
    size === "default" && "px-7 py-3.5 text-sm sm:px-8 sm:text-base",
    size === "lg" && "px-8 py-4 text-base sm:text-lg",
    className
  );

  if (onClick || !href) {
    return (
      <button type="button" onClick={onClick} className={classes} style={style}>
        {children}
      </button>
    );
  }

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
    </Link>
  );
}
