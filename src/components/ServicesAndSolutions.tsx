// app/about/page.tsx
import React from "react";

const THEME = {
  offwhite: "#f9f8f4",
  gray700: "#334155",
  gradient: "linear-gradient(135deg, #04ADCE 0%, #009DD9 50%, #083452 100%)",
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: THEME.offwhite }}>
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          {/* LEFT: Image (match text height) */}
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[10px] shadow-sm w-full
                            h-56 sm:h-64 md:h-72 lg:h-80">
              <img
                src="/about-hero.jpg"
                alt="About 1 Global Enterprises"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Text + compact spacing */}
          <div className="md:col-span-7">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-black">
              About 1 Global: Building growth and prosperity
            </h1>

            <p className="mt-3 text-[15px] leading-7" style={{ color: THEME.gray700 }}>
              We’re a Singapore-headquartered group operating across renewable
              energy, logistics & supply chain, product distribution, software/IT,
              and international trading. Our focus is simple: expand access, drive
              innovation, and create durable value for clients and communities.
            </p>

            <p className="mt-2 text-[15px] leading-7" style={{ color: THEME.gray700 }}>
              The group employs over 700 staff in 16+ countries across Southeast Asia,
              the Indian subcontinent, the Middle East, the USA and the UK. Each
              business unit is led by seasoned experts to ensure successful
              implementation of our plans.
            </p>

            {/* CTA: width fits content only */}
            <a
              href="/insights"
              className="mt-5 inline-flex max-w-max w-auto self-start items-center gap-2.5
                         whitespace-nowrap rounded-[6px] px-5 py-3 text-sm font-semibold
                         text-white shadow transition hover:opacity-90"
              style={{ background: THEME.gradient }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
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
