"use client";

import { useRouter } from "next/navigation";
import SecondaryButton from "@/components/primitives/SecondaryButton";

export default function BackButton() {
  const router = useRouter();

  return (
    <SecondaryButton
      variant="glass"
      className="hover:text-accent"
      onClick={() => router.back()}
    >
      <svg
        className="h-4 w-4 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back
    </SecondaryButton>
  );
}
