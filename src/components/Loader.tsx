import { useEffect, useState } from "react";

/**
 * Brief first-paint loader covering font + asset settle. Fades out on
 * document.fonts.ready (capped so it never delays LCP for long). Under reduced
 * motion it dismisses almost immediately. aria-hidden so it's inert to AT.
 */
export const Loader = () => {
  const [gone, setGone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cap = reduce ? 150 : 900;

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      setFading(true);
      window.setTimeout(() => setGone(true), reduce ? 60 : 340);
    };

    const fontsReady =
      (document as Document & { fonts?: FontFaceSet }).fonts?.ready ??
      Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, cap))]).then(finish);
    // hard ceiling so a stalled font fetch can't keep content hidden
    const hard = window.setTimeout(finish, cap + 600);
    return () => window.clearTimeout(hard);
  }, []);

  if (gone) return null;
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-300 ease-out-expo ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-display text-3xl text-foreground mb-6">VVR</span>
      <span className="block h-px w-40 overflow-hidden bg-border">
        <span className="loader-bar block h-full w-full bg-brand" />
      </span>
    </div>
  );
};
