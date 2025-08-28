// app/components/ServicesAndSolutions.tsx
import React from "react";

/** === Brand Colors (from your logo) === */
const BRAND = {
  teal: "#16c1a7",
  blue: "#3b82f6",
  slate900: "#0f172a",
  slate600: "#475569",
  slate200: "#e2e8f0",
};

const services = [
  {
    img: "/services/shipping.jpg",
    title: "Shipping",
    desc: "Reliable global shipping solutions tailored for international trade and commerce.",
  },
  {
    img: "/services/logistics.jpg",
    title: "Logistics & Supply Chain",
    desc: "End-to-end logistics and supply chain management for efficient operations worldwide.",
  },
  {
    img: "/services/distribution.jpg",
    title: "Product Distribution",
    desc: "Streamlined product distribution networks ensuring speed and accuracy.",
  },
  {
    img: "/services/software.jpg",
    title: "Software / IT",
    desc: "Advanced software development and IT solutions for digital transformation.",
  },
  {
    img: "/services/renewable.jpg",
    title: "Renewable Energy",
    desc: "Sustainable energy initiatives supporting a greener tomorrow.",
  },
  {
    img: "/services/trading.jpg",
    title: "International Trading",
    desc: "Cross-border trading expertise with strong global partnerships.",
  },
];

export default function ServicesAndSolutions() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-16">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: BRAND.slate900 }}
        >
          Services & Solutions We Offer
        </h2>
        <p className="mt-3 text-base md:text-lg" style={{ color: BRAND.slate600 }}>
          Delivering reliable, innovative, and sustainable services across industries.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: BRAND.slate900 }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-6" style={{ color: BRAND.slate600 }}>
                {service.desc}
              </p>
            </div>

            {/* Glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(400px 200px at 20% 0%, ${BRAND.teal}22, transparent 70%)`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
