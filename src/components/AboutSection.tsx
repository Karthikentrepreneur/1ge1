// app/about/page.tsx
import React from "react";

const BRAND = {
  teal: "#16c1a7",
  aqua: "#22d3ee",
  blue: "#3b82f6",
  gray900: "#0f172a",
  gray600: "#475569",
  gray200: "#e2e8f0",
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
      {/* Brand ambient background using logo colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            `radial-gradient(900px 600px at 12% 8%, ${BRAND.teal}18, transparent 60%),
             radial-gradient(900px 600px at 88% 20%, ${BRAND.blue}15, transparent 60%)`,
        }}
      />
      {/* faint logo watermark */}
      <img
        src="/globallogo.png" /* place your uploaded logo in /public */
        alt=""
        className="pointer-events-none absolute right-6 top-6 -z-10 h-10 opacity-10 md:h-12"
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl"
              style={{ color: BRAND.gray900 }}>
            About Us
          </h1>
          <p className="mt-3 text-[15px] leading-7"
             style={{ color: BRAND.gray600 }}>
            At 1 Global Enterprises, we take pride in our values — service,
            integrity, and excellence.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {aboutPoints.map((pt) => (
                <div
                  key={pt.num}
                  className="group relative rounded-2xl bg-white p-5 shadow-sm ring-1 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ ringColor: BRAND.gray200 }}
                >
                  {/* Number badge — brand gradient */}
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                      }}
                    >
                      {pt.num}
                    </span>
                    <h3 className="text-lg font-semibold"
                        style={{ color: BRAND.gray900 }}>
                      {pt.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6"
                     style={{ color: BRAND.gray600 }}>
                    {pt.body}
                  </p>

                  {/* subtle brand glow */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(360px 180px at 20% 0%, ${BRAND.aqua}26, transparent 70%)`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* CTA — brand gradient button */}
            <a
              href="#learn-more"
              className="inline-flex w-max items-center gap-2 rounded-xl px-6 py-3 text-white shadow transition hover:-translate-y-0.5 active:translate-y-0"
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

          {/* RIGHT — image tiles with brand accent border */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Tile src="/logistics.png" alt="Global shipping" />
              <Tile src="/logistics1.png" alt="Renewable energy" className="md:mt-8" />
            </div>
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

/** Image tile with brand border + hover zoom */
function Tile({
  src,
  alt,
  className = "",
}: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl bg-white/40 shadow-sm ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl p-px"
           style={{ background: "linear-gradient(135deg, #16c1a733, #3b82f633)" }} />
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-44 w-full rounded-2xl object-cover transition-transform duration-500 will-change-transform md:h-52 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
    </figure>
  );
}
