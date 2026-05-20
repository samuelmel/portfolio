import { ArrowUpRight, FolderKanban } from "lucide-react";
import { projects } from "../data/projects";
import { SectionLabel } from "./About";

const statusColor = {
  active: "text-success",
  stable: "text-info",
  wip: "text-warning",
};

const Projects = () => {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="03" name="projects" />
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight">
              Projects
            </h2>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              <span className="text-terminal">$</span> systemctl list-units --type=project
            </p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            {projects.length} units |{" "}
            {projects.filter((project) => project.status === "active").length} active
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col rounded-md border border-border bg-card/60 transition-colors hover:border-terminal/40"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-xs">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-terminal">{project.id}</span>
                  <span className="text-border">|</span>
                  <span>{project.category}</span>
                </div>
                <div className={`flex items-center gap-1.5 ${statusColor[project.status]}`}>
                  <span
                    className="status-dot"
                    style={{ background: "currentColor", boxShadow: "0 0 8px currentColor" }}
                  />
                  <span>{project.status}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <FolderKanban size={18} className="mt-1 shrink-0 text-terminal" />
                </div>

                {project.metrics && (
                  <div
                    className="mt-5 grid gap-px overflow-hidden rounded border border-border bg-border font-mono text-[11px]"
                    style={{
                      gridTemplateColumns: `repeat(${project.metrics.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {project.metrics.map((metric) => (
                      <div key={metric.k} className="bg-card px-3 py-2">
                        <div className="text-muted-foreground">{metric.k}</div>
                        <div className="mt-0.5 text-foreground">{metric.v}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-5">
                  <div className="font-mono text-[11px] text-muted-foreground">stack</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <div className="font-mono text-[11px] text-muted-foreground">capabilities</div>
                  <ul className="mt-2 space-y-2 text-sm text-foreground/90">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="text-terminal">{">"}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-foreground transition-colors hover:text-terminal"
                    >
                      view source
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-muted-foreground">
                      private / academic source
                    </span>
                  )}
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-colors group-hover:text-terminal"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
