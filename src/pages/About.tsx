import Header from "../components/Header";
import Footer from "../components/Footer";

const points = [
  { n: "1.", t: "Who We Are", b: "Singapore-headquartered group operating in 16+ countries with 700+ professionals." },
  { n: "2.", t: "What We Do", b: "Shipping & Logistics, Distribution, Software/IT, Renewable Energy, and Trading." },
  { n: "3.", t: "How We Work", b: "Domain experts lead each unit—reliable execution, compliance, innovation." },
  { n: "4.", t: "Global Footprint", b: "SEA, Indian Sub-continent, Middle East, USA & UK." },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
          {/* Top row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">About Us</h1>
              <p className="mt-3 text-gray-600">
                We build long-term partnerships with a focus on service, integrity, and excellence.
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left: points + button */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {points.map((p) => (
                  <div key={p.t}>
                    <div className="text-4xl md:text-5xl font-semibold text-gray-900">{p.n}</div>
                    <h3 className="mt-1 text-xl font-semibold text-gray-900">{p.t}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{p.b}</p>
                  </div>
                ))}
              </div>
              <a href="/contact" className="inline-flex w-max items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700">
                Work With Us →
              </a>
            </div>

            {/* Right: zig-zag collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/OIP.jpg" alt="Shipping" className="h-44 w-full rounded-lg object-cover md:h-52" />
                <img src="/renew.jpg" alt="Renewables" className="h-44 w-full rounded-lg object-cover md:h-52 md:mt-8" />
              </div>
              <div className="space-y-4 md:pt-8">
                <img src="/OIP1.jpg" alt="Logistics" className="h-44 w-full rounded-lg object-cover md:h-52" />
                <img src="/software.jpg" alt="Technology" className="h-44 w-full rounded-lg object-cover md:h-52" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
