import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="relative scroll-mt-24 py-12 sm:py-24 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-3">
            {eyebrow}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-slate-400">{description}</p>
          )}
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
