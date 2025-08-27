import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 30% -10%, rgba(99, 179, 237, 0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(99, 102, 241, 0.18), transparent 60%), linear-gradient(180deg, #e6f3ff 0%, #f2f7ff 100%)",
      }}
    >
      {/* Top navigation spacing (if header is fixed) */}
      <div className="pt-24 lg:pt-28" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900">
              Increase sales
              <br />
              with{" "}
              <span className="relative inline-block">
                <span className="text-gray-900">digital</span>
                {/* curved underline bar */}
                <span className="pointer-events-none absolute left-0 -bottom-2 w-full h-3 rounded-full bg-blue-300/70 blur-[1px]" />
              </span>{" "}
              marketing
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable.
            </p>

            {/* Email capture */}
            <form
              className="mt-8 flex w-full max-w-xl mx-auto lg:mx-0 rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 sm:px-5 py-4 text-base outline-none placeholder:text-gray-400"
              />
              <Button
                type="submit"
                className="px-6 sm:px-8 py-4 text-base font-semibold rounded-none bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Purple circle backdrop */}
            <div className="absolute -right-8 sm:-right-6 md:right-0 lg:right-6 xl:right-10 top-8 h-[420px] w-[420px] sm:h-[460px] sm:w-[460px] rounded-full bg-[#7c3aed] opacity-100" />
            {/* Person */}
            <img
              src="/hero-person.png"
              alt="Happy customer using phone"
              className="relative z-10 w-[340px] sm:w-[380px] md:w-[430px] lg:w-[520px] object-contain"
              loading="eager"
              decoding="async"
            />
            {/* Floating stat pill */}
            <div className="absolute z-20 -left-2 sm:left-0 bottom-10 sm:bottom-16 flex items-center gap-4 bg-white/90 backdrop-blur rounded-full shadow-xl ring-1 ring-black/5 px-4 py-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold">
                %
              </div>
              <div className="pr-1">
                <div className="text-sm text-gray-700 leading-none">Sale Increase</div>
                <div className="text-sm font-semibold text-blue-600 mt-1">+128%</div>
              </div>
            </div>
            {/* Floating mini chart card */}
            <div className="absolute z-20 right-2 sm:right-6 -top-2 sm:-top-4 bg-white/90 backdrop-blur rounded-xl shadow-xl ring-1 ring-black/5 p-4">
              <div className="text-xs text-gray-500">New Traffic</div>
              <div className="mt-2 h-14 w-28 overflow-hidden rounded">
                {/* If you have a tiny chart image, drop it in public and use it here */}
                {/* <img src="/mini-chart.png" alt="Chart" className="w-full h-full object-contain" /> */}
                <div className="h-full w-full bg-gradient-to-tr from-blue-50 to-blue-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle gradient corners */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(400px_200px_at_10%_10%,black,transparent)]" />
    </section>
  );
};

export default Hero;
