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
  href?: string;
};

const services: Service[] = [
  { img: "/shipping1.png", title: "Shipping", desc: "Reliable global shipping solutions tailored for international trade and commerce.", href: "/services/shipping" },
  { img: "/logistics2.png", title: "Logistics & Supply Chain", desc: "End-to-end logistics and supply chain management for efficient operations worldwide.", href: "/services/logistics" },
  { img: "/transporatation.png", title: "Product Distribution", desc: "Streamlined product distribution networks ensuring speed and accuracy.", href: "/services/distribution" },
  { img: "/softwareit.png", title: "Software / IT", desc: "Advanced software development and IT solutions for digital transformation.", href: "/services/software" },
  { img: "/renewableenergy.png", title: "Renewable Energy", desc: "Sustainable energy initiatives supporting a greener tomorrow.", href: "/services/renewable" },
  { img: "/trade.png", title: "International Trading", desc: "Cross-border trading expertise with strong global partnerships.", href: "/services/trading" },
];

export default function ServicesAndSolutions() {
  return (
    <section className="relative w-full px-6 py-20">
      {/* Attractive gradient background + pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(135deg, ${BRAND.teal}22 0%, ${BRAND.blue}22 100%)`,
        }}
      />
      {/* faint decorative pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15),transparent_60%)]" />

      {/* Fixed heading */}
      <div className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md shadow-sm py-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: BRAND.slate900 }}>
            Services &amp; Solutions We Offer
          </h2>
          <p className="mt-1 text-sm md:text-base" style={{ color: BRAND.slate600 }}>
            Delivering reliable, innovative, and sustainable services across industries.
          </p>
        </div>
      </div>

      {/* Spacer so grid isn't hidden behind fixed heading */}
      <div className="h-28" />

      {/* Grid of services */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={i} service={s} />
        ))}
      </div>
    </section>
  );
}

/** ===== Card Component ===== */
function Card({ service }: { service: Service }) {
  const Wrapper: React.ElementType = service.href ? "a" : "div";

  return (
    <Wrapper
      {...(service.href ? { href: service.href } : {})}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Image */}
      <figure className="relative">
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/services/placeholder.jpg";
            }}
          />
        </div>
        {/* Overlay title bar */}
        <figcaption className="absolute bottom-0 left-0 right-0">
          <div className="px-5 py-3 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <h3 className="text-white text-lg font-semibold">{service.title}</h3>
          </div>
        </figcaption>
      </figure>

      {/* Body */}
      <div className="p-5">
        <p className="text-sm leading-6" style={{ color: BRAND.slate600 }}>
          {service.desc}
        </p>
      </div>

      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px 200px at 20% 0%, ${BRAND.teal}33, transparent 70%)`,
        }}
      />
    </Wrapper>
  );
}
