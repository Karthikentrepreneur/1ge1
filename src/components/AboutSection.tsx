// app/about/page.tsx
import React from "react";

const UI = {
  gradient:
    "linear-gradient(135deg, #00004A 0%, #04ADCE 25%, #000000 50%, #009DD9 75%, #083452 100%)",
  gray700: "#334155",
  ring: "#e5e7eb",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ===== Top lead section ===== */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left: Headline */}
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
              About 1 Global Enterprises
              <br className="hidden sm:block" />
              — who we are and what we do
            </h1>

            <p className="mt-5 max-w-3xl text-[15px] leading-7" style={{ color: UI.gray700 }}>
              We’re a Singapore-headquartered group operating across logistics & supply chain,
              product distribution, software/IT, renewable energy and international trading.
              Our mission: deliver integrated, best-in-class solutions that create durable value.
            </p>

            <a
              href="/press"
              className="mt-6 inline-flex items-center gap-3 text-[15px] font-semibold text-black"
            >
              <span
                aria-hidden
                className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] text-white"
                style={{ background: UI.gradient }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 5l8 7-8 7" />
                </svg>
              </span>
              Read the press release
            </a>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent" />
          </div>

          {/* Right: promo panel with gradient bg */}
          <aside className="md:col-span-4">
            <div
              className="rounded-2xl px-6 py-8 text-white shadow-sm"
              style={{ background: UI.gradient }}
            >
              <h3 className="text-2xl font-extrabold leading-snug">
                Stay current with the latest news and announcements from 1 Global.
              </h3>

              <a
                href="/news"
                className="mt-6 inline-flex items-center gap-3 text-[15px] font-semibold"
              >
                <span
                  aria-hidden
                  className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] text-white"
                  style={{ background: UI.gradient }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 5l8 7-8 7" />
                  </svg>
                </span>
                Read and subscribe to 1 Global News
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== Feature cards ===== */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FeatureCard
            eyebrow="INVESTMENT STEWARDSHIP"
            title="Explore our 2024 annual report on Investment Stewardship"
            body="Investment stewardship is core to our role as a fiduciary. Explore how we engage on governance, sustainability and long-term value creation."
            cta="Read our Investment Stewardship report"
          />

          <FeatureCard
            eyebrow="GLOBAL BULLETIN"
            title="Our latest views on market volatility"
            body="Our experts share perspectives on policy, protectionism and the implications for global markets—plus how we navigate risk and opportunity."
            cta="Read the market volatility bulletin"
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <article
      className="rounded-2xl bg-white p-6 shadow-sm ring-1"
      style={{ ringColor: UI.ring }}
    >
      <div className="mb-4">
        <p className="text-[12px] font-extrabold tracking-wide text-black">{eyebrow}</p>
        <div className="mt-1 h-[3px] w-10 rounded" style={{ background: UI.gradient }} />
      </div>

      <h3 className="text-2xl md:text-3xl font-extrabold leading-snug text-black">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-[#475569]">{body}</p>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-3 text-[15px] font-extrabold text-black"
      >
        <span
          aria-hidden
          className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] text-white"
          style={{ background: UI.gradient }}
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
        </span>
        {cta}
      </a>
    </article>
  );
}
