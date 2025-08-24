import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ----------------------------- CONFIG ----------------------------- */
// Swap these with your real assets
const aboutImages = {
  mission: "/about-mission.jpg",
  vision: "/about-vision.jpg",
  values: "/about-values.jpg",
  story:  "/about-story.jpg",
};

const ABOUT_TABS = [
  {
    key: "Mission",
    title: "Our Mission",
    description:
      "To build reliable, transparent, and sustainable platforms that empower customers and partners globally.",
    bullets: [
      "Client-first execution & security",
      "Real-time insights and control",
      "Sustainable, compliant growth",
    ],
    image: aboutImages.mission,
  },
  {
    key: "Vision",
    title: "Our Vision",
    description:
      "A connected ecosystem where advanced tools are accessible to everyone—with zero compromises on trust.",
    bullets: [
      "Borderless access to services",
      "Unified experiences across regions",
      "Radical transparency at scale",
    ],
    image: aboutImages.vision,
  },
  {
    key: "Values",
    title: "Core Values",
    description:
      "Integrity, performance, and innovation guide every product decision, partnership, and interaction.",
    bullets: [
      "Security above everything",
      "Data-driven decisions",
      "Ship fast, polish faster",
    ],
    image: aboutImages.values,
  },
  {
    key: "Story",
    title: "Our Story",
    description:
      "From a small distributed team to a multi-region operation—our journey is about solving real problems at scale.",
    bullets: [
      "Remote-first culture",
      "Obsessed with UX",
      "Community-led roadmap",
    ],
    image: aboutImages.story,
  },
] as const;

const STATS = [
  { label: "Active Clients", value: 120_000 },
  { label: "Countries", value: 24 },
  { label: "Uptime", value: 99.98, suffix: "%" },
  { label: "Avg. Response (ms)", value: 240 },
];

/* ---------------------------- UTIL: Counter ---------------------------- */
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

/* ---------------------------- UTIL: Reveal ---------------------------- */
/** Adds .is-visible to elements with .reveal when they enter viewport (CSS-only animations then run). */
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

/* ----------------------------- SMALL UI ----------------------------- */
const IconCheck = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StatCard = ({ label, value, suffix }: { label: string; value: number; suffix?: string }) => {
  const n = useCountUp(value);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm reveal">
      <div className="text-3xl md:text-4xl font-bold tabular-nums tracking-tight">{n}{suffix ?? ""}</div>
      <div className="text-xs md:text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
};

const TabCard = ({
  title,
  description,
  active,
}: {
  title: string;
  description: string;
  active?: boolean;
}) => (
  <div
    className={[
      "w-full rounded-2xl border px-4 py-4 text-left cursor-pointer transition-all duration-300",
      active ? "bg-white/5 border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.25)]" : "bg-transparent border-white/10 hover:bg-white/5",
    ].join(" ")}
  >
    <div className="flex items-start gap-3">
      <div className={["shrink-0 rounded-xl p-2", active ? "bg-white/10" : "bg-white/5"].join(" ")} />
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

/* ------------------------------ MAIN ------------------------------ */
export const AboutSection: React.FC = () => {
  useRevealOnScroll();
  const defaultTab = ABOUT_TABS[0].key;

  return (
    <section className="container px-4 py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16 reveal">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
          About{" "}
          <span className="text-gradient font-semibold">Our Company</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-left">
          We blend institutional discipline with product craftsmanship to deliver secure, powerful,
          and intuitive experiences—globally.
        </p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT — Triggers + Stats */}
          <div className="md:col-span-5 space-y-3">
            <TabsList className="flex flex-col w-full bg-transparent h-auto p-0 space-y-3">
              {ABOUT_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.key}
                  value={tab.key}
                  className="group w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  <div className="w-full data-[state=active]:[&_div>div:first-child]:bg-white/10">
                    <TabCard title={tab.title} description={tab.description} />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {STATS.map((s) => (
                <StatCard key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
              ))}
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="md:col-span-7">
            {ABOUT_TABS.map((tab) => (
              <TabsContent key={tab.key} value={tab.key} className="mt-0 h-full">
                <div className="reveal">
                  {/* Image Card */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.35)] group">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-[340px] md:h-[420px] object-cover animate-kenburns"
                      loading="lazy"
                    />
                    {/* floating label */}
                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md text-xs font-medium shadow-sm">
                      {/* small spark icon (inline) */}
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                      </svg>
                      {tab.title}
                    </span>

                    {/* subtle hover flair */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,.08), transparent 40%)" }}
                         onMouseMove={(e) => {
                           const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                           (e.currentTarget as HTMLDivElement).style.setProperty("--x", `${((e.clientX - r.left) / r.width) * 100}%`);
                           (e.currentTarget as HTMLDivElement).style.setProperty("--y", `${((e.clientY - r.top) / r.height) * 100}%`);
                         }}
                    />
                  </div>

                  {/* Text & bullets */}
                  <div className="mt-6">
                    <p className="text-gray-300 text-base md:text-lg">{tab.description}</p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tab.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <IconCheck className="h-4 w-4 mt-0.5" />
                          <span className="text-gray-300">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>

      {/* Scoped styles (no extra libs) */}
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

        /* Gentle Ken Burns for the image */
        @keyframes kenburns { from { transform: scale(1.03); } to { transform: scale(1.08); } }
        .animate-kenburns { animation: kenburns 9s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default AboutSection;
