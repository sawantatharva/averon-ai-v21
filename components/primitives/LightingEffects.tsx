import { cn } from "@/lib/utils";

type LightingOrbProps = {
  className?: string;
};

export function LightingOrb({ className }: LightingOrbProps) {
  return <div className={cn("lighting-orb", className)} aria-hidden="true" />;
}

/** Reusable bottom vignette used across multiple sections */
export function BottomVignette({ className }: LightingOrbProps) {
  return (
    <LightingOrb
      className={cn(
        "bottom-[-40%] left-1/2 h-[900px] w-[1700px] -translate-x-1/2 bg-black/50 blur-[360px]",
        className
      )}
    />
  );
}

/** Standard accent blue glow orb */
export function AccentGlow({ className }: LightingOrbProps) {
  return (
    <LightingOrb
      className={cn(
        "h-[1100px] w-[1100px] bg-accent/8 blur-[300px]",
        className
      )}
    />
  );
}

/** Cool-toned ambient wash */
export function CoolGlow({ className }: LightingOrbProps) {
  return (
    <LightingOrb
      className={cn(
        "h-[1000px] w-[1000px] bg-glow-cool/7 blur-[300px]",
        className
      )}
    />
  );
}
