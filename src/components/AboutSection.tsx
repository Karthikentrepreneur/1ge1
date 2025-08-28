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
      {/* Ambient brand background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            `radial-gradient(900px 600px at 12% 8%, ${BRAND.teal}18, transparent 60%),
             radial-gradient(900px 600px at 88% 20%, ${BRAND.blue}15, transparent 60%)`,
        }}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        {/* Heading */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl" style={{ color: BRAND.slate900 }}>
            About Us
          </h1>
          <p className="mt-3 text-[15px] leading-7" style={{ color: BRAND.slate600 }}>
            At 1 Global Enterprises, we take pride in our values — service, integrity, and excellence.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT: points + CTA */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {aboutPoints.map((pt) => (
                <div
                  key={pt.num}
                  className="group relative rounded-2xl bg-white p-5 shadow-sm ring-1 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ ringColor: BRAND.slate200 }}
                >
                  {/* Number badge (smaller, brand gradient) */}
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
                    >
                      {pt.num}
                    </span>
                    <h3 className="text-lg font-semibold" style={{ color: BRAND.slate900 }}>
                      {pt.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6" style={{ color: BRAND.slate600 }}>
                    {pt.body}
                  </p>

                  {/* subtle glow */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `radial-gradient(360px 180px at 20% 0%, ${BRAND.aqua}24, transparent 70%)` }}
                  />
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#learn-more"
              className="inline-flex w-max items-center gap-2 rounded-xl px-6 py-3 text-white shadow transition hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
            >
              Learn More
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Collage with brand gradient background (no plain white) */}
          <BrandCollage />
        </div>
      </section>
    </main>
  );
}

/** ===== Collage Component (brand gradient background) ===== */
function BrandCollage() {
  return (
    <div
      className="relative rounded-3xl p-4 md:p-5"
      style={{
        background: ``,
      }}
    >
      {/* optional faint logo watermark in corner */}
      <img
        src="/globallogo.png" // put your logo in /public
        alt=""
        className="pointer-events-none absolute right-4 top-4 h-8 opacity-15 md:h-10"
      />

      {/* Grid collage (no white background) */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <Tile src="/logistics.png" alt="Global Shipping" aspect="aspect-[4/3] object-fill" />
        <Tile src="/biodiesel.png" alt="Biodiesel" aspect="aspect-[4/3] object-fill" />

        {/* Two stacked on right for a zig-zag rhythm */}
        <Tile src="/software.jpg" alt="Technology & IT" aspect="aspect-[4/3]" className="md:mt-2 object-fill" />
        <Tile src="/logistics1.png" alt="Warehousing" aspect="aspect-[4/3]" className="md:-mt-2 object-fill" />
      </div>

      {/* soft inner ring to separate images from background */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
      {/* ambient shine */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-white/0" />
    </div>
  );
}

/** Single image tile with hover zoom + subtle border */
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
    <figure className={`relative overflow-hidden rounded-2xl shadow-md ${className}`}>
      <div className={`w-full ${aspect}`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      {/* thin white border so tiles pop on the gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />
    </figure>
  );
}
