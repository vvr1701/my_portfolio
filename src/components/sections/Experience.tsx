import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="section-y px-6 bg-background" id="experience">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-14" data-reveal>
          <p className="eyebrow mb-3">02 — Experience</p>
          <h2 className="text-title text-foreground">Experience</h2>
        </header>
        <div
          className="rounded-lg border border-border bg-card p-8 md:p-10 shadow-card"
          data-reveal
        >
          <div className="flex items-start gap-5">
            <div className="hidden sm:flex p-3 rounded-lg border border-brand/30 text-brand flex-shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-h3 text-foreground">
                    Software Engineer Intern (Backend / Full Stack)
                  </h3>
                  <p className="text-brand font-medium mt-1">
                    The Kaizen Project · Learnpath Digital Pvt. Ltd.
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    AI-powered learning platform · www.thekaizenproject.ai
                  </p>
                </div>
                <Badge variant="outline" className="text-xs px-3 py-1 border-brand/40 text-brand">
                  May 2025 - Apr 2026
                </Badge>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2.5"></span>
                  <span>Designed, developed, and tested backend services in Python (FastAPI, Flask) for a production AI platform serving 500+ active users, owning features end-to-end from database schema design through API implementation to production deployment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2.5"></span>
                  <span>Built secure REST APIs with token-based authentication and role-based access control, applying object-oriented design to factor shared logic into reusable modules and testing endpoints before release.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2.5"></span>
                  <span>Operated cloud infrastructure (compute, object storage, managed SQL, CDN) with centralized logging and monitoring, improving incident detection and cutting production debugging time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2.5"></span>
                  <span>Collaborated in an agile team with product and engineering stakeholders — sprint planning, code reviews, and Git branching workflows to ship iteratively.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
