import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 

const nav = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" }, // 
  
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          {/* Logo */}
<a href="/" className="flex items-center gap-3 group h-12">
  <img
    src="/ternion-logo.png"
    alt="Ternion"
    className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
  />

  <span className="text-lg font-semibold tracking-tight text-gray-800">
    
  </span>
</a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) =>
              n.label === "Products" ? (
                <Link
                  key={n.label}
                  to={n.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all hover:after:w-full"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all hover:after:w-full"
                >
                  {n.label}
                </a>
              )
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full 
              bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md 
              hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md bg-white/40 border border-white/30"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d={
                    open
                      ? "M6 6l12 12M6 18L18 6"
                      : "M4 7h16M4 12h16M4 17h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-2 backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-4 flex flex-col gap-2 shadow-lg">
            {nav.map((n) =>
              n.label === "RO Systems" ? (
                <Link
                  key={n.label}
                  to={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-100 text-gray-700 text-sm font-medium"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-100 text-gray-700 text-sm font-medium"
                >
                  {n.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}