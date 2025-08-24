import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Globe2, Leaf, ShieldCheck, Users2, Zap } from "lucide-react";

/* ----------------------------- CONFIG ----------------------------- */
// Replace these with your real assets (1920x1080+ recommended)
const aboutImages = {
  mission: "/about-mission.jpg",
  vision: "/about-vision.jpg",
  values: "/about-values.jpg",
  story: "/about-story.jpg",
};

// Left-side tabs data
const ABOUT_TABS = [
  {
    key: "Mission",
    icon: <Leaf className="h-5 w-5" />,
    title: "Our Mission",
    description:
      "To build reliable, transparent, and sustainable trading infrastructure that empowers institutions and retail traders alike.",
    bullets: [
      "Client-first execution and security",
      "Real-time insights and risk controls",
      "Sustainable growth with compliance",
    ],
    image: aboutImages.mission,
  },
  {
    key: "Vision",
    icon: <Globe2 className="h-5 w-5" />,
    title: "Our Vision",
    description:
      "A globally connected marketplace where advanced tools are accessible to everyone—with zero compromises on trust.",
    bullets: [
      "Borderless access",
      "Unified liquidity & onboarding",
      "Institutional-grade transparency",
    ],
    image: aboutImages.vision,
  },
  {
    key: "Values",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Core Values",
    description:
      "Integrity, performance, and innovation guide every product decision, partnership, and user interaction.",
    bullets: [
      "Security above everything",
      "Data-driven decisioning",
      "Ship fast, polish faster",
    ],
    image: aboutImages.values,
  },
  {
    key: "Story",
    icon: <Users2 className="h-5 w-5" />,
    title: "Our Story",
    description:
      "From a small distributed team to a multi-region platform—our journey is about solving real trader pain points at scale.",
    bullets: [
      "Remote-first culture",
      "Obsessed with DX & UX",
      "Community-led roadmap",
    ],
    image: aboutImages.story,
  },
] as const;

// Cute animated stats
const STATS = [
  { label: "Active Users", value: 120_000 },
  { label: "Markets", value: 85 },
  { label: "Avg. Uptime", value: 99.98, suffix: "%" },
  { label: "Latency (ms)", value: 24 },
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

/* --------------------------- PRESENTATION --------------------------- */

const TabCard = ({
  title,
  description,
  icon,
  active,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
}) => (
  <div
    className={[
      "w-full rounded-2xl border px-4 py-4 text-left cursor-pointer",
      "transition-all duration-300",
      active ? "bg-white/5 border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.25)]" : "bg-transparent border-white/10 hover:bg-white/5",
    ].join(" ")}
  >
    <div className="flex items-start gap-3">
      <div className={["shrink-0 rounded-xl p-2", active ? "bg-white/10" : "bg-white/5"].join(" ")}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const Bullet = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="mt-0.5 h-4 w-4" />
    <span className="text-gray-300">{text}</span>
  </li>
);

const Stat = ({ label, value, suffix }: { label: string; value: number; suffix?: string }) => {
  const n = useCountUp(value);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-3xl md:text-4xl font-bold tabular-nums tracking-tight">{n}{suffix ?? ""}</div>
      <div className="text-xs md:text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
};

/* ----------------------------- MAIN SEC ----------------------------- */

export const AboutSection: React.FC = () => {
  const defaultTab = ABOUT_TABS[0].key;

  return (
    <section className="container px-4 py-24">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
          About{" "}
          <span className="text-gradient font-semibold">1 Global Enterprises</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-left">
          We blend institutional discipline with product craftsmanship to deliver secure, powerful,
          and intuitive trading experiences—globally.
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
                  className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                >
                  {/* Use data-state to highlight active */}
                  <div className="w-full data-[state=active]:[&_div>div]:bg-white/10">
                    <TabCard title={tab.title} description={tab.description} icon={tab.icon} />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* cute stats under triggers */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Stat label={s.label} value={s.value} suffix={s.suffix} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Tab content with animated image + bullets */}
          <div className="md:col-span-7">
            {ABOUT_TABS.map((tab) => (
              <TabsContent key={tab.key} value={tab.key} className="mt-0 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {/* Image w/ hover parallax-ish tilt */}
                    <motion.div
                      whileHover={{ scale: 1.01, rotate: 0.2 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.35)]"
                    >
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="w-full h-[340px] md:h-[420px] object-cover"
                        loading="lazy"
                      />
                      {/* floating accent */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md"
                      >
                        <Zap className="h-4 w-4" />
                        <span className="text-xs font-medium">{tab.title}</span>
                      </motion.div>
                    </motion.div>

                    {/* Text & bullets */}
                    <div className="mt-6">
                      <p className="text-gray-300 text-base md:text-lg">
                        {tab.description}
                      </p>
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tab.bullets.map((b) => (
                          <Bullet key={b} text={b} />
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default AboutSection;
