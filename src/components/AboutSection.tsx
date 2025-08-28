// app/about/page.tsx
import React from "react";

const aboutPoints = [
  {
    num: "1.",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered group operating in 16+ countries with 700+ professionals.",
    img: "/OIP.jpg",
  },
  {
    num: "2.",
    title: "What We Do",
    body:
      "Shipping, Logistics & Supply Chain, Product Distribution, Software/IT, Renewable Energy, and International Trading.",
    img: "/OIP1.jpg",
  },
  {
    num: "3.",
    title: "How We Help",
    body:
      "Expert-led business units deliver reliable execution, innovation, and compliance across global markets.",
    img: "/renew.jpg",
  },
  {
    num: "4.",
    title: "Our Footprint",
    body:
      "Serving Southeast Asia, Indian Subcontinent, Middle East, USA & UK—expanding partnerships and capabilities.",
    img: "/software.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            About Us
          </h1>
          <p className="mt-3 text-gray-600 leading-7">
            A diversified global enterprise driven by innovation, service, and
            excellence — transforming industries and creating sustainable growth.
          </p>
        </div>

        {/* Zig-Zag Layout */}
        <div className="mt-12 flex flex-col gap-12">
          {aboutPoints.map((pt, i) => (
            <div
              key={pt.num}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <img
                src={pt.img}
                alt={pt.title}
                className="w-full h-56 object-cover rounded-xl shadow-md"
              />

              {/* Text */}
              <div>
                <div className="text-4xl font-semibold text-blue-600">
                  {pt.num}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {pt.title}
                </h3>
                <p className="mt-2 text-gray-600 text-base">{pt.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button under text */}
        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Learn More
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
