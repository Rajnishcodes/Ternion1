import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { Hero } from "./components/Hero";
import {
  Solutions,
  Technology,
  ROSystems,
  Impact,
} from "./components/Sections";
import { Footer } from "./components/Footer";

/* ✅ IMPORT YOUR PRODUCTS PAGE */
import Products from "./pages/Products"; 
import Contact from "./pages/Contact"; 
import About from "./pages/About";
import SolutionsPage from "./pages/Solution";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />

        <main className="flex-grow">

          <Routes>

            {/* ✅ LANDING PAGE */}
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

            {/*  PAGE (SEPARATE) */}
            <Route path="/products" element={<Products />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/solutions" element={<SolutionsPage />} />

          </Routes>

        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;