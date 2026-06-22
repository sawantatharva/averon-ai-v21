"use client";

import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import GlassCard from "@/components/primitives/GlassCard";
import {
  AccentGlow,
  CoolGlow,
} from "@/components/primitives/LightingEffects";

const steps = [
  {
    num: "01",
    title: "Understand your workflow",
    desc: "We map how your business operates to identify bottlenecks, repetitive work, and automation opportunities.",
  },
  {
    num: "02",
    title: "Design AI-powered automations",
    desc: "We architect intelligent workflows tailored to your processes — not generic templates.",
  },
  {
    num: "03",
    title: "Build & connect with your tools",
    desc: "Your automations integrate directly into your stack — CRM, calendar, forms, messaging, and internal systems.",
  },
  {
    num: "04",
    title: "Improve & support continuously",
    desc: "We monitor performance, refine logic, adjust behaviors, and ensure everything runs smoothly.",
  },
];

export default function HowItWorks({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <AccentGlow className="right-[-28%] bottom-[-5%] bg-accent/7" />
          <CoolGlow className="left-[-25%] top-[-10%] bg-glow-cool/6" />
        </>
      }
    >
      <div className="container-section relative min-w-0">
        <SectionHeader eyebrow="Step-by-Step" title="How It Works" />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <GlassCard key={step.num} lift className="group relative">
              <div className="lighting-orb absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 opacity-0 blur-[90px] transition-opacity duration-300 group-hover:opacity-100" />
              <span className="font-heading mb-4 block text-2xl text-accent">{step.num}</span>
              <h3 className="text-h4 mb-3 md:text-h3">{step.title}</h3>
              <p className="text-body">{step.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
