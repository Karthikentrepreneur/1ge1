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
  { num: "1", title: "Who We Are",
    body: "1 Global Enterprises Pte Ltd is a Singapore-headquartered group operating in 16+ countries with 700+ professionals." },
  { num: "2", title: "What We Do",
    body: "Shipping, Logistics & Supply Chain, Product Distribution, Software/IT, Renewable Energy, and International Trading." },
  { num: "3", title: "How We Help",
    body: "Expert-led business units deliver reliable execution, innovation, and compliance across global markets." },
  { num: "4", title: "Create success story",
    body: "With access to technology, partnerships, and sustainable practices, we help clients scale with confidence." },
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

          {/* RIGHT: Premium mosaic collage (no white box) */}
          <BrandMosaic />
        </div>
      </section>
    </main>
  );
}

/** ===== Premium Mosaic Collage =====
 *  - 3 columns on md+ with row/col spans
 *  - Strong hero image + stacked tiles + wide banner
 *  - Brand-tinted overlays, saturation/contrast boost, nice shadows
 */
function BrandMosaic() {
  return (
    <div className="relative">
      {/* Decorative brand glows behind the mosaic */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 blur-2xl opacity-40"
        style={{
          background: `radial-gradient(500px 300px at 10% 20%, ${BRAND.teal}33, transparent 60%),
                       radial-gradient(500px 300px at 90% 70%, ${BRAND.blue}33, transparent 60%)`,
        }}
      />

      <div className="grid gap-4 md:grid-cols-3 [grid-auto-rows:140px] md:[grid-auto-rows:160px]">
        {/* Hero (big) */}
        <Tile
          src="/logistics.png"
          alt="Global Shipping"
          className="md:col-span-2 md:row-span-2"
        />

        {/* Stacked right-side */}
        <Tile src="/biodiesel.png" alt="Biodiesel" />
        <Tile src="/software.jpg" alt="Technology & IT" />

        {/* Wide banner bottom */}
        <Tile
          src="/logistics1.png"
          alt="Warehousing"
          className="md:col-span-3"
          tall={false}
        />
      </div>
    </div>
  );
}

/** Single image tile with brand overlay + enhanced look */
function Tile({
  src,
  alt,
  className = "",
  tall = true,
}: {
  src: string;
  alt: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <figure
      className={[
        "group relative overflow-hidden rounded-2xl shadow-xl",
        "ring-1 ring-white/30",
        className,
      ].join(" ")}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={[
          "h-full w-full object-cover",
          // enhance: a touch more contrast & saturation so photos pop
          "brightness-[0.98] contrast-[1.08] saturate-[1.15]",
          // motion
          "transition-transform duration-700 will-change-transform group-hover:scale-[1.04]",
        ].join(" ")}
        loading="lazy"
      />

      {/* Brand-tinted overlay for richness + legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            `linear-gradient(20deg, rgba(0,0,0,0.20), transparent 40%),
             radial-gradient(400px 200px at 80% 10%, ${BRAND.teal}22, transparent 70%)`,
        }}
      />

      {/* Soft top glossy edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />
      {/* Subtle drop shadow rim to sit on background */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </figure>
  );
}
