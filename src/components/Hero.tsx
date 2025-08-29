import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-2">
        {/* LEFT: gradient background (white + teal + blue) */}
        <div
          className="relative text-white"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #04ADCE 25%, #ffffff 50%, #009DD9 75%, #ffffff 100%)",
          }}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6 py-16 sm:px-10">
            <div className="max-w-2xl">
              {/* small kicker */}
              <p className="mb-4 text-xs font-semibold tracking-[0.08em] text-white/90">
                1 GLOBAL ENTERPRISES
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-white">
                2025 Midyear Outlook:
                <br />
                <span className="text-white">
                  Driving clarity in a changing world
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed sm:text-lg text-white/80">
                From renewable energy to supply chain and software, we’re
                turning uncertainty into opportunity—guided by data, powered by
                execution, and aligned to sustainable growth.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/insights"
                  className="group inline-flex items-center gap-3 rounded-md bg-white/20 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-white/30 transition"
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
                  <span>Read our latest Insights</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: logistics image */}
        <div
          className="relative min-h-[48vh] lg:min-h-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.05)), url('/logistics.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
