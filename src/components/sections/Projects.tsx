import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink } from "lucide-react";

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
    <section className="py-20 px-4 bg-background" id="projects">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover-lift hover-glow transition-smooth flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  {project.status && (
                    <Badge className="mt-2 bg-primary text-primary-foreground">
                      {project.status}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold flex items-center gap-1 hover:underline"
                >
                  Live site <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
