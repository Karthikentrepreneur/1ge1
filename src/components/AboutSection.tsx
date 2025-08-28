// app/about/page.tsx  (or components/AboutUsPage.tsx)
import React from "react";

const aboutPoints = [
  {
    num: "1.",
    title: "Who We Are",
    body:
      "You get a 2-week free trial to kick the Smarty tries. We want you to.",
  },
  {
    num: "2.",
    title: "What Do We Do",
    body:
      "We give you a free course that guides you through the process.",
  },
  {
    num: "3.",
    title: "How Do We Help",
    body:
      "Use our multimedia lectures, videos, and coaching sessions.",
  },
  {
    num: "4.",
    title: "Create success story",
    body:
      "With access to online learning resources anyone can transform.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Container */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24">
        {/* Top row: heading, blurb, CTA */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-7 text-gray-600">
              At Basnik Consultancy, we take pride in our values – service, integrity, and
              excellence.
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

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2">
          {/* Left: numbered points (2×2) */}
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

          {/* Right: 2×2 image collage */}
          <div className="grid grid-cols-2 gap-6">
            {/* Top-left (wide) */}
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-1.jpg" // replace with your image
                alt="Interior scene 1"
                className="h-56 w-full object-cover md:h-64"
                loading="lazy"
              />
            </div>

            {/* Top-right small */}
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-2.jpg"
                alt="Interior scene 2"
                className="h-48 w-full object-cover md:h-52"
                loading="lazy"
              />
            </div>

            {/* Bottom-left small */}
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-3.jpg"
                alt="Interior scene 3"
                className="h-48 w-full object-cover md:h-52"
                loading="lazy"
              />
            </div>

            {/* Bottom row (full width) */}
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/about-4.jpg"
                alt="Interior scene 4"
                className="h-56 w-full object-cover md:h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* subtle background accents */}
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
