import Section from "./Section";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { portfolioConfig } from "../portfolio.config";

export default function Awards() {
  const { awards } = portfolioConfig;
  const meta = portfolioConfig.sections.awards;

  return (
    <Section
      id="awards"
      eyebrow={meta.eyebrow}
      title={meta.heading}
      description={meta.description}
    >
      <div className="grid gap-5">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden glass rounded-3xl p-6 sm:p-8"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-400/30 to-pink-500/20 blur-3xl" />
            <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 grid place-items-center shrink-0">
                <FiStar className="text-ink-950 text-xl" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display font-semibold text-lg sm:text-xl">
                    {a.title}
                  </h3>
                  <span className="font-mono text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-slate-300">
                    {a.date}
                  </span>
                </div>
                <div className="text-slate-400 text-sm mt-1">{a.awarder}</div>
                <ul className="mt-3 space-y-2">
                  {a.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="select-none text-amber-400 mt-1 text-xs">★</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
