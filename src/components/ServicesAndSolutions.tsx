import React from "react";

/** === Brand Colors (from your logo) === */
const BRAND = {
  teal: "#16c1a7",
  blue: "#3b82f6",
  slate900: "#0f172a",
  slate600: "#475569",
  slate200: "#e2e8f0",
};

type Service = {
  img: string;
  title: string;
  desc: string;
  href?: string; // optional: make the card clickable
};

const services: Service[] = [
  { img: "/services/shipping.jpg",    title: "Shipping",                 desc: "Reliable global shipping solutions tailored for international trade and commerce.", href: "/services/shipping" },
  { img: "/services/logistics.jpg",   title: "Logistics & Supply Chain", desc: "End-to-end logistics and supply chain management for efficient operations worldwide.", href: "/services/logistics" },
  { img: "/services/distribution.jpg",title: "Product Distribution",      desc: "Streamlined product distribution networks ensuring speed and accuracy.", href: "/services/distribution" },
  { img: "/services/software.jpg",    title: "Software / IT",            desc: "Advanced software development and IT solutions for digital transformation.", href: "/services/software" },
  { img: "/services/renewable.jpg",   title: "Renewable Energy",         desc: "Sustainable energy initiatives supporting a greener tomorrow.", href: "/services/renewable" },
  { img: "/services/trading.jpg",     title: "International Trading",    desc: "Cross-border trading expertise with strong global partnerships.", href: "/services/trading" },
];

export default function ServicesAndSolutions() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-16">
      {/* subtle ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            `radial-gradient(700px 420px at 10% 10%, ${BRAND.teal}18, transparent 60%),
             radial-gradient(800px 480px at 90% 20%, ${BRAND.blue}15, transparent 60%)`,
        }}
      />

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: BRAND.slate900 }}>
          Services &amp; Solutions We Offer
        </h2>
        <p className="mt-3 text-base md:text-lg" style={{ color: BRAND.slate600 }}>
          Delivering reliable, innovative, and sustainable services across industries.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={i} service={s} />
        ))}
      </div>
    </section>
  );
}

/** ========== Card ========== */
function Card({ service }: { service: Service }) {
  const Wrapper: React.ElementType = service.href ? "a" : "div";
  return (
    <Wrapper
      {...(service.href ? { href: service.href } : {})}
      className={[
        "group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition",
        "hover:-translate-y-1 hover:shadow-xl",
      ].join(" ")}
      style={{ borderColor: BRAND.slate200 }}
    >
      {/* Gradient border accent */}
      <div
        className="absolute inset-0 rounded-2xl p-px pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${BRAND.teal}33, ${BRAND.blue}33)` }}
      />

      {/* Image with fixed aspect (16:9) for consistency */}
      <figure className="relative z-0 rounded-[calc(theme(borderRadius.2xl)-1px)] overflow-hidden">
        <div className="w-full aspect-video">
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            className={[
              "h-full w-full object-cover",
              "brightness-[0.98] contrast-[1.08] saturate-[1.12]",
              "transition-transform duration-700 will-change-transform group-hover:scale-[1.04]",
            ].join(" ")}
            onError={(e) => {
              // simple fallback if image missing
              (e.currentTarget as HTMLImageElement).src = "/services/placeholder.jpg";
            }}
          />
        </div>

        {/* On-image title bar */}
        <figcaption className="absolute bottom-0 left-0 right-0">
          <div className="px-5 py-3 bg-gradient-to-t from-black/55 via-black/25 to-transparent">
            <h3 className="text-white text-lg font-semibold">
              {service.title}
            </h3>
          </div>
        </figcaption>

        {/* Subtle brand overlay for cohesion */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              `radial-gradient(380px 180px at 85% 10%, ${BRAND.teal}22, transparent 70%)`,
          }}
        />
      </figure>

      {/* Body */}
      <div className="relative z-10 p-5">
        <p className="text-sm leading-6" style={{ color: BRAND.slate600 }}>
          {service.desc}
        </p>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px 220px at 20% 0%, ${BRAND.teal}22, transparent 70%)` }}
      />
    </Wrapper>
  );
}
