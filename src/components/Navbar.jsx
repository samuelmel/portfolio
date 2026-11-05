import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="page nav__bar">
        <a href="#top" className="nav__brand">
          Samuel Mendes
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul id="nav-links" className="nav__links" data-open={open}>
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav__link"
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}${profile.links.cv}`}
              className="nav__link"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
