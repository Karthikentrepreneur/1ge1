import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        background:
          "radial-gradient(1200px 600px at 30% -10%, rgba(99, 179, 237, 0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(99, 102, 241, 0.18), transparent 60%), linear-gradient(180deg, #e6f3ff 0%, #f2f7ff 100%)",
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT (text 50%) */}
          <div className="flex flex-col justify-center text-center lg:text-left h-full">
 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900">
  Building a Smarter, <br />
  <span className="relative inline-block">
    <span className="text-gray-900">Greener World</span>
    <span className="pointer-events-none absolute left-0 -bottom-2 w-full h-3 rounded-full bg-blue-300/70 blur-[1px]" />
  </span>
</h1>

<p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
  Driving innovation in renewable energy, food technology, supply chain solutions,
  software, and lubricants — creating a cleaner and more connected world.
</p>

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

          {/* RIGHT (image 50%) */}
          <div className="relative flex items-center justify-center">
            {/* Purple circle */}
            <div className="absolute h-[420px] w-[420px] sm:h-[460px] sm:w-[460px] rounded-full bg-[#7c3aed]" />
            {/* Person */}
            <img
              src="/hero-person.png"
              alt="Happy customer"
              className="relative z-10 w-[320px] sm:w-[380px] md:w-[430px] lg:w-[480px] object-contain"
            />
            {/* Floating stat pill */}
            <div className="absolute z-20 -left-4 bottom-10 flex items-center gap-4 bg-white/90 backdrop-blur rounded-full shadow-xl ring-1 ring-black/5 px-4 py-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold">
                %
              </div>
              <div>
                <div className="text-sm text-gray-700">Sale Increase</div>
                <div className="text-sm font-semibold text-blue-600 mt-1">
                  +128%
                </div>
              </div>
            </div>
            {/* Floating mini card */}
            <div className="absolute z-20 right-4 top-6 bg-white/90 backdrop-blur rounded-xl shadow-xl ring-1 ring-black/5 p-4">
              <div className="text-xs text-gray-500">New Traffic</div>
              <div className="mt-2 h-14 w-28 rounded bg-gradient-to-tr from-blue-50 to-blue-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
