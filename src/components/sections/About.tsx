import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const About = () => {
  return (
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
  );
};
