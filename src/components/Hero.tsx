import { Button } from "@/components/ui/button";

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
      className="relative min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 600px at 30% -10%, rgba(99, 179, 237, 0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(99, 102, 241, 0.18), transparent 60%), linear-gradient(180deg, #e6f3ff 0%, #f2f7ff 100%)",
      }}
    >
      {/* Hero content (centered vertically) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900">
              Building a Smarter, <br />
              <span className="text-gray-900">Greener World</span>
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
                aria-label="Email address"
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
          <div className="relative flex items-center justify-center">
            {/* Purple circle behind the person */}
            <div
              aria-hidden
              className="
                absolute rounded-full bg-[#7c3aed]
                w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px]
                top-1/2 -translate-y-1/2 right-[-24px] sm:right-[-8px] lg:right-0
                z-0
              "
            />
            {/* Person (stays above the circle) */}
            <img
              src="/hero-person.png"
              alt="Happy customer"
              className="relative z-10 w-[300px] sm:w-[380px] md:w-[430px] lg:w-[480px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Logos (same background, same sizes) */}
      <div className="relative z-10 w-full pb-14">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Group of Companies
        </h2>

        <div className="flex justify-center flex-wrap gap-10 px-6">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Company logo ${i + 1}`}
              className="h-16 sm:h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
