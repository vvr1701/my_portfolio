import { useEffect, useRef, useState } from "react";

/**
 * The signature piece: a request travelling through the real Zelavo Kids
 * backend. All technical detail is drawn from the project as described in
 * RESUME_CONTENT.md — 60–90s generation jobs, a Redis/ARQ queue that keeps the
 * API responsive under concurrent load, and per-stage retries.
 *
 * Desktop + non-reduced-motion: the section pins and a GSAP-scrubbed timeline
 * traces an amber path through the nodes, lighting each stage as it activates.
 * Mobile / reduced-motion: a fully-drawn, fully-annotated static diagram.
 *
 * SVG only — no three.js / R3F.
 */

type Stage = { key: string; label: string; body: string };

const STAGES: Stage[] = [
  {
    key: "request",
    label: "Request",
    body: "A customer submits a child's details and a photo to start a storybook.",
  },
  {
    key: "api",
    label: "FastAPI service",
    body: "The API accepts the job and responds immediately — it never blocks on generation.",
  },
  {
    key: "queue",
    label: "Redis · ARQ queue",
    body: "The 60–90s generation job is pushed onto a Redis-backed ARQ queue instead of running inline.",
  },
  {
    key: "worker",
    label: "Background worker",
    body: "Workers pick up jobs and process them independently, so the API stays responsive under concurrent load.",
  },
  {
    key: "pipeline",
    label: "AI pipeline",
    body: "A multi-stage pipeline — story, identity-preserving character art per page, layout. Failed stages retry on their own.",
  },
  {
    key: "cdn",
    label: "Cloudflare R2 · CDN",
    body: "The assembled book and its assets are served globally through a Cloudflare R2 CDN.",
  },
  {
    key: "customer",
    label: "Customer",
    body: "Delivered as a digital book, plus an automated print-on-demand physical copy.",
  },
];

const VW = 1400;
const VH = 260;
const Y = 120;
const X0 = 90;
const X1 = VW - 90;
const nodeX = (i: number) => X0 + ((X1 - X0) * i) / (STAGES.length - 1);

export const Architecture = () => {
  const [animate, setAnimate] = useState(false);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const traceRef = useRef<SVGPathElement | null>(null);
  const tipRef = useRef<SVGCircleElement | null>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setAnimate(!reduce && desktop);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const section = sectionRef.current;
    const trace = traceRef.current;
    const tip = tipRef.current;
    if (!section || !trace || !tip) return;

    let cleanup = () => {};
    let lastIdx = -1;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const len = trace.getTotalLength();
      trace.style.strokeDasharray = String(len);
      trace.style.strokeDashoffset = String(len);

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + window.innerHeight * (STAGES.length * 0.5 + 0.5),
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          trace.style.strokeDashoffset = String(len * (1 - p));
          const pt = trace.getPointAtLength(len * p);
          tip.setAttribute("cx", String(pt.x));
          tip.setAttribute("cy", String(pt.y));
          tip.style.opacity = p > 0.001 && p < 0.999 ? "1" : "0";

          const idx = Math.min(STAGES.length - 1, Math.floor(p * STAGES.length));
          nodeRefs.current.forEach((n, i) => n?.classList.toggle("active", i <= idx));
          if (idx !== lastIdx) {
            lastIdx = idx;
            setActive(idx);
          }
        },
      });

      ScrollTrigger.refresh();
      cleanup = () => st.kill();
    })();

    return () => cleanup();
  }, [animate]);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="section-y px-6 bg-background overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto">
        <header className="mb-12" data-reveal={!animate ? true : undefined}>
          <p className="eyebrow mb-3">Under the hood</p>
          <h2 className="text-title text-foreground">The Zelavo Kids pipeline</h2>
          <p className="lead mt-4 max-w-2xl">
            How a single request becomes a printed book — and why the API never waits on it.
          </p>
        </header>

        <div className="rounded-lg border border-border bg-card/40 p-5 md:p-8">
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            className="w-full h-auto"
            role="img"
            aria-label="Request flow: request, FastAPI service, Redis/ARQ queue, background worker, AI generation pipeline, Cloudflare R2 CDN, customer."
          >
            {/* base connector */}
            <line
              x1={X0}
              y1={Y}
              x2={X1}
              y2={Y}
              className="arch-connector"
              strokeWidth={2}
            />
            {/* amber trace (drawn on scroll; fully drawn in static mode) */}
            <path
              ref={traceRef}
              d={`M ${X0} ${Y} L ${X1} ${Y}`}
              className="arch-trace"
              fill="none"
              strokeWidth={2.5}
              strokeLinecap="round"
              style={animate ? undefined : { strokeDashoffset: 0 }}
            />
            {STAGES.map((s, i) => (
              <g
                key={s.key}
                ref={(el) => (nodeRefs.current[i] = el)}
                className={`arch-node${animate ? "" : " active"}`}
              >
                <circle cx={nodeX(i)} cy={Y} r={9} />
                <text
                  x={nodeX(i)}
                  y={i % 2 === 0 ? Y - 26 : Y + 40}
                  textAnchor="middle"
                  fontSize={17}
                  fontFamily="Satoshi, system-ui, sans-serif"
                >
                  {s.label}
                </text>
              </g>
            ))}
            {/* travelling request tip */}
            <circle ref={tipRef} r={6} className="arch-tip" style={{ opacity: 0 }} />
          </svg>

          {animate ? (
            // live caption — updates as the sequence plays
            <div className="mt-6 min-h-[4.5rem] max-w-2xl">
              <p className="eyebrow mb-2">
                {String(active + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")} — {STAGES[active].label}
              </p>
              <p className="text-lg text-foreground leading-relaxed">{STAGES[active].body}</p>
            </div>
          ) : (
            // static annotated diagram — every stage described
            <ol className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {STAGES.map((s, i) => (
                <li key={s.key} className="flex gap-3">
                  <span className="eyebrow pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-foreground font-medium">{s.label}</span>
                    <span className="block text-muted-foreground text-sm leading-relaxed">
                      {s.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
};
