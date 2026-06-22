import Link from "next/link";
import SectionShell from "@/components/primitives/SectionShell";
import { BottomVignette } from "@/components/primitives/LightingEffects";

const phones = ["+91-9987710419", "+91-9930991902", "+91-9768416446"];

export default function Footer({ id }: { id?: string }) {
  return (
    <SectionShell
      id={id}
      as="footer"
      padding="none"
      className="border-t border-white/10 py-16 md:py-20"
      lighting={<BottomVignette className="inset-0 bottom-[-30%] h-[900px] w-[1600px] bg-black/55 blur-[320px]" />}
    >
      <div className="container-section relative min-w-0">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/#hero"
            className="focus-ring inline-block w-fit shrink-0 rounded-md transition-transform duration-300 hover:scale-105"
            aria-label="Averon AI — Home"
          >
            <img src="/logo.svg" alt="Averon AI" className="h-10 w-auto" />
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-text-muted sm:text-base">
            <a
              href="/privacy-policy"
              className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="my-8 h-px bg-white/10 md:my-10" />

        <div className="mb-8 flex flex-col gap-5 font-body text-sm text-text-subtle md:mb-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
            {phones.map((phone) => (
              <div key={phone} className="flex items-center gap-2">
                <PhoneIcon />
                <a href={`tel:${phone.replace(/-/g, "")}`} className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white">
                  {phone}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-2">
              <EmailIcon />
              <a href="mailto:hello@averonai.com" className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white">
                hello@averonai.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <WhatsAppIcon />
              <a
                href="https://wa.me/918454842028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
              >
                +91-8454842028
              </a>
            </div>
          </div>
        </div>

        <p className="font-body text-sm text-text-muted">
          © {new Date().getFullYear()} Averon AI. All rights reserved.
        </p>
      </div>
    </SectionShell>
  );
}

const iconClass =
  "h-4 w-4 shrink-0 text-accent transition duration-300";

function PhoneIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C9.7 22.3 1.7 14.3 1.7 4.3 1.7 3.6 2.3 3 3 3h3.5c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.6 3.1.1.4 0 .9-.3 1.2L6.6 10.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.647.87 5.096 2.337 7.087L4 29l7.153-2.274a11.93 11.93 0 0 0 4.85 1.027h.003C22.627 27.753 28 22.37 28 15.75 28 9.13 22.627 3 16.003 3zm6.547 17.654c-.277.777-1.61 1.494-2.217 1.57-.566.07-1.285.1-2.076-.13-.478-.14-1.09-.356-1.88-.69-3.312-1.433-5.477-4.87-5.64-5.093-.163-.224-1.345-1.787-1.345-3.41 0-1.623.85-2.42 1.15-2.75.3-.33.653-.412.87-.412.216 0 .435.002.626.01.2.01.47-.076.74.565.277.666.94 2.303 1.024 2.47.085.17.14.366.03.59-.11.225-.166.365-.327.56-.164.194-.346.434-.494.583-.164.165-.335.344-.144.674.19.33.85 1.4 1.82 2.27 1.25 1.115 2.3 1.46 2.63 1.62.33.165.52.14.714-.084.194-.225.82-.96 1.04-1.29.216-.33.44-.276.74-.166.3.11 1.9.9 2.22 1.06.32.16.535.245.615.385.084.14.084.82-.194 1.6z" />
    </svg>
  );
}
