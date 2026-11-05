import { useLang } from "../lang";
import CaseStudy from "./CaseStudy";

const Projects = () => {
  const { t, profile, projects } = useLang();
  return (
  <section id="projects" className="section">
    <div className="page">
      <div className="section__head">
        <h2 className="section__title">{t.projects.title}</h2>
      </div>
      {projects.map((projeto, i) => (
        <CaseStudy key={projeto.slug} projeto={projeto} flip={i % 2 === 1} />
      ))}
      <a className="link" href={profile.links.github} target="_blank" rel="noreferrer">
        {t.projects.more}
      </a>
    </div>
  </section>
  );
};

export default Projects;
