// components/Hero.tsx
import { Button } from "@/components/ui/button";

const TAGLINE =
  "1 Global Enterprises is at the forefront of innovation, leading progress across renewable energy, food technology, supply chain solutions, software development, and lubricant distribution. We are dedicated to driving sustainable growth, delivering cutting-edge technologies, and enhancing operational efficiencies for businesses worldwide. With a commitment to impactful solutions, 1 Global Enterprises empowers industries to thrive in a rapidly evolving global landscape, ensuring a brighter, cleaner, and more connected future.";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-24 md:pt-28"
      style={{
        backgroundImage: "url('/one-global-hero-1920x900.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT (text 50%) */}
          <div className="flex flex-col justify-center text-center lg:text-left py-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900">
              Powering a <span className="text-blue-700">Connected Future</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              {TAGLINE}
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-start justify-center">
              <Button className="px-8 py-6 text-base bg-blue-600 hover:bg-blue-700">
                Explore Solutions
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base">
                Talk to Us
              </Button>
            </div>
          </div>

          {/* RIGHT (image 50%) — optional: person/device visual */}
          <div className="relative flex items-center justify-center h-full py-8">
            {/* Drop your cutout product/person image in /public and point here: */}
            {/* <img src="/hero-person.png" className="relative z-10 w-[520px] object-contain" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
