import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiFileText, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioConfig } from "../portfolio.config";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const { basics, hero, assets } = portfolioConfig;
  const roles = basics.label.split("·").map((s) => s.trim());
  const firstName = basics.name.split(" ")[0];
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <h1 className="font-display font-bold tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            {hero.greeting}{" "}
            <span className="gradient-text">{firstName}</span>.
            {hero.taglineLines.map((line, i) => (
              <span key={i}>
                <br className={i === 0 ? undefined : "hidden sm:block"} />
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {roles.map((r, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs sm:text-sm text-slate-300 font-mono"
              >
                {r}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-slate-300/90 text-base sm:text-lg leading-relaxed">
            {basics.summary}
          </p>

          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            <a
              href={hero.ctas.primary.href}
              className="group col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm sm:text-base font-semibold text-ink-950 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60 transition"
            >
              {hero.ctas.primary.label}
              <FiArrowDown className="group-hover:translate-y-0.5 transition" />
            </a>
            <a
              href={`mailto:${basics.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 sm:px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/[0.07] transition"
            >
              <FiMail className="shrink-0" /> {hero.ctas.secondaryEmailLabel}
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 sm:px-5 py-3 text-sm sm:text-base text-slate-300 hover:text-white hover:border-white/30 transition"
            >
              <FiFileText className="shrink-0" /> {hero.ctas.resumeLabel}
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-slate-400">
            {basics.profiles[0]?.url && (
              <a
                href={basics.profiles[0].url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label={basics.profiles[0].network || "GitHub"}
              >
                <FaGithub className="text-xl" />
              </a>
            )}
            {basics.website && (
              <a
                href={basics.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 text-sm">
              <FiMapPin /> {basics.location.address}
            </span>
          </div>
        </motion.div>

        {/* Avatar block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Rotating ring */}
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                  />
                </defs>
                <text
                  fill="rgba(255,255,255,0.5)"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing="3"
                >
                  <textPath href="#circlePath">{hero.ringText}</textPath>
                </text>
              </svg>
            </div>

            {/* Glow */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 blur-2xl opacity-40 animate-pulse" />

            {/* Photo */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-violet-900/40 animate-float">
              <img
                src={assets.photo}
                alt={basics.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badges */}
            {hero.badges[0] && (
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:top-2 sm:right-0 glass rounded-2xl px-3 py-2 text-xs font-mono"
              >
                <div className={`text-${hero.badges[0].topColor}`}>
                  {hero.badges[0].topLabel}
                </div>
                <div className="text-slate-400">
                  {hero.badges[0].bottomLabel}
                </div>
              </motion.div>
            )}

            {hero.badges[1] && (
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 glass rounded-2xl px-3 py-2 text-xs font-mono"
              >
                <div className={`text-${hero.badges[1].topColor}`}>
                  {hero.badges[1].topLabel}
                </div>
                <div className="text-slate-400">
                  {hero.badges[1].bottomLabel}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span className="font-mono">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </div>

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        src={assets.resume.src}
        filename={assets.resume.filename}
      />
    </section>
  );
}
