// app/about/page.tsx
import React from "react";

const aboutPoints = [
  {
    num: "1.",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered business group with a strong presence across 16+ countries. We employ over 700 professionals who bring expertise and passion to every business vertical we operate in.",
  },
  {
    num: "2.",
    title: "What We Do",
    body:
      "Our portfolio spans Shipping, Logistics & Supply Chain, Product Distribution, Software Development & IT solutions, Renewable/Clean Energy supplies, and International Trading.",
  },
  {
    num: "3.",
    title: "How We Operate",
    body:
      "Each of our business units is managed by seasoned experts in their field, ensuring smooth operations, innovation, and successful implementation of global business plans.",
  },
  {
    num: "4.",
    title: "Our Global Footprint",
    body:
      "From Southeast Asia and the Indian Subcontinent to the Middle East, USA, and UK – our network continues to expand, building trust and delivering value worldwide.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        {/* Top Heading */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-7 text-gray-600">
              We are a diversified global enterprise driven by innovation, service,
              and excellence – transforming industries and creating sustainable growth.
            </p>
          </div>
          <a
            href="#learn-more"
            className="inline-flex w-max items-center gap-2 rounded-xl bg-[#3B82F6] px-5 py-3 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B82F6]"
          >
            Learn More
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2">
          {/* Left side: Points */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {aboutPoints.map((pt) => (
              <div key={pt.num} className="max-w-sm">
                <div className="text-5xl font-semibold tracking-tight text-gray-900">
                  {pt.num}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {pt.title}
                </h3>
                <p className="mt-2 text-gray-600">{pt.body}</p>
              </div>
            ))}
          </div>

          {/* Right side: Image collage */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-1.jpg"
                alt="Global Shipping"
                className="h-56 w-full object-cover md:h-64"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-2.jpg"
                alt="Logistics operations"
                className="h-48 w-full object-cover md:h-52"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-3.jpg"
                alt="Renewable energy"
                className="h-48 w-full object-cover md:h-52"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-4.jpg"
                alt="Technology and IT services"
                className="h-56 w-full object-cover md:h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl"
      />
    </main>
  );
}
