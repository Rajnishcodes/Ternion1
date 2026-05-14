import React from "react";
import { motion } from "framer-motion";
import { WaterBackground } from "../components/WaterBackground";
import { Home, Building2, Factory, Droplets } from "lucide-react";

/* ================= SOLUTIONS DATA ================= */

const solutions = [
  {
    icon: Home,
    title: "Residential Systems",
    description:
      "Compact and intelligent RO systems designed for modern homes with premium purification and smart monitoring.",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description:
      "Scalable purification systems for offices, hotels, restaurants, and commercial environments.",
  },
  {
    icon: Factory,
    title: "Industrial Plants",
    description:
      "High-capacity industrial RO solutions engineered for manufacturing plants and heavy-duty operations.",
  },
  {
    icon: Droplets,
    title: "Field Deployments",
    description:
      "Portable and rugged water purification systems for remote areas, disaster response, and off-grid environments.",
  },
];

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

/* ================= COMPONENT ================= */

export default function SolutionsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100 min-h-screen py-32">

      {/* ================= WATER BACKGROUND ================= */}
      <WaterBackground />

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 pointer-events-none opacity-40">

        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-300/40 blur-3xl animate-pulse" />

        <div
          className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-cyan-300/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-200/60 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

      </div>

      {/* ================= GRID BACKGROUND ================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40 H80 M40 0 V80"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          className="text-gray-700"
        />
      </svg>

      {/* ================= WAVE ================= */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-40 animate-wave"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z"
          fill="rgba(56,189,248,0.25)"
        />
      </svg>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 mb-4 font-semibold">
            Solutions
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Water systems for{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              every scale
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-700/70 leading-relaxed">
            From a single tap to entire facilities — Ternion adapts to where
            clean water is needed most.
          </p>

        </motion.div>

        {/* ================= SOLUTION CARDS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 items-stretch">

          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative h-full"
              >

                {/* GLOW */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-40 transition-opacity duration-500" />

                {/* CARD */}
                <div className="relative h-full min-h-[420px] bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col">

                  {/* ICON */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shrink-0">

                    <Icon className="w-8 h-8" />

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-2xl font-bold text-slate-900 min-h-[64px]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-slate-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <button className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]">

                    Explore Solution

                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}