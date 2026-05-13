import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { portfolioConfig } from "../portfolio.config";

export default function Projects() {
  const { projects } = portfolioConfig;
  const meta = portfolioConfig.sections.projects;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="projects"
      eyebrow={meta.eyebrow}
      title={meta.heading}
      description={meta.description}
    >
      <div className="grid gap-5">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className={`shine relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                isOpen
                  ? "border-violet-400/40 bg-gradient-to-br from-violet-500/[0.08] to-cyan-400/[0.04]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left p-5 sm:p-7"
                data-hover
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-accent-cyan">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs text-slate-500">/</span>
                      <span className="font-mono text-xs text-slate-500">
                        {p.keywords[0]}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg sm:text-2xl tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-3xl">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg border border-white/10 hover:border-white/40 hover:text-white transition"
                        aria-label="GitHub repo"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg border border-white/10 hover:border-accent-cyan hover:text-accent-cyan transition"
                        aria-label="Live site"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="p-2 rounded-lg border border-white/10"
                    >
                      <FiChevronDown />
                    </motion.span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.keywords.map((k) => (
                    <span
                      key={k}
                      className="text-xs font-mono rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-slate-300"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-7 pb-7 -mt-1">
                      <div className="border-t border-white/10 pt-5">
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {p.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-sm text-slate-300 leading-relaxed"
                            >
                              <span className="select-none text-accent-pink mt-1 text-xs">
                                ◆
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
