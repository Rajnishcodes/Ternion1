import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Droplets,
  Building2,
  Factory,
  Home as HomeIcon,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WaterBackground } from "../components/WaterBackground";

/* ================= DATA ================= */

const categories = [
  { id: "all", label: "All Systems", icon: Droplets },
  { id: "residential", label: "Residential", icon: HomeIcon },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "industrial", label: "Industrial", icon: Factory },
];

const products = [
  {
    id: 1,
    name: "TRN-Pure 7",
    category: "residential",
    capacity: 75,
    usage: "Home",
    stages: 7,
    image: "/product1.png",
  },
  {
    id: 2,
    name: "TRN-Flow 200",
    category: "commercial",
    capacity: 200,
    usage: "Office",
    stages: 6,
    image: "/product2.png",
  },
  {
    id: 3,
    name: "TRN-Industrial X",
    category: "industrial",
    capacity: 5000,
    usage: "Plant",
    stages: 8,
    image: "/product3.png",
  },
  {
    id: 4,
    name: "TRN-Compact 50",
    category: "residential",
    capacity: 50,
    usage: "Home",
    stages: 5,
    image: "/product4.png",
  },
  {
    id: 5,
    name: "TRN-Hydra 1000",
    category: "commercial",
    capacity: 1000,
    usage: "Hotel",
    stages: 7,
    image: "/product5.png",
  },
  {
    id: 6,
    name: "TRN-Field Pro",
    category: "industrial",
    capacity: 800,
    usage: "Field",
    stages: 6,
    image: "/product6.png",
  },
];

/* ================= COMPONENT ================= */

export default function ROSystemsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [minCap, setMinCap] = useState(0);
  const [usage, setUsage] = useState("any");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;

      if (
        query &&
        !p.name.toLowerCase().includes(query.toLowerCase())
      )
        return false;

      if (p.capacity < minCap) return false;

      if (usage !== "any" && p.usage !== usage) return false;

      return true;
    });
  }, [query, cat, minCap, usage]);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100">

      {/* ================= WATER BACKGROUND ================= */}
      <WaterBackground />

      {/* ================= GLOW EFFECT ================= */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 bg-purple-400/30 blur-3xl rounded-full animate-pulse" />

        <div className="absolute bottom-0 right-0 h-72 w-72 bg-cyan-400/30 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* ================= TOOLBAR ================= */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md text-sm font-semibold text-deep-blue hover:shadow-lg transition"
          >
            <Filter size={16} />
            Filters
          </button>

          <p className="text-sm text-gray-500">
            {filtered.length} Products
          </p>
        </div>

        <div className="flex gap-8">

          {/* ================= SIDEBAR ================= */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 280 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block shrink-0 overflow-hidden"
              >
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 sticky top-28 shadow-lg">

                  <div className="flex justify-between mb-6">
                    <h3 className="font-semibold">Filters</h3>

                    <button onClick={() => setShowFilters(false)}>
                      <X size={18} />
                    </button>
                  </div>

                  {/* SEARCH */}
                  <div className="mb-6 relative">
                    <Search
                      className="absolute left-3 top-3 text-gray-400"
                      size={16}
                    />

                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-9 pr-3 py-2 rounded-lg border text-sm"
                    />
                  </div>

                  {/* CATEGORY */}
                  <div className="mb-6">
                    <p className="text-xs uppercase mb-2 text-gray-500">
                      Category
                    </p>

                    <div className="space-y-2">
                      {categories.map((c) => {
                        const Icon = c.icon;

                        return (
                          <button
                            key={c.id}
                            onClick={() => setCat(c.id)}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                              cat === c.id
                                ? "bg-blue-500 text-white"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <Icon size={14} />
                            {c.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* CAPACITY */}
                  <div className="mb-6">
                    <p className="text-xs uppercase mb-2 text-gray-500">
                      Capacity
                    </p>

                    <input
                      type="range"
                      min={0}
                      max={5000}
                      value={minCap}
                      onChange={(e) =>
                        setMinCap(Number(e.target.value))
                      }
                      className="w-full"
                    />

                    <p className="text-sm mt-1">
                      {minCap}+ GPD
                    </p>
                  </div>

                  {/* USAGE */}
                  <div className="mb-6">
                    <p className="text-xs uppercase mb-2 text-gray-500">
                      Usage
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "any",
                        "Home",
                        "Office",
                        "Hotel",
                        "Plant",
                        "Field",
                      ].map((u) => (
                        <button
                          key={u}
                          onClick={() => setUsage(u)}
                          className={`px-3 py-1 rounded-full text-xs transition ${
                            usage === u
                              ? "bg-black text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* RESET */}
                  <button
                    onClick={() => {
                      setQuery("");
                      setCat("all");
                      setMinCap(0);
                      setUsage("any");
                    }}
                    className="w-full py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition"
                  >
                    Reset
                  </button>

                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* ================= PRODUCTS ================= */}
          <div className="flex-1">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {filtered.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                >

                 {/* PRODUCT IMAGE */}
                 <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-100 h-56 flex items-center justify-center p-6">

                  <img
                   src={p.image}
                   alt={p.name}
                   className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-blue-600 shadow">
                  {p.category}
                  </div>

                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-6">

                    <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <Droplets size={18} />
                    </div>

                    <h4 className="mt-4 text-xl font-bold text-gray-800">
                      {p.name}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Advanced purification technology
                    </p>

                    {/* SPECS */}
                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">

                      <div className="bg-gray-50 rounded-2xl py-3">
                        <p className="text-xs text-gray-500 uppercase">
                          GPD
                        </p>

                        <p className="font-bold text-gray-800 mt-1">
                          {p.capacity}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl py-3">
                        <p className="text-xs text-gray-500 uppercase">
                          Stages
                        </p>

                        <p className="font-bold text-gray-800 mt-1">
                          {p.stages}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl py-3">
                        <p className="text-xs text-gray-500 uppercase">
                          Use
                        </p>

                        <p className="font-bold text-gray-800 mt-1">
                          {p.usage}
                        </p>
                      </div>

                    </div>

                    {/* BUTTON */}
                    <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                      View Details
                    </button>

                  </div>

                </motion.div>
              ))}

              {/* EMPTY STATE */}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-20 text-gray-500">
                  No products found
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}