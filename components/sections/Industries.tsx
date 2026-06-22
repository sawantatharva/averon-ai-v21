"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { cn } from "@/lib/utils";
import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import PrimaryButton from "@/components/primitives/PrimaryButton";
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
  problems: [string, string, string];
  outcome?: string;
  video: string;
};

const industries: Industry[] = [
  {
    key: "healthcare",
    title: "Healthcare Clinics & Diagnostic Centers",
    tagline: "Less admin, more patient care",
    description:
      "Automate appointment booking, test result follow-ups, and referral coordination — so your front desk and clinical staff focus on patients, not paperwork.",
    problems: [
      "Patient intake and insurance details collected manually",
      "Test results and follow-up calls falling through the cracks",
      "Front desk overloaded with calls, reminders, and rescheduling",
    ],
    video:
      "https://videos.pexels.com/video-files/3254060/3254060-hd_1920_1080_30fps.mp4",
  },
  {
    key: "travel",
    title: "Travel Agencies & Tour Operators",
    tagline: "Bookings on autopilot, clients always informed",
    description:
      "Automate itinerary updates, payment reminders, and inquiry responses — so every trip runs smoothly from quote to return.",
    problems: [
      "Inquiry leads sitting unanswered for hours",
      "Manual itinerary changes and confirmation emails eating agent time",
      "Payment follow-ups and document collection delaying confirmed bookings",
    ],
    video:
      "https://videos.pexels.com/video-files/3189023/3189023-hd_1920_1080_30fps.mp4",
  },
  {
    key: "marketing",
    title: "Performance Marketing Agencies",
    tagline: "Scale campaigns without scaling headcount",
    description:
      "Automate client reporting, lead routing, and campaign alerts — your team spends time on strategy, not spreadsheets and status updates.",
    problems: [
      "Client reports built manually every week from scattered ad data",
      "Leads and form submissions routed by hand across accounts",
      "Performance dips flagged only after clients escalate",
    ],
    video:
      "https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4",
  },
  {
    key: "recruitment",
    title: "Recruitment Agencies",
    tagline: "Place candidates faster, with less manual work",
    description:
      "Automate candidate screening, client updates, and interview scheduling — so recruiters spend time on relationships, not repetitive coordination.",
    problems: [
      "CVs and applications screened and sorted manually",
      "Clients waiting on status updates recruiters can't send fast enough",
      "Interview scheduling stuck in endless email and WhatsApp threads",
    ],
    video:
      "https://videos.pexels.com/video-files/3191572/3191572-hd_1920_1080_30fps.mp4",
  },
  {
    key: "fitness",
    title: "Gyms & Fitness Studios",
    tagline: "Retain members, fill classes, reduce no-shows",
    description:
      "Automate membership follow-ups, class reminders, and lead nurture — so your team focuses on coaching, not chasing payments and confirmations.",
    problems: [
      "Trial leads and membership inquiries answered too slowly",
      "Class bookings and no-show follow-ups handled manually",
      "Renewal and payment reminders inconsistent across members",
    ],
    video:
      "https://videos.pexels.com/video-files/4495955/4495955-hd_1920_1080_25fps.mp4",
  },
  {
    key: "real-estate",
    title: "Real Estate Developers",
    tagline: "Move inventory faster with automated buyer journeys",
    description:
      "Automate lead qualification, site visit scheduling, and buyer updates — every project keeps momentum from inquiry to close.",
    problems: [
      "High-value leads waiting too long for a first response",
      "Site visits and broker coordination spread across scattered chats",
      "Buyers left without timely updates on availability and pricing",
    ],
    video:
      "https://videos.pexels.com/video-files/3284968/3284968-hd_1920_1080_25fps.mp4",
  },
  {
    key: "lead-gen",
    title: "Lead Generation Agencies",
    tagline: "Deliver leads clients can actually convert",
    description:
      "Automate lead validation, CRM delivery, and client reporting — so your agency scales output without quality slipping.",
    problems: [
      "Leads qualified and formatted manually before every client handoff",
      "Delivery delays when volume spikes or tools fail to sync",
      "Clients questioning lead quality without real-time proof or reporting",
    ],
    video:
      "https://videos.pexels.com/video-files/6774837/6774837-hd_1920_1080_25fps.mp4",
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
      lighting={
        <>
          <CoolGlow className="left-[-20%] top-[5%] bg-glow-cool/8" />
          <AccentGlow className="right-[-25%] bottom-[-5%] bg-accent/8" />
          <LightingOrb className="left-1/2 top-1/2 h-[500px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-accent/5 blur-[200px]" />
        </>
      }
    >
      <div ref={sectionRef} className="container-section relative min-w-0">
        <SectionHeader
          eyebrow="Where We Excel"
          title="Industries We Serve"
          description="Tailored AI automation for the sectors where precision, speed, and reliability matter most."
        />

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[var(--shadow-glass-strong)] backdrop-blur-sm sm:rounded-3xl">
          <div className="grid lg:grid-cols-[minmax(0,15.5rem)_1fr] xl:grid-cols-[minmax(0,16.5rem)_1fr]">
            {/* Desktop industry selector */}
            <div
              className="hidden flex-col gap-1 border-b border-white/10 bg-white/[0.02] p-3 lg:flex lg:border-b-0 lg:border-r"
              role="tablist"
              aria-label="Industries"
            >
              {industries.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => goTo(i)}
                    className={cn(
                      "focus-ring rounded-xl border px-3.5 py-2.5 text-left transition-all duration-300",
                      isActive
                        ? "border-accent/40 bg-accent/10 text-accent shadow-[var(--shadow-glow-accent)] ring-1 ring-accent/25"
                        : "border-transparent text-white/55 hover:border-white/10 hover:bg-white/[0.05] hover:text-white/90"
                    )}
                  >
                    <span className="block font-heading text-sm">{item.title}</span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs leading-snug",
                        isActive ? "text-accent/75" : "text-white/40"
                      )}
                    >
                      {item.tagline}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main panel */}
            <div className="min-w-0">
              {/* Mobile / tablet pills */}
              <div
                className="flex gap-2 overflow-x-auto border-b border-white/10 p-3 scrollbar-none snap-x snap-mandatory sm:p-4 lg:hidden"
                role="tablist"
                aria-label="Industries"
              >
                {industries.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => goTo(i)}
                      className={cn(
                        "focus-ring min-h-11 max-w-[11rem] shrink-0 snap-center truncate rounded-full border px-3.5 py-2 font-heading text-xs transition-all duration-300 sm:max-w-[13rem] sm:px-4 sm:text-sm",
                        isActive
                          ? "border-accent/45 bg-accent/12 text-accent shadow-[var(--shadow-glow-accent)]"
                          : "border-white/10 bg-white/5 text-white/60 active:scale-95"
                      )}
                      title={item.title}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>

              <div
                {...bindDrag()}
                className="cursor-grab active:cursor-grabbing"
                tabIndex={0}
                role="tabpanel"
                aria-label={`${active.title} industry details. Swipe or use arrow keys to navigate.`}
              >
                {/* Compact video strip */}
                <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-white/10 sm:aspect-[21/9]">
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
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                </div>

                {/* Content panel */}
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <span className="font-heading text-[10px] tracking-[0.18em] text-accent/80 sm:text-xs">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(industries.length).padStart(2, "0")}
                      </span>
                      <h3
                        key={active.key}
                        className={cn(
                          "text-h3 mt-1 break-words",
                          isTransitioning && "industry-text-enter"
                        )}
                      >
                        {active.title}
                      </h3>
                      <p
                        key={`${active.key}-tagline`}
                        className={cn(
                          "mt-1 text-sm text-accent sm:text-base",
                          isTransitioning && "industry-text-enter"
                        )}
                      >
                        {active.tagline}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
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
                      "text-body mt-4 max-w-2xl",
                      isTransitioning && "industry-text-enter"
                    )}
                  >
                    {active.description}
                  </p>

                  <div
                    key={`${active.key}-problems`}
                    className={cn("mt-5 sm:mt-6", isTransitioning && "industry-text-enter")}
                  >
                    <p className="text-eyebrow mb-3">Key problems we solve</p>
                    <ul className="space-y-2.5">
                      {active.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-3">
                          <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="text-body-sm text-text-body">
                            {problem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={cn(
                      "mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center sm:gap-6",
                      !active.outcome && "sm:justify-start",
                      isTransitioning && "industry-text-enter"
                    )}
                  >
                    {active.outcome && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-[13px] font-body text-accent-light">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 shrink-0"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 4l6 6h-4v8h-4v-8H6l6-6z"
                            fill="currentColor"
                          />
                        </svg>
                        {active.outcome}
                      </span>
                    )}

                    <PrimaryButton
                      href="https://tally.so/r/kdaXJj"
                      external
                      className="w-full sm:w-auto sm:shrink-0"
                    >
                      Discuss Your Workflow →
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex items-center justify-center gap-1.5 sm:mt-8">
          {industries.map((item, i) => (
            <button
              key={item.key}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${item.title}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className="touch-target flex items-center justify-center p-2"
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "h-1.5 w-6 bg-accent"
                    : "h-1.5 w-1.5 bg-white/25 hover:bg-white/45"
                )}
              />
            </button>
          ))}
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
        "focus-ring touch-target flex items-center justify-center rounded-full glass-surface glass-surface-hover text-text-muted transition hover:text-white",
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
