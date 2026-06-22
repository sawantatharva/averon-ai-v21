"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import { AccentGlow, LightingOrb } from "@/components/primitives/LightingEffects";

const faqs = [
  {
    q: "Will it work with my existing software?",
    a: "Yes — it integrates with most apps and systems you already use.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No — we handle everything for you end-to-end.",
  },
  {
    q: "How quickly can you deliver?",
    a: "Most AI workflows are ready within a few days. Larger setups typically take 1–3 weeks depending on complexity.",
  },
  {
    q: "Is it easy to use?",
    a: "Yes — our solutions are designed to be simple, intuitive, and non-technical.",
  },
];

export default function FAQs({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <LightingOrb className="left-1/2 top-[5%] h-[800px] w-[600px] -translate-x-1/2 bg-glow-muted/6 blur-[220px]" />
          <AccentGlow className="right-[-30%] bottom-[-10%] bg-accent/6" />
        </>
      }
    >
      <div className="container-narrow relative">
        <SectionHeader eyebrow="Need Answers?" title="FAQs" />

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="glass-surface glass-surface-hover rounded-2xl border border-b-0 px-5 shadow-[var(--shadow-glass)] sm:px-6"
            >
              <AccordionTrigger className="py-4 text-left font-heading text-base text-white transition-colors hover:no-underline focus-visible:outline-none data-[state=open]:text-accent sm:text-lg md:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-0 text-body md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
