import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Soft header band */}
        <section
          className="relative"
          style={{
            background:
              "radial-gradient(900px 400px at 15% 0%, rgba(14,165,233,0.10), transparent 60%), radial-gradient(800px 350px at 85% 0%, rgba(16,185,129,0.08), transparent 60%)",
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-10">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">About Us</h1>
            <p className="mt-2 max-w-2xl text-gray-600">
              Singapore-headquartered, operating across 16+ countries with 700+ professionals.
              We build long-term partnerships grounded in service, integrity, and excellence.
            </p>
          </div>
        </section>

        {/* Content: text + image mosaic (distinct from Index hero) */}
        <section className="mx-auto w-full max-w-7xl px-6 py-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left: brief bullets */}
            <div className="space-y-6">
              {[
                ["Who We Are", "Diversified group across logistics, distribution, software/IT, clean energy and trading."],
                ["How We Work", "Domain experts lead each unit—reliable execution, governance, and innovation."],
                ["Where We Operate", "SEA, Indian Sub-continent, Middle East, USA & UK."],
                ["Why It Matters", "Sustainable growth, transparent operations, and trusted delivery."],
              ].map(([title, body]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{body}</p>
                </article>
              ))}

              <a
                href="/services"
                className="inline-flex w-max items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700"
              >
                Explore Services →
              </a>
            </div>

            {/* Right: 2×2 mosaic with a slight zig-zag */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/images/about-1.jpg" alt="Shipping" className="h-44 w-full rounded-xl object-cover md:h-52" />
                <img src="/images/about-3.jpg" alt="Renewables" className="h-44 w-full rounded-xl object-cover md:h-52 md:mt-6" />
              </div>
              <div className="space-y-4 md:pt-6">
                <img src="/images/about-2.jpg" alt="Logistics" className="h-44 w-full rounded-xl object-cover md:h-52" />
                <img src="/images/about-4.jpg" alt="Technology" className="h-44 w-full rounded-xl object-cover md:h-52" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
