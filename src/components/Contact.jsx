import { Github, Linkedin, Mail } from "lucide-react";
import { SectionLabel } from "./About";

const contactLinks = [
  {
    icon: Mail,
    label: "email",
    value: "samuelmsantos021@gmail.com",
    href: "mailto:samuelmsantos021@gmail.com",
  },
  {
    icon: Github,
    label: "github",
    value: "github.com/samuelmel",
    href: "https://github.com/samuelmel",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "in/samuel-mendes-dos-santos-3172892b7",
    href: "https://www.linkedin.com/in/samuel-mendes-dos-santos-3172892b7",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionLabel index="05" name="contact" />
        <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight">
          Communication panel
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Open to internship opportunities, backend development, data engineering
          and automation projects.
        </p>

        <div className="mt-8 overflow-hidden rounded-md border border-border bg-card/60">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
            <span>
              <span className="text-terminal">$</span> ./contact --channels
            </span>
            <span className="flex items-center gap-1.5">
              <span className="status-dot" />
              online
            </span>
          </div>
          <ul className="divide-y divide-border">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid grid-cols-12 items-center gap-3 px-5 py-4 font-mono text-sm transition-colors hover:bg-secondary/40"
                >
                  <span className="col-span-1 text-terminal">
                    <Icon size={16} />
                  </span>
                  <span className="col-span-3 text-muted-foreground">
                    {label.padEnd(8, " ")}
                  </span>
                  <span className="col-span-8 truncate text-foreground">{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
