import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Download } from "lucide-react";
import resumePdf from "@/assets/resume.pdf";

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: "vishnuvardhan1701@gmail.com",
    href: "mailto:vishnuvardhan1701@gmail.com",
    external: false,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91-7330951823",
    href: "tel:+917330951823",
    external: false,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "Profile",
    href: "https://linkedin.com/in/vishnu-vardhan-dev",
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "Projects",
    href: "https://github.com/vvr1701",
    external: true,
  },
];

export const Contact = () => {
  return (
    <section className="section-y px-6 gradient-hero" id="contact">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-3" data-reveal>07 — Contact</p>
        <h2 className="text-title text-foreground mb-6" data-reveal>
          Let's Connect
        </h2>
        <p className="lead max-w-2xl mx-auto mb-12" data-reveal>
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-reveal>
          {channels.map(({ Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group p-6 rounded-lg border border-border bg-card/60 hover:bg-card hover:border-brand/40 transition-smooth"
            >
              <Icon className="w-7 h-7 text-brand mx-auto mb-3 transition-smooth group-hover:-translate-y-0.5" />
              <p className="text-foreground font-medium mb-1">{label}</p>
              <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 break-all">
                {value}
                {external && <ArrowUpRight className="w-3 h-3 flex-shrink-0" />}
              </p>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center" data-reveal>
          <Button
            variant="hero"
            size="xl"
            onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vishnuvardhan1701@gmail.com', '_blank')}
          >
            <Mail className="mr-2" />
            Send Email
          </Button>
          <Button asChild variant="outline" size="xl">
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
  );
};
