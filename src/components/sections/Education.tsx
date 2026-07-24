import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
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
                    B.Tech, Computer Science & Engineering
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    KL University · Cyber Security Specialization
                  </p>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  2023 - 2027
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-foreground">CGPA:</span>
                  <Badge className="bg-primary text-primary-foreground">9.0/10</Badge>
                  <span className="text-muted-foreground text-sm">
                    Expected Graduation: 2027
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Specializing in Cyber Security, with strong foundations in Data
                  Structures &amp; Algorithms, Object-Oriented Design, DBMS, Operating
                  Systems, and Computer Networks. Most of my growth has come from
                  building and operating real production systems alongside coursework.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
