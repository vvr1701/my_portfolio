import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import profile800 from "@/assets/profile-800.webp";
import profile400 from "@/assets/profile-400.webp";
import profileJpg from "@/assets/profile-400.jpg";
import resumePdf from "@/assets/resume.pdf";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero px-6 py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div className="text-center md:text-left">
            <p className="eyebrow mb-5" data-reveal>
              Backend Engineer
            </p>
            <h1
              className="text-display text-foreground mb-6"
              data-reveal
            >
              Vishnu Vardhan Reddy
            </h1>
            <p
              className="font-display italic text-brand text-2xl md:text-3xl mb-6"
              data-reveal
            >
              I design and run production systems.
            </p>
            <p className="lead max-w-lg mx-auto md:mx-0 mb-9" data-reveal>
              I'm a backend engineer and final-year CS student (Cyber Security
              specialization) at KL University, graduating 2027. Over the last year I
              built a learning platform serving 500+ users, and a SaaS product I shipped
              solo that now has paying customers in two countries.
            </p>
            <div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              data-reveal
            >
              <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")}>
                <Mail className="mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button asChild variant="ghost" size="xl">
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
            <div
              className="flex flex-wrap gap-7 justify-center md:justify-start pt-9"
              data-reveal
            >
              <a
                href="mailto:vishnuvardhan1701@gmail.com"
                className="text-muted-foreground hover:text-brand transition-smooth flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="tel:+917330951823"
                className="text-muted-foreground hover:text-brand transition-smooth flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">Phone</span>
              </a>
              <a
                href="https://linkedin.com/in/vishnu-vardhan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand transition-smooth flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/vvr1701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand transition-smooth flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end" data-reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-brand/30 rounded-lg pointer-events-none" />
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${profile400} 400w, ${profile800} 800w`}
                  sizes="(max-width: 768px) 66vw, 400px"
                />
                <img
                  src={profileJpg}
                  width={800}
                  height={800}
                  alt="Vishnu Vardhan Reddy"
                  loading="eager"
                  className="relative w-64 h-64 md:w-[400px] md:h-[400px] object-cover object-top rounded-lg border border-border shadow-card grayscale-[0.15]"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
