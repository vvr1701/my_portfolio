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
  Instagram,
  Video,
  Camera
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "C", "JavaScript"],
    "Web Development": ["Flask", "React", "Node.js","next.js","HTML", "CSS", "REST APIs"],
    "Databases": ["MySQL", "DynamoDB", "SQL","PostgreSQL"],
    "Tools & Platforms": ["Git/GitHub", "Linux", "Docker","AWS", "Figma", "Bubble.io"],
  };

  const projects = [
    {
      title: "Smart Task Manager",
      description: "Full-stack task management system with Flask backend, React frontend, and MySQL database. Features user authentication, role-based access, and optimized CRUD operations.",
      tech: ["Flask", "React", "MySQL", "REST APIs"],
    },
    {
      title: "E-commerce Product Recommendation System",
      description: "Python-based recommendation engine using collaborative filtering, integrated with Flask API for real-time product suggestions.",
      tech: ["Python", "Flask", "Machine Learning"],
    },
    {
      title: "Real-Time Chat Application",
      description: "Chat system using Flask-SocketIO and WebSockets for real-time communication with user authentication and message persistence.",
      tech: ["Flask-SocketIO", "WebSockets", "MySQL", "DynamoDB"],
    },
    {
      title: "Cloud-Based Notes App",
      description: "Cross-platform notes app with cloud sync, version history, and secure user authentication using Flask and DynamoDB.",
      tech: ["Flask", "React", "DynamoDB"],
    },
    {
      title: "DSA Visualizer",
      description: "Web-based tool providing interactive step-by-step visualizations of sorting/searching algorithms and data structures.",
      tech: ["JavaScript", "Flask", "Algorithms"],
    },
    {
      title: "Database Optimization Project",
      description: "Performance benchmarking of MySQL vs DynamoDB, achieving 30% faster retrieval through schema restructuring and indexing.",
      tech: ["MySQL", "DynamoDB", "Performance Tuning"],
    },
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
                  Full stack Developer (Aspiring)
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Vishnu Vardhan Reddy
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
               Building Scalable Web Solutions & APIs | Passionate About Full-Stack Development
              </p>
              <p className="text-lg text-white/80 max-w-lg">
              <p>
             Backend Developer at <a href="https://thekaizenproject.ai" target="_blank" class="text-blue-500">thekaizenproject.ai</a> and B.Tech CSE student at KL University with expertise in both backend and frontend technologies. Passionate about creating end-to-end web solutions and solving complex technical challenges.
              </p>

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
                  href="https://linkedin.com/in/vishnu-vardhan-5943bb285"
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
                <a 
                  href="https://instagram.com/vishnuvardhan1701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-smooth flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
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
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg leading-relaxed text-foreground">
                  Detail-oriented B.Tech Computer Science Engineering student with a <strong>CGPA of 9.0/10</strong>, 
                  specializing in backend development and scalable web applications. Currently working as a{" "}
                  <strong>Backend Developer Intern at The Kaizen Project</strong>, where I design and optimize 
                  RESTful APIs using Python Flask and manage MySQL and DynamoDB databases.
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  I have strong foundations in Data Structures, Algorithms, OOP, and Operating Systems. 
                  My experience includes building robust web solutions, implementing efficient database schemas, 
                  and collaborating with cross-functional teams to deliver customer-focused technical solutions.
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  Passionate about solving technical challenges and contributing to global-scale products, 
                  I continuously strive to learn new technologies and improve my craft.
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
                      Backend Developer Intern
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      The Kaizen Project
                    </p>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    Mar 2025 - Present
                  </Badge>
                </div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Designed and optimized RESTful APIs using Python Flask, ensuring high scalability and seamless integration between frontend and backend systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Managed MySQL and DynamoDB databases, implementing efficient schema design, indexing, and query optimization to handle large datasets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Migrated from no-code Bubble.io frontend to full-stack architecture, improving performance, scalability, and maintainability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Collaborated with cross-functional teams to deliver customer-focused technical solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                    <span>Leveraged Linux environments, Git/GitHub, and CI/CD workflows for professional software development practices</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover-lift hover-glow transition-smooth"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground flex-1">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
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
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Data Structures & Algorithms", "RESTful APIs", "Database Design", "Cloud Systems", "Problem-solving", "Technical Communication", "Cross-functional Collaboration"].map((skill, index) => (
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
                      B.Tech Computer Science Engineering
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      KL University
                    </p>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    2023 - 2027
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground">CGPA:</span>
                    <Badge className="bg-primary text-primary-foreground">9.0/10</Badge>
                  </div>
                  <p className="text-foreground">
                Passionate about building efficient, scalable systems with strong foundations in:

Data Structures & Algorithms: Solving complex problems with optimized solutions.

Object-Oriented Programming: Designing modular, maintainable systems.

Database Management: Expertise in MySQL, DynamoDB, and query optimization.

Operating Systems & Networking: In-depth understanding of system-level concepts and network protocols.

Web & Cloud Development: Hands-on experience with Flask, Node.js, AWS, and cloud-based solutions.

Software Engineering & Agile: Familiar with SDLC, version control (Git), and collaborative development.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-4 bg-muted/30" id="hobbies">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Hobbies & Interests
          </h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 shadow-card hover-lift hover-glow transition-smooth">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 gradient-accent rounded-full blur-xl opacity-30"></div>
                  <div className="relative p-6 gradient-accent rounded-full">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Content Creator
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Creating engaging content around  Politics, Tech, and Youth issues
                    Sharing knowledge and experiences through visual storytelling.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://instagram.com/vishnuvardhan1701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Button variant="hero" size="lg" className="gap-2">
                      <Instagram className="w-5 h-5" />
                      Follow on Instagram
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </a>
                </div>
                <div className="flex items-center gap-6 text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    <span>Tech Content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span>Politics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    <span>Current Affairs</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
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
              href="https://linkedin.com/in/vishnu-vardhan-5943bb285"
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
            <a 
              href="https://instagram.com/vishnuvardhan1701"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-smooth group"
            >
              <Instagram className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-white font-semibold mb-1">Instagram</p>
              <p className="text-white/70 text-sm flex items-center justify-center gap-1">
                @vishnuvardhan1701 <ExternalLink className="w-3 h-3" />
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
            <a
              href="/resume.pdf"
              download="Vishnu_Vardhan_Reddy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2025 Vishnu Vardhan Reddy. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;