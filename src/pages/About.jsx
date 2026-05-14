import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Award,
  Trophy,
  Users,
  Globe2,
  Quote,
} from "lucide-react";


/* ================= DATA ================= */

const sections = [
  {
    eyebrow: "Our Story",
    title: "Born from a simple belief",
    body: "Clean water shouldn't be a luxury and the technology that delivers it shouldn't feel industrial. We set out to build water systems with the polish of a premium device and the soul of a sustainability movement.",
    image: "/about-1.png",
    side: "left",
  },
  {
    eyebrow: "Our Mission",
    title: "Engineering every drop with intelligence",
    body: "From IoT-driven monitoring to self-optimizing membranes, every Ternion system is designed to learn your water and adapt. We blend advanced filtration science with intuitive design, so purity feels effortless.",
    image: "/about-2.png",
    side: "right",
  },
  {
    eyebrow: "Our Impact",
    title: "From skyscrapers to remote villages",
    body: "Today, Ternion systems quietly serve homes, hotels, hospitals, and off-grid communities across 32 countries. Every drop monitored, every filter optimized, every system built to last and to give back.",
    image: "/about-3.png",
    side: "left",
  },
];

/* ================= ANIMATIONS ================= */

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">

      {/* ===== BACKGROUND EFFECT ===== */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-300/40 blur-3xl animate-pulse" />

        <div
          className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-cyan-300/30 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-200/60 blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        {/* Grid */}
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

        {/* Wave */}
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
      </div>

      {/* ================= HEADER ================= */}
      <section className="about-header relative z-10 pt-32 pb-20 px-6 md:px-10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-aqua mb-4">
            About
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-deep-blue leading-tight">
            Reimagining water for a{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              sustainable future
            </span>
          </h1>

          <div className="mt-6 max-w-4xl mx-auto space-y-5 text-lg text-deep-blue/60 leading-relaxed">

            <p>
              Wateroam’s ultrafiltration-based systems demonstrate how thoughtful
              engineering can respond effectively to real-world challenges.
            </p>

          </div>

        </div>
      </section>

      {/* ================= SECTIONS ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-12 space-y-28">

        {sections.map((s, i) => {
          const imageLeft = s.side === "left";
          const isLast = i === sections.length - 1;

          return (
            <section
              key={i}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >

              {/* IMAGE */}
              <motion.div
                variants={imageLeft ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={imageLeft ? "lg:order-1" : "lg:order-2"}
              >
                <div className="relative group">

                  <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-3xl rounded-[2.5rem] group-hover:opacity-50 transition-opacity" />

                  <div className="relative overflow-hidden rounded-[2rem] shadow-elegant glass p-2">

                    <img
                      src={s.image}
                      alt={s.title}
                      className={`w-full rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105 ${
                        isLast ? "max-h-[420px]" : ""
                      }`}
                    />

                  </div>
                </div>
              </motion.div>

              {/* TEXT */}
              <motion.div
                variants={imageLeft ? fadeRight : fadeLeft}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
                className={imageLeft ? "lg:order-2" : "lg:order-1"}
              >

                <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
                  {s.eyebrow}
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-deep-blue leading-tight">
                  {s.title}
                </h2>

                <p className="mt-5 text-deep-blue/75 text-lg leading-relaxed">
                  {s.body}
                </p>

              </motion.div>
            </section>
          );
        })}
      </div>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
              Purpose
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep-blue">
              Mission &{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                icon: Target,
                title: "Our Mission",
                body: "To engineer intelligent, sustainable water purification systems that make safe, premium-quality water accessible to every home, business, and community on the planet.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                body: "A world where every drop is monitored, optimized, and respected where advanced water technology blends seamlessly into everyday life and protects the planet for generations.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={i === 0 ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative h-full">

                  <div className="absolute -inset-2 bg-gradient-brand opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-40 transition-opacity" />

                  <div className="relative h-full glass rounded-[2rem] p-8 md:p-10 shadow-elegant transition-transform duration-500 group-hover:-translate-y-1">

                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-brand text-deep-blue shadow-glow">
                      <item.icon className="w-7 h-7" />
                    </div>

                    <h3 className="mt-6 text-2xl md:text-3xl font-bold text-deep-blue">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-deep-blue/75 leading-relaxed">
                      {item.body}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
              Voices
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep-blue">
              What our{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                clients say
              </span>
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                quote:
                  "Ternion transformed our hotel's water experience. Guests notice the difference and our sustainability metrics have never looked better.",
                name: "Aarav Mehta",
                role: "GM, Lumen Suites",
              },
              {
                quote:
                  "The IoT dashboard alone is worth it. We catch issues before they become problems across 14 facilities.",
                name: "Sara Lindqvist",
                role: "Head of Ops, NordPure",
              },
              {
                quote:
                  "Reliable, beautifully engineered, and genuinely sustainable. It feels like the Apple of water systems.",
                name: "Daniel Okafor",
                role: "Founder, Verdant Homes",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative h-full">

                  <div className="relative h-full glass rounded-[2rem] p-8 shadow-elegant transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-glow">

                    <Quote className="w-8 h-8 text-aqua opacity-60" />

                    <p className="mt-4 text-deep-blue/80 leading-relaxed italic">
                      "{t.quote}"
                    </p>

                    <div className="mt-6 pt-6 border-t border-deep-blue/10">

                      <div className="font-bold text-deep-blue">
                        {t.name}
                      </div>

                      <div className="text-sm text-deep-blue/60">
                        {t.role}
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
              Milestones
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep-blue">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                achievements
              </span>
            </h2>

          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Globe2,
                value: "32+",
                label: "Countries served",
              },
              {
                icon: Users,
                value: "250K+",
                label: "People with cleaner water",
              },
              {
                icon: Award,
                value: "18",
                label: "Industry awards",
              },
              {
                icon: Trophy,
                value: "ISO 9001",
                label: "Certified excellence",
              },
            ].map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="group relative h-full">

                  <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-50 transition-opacity" />

                  <div className="relative h-full glass rounded-[2rem] p-8 text-center shadow-elegant transition-transform duration-500 group-hover:-translate-y-1">

                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-brand text-deep-blue shadow-glow">
                      <a.icon className="w-7 h-7" />
                    </div>

                    <div className="mt-5 text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                      {a.value}
                    </div>

                    <div className="mt-2 text-deep-blue/70 text-sm">
                      {a.label}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= ADVISORY BOARD ================= */}
<section className="relative z-10 py-20">
  <div className="mx-auto max-w-7xl px-4 md:px-6">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >

      <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">
        Advisory Board
      </span>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-deep-blue">
        Meet our{" "}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          advisors
        </span>
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-deep-blue/65 text-lg leading-relaxed">
        Industry experts, innovators, and sustainability leaders helping shape
        the next generation of intelligent water solutions.
      </p>

    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          name: "Michael Foster",
          role: "Global Water Strategist",
          image: "/advisor-1.png",
        },
        {
          name: "Olivia Chen",
          role: "Environmental Advisor",
          image: "/advisor-1.png",
        },
        {
          name: "James Peterson",
          role: "Innovation Consultant",
          image: "/advisor-1.png",
        },
        {
          name: "Sophia Laurent",
          role: "Sustainability Director",
          image: "/advisor-1.png",
        },
      ].map((advisor, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="group relative h-full">

            <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-50 transition-opacity" />

            <div className="relative h-full overflow-hidden glass rounded-[2rem] shadow-elegant transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-glow">

              <div className="relative overflow-hidden">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <h3 className="text-xl font-bold text-deep-blue">
                      {advisor.name}
                    </h3>

                    <p className="mt-1 text-sm text-deep-blue/60">
                      {advisor.role}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="relative z-10 py-20 mt-10 mb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 p-10 md:p-14 text-center shadow-elegant"
          >

            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500 blur-3xl" />
            </div>

            <div className="relative z-10">

              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Let's build a cleaner future together
              </h2>

              <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Partner with Ternion to bring premium, intelligent water systems
                to your home, business, or community.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Get in touch
              </Link>

            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}