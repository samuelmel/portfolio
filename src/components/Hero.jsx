import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/profile";

const Hero = () => (
  <section id="top" className="hero">
    <div className="page hero__grid">
      <div>
        <h1 className="hero__name">
          {profile.linhas.map((linha) => (
            <span key={linha}>{linha}</span>
          ))}
        </h1>
        <p className="hero__tagline">{profile.frase}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View projects <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.links.email}`} className="btn">
            <Mail size={18} aria-hidden="true" /> Email me
          </a>
        </div>
      </div>

      <div>
        <dl className="sheet">
          {profile.ficha.map(({ k, v }) => (
            <div key={k} className="sheet__row">
              <dt className="mono">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="sheet__links">
          <a className="link" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a
            className="link"
            href={`${import.meta.env.BASE_URL}${profile.links.cv}`}
            target="_blank"
            rel="noreferrer"
          >
            CV (PDF)
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
