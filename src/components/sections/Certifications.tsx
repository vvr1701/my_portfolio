import { Award } from "lucide-react";

const certifications = [
  "Microsoft Certified: Azure AI Engineer Associate",
  "AWS Certified Cloud Practitioner",
  "Claude Code in Action (Anthropic)",
];

export const Certifications = () => {
  return (
    <section className="section-y px-6 bg-background" id="certifications">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-14" data-reveal>
          <p className="eyebrow mb-3">06 — Credentials</p>
          <h2 className="text-title text-foreground">Certifications &amp; Achievements</h2>
        </header>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 shadow-card transition-smooth hover:border-brand/40 flex items-start gap-4"
              data-reveal
            >
              <Award className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-snug">{cert}</p>
            </div>
          ))}
        </div>
        <div
          className="rounded-lg border-l-2 border-brand bg-card/40 p-8"
          data-reveal
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Took <strong className="text-foreground font-medium">evergift.ai</strong> from
            zero to a live, revenue-generating platform single-handedly — real paying
            customers and physical product fulfilment — while sustaining production
            systems for 500+ users across a 12-month engineering internship.
          </p>
        </div>
      </div>
    </section>
  );
};
