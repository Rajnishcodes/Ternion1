import { Link } from "react-router-dom";
import logo from "/ternion-logo.png";

const LINKS = {
  Product: [
    { label: "Solutions", path: "/solutions" },
    { label: "Technology", path: "#" },
    { label: "Pricing", path: "/contact" },
    { label: "Case studies", path: "/about" },
  ],

  Company: [
    { label: "About", path: "/about" },
    { label: "Impact", path: "/impact" },
    { label: "Careers", path: "#" },
    { label: "Press", path: "#" },
  ],

  Resources: [
    { label: "Docs", path: "#" },
    { label: "", path: "#" },
    { label: "Support", path: "/contact" },
    { label: "Privacy", path: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-0 text-white overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900">

      {/* Top Wave */}
      <svg
        viewBox="0 0 1440 80"
        className="block w-full h-16 text-white -mt-16"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Background glow */}
      <div className="absolute top-20 -right-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>

          {/* LOGO BOX */}
          <div className="inline-flex items-center bg-white rounded-xl px-5 py-1 shadow-lg">

            <img
              src={logo}
              alt="Ternion"
              className="h-12 w-auto object-contain"
            />

          </div>

          <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs">
            Building smarter water systems for a better world.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            {[
              "M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.7 1 4.2 4.2 0 00-7.1 3.8A11.9 11.9 0 013 4.8a4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.4 8.4 0 012 18.7a11.9 11.9 0 006.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0022 5.8z",
              "M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
              "M12 2a10 10 0 100 20 10 10 0 000-20z",
            ].map((d, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-400/40 transition"
              >
                <svg width="15" height="15" fill="currentColor">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title}>

            <div className="text-sm font-semibold mb-4">
              {title}
            </div>

            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item.label}>

                  <Link
                    to={item.path}
                    className="text-sm text-white/60 hover:text-cyan-300 transition"
                  >
                    {item.label}
                  </Link>

                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">

          <div>
            © {new Date().getFullYear()} Ternion. All rights reserved.
          </div>

          <div className="flex gap-6">

            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}