import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  "Microsoft Certified: Azure AI Engineer Associate",
  "AWS Certified Cloud Practitioner",
  "Claude Code in Action (Anthropic)",
];

export const Certifications = () => {
  return (
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
  );
};
