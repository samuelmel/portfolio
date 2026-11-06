import { useEffect, useState } from "react";
import { useLang } from "../lang";

const ids = ["skills", "projects", "contact"];

const Navbar = () => {
  const { t, profile, toggle } = useLang();
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
    ids.forEach((id) => {
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
          {open ? t.nav.close : t.nav.menu}
        </button>
        <ul id="nav-links" className="nav__links" data-open={open}>
          {ids.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav__link"
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {t.nav[id]}
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
              {t.nav.cv}
            </a>
          </li>
          <li>
            <button type="button" className="nav__link nav__lang" onClick={toggle} aria-label={t.nav.switchLabel}>
              {t.nav.switchTo}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
