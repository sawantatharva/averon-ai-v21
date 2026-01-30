"use client";

import dynamic from "next/dynamic";
const HeroCanvas = dynamic(() => import("../3d/HeroCanvas"), { ssr: false });

export default function Hero({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="
        relative w-full min-h-screen bg-[#05070A]
        flex items-center 
        px-5 sm:px-8 md:px-12 lg:px-14 xl:px-20       /* ✅ FIXED */
        pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-40 
        pb-20 sm:pb-24 md:pb-28 lg:pb-32
        overflow-hidden
      "
    >
      {/* Base Layer */}
      <div className="absolute inset-0 bg-[#05070A]" />

      {/* Blue Glow */}
      <div
        className="
          pointer-events-none absolute
          right-[-45%] sm:right-[-35%] md:right-[-25%] lg:right-[-20%]
          top-[15%]
          w-[700px] sm:w-[900px] md:w-[1100px] lg:w-[1400px]
          h-[700px] sm:h-[900px] md:h-[1100px] lg:h-[1400px]
          bg-[#4DA3FF]/14 blur-[240px] sm:blur-[300px] lg:blur-[360px]
        "
      />

      {/* White Glow */}
      <div
        className="
          pointer-events-none absolute 
          left-[-15%] sm:left-[0%] md:left-[5%]
          top-[35%]
          w-[900px] sm:w-[1200px] md:w-[1400px] lg:w-[1600px]
          h-[900px] sm:h-[1200px] md:h-[1400px] lg:h-[1600px]
          bg-white/10 blur-[260px] sm:blur-[320px] lg:blur-[380px]
        "
      />

      {/* Bottom Vignette */}
      <div
        className="
          pointer-events-none absolute
          bottom-[-55%] md:bottom-[-40%]
          left-1/2 -translate-x-1/2
          w-[1500px] md:w-[2000px]
          h-[800px] md:h-[1200px]
          bg-black/50 blur-[280px] md:blur-[380px]
        "
      />

      {/* Main Content */}
      <div
        className="
          relative z-10 w-full max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2 
          gap-12 sm:gap-14 lg:gap-16
          items-center
        "
      >
        {/* LEFT - TEXT BLOCK */}
        <div className="max-w-[620px]">
          {/* Pre-Headline */}
          <p
            className="
              font-body text-[#4DA3FF]
              text-xs sm:text-sm
              tracking-[0.18em] uppercase
              mb-3 sm:mb-4
            "
          >
            Built Around Your Workflow
          </p>

          {/* Main Headline */}
          <h1
            className="
              font-heading 
              text-[32px] sm:text-[38px] md:text-[50px] 
              lg:text-[52px] xl:text-[60px]      /* ✅ FIXED */
              leading-[1.15] sm:leading-[1.1] md:leading-[1.08] lg:leading-[1.05]
              tracking-tight text-white
            "
          >
            AI That Works the Way <br />
            <span className="text-[#66B8FF]">Your Business Works</span>
          </h1>

          {/* Description */}
          <p
            className="
              font-body text-gray-300
              mt-5 sm:mt-6
              text-[15px] sm:text-[16px] md:text-[17px]
              leading-relaxed
            "
          >
            We build personalised AI workflows, assistants, and automation
            systems that integrate directly into your tools — reducing manual
            work and helping your business operate up to 10× faster.
          </p>

          {/* CTAs */}
          <div
            className="
              mt-8 sm:mt-10 
              flex flex-col sm:flex-row 
              gap-4 sm:gap-5
            "
          >
            <a
              href="https://tally.so/r/kdaXJj"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-body px-7 sm:px-8 py-3.5 rounded-full
                bg-white text-black font-medium
                text-sm sm:text-base
                shadow-[0_0_25px_rgba(255,255,255,0.18)]
                hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                hover:scale-[1.04] transition-all
              "
            >
              Book a Call →
            </a>

            <a
              href="https://wa.me/918454842028"
              className="
                font-body px-7 sm:px-8 py-3.5 rounded-full
                border border-white/20 text-white font-medium
                text-sm sm:text-base
                hover:bg-white/10 hover:scale-[1.04] transition-all
              "
            >
              Connect on WhatsApp →
            </a>
          </div>
        </div>

        {/* RIGHT - 3D CANVAS */}
        <div
          className="
            relative w-full
            h-[260px] sm:h-80 md:h-[420px] 
            lg:h-[460px] xl:h-[560px]          /* ✅ FIXED */
            max-w-[620px] mx-auto
          "
        >
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}
