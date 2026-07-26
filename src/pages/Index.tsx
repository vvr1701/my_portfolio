import { ThemeToggle } from "@/components/ThemeToggle";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen grain">
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ThemeToggle />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Architecture />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
