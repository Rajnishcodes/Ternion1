import React from "react";

/* ================= DATA ================= */

const solutions = [
  { icon: "M3 12l2-2 4 4 8-8 4 4", title: "Residential", desc: "Reliable ultrafiltration systems designed for homes, schools, and small facilities, providing consistent access to safe drinking water for daily use." },
  { icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h2M13 9h2M9 13h2M13 13h2", title: "Commercial", desc: "Scalable solutions for clinics, offices, and institutions that require dependable, continuous water supply with easy operation and maintenance." },
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "Industrial", desc: "High-capacity modular systems engineered to serve communities, shared facilities, and light industrial applications with flexible deployment." },
  { icon: "M12 22s-8-4.5-8-12a8 8 0 1116 0c0 7.5-8 12-8 12z", title: "Field & Rural", desc: "Portable, non-electric filtration systems built for rapid deployment in emergencies and remote, off-grid environments." },
];

const tech = [
  { step: "01", title: "Water Intake", desc: "Water is drawn from available sources such as rivers, wells, or storage tanks, enabling flexible use in diverse environments." },
  { step: "02", title: "Pre-Filtration", desc: "Initial filtration removes larger particles, sediments, and debris to protect the core membrane system." },
  { step: "03", title: "Ultrafiltration Membrane", desc: "Proprietary hollow-fibre membranes remove bacteria, protozoa, and viruses to deliver safe drinking water." },
  { step: "04", title: "Physical Filtration Process", desc: "The system operates without chemicals or electricity, relying on pressure-driven filtration for consistent performance." },
  { step: "05", title: "Safe Water Output", desc: "Clean, safe water is delivered for immediate use across households, communities, and emergency settings." },
];

const impact = [
  { v: "7+ Countries", l: "Implemented across Asia-Pacific regions including the Philippines, Indonesia, Cambodia, Vanuatu, Malaysia, Lao PDR, and Myanmar." },
  { v: "Emergency Response Capability", l: "Used in disaster responses such as typhoons, earthquakes, and cyclones, enabling fast access to safe drinking water in off-grid conditions." },
  { v: "Community Reach", l: "Large-scale programmes, such as in Malaysia, have delivered clean water to thousands across multiple rural communities." },
  { v: "Scalable Impact", l: "Flexible system configurations support use cases ranging from individual households to healthcare facilities and community-level supply." },
];

/* ================= SHARED BACKGROUND ================= */

const SectionBg = () => (
  <>
    {/* Base Gradient */}
    <div className="absolute inset-0 bg-gradient-hero" />

    {/* Soft overlay (matches screenshot softness) */}
    <div className="absolute inset-0 bg-white/40" />

    {/* Glow blobs */}
    <div className="absolute top-0 left-1/3 h-72 w-72 bg-lavender/30 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-1/3 h-72 w-72 bg-aqua/30 blur-3xl rounded-full" />
  </>
);

/* ================= SOLUTIONS ================= */

export function Solutions() {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden">

      <SectionBg />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
            Solutions
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-deep-blue">
            Modular water filtration systems for every scale{" "}
            <span className="text-gradient">every scale</span>
          </h2>

          <p className="mt-4 text-deep-blue/70 text-lg">
            From households to humanitarian response — safe water, delivered through adaptable ultrafiltration systems.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className="group glass rounded-3xl p-6 hover:-translate-y-3 hover:shadow-glow transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow group-hover:scale-110 transition">
                <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2">
                  <path d={s.icon} />
                </svg>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-deep-blue">
                {s.title}
              </h3>

              <p className="mt-2 text-sm text-deep-blue/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TECHNOLOGY ================= */

export function Technology() {
  return (
    <section id="technology" className="relative py-32 overflow-hidden">

      <SectionBg />

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="h-[500px] w-[500px] bg-aqua/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
          Technology
        </span>

        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-deep-blue">
          Advanced ultrafiltration{" "}
          <span className="text-gradient">Engineered for Reliability</span>
        </h2>

        <p className="mt-4 text-deep-blue/70">
          Every drop is purified through precision hollow-fibre membrane technology designed for safety, portability, and performance.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-20">
          {tech.map((t) => (
            <div key={t.step}>
              <div className="mx-auto mb-5 relative h-24 w-24 rounded-full glass shadow-glow flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-gradient">
                  {t.step}
                </span>
                <div className="absolute inset-0 rounded-full border border-lavender/40 animate-spin-slow" />
              </div>

              <div className="glass rounded-2xl p-5">
                <h3 className="font-display font-semibold text-deep-blue">
                  {t.title}
                </h3>
                <p className="mt-2 text-xs text-deep-blue/70">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= RO SYSTEM ================= */

export function ROSystems() {
  return (
    <section id="ro" className="relative py-32 overflow-hidden">

      <SectionBg />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CARD */}
        <div className="relative bg-gradient-deep text-white rounded-[2.5rem] p-10 shadow-elegant overflow-hidden">

          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 h-64 w-64 bg-lavender/40 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-aqua/40 blur-3xl rounded-full" />
          </div>

          <div className="relative">
            <h3 className="font-display text-4xl font-bold">Ultrafiltration System Platform</h3>

            <p className="mt-4 text-white/70 max-w-sm">
              Wateroam systems use proprietary hollow-fibre ultrafiltration membranes across all product families, with configurations adapted for portability, household use, or community-scale deployment.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                ["Technology", "Ultrafiltration (Hollow-Fibre Membrane)"],
                ["Operation", "Non-electric / Pressure-driven"],
                ["Deployment", "Portable, modular, and scalable systems"],
                ["Applications", "Households, healthcare facilities, communities, and emergency response"],
              ].map(([k, v]) => (
                <div key={k} className="glass-dark rounded-xl p-3">
                  <div className="text-[10px] uppercase text-white/50">{k}</div>
                  <div className="font-display font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
            FILTRATION SYSTEMS
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-deep-blue">
            Engineered for <span className="text-gradient">safe reliable water purification</span>
          </h2>

          <ul className="mt-8 space-y-4">
            {[
              "Removes bacteria, viruses, and protozoa through hollow-fibre ultrafiltration membranes",
              "Non-electric operation enables use in off-grid and emergency environments",
              "Rapid deployment with minimal setup requirements",
              "Designed for partner-led operation and maintenance in the field",
            ].map((f) => (
              <li key={f} className="flex gap-3 items-start">
                <span className="mt-1 h-6 w-6 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs">
                  ✓
                </span>
                <span className="text-deep-blue/80">{f}</span>
              </li>
            ))}
          </ul>

          {/* ✅ CTA BUTTON (NEW) */}
          <div className="mt-10">
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow hover:shadow-aqua transition-all duration-300 hover:-translate-y-1">
              Explore Filtration Systems
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= IMPACT ================= */

export function Impact() {
  return (
    <section id="impact" className="relative pt-32 pb-8 overflow-hidden">

      <SectionBg />

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="bg-gradient-deep rounded-[2.5rem] p-12 md:p-16 text-white shadow-elegant relative overflow-hidden">

          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-20 -left-20 h-96 w-96 bg-lavender/30 blur-3xl rounded-full animate-glow" />
            <div className="absolute -bottom-20 -right-20 h-96 w-96 bg-aqua/30 blur-3xl rounded-full animate-glow" />
          </div>

          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Delivering impact across diverse communities
            </h2>

            <p className="mt-4 text-white/70 max-w-xl">
              Wateroam solutions have been deployed across humanitarian emergencies and community programmes through partnerships with NGOs, governments, and institutions.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {impact.map((s) => (
                <div key={s.l} className="glass-dark rounded-2xl p-6">
                  <div className="font-display text-4xl font-bold text-gradient">
                    {s.v}
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}