import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Soft gradient background accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-sky-200/60 to-emerald-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-200/50 to-cyan-200/40 blur-3xl"
        />

        <section className="relative mx-auto w-full max-w-7xl px-6 py-12">
          <h1 className="text-3xl font-semibold text-gray-900">Contact</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Let’s talk partnerships, sourcing, and growth. We usually reply within one business day.
          </p>

          {/* Content grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* LEFT: HQ card + quick contacts + form */}
            <div className="space-y-6">
              {/* HQ card */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-gray-900">Global HQ</h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>1 Global Enterprises Pte Ltd</strong>
                  <br />#03-01, Keppel Distripark,
                  <br />511 Kampong Bahru Road,
                  <br />Singapore 099447
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700">
                  <a href="tel:+6569080838" className="inline-flex items-center gap-2 hover:text-sky-600">
                    {/* phone icon */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.23a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +65 69080838
                  </a>
                  <a href="tel:+6569080849" className="inline-flex items-center gap-2 hover:text-sky-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.23a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +65 69080849
                  </a>
                  <a href="tel:+6598177292" className="inline-flex items-center gap-2 hover:text-sky-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-1.23a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +65 98177292
                  </a>
                  <a href="mailto:jp@1ge.sg" className="inline-flex items-center gap-2 hover:text-sky-600">
                    {/* mail icon */}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16v16H4z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                    jp@1ge.sg
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <form
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-1">
                    <span className="text-sm text-gray-700">Name</span>
                    <input required className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Your name" />
                  </label>
                  <label className="flex flex-col gap-1">
                    <span className="text-sm text-gray-700">Email</span>
                    <input required type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="you@example.com" />
                  </label>
                </div>
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-gray-700">Message</span>
                  <textarea required className="h-28 w-full rounded-md border border-gray-300 px-3 py-2" placeholder="How can we help?" />
                </label>
                <button className="mt-1 inline-flex items-center gap-2 rounded-md bg-sky-600 px-5 py-2 text-white shadow hover:bg-sky-700">
                  Send
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>

            {/* RIGHT: Map */}
            <div className="h-[420px] md:h-auto">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white/70 shadow-sm backdrop-blur">
                <iframe
                  title="1 Global Enterprises Pte Ltd – Map"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={
                    "https://www.google.com/maps?q=" +
                    encodeURIComponent(
                      "1 Global Enterprises Pte Ltd, #03-01 Keppel Distripark, 511 Kampong Bahru Road, Singapore 099447"
                    ) +
                    "&output=embed&z=15"
                  }
                />
                {/* optional label pill */}
                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow">
                  Global HQ — Singapore
                </div>
              </div>
            </div>
          </div>

          {/* quick stats / reassurance strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-gray-100 bg-white/70 p-5 text-center shadow-sm backdrop-blur sm:grid-cols-4">
            {[
              ["16+", "Countries"],
              ["700+", "Employees"],
              ["6", "Business Verticals"],
              ["24×7", "Support"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-gray-900">{n}</div>
                <div className="text-xs text-gray-600">{l}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
