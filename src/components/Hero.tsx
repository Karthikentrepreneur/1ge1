import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

/** ---------- Config ---------- */
const BG_IMG = "/greybackgound.jpg"; // change if needed

/** Tiny typewriter effect (no dependency) */
function useTypewriter(words: string[], speed = 60, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const loopRef = useRef<number | null>(null);
  const word = words[index] ?? "";

  useEffect(() => {
    const tick = () => {
      if (!reverse) {
        if (subIndex < word.length) {
          setSubIndex((s) => s + 1);
          loopRef.current = window.setTimeout(tick, speed);
        } else {
          loopRef.current = window.setTimeout(() => setReverse(true), pause);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
          loopRef.current = window.setTimeout(tick, Math.max(40, speed - 10));
        } else {
          setReverse(false);
          setIndex((i) => (i + 1) % words.length);
          loopRef.current = window.setTimeout(tick, 250);
        }
      }
    };
    loopRef.current = window.setTimeout(tick, 250);
    return () => {
      if (loopRef.current) window.clearTimeout(loopRef.current);
    };
  }, [index, reverse, subIndex, speed, pause, word.length]);

  return word.slice(0, subIndex);
}

const Hero: React.FC = () => {
  const typed = useTypewriter(
    useMemo(
      () => [
        "Used Cooking Oil Pickup",
        "Biodiesel Production",
        "Circular Economy Partner",
      ],
      []
    ),
    55,
    1100
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden text-white"
      aria-label="Super Energy Hero Section"
    >
      {/* ===== Background (Ken Burns) ===== */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-center bg-cover will-change-transform animate-kenburns"
          style={{ backgroundImage: `url('${BG_IMG}')` }}
        />
        {/* Dark gradient overlay like Ignite's layer-dark-03 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      </div>

      {/* ===== Top bar (logo left, actions right) ===== */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Super Energy"
                className="h-8 w-auto"
              />
              <span className="sr-only">Super Energy</span>
            </a>

            {/* Right actions (Subscribe / Menu placeholder) */}
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur px-4 py-2 rounded-md"
              >
                <span className="mr-2">✉️</span> Subscribe
              </Button>
              <button
                className="relative h-11 w-11 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur transition"
                aria-label="Open menu"
              >
                <span className="absolute left-1/2 top-1/2 block h-4 w-5 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white rounded"></span>
                  <span className="absolute inset-x-0 top-1/2 -mt-0.5 h-0.5 bg-white rounded"></span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white rounded"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main content (left-aligned like Ignite) ===== */}
      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7">
              {/* Subtitle */}
              <div className="mb-5">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur"
                >
                  Let’s meet
                </Badge>
              </div>

              {/* Headline with typewriter line (Ignite style) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent">
                  Waste
                </span>
                <br className="hidden sm:block" />
                Power the{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>

              {/* Animated role line (like Ignite's typed roles) */}
              <p className="mt-4 text-xl sm:text-2xl text-white/90 min-h-[2.5rem]">
                <span className="opacity-80">We are&nbsp;</span>
                <span className="font-semibold">{typed}</span>
                <span className="inline-block w-3 ml-1 animate-caret">|</span>
              </p>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white/80">
                Join the green energy movement by recycling your{" "}
                <span className="text-emerald-300 font-semibold">
                  used cooking oil
                </span>{" "}
                into clean, efficient biodiesel. Together, we can reduce pollution and
                build a sustainable tomorrow.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-white text-lg px-8 py-6 rounded-md bg-gradient-to-r from-emerald-500 to-green-700 hover:from-emerald-600 hover:to-green-800 shadow-xl"
                >
                  Become a Partner
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur"
                >
                  Say hello
                </Button>
              </div>

              {/* Trust badges (kept from your version) */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                {["FSSAI Approved", "Carbon Offset", "100% Eco-Friendly", "Free Pickup"].map(
                  (text) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-300" />
                      {text}
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Right side intentionally left empty to mirror Ignite's airy split layout */}
          </div>
        </div>
      </div>

      {/* ===== Styles for Ken Burns + caret (component-scoped) ===== */}
      <style>{`
        @keyframes kenburnsZoom {
          0%   { transform: scale(1) translate(0, 0); }
          60%  { transform: scale(1.12) translate(2%, -2%); }
          100% { transform: scale(1.2) translate(3%, -3%); }
        }
        .animate-kenburns {
          animation: kenburnsZoom 22s ease-in-out infinite alternate;
        }
        @keyframes blinkCaret {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0; }
        }
        .animate-caret {
          animation: blinkCaret 900ms step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
