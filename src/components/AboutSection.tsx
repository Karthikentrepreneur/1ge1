// app/about/page.tsx
import React from "react";

const BRAND = {
  offwhite: "#f9f8f4",   // page background (like screenshot)
  black: "#0b0b0b",
  gray700: "#334155",
  teal: "#04ADCE",       // from your previous gradient
  blue: "#009DD9",       // from your previous gradient
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: BRAND.offwhite }}>
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          {/* LEFT: Large image with credit bar */}
          <div className="md:col-span-6">
            <figure className="relative overflow-hidden rounded-[10px] shadow">
              <img
                src="/logistics2.png" // replace with your image
                alt="About 1 Global Enterprises"
                className="block h-auto w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3 text-[12px] leading-5 text-white">
                Image courtesy of 1 Global Enterprises. © 2025 All rights reserved.
              </figcaption>
            </figure>
          </div>

          {/* RIGHT: Headline, body, CTA */}
          <div className="md:col-span-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: BRAND.black }}>
              About 1 Global: Building growth and prosperity
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7" style={{ color: BRAND.gray700 }}>
              We’re a Singapore-headquartered group operating across renewable energy, logistics & supply chain,
              product distribution, software/IT, and international trading. Our focus is simple: expand access,
              drive innovation, and create durable value for clients and communities.
            </p>

            {/* CTA (black button, brand-gradient chevron) */}
            <a
              href="/insights"
              className="mt-8 inline-flex items-center gap-3 rounded-[6px] bg-black px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-900 transition"
            >
              <span
                aria-hidden
                className="inline-flex h-6 w-6 items-center justify-center rounded-[4px] text-white"
                style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
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

            {/* Optional tiny accent underline (brand gradient) */}
            <div
              className="mt-6 h-[3px] w-12 rounded"
              style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
