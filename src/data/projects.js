export const projects = [
  {
    id: "svc_01",
    name: "Economic Risk Monitor",
    category: "Data Engineering",
    description:
      "End-to-end pipeline using World Bank API with Medallion architecture, ETL processing, economic risk scoring and Streamlit dashboards.",
    stack: ["Python", "SQL", "SQLite", "pandas", "Streamlit", "Plotly", "pytest"],
    highlights: [
      "World Bank API integration",
      "Medallion architecture",
      "ETL pipeline",
      "Economic risk scoring",
      "Data quality validation",
      "Interactive dashboard",
    ],
    metrics: [
      { k: "countries", v: "5" },
      { k: "records", v: "342" },
      { k: "architecture", v: "medallion" },
      { k: "qa", v: "automated" },
    ],
    tags: ["etl", "dashboard", "api"],
    status: "active",
    github: "https://github.com/samuelmel/economic-risk-monitor",
  },
  {
    id: "svc_03",
    name: "Network Security Monitor",
    category: "Cybersecurity",
    description:
      "Python-based monitoring tool for host discovery, port scanning and suspicious activity detection.",
    stack: ["Python", "SQLite", "Scapy", "Networking"],
    highlights: [
      "Host discovery",
      "Port scanning",
      "Event logging",
      "Threat detection logic",
    ],
    metrics: [
      { k: "scan", v: "host/port" },
      { k: "alerts", v: "rule-based" },
    ],
    tags: ["security", "network", "cli"],
    status: "active",
    github: "https://github.com/samuelmel/Network-Security-Monitor",
  },
  {
    id: "svc_04",
    name: "Task Management REST API",
    category: "Backend",
    description:
      "RESTful API using Flask, PostgreSQL and Docker with modular architecture.",
    stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Docker"],
    highlights: [
      "REST API",
      "CRUD operations",
      "PostgreSQL database",
      "Dockerized environment",
      "Modular architecture with Blueprints",
    ],
    metrics: [
      { k: "arch", v: "modular" },
      { k: "deploy", v: "docker" },
    ],
    tags: ["api", "backend", "crud"],
    status: "stable",
    github: "https://github.com/samuelmel/RESTful-Task-Manager",
  },
  {
    id: "svc_05",
    name: "Public Tender Monitoring Bot",
    category: "Automation",
    description:
      "Bot for monitoring IT-related public tenders with SQLite persistence and Telegram notifications.",
    stack: ["Python", "BeautifulSoup", "SQLite", "Telegram Bot API"],
    highlights: [
      "Web scraping",
      "SQLite persistence",
      "Duplicate detection",
      "Telegram notifications",
    ],
    metrics: [
      { k: "source", v: "scraping" },
      { k: "notify", v: "telegram" },
    ],
    tags: ["bot", "scraping", "automation"],
    status: "active",
    github: "https://github.com/samuelmel/Vagas-TI-Bot",
  },
];
