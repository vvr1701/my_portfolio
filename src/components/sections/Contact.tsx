import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ExternalLink, Download } from "lucide-react";
import resumePdf from "@/assets/resume.pdf";

export const Contact = () => {
  return (
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
  );
};
