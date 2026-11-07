import {
  siApacheairflow,
  siApacheparquet,
  siApachespark,
  siDatabricks,
  siDocker,
  siDuckdb,
  siFastapi,
  siGithubactions,
  siMinio,
  siNumpy,
  siPandas,
  siPlotly,
  siPytest,
  siGit,
  siGithub,
  siGrafana,
  siKeras,
  siLinux,
  siObsidian,
  siOnnx,
  siPolars,
  siPrometheus,
  siPython,
  siReact,
  siScikitlearn,
  siSpacy,
  siSqlalchemy,
  siYaml,
  siSqlite,
  siStreamlit,
  siTelegram,
} from "simple-icons";
import {
  Brain,
  Code,
  Database,
  FileSpreadsheet,
  Globe,
  Layers,
  ListChecks,
  Plug,
  Server,
  ShieldCheck,
  Sigma,
  Terminal,
  Warehouse,
} from "lucide-react";

const SIMPLE = {
  python: siPython,
  pandas: siPandas,
  numpy: siNumpy,
  minio: siMinio,
  duckdb: siDuckdb,
  airflow: siApacheairflow,
  parquet: siApacheparquet,
  sqlite: siSqlite,
  pytest: siPytest,
  actions: siGithubactions,
  docker: siDocker,
  streamlit: siStreamlit,
  plotly: siPlotly,
  fastapi: siFastapi,
  react: siReact,
  telegram: siTelegram,
  databricks: siDatabricks,
  spark: siApachespark,
  polars: siPolars,
  sqlalchemy: siSqlalchemy,
  yaml: siYaml,
  git: siGit,
  github: siGithub,
  linux: siLinux,
  obsidian: siObsidian,
  keras: siKeras,
  sklearn: siScikitlearn,
  spacy: siSpacy,
  onnx: siOnnx,
  prometheus: siPrometheus,
  grafana: siGrafana,
};

// Ícones que a biblioteca de marcas não tem: genéricos do lucide ou um selo de texto.
const GENERIC = {
  sql: Database,
  stats: Sigma,
  checks: ListChecks,
  ml: Brain,
  governance: ShieldCheck,
  oracle: Server,
  playwright: Globe,
  vscode: Code,
  rest: Plug,
  medallion: Layers,
  dwh: Warehouse,
  cli: Terminal,
  pyreadstat: FileSpreadsheet,
};

const BADGES = { dbt: { texto: "dbt", hex: "FF694B" } };

export const NAMES = {
  python: "Python",
  pandas: "pandas",
  numpy: "NumPy",
  sql: "SQL",
  stats: { en: "Statistics", pt: "Estatística" },
  minio: "MinIO",
  duckdb: "DuckDB",
  dbt: "dbt",
  airflow: "Airflow",
  parquet: "Parquet",
  sqlite: "SQLite",
  pytest: "pytest",
  checks: { en: "Data quality", pt: "Data quality" },
  actions: "GitHub Actions",
  docker: "Docker",
  streamlit: "Streamlit",
  plotly: "Plotly",
  fastapi: "FastAPI",
  react: "React",
  telegram: "Telegram",
  databricks: "Databricks",
  spark: "Spark",
  ml: "Machine learning",
  governance: { en: "Data governance", pt: "Governança de dados" },
  polars: "Polars",
  sqlalchemy: "SQLAlchemy",
  yaml: "YAML",
  git: "Git",
  github: "GitHub",
  linux: "Linux",
  obsidian: "Obsidian",
  oracle: "Oracle",
  playwright: "Playwright",
  vscode: "VS Code",
  rest: "REST APIs",
  medallion: "Medallion",
  dwh: "Data warehouse / lake",
  cli: "CLI",
  pyreadstat: "Pyreadstat",
};

// Nome usado nos projetos (stack) para a chave do ícone.
const BY_NAME = {
  python: "python",
  pandas: "pandas",
  numpy: "numpy",
  sql: "sql",
  statistics: "stats",
  minio: "minio",
  duckdb: "duckdb",
  dbt: "dbt",
  airflow: "airflow",
  parquet: "parquet",
  sqlite: "sqlite",
  pytest: "pytest",
  "github actions": "actions",
  docker: "docker",
  streamlit: "streamlit",
  plotly: "plotly",
  fastapi: "fastapi",
  react: "react",
  databricks: "databricks",
  keras: "keras",
  "scikit-learn": "sklearn",
  spacy: "spacy",
  onnx: "onnx",
  prometheus: "prometheus",
  grafana: "grafana",
};

export const keyFromName = (nome) => BY_NAME[nome.toLowerCase()];

export const label = (key, lang) => {
  const n = NAMES[key];
  return typeof n === "string" ? n : (n?.[lang] ?? key);
};

const luminance = (hex) => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const Logo = ({ id, size = 28 }) => {
  const simple = SIMPLE[id];
  const Generic = GENERIC[id];
  const badge = BADGES[id];
  const hex = simple?.hex ?? badge?.hex;
  const dark = hex ? luminance(hex) > 0.55 : false;
  const box = Math.round(size * 1.6);

  return (
    <span
      className={`logo${dark ? " logo--dark" : ""}`}
      style={{ width: box, height: box }}
      aria-hidden="true"
    >
      {simple && (
        <svg viewBox="0 0 24 24" width={size} height={size} fill={`#${simple.hex}`}>
          <path d={simple.path} />
        </svg>
      )}
      {Generic && <Generic size={size} strokeWidth={1.8} />}
      {badge && (
        <span className="logo__badge" style={{ color: `#${badge.hex}`, fontSize: size * 0.62 }}>
          {badge.texto}
        </span>
      )}
    </span>
  );
};

export const Tile = ({ id, lang }) => (
  <li className="tile">
    <Logo id={id} size={22} />
    <span className="tile__name">{label(id, lang)}</span>
  </li>
);

export const StackIcons = ({ stack, lang }) => (
  <>
    <span className="proj__logos" aria-hidden="true">
      {stack.map((nome) => {
        const key = keyFromName(nome);
        return key ? <Logo key={nome} id={key} size={13} /> : null;
      })}
    </span>
    <span className="sr-only">{stack.join(", ")}</span>
  </>
);

export const StackChip = ({ nome }) => {
  const key = keyFromName(nome);
  return (
    <li className="chip">
      {key && <Logo id={key} size={11} />}
      {nome}
    </li>
  );
};
