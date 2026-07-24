import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  ExternalLink,
  Download,
  Award,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePdf from "@/assets/resume.pdf";

const Index = () => {
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

  const certifications = [
    "Microsoft Certified: Azure AI Engineer Associate",
    "AWS Certified Cloud Practitioner",
    "Claude Code in Action (Anthropic)",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-hero px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6 animate-fade-in">
              <div className="inline-block">
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                  Backend Engineer
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Vishnu Vardhan Reddy
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                I design and run production systems.
              </p>
              <p className="text-lg text-white/80 max-w-lg">
                I'm a backend engineer and final-year CS student (Cyber Security
                specialization) at KL University, graduating 2027. Over the last year I
                built a learning platform serving 500+ users, and a SaaS product I shipped
                solo that now has paying customers in two countries.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <a
                    href={resumePdf}
                    download="Vishnu_Vardhan_Reddy_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2" />
                    Resume (PDF)
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-6">
                <a
                  href="mailto:vishnuvardhan1701@gmail.com"
                  className="text-white/80 hover:text-white transition-smooth flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="tel:+917330951823"
                  className="text-white/80 hover:text-white transition-smooth flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">Phone</span>
                </a>
                <a
                  href="https://linkedin.com/in/vishnu-vardhan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-smooth flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/vvr1701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-smooth flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-30"></div>
                <img
                  src={profilePhoto}
                  alt="Vishnu Vardhan Reddy"
                  className="relative rounded-full w-80 h-80 object-cover shadow-glow border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background" id="about">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <Card className="p-8 shadow-card hover-lift">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg leading-relaxed text-foreground">
                  I'm a final-year Computer Science student at KL University, specializing
                  in Cyber Security and graduating in 2027. Most of what I know came from
                  shipping things.
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  Over twelve months at The Kaizen Project I built and operated backend
                  services for an AI learning platform — authenticated REST APIs, cloud
                  infrastructure, and the logging pipelines the team relied on to catch
                  failures in production. Alongside that I built Zelavo Kids, an AI
                  storybook platform, entirely on my own: architecture, backend, frontend,
                  payments, deployment. It's live, and people pay for it.
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  Being the only engineer on a production system teaches you things a
                  course can't — mainly that the interesting problems show up after you
                  deploy. I'm most interested in backend architecture, distributed systems,
                  and where security meets engineering.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-muted/30" id="experience">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Experience
          </h2>
          <Card className="p-8 shadow-card hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 gradient-primary rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Software Engineer Intern (Backend / Full Stack)
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      The Kaizen Project · Learnpath Digital Pvt. Ltd.
                    </p>
                    <p className="text-muted-foreground">
                      AI-powered learning platform · www.thekaizenproject.ai
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    May 2025 - Apr 2026
                  </Badge>
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Designed, developed, and tested backend services in Python (FastAPI, Flask) for a production AI platform serving 500+ active users, owning features end-to-end from database schema design through API implementation to production deployment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Built secure REST APIs with token-based authentication and role-based access control, applying object-oriented design to factor shared logic into reusable modules and testing endpoints before release.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Operated cloud infrastructure (compute, object storage, managed SQL, CDN) with centralized logging and monitoring, improving incident detection and cutting production debugging time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Collaborated in an agile team with product and engineering stakeholders — sprint planning, code reviews, and Git branching workflows to ship iteratively.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Skills Section */}
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

      {/* Education Section */}
      <section className="py-20 px-4 bg-background" id="education">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Education
          </h2>
          <Card className="p-8 shadow-card hover-lift">
            <div className="flex items-start gap-4">
              <div className="p-3 gradient-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      B.Tech, Computer Science & Engineering
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      KL University · Cyber Security Specialization
                    </p>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    2023 - 2027
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-foreground">CGPA:</span>
                    <Badge className="bg-primary text-primary-foreground">9.0/10</Badge>
                    <span className="text-muted-foreground text-sm">
                      Expected Graduation: 2027
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Specializing in Cyber Security, with strong foundations in Data
                    Structures &amp; Algorithms, Object-Oriented Design, DBMS, Operating
                    Systems, and Computer Networks. Most of my growth has come from
                    building and operating real production systems alongside coursework.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-muted/30" id="certifications">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Certifications &amp; Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 shadow-card hover-lift flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground font-semibold leading-snug">
                  {cert}
                </p>
              </Card>
            ))}
          </div>
          <Card className="p-8 shadow-card hover-lift">
            <p className="text-lg leading-relaxed text-foreground">
              Took <strong>evergift.ai</strong> from zero to a live, revenue-generating
              platform single-handedly — real paying customers and physical product
              fulfilment — while sustaining production systems for 500+ users across a
              12-month engineering internship.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 gradient-hero" id="contact">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <a
              href="mailto:vishnuvardhan1701@gmail.com"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-smooth group"
            >
              <Mail className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-white font-semibold mb-1">Email</p>
              <p className="text-white/70 text-sm break-all">vishnuvardhan1701@gmail.com</p>
            </a>
            <a
              href="tel:+917330951823"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-smooth group"
            >
              <Phone className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-white font-semibold mb-1">Phone</p>
              <p className="text-white/70 text-sm">+91-7330951823</p>
            </a>
            <a
              href="https://linkedin.com/in/vishnu-vardhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-smooth group"
            >
              <Linkedin className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-white font-semibold mb-1">LinkedIn</p>
              <p className="text-white/70 text-sm flex items-center justify-center gap-1">
                Profile <ExternalLink className="w-3 h-3" />
              </p>
            </a>
            <a
              href="https://github.com/vvr1701"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-smooth group"
            >
              <Github className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-white font-semibold mb-1">GitHub</p>
              <p className="text-white/70 text-sm flex items-center justify-center gap-1">
                Projects <ExternalLink className="w-3 h-3" />
              </p>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vishnuvardhan1701@gmail.com', '_blank')}
            >
              <Mail className="mr-2" />
              Send Email
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a
                href={resumePdf}
                download="Vishnu_Vardhan_Reddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2026 Vishnu Vardhan Reddy. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
