import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioConfig } from "../portfolio.config";

interface Props {
  name: string;
  onDone: () => void;
}

export default function Loader({ name, onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const { subtitle, durationMs } = portfolioConfig.loader;

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = durationMs;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone, durationMs]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950 px-6"
    >
      {/* Backdrop blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-blob [animation-delay:-4s]" />
      </div>

      {/* Terminal-style mark */}
      {/* <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-base sm:text-lg"
      >
        <span className="text-accent-cyan/70">~/</span>
        <span className="text-slate-200">dhanush</span>
        <span className="ml-0.5 inline-block h-4 w-[2px] bg-accent-cyan animate-pulse" />
      </motion.div> */}

      {/* Name */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-display font-semibold text-xl sm:text-2xl tracking-tight"
      >
        {name}
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 mt-2"
      >
        {subtitle}
      </motion.div>

      {/* Progress bar */}
      <div className="mt-10 w-64 sm:w-80">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-slate-500">
          <span></span>
          <span className="text-accent-cyan">{progress.toString().padStart(3, "0")}%</span>
        </div>
      </div>
    </motion.div>
  );
}
