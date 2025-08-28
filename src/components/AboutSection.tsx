// app/about/page.tsx
import React from "react";

const aboutPoints = [
  {
    num: "1",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered business group with operations in 16+ countries and 700+ professionals worldwide.",
  },
  {
    num: "2",
    title: "What We Do",
    body:
      "Shipping, Logistics & Supply Chain, Product Distribution, Software Development & IT, Renewable/Clean Energy supplies, and International Trading.",
  },
  {
    num: "3",
    title: "How We Operate",
    body:
      "Each business unit is led by domain experts ensuring reliable execution, innovation, and compliance across global markets.",
  },
  {
    num: "4",
    title: "Our Global Footprint",
    body:
      "Serving Southeast Asia, Indian Subcontinent, Middle East, USA & UK while continuously expanding partnerships and capabilities.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* soft background accents */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-200/60 to-cyan-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-200/50 to-emerald-200/40 blur-3xl" />

      <section className="mx-auto w-full max-w-7xl px-5 py-12 md:py-16">
        {/* Heading */}
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            A diversified global enterprise driven by innovation, service, and excellence —
            transforming industries and creating sustainable growth.
          </p>
        </header>

        {/* Grid: points + images */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Points */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutPoints.map((pt) => (
              <article
                key={pt.num}
                className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
                    {pt.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{pt.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{pt.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Images (2×2) */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/OIP.jpg", alt: "Global shipping" },
              { src: "/OIP1.jpg", alt: "Logistics operations" },
              { src: "/renew.jpg", alt: "Renewable energy" },
              { src: "/software.jpg", alt: "Technology & IT services" },
            ].map((img) => (
              <figure
                key={img.src}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white/70 shadow-sm backdrop-blur"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] md:h-44"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Stats stripe (optional but nice) */}
        <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border border-gray-100 bg-white/70 p-5 text-center shadow-sm backdrop-blur sm:grid-cols-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">16+</div>
            <div className="text-xs text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">700+</div>
            <div className="text-xs text-gray-600">Employees</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-xs text-gray-600">Business Verticals</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">24×7</div>
            <div className="text-xs text-gray-600">Client Support</div>
          </div>
        </div>

        {/* CTA UNDER the content */}
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Contact Us
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
      </section>
    </main>
  );
}
