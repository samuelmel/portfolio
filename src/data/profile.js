export const profile = {
  nome: "Samuel Mendes dos Santos",
  linhas: ["Samuel Mendes", "dos Santos"],
  frase: "Data engineering with method: tested pipelines and honest analysis.",
  ficha: [
    { k: "Based in", v: "Fortaleza, CE, Brazil" },
    { k: "Studying", v: "Computer Science" },
    { k: "Looking for", v: "Internship in data engineering or analysis" },
    { k: "Focus", v: "Pipelines, statistics, data quality" },
  ],
  links: {
    github: "https://github.com/samuelmel",
    linkedin: "https://www.linkedin.com/in/samuel-mendes-dos-santos-3172892b7",
    email: "samuelmsantos021@gmail.com",
    cv: "resume_samuel.pdf",
    site: "https://github.com/samuelmel/portfolio",
  },
  sobre: [
    "I'm a Computer Science student in Fortaleza, Brazil, looking for an internship in data engineering or data analysis.",
    "I write the question and the test before I run the analysis, compare the result against a simple baseline, and report what did not work. My Crypto Analyzer ended with \u201calmost nothing beats buy and hold\u201d, and that is the result I published.",
    "My pipelines follow the medallion pattern (raw, silver, gold) and ship with tests: dbt checks, pytest and CI.",
  ],
  stack: [
    { grupo: "Analysis", itens: ["Python", "pandas", "NumPy", "SQL", "Bootstrap and multiple-test correction"] },
    { grupo: "Pipelines", itens: ["dbt", "Airflow", "DuckDB", "MinIO (S3)", "Parquet", "Databricks", "SQLite"] },
    { grupo: "Quality", itens: ["pytest", "dbt tests", "mypy", "GitHub Actions", "Docker"] },
    { grupo: "Delivery", itens: ["Streamlit", "Plotly", "FastAPI", "React", "Telegram bot"] },
  ],
  stackNota: "Everything listed here is used in the three projects above.",
  agora: [
    "Extending the Crypto Analyzer studies. The AI model is still on trial and only gives an opinion.",
    "Studying the Databricks side of the Crypto Lakehouse: Delta tables and data governance.",
  ],
};
