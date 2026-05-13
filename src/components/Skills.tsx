import Section from "./Section";
import { motion } from "framer-motion";
import { portfolioConfig } from "../portfolio.config";

const accents = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-400 to-blue-500",
  "from-pink-500 to-rose-400",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-indigo-400 to-violet-500",
  "from-lime-400 to-emerald-500",
  "from-sky-400 to-cyan-500",
];

export default function Skills() {
  const { skills } = portfolioConfig;
  const meta = portfolioConfig.sections.skills;

  // Marquee strip of all keywords
  const allKeywords = skills.flatMap((s) => s.keywords);
  const marquee = [...allKeywords, ...allKeywords];

  return (
    <Section
      id="skills"
      eyebrow={meta.eyebrow}
      title={meta.heading}
      description={meta.description}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative glass rounded-2xl p-5 overflow-hidden"
          >
            <div
              className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${
                accents[i % accents.length]
              } opacity-20 blur-2xl group-hover:opacity-40 transition`}
            />

            <div className="relative">
              <div
                className={`inline-block font-display font-semibold text-sm bg-gradient-to-r ${
                  accents[i % accents.length]
                } bg-clip-text text-transparent`}
              >
                {s.name}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.keywords.map((k) => (
                  <span
                    key={k}
                    className="text-xs font-mono rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-slate-300"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee */}
      <div className="mt-12 relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-4">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-950 to-transparent z-10" />
        <div className="flex gap-8 marquee-track whitespace-nowrap">
          {marquee.map((k, i) => (
            <span
              key={i}
              className="font-mono text-sm text-slate-400 hover:text-accent-cyan transition"
            >
              ◆ {k}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
