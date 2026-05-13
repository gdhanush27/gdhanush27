import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { portfolioConfig } from "./portfolio.config";
import "./index.css";

/**
 * Apply site-level meta from the portfolio config so that template users only
 * have to edit one file. index.html still ships with sane fallbacks for the
 * very first paint, but these runtime overrides are the source of truth.
 */
function applySiteMeta() {
  const { site, assets } = portfolioConfig;

  document.title = site.title;

  const setMeta = (selector: string, attr: "content", value: string) => {
    const el = document.head.querySelector<HTMLMetaElement>(selector);
    if (el) el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', "content", site.description);
  setMeta('meta[name="theme-color"]', "content", site.themeColor);

  const favicon = document.head.querySelector<HTMLLinkElement>(
    'link[rel="icon"]'
  );
  if (favicon) favicon.href = assets.photo || site.favicon;
}

applySiteMeta();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
