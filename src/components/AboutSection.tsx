// app/about/page.tsx
import React from "react";

/** === Brand Colors (from your logo / previous gradient) === */
const BRAND = {
  teal: "#04ADCE",
  blue: "#009DD9",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate300: "#cbd5e1",
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
    <main className="relative bg-white">
      {/* Ambient brand background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(900px 600px at 12% 8%, ${BRAND.teal}18, transparent 60%),
            radial-gradient(900px 600px at 88% 20%, ${BRAND.blue}15, transparent 60%)
          `,
        }}
      />

      {/* ===== Hero ===== */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-14 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold tracking-[0.08em]" style={{ color: BRAND.slate700 }}>
              ABOUT 1 GLOBAL ENTERPRISES
            </p>
            <h1
              className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
              style={{ color: BRAND.slate900 }}
            >
              Building a smarter, cleaner, and more connected world.
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7" style={{ color: BRAND.slate600 }}>
              We operate across renewable energy, food technology, supply chain solutions, software, and
              lubricants — transforming strategy into execution and uncertainty into opportunity.
            </p>
          </div>

          {/* Right promo panel */}
          <aside className="md:col-span-4">
            <div className="rounded-2xl bg-black px-6 py-7 text-white shadow-sm">
              <h3 className="text-xl font-semibold leading-snug">
                Explore our capabilities & leadership approach.
              </h3>
              <a
                href="/insights"
                className="mt-5 inline-flex items-center gap-3 text-[15px] font-semibold"
              >
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] text-black"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 5l8 7-8 7" />
                  </svg>
                </span>
                Learn more in Insights
              </a>
            </div>
          </aside>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent" />
      </section>

      {/* ===== Key Stats ===== */}
      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat k="16+" v="Countries" />
          <Stat k="700+" v="Professionals" />
          <Stat k="6" v="Core Verticals" />
          <Stat k="2008" v="Founding year" />
        </div>
      </section>

      {/* ===== About Points + Mosaic ===== */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT: cards + CTA */}
          <div>
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
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                      }}
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

                  {/* glow */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(360px 180px at 20% 0%, ${BRAND.teal}24, transparent 70%)`,
                    }}
                  />
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
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* RIGHT: premium mosaic */}
          <BrandMosaic />
        </div>
      </section>
    </main>
  );
}

/* ---------- Small subcomponents ---------- */

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1" style={{ ringColor: BRAND.slate200 }}>
      <div
        className="mx-auto mb-2 h-1.5 w-12 rounded"
        style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
      />
      <div className="text-2xl font-semibold" style={{ color: BRAND.slate900 }}>
        {k}
      </div>
      <div className="text-sm" style={{ color: BRAND.slate600 }}>
        {v}
      </div>
    </div>
  );
}

/** ===== Premium Mosaic Collage ===== */
function BrandMosaic() {
  return (
    <div className="relative">
      {/* Decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 blur-2xl opacity-40"
        style={{
          background: `radial-gradient(500px 300px at 10% 20%, ${BRAND.teal}33, transparent 60%),
                       radial-gradient(500px 300px at 90% 70%, ${BRAND.blue}33, transparent 60%)`,
        }}
      />
      <div className="grid gap-4 md:grid-cols-3 [grid-auto-rows:140px] md:[grid-auto-rows:160px]">
        {/* Large feature */}
        <Tile src="/logistics.png" alt="Global Shipping" className="md:col-span-2 md:row-span-2" />
        {/* Stacked */}
        <Tile src="/biodiesel.png" alt="Biodiesel" />
        <Tile src="/software.jpg" alt="Technology & IT" />
        {/* Wide banner */}
        <Tile src="/shipping.png" alt="Shipping" className="md:col-span-3" tall={false} />
      </div>
    </div>
  );
}

/** Single image tile with overlay + polish */
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
      <img
        src={src}
        alt={alt}
        className={[
          "h-full w-full object-cover",
          "brightness-[0.98] contrast-[1.08] saturate-[1.15]",
          "transition-transform duration-700 will-change-transform group-hover:scale-[1.04]",
        ].join(" ")}
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(20deg, rgba(0,0,0,0.20), transparent 40%),
            radial-gradient(400px 200px at 80% 10%, ${BRAND.teal}22, transparent 70%)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </figure>
  );
}
