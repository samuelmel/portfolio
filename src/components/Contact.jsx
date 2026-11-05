import { profile } from "../data/profile";

const Contact = () => (
  <section id="contact" className="contact">
    <div className="page">
      <h2 className="mono muted" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Contact
      </h2>
      <p style={{ marginTop: "var(--space-sm)", maxWidth: "65ch" }}>
        I'm looking for an internship in data engineering or analysis. The fastest way to reach me is email.
      </p>
      <a className="contact__mail" href={`mailto:${profile.links.email}`}>
        {profile.links.email}
      </a>
      <div className="contact__links">
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
  </section>
);

export default Contact;
