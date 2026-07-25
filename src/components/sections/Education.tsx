import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="section-y px-6 bg-background" id="education">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-14" data-reveal>
          <p className="eyebrow mb-3">05 — Education</p>
          <h2 className="text-title text-foreground">Education</h2>
        </header>
        <div
          className="rounded-lg border border-border bg-card p-8 md:p-10 shadow-card"
          data-reveal
        >
          <div className="flex items-start gap-5">
            <div className="hidden sm:flex p-3 rounded-lg border border-brand/30 text-brand flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-h3 text-foreground">
                    B.Tech, Computer Science & Engineering
                  </h3>
                  <p className="text-brand font-medium mt-1">
                    KL University · Cyber Security Specialization
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Hyderabad, India</p>
                </div>
                <Badge variant="outline" className="text-xs px-3 py-1 border-brand/40 text-brand">
                  2023 - 2027
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-muted-foreground text-sm">CGPA</span>
                <span className="font-display text-2xl text-foreground">9.0/10</span>
                <span className="text-muted-foreground text-sm">· Expected Graduation: 2027</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Specializing in Cyber Security, with strong foundations in Data
                Structures &amp; Algorithms, Object-Oriented Design, DBMS, Operating
                Systems, and Computer Networks. Most of my growth has come from
                building and operating real production systems alongside coursework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
