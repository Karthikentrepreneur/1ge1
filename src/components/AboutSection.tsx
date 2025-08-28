// app/about/page.tsx
import React from "react";

const aboutPoints = [
  {
    num: "1.",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered business group with operations in 16+ countries and 700+ professionals worldwide.",
  },
  {
    num: "2.",
    title: "What We Do",
    body:
      "Our portfolio spans Shipping, Logistics & Supply Chain, Product Distribution, Software Development & IT solutions, Renewable Energy and International Trading.",
  },
  {
    num: "3.",
    title: "How We Operate",
    body:
      "Each business unit is managed by seasoned experts, ensuring smooth operations, innovation, and successful global implementation.",
  },
  {
    num: "4.",
    title: "Our Global Footprint",
    body:
      "From Southeast Asia and the Indian Subcontinent to the Middle East, USA, and UK – our network continues to expand and deliver value worldwide.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            About Us
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-base leading-6 text-gray-600">
            A diversified global enterprise driven by innovation, service, and excellence – transforming industries and creating sustainable growth.
          </p>
        </div>

        {/* Points (stacked vertically) */}
        <div className="mt-6 flex flex-col gap-4">
          {aboutPoints.map((pt) => (
            <div key={pt.num} className="flex items-start gap-4">
              <div className="text-2xl font-bold text-blue-600">{pt.num}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {pt.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{pt.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image row (horizontal on desktop, stacked on mobile) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <img
            src="/about-1.jpg"
            alt="Global shipping"
            className="h-40 w-full object-cover rounded-xl shadow-sm"
          />
          <img
            src="/about-2.jpg"
            alt="Logistics operations"
            className="h-40 w-full object-cover rounded-xl shadow-sm"
          />
          <img
            src="/about-3.jpg"
            alt="Renewable energy"
            className="h-40 w-full object-cover rounded-xl shadow-sm"
          />
          <img
            src="/about-4.jpg"
            alt="Technology and IT services"
            className="h-40 w-full object-cover rounded-xl shadow-sm"
          />
        </div>
      </section>

      {/* Subtle background accents (optional) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl"
      />
    </main>
  );
}
