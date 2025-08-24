
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/** ========= CONFIG ========= */
const HERO_BG_IMAGES = [
  "/hero1.jpg",
  "/enoc.png",
  "/logitics.png",
  "/hero/slide-4.jpg",
]; // replace with your images (1920x1080+ recommended)

const ROLES = ["Web Designer", "3D Artist", "Illustrator"]; // typed line
const PERSON_NAME = "Alex Walker";

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
    return () => {
      if (t.current) clearTimeout(t.current);
    };
  }, [word.length, speed, pause, back, len, words]);

  return word.slice(0, len);
}

const IgniteHero: React.FC = () => {
  const typed = useTypewriter(useMemo(() => ROLES, []), 55, 1100);

  /** Build slide objects with different pan directions */
  const slides = useMemo(
    () =>
      HERO_BG_IMAGES.map((src, idx) => ({
        src,
        delay: `${idx * 8}s`, // total cycle = images * 8s (tweak below in CSS)
        // subtle pan directions per slide
        fromX: idx % 2 === 0 ? "0%" : "2%",
        fromY: idx % 3 === 0 ? "0%" : "-2%",
        toX: idx % 2 === 0 ? "3%" : "-3%",
        toY: idx % 3 === 0 ? "-3%" : "3%",
      })),
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden text-white"
      aria-label="Ignite style hero"
    >
      {/* ===== BACKGROUND: multi-image Ken Burns with crossfade ===== */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0 bg-center bg-cover will-change-transform slide"
            style={
              {
                backgroundImage: `url('${s.src}')`,
                // delays stagger the fade+kenburns so one is visible at a time
                ["--delay" as any]: s.delay,
                ["--fromX" as any]: s.fromX,
                ["--fromY" as any]: s.fromY,
                ["--toX" as any]: s.toX,
                ["--toY" as any]: s.toY,
              } as React.CSSProperties
            }
          />
        ))}
        {/* dark overlay, like Ignite's .layer-dark-03 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            {/* headline + typed */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              I&apos;m {PERSON_NAME}
              <br />
              <span className="inline-block min-w-[10ch]">
                <span className="font-semibold">{typed}</span>
                <span className="inline-block w-3 ml-1 align-baseline animate-caret">
                  |
                </span>
              </span>
            </h1>

            {/* CTA buttons (Download CV + Say hello) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/services"
                className="group inline-flex items-center justify-center rounded-md px-6 py-4 text-base font-medium bg-white text-black hover:bg-white/90 transition shadow-lg"
              >
                <span className="mr-3">Our Services</span>
                <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
                  <span className="absolute translate-x-0 group-hover:-translate-x-6 transition">
                    →
                  </span>
                  <span className="absolute translate-x-6 group-hover:translate-x-0 transition">
                    →
                  </span>
                </span>
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center rounded-md px-6 py-4 text-base font-medium bg-white text-black hover:bg-white/90 transition shadow-lg"
              >
                <span className="mr-3">Contact Us</span>
                <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
                  <span className="absolute translate-x-0 group-hover:-translate-x-6 transition">
                    →
                  </span>
                  <span className="absolute translate-x-6 group-hover:translate-x-0 transition">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile footer like Ignite (socials + copyright) ===== */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 block lg:hidden">
        <div className="pointer-events-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-4">
              <li>
                <a className="btn-s-text text-white/80 hover:text-white" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Fb
                </a>
              </li>
              <li>
                <a className="btn-s-text text-white/80 hover:text-white" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  In
                </a>
              </li>
              <li>
                <a className="btn-s-text text-white/80 hover:text-white" href="https://x.com/" target="_blank" rel="noreferrer">
                  X
                </a>
              </li>
              <li>
                <a className="btn-s-text text-white/80 hover:text-white" href="https://www.behance.net/" target="_blank" rel="noreferrer">
                  Be
                </a>
              </li>
            </ul>
            <p className="text-white/70 text-sm">
              © <a href="https://1.envato.market/EKA9WD" target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">Mix Design</a>, 2025
            </p>
          </div>
        </div>
      </div>

      {/* ===== Component-scoped styles (Ken Burns + Crossfade + Caret) ===== */}
      <style>{`
        /* Total cycle time = 8s * ${HERO_BG_IMAGES.length}.
           Each slide uses the same animations, offset by --delay. */

        .slide {
          opacity: 0;
          animation:
            slideFade ${8 * HERO_BG_IMAGES.length}s linear infinite,
            kenburns ${8 * HERO_BG_IMAGES.length}s ease-in-out infinite;
          animation-delay: var(--delay);
          transform: translateZ(0); /* GPU hint */
        }

        /* Crossfade: each slide is fully visible for 25% of its window (≈2s if 8s per slide) */
        @keyframes slideFade {
          /* We create a 0–100% timeline per slide window */
          0%   { opacity: 0; }
          5%   { opacity: 1; }
          25%  { opacity: 1; }
          30%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* Ken Burns: gentle zoom + subtle pan per slide via CSS vars */
        @keyframes kenburns {
          0%   { transform: scale(1) translate(var(--fromX, 0), var(--fromY, 0)); }
          100% { transform: scale(1.15) translate(var(--toX, 0), var(--toY, 0)); }
        }

        /* Blinking caret for typed line */
        @keyframes blinkCaret {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0; }
        }
        .animate-caret { animation: blinkCaret 900ms step-end infinite; }
      `}</style>
    </section>
  );
};

export default IgniteHero;
