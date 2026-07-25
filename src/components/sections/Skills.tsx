import { Badge } from "@/components/ui/badge";

const skills = {
  "Languages": ["Java", "Python", "SQL", "JavaScript"],
  "Backend & Distributed Systems": [
    "FastAPI",
    "Flask",
    "REST API Design",
    "Service-Oriented Architecture",
    "ARQ Job Queues",
    "Redis",
    "JWT Auth",
    "RBAC",
  ],
  "Frontend & Databases": [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "DynamoDB",
    "Redis",
  ],
  "Cloud & DevOps": [
    "Azure AI Services",
    "AWS (EC2, S3, RDS, CloudFront)",
    "Docker",
    "Git & GitHub",
    "CI/CD",
    "Agile/Scrum",
  ],
  "AI Engineering": [
    "LLM & AI API Integration",
    "Azure AI",
    "Gemini",
    "fal.ai",
    "Prompt Engineering",
    "Multi-Stage Generation Pipelines",
  ],
};

const csFundamentals = [
  "Data Structures & Algorithms",
  "Object-Oriented Design",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Recursion",
  "Dynamic Programming",
];

const Chip = ({ label }: { label: string }) => (
  <Badge
    variant="outline"
    className="px-3 py-1 text-xs font-normal text-muted-foreground border-border hover:border-brand/50 hover:text-foreground transition-smooth"
  >
    {label}
  </Badge>
);

export const Skills = () => {
  return (
    <section className="section-y px-6 bg-background" id="skills">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-14" data-reveal>
          <p className="eyebrow mb-3">04 — Skills</p>
          <h2 className="text-title text-foreground">Technical Skills</h2>
        </header>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} data-reveal>
              <h3 className="eyebrow mb-4 text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <Chip key={skillIndex} label={skill} />
                ))}
              </div>
            </div>
          ))}
          <div data-reveal>
            <h3 className="eyebrow mb-4 text-muted-foreground">CS Fundamentals</h3>
            <div className="flex flex-wrap gap-2">
              {csFundamentals.map((skill, index) => (
                <Chip key={index} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
