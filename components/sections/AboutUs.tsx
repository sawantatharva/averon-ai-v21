"use client";

import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import GlassCard from "@/components/primitives/GlassCard";
import {
  AccentGlow,
  BottomVignette,
  CoolGlow,
} from "@/components/primitives/LightingEffects";

const values = [
  {
    icon: "/icons/bolt-blue.svg",
    title: "Fast Deployment",
    desc: "Most workflows go live within days — not weeks.",
  },
  {
    icon: "/icons/consulting-blue.svg",
    title: "Personalised AI",
    desc: "Custom-built around your tools, rules, and processes.",
  },
  {
    icon: "/icons/automations-blue.svg",
    title: "Ongoing Support",
    desc: "We iterate and improve as your operations grow.",
  },
];

export default function AboutUs({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <CoolGlow className="left-[-25%] top-[-5%]" />
          <AccentGlow className="right-[-20%] bottom-0 bg-accent/8" />
        </>
      }
    >
      <div className="container-section relative mx-auto max-w-6xl">
        <SectionHeader
          align="left"
          eyebrow="Who We Are"
          title="About Averon AI"
        />

        <GlassCard padding="lg" className="shadow-[var(--shadow-glass-strong)]">
          <p className="text-body-lg md:text-xl md:leading-relaxed">
            Averon AI builds personalised AI systems designed around how
            <strong> your </strong> business actually works — not generic
            templates. We automate workflows, enable AI assistants, and
            streamline operations so your team can work smarter, faster, and
            with less manual effort.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 md:mt-10">
            {values.map((item) => (
              <div key={item.title} className="group text-center">
                <div className="glass-surface glass-surface-hover mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-[var(--shadow-glow-accent)] transition-transform duration-300 group-hover:scale-105">
                  <img src={item.icon} alt="" className="w-8" />
                </div>
                <h4 className="text-h4 mt-4">{item.title}</h4>
                <p className="text-body-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
