import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import { Hero } from "./components/Hero";
import {
  Solutions,
  Technology,
  ROSystems,
  Impact,
} from "./components/Sections";
import { Footer } from "./components/Footer";

/* ================= LAZY LOADING ================= */

const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const SolutionsPage = lazy(() => import("./pages/Solution"));

/* ================= LOADER ================= */

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="h-14 w-14 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
    </div>
  );
}

/* ================= APP ================= */

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">

        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <main className="flex-grow">

          <Suspense fallback={<PageLoader />}>

            <Routes>

              {/* HOME */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Solutions />
                    <Technology />
                    <ROSystems />
                    <Impact />
                  </>
                }
              />

              {/* PAGES */}
              <Route
                path="/products"
                element={<Products />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/solutions"
                element={<SolutionsPage />}
              />

            </Routes>

          </Suspense>

        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;