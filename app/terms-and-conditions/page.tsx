"use client";

import BackButton from "@/components/BackButton";
import SectionShell from "@/components/primitives/SectionShell";

export default function TermsAndConditions() {
  return (
    <SectionShell padding="none" className="min-h-screen pb-24 pt-[calc(4rem+env(safe-area-inset-top))]">
      <div className="container-section">
        <BackButton />
      </div>

      <div className="container-narrow mt-8 md:mt-10">
        <h1 className="text-h1 mb-3">Terms & Conditions</h1>
        <p className="text-body-sm mb-12">Last updated: November 10, 2025</p>

        <div className="space-y-10 font-body leading-relaxed md:space-y-12">
          <section>
            <h2 className="text-h3 mb-4">1. Agreement</h2>
            <p className="text-body">
              By accessing or using Averon AI services, you agree to these
              Terms & Conditions. If you disagree with any part, please
              discontinue usage of our services.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">2. Services</h2>
            <p className="text-body">
              Averon AI provides workflow automation, AI assistant development,
              integrations, and consulting. Specific deliverables vary based
              on the agreed proposal or project scope.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">3. Payment & Billing</h2>
            <ul className="text-body list-disc space-y-2 pl-5">
              <li>Payments are due as per the mutually agreed proposal</li>
              <li>Delays in payment may pause or delay service delivery</li>
              <li>Fees are non-refundable unless explicitly stated otherwise</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 mb-4">4. Client Responsibilities</h2>
            <ul className="text-body list-disc space-y-2 pl-5">
              <li>Provide accurate workflow and process information</li>
              <li>Grant required access to systems and tools for integration</li>
              <li>Maintain security of credentials shared with Averon AI</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 mb-4">5. Intellectual Property</h2>
            <p className="text-body">
              Averon AI retains ownership of underlying architectures,
              proprietary templates, and AI logic used to build your systems.
              However, custom workflow configurations and business logic built
              specifically for you belong to the client.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">6. Limitation of Liability</h2>
            <p className="text-body">
              Averon AI is not liable for indirect, incidental, or
              consequential damages arising from system usage, integrations,
              downtime, or third-party services. Use of our services is at
              your own discretion and responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">7. Contact</h2>
            <p className="text-body">
              For legal or contractual questions, contact us at{" "}
              <span className="text-accent">legal@averonai.com</span>.
            </p>
          </section>
        </div>
      </div>
    </SectionShell>
  );
}
