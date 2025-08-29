// app/about/page.tsx
import React from "react";

const THEME = {
  offwhite: "#f9f8f4",
  gray700: "#334155",
  gradient: "linear-gradient(135deg, #04ADCE 0%, #009DD9 50%, #083452 100%)",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: THEME.offwhite }}>
      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          {/* LEFT: Image sized to match text height */}
          <div className="md:col-span-6 flex">
            <div className="overflow-hidden rounded-[10px] shadow-sm w-full h-full">
              <img
                src="/about-hero.jpg"
                alt="About 1 Global Enterprises"
                className="block w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Headline, body, CTA */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">
              About 1 Global: Building growth and prosperity
            </h1>

            <p
              className="mt-4 max-w-2xl text-[15px] leading-7"
              style={{ color: THEME.gray700 }}
            >
              We’re a Singapore-headquartered group operating across renewable
              energy, logistics & supply chain, product distribution, software/IT,
              and international trading. Our focus is simple: expand access,
              drive innovation, and create durable value for clients and
              communities.
            </p>

            <p
              className="mt-3 max-w-2xl text-[15px] leading-7"
              style={{ color: THEME.gray700 }}
            >
              The group employs over 700 staff in 16+ countries spread over
              South East Asia, Indian Sub-con, Middle East, USA & UK. Each of
              our business unit is run and managed by experts in their own
              field, ensuring successful implementation of our business plans.
            </p>

            {/* CTA button with gradient background */}
            <a
              href="/insights"
              className="mt-6 inline-flex items-center gap-2.5 rounded-[6px] px-5 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
              style={{ background: THEME.gradient }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5l8 7-8 7" />
              </svg>
              Read our story
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
