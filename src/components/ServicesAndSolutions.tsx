// app/about/page.tsx
import React from "react";

const THEME = {
  offwhite: "#f9f8f4",
  black: "#0b0b0b",
  gray700: "#334155",
  orange: "#ff5a1f",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: THEME.offwhite }}>
      <section className="mx-auto w-full max-w-7xl px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          {/* LEFT: Image (no courtesy text) */}
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-[10px] shadow-sm">
              <img
                src="/about-hero.jpg"
                alt="About 1 Global Enterprises"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Headline, body, CTA (compact spacing) */}
          <div className="md:col-span-6">
            <h1
              className="text-[28px] sm:text-[32px] font-extrabold leading-tight"
              style={{ color: THEME.black }}
            >
              About 1 Global: Building growth and prosperity
            </h1>

            <p
              className="mt-3 max-w-2xl text-[15px] leading-7"
              style={{ color: THEME.gray700 }}
            >
              We’re a Singapore-headquartered group operating across renewable
              energy, logistics & supply chain, product distribution, software/IT,
              and international trading. Our focus is simple: expand access, drive
              innovation, and create durable value for clients and communities.
            </p>

            <a
              href="/insights"
              className="mt-5 inline-flex items-center gap-2.5 rounded-[6px] bg-black px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-gray-900 transition"
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-[4px]"
                style={{ backgroundColor: THEME.orange }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 5l8 7-8 7" />
                </svg>
              </span>
              Read our story
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
