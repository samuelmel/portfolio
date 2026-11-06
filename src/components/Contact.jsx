import { useLang } from "../lang";

const Contact = () => {
  const { t, profile } = useLang();
  return (
  <section id="contact" className="contact">
    <div className="page">
      <h2 className="mono muted" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {t.contact.title}
      </h2>
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
          {t.hero.cv}
        </a>
      </div>
    </div>
  </section>
  );
};

export default Contact;
