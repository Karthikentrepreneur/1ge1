// app/about/page.tsx
import React from "react";

const aboutPoints = [
  {
    num: "1.",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered group operating in 16+ countries with 700+ professionals.",
  },
  {
    num: "2.",
    title: "What We Do",
    body:
      "Shipping, Logistics & Supply Chain, Product Distribution, Software/IT, Renewable Energy, and International Trading.",
  },
  {
    num: "3.",
    title: "How We Help",
    body:
      "Expert-led business units deliver reliable execution, innovation, and compliance across global markets.",
  },
  {
    num: "4.",
    title: "Create success story",
    body:
      "With access to technology, partnerships, and sustainable practices, we help clients scale with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-14">
        {/* Top row: heading + blurb */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            About Us
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-gray-600">
            At 1 Global Enterprises, we take pride in our values — service,
            integrity, and excellence.
          </p>
        </div>

        {/* Bottom row: Left (text + button) | Right (zig-zag images) */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT: 2×2 text points + button under text */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {aboutPoints.map((pt) => (
                <div key={pt.num}>
                  <div className="text-4xl md:text-5xl font-semibold text-gray-900">
                    {pt.num}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{pt.body}</p>
                </div>
              ))}
            </div>

            {/* Button directly below the text content */}
            <a
              href="#learn-more"
              className="inline-flex w-max items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
            >
              Learn More
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Zig-zag 2×2 image collage */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left column */}
            <div className="space-y-4">
              <img
                src="/OIP.jpg"
                alt="Global shipping"
                className="h-44 w-full rounded-lg object-cover md:h-52"
                loading="lazy"
              />
              {/* Stagger lower-left to keep diagonal rhythm */}
              <img
                src="/renew.jpg"
                alt="Renewable energy"
                className="h-44 w-full rounded-lg object-cover md:h-52 md:mt-8"
                loading="lazy"
              />
            </div>

            {/* Right column (shift the whole column down) */}
            <div className="space-y-4 md:pt-8">
              <img
                src="/OIP1.jpg"
                alt="Logistics operations"
                className="h-44 w-full rounded-lg object-cover md:h-52"
                loading="lazy"
              />
              <img
                src="/software.jpg"
                alt="Technology & IT services"
                className="h-44 w-full rounded-lg object-cover md:h-52"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
