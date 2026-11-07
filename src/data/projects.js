const img = (nome) => `${import.meta.env.BASE_URL}projects/${nome}.webp`;

export const projects = [
  {
    slug: "predictive-maintenance",
    numero: "01",
    ano: "2026",
    status: "active",
    titulo: "Predictive Maintenance 4.0",
    curto: "Ranks which engine to service first, combining an LSTM remaining-life model with NLP on work orders.",
    resumo:
      "Which engine should maintenance look at first, given how long it will last and what operators write in work orders?",
    feitos: [
      "Built the data in bronze, silver and gold layers on NASA C-MAPSS, with checksums on the original files and a train/validation split per engine, so windows from one engine never leak across the split.",
      "Trained an LSTM for remaining useful life and a work-order severity classifier (TF-IDF baseline and DistilBERT exported to ONNX), and a rule that merges both into one priority score.",
      "Served it with FastAPI and ONNX Runtime in Docker, monitored with Prometheus and Grafana (sensor drift, 4 alerts, retraining trigger), with 112 automated tests and CI.",
    ],
    decisaoRotulo: "Finding",
    decisao:
      "On the FD001 engines the Random Forest (RMSE 11.96) beat the LSTM (13.13 to 13.42) after five attempts to improve it, and DistilBERT only tied the TF-IDF baseline. Both results are in the repository. The work orders are generated, because there is no public Portuguese set, and the docs say so.",
    stack: ["Python", "Keras", "scikit-learn", "spaCy", "ONNX", "FastAPI", "Prometheus", "Grafana", "Docker", "pytest"],
    imagem: img("predictive-maintenance-grafana"),
    alt: "Grafana dashboard with the maintenance queue ranked by priority, remaining useful life, sensor drift, severity, latency and F1.",
    legenda: "The Grafana dashboard: the maintenance queue at the top.",
    galeria: [
      {
        src: img("predictive-maintenance-rul"),
        alt: "Bar chart of RMSE for the constant mean, the Random Forest and the LSTM. The Random Forest has the lowest error.",
        legenda: "Remaining life: the Random Forest beats the LSTM.",
      },
      {
        src: img("predictive-maintenance-triagem"),
        alt: "Confusion matrix of the work order triage across four severity levels. Errors concentrate between neighboring levels.",
        legenda: "Triage: errors stay between neighboring severities.",
      },
      {
        src: img("predictive-maintenance-alertas"),
        alt: "Grafana alert rules with sensor drift, critical remaining life and the F1 drop firing.",
        legenda: "Alerts loaded from files, firing during a drift test.",
      },
    ],
    links: {
      demo: null,
      codigo: "https://github.com/samuelmel/manutencao-preditiva",
      releases: null,
    },
    destaque: true,
  },
  {
    slug: "crypto-analyzer",
    numero: "02",
    ano: "2026",
    status: "active",
    titulo: "Crypto Analyzer",
    resumo:
      "Can a trading rule beat simply buying and holding a cryptocurrency? I tested it with a written protocol instead of a hunch.",
    curto: "Tests 14 trading rules against buy and hold. Almost none win.",
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
    slug: "economic-risk-monitor",
    numero: "03",
    ano: "2026",
    status: "done",
    titulo: "Economic Risk Monitor",
    resumo:
      "Which of five economies carries more economic risk, according to World Bank data from 2010 to 2023?",
    curto: "World Bank data through raw, silver and gold into a risk score and a Streamlit dashboard.",
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
