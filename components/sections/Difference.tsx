"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import GlassCard from "@/components/primitives/GlassCard";
import { AccentGlow, CoolGlow, LightingOrb } from "@/components/primitives/LightingEffects";

const items = [
  {
    key: "core",
    title: "AI at the Core",
    subtitle: "Adaptive intelligence as the foundation.",
    desc: "Averon embeds intelligence into your workflow — evolving as you grow.",
    icon: "/icons/core.svg",
    bullets: [
      "Learns from real usage patterns",
      "Improves accuracy over time",
      "Reduces manual correction dramatically",
    ],
    stat: "Up to 60% fewer repetitive decisions",
  },
  {
    key: "auto",
    title: "Effortless Automation",
    subtitle: "Automations that feel invisible.",
    desc: "Your tasks execute themselves — quietly, accurately, and without friction.",
    icon: "/icons/automate.svg",
    bullets: ["Removes repetitive tasks", "Works across all tools", "Runs 24/7 without errors"],
    stat: "Up to 10× faster operations",
  },
  {
    key: "scale",
    title: "Scalable Intelligence",
    subtitle: "Built to handle growth instantly.",
    desc: "Your system performs the same on day 1 and day 1000 — even under scale.",
    icon: "/icons/scale.svg",
    bullets: ["Handles high volume data", "Predictable performance", "Zero bottleneck architecture"],
    stat: "99.5% stability at scale",
  },
  {
    key: "integrate",
    title: "Seamless Integration",
    subtitle: "Fits your stack, not the other way around.",
    desc: "Averon connects deeply into your tools, platforms, and internal systems.",
    icon: "/icons/integrate.svg",
    bullets: ["CRM, sheets, messaging", "APIs, internal databases", "Two-way sync everywhere"],
    stat: "Integrates with 450+ tools",
  },
  {
    key: "data",
    title: "Data-Driven Clarity",
    subtitle: "Your decisions, enhanced by insight.",
    desc: "Messy data becomes actionable insight — instantly usable in workflows.",
    icon: "/icons/data.svg",
    bullets: ["Real-time understanding", "Highlight key actions", "Eliminate blind spots"],
    stat: "Decisions 40% faster",
  },
  {
    key: "intuition",
    title: "Intelligence + Intuition",
    subtitle: "Human creativity × AI precision.",
    desc: "Your vision + AI's intelligence = workflows that feel effortless and intuitive.",
    icon: "/icons/chart.svg",
    bullets: ["Human-based guardrails", "Adaptive behavior", "Personalised responses"],
    stat: "User satisfaction ↑ significantly",
  },
];

export default function Difference({ id }: { id?: string }) {
  const [active, setActive] = useState(items[0].key);
  const selected = items.find((i) => i.key === active)!;

  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <CoolGlow className="left-[5%] top-[5%] h-[700px] w-[700px]" />
          <AccentGlow className="right-0 bottom-[-10%] h-[800px] w-[800px] bg-accent/10 blur-[280px]" />
          <LightingOrb className="left-1/2 top-[20%] h-[900px] w-[600px] -translate-x-1/2 bg-white/5 blur-[220px]" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Why Choose Averon"
        title="Averon's Difference"
        description="Our systems aren't plug-and-play scripts — they're tailored intelligence built for your exact workflow."
        className="container-tight relative"
      />

      <div className="container-section relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {items.map((item) => {
            const isActive = item.key === active;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={cn(
                  "focus-ring rounded-xl border px-4 py-3 text-left font-heading text-sm backdrop-blur-xl transition-all duration-300 sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-base",
                  isActive
                    ? "border-accent/40 bg-accent/10 text-accent shadow-[var(--shadow-glow-accent)] ring-1 ring-accent/30"
                    : "glass-surface glass-surface-hover text-text-subtle hover:text-white"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <GlassCard key={selected.key} padding="md" hover={false} className="flex flex-col">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl glass-surface">
            <img src={selected.icon} alt="" className="w-7" />
          </div>

          <h3 className="text-h3">{selected.title}</h3>
          <p className="text-body-sm mb-4 text-accent">{selected.subtitle}</p>
          <p className="text-body mb-5">{selected.desc}</p>

          <ul className="space-y-2.5">
            {selected.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-body-sm text-text-body">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 text-[13px] font-body text-emerald-300">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
                <path d="M12 4l6 6h-4v8h-4v-8H6l6-6z" fill="currentColor" />
              </svg>
              {selected.stat}
            </span>
          </div>
        </GlassCard>
      </div>

      <div className="container-section relative mt-8 md:mt-10">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
          {[
            { k: "Delivery", v: "Days–Weeks" },
            { k: "Integrations", v: "Your Stack" },
            { k: "Focus", v: "Custom Systems" },
            { k: "Maintenance", v: "Continuous" },
          ].map((s) => (
            <div
              key={s.k}
              className="glass-surface glass-surface-hover rounded-full px-4 py-2.5 text-center font-body text-xs text-text-subtle sm:px-6 sm:py-3 sm:text-sm"
            >
              <span className="text-text-muted">{s.k}:</span>{" "}
              <span className="text-white">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
