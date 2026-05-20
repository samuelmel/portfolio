export const SectionLabel = ({ index, name }) => {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
      <span className="text-terminal">[{index}]</span>
      <span>// {name}</span>
    </div>
  );
};

const About = () => {
  const meta = [
    ["id", "0x01"],
    ["role", "cs_student"],
    ["interest", "data_eng / backend / cyber"],
    ["learning_loop", "build -> test -> document"],
  ];

  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel index="01" name="about" />
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight">
            System profile
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            // technical overview
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="rounded-md border border-border bg-card/60 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-foreground/90">
              Computer Science student focused on building practical systems with{" "}
              <span className="font-mono text-terminal">Python</span>,{" "}
              <span className="font-mono text-terminal">SQL</span> and modern
              development tools. My projects involve data engineering pipelines,
              automation, APIs, dashboards and cybersecurity-related systems. I enjoy
              learning by building real-world projects and improving them with
              architecture, testing and documentation.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded border border-border bg-border font-mono text-xs sm:grid-cols-2">
              {meta.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between bg-card px-4 py-3"
                >
                  <span className="text-muted-foreground">{key}</span>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
