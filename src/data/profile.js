export const profile = {
  nome: "Samuel Mendes dos Santos",
  linhas: ["Samuel Mendes", "dos Santos"],
  frase: "Data engineering, data science and machine learning.",
  ficha: [
    { k: "Based in", v: "Fortaleza, CE, Brazil" },
    { k: "Now", v: "Data Engineering Intern, Unitech \u2013 Unimed" },
    { k: "Degree", v: "Computer Science, Estácio" },
    { k: "Focus", v: "Data, artificial intelligence, statistics" },
  ],
  links: {
    github: "https://github.com/samuelmel",
    linkedin: "https://www.linkedin.com/in/samuel-mendes-dos-santos-3172892b7",
    email: "samuelmsantos021@gmail.com",
    cv: { en: "resume_samuel_en.pdf", pt: "resume_samuel_pt.pdf" },
    site: "https://github.com/samuelmel/portfolio",
  },
  // Habilidades = seção Skills dos currículos (EN/PT). Chaves de ícone: src/components/TechIcon.jsx.
  skills: [
    { id: "languages", titulo: "Languages", itens: ["python", "sql"] },
    {
      id: "data",
      titulo: "Data",
      itens: ["pandas", "polars", "duckdb", "sqlalchemy", "pyreadstat", "playwright", "rest", "yaml", "oracle", "checks", "dbt", "medallion", "dwh"],
    },
    { id: "tools", titulo: "Tools", itens: ["git", "github", "docker", "linux", "cli", "vscode", "obsidian"] },
  ],
};
