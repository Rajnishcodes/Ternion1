import { useEffect, useState } from "react";
import { WaterBackground } from "./WaterBackground";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = Math.min(y * 0.25, 120);
  const fade = Math.max(1 - y / 600, 0);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100"
    >
      <WaterBackground />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div
          className="relative z-10"
          style={{
            opacity: fade,
            transform: `translateY(${y * 0.1}px)`
          }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-medium text-blue-900 shadow-md animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            Smart Water Technology · 2026
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-blue-900 animate-fade-up">
            Clean Water Anywhere{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              When It Matters Most
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg text-blue-900/70 leading-relaxed animate-fade-up">
            Delivering safe drinking water through advanced ultrafiltration technology—designed for emergencies, rural communities, and everyday resilience.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Explore Solutions
              <span className="transition group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#ro"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-blue-900 hover:bg-white transition"
            >
              View RO Systems
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "Rapid", l: "Setup" },
              { v: "Portable", l: "Non-Electric" },
              { v: "Proven", l: "Deployments" },
            ].map((s) => (
              <div key={s.l} className="bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-md">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  {s.v}
                </div>
                <div className="text-xs text-blue-900/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="relative h-[520px] lg:h-[640px]"
          style={{ transform: `translateY(${-parallax}px)` }}
        >
          {/* Glow Background */}
          <div className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-30 blur-3xl animate-pulse" />

          {/* Rotating Rings */}
          <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full border border-purple-300 animate-spin-slow" />
          <div className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full border border-cyan-300 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />

          {/* RO Image */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <img
              src="/ro-system.png"
              alt="RO System"
              className="relative z-10 h-full w-auto max-h-[600px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating Card Left */}
          <div className="absolute bottom-12 left-0 bg-white/70 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg animate-float">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white">
                💧
              </div>
              <div>
                <div className="text-xs text-blue-900/60">Live TDS</div>
                <div className="font-bold text-blue-900">12 ppm</div>
              </div>
            </div>
          </div>

          {/* Floating Card Right */}
          <div className="absolute top-1/2 right-0 bg-white/70 backdrop-blur-md rounded-2xl px-4 py-3 animate-float">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 animate-pulse" />
              <div>
                <div className="text-xs text-blue-900/60">System</div>
                <div className="font-bold text-blue-900 text-sm">Optimal</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}