import React from "react";
import { Card } from "@/components/ui/card";

const GroupCompanies: React.FC = () => {
  const companies = [
    { name: "GC", logo: "/logosss02.png", solution: "Specialized in Consolidation & Freight Management", website: "https://globalconsol.com/" },
    { name: "OECL", logo: "/logosss03.png", solution: "Customized Supply Chain Solutions, Liquid Logistics, Projects & Freight Management", website: "https://oecl.sg/" },
    { name: "MOLTECH", logo: "/logosss04.png", solution: "Renewable Energy Supplies & Clean Technology", website: "https://moltechglobal.com/" },
    { name: "CITYGN", logo: "/logosss05.png", solution: "Products Distribution & Marketing Company", website: "https://cityvenergy.com/" },
    { name: "SHIPSOFT", logo: "/logosss06.png", solution: "Maritime Software Solutions", website: "https://shipsoft.sg/" },
    { name: "GGL", logo: "/logosss01.png", solution: "3 PL & Freight Management", website: "https://ggl.sg/" },
  ];

  return (
    <section id="group-companies" className="relative py-20">
      {/* === Full dotted background with brand overlay === */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle, rgba(22,199,154,0.25) 1px, transparent 1px),
            radial-gradient(circle, rgba(10,132,255,0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px, 64px 64px",
          backgroundPosition: "0 0, 16px 16px",
          backgroundColor: "white", // fallback
        }}
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
                  "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
                  "ring-1 ring-slate-200 hover:ring-transparent",
                  "hover:-translate-y-1 hover:shadow-2xl",
                  "relative overflow-hidden",
                ].join(" ")}
              >
                {/* Logo */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative w-full h-24 md:h-28 flex items-center justify-center">
                    <div className="absolute inset-x-6 h-20 md:h-24 rounded-2xl bg-slate-50/70 ring-1 ring-slate-200/60" />
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="relative z-10 max-h-[68%] max-w-[80%] object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.opacity = "0.35";
                      }}
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#16C79A] via-[#12B5D0] to-[#0A84FF]">
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
      </div>
    </section>
  );
};

export default GroupCompanies;
