import React from "react";
import { Card } from "@/components/ui/card";

const GroupCompanies: React.FC = () => {
  const companies = [
    { name: "GC",      logo: "/logosss02.png", solution: "Specialized in Consolidation & Freight Management",                                                   website: "https://globalconsol.com/" },
    { name: "OECL",    logo: "/logosss03.png", solution: "Customized Supply Chain Solutions, Liquid Logistics, Projects & Freight Management",                  website: "https://oecl.sg/" },
    { name: "MOLTECH", logo: "/logosss04.png", solution: "Renewable Energy Supplies & Clean Technology",                                                        website: "https://moltechglobal.com/" },
    { name: "CITYGN",  logo: "/logosss05.png", solution: "Products Distribution & Marketing Company",                                                           website: "https://cityvenergy.com/" },
    { name: "SHIPSOFT",logo: "/logosss06.png", solution: "Maritime Software Solutions",                                                                         website: "https://shipsoft.sg/" },
    { name: "GGL",     logo: "/logosss01.png", solution: "3 PL & Freight Management",                                                                           website: "https://ggl.sg/" },
  ];

  return (
    <section id="group-companies" className="relative py-20">
      {/* Full-section brand ambiance */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(22,193,167,0.10) 0%, rgba(59,130,246,0.10) 100%)",
        }}
      />
      {/* Soft radial accents */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(60rem 30rem at 10% 0%, rgba(22,193,167,0.20), transparent 60%), radial-gradient(60rem 36rem at 100% 20%, rgba(59,130,246,0.18), transparent 60%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:28px_28px]"
      />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
            <span className="bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF] bg-clip-text text-transparent">
              Our Group Companies
            </span>
          </h2>
          <div className="mx-auto h-[3px] w-28 bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF] rounded-full" />
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio driving innovation across logistics, energy, technology, and global trade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((c, i) => (
            <a
              key={i}
              href={c.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`${c.name} — Visit Website`}
              className="group block"
            >
              <Card
                className={[
                  "rounded-2xl p-7 transition-all duration-300",
                  "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80",
                  "ring-1 ring-slate-200 hover:ring-transparent",
                  "hover:-translate-y-1 hover:shadow-2xl",
                  "relative overflow-hidden",
                ].join(" ")}
              >
                {/* Gradient edge highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl p-px"
                     style={{ background: "linear-gradient(135deg, rgba(22,193,167,0.30), rgba(59,130,246,0.30))" }} />
                {/* Ambient hover glow */}
                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                     style={{ background: "radial-gradient(24rem 12rem at 20% 0%, rgba(22,193,167,0.22), transparent 70%)" }} />

                {/* Logo */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative w-full h-24 md:h-28 flex items-center justify-center">
                    {/* faint pill behind logo for consistency */}
                    <div className="absolute inset-x-6 h-20 md:h-24 rounded-2xl bg-slate-50/70 ring-1 ring-slate-200/60" />
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="relative z-10 max-h-[68%] max-w-[80%] object-contain"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.35"; }}
                    />
                  </div>
                </div>

                {/* Name + description */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {c.solution}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                    <span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF]"
                    >
                      Visit Website
                    </span>
                    <svg
                      className="h-4 w-4 text-[#16C79A] transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom stripe accent */}
        <div className="mt-14 h-[2px] w-full bg-gradient-to-r from-transparent via-[#16C79A]/50 to-transparent" />
      </div>
    </section>
  );
};

export default GroupCompanies;
