import Section from "./Section";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { portfolioConfig } from "../portfolio.config";

const ACCENT_CLASS: Record<string, string> = {
  n: "text-white font-medium",
  c: "text-accent-cyan",
  p: "text-accent-pink",
};

/**
 * Renders a paragraph supporting tiny inline accent tokens:
 *   [n:text]  → name accent
 *   [c:text]  → cyan accent
 *   [p:text]  → pink accent
 * The {name} placeholder is substituted with `name`.
 */
function renderAccented(text: string, name: string) {
  const expanded = text.replace(/\{name\}/g, name);
  const parts = expanded.split(/(\[[ncp]:[^\]]*\])/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([ncp]):([^\]]*)\]$/);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    const [, tag, content] = m;
    return (
      <span key={i} className={ACCENT_CLASS[tag]}>
        {content}
      </span>
    );
  });
}

export default function About() {
  const { basics, about } = portfolioConfig;

  return (
    <Section
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8">
          {about.intro.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-slate-300 leading-relaxed"
                  : "mt-4 text-slate-300 leading-relaxed"
              }
            >
              {renderAccented(paragraph, basics.name)}
            </p>
          ))}

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {about.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <div className="font-display font-bold text-2xl gradient-text">
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-4">
          <div className="glass rounded-3xl p-6">
            <div className="font-mono text-xs text-accent-cyan mb-3">
              {about.currentlyCard.eyebrow}
            </div>
            <div className="font-display text-lg">
              {about.currentlyCard.title}
            </div>
            <div className="text-slate-400 text-sm mt-1">
              {about.currentlyCard.subtitle}
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="font-mono text-xs text-accent-pink mb-3">
              {about.focusCard.eyebrow}
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {about.focusCard.items.map((item, i) => (
                <li key={i}>→ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
