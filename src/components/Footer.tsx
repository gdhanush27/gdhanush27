import { portfolioConfig } from "../portfolio.config";

export default function Footer() {
  const { suffix } = portfolioConfig.footer;
  const { name } = portfolioConfig.basics;

  return (
    <footer className="relative border-t border-white/5 px-4 sm:px-6 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <div className="font-mono">
          © {new Date().getFullYear()} {name}. {suffix}
        </div>
        <a
          href="#top"
          className="font-mono hover:text-accent-cyan transition"
        >
          ↑ back to top
        </a>
      </div>
    </footer>
  );
}
