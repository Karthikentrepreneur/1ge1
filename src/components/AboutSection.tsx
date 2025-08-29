// app/about/page.tsx
import React from "react";

/** Brand colors (logo accents) */
const BRAND = {
  teal: "#04ADCE",
  blue: "#009DD9",
  slate900: "#0f172a",
  slate600: "#475569",
  slate200: "#e2e8f0",
};

const aboutPoints = [
  {
    num: "1",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered group operating in 16+ countries with 700+ professionals.",
  },
  {
    num: "2",
    title: "What We Do",
    body:
      "Shipping, Logistics & Supply Chain, Product Distribution, Software/IT, Renewable Energy, and International Trading.",
  },
  {
    num: "3",
    title: "How We Help",
    body:
      "Expert-led business units deliver reliable execution, innovation, and compliance across global markets.",
  },
  {
    num: "4",
    title: "Create success story",
    body:
      "With access to technology, partnerships, and sustainable practices, we help clients scale with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-semibold tracking-tight md:text-5xl"
            style={{ color: BRAND.slate900 }}
          >
            About Us
          </h1>
          <p
            className="mt-3 text-[15px] leading-7"
            style={{ color: BRAND.slate600 }}
          >
            At 1 Global Enterprises, we take pride in our values — service,
            integrity, and excellence.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-gray-200" />

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          {/* LEFT: points + CTA */}
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {aboutPoints.map((pt) => (
                <div
                  key={pt.num}
                  className="relative rounded-2xl bg-white p-5 shadow-sm ring-1 hover:shadow-md transition"
                  style={{ ringColor: BRAND.slate200 }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                      }}
                    >
                      {pt.num}
                    </span>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: BRAND.slate900 }}
                    >
                      {pt.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: BRAND.slate600 }}
                  >
                    {pt.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#learn-more"
              className="mt-8 inline-flex w-max items-center gap-2 rounded-xl px-6 py-3 text-white shadow transition hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
              }}
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

          {/* RIGHT: single image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/about-image.jpg" // Replace with your image (e.g. logistics/office/team photo)
              alt="About 1 Global Enterprises"
              className="w-full max-w-md rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
