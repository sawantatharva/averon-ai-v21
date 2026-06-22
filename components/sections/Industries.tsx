"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { cn } from "@/lib/utils";
import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import {
  AccentGlow,
  CoolGlow,
  LightingOrb,
} from "@/components/primitives/LightingEffects";

type Industry = {
  key: string;
  title: string;
  tagline: string;
  description: string;
  video: string;
};

const industries: Industry[] = [
  {
    key: "healthcare",
    title: "Healthcare",
    tagline: "Patient-first automation",
    description:
      "Streamline intake, scheduling, follow-ups, and internal coordination — so clinical teams spend less time on admin and more time on care.",
    video:
      "https://videos.pexels.com/video-files/3254060/3254060-hd_1920_1080_30fps.mp4",
  },
  {
    key: "real-estate",
    title: "Real Estate",
    tagline: "Faster deal cycles",
    description:
      "Automate lead routing, property inquiries, viewing schedules, and client updates — keeping every deal moving without manual chasing.",
    video:
      "https://videos.pexels.com/video-files/3284968/3284968-hd_1920_1080_25fps.mp4",
  },
  {
    key: "ecommerce",
    title: "E-Commerce",
    tagline: "Scale without friction",
    description:
      "Connect orders, inventory, support tickets, and fulfillment workflows — so your store runs smoothly even as volume spikes.",
    video:
      "https://videos.pexels.com/video-files/4495955/4495955-hd_1920_1080_25fps.mp4",
  },
  {
    key: "legal",
    title: "Legal",
    tagline: "Precision at every step",
    description:
      "Automate document routing, client intake, deadline tracking, and case updates — reducing bottlenecks while maintaining accuracy.",
    video:
      "https://videos.pexels.com/video-files/6774837/6774837-hd_1920_1080_25fps.mp4",
  },
  {
    key: "finance",
    title: "Finance",
    tagline: "Intelligence you can trust",
    description:
      "Orchestrate reporting, compliance checks, client communications, and data pipelines — with workflows built for accuracy and auditability.",
    video:
      "https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4",
  },
  {
    key: "hospitality",
    title: "Hospitality",
    tagline: "Guest experiences, elevated",
    description:
      "Automate reservations, guest messaging, staff coordination, and feedback loops — delivering seamless service at every touchpoint.",
    video:
      "https://videos.pexels.com/video-files/3189023/3189023-hd_1920_1080_30fps.mp4",
  },
  {
    key: "professional",
    title: "Professional Services",
    tagline: "Operations that scale",
    description:
      "Unify proposals, onboarding, project updates, and billing workflows — so your team delivers consistently as you grow.",
    video:
      "https://videos.pexels.com/video-files/3191572/3191572-hd_1920_1080_30fps.mp4",
  },
];

export default function Industries({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const active = industries[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      const next =
        ((index % industries.length) + industries.length) % industries.length;
      if (next === activeIndex) return;
      setIsTransitioning(true);
      setActiveIndex(next);
      window.setTimeout(() => setIsTransitioning(false), 500);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!sectionRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const bindDrag = useDrag(
    ({ direction: [dx], velocity: [vx], movement: [mx], last }) => {
      if (!last) return;
      const threshold = Math.abs(mx) > 40 || vx > 0.4;
      if (!threshold) return;
      if (dx > 0) goPrev();
      else goNext();
    },
    { axis: "x", filterTaps: true }
  );

  return (
    <SectionShell
      id={id}
      padding="compact"
      lighting={
        <>
          <CoolGlow className="left-[-20%] top-[5%] bg-glow-cool/8" />
          <AccentGlow className="right-[-25%] bottom-[-5%] bg-accent/8" />
          <LightingOrb className="left-1/2 top-1/2 h-[500px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-accent/5 blur-[200px]" />
        </>
      }
    >
      <div ref={sectionRef} className="container-section relative">
        <SectionHeader
          eyebrow="Where We Excel"
          title="Industries We Serve"
          description="Tailored AI automation for the sectors where precision, speed, and reliability matter most."
          compact
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-8 xl:grid-cols-[minmax(0,260px)_1fr]">
          {/* Desktop industry list */}
          <div className="hidden flex-col gap-1.5 lg:flex">
            {industries.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "focus-ring rounded-xl border px-4 py-3 text-left transition-all duration-300",
                    isActive
                      ? "border-accent/40 bg-accent/10 text-accent shadow-[var(--shadow-glow-accent)]"
                      : "border-transparent bg-white/[0.03] text-white/60 hover:border-white/10 hover:bg-white/[0.06] hover:text-white/90"
                  )}
                >
                  <span className="font-heading text-sm">{item.title}</span>
                  {isActive && (
                    <span className="mt-0.5 block text-xs text-accent/70">
                      {item.tagline}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Video showcase */}
          <div className="min-w-0">
            <div
              {...bindDrag()}
              className="cursor-grab active:cursor-grabbing"
              tabIndex={0}
              role="region"
              aria-label={`${active.title} industry showcase. Swipe or use arrow keys to navigate.`}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[var(--shadow-glass-strong)] backdrop-blur-sm">
                <div className="relative aspect-[16/10] w-full sm:aspect-video">
                  {industries.map((item, i) => (
                    <video
                      key={item.key}
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={item.video}
                      muted
                      loop
                      playsInline
                      preload={i === activeIndex ? "auto" : "metadata"}
                      aria-hidden={i !== activeIndex}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out",
                        i === activeIndex ? "opacity-100" : "opacity-0"
                      )}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <span className="font-heading text-[10px] tracking-[0.18em] text-accent/80 sm:text-xs">
                          {String(activeIndex + 1).padStart(2, "0")} /{" "}
                          {String(industries.length).padStart(2, "0")}
                        </span>
                        <h3
                          key={active.key}
                          className={cn(
                            "text-h3 mt-1 sm:text-2xl",
                            isTransitioning && "industry-text-enter"
                          )}
                        >
                          {active.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-accent sm:text-base">
                          {active.tagline}
                        </p>
                      </div>

                      <div className="hidden shrink-0 items-center gap-2 sm:flex">
                        <NavButton onClick={goPrev} label="Previous industry">
                          <ChevronLeft />
                        </NavButton>
                        <NavButton onClick={goNext} label="Next industry">
                          <ChevronRight />
                        </NavButton>
                      </div>
                    </div>

                    <p
                      key={`${active.key}-desc`}
                      className={cn(
                        "text-body-sm mt-3 line-clamp-3 sm:line-clamp-none sm:text-body",
                        isTransitioning && "industry-text-enter"
                      )}
                    >
                      {active.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile / tablet industry pills */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x snap-mandatory lg:hidden">
              {industries.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "shrink-0 snap-center rounded-full border px-3.5 py-2 font-heading text-xs transition-all duration-300 sm:px-4 sm:text-sm",
                      isActive
                        ? "border-accent/45 bg-accent/12 text-accent shadow-[var(--shadow-glow-accent)]"
                        : "border-white/10 bg-white/5 text-white/60 active:scale-95"
                    )}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* Compact nav row */}
            <div className="mt-4 flex items-center justify-between gap-4 sm:justify-center">
              <NavButton
                onClick={goPrev}
                label="Previous industry"
                className="sm:hidden"
              >
                <ChevronLeft />
              </NavButton>

              <div className="flex items-center gap-1.5">
                {industries.map((item, i) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${item.title}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                    className={cn(
                      "rounded-full transition-all duration-300",
                      i === activeIndex
                        ? "h-1.5 w-6 bg-accent"
                        : "h-1.5 w-1.5 bg-white/25 hover:bg-white/45"
                    )}
                  />
                ))}
              </div>

              <NavButton
                onClick={goNext}
                label="Next industry"
                className="sm:hidden"
              >
                <ChevronRight />
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function NavButton({
  onClick,
  label,
  children,
  className,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "focus-ring flex h-9 w-9 items-center justify-center rounded-full glass-surface glass-surface-hover text-text-muted transition hover:text-white sm:h-10 sm:w-10",
        className
      )}
    >
      {children}
    </button>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
