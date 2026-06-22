"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import PrimaryButton from "@/components/primitives/PrimaryButton";
import {
  AccentGlow,
  CoolGlow,
  LightingOrb,
} from "@/components/primitives/LightingEffects";

type PortfolioProject = {
  key: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  image: string;
  accent: string;
};

const projects: PortfolioProject[] = [
  {
    key: "medflow",
    title: "MedFlow Intake",
    client: "Regional Health Group",
    industry: "Healthcare",
    summary:
      "End-to-end patient intake automation — forms, scheduling, follow-ups, and staff alerts connected in one intelligent flow.",
    outcome: "85% faster patient onboarding with zero missed follow-ups.",
    metric: "85%",
    metricLabel: "Faster intake",
    stack: ["OpenAI", "Zapier", "Google Sheets"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    accent: "from-cyan-500/30 via-accent/20 to-transparent",
  },
  {
    key: "estatepilot",
    title: "EstatePilot Leads",
    client: "Urban Property Co.",
    industry: "Real Estate",
    summary:
      "AI lead qualification and routing engine that scores inquiries, assigns agents, and triggers instant client responses.",
    outcome: "3× more qualified leads converted within the first 48 hours.",
    metric: "3×",
    metricLabel: "Qualified leads",
    stack: ["Claude", "Make", "HubSpot"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    accent: "from-violet-500/30 via-accent/20 to-transparent",
  },
  {
    key: "commercebot",
    title: "CommerceBot Support",
    client: "Nova Retail",
    industry: "E-Commerce",
    summary:
      "AI support assistant handling order status, returns, and product questions — escalating only when human judgment is needed.",
    outcome: "60% of support tickets resolved automatically, 24/7.",
    metric: "60%",
    metricLabel: "Ticket deflection",
    stack: ["GPT-4", "Shopify", "Intercom"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    accent: "from-emerald-500/25 via-accent/20 to-transparent",
  },
  {
    key: "legalsync",
    title: "LegalSync Pipeline",
    client: "Meridian Law Partners",
    industry: "Legal",
    summary:
      "Document intake, deadline tracking, and client update workflows — keeping every case moving with audit-ready accuracy.",
    outcome: "70% reduction in manual document routing and missed deadlines.",
    metric: "70%",
    metricLabel: "Less manual work",
    stack: ["Gemini", "Notion", "Gmail"],
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80",
    accent: "from-amber-500/25 via-accent/20 to-transparent",
  },
  {
    key: "finpulse",
    title: "FinPulse Reports",
    client: "Atlas Advisory",
    industry: "Finance",
    summary:
      "Automated data aggregation, compliance checks, and client report generation — from raw inputs to polished deliverables.",
    outcome: "Reporting cycles cut from days to hours with full audit trails.",
    metric: "10×",
    metricLabel: "Faster reporting",
    stack: ["OpenAI", "AWS", "Excel"],
    image:
      "https://images.unsplash.com/photo-1611974789855-5c2a1a4f4fde?auto=format&fit=crop&w=1400&q=80",
    accent: "from-sky-500/30 via-accent/20 to-transparent",
  },
];

export default function Portfolio({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const active = projects[activeIndex];

  const selectProject = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      window.setTimeout(() => setIsTransitioning(false), 550);
    },
    [activeIndex]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!stageRef.current || window.matchMedia("(max-width: 1023px)").matches)
        return;
      const rect = stageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      setTilt({ x, y });
    },
    []
  );

  const resetTilt = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <CoolGlow className="left-[-15%] top-[10%] bg-glow-cool/8" />
          <AccentGlow className="right-[-20%] bottom-[-5%] bg-accent/7" />
          <LightingOrb className="left-1/2 top-[40%] h-[500px] w-[700px] -translate-x-1/2 bg-accent/4 blur-[200px]" />
        </>
      }
    >
      <div className="container-section relative min-w-0">
        <SectionHeader
          eyebrow="Proof in Practice"
          title="Selected Work"
          description="Real automation systems we've built — each tailored to a client's workflow, tools, and growth goals."
        />

        {/* Spotlight stage */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="group/stage relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[var(--shadow-glass-strong)] backdrop-blur-sm sm:rounded-3xl"
          style={{
            transform: `perspective(1200px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.6s ease-out" : "transform 0.1s ease-out",
          }}
        >
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] md:aspect-[21/9]">
            {projects.map((project, i) => (
              <div
                key={project.key}
                aria-hidden={i !== activeIndex}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-out",
                  i === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
                )}
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    project.accent
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              </div>
            ))}

            <span
              key={`num-${active.key}`}
              className={cn(
                "pointer-events-none absolute right-4 top-2 font-heading text-[4rem] leading-none text-white/[0.06] sm:right-6 sm:top-3 sm:text-[5.5rem] md:text-[6.5rem]",
                isTransitioning && "portfolio-reveal"
              )}
              aria-hidden="true"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-8">
              <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
                <div
                  key={active.key}
                  className={cn("min-w-0 flex-1 lg:max-w-2xl", isTransitioning && "portfolio-reveal")}
                >
                  <div className="mb-2.5 flex flex-wrap items-center gap-2 sm:mb-3">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-heading text-[11px] tracking-wide text-accent sm:text-xs">
                      {active.industry}
                    </span>
                    <span className="text-body-sm text-text-muted">
                      {active.client}
                    </span>
                  </div>

                  <h3 className="text-h3 break-words sm:text-3xl md:text-4xl">
                    {active.title}
                  </h3>
                  <p className="text-body mt-2 line-clamp-2 max-w-xl sm:mt-2.5">{active.summary}</p>

                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-3.5">
                    {active.stack.map((tool) => (
                      <span
                        key={tool}
                        className="badge-pill px-2.5 py-1 text-[11px] sm:text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  key={`metric-${active.key}`}
                  className={cn(
                    "glass-surface w-full shrink-0 rounded-2xl border border-white/10 p-5 sm:p-6 lg:w-[11.5rem] xl:w-[12.5rem]",
                    isTransitioning && "portfolio-reveal"
                  )}
                >
                  <p className="font-heading text-3xl text-accent sm:text-4xl">
                    {active.metric}
                  </p>
                  <p className="text-body-sm mt-0.5 text-text-muted">
                    {active.metricLabel}
                  </p>
                  <p className="text-body-sm mt-2.5 line-clamp-2 border-t border-white/10 pt-2.5">
                    {active.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/stage:opacity-100"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgb(77_163_255_/_0.12),transparent_50%)]" />
            </div>
          </div>
        </div>

        {/* Film-strip selector */}
        <div className="relative mt-8 md:mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-bg-primary to-transparent md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-bg-primary to-transparent md:hidden" />

          <div
            role="tablist"
            aria-label="Portfolio projects"
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 scrollbar-none sm:gap-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
          >
            {projects.map((project, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={project.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectProject(i)}
                  className={cn(
                    "group/reel focus-ring relative shrink-0 snap-center overflow-hidden rounded-xl border text-left transition-[border-color,box-shadow,opacity] duration-300",
                    "w-[8rem] sm:w-[8.25rem] md:w-full",
                    isActive
                      ? "border-accent/40 opacity-100 shadow-[var(--shadow-glow-accent)]"
                      : "border-white/10 opacity-70 hover:border-white/20 hover:opacity-100"
                  )}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      className={cn(
                        "h-full w-full object-cover transition-transform duration-700",
                        isActive
                          ? "scale-100"
                          : "scale-110 group-hover/reel:scale-105"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex min-h-[2.75rem] flex-col justify-end p-2.5 sm:min-h-[3rem] sm:p-3">
                      <span
                        className={cn(
                          "font-heading text-[10px] tracking-wider text-accent/80",
                          isActive ? "opacity-100" : "opacity-0 transition-opacity group-hover/reel:opacity-100"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-0.5 truncate font-heading text-xs text-white sm:text-sm">
                        {project.title}
                      </p>
                    </div>

                    {isActive && (
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent portfolio-shimmer" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress + CTA row */}
        <div className="mt-8 flex w-full flex-col items-stretch justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex items-center gap-0.5 sm:gap-1.5">
              {projects.map((project, i) => (
                <button
                  key={project.key}
                  type="button"
                  onClick={() => selectProject(i)}
                  aria-label={`View ${project.title}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className="touch-target flex items-center justify-center p-2"
                >
                  <span
                    className={cn(
                      "block rounded-full transition-all duration-300",
                      i === activeIndex
                        ? "h-1.5 w-8 bg-accent"
                        : "h-1.5 w-1.5 bg-white/25 hover:bg-white/50"
                    )}
                  />
                </button>
              ))}
            </div>
            <span className="text-body-sm text-text-muted">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <PrimaryButton href="https://tally.so/r/kdaXJj" external className="w-full sm:w-auto">
            Start Your Project →
          </PrimaryButton>
        </div>
      </div>
    </SectionShell>
  );
}
