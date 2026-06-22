import SectionShell from "@/components/primitives/SectionShell";
import SectionHeader from "@/components/primitives/SectionHeader";
import PrimaryButton from "@/components/primitives/PrimaryButton";
import { AccentGlow, LightingOrb } from "@/components/primitives/LightingEffects";

export default function CTA({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      lighting={
        <>
          <LightingOrb className="left-1/2 top-[15%] h-[1400px] w-[1100px] -translate-x-1/2 bg-white/7 blur-[220px]" />
          <AccentGlow className="bottom-[-25%] left-1/2 h-[1100px] w-[1600px] -translate-x-1/2 bg-accent/7" />
          <LightingOrb className="left-1/2 top-[-40%] h-[1000px] w-[1800px] -translate-x-1/2 bg-black/55 blur-[320px]" />
        </>
      }
    >
      <div className="container-section relative min-w-0">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            title="Ready to scale with AI?"
            description="Automate workflows. Increase conversions. Grow autonomously — powered by AI systems built around your business."
          />

          <PrimaryButton
            href="https://tally.so/r/kdaXJj"
            external
            size="lg"
            className="w-full sm:w-auto"
          >
            Book a Call →
          </PrimaryButton>
        </div>
      </div>
    </SectionShell>
  );
}
