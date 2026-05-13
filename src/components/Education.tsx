import Section from "./Section";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { portfolioConfig } from "../portfolio.config";

export default function Education() {
  const { education } = portfolioConfig;
  const meta = portfolioConfig.sections.education;

  return (
    <Section
      id="education"
      eyebrow={meta.eyebrow}
      title={meta.heading}
      description={meta.description}
    >
      <div className="grid lg:grid-cols-2 gap-5">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 grid place-items-center">
                <FiAward className="text-ink-950" />
              </div>
              <span className="font-mono text-xs text-slate-400">
                {e.startDate} — {e.endDate}
              </span>
            </div>
            <h3 className="font-display font-semibold text-xl">{e.institution}</h3>
            <div className="text-slate-300 text-sm mt-1">
              {e.studyType} · {e.area}
            </div>
            <div className="text-slate-500 text-sm">{e.location}</div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-emerald-300 text-sm font-mono">
              GPA · {e.gpa}
            </div>

            <div className="mt-5">
              <div className="font-mono text-xs text-slate-400 mb-2">Relevant courses</div>
              <div className="flex flex-wrap gap-1.5">
                {e.courses.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-mono rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-slate-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
