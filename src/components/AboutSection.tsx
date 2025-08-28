// app/about/page.tsx
import React from "react";

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
      {/* Soft gradient backdrop + top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 500px at 10% 10%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(900px 600px at 90% 20%, rgba(56,189,248,0.10), transparent 60%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-black/5 to-transparent" />

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            About Us
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-slate-600">
            At 1 Global Enterprises, we take pride in our values — service,
            integrity, and excellence.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT: points + button */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {aboutPoints.map((pt) => (
                <div
                  key={pt.num}
                  className="group relative rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Number badge (smaller, elegant) */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-sm">
                      {pt.num}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {pt.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {pt.body}
                  </p>

                  {/* Subtle glow on hover */}
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                       style={{ background: "radial-gradient(400px 200px at 20% 0%, rgba(56,189,248,0.15), transparent 70%)" }} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#learn-more"
              className="inline-flex w-max items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0"
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

          {/* RIGHT: Zig-zag collage with depth + hover zoom */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left column */}
            <div className="space-y-4">
              <Tile src="/logistics.png" alt="Global shipping" />
              <Tile
                src="/logistics1.png"
                alt="Renewable energy"
                className="md:mt-8"
              />
            </div>

            {/* Right column (shift down) */}
            <div className="space-y-4 md:pt-8">
              <Tile src="/biodiesel.png" alt="Logistics operations" />
              <Tile src="/software.jpg" alt="Technology & IT services" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Image Tile with subtle hover zoom, overlay & soft border */
function Tile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure
      className={
        "group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/40 shadow-sm " +
        className
      }
    >
      <img
        src={src}
        alt={alt}
        className="h-44 w-full object-cover transition-transform duration-500 will-change-transform md:h-52 group-hover:scale-[1.03]"
        loading="lazy"
      />
      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
      {/* Edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </figure>
  );
}
