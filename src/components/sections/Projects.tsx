import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Zelavo Kids — AI Storybook SaaS Platform",
    status: "Live in Production",
    description:
      "A production SaaS platform that generates personalized children's storybooks with AI and delivers them as digital and physical printed books. Built solo. Live with paying customers in the US and India. A FastAPI service pushes 60–90s AI generation jobs onto a Redis-backed ARQ queue so background workers process them independently — keeping the API responsive under concurrent load.",
    tech: ["React", "FastAPI", "PostgreSQL", "Redis", "ARQ", "Docker", "Stripe", "Cloudflare R2"],
    link: "https://www.evergift.ai",
  },
  {
    title: "ResuMatch — ATS Resume Analyzer & Career Toolkit",
    description:
      "An AI tool that scores a resume against a target job description — keyword match, ATS compatibility, and missing skills — and suggests targeted rewrites. Built with a Next.js frontend and a Python backend calling Gemini APIs.",
    tech: ["React", "Next.js", "Python", "Gemini AI APIs"],
  },
];

export const Projects = () => {
  return (
    <section className="section-y px-6 bg-background" id="projects">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-14" data-reveal>
          <p className="eyebrow mb-3">03 — Projects</p>
          <h2 className="text-title text-foreground">Projects</h2>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative rounded-lg border border-border bg-card p-8 shadow-card transition-smooth hover:border-brand/40 hover:-translate-y-1 flex flex-col"
              data-reveal
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-h3 text-foreground">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site`}
                    className="text-muted-foreground group-hover:text-brand transition-smooth flex-shrink-0 mt-1"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                )}
              </div>
              {project.status && (
                <div className="mb-4">
                  <span className="eyebrow inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    {project.status}
                  </span>
                </div>
              )}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-xs font-normal text-muted-foreground border-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
