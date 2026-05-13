import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiExternalLink } from "react-icons/fi";

interface Props {
  open: boolean;
  onClose: () => void;
  src: string;
  filename: string;
}

export default function ResumeModal({ open, onClose, src, filename }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[150] flex items-center justify-center px-3 py-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Panel */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-ink-800/60 px-4 sm:px-5 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 grid place-items-center text-ink-950">
                  <FiExternalLink className="text-sm" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-sm sm:text-base truncate">
                    Resume
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-slate-400 truncate">
                    {filename}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={src}
                  download={filename}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-ink-950 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition"
                >
                  <FiDownload />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="relative flex-1 bg-ink-950">
              <object
                data={`${src}#toolbar=0&navpanes=0&view=FitH`}
                type="application/pdf"
                className="absolute inset-0 h-full w-full"
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="text-slate-300">
                    Your browser can't preview PDFs inline.
                  </p>
                  <a
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-ink-950"
                  >
                    <FiExternalLink /> Open resume in new tab
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
