import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initMotion } from "./lib/motion";

createRoot(document.getElementById("root")!).render(<App />);

// Kick off smooth scroll + scroll reveals after first paint. All heavy motion
// libs are dynamically imported inside initMotion, so they stay out of the
// initial bundle and never run under prefers-reduced-motion.
if (typeof window !== "undefined") {
  const start = () => initMotion();
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}
