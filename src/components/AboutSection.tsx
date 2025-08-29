// app/feature/page.tsx
import React from "react";

const BRAND = {
  teal: "#04ADCE",
  blue: "#009DD9",
  offwhite: "#f9f8f4", // light beige background
  slate900: "#0f172a",
  slate700: "#334155",
};

export default function FeaturePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: BRAND.offwhite }}>
      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 items-center">
          {/* LEFT: Image */}
          <div className="md:col-span-5">
            <figure className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="/leader.jpg" // replace with your image
                alt="Leadership"
                className="w-full h-auto object-cover"
              />
              {/* Caption / credits bar */}
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2 text-[12px] text-white">
                Image courtesy of Your Company © 2025
              </figcaption>
            </figure>
          </div>

          {/* RIGHT: Text content */}
          <div className="md:col-span-7">
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: BRAND.slate900 }}
            >
              Our Vision for Growth and Prosperity
            </h2>

            <p className="mt-4 text-[15px] leading-7" style={{ color: BRAND.slate700 }}>
              In our 2025 leadership message, we share how innovation, partnerships,
              and sustainable practices can reshape industries and expand opportunities
              to build a more prosperous future for more people.
            </p>

            {/* CTA */}
            <a
              href="#vision-letter"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-white text-sm font-semibold shadow hover:bg-gray-900 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5l8 7-8 7" />
              </svg>
              Read Our Vision Letter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
