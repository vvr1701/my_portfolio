import { useEffect, useRef, useState } from "react";

type Props = {
  /** High-res source used for canvas sampling (same-origin, so canvas stays untainted). */
  sampleSrc: string;
  /** Static fallback <img> src (mobile / reduced-motion / no-canvas). */
  fallbackSrc: string;
  /** Optional webp srcset for the static fallback. */
  webpSrcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
};

const CELL = 5; // px grid pitch for the halftone
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * A portrait rendered as a dot-matrix halftone that resolves into the real
 * photograph as it scrolls into view.
 *
 * - Desktop + non-reduced-motion only. Everywhere else it renders a plain,
 *   fully-resolved <picture> — a complete static fallback, never a placeholder.
 * - Canvas is transparent between dots so the near-black page shows through.
 */
export const DitherPhoto = ({
  sampleSrc,
  fallbackSrc,
  webpSrcSet,
  sizes,
  alt,
  className,
}: Props) => {
  const [animate, setAnimate] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setAnimate(!reduce && desktop);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 400; // css px, square
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cols = Math.floor(size / CELL);
    const rows = Math.floor(size / CELL);

    let cells: { x: number; y: number; r: number; g: number; b: number; lum: number }[] = [];
    let raf = 0;
    let disposed = false;
    let progress = 0;
    const img = new Image();

    const sampleImage = () => {
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d");
      if (!octx) return;
      // cover-fit the square, aligned to top (matches object-top framing)
      const s = Math.min(img.width, img.height);
      const sx = (img.width - s) / 2;
      octx.drawImage(img, sx, 0, s, s, 0, 0, cols, rows);
      const data = octx.getImageData(0, 0, cols, rows).data;
      cells = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = data[i], g = data[i + 1], b = data[i + 2];
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          cells.push({ x: x * CELL + CELL / 2, y: y * CELL + CELL / 2, r, g, b, lum });
        }
      }
    };

    const draw = () => {
      const eased = easeOutExpo(progress);
      ctx.clearRect(0, 0, size, size);
      const maxR = (CELL / 2) * 1.35;
      for (const c of cells) {
        // dot radius grows with scroll progress, biased by pixel brightness so
        // the face "develops" out of the grain
        const r = maxR * (0.28 + 0.72 * eased) * (0.55 + 0.45 * c.lum);
        if (r <= 0.15) continue;
        ctx.beginPath();
        ctx.fillStyle = `rgb(${c.r},${c.g},${c.b})`;
        ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      // final sharpening pass: fade the real image in over the dots near the end
      if (eased > 0.55) {
        const a = Math.min(1, (eased - 0.55) / 0.45);
        ctx.globalAlpha = a * a;
        const s = Math.min(img.width, img.height);
        const sx = (img.width - s) / 2;
        ctx.drawImage(img, sx, 0, s, s, 0, 0, size, size);
        ctx.globalAlpha = 1;
      }
    };

    const computeProgress = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top edge sits at 92% viewport, 1 once it reaches 32%
      const p = (vh * 0.92 - rect.top) / (vh * 0.6);
      return Math.max(0, Math.min(1, p));
    };

    const tick = () => {
      if (disposed) return;
      const target = computeProgress();
      progress += (target - progress) * 0.12; // eased follow
      draw();
      raf = requestAnimationFrame(tick);
    };

    img.onload = () => {
      sampleImage();
      progress = computeProgress();
      tick();
    };
    img.src = sampleSrc;

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
    };
  }, [animate, sampleSrc]);

  if (!animate) {
    return (
      <picture>
        {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
        <img src={fallbackSrc} alt={alt} className={className} loading="eager" width={800} height={800} />
      </picture>
    );
  }

  return (
    <div ref={wrapRef} className={className} role="img" aria-label={alt}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
};
