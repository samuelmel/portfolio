import { useLang } from "../lang";
import { Tile } from "./TechIcon";

const Skills = () => {
  const { lang, t, profile } = useLang();

  return (
    <section id="skills" className="section skills">
      <div className="page">
        <h2 className="section__title">{t.skills.title}</h2>
        <div className="skills__groups">
          {profile.skills.map((grupo) => (
            <div key={grupo.id} className="group">
              <h3 className="group__title">{grupo.titulo}</h3>
              <ul className="tiles">
                {grupo.itens.map((id) => (
                  <Tile key={id} id={id} lang={lang} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
