"use client";

import BackButton from "@/components/BackButton";
import SectionShell from "@/components/primitives/SectionShell";

export default function PrivacyPolicy() {
  return (
    <SectionShell padding="none" className="min-h-screen pb-24 pt-[calc(4rem+env(safe-area-inset-top))]">
      <div className="container-section">
        <BackButton />
      </div>

      <div className="container-narrow mt-8 md:mt-10">
        <h1 className="text-h1 mb-3">Privacy Policy</h1>
        <p className="text-body-sm mb-12">Last updated: November 10, 2025</p>

        <div className="space-y-10 font-body leading-relaxed md:space-y-12">
          <section>
            <h2 className="text-h3 mb-4">1. Introduction</h2>
            <p className="text-body">
              At Averon AI, we value your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how
              we collect, use, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">2. Information We Collect</h2>
            <ul className="text-body list-disc space-y-2 pl-5">
              <li>Contact details (name, email, phone)</li>
              <li>Business workflow information to improve automation</li>
              <li>Technical data such as browser type, device info, and cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 mb-4">3. How We Use Your Information</h2>
            <ul className="text-body list-disc space-y-2 pl-5">
              <li>To deliver AI automations and consulting services</li>
              <li>To improve workflow performance and overall user experience</li>
              <li>To communicate regarding updates, support, and insights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 mb-4">4. Data Security</h2>
            <p className="text-body">
              We implement industry-standard measures including encryption,
              access control, and secure data handling practices to protect
              your information from unauthorized access or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">5. Third-Party Services</h2>
            <p className="text-body">
              We may integrate with third-party tools and services (such as CRMs,
              automation platforms, analytics, or messaging APIs). These
              services operate under their own privacy policies, which we
              encourage you to review independently. Averon AI does not control
              or take responsibility for how these providers manage your data.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4">6. Contact Us</h2>
            <p className="text-body">
              For privacy-related questions, data removal requests, or any other
              concerns, please email us at{" "}
              <span className="text-accent">privacy@averonai.com</span>.
            </p>
          </section>
        </div>
      </div>
    </SectionShell>
  );
}
