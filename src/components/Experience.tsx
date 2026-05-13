import Section from "./Section";
import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { portfolioConfig } from "../portfolio.config";

export default function Experience() {
  const { work } = portfolioConfig;
  const meta = portfolioConfig.sections.experience;

  return (
    <Section
      id="experience"
      eyebrow={meta.eyebrow}
      title={meta.heading}
      description={meta.description}
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-cyan-400/40 to-transparent" />

        <div className="space-y-8">
          {work.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2 sm:left-4 top-6 h-5 w-5 rounded-full bg-ink-950 border-2 border-violet-400 shadow-[0_0_0_4px_rgba(124,92,255,0.15)]">
                <div className="h-full w-full rounded-full bg-violet-500 animate-pulse" />
              </div>

              <div className="glass glass-hover rounded-2xl p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl">
                      {w.position}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                      <FiBriefcase className="text-accent-cyan" />
                      <span className="font-medium">{w.company}</span>
                      <span className="text-slate-600">·</span>
                      <FiMapPin className="text-slate-500" />
                      <span className="text-slate-400">{w.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 whitespace-nowrap">
                    {w.startDate} — {w.endDate}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {w.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm sm:text-[0.95rem] text-slate-300 leading-relaxed"
                    >
                      <span className="select-none text-accent-cyan mt-1.5 text-xs">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
