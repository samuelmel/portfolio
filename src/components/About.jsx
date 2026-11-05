import { profile } from "../data/profile";

const About = () => {
  const [lead, ...rest] = profile.sobre;
  return (
    <section id="about" className="section">
      <div className="page">
        <div className="section__head">
          <h2 className="section__title">About</h2>
        </div>
        <div className="about">
          <div className="about__text">
            <p className="about__lead">{lead}</p>
            <div style={{ marginTop: "var(--space-md)" }}>
              {rest.map((texto) => (
                <p key={texto}>{texto}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="label" style={{ marginTop: 0, fontFamily: "var(--font-mono)" }}>
              What I use
            </h3>
            <dl className="stack">
              {profile.stack.map(({ grupo, itens }) => (
                <div key={grupo}>
                  <dt>{grupo}</dt>
                  <dd>{itens.join(" · ")}</dd>
                </div>
              ))}
            </dl>
            <p className="muted mono" style={{ marginTop: "var(--space-sm)" }}>
              {profile.stackNota}
            </p>
          </div>

          <div>
            <h3 className="label" style={{ marginTop: 0, fontFamily: "var(--font-mono)" }}>
              Now
            </h3>
            <ul className="dashed">
              {profile.agora.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
