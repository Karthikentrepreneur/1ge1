import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto w-full max-w-7xl px-6 py-10">
          <h1 className="text-3xl font-semibold text-gray-900">Contact</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Let’s talk partnerships, sourcing, and growth.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact card */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Global HQ</h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>1 Global Enterprises Pte Ltd</strong><br />
                  #03-01, Keppel Distripark,<br />
                  511 Kampong Bahru Road,<br />
                  Singapore 099447
                </p>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <a href="tel:+6569080838" className="hover:text-sky-600">+65 69080838</a><br />
                  <a href="tel:+6569080849" className="hover:text-sky-600">+65 69080849</a><br />
                  <a href="tel:+6598177292" className="hover:text-sky-600">+65 98177292</a><br />
                  <a href="mailto:jp@1ge.sg" className="hover:text-sky-600">jp@1ge.sg</a>
                </div>
              </div>

              {/* Simple inline form */}
              <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-3" onSubmit={(e)=>e.preventDefault()}>
                <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Your name" />
                <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Email" />
                <textarea className="h-28 w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Message" />
                <button className="rounded-md bg-sky-600 px-5 py-2 text-white hover:bg-sky-700">Send</button>
              </form>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="1GE Map"
                className="h-[420px] w-full md:h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  "https://www.google.com/maps/d/embed?mid=1E8g8gqlYKap5hnxPvKVgGahQ-WsU0AM&ehbc=2E312F&noprof=1" +
                  encodeURIComponent(
                    "1 Global Enterprises Pte Ltd, #03-01 Keppel Distripark, 511 Kampong Bahru Road, Singapore 099447"
                  ) +
                  "&output=embed&z=15"
                }
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow">
                Global HQ — Singapore
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
