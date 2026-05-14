export function WaterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      {/* Gradient blobs */}
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
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 H80 M40 0 V80" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-700" />
      </svg>

      {/* Floating bubbles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const size = 10 + Math.random() * 20;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 10;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/70 backdrop-blur border border-white/50"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: `-${size}px`,
              animation: `bubble ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}

      {/* Wave */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-40 animate-wave"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z"
          fill="rgba(56,189,248,0.3)"
        />
      </svg>
    </div>
  );
}