// AboutSection.tsx
// Attractive + responsive About section that ONLY shows your content + one image
// No extra packages required. Tailwind + CSS-only effects.

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* Soft background accents (brand colors) */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(closest-side, rgba(22,199,154,.35), rgba(18,181,208,.18), rgba(10,132,255,.12), transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-30"
           style={{ background: "radial-gradient(closest-side, rgba(10,132,255,.25), rgba(18,181,208,.15), transparent 65%)" }} />

      <div className="container px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* IMAGE (on mobile first) */}
          <div className="md:col-span-6 order-1 md:order-none">
            {/* Gradient border + glassy card + hover shine */}
            <div className="relative shine-card rounded-3xl p-[1px] bg-gradient-to-tr from-[#16C79A] via-[#12B5D0] to-[#0A84FF]">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 dark:bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_100px_rgba(0,0,0,0.45)] transition-shadow duration-500">
                <img
                  src="/logitics.png"  // ensure this file is in your /public folder
                  alt="1 Global Enterprises — a brighter, cleaner, and more connected world"
                  className="w-full h-[320px] md:h-[460px] object-cover transition-transform duration-700 will-change-transform hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Subtle spotlight that follows the mouse */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.09), transparent 40%)",
                  }}
                  onMouseMove={(e) => {
                    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    (e.currentTarget as HTMLDivElement).style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                    (e.currentTarget as HTMLDivElement).style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
                  }}
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF] bg-clip-text text-transparent">
                1 Global Enterprises
              </span>
            </h2>

            {/* Decorative underline */}
            <div className="h-1 w-24 rounded-full mb-6 bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF]" />

            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                At the forefront of innovation, 1 Global Enterprises is driving progress across
                renewable energy, food technology, supply chain solutions, software development,
                and lubricant distribution.
              </p>
              <p>
                We are committed to delivering sustainable growth, cutting-edge technologies, and
                operational excellence that empower businesses worldwide. By combining innovation
                with responsibility, we provide impactful solutions that help industries thrive in a
                rapidly evolving global landscape.
              </p>
              <p>
                With a clear vision for the future, 1 Global Enterprises is shaping a brighter, cleaner,
                and more connected world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS (for the shiny gradient border effect) */}
      <style>{`
        .shine-card {
          position: relative;
          overflow: visible;
        }
        .shine-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 1.5rem; /* matches rounded-3xl */
          background: conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,.35), rgba(255,255,255,0) 30%, rgba(255,255,255,.35) 60%, rgba(255,255,255,0));
          filter: blur(14px);
          opacity: .18;
          transition: opacity .4s ease;
          pointer-events: none;
        }
        .shine-card:hover::after { opacity: .32; }
      `}</style>
    </section>
  );
};

export default AboutSection;
