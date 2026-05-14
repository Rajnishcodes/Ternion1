import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { WaterBackground } from "../components/WaterBackground"; // ✅ ADDED

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">

      {/* ✅ FULL BACKGROUND EFFECT (FIXED) */}
      <WaterBackground />

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] bg-purple-300/40 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-cyan-300/40 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* ================= HEADER ================= */}
      <section className="relative z-10 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <p className="text-xs uppercase tracking-[0.3em] text-aqua mb-4">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue">
            Let's build a{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              cleaner future
            </span>
          </h1>

          <p className="mt-6 text-lg text-deep-blue/60">
            Have a question, project, or partnership in mind? Our team typically
            responds within one business day.
          </p>
        </div>
      </section>

      {/* ================= FORM + ADDRESS ================= */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-8">

          {/* ===== FORM ===== */}
          <div className="glass rounded-3xl p-8 md:p-10 shadow-elegant">
            <h2 className="text-2xl font-bold text-deep-blue">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-deep-blue/60">
              Fill out the form and we'll get back to you shortly.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">

              <div>
                <label className="text-xs font-semibold uppercase text-deep-blue/70">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-2xl bg-white/70 border px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-deep-blue/70">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl bg-white/70 border px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-300 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-deep-blue/70">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your water needs..."
                  className="mt-2 w-full rounded-2xl bg-white/70 border px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-300 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
              >
                <Send size={16} />
                {submitted ? "Message sent!" : "Send message"}
              </button>
            </form>
          </div>

          {/* ===== CONTACT INFO ===== */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-deep-blue">
              Reach us directly
            </h2>

            <p className="text-sm text-deep-blue/60">
              Office hours, headquarters, and direct lines for sales and support.
            </p>

            {[
              {
                icon: MapPin,
                title: "Headquarters",
                lines: [
                  "Ternion Water Labs",
                  "204 Aqua Boulevard, Bengaluru 560001, India",
                ],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["+91 80 4000 9000", "Mon–Fri, 9am – 6pm IST"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["hello@ternion.water", "support@ternion.water"],
              },
              {
                icon: Clock,
                title: "Office hours",
                lines: [
                  "Monday – Friday: 9:00 – 18:00",
                  "Saturday: 10:00 – 14:00",
                ],
              },
            ].map((c) => {
              const Icon = c.icon;

              return (
                <div
                  key={c.title}
                  className="glass rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>

                  <div>
                    <div className="font-semibold text-deep-blue">
                      {c.title}
                    </div>
                    {c.lines.map((l) => (
                      <div key={l} className="text-sm text-deep-blue/70">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="relative z-10 pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="glass rounded-[2.5rem] p-3 shadow-elegant overflow-hidden">
            <div className="rounded-[2rem] overflow-hidden h-[420px]">
              <iframe
                title="Ternion Headquarters"
                src="https://www.google.com/maps?q=Bengaluru&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}