import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Experience
        </h2>
        <Card className="p-8 shadow-card hover-lift">
          <div className="flex items-start gap-4">
            <div className="p-3 gradient-primary rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Software Engineer Intern (Backend / Full Stack)
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    The Kaizen Project · Learnpath Digital Pvt. Ltd.
                  </p>
                  <p className="text-muted-foreground">
                    AI-powered learning platform · www.thekaizenproject.ai
                  </p>
                </div>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  May 2025 - Apr 2026
                </Badge>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>Designed, developed, and tested backend services in Python (FastAPI, Flask) for a production AI platform serving 500+ active users, owning features end-to-end from database schema design through API implementation to production deployment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>Built secure REST APIs with token-based authentication and role-based access control, applying object-oriented design to factor shared logic into reusable modules and testing endpoints before release.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>Operated cloud infrastructure (compute, object storage, managed SQL, CDN) with centralized logging and monitoring, improving incident detection and cutting production debugging time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>Collaborated in an agile team with product and engineering stakeholders — sprint planning, code reviews, and Git branching workflows to ship iteratively.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
