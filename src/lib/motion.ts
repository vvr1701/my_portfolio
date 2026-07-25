/**
 * Motion bootstrap — Lenis smooth scroll + GSAP ScrollTrigger reveals.
 *
 * Design guarantees:
 *  - gsap + ScrollTrigger + lenis are dynamically imported, so they land in
 *    separate chunks and never bloat the initial route bundle.
 *  - prefers-reduced-motion => nothing runs. No Lenis, no reveals. Every
 *    [data-reveal] element stays in its final, visible state (we never put
 *    opacity:0 in CSS — only JS hides them, and only when we will animate them).
 *  - GSAP reveals are gated behind desktop width. Mobile keeps native scroll
 *    and static content. Lenis runs on any non-reduced-motion device.
 */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isDesktop = () =>
  typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;

export async function initMotion(): Promise<void> {
  if (typeof window === "undefined") return;
  if (prefersReducedMotion()) return; // fully static, fully usable

  // --- Lenis smooth scroll (lightweight, all non-reduced devices) ---
  let lenis: { raf: (t: number) => void; on: (e: string, cb: () => void) => void } | null = null;
  try {
    const { default: Lenis } = await import("lenis");
    lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    }) as unknown as typeof lenis;
  } catch {
    lenis = null;
  }

  // Safety net: if GSAP doesn't take over within 2.5s (slow/failed load),
  // drop the `.motion` class so the CSS-hidden [data-reveal] elements show.
  const revealFallback = window.setTimeout(() => {
    document.documentElement.classList.remove("motion");
  }, 2500);

  // --- GSAP scroll reveals (desktop only) ---
  let tickerDriven = false;
  if (isDesktop()) {
    try {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      // Keep ScrollTrigger in sync with Lenis' virtual scroll position.
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time: number) => lenis!.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        tickerDriven = true;
      }

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      // Elements are already hidden via the pre-paint `.motion` CSS rule.
      // Pin that state as inline gsap state, then reveal on scroll entry.
      gsap.set(reveals, { opacity: 0, y: 28 });
      window.clearTimeout(revealFallback);

      if (reveals.length) {
        ScrollTrigger.batch(reveals, {
          start: "top 88%",
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "expo.out",
              stagger: 0.09,
              overwrite: true,
            }),
        });
      }

      ScrollTrigger.refresh();
    } catch {
      // GSAP failed — reveal everything so no content is stuck hidden.
      window.clearTimeout(revealFallback);
      document.documentElement.classList.remove("motion");
    }
  } else {
    // Not desktop: no reveals. Ensure nothing stays hidden.
    window.clearTimeout(revealFallback);
    document.documentElement.classList.remove("motion");
  }

  // Drive Lenis if GSAP's ticker isn't already doing it (mobile, or GSAP
  // failed to load on desktop). Without this, Lenis would hijack the wheel
  // but never advance, freezing scroll.
  if (lenis && !tickerDriven) {
    const raf = (time: number) => {
      lenis!.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
}
