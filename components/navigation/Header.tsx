"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SecondaryButton from "@/components/primitives/SecondaryButton";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "About Us", href: "#about" },
  { name: "Difference", href: "#difference" },
  { name: "How it Works", href: "#howitworks" },
  { name: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-header animate-fade-down bg-transparent pt-[env(safe-area-inset-top)]">
        <div className="container-section flex items-center justify-between py-3 sm:py-4 md:py-5 lg:py-6">
          <Link
            href="/#hero"
            className="focus-ring shrink-0 rounded-md transition-transform duration-300 hover:scale-105"
            aria-label="Averon AI — Home"
          >
            <img
              src="/logo.svg"
              alt="Averon AI"
              className="h-8 w-auto animate-scale-in sm:h-9 md:h-10 lg:h-11"
            />
          </Link>

          <nav className="hidden animate-fade-in items-center gap-5 rounded-full border border-white/20 bg-white/10 px-7 py-3 shadow-[var(--shadow-nav)] backdrop-blur-2xl xl:flex 2xl:gap-7 2xl:px-9 2xl:py-3.5">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item focus-ring animate-fade-up rounded-sm opacity-0 transition-transform duration-300 hover:scale-[1.05]"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <SecondaryButton
            href="https://tally.so/r/kdaXJj"
            external
            variant="glass"
            className="hidden animate-fade-up opacity-0 xl:inline-flex"
            style={{ animationDelay: "0.5s" } as React.CSSProperties}
          >
            Book a Call →
          </SecondaryButton>

          <button
            onClick={() => setOpen(true)}
            className="touch-target flex animate-scale-in items-center justify-center rounded-xl glass-surface glass-surface-hover text-lg text-white transition active:scale-95 xl:hidden"
            style={{ animationDelay: "0.6s" }}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-overlay bg-black/70 backdrop-blur-xl transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed left-0 top-0 z-drawer flex w-full flex-col gap-5 border-b border-white/10 bg-black/90 px-5 pb-8 pt-[calc(5rem+env(safe-area-inset-top))] backdrop-blur-2xl transition-transform duration-300 sm:gap-6 sm:px-7 sm:pb-10 sm:pt-[calc(6rem+env(safe-area-inset-top))] md:px-10 md:pb-12 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="touch-target absolute right-5 top-[calc(1.25rem+env(safe-area-inset-top))] flex items-center justify-center rounded-xl glass-surface glass-surface-hover text-xl text-white transition active:scale-95 sm:right-7"
          aria-label="Close menu"
        >
          ✕
        </button>

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="focus-ring flex min-h-11 items-center border-b border-white/10 py-2 font-body text-base text-text-subtle transition duration-300 hover:translate-x-1 hover:text-white sm:py-2.5 sm:text-lg md:text-xl"
          >
            {item.name}
          </a>
        ))}

        <SecondaryButton
          href="https://tally.so/r/kdaXJj"
          external
          variant="glass"
          className="mt-4 w-full justify-center sm:mt-6"
        >
          Book a Call →
        </SecondaryButton>
      </aside>
    </>
  );
}
