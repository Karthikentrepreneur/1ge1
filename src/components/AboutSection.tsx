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
    title: "Our Footprint",
    body:
      "Serving Southeast Asia, Indian Subcontinent, Middle East, USA & UK—expanding partnerships and capabilities.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-14">
        {/* TOP ROW: heading (left) + button (right) */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              About Us
            </h1>
            <p className="mt-3 text-[15px] leading-7 text-gray-600">
              A diversified global enterprise driven by innovation, service, and excellence —
              transforming industries and creating sustainable growth.
            </p>
          </div>

          <a
            href="#learn-more"
            className="inline-flex w-max items-center gap-2 self-start rounded-lg bg-blue-500 px-5 py-3 text-white shadow hover:bg-blue-600 transition sm:self-auto"
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

        {/* BOTTOM GRID: left (points) + right (images) */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT: 2×2 text points */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {aboutPoints.map((pt) => (
              <div key={pt.num}>
                <div className="text-4xl md:text-5xl font-semibold text-gray-900">{pt.num}</div>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{pt.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{pt.body}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: 2×2 image collage (use your files in /public) */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/OIP.jpg"        // replace with your image
              alt="Global shipping"
              className="h-40 w-full rounded-lg object-cover md:h-44"
              loading="lazy"
            />
            <img
              src="/OIP1.jpg"
              alt="Logistics operations"
              className="h-40 w-full rounded-lg object-cover md:h-44"
              loading="lazy"
            />
            <img
              src="/renew.jpg"
              alt="Renewable energy"
              className="h-40 w-full rounded-lg object-cover md:h-44"
              loading="lazy"
            />
            <img
              src="/software.jpg"
              alt="Technology & IT"
              className="h-40 w-full rounded-lg object-cover md:h-44"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
