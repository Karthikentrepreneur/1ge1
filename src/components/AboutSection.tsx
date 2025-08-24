import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ----------------------------- IMAGES -----------------------------
   Put these files in /public and tweak paths as needed.
   I set Overview to /one-globe.png based on your shared asset. */
const aboutImages = {
  overview: "/one-globe.png",
  vision:   "/about-vision.jpg",
  sectors:  "/about-sectors.jpg",
  promise:  "/about-promise.jpg",
};

/* ----------------------------- CONTENT ----------------------------- */
const ABOUT_TABS = [
  {
    key: "Overview",
    title: "Who We Are",
    image: aboutImages.overview,
    description: (
      <>
        <p>
          <strong>1 Global Enterprises</strong> is at the forefront of innovation—driving progress across
          renewable energy, food technology, supply chain solutions, software development, and lubricant distribution.
        </p>
        <p className="mt-3">
          We are committed to delivering sustainable growth, cutting-edge technologies, and operational excellence
          that empower businesses worldwide. By combining innovation with responsibility, we provide impactful
          solutions that help industries thrive in a rapidly evolving global landscape.
        </p>
      </>
    ),
    bullets: [
      "Renewable Energy",
      "Food Technology",
      "Supply Chain Solutions",
      "Software Development",
      "Lubricant Distribution",
    ],
  },
  {
    key: "Vision",
    title: "Our Vision",
    image: aboutImages.vision,
    description: (
      <p>
        With a clear vision for the future, <strong>1 Global Enterprises</strong> is shaping a brighter, cleaner,
        and more connected world—where sustainable growth and human-centered technology go hand in hand.
      </p>
    ),
    bullets: [
      "Build responsibly, scale sustainably",
      "Design technology that serves people",
      "Create long-term value for partners",
      "Champion transparent, ethical operations",
    ],
  },
  {
    key: "Sectors",
    title: "What We Do",
    image: aboutImages.sectors,
    description: (
      <p>
        We operate across high-impact sectors, unifying strategy, technology, and execution to deliver measurable
        outcomes for our clients and partners.
      </p>
    ),
    bullets: [
      "Renewables: clean energy programs & partnerships",
      "FoodTech: quality, safety, and efficiency at scale",
      "Supply Chain: visibility, routing, & optimization",
      "Software: platforms, portals, and integrations",
      "Lubricants: reliable distribution & support",
    ],
  },
  {
    key: "Promise",
    title: "Our Promise",
    image: aboutImages.promise,
    description: (
      <p>
        We pair innovation with accountability—committing to results, reliability, and relationships. Every engagement
        is guided by performance, clarity, and care.
      </p>
    ),
    bullets: [
      "Operational excellence",
      "Cutting-edge technologies",
      "Sustainable, responsible execution",
      "Partnerships built on trust",
    ],
  },
] as const;

/* ---------------------------- UTIL: Counter (optional) ----------------------------
   Not used for stats here, but handy if you later add KPIs without any library. */
const useCountUp = (to: number, duration = 900) => {
  const [n, setN] = useState(0);
  const startRef = useRef<number | null>(null);
  useEffect(() => {
    let raf: number;
    const step = (t: number) => {
      if (!startRef.current) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to * 100) / 100);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return n;
};

/* ---------------------------- UTIL: Reveal on scroll ---------------------------- */
const useRevealOnScroll = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ------------------------------- UI Helpers ------------------------------- */
const IconCheck = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --------------------------------- MAIN --------------------------------- */
export const AboutSection: React.FC = () => {
  useRevealOnScroll();
  const defaultTab = ABOUT_TABS[0].key;

  return (
    <section className="container px-4 py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 reveal">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
          About <span className="text-gradient font-semibold">1 Global Enterprises</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-left">
          At the forefront of innovation, 1 Global Enterprises is driving progress across renewable energy,
          food technology, supply chain solutions, software development, and lubricant distribution.
        </p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT — Tab triggers */}
          <div className="md:col-span-5 space-y-3">
            <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
              {ABOUT_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.key}
                  value={tab.key}
                  className="group w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  <div
                    className={[
                      "w-full rounded-2xl border px-4 py-4 text-left cursor-pointer transition-all duration-300",
                      "bg-transparent border-white/10 group-hover:bg-white/5",
                      "data-[state=active]:bg-white/5 data-[state=active]:border-white/20 data-[state=active]:shadow-[0_8px_40px_rgba(0,0,0,0.25)]",
                    ].join(" ")}
                  >
                    <h3 className="text-lg font-semibold tracking-tight">{tab.title}</h3>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {/* brief line extracted from description */}
                      {typeof tab.description === "string" ? tab.description : undefined}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* RIGHT — Tab content */}
          <div className="md:col-span-7">
            {ABOUT_TABS.map((tab) => (
              <TabsContent key={tab.key} value={tab.key} className="mt-0 h-full">
                <div className="reveal">
                  {/* Image card with CSS-only Ken Burns + hover glow */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.35)] group">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-[340px] md:h-[420px] object-cover animate-kenburns"
                      loading="lazy"
                    />
                    {/* subtle hover spotlight */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,.08), transparent 40%)",
                      }}
                      onMouseMove={(e) => {
                        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                        (e.currentTarget as HTMLDivElement).style.setProperty("--x", `${((e.clientX - r.left) / r.width) * 100}%`);
                        (e.currentTarget as HTMLDivElement).style.setProperty("--y", `${((e.clientY - r.top) / r.height) * 100}%`);
                      }}
                    />
                    {/* floating label */}
                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md text-xs font-medium shadow-sm">
                      {tab.title}
                    </span>
                  </div>

                  {/* Text & bullets */}
                  <div className="mt-6">
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-3">
                      {tab.description}
                    </div>
                    {tab.bullets?.length ? (
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tab.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <IconCheck className="h-4 w-4 mt-0.5" />
                            <span className="text-gray-300">{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>

      {/* Scoped styles */}
      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #16C79A 0%, #12B5D0 50%, #0A84FF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        /* Reveal on scroll */
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.is-visible { opacity: 1; transform: none; }
        /* Gentle Ken Burns */
        @keyframes kenburns { from { transform: scale(1.03); } to { transform: scale(1.08); } }
        .animate-kenburns { animation: kenburns 9s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default AboutSection;
