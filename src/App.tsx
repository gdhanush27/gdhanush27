import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { portfolioConfig } from "./portfolio.config";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <Loader
            name={portfolioConfig.basics.name}
            onDone={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Decorative background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-[22rem] w-[22rem] rounded-full bg-cyan-500/20 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-pink-500/15 blur-3xl animate-blob [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
