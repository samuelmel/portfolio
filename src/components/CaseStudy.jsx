import { useId, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useLang } from "../lang";
import { StackChip, StackIcons } from "./TechIcon";

const Figure = ({ src, alt, legenda }) => (
  <figure className="figure">
    <img src={src} alt={alt} loading="lazy" decoding="async" width="1600" />
    <figcaption>{legenda}</figcaption>
  </figure>
);

const CaseStudy = ({ projeto }) => {
  const { t, profile } = useLang();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { numero, ano, status, titulo, curto, feitos, decisaoRotulo, decisao, stack } = projeto;
  const { imagem, alt, legenda, galeria, links, codigoNota } = projeto;

  return (
    <article id={projeto.slug} className="proj" data-open={open}>
      <h3 className="proj__heading">
        <button
          type="button"
          className="proj__head"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="proj__num" aria-hidden="true">
            {numero}
          </span>
          <span className="proj__main">
            <span className="proj__title">{titulo}</span>
            <span className="proj__sum">{curto}</span>
            <span className="proj__meta">
              <span className="mono muted">
                {ano} · {t.status[status]}
              </span>
              <StackIcons stack={stack} />
            </span>
          </span>
          <img className="proj__thumb" src={imagem} alt="" loading="lazy" decoding="async" width="320" height="180" />
          <span className="proj__toggle">
            {open ? t.projects.less : t.projects.more_}
            <ChevronDown size={18} aria-hidden="true" />
          </span>
        </button>
      </h3>

      <div id={panelId} className="proj__panel" hidden={!open}>
        <div className="proj__cols">
          <div>
            <h4 className="label">{t.projects.did}</h4>
            <ul className="dashed">
              {feitos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label">{decisaoRotulo}</h4>
            <p className="case__finding">{decisao}</p>

            <ul className="chips" aria-label={t.projects.stack}>
              {stack.map((item) => (
                <StackChip key={item} nome={item} />
              ))}
            </ul>

            <div className="case__links">
              {links.codigo && (
                <a className="link" href={links.codigo} target="_blank" rel="noreferrer">
                  {t.projects.code} <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
              {links.demo && (
                <a className="link" href={links.demo} target="_blank" rel="noreferrer">
                  {t.projects.demo} <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
              {links.releases && (
                <a className="link" href={links.releases} target="_blank" rel="noreferrer">
                  {t.projects.releases} <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
              {codigoNota && (
                <>
                  <span className="muted">{codigoNota}</span>
                  <a
                    className="link"
                    href={`mailto:${profile.links.email}?subject=${encodeURIComponent(`${t.projects.askSubject} ${titulo}`)}`}
                  >
                    {t.projects.ask}
                  </a>
                </>
              )}
            </div>
          </div>

          <Figure src={imagem} alt={alt} legenda={legenda} />
        </div>

        {galeria.length > 0 && (
          <div className="proj__gallery">
            {galeria.map((fig) => (
              <Figure key={fig.src} {...fig} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default CaseStudy;
