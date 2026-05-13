import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioConfig } from "../portfolio.config";

export default function Contact() {
  const { basics } = portfolioConfig;
  const meta = portfolioConfig.sections.contact;

  return (
    <section id="contact" className="relative scroll-mt-24 py-12 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/[0.12] via-ink-900 to-cyan-400/[0.08] p-8 sm:p-14"
        >
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-3">
                {meta.eyebrow}
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
                {meta.titleLine1}
                <br />
                <span className="gradient-text">{meta.titleLine2}</span>
              </h2>
              <p className="mt-5 text-slate-300 max-w-xl">{meta.description}</p>

              <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                <a
                  href={`mailto:${basics.email}`}
                  className="group col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-ink-950 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-slate-200 transition"
                >
                  {meta.primaryCta}
                  <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>
                {basics.website && (
                  <a
                    href={basics.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 sm:px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/5 transition"
                  >
                    <FaLinkedin className="shrink-0" /> {meta.linkedinLabel}
                  </a>
                )}
                {basics.profiles[0]?.url && (
                  <a
                    href={basics.profiles[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 sm:px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/5 transition"
                  >
                    <FaGithub className="shrink-0" /> {meta.githubLabel}
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-3">
              <ContactRow
                icon={<FiMail />}
                label={meta.rows.emailLabel}
                value={basics.email}
                href={`mailto:${basics.email}`}
              />
              <ContactRow
                icon={<FiPhone />}
                label={meta.rows.phoneLabel}
                value={basics.phone}
                href={`tel:${basics.phone.replace(/\s/g, "")}`}
              />
              <ContactRow
                icon={<FiMapPin />}
                label={meta.rows.locationLabel}
                value={basics.location.address}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = (href ? "a" : "div") as React.ElementType;
  return (
    <Tag
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition"
    >
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 grid place-items-center text-ink-950">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          {label}
        </div>
        <div className="text-sm sm:text-base text-white truncate">{value}</div>
      </div>
    </Tag>
  );
}
