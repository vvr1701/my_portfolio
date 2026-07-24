import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePdf from "@/assets/resume.pdf";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  return (
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
  );
};
