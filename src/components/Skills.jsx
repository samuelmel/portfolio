import { skillGroups } from "../data/skills";
import { SectionLabel } from "./About";

const Skills = () => {
  const totalItems = skillGroups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel index="02" name="skills" />
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight">
              Capabilities
            </h2>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              <span className="text-terminal">$</span> stack --list --grouped
            </p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-success">●</span> {totalItems} modules loaded
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-md border border-border bg-card/60">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5 font-mono text-xs">
                <span className="text-muted-foreground">
                  <span className="text-terminal">$</span> {group.cmd}
                </span>
                <span className="text-muted-foreground">{group.items.length}</span>
              </div>
              <ul className="divide-y divide-border font-mono text-xs">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-12 items-center gap-3 px-4 py-3"
                  >
                    <span className="col-span-4 text-foreground">{item.name}</span>
                    <div className="col-span-6 h-1.5 overflow-hidden rounded-sm bg-secondary">
                      <div
                        className="h-full bg-terminal/80"
                        style={{
                          width: `${item.lvl}%`,
                          boxShadow:
                            "0 0 8px color-mix(in oklch, var(--terminal) 50%, transparent)",
                        }}
                      />
                    </div>
                    <span className="col-span-2 text-right text-muted-foreground">
                      {item.lvl}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
