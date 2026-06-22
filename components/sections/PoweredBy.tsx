"use client";

import SectionShell from "@/components/primitives/SectionShell";
import { BottomVignette, LightingOrb } from "@/components/primitives/LightingEffects";

export default function PoweredBy({ id }: { id?: string }) {
  const logos = [
    "/images/openai.svg",
    "/images/gemini.svg",
    "/images/claude.svg",
    "/images/aws.svg",
    "/images/pplx.svg",
    "/images/zapier.svg",
    "/images/copilot.svg",
    "/images/make.svg",
  ];

  return (
    <SectionShell
      id={id}
      padding="compact"
      lighting={
        <>
          <LightingOrb className="left-1/2 top-[5%] h-[900px] w-full max-w-[900px] -translate-x-1/2 bg-accent/6 blur-[260px] lg:left-[20%] lg:w-[900px] lg:translate-x-0" />
          <BottomVignette className="bottom-[-30%] h-[800px] w-[150%] max-w-[1500px] bg-black/40 blur-[300px]" />
        </>
      }
    >
      <div className="container-section relative min-w-0">
        <p className="mb-6 text-center font-heading text-sm tracking-wide text-text-subtle sm:mb-8 sm:text-base">
          Powered by the world&apos;s leading AI Models & Automation Platforms
        </p>

        <div className="marquee-fade relative w-full overflow-hidden pt-1 sm:pt-2">
          <div
            className="animate-drift flex items-center gap-12 sm:gap-16 md:gap-20"
            style={{ width: "200%" }}
          >
            {logos.concat(logos).map((src, i) => (
              <div
                key={i}
                className="flex h-6 shrink-0 items-center justify-center sm:h-7 md:h-8 lg:h-9"
              >
                <img
                  src={src}
                  alt=""
                  className="max-h-full w-auto opacity-50 transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
