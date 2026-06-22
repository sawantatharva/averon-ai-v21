"use client";

import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import GlassCard from "@/components/primitives/GlassCard";
import {
  AccentGlow,
  CoolGlow,
} from "@/components/primitives/LightingEffects";

const services = [
  {
    icon: "/icons/automations-blue.svg",
    title: "AI Workflow Automation",
    desc: "Replace repetitive manual tasks with smooth, fully connected AI-powered processes tailored to your operations.",
  },
  {
    icon: "/icons/assistants-blue.svg",
    title: "AI Assistants",
    desc: "Handle customer queries, leads, support, and sales processes — automatically and intelligently.",
  },
  {
    icon: "/icons/consulting-blue.svg",
    title: "AI Consulting",
    desc: "Identify where AI can save you time, improve workflows, and design the right automation strategy.",
  },
  {
    icon: "/icons/notifications-blue.svg",
    title: "Communication Automation",
    desc: "Automated reminders, tickets, emails, updates, and follow-ups that prevent missed opportunities.",
  },
];

export default function Services({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <AccentGlow className="right-[-30%] top-[-5%] bg-accent/9" />
          <CoolGlow className="left-[-28%] bottom-[-5%] bg-glow-cool/6" />
        </>
      }
    >
      <div className="container-section relative">
        <SectionHeader
          eyebrow="What We Do"
          title="Services We Provide"
          description="AI systems custom-designed around the way your business actually works."
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 lg:gap-7">
          {services.map((srv) => (
            <GlassCard
              key={srv.title}
              padding="md"
              lift
              className="group relative"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="lighting-orb right-[-20%] top-[10%] h-[220px] w-[220px] bg-accent/22 blur-[120px]" />
                <div className="lighting-orb bottom-[-10%] left-[-20%] h-[180px] w-[180px] bg-accent/12 blur-[120px]" />
              </div>

              <div className="relative z-[2] mb-4 flex h-12 w-12 items-center justify-center rounded-xl glass-surface transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl">
                <img src={srv.icon} alt="" className="w-6 opacity-90 sm:w-7" />
              </div>

              <h3 className="text-h3 relative z-[2] mb-2 sm:mb-3">
                {srv.title}
              </h3>
              <p className="text-body relative z-[2]">{srv.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
