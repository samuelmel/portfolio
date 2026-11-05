const img = (nome) => `${import.meta.env.BASE_URL}projects/${nome}.webp`;

export const projects = [
  {
    slug: "crypto-analyzer",
    numero: "01",
    ano: "2026",
    status: "active",
    titulo: "Crypto Analyzer",
    resumo:
      "Can a trading rule beat simply buying and holding a cryptocurrency? I tested it with a written protocol instead of a hunch.",
    feitos: [
      "Tested 14 trading rules (trend, breakout, momentum, RSI, Bollinger, coin selection) against buy and hold, with the protocol written before running.",
      "Used bootstrap confidence intervals and a correction for multiple tests, so a lucky rule does not pass as a discovery.",
      "Built the Python pipeline (Parquet data, read-only FastAPI, React dashboard) and a daily summary on Telegram, with pytest, mypy --strict and CI.",
    ],
    decisaoRotulo: "Finding",
    decisao:
      "After the correction, none of the 14 rules showed a confirmed edge over buy and hold, and three were significantly worse. Staying in cash below the 200-day average cut the average maximum drawdown from 80% to 65% across 47 coins (2017\u20132024). Results are exploratory, not investment advice.",
    stack: ["Python", "pandas", "Parquet", "Statistics", "FastAPI", "React", "pytest", "GitHub Actions"],
    imagem: img("crypto-analyzer-painel"),
    alt: "Crypto Analyzer dashboard showing the daily overview of coins and signals.",
    legenda: "The dashboard, overview of the day.",
    galeria: [
      {
        src: img("crypto-analyzer-estrategias"),
        alt: "Dot chart of the Sharpe difference against buy and hold for 14 strategies, with confidence intervals. Most intervals cross zero.",
        legenda: "14 rules against buy and hold. Orange: the interval excludes zero.",
      },
      {
        src: img("crypto-analyzer-sma200"),
        alt: "Chart comparing drawdown and volatility with and without the 200-day moving average filter.",
        legenda: "The 200-day average and the drawdown.",
      },
      {
        src: img("crypto-analyzer-ia"),
        alt: "Chart comparing the model's top 5 picks against random picks.",
        legenda: "The AI model against chance.",
      },
    ],
    links: { demo: null, codigo: null, releases: null },
    codigoNota: "Private repository. Code on request.",
    destaque: true,
  },
  {
    slug: "crypto-lakehouse",
    numero: "02",
    ano: "2026",
    status: "study",
    titulo: "Crypto Lakehouse",
    resumo:
      "How do you collect market data so it can be reprocessed, tested and rebuilt without duplicates?",
    feitos: [
      "Idempotent ingestion from the CoinGecko API into MinIO (S3-compatible), with deterministic keys for the raw layer.",
      "Silver and gold layers in dbt + DuckDB, written as Parquet, with a star schema: two dimensions, a price fact table and a daily volatility aggregate.",
      "Airflow DAGs for ingestion, the silver-to-gold run and the upload of gold files to Databricks, where a PySpark notebook creates Delta tables.",
    ],
    decisaoRotulo: "Decision",
    decisao:
      "Raw data stays untouched, so every later layer can be rebuilt. Quality is checked at each step: dbt tests for not_null, unique and relationships, plus unit tests with mocked S3 and HTTP and a check that reprocessing creates no duplicates.",
    stack: ["Python", "dbt", "DuckDB", "Airflow", "MinIO", "Parquet", "Databricks", "Docker"],
    imagem: img("crypto-lakehouse-arquitetura"),
    alt: "Star schema diagram with dim_cryptos, dim_calendario, fact_precos_mercado and agg_volatilidade_diaria.",
    legenda: "The gold layer: star schema.",
    galeria: [],
    links: {
      demo: null,
      codigo: "https://github.com/samuelmel/crypto-lakehouse-medallion",
      releases: null,
    },
    destaque: true,
  },
  {
    slug: "economic-risk-monitor",
    numero: "03",
    ano: "2026",
    status: "done",
    titulo: "Economic Risk Monitor",
    resumo:
      "Which of five economies carries more economic risk, according to World Bank data from 2010 to 2023?",
    feitos: [
      "Extracted five indicators from the World Bank API (GDP, GDP per capita, inflation, unemployment, population) for Brazil, the United States, Argentina, Germany and China.",
      "Moved the data through raw, silver and gold layers into SQLite, with data quality checks between layers.",
      "Computed an economic risk score per country and served it in a Streamlit + Plotly dashboard, with pytest covering extraction, transformation and scoring.",
    ],
    decisaoRotulo: "Decision",
    decisao:
      "Each layer has one job: raw keeps the API response as it came, silver cleans and standardizes it, gold holds the country summary and the risk score. That makes the score traceable back to the original response.",
    stack: ["Python", "SQL", "SQLite", "pandas", "Streamlit", "Plotly", "pytest"],
    imagem: img("economic-risk-monitor-dashboard"),
    alt: "Streamlit dashboard of the Economic Risk Monitor with country risk scores.",
    legenda: "The dashboard.",
    galeria: [
      {
        src: img("economic-risk-monitor-indicadores"),
        alt: "Dashboard view with economic indicators by country over time.",
        legenda: "Indicators by country.",
      },
    ],
    links: {
      demo: null,
      codigo: "https://github.com/samuelmel/economic-risk-monitor",
      releases: null,
    },
    destaque: true,
  },
];

export const statusLabel = { active: "Ongoing", study: "Study", done: "Done" };
