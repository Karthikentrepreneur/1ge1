// app/about/page.tsx
import React from "react";

const aboutPoints = [
  {
    num: "1.",
    title: "Who We Are",
    body:
      "1 Global Enterprises Pte Ltd is a Singapore-headquartered business group with operations in 16+ countries and 700+ professionals worldwide.",
  },
  {
    num: "2.",
    title: "What We Do",
    body:
      "Our portfolio spans Shipping, Logistics & Supply Chain, Product Distribution, Software Development & IT solutions, Renewable Energy and International Trading.",
  },
  {
    num: "3.",
    title: "How We Operate",
    body:
      "Each business unit is managed by seasoned experts, ensuring smooth operations, innovation, and successful global implementation.",
  },
  {
    num: "4.",
    title: "Our Global Footprint",
    body:
      "From Southeast Asia and the Indian Subcontinent to the Middle East, USA, and UK – our network continues to expand and deliver value worldwide.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        {/* Heading + button */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900">About Us</h1>
            <p className="mt-2 max-w-xl text-gray-600">
              A diversified global enterprise driven by innovation, service, and excellence – 
              transforming industries and creating sustainable growth.
            </p>
          </div>
          <a
            href="#learn-more"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-white font-medium shadow hover:bg-blue-600 transition"
          >
            Learn More →
          </a>
        </div>

        {/* Grid: left text (points) + right images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: about points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {aboutPoints.map((pt) => (
              <div key={pt.num}>
                <div className="text-3xl font-bold text-blue-600">{pt.num}</div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {pt.title}
                </h3>
                <p className="mt-1 text-gray-600 text-sm">{pt.body}</p>
              </div>
            ))}
          </div>

          {/* Right: image collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/OIP.jpg"
              alt="Global shipping"
              className="h-40 w-full object-cover rounded-lg shadow"
            />
            <img
              src="/OIP1.jpg"
              alt="Logistics"
              className="h-40 w-full object-cover rounded-lg shadow"
            />
            <img
              src="/renew.jpg"
              alt="Renewable energy"
              className="h-40 w-full object-cover rounded-lg shadow"
            />
            <img
              src="/software.jpg"
              alt="Technology"
              className="h-40 w-full object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
