import { Card } from "@/components/ui/card";
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

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="skills">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <Card key={index} className="p-6 shadow-card hover-lift">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 gradient-primary rounded"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="px-3 py-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <Card className="mt-8 p-6 shadow-card hover-lift">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 gradient-primary rounded"></span>
            CS Fundamentals
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Data Structures & Algorithms", "Object-Oriented Design", "DBMS", "Operating Systems", "Computer Networks", "Recursion", "Dynamic Programming"].map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
