import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { portfolioConfig } from "../portfolio.config";

export default function Navbar() {
  const { brand, links, cta } = portfolioConfig.navbar;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-ink-900/70 backdrop-blur-xl shadow-lg shadow-black/30"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-sm text-slate-200 group-hover:border-accent-cyan/50 transition">
              <span className="text-accent-cyan/70">~/</span>
              <span className="font-medium">{brand}</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={cta.href}
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-ink-950 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition"
          >
            {cta.label}
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiX className="text-2xl" /> : <HiMenuAlt4 className="text-2xl" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 rounded-2xl border border-white/10 bg-ink-900/90 backdrop-blur-xl p-2"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
