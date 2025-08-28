// app/about/page.tsx
import React from "react";

/** === Brand Colors (from your logo) === */
const BRAND = {
  teal: "#16c1a7",
  aqua: "#22d3ee",
  blue: "#3b82f6",
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
    <main className="relative">
      {/* Section background color/gradient */}
      <section
        className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16 rounded-3xl"
        style={{
          background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.blue} 100%)`,
        }}
      >
        {/* Heading */}
        <div className="max-w-2xl">
          <h1
            className="text-4xl font-semibold tracking-tight md:text-5xl text-white"
          >
            About Us
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-white/80">
            At 1 Global Enterprises, we take pride in our values — service,
            integrity, and excellence.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-white/30" />

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT: points + CTA */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {aboutPoints.map((pt) => (
                <div
                  key={pt.num}
                  className="group relative rounded-2xl bg-white/10 backdrop-blur-sm p-5 shadow-sm ring-1 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  {/* Number badge */}
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                      }}
                    >
                      {pt.num}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {pt.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {pt.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#learn-more"
              className="inline-flex w-max items-center gap-2 rounded-xl px-6 py-3 text-white shadow transition hover:-translate-y-0.5 active:translate-y-0"
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

          {/* RIGHT: Collage directly on section background */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <Tile src="/logistics.png" alt="Global Shipping" aspect="aspect-[4/3]" />
            <Tile src="/biodiesel.png" alt="Biodiesel" aspect="aspect-[4/3]" />

            <Tile
              src="/software.jpg"
              alt="Technology & IT"
              aspect="aspect-[4/3]"
              className="md:mt-2"
            />
            <Tile
              src="/logistics1.png"
              alt="Warehousing"
              aspect="aspect-[4/3]"
              className="md:-mt-2"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/** Single image tile */
function Tile({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <div className={`w-full ${aspect}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      {/* Soft border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30" />
    </figure>
  );
}
