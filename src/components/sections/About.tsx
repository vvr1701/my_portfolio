export const About = () => {
  return (
    <section className="section-y px-6 bg-background" id="about">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-14" data-reveal>
          <p className="eyebrow mb-3">01 — About</p>
          <h2 className="text-title text-foreground">About Me</h2>
        </header>
        <div className="max-w-3xl border-l border-brand/40 pl-8 space-y-6">
          <p className="text-lg leading-relaxed text-foreground" data-reveal>
            I'm a final-year Computer Science student at KL University, specializing
            in Cyber Security and graduating in 2027. Most of what I know came from
            shipping things.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground" data-reveal>
            Over twelve months at The Kaizen Project I built and operated backend
            services for an AI learning platform — authenticated REST APIs, cloud
            infrastructure, and the logging pipelines the team relied on to catch
            failures in production. Alongside that I built Zelavo Kids, an AI
            storybook platform, entirely on my own: architecture, backend, frontend,
            payments, deployment. It's live, and people pay for it.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground" data-reveal>
            Being the only engineer on a production system teaches you things a
            course can't — mainly that the interesting problems show up after you
            deploy. I'm most interested in backend architecture, distributed systems,
            and where security meets engineering.
          </p>
        </div>
      </div>
    </section>
  );
};
