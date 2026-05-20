import { ArrowDownToLine } from "lucide-react";
import { SectionLabel } from "./About";

const resumeUrl = `${import.meta.env.BASE_URL}resume_samuel.pdf`;

const Resume = () => {
  return (
    <section id="resume" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionLabel index="04" name="resume" />
        <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight">
          Resume artifact
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Click to open the PDF resume directly.
        </p>

        <div className="mt-8 overflow-hidden rounded-md border border-border bg-card/60">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2 font-mono text-[11px] text-muted-foreground">
            <span>
              <span className="text-terminal">$</span> open resume_samuel.pdf
            </span>
            <span className="flex items-center gap-1.5">
              <span className="status-dot" />
              ready
            </span>
          </div>
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-mono text-sm text-foreground">/public/resume_samuel.pdf</div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-terminal/40 bg-terminal/10 px-3.5 py-2 font-mono text-xs text-terminal transition-colors hover:bg-terminal/20"
            >
              <ArrowDownToLine size={14} />
              view_resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
