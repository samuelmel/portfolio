import { FolderGit2, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const actionLinks = [
  { label: "view_projects", href: "#projects", icon: FolderGit2 },
  { label: "github", href: "https://github.com/samuelmel", icon: Github, external: true },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/samuel-mendes-dos-santos-3172892b7",
    icon: Linkedin,
    external: true,
  },
  {
    label: "contact",
    href: "mailto:samuelmsantos021@gmail.com",
    icon: Mail,
  },
];

const bootLines = [
  { k: "[ OK ]", v: "loading kernel modules ..." },
  { k: "[ OK ]", v: "mounting /home/samuel" },
  { k: "[ OK ]", v: "starting network.service" },
  { k: "[ OK ]", v: "initializing profile ..." },
];

const Hero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= bootLines.length) {
      return undefined;
    }

    const timeout = setTimeout(() => setStep((current) => current + 1), 220);
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <section id="hero" className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="overflow-hidden rounded-md border border-border bg-card/70 backdrop-blur-sm border-glow">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3">~/samuel-mendes - bash - 120x32</span>
            </div>
            <span className="hidden sm:inline">tty/0</span>
          </div>

          <div className="scanline relative p-5 font-mono text-sm leading-relaxed sm:p-8">
            <div className="space-y-1 text-muted-foreground">
              {bootLines.slice(0, step).map((line, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-success">{line.k}</span>
                  <span>{line.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-1.5">
              <div className="text-muted-foreground">
                <span className="text-terminal">samuel@portfolio</span>:<span className="text-info">~</span>$ cat profile.yml
              </div>
              <pre className="mt-2 whitespace-pre-wrap text-foreground">{`name:     Samuel Mendes dos Santos
location: Fortaleza, BR
role:     Computer Science Student
status:   open_to_internship
focus:    [data_engineering, automation, cybersecurity]
stack:    [python, sql, docker, linux, flask, streamlit]`}</pre>
            </div>

            <h1 className="mt-8 font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Samuel Mendes
              <span className="text-terminal glow-terminal">.</span>
            </h1>
            <p className="mt-3 max-w-2xl font-sans text-base text-muted-foreground sm:text-lg">
              I build practical systems involving data pipelines, APIs, dashboards,
              automation and network analysis.
            </p>
            <div className="mt-2 font-mono text-xs text-muted-foreground">
              <span className="text-terminal">$</span> ./run
              <span className="cursor-blink" />
            </div>

            <div className="mt-7 flex flex-wrap gap-2 font-mono text-xs">
              {actionLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`inline-flex items-center gap-2 rounded border px-3.5 py-2 transition-colors ${
                    label === "view_projects"
                      ? "border-terminal/40 bg-terminal/10 text-terminal hover:bg-terminal/20"
                      : "border-border bg-secondary/50 text-foreground hover:border-terminal/40 hover:text-terminal"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border font-mono text-[11px] sm:grid-cols-4">
          {[
            ["uptime", "active"],
            ["region", "south_america/fortaleza"],
            ["latency", "12ms"],
            ["mode", "build / learn / ship"],
          ].map(([key, value]) => (
            <div key={key} className="flex items-center justify-between bg-card px-3 py-2">
              <span className="text-muted-foreground">{key}</span>
              <span className="text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
