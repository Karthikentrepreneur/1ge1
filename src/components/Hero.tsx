import { Button } from "@/components/ui/button";

/**
 * Split hero inspired by the screenshot:
 * - Left: dense black panel with big headline + paragraph + CTA
 * - Right: full-bleed background image (ocean/ship style)
 *
 * Brand palette taken from the 1 GLOBAL logo:
 *   --brand-teal: #07B5C9
 *   --brand-green: #16C79A
 *   --brand-dark: #313437 (for headings on black)
 *   --brand-gray: #808488 (body text on black)
 *
 * Replace `/hero-ocean.jpg` with your actual image (1920x1080+ recommended).
 * You can also pass it via props if you prefer.
 */

const Hero = () => {
  const logos = [
    "/logosss01.png",
    "/logosss02.png",
    "/logosss03.png",
    "/logosss04.png",
    "/logosss05.png",
    "/logosss06.png",
  ];

  return (
    <section
      id="hero"
      className="relative"
      style={
        {
          // easy theming from your logo
          // (you can lift these to :root in CSS if you’ll reuse them)
          ["--brand-teal" as any]: "#07B5C9",
          ["--brand-green" as any]: "#16C79A",
          ["--brand-dark" as any]: "#313437",
          ["--brand-gray" as any]: "#A5ABB1",
        } as React.CSSProperties
      }
    >
      {/* Split layout */}
      <div className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-2">
        {/* LEFT: headline on black */}
        <div className="relative bg-black text-white">
          <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6 py-16 sm:px-10">
            <div className="max-w-2xl">
              {/* small kicker */}
              <p className="mb-4 text-xs font-semibold tracking-[0.08em] text-[color:var(--brand-teal)]">
                1 GLOBAL ENTERPRISES
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                2025 Midyear Outlook:
                <br />
                <span className="text-white">
                  Driving clarity in a changing world
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[color:var(--brand-gray)] sm:text-lg">
                From renewable energy to supply chain and software, we’re
                turning uncertainty into opportunity—guided by data, powered by
                execution, and aligned to sustainable growth.
              </p>

              {/* CTA (teal chevron like the screenshot’s arrow accent) */}
              <div className="mt-8">
                <a
                  href="/insights"
                  className="group inline-flex items-center gap-3 rounded-md bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[color:var(--brand-teal)] text-black">
                    {/* caret/arrow */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 5l8 7-8 7" />
                    </svg>
                  </span>
                  <span>Read our latest Insights</span>
                </a>
              </div>
            </div>
          </div>

          {/* subtle brand gradient bar at the very bottom (desktop only) */}
          <div className="pointer-events-none hidden h-1 w-full bg-gradient-to-r from-[color:var(--brand-green)] via-[color:var(--brand-teal)] to-[color:var(--brand-green)] lg:block" />
        </div>

        {/* RIGHT: full-bleed image panel */}
        <div
          className="relative min-h-[48vh] lg:min-h-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('/hero-ocean.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Optional overlay edge to create the hard split line */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 bg-black lg:block" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
