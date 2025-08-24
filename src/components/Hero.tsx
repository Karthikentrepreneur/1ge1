import React, { useEffect, useMemo, useRef, useState } from "react";

/** ========= CONFIG ========= */
const HERO_BG_IMAGES = ["/hero1.jpg", "/hero22.png", "/hero31.png", "/hero41.png"];
const ROLES = ["Food Technology", "lubricant distribution", "supply chain solutions", "software development"];
const PERSON_NAME = "Invested In";

/** Tiny typed effect (no deps) */
function useTypewriter(words: string[], speed = 55, pause = 1100) {
  const [i, setI] = useState(0);
  const [len, setLen] = useState(0);
  const [back, setBack] = useState(false);
  const t = useRef<number | null>(null);
  const word = words[i] ?? "";

  useEffect(() => {
    const tick = () => {
      if (!back) {
        if (len < word.length) {
          setLen((v) => v + 1);
          t.current = window.setTimeout(tick, speed);
        } else {
          t.current = window.setTimeout(() => setBack(true), pause);
        }
      } else {
        if (len > 0) {
          setLen((v) => v - 1);
          t.current = window.setTimeout(tick, Math.max(40, speed - 10));
        } else {
          setBack(false);
          setI((v) => (v + 1) % words.length);
          t.current = window.setTimeout(tick, 250);
        }
      }
    };
    t.current = window.setTimeout(tick, 250);
    return () => t.current && clearTimeout(t.current);
  }, [word.length, speed, pause, back, len, words]);

  return word.slice(0, len);
}

const IgniteHero: React.FC = () => {
  const typed = useTypewriter(useMemo(() => ROLES, []), 55, 1100);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slides: use background-position panning (not element translate)
  const slides = useMemo(
    () =>
      HERO_BG_IMAGES.map((src, idx) => ({
        src,
        delay: `${idx * 8}s`, // each slide window ~8s
        fromPos: idx % 2 === 0 ? "50% 52%" : "48% 50%",
        toPos: idx % 2 === 0 ? "47% 49%" : "52% 53%",
      })),
    []
  );

  return (
    <section id="hero" className="relative min-h-screen text-white overflow-hidden" aria-label="Hero">
      {/* ===== BACKGROUND (no overlay) ===== */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((s) => (
          <div
            key={s.src}
            className="slide"
            style={
              {
                backgroundImage: `url('${s.src}')`,
                ["--delay" as any]: s.delay,
                ["--fromPos" as any]: s.fromPos,
                ["--toPos" as any]: s.toPos,
                ["--cycle" as any]: `${8 * HERO_BG_IMAGES.length}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              We {PERSON_NAME}
              <br />
              <span className="inline-block min-w-[10ch]">
                <span className="font-semibold">{typed}</span>
                <span className="inline-block w-3 ml-1 align-baseline animate-caret">|</span>
              </span>
            </h1>

            {/* Updated Buttons with navigation */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="group inline-flex items-center justify-center rounded-md px-6 py-4 text-base font-medium
                           bg-[#16C79A] text-white hover:brightness-110 active:brightness-95 transition shadow-lg"
              >
                <span className="mr-3">About Us</span>
                <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
                  <span className="absolute translate-x-0 group-hover:-translate-x-6 transition">→</span>
                  <span className="absolute translate-x-6 group-hover:translate-x-0 transition">→</span>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('group-companies')}
                className="group inline-flex items-center justify-center rounded-md px-6 py-4 text-base font-medium
                           bg-[#0A84FF] text-white hover:brightness-110 active:brightness-95 transition shadow-lg"
              >
                <span className="mr-3">Our Companies</span>
                <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
                  <span className="absolute translate-x-0 group-hover:-translate-x-6 transition">→</span>
                  <span className="absolute translate-x-6 group-hover:translate-x-0 transition">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Styles (scoped) ===== */}
      <style>{`
        /* Prevent initial white flashes and ensure safe viewport height */
        #hero { min-height: 100svh; background-color: #000; }

        /* Each slide: pinned, covers fully, no overlay. We animate background-position. */
        .slide {
          position: absolute;
          inset: 0;
          background-position: center center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
          will-change: opacity, background-position, transform;
          opacity: 0;

          /* Base overscale for "bleed" so edges never show during pan/zoom */
          transform: scale(1.12);

          /* Timings: reuse --cycle so they're in sync across slides */
          animation:
            slideFade var(--cycle, 32s) linear infinite,
            kenburnsScale var(--cycle, 32s) ease-in-out infinite,
            pan var(--cycle, 32s) ease-in-out infinite;
          animation-delay: var(--delay);
          filter: saturate(1.05) contrast(1.02);
        }

        /* Crossfade window per slide */
        @keyframes slideFade {
          0%   { opacity: 0; }
          5%   { opacity: 1; }
          25%  { opacity: 1; }
          30%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* Gentle zoom only (no translate of the layer) */
        @keyframes kenburnsScale {
          0%   { transform: scale(1.12); }
          100% { transform: scale(1.20); }
        }

        /* Pan the image inside the slide (prevents white gaps) */
        @keyframes pan {
          0%   { background-position: var(--fromPos, 50% 50%); }
          100% { background-position: var(--toPos, 48% 52%); }
        }

        /* Blinking caret for the typed text */
        @keyframes blinkCaret { 0%,45% { opacity: 1; } 46%,100% { opacity: 0; } }
        .animate-caret { animation: blinkCaret 900ms step-end infinite; }
      `}</style>
    </section>
  );
};

export default IgniteHero;
