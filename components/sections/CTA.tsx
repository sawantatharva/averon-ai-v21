import SectionShell from "@/components/primitives/SectionShell";
import PrimaryButton from "@/components/primitives/PrimaryButton";
import { AccentGlow, LightingOrb } from "@/components/primitives/LightingEffects";

export default function CTA({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      className="text-center"
      lighting={
        <>
          <LightingOrb className="left-1/2 top-[15%] h-[1400px] w-[1100px] -translate-x-1/2 bg-white/7 blur-[220px]" />
          <AccentGlow className="bottom-[-25%] left-1/2 h-[1100px] w-[1600px] -translate-x-1/2 bg-accent/7" />
          <LightingOrb className="left-1/2 top-[-40%] h-[1000px] w-[1800px] -translate-x-1/2 bg-black/55 blur-[320px]" />
        </>
      }
    >
      <div className="container-tight relative">
        <h2 className="text-h2 mb-4 md:mb-5">Ready to scale with AI?</h2>

        <p className="text-body-lg mx-auto mb-8 max-w-2xl md:mb-10">
          Automate workflows. Increase conversions. Grow autonomously — powered by
          AI systems built around your business.
        </p>

        <PrimaryButton href="https://tally.so/r/kdaXJj" external size="lg">
          Book a Call →
        </PrimaryButton>
      </div>
    </SectionShell>
  );
}
