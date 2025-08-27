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
      className="relative min-h-screen flex flex-col justify-between"
      style={{
        background:
          "radial-gradient(1200px 600px at 30% -10%, rgba(99, 179, 237, 0.25), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(99, 102, 241, 0.18), transparent 60%), linear-gradient(180deg, #e6f3ff 0%, #f2f7ff 100%)",
      }}
    >
      {/* Top hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT (text 50%) */}
          <div className="flex flex-col justify-center text-center lg:text-left h-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900">
              Building a Smarter, <br />
              <span className="relative inline-block">
                <span className="text-gray-900">Greener World</span>
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

          {/* RIGHT (image 50%) */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[420px] w-[420px] sm:h-[460px] sm:w-[460px] rounded-full bg-[#7c3aed]" />
            <img
              src="/hero-person.png"
              alt="Happy customer"
              className="relative z-10 w-[320px] sm:w-[380px] md:w-[430px] lg:w-[480px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Group of Companies logos */}
      <div className="w-full bg-white py-10 border-t border-gray-200">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Group of Companies
        </h2>

        <div className="overflow-hidden">
          <div className="animate-scroll flex gap-12">
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Company logo ${i + 1}`}
                className="h-12 sm:h-14 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
