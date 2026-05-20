import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 font-mono text-xs sm:px-6">
        <a href="#hero" className="flex items-center gap-2 text-foreground">
          <span className="status-dot" />
          <span className="text-muted-foreground">samuel@portfolio</span>
          <span className="text-terminal">~$</span>
          <span className="hidden sm:inline">whoami</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded px-2.5 py-1 transition-colors ${
                active === item.id
                  ? "bg-secondary text-terminal"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ./{item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 text-muted-foreground sm:flex">
          <span>FOR_BR</span>
          <span className="text-terminal">{time}</span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex rounded border border-border bg-card p-2 text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`rounded px-3 py-3 font-mono text-sm transition-colors ${
                  active === item.id
                    ? "bg-secondary text-terminal"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ./{item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
