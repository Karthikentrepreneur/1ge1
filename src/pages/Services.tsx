import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Shipping & Logistics",
    points: ["Ocean/Air Freight", "Warehousing & 3PL", "Customs & Compliance"],
  },
  {
    title: "Product Distribution",
    points: ["FMCG & Industrial", "Channel Development", "B2B/B2C Fulfilment"],
  },
  {
    title: "Software & IT",
    points: ["Web/Mobile Apps", "Cloud & Integrations", "Analytics & Support"],
  },
  {
    title: "Renewable / Clean Energy",
    points: ["ISCC-certified UCO", "High-FFA veg oil wastes", "Transport/aviation/heating"],
  },
  {
    title: "Fatty Acids",
    points: ["Stearic Acid (rubber grade)", "Hydrogenated palm stearine/waxes", "C16–C18, methyl palmitate/oleate"],
  },
  {
    title: "Soap Noodles",
    points: ["Cosmetic & detergent grades", "Toilet soap manufacturing", "Packaging & logistics"],
  },
  {
    title: "International Trading",
    points: ["Sourcing & procurement", "Hedging & documentation", "End-to-end visibility"],
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
          <h1 className="text-3xl font-semibold text-gray-900">Services</h1>
          <p className="mt-2 max-w-3xl text-gray-600">Brief overview of what we deliver across our verticals.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-5">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
