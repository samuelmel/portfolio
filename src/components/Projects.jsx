import { projects } from "../data/projects";
import { profile } from "../data/profile";
import CaseStudy from "./CaseStudy";

const Projects = () => (
  <section id="projects" className="section">
    <div className="page">
      <div className="section__head">
        <h2 className="section__title">Three projects, each with a question, a method and a finding</h2>
      </div>
      {projects.map((projeto, i) => (
        <CaseStudy key={projeto.slug} projeto={projeto} flip={i % 2 === 1} />
      ))}
      <a className="link" href={profile.links.github} target="_blank" rel="noreferrer">
        More on GitHub
      </a>
    </div>
  </section>
);

export default Projects;
