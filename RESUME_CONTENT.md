# Vishnu Vardhan Reddy — Resume Content

> **What this is:** the exact content of `Vishnu_Vardhan_Reddy_Resume.pdf`, plus site copy
> derived from it. One resume, one website, same story. If something changes, change it
> here first, then regenerate both.
>
> **Last updated:** July 2026

---

## Contact

| Field | Value |
|---|---|
| Name | Vishnu Vardhan Reddy |
| Location | Hyderabad, India |
| Email | vishnuvardhan1701@gmail.com |
| Phone | +91 7330951823 |
| Portfolio | https://www.vishnuvardhanreddy.me |
| GitHub | https://github.com/vvr1701 |
| LinkedIn | https://linkedin.com/in/vishnu-vardhan-dev |

---

# PART 1 — Resume (exact text)

## Summary

Final-year Computer Science student (Cyber Security specialization) and software developer.
I design, build, and operate production systems end-to-end — REST APIs, asynchronous
service architectures, containerized deployments, and the monitoring needed to keep them
running. Shipped a live SaaS product with paying customers as the sole engineer.

## Education

**KL University, Hyderabad** — B.Tech, Computer Science & Engineering
(Cyber Security Specialization) · 2023 – 2027
CGPA: 9.0 / 10 · Expected Graduation: 2027

## Technical Skills

- **Languages:** Java (primary, OOP), Python, SQL, JavaScript
- **CS Fundamentals:** Data Structures & Algorithms (arrays, strings, linked lists, trees,
  graphs, recursion, dynamic programming), Object-Oriented Design, DBMS, Operating
  Systems, Computer Networks
- **Backend & Distributed Systems:** FastAPI, Flask, REST API design, service-oriented
  architecture, asynchronous job queues (ARQ), Redis, authentication & authorization
  (token/JWT), role-based access control
- **Frontend & Databases:** React.js, Next.js, Tailwind CSS — MySQL, PostgreSQL,
  DynamoDB, Redis
- **Cloud & DevOps:** Microsoft Azure (AI Services), AWS (EC2, S3, RDS, CloudFront),
  Docker, Git & GitHub, CI/CD, Agile/Scrum
- **AI Engineering:** LLM & AI API integration (Azure AI, Gemini, fal.ai), prompt
  engineering, multi-stage generation pipelines

## Professional Experience

**Software Engineer Intern (Backend / Full Stack)** — The Kaizen Project
(Learnpath Digital Pvt. Ltd.) · May 2025 – Apr 2026
*AI-powered learning platform · www.thekaizenproject.ai*

- Designed, developed, and tested backend services in Python (FastAPI, Flask) for a
  production AI platform serving **500+ active users**, owning features end-to-end from
  database schema design through API implementation to production deployment.
- Built secure REST APIs with token-based authentication and role-based access control,
  applying object-oriented design to factor shared logic into reusable modules and
  testing endpoints before release.
- Operated cloud infrastructure (compute, object storage, managed SQL, CDN) with
  centralized logging and monitoring, improving incident detection and cutting production
  debugging time.
- Collaborated in an agile team with product and engineering stakeholders — sprint
  planning, code reviews, and Git branching workflows to ship iteratively.

## Projects

### Zelavo Kids — AI Storybook SaaS Platform · Live in Production
*www.evergift.ai · React · FastAPI · PostgreSQL · Redis · ARQ · Docker · Stripe · Cloudflare R2*

- Architected and shipped a **scalable, end-to-end SaaS product** with paying customers in
  the US and India — sole owner of system design, backend, frontend, payments, and
  deployment.
- Solved a core concurrency problem by designing an **asynchronous queue-based
  architecture** (ARQ + Redis) that offloads 60–90s AI generation jobs to background
  workers, keeping API response times low and the service responsive under concurrent load.
- Engineered a multi-stage AI image-generation pipeline with identity-preserving face
  generation, plus automated physical book fulfilment via a print-on-demand API.
- Containerized the stack with Docker, served assets via a global CDN, and managed a
  production PostgreSQL database with schema migrations.

### ResuMatch — ATS Resume Analyzer & Career Toolkit · Personal Project
*React · Next.js · Python · Gemini AI APIs*

- Built an AI-powered tool that parses a candidate's resume against a target job
  description and scores keyword match, ATS compatibility, and skill gaps.

## Certifications & Achievements

- **Microsoft Certified: Azure AI Engineer Associate** · **AWS Certified Cloud
  Practitioner** · Claude Code in Action (Anthropic)
- Took **evergift.ai** from zero to a live, revenue-generating platform single-handedly —
  real paying customers and physical product fulfilment — while sustaining production
  systems for 500+ users across a 12-month engineering internship.

---

# PART 2 — Website copy

Same facts, more room to breathe. Nothing here contradicts Part 1.

## Hero

> **Vishnu Vardhan Reddy** — Software Developer
> I design and run production systems. Final-year CS student (Cyber Security
> specialization) at KL University, graduating 2027.

**CTA buttons:** View projects · GitHub · Resume (PDF) · Email

## About — short (~40 words)

> I'm a software developer and final-year CS student in Hyderabad. I spent the last year
> building production systems — a learning platform serving 500+ users, and a SaaS
> product I built solo that now has paying customers in two countries.

## About — long (~120 words)

> I'm a final-year Computer Science student at KL University, specializing in Cyber
> Security and graduating in 2027. Most of what I know came from shipping things.
>
> Over twelve months at The Kaizen Project I built and operated backend services for an
> AI learning platform — authenticated REST APIs, cloud infrastructure, and the logging
> pipelines the team relied on to catch failures in production. Alongside that I built
> Zelavo Kids, an AI storybook platform, entirely on my own: architecture, backend,
> frontend, payments, deployment. It's live, and people pay for it.
>
> Being the only engineer on a production system teaches you things a course can't —
> mainly that the interesting problems show up after you deploy. I'm most interested in
> backend architecture, distributed systems, and where security meets engineering.

## Project page — Zelavo Kids

**Card blurb (one line)**
> A production SaaS platform that generates personalized children's storybooks with AI and
> delivers them as digital and physical printed books. Built solo. Live with paying customers.

**Full write-up**
> A customer submits a child's details and a photo, and the system runs a multi-stage
> automated pipeline: story generation, identity-preserving character image generation
> across every page, layout assembly, and automated hand-off to a print-on-demand service
> for physical fulfilment.
>
> The core engineering challenge was latency. Each generation job takes 60–90 seconds;
> running those synchronously would block the API and stall the service under concurrent
> load. So the architecture is split: a FastAPI service handles requests and pushes jobs
> onto a Redis-backed ARQ queue, and background workers process them independently. The
> API stays responsive and reports job status in real time. Failed stages retry on their
> own rather than restarting the whole pipeline, and centralized logging surfaces failures
> immediately.
>
> Payments run through Stripe, structured so no cardholder data touches the application
> servers. The stack is containerized with Docker, assets are served through a Cloudflare
> R2 CDN, and production PostgreSQL runs with versioned schema migrations.

**Links:** Live site → https://www.evergift.ai

## Project page — ResuMatch

**Card blurb**
> An AI tool that scores a resume against a target job description — keyword match, ATS
> compatibility, and missing skills — and suggests targeted rewrites.

**Full write-up**
> Upload a resume and a job description, and ResuMatch extracts structured data from both,
> scores the overlap using a keyword-ranking algorithm, and flags the skills the resume is
> missing for that role. It then generates specific rewrite suggestions to close the gap.
> Built with a Next.js frontend and a Python backend calling Gemini APIs.

## Experience page — The Kaizen Project

> **Software Engineer Intern (Backend / Full Stack)** · May 2025 – Apr 2026
> Learnpath Digital Pvt. Ltd. — an AI-powered learning platform
>
> I built and operated backend services in Python for a platform serving 500+ active
> users, owning features end-to-end from database schema design through API implementation
> to production deployment. That included secure REST APIs with token-based authentication
> and role-based access control, responsive React and Next.js interfaces against those
> APIs, and the AWS infrastructure underneath — with centralized logging and monitoring
> that cut the time it took us to find and fix production issues.

## Site structure

Hero → About → Experience → Projects → Skills → Certifications → Contact
