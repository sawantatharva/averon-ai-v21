"use client";

import dynamic from "next/dynamic";
import SectionShell from "@/components/primitives/SectionShell";
import PrimaryButton from "@/components/primitives/PrimaryButton";
import SecondaryButton from "@/components/primitives/SecondaryButton";
import { LightingOrb } from "@/components/primitives/LightingEffects";

const HeroCanvas = dynamic(() => import("../3d/HeroCanvas"), { ssr: false });

export default function Hero({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      padding="hero"
      lighting={
        <>
          <LightingOrb className="inset-0 bg-bg-primary" />
          <LightingOrb className="right-[-45%] top-[15%] h-[700px] w-[700px] bg-accent/14 blur-[240px] sm:right-[-35%] sm:h-[900px] sm:w-[900px] sm:blur-[300px] md:right-[-25%] md:h-[1100px] md:w-[1100px] lg:right-[-20%] lg:h-[1400px] lg:w-[1400px] lg:blur-[360px]" />
          <LightingOrb className="left-[-15%] top-[35%] h-[900px] w-[900px] bg-white/10 blur-[260px] sm:left-0 sm:h-[1200px] sm:w-[1200px] md:left-[5%] md:h-[1400px] md:w-[1400px] lg:h-[1600px] lg:w-[1600px] lg:blur-[380px]" />
          <LightingOrb className="bottom-[-55%] left-1/2 h-[800px] w-[1500px] -translate-x-1/2 bg-black/50 blur-[280px] md:bottom-[-40%] md:h-[1200px] md:w-[2000px] md:blur-[380px]" />
        </>
      }
    >
      <div className="container-section relative z-10 grid w-full min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 w-full max-w-[620px]">
          <p className="text-eyebrow mb-3 sm:mb-4">
            Built Around Your Workflow
          </p>

          <h1 className="text-h1">
            AI That Works the Way <br />
            <span className="text-accent-light">Your Business Works</span>
          </h1>

          <p className="text-body-lg mt-5 sm:mt-6">
            We build personalised AI workflows, assistants, and automation
            systems that integrate directly into your tools — reducing manual
            work and helping your business operate up to 10× faster.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <PrimaryButton href="https://tally.so/r/kdaXJj" external className="w-full sm:w-auto">
              Book a Call →
            </PrimaryButton>
            <SecondaryButton href="https://wa.me/918454842028" external className="w-full sm:w-auto">
              Connect on WhatsApp →
            </SecondaryButton>
          </div>
        </div>

        <div className="relative mx-auto h-[260px] w-full max-w-[620px] sm:h-80 md:h-[420px] lg:h-[460px] xl:h-[560px]">
          <HeroCanvas />
        </div>
      </div>
    </SectionShell>
  );
}
