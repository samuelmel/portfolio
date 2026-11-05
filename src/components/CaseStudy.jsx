import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { statusLabel } from "../data/projects";

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      el.setAttribute("data-in", "");
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-in", "");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Figure = ({ src, alt, legenda, eager }) => (
  <figure className="figure">
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      width="1600"
    />
    <figcaption>{legenda}</figcaption>
  </figure>
);

const CaseStudy = ({ projeto, flip }) => {
  const textRef = useReveal();
  const { numero, ano, status, titulo, resumo, feitos, decisaoRotulo, decisao, stack } = projeto;
  const { imagem, alt, legenda, galeria, links, codigoNota } = projeto;

  return (
    <article id={projeto.slug} className={`case${flip ? " case--flip" : ""}`}>
      <div className="case__text" ref={textRef} data-reveal>
        <div className="case__meta">
          <span className="case__number" aria-hidden="true">
            {numero}
          </span>
          <span className="mono muted">Case {numero} · {ano}</span>
          <span className="stamp">{statusLabel[status]}</span>
        </div>

        <h3 className="case__title">{titulo}</h3>
        <p className="case__question">{resumo}</p>

        <h4 className="label">What I did</h4>
        <ul className="dashed">
          {feitos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4 className="label">{decisaoRotulo}</h4>
        <p className="case__finding">{decisao}</p>

        <ul className="chips" aria-label="Stack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="case__links">
          {links.codigo && (
            <a className="link" href={links.codigo} target="_blank" rel="noreferrer">
              Source code <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {links.demo && (
            <a className="link" href={links.demo} target="_blank" rel="noreferrer">
              Live demo <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {links.releases && (
            <a className="link" href={links.releases} target="_blank" rel="noreferrer">
              Releases <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          {codigoNota && (
            <>
              <span className="muted">{codigoNota}</span>
              <a className="link" href={`mailto:${profile.links.email}?subject=${encodeURIComponent(`Code for ${titulo}`)}`}>
                Ask for access
              </a>
            </>
          )}
        </div>
      </div>

      <div className="case__media">
        <Figure src={imagem} alt={alt} legenda={legenda} eager={numero === "01"} />
      </div>

      {galeria.length > 0 && (
        <div className={`case__gallery gallery gallery--${galeria.length}`}>
          {galeria.map((fig) => (
            <Figure key={fig.src} {...fig} />
          ))}
        </div>
      )}
    </article>
  );
};

export default CaseStudy;
