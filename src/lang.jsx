import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { profile as profileEn } from "./data/profile";
import { projects as projectsEn } from "./data/projects";
import { profilePt, projectsPt, ui } from "./data/pt";

const KEY = "lang";
const LangContext = createContext(null);

const readStored = () => {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "pt" || value === "en" ? value : "en";
  } catch {
    return "en";
  }
};

const buildProfile = (lang) => {
  const base =
    lang === "en"
      ? profileEn
      : {
          ...profileEn,
          ...profilePt,
          skills: profileEn.skills.map((g) => ({ ...g, titulo: profilePt.skills[g.id] ?? g.titulo })),
        };
  return { ...base, links: { ...profileEn.links, cv: profileEn.links.cv[lang] } };
};

const buildProjects = (lang) => {
  if (lang === "en") return projectsEn;
  return projectsEn.map((p) => {
    const t = projectsPt[p.slug] ?? {};
    const galeria = p.galeria.map((fig, i) => ({ ...fig, ...(t.galeria?.[i] ?? {}) }));
    return { ...p, ...t, galeria };
  });
};

export const LangProvider = ({ children }) => {
  const [lang, setLangState] = useState(readStored);

  useEffect(() => {
    document.documentElement.lang = ui[lang].lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLangState((current) => {
      const next = current === "en" ? "pt" : "en";
      try {
        window.localStorage.setItem(KEY, next);
      } catch {
        /* storage indisponível: a escolha vale só para esta visita */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, toggle, t: ui[lang], profile: buildProfile(lang), projects: buildProjects(lang) }),
    [lang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
