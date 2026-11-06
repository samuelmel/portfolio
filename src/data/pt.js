// Traduções em português. Só texto: imagens, links e stack vêm dos arquivos base.

export const profilePt = {
  frase: "Engenharia de dados, ciência de dados e machine learning.",
  ficha: [
    { k: "Cidade", v: "Fortaleza, CE, Brasil" },
    { k: "Atual", v: "Estagiário de Engenharia de Dados, Unitech \u2013 Unimed" },
    { k: "Curso", v: "Ciência da Computação, Estácio" },
    { k: "Foco", v: "Dados, inteligência artificial, estatística" },
  ],
  skills: { languages: "Linguagens", data: "Dados", tools: "Ferramentas" },
};

export const projectsPt = {
  "crypto-analyzer": {
    curto: "Testa 14 regras de trading contra comprar e segurar. Quase nenhuma vence.",
    curto: "Testa 14 regras de trading contra comprar e segurar. Quase nenhuma vence.",
    resumo:
      "Uma regra de trading consegue vencer simplesmente comprar e segurar uma criptomoeda? Testei com protocolo escrito, não com palpite.",
    feitos: [
      "Testei 14 regras de trading (tendência, rompimento, momento, RSI, Bollinger, seleção de moedas) contra comprar e segurar, com o protocolo escrito antes de rodar.",
      "Usei intervalos de confiança por bootstrap e correção para múltiplos testes, para que uma regra com sorte não passe por descoberta.",
      "Montei o pipeline em Python (dados em Parquet, FastAPI somente leitura, painel em React) e um resumo diário no Telegram, com pytest, mypy --strict e CI.",
    ],
    decisaoRotulo: "Achado",
    decisao:
      "Depois da correção, nenhuma das 14 regras mostrou vantagem confirmada sobre comprar e segurar, e três foram significativamente piores. Ficar em dinheiro abaixo da média de 200 dias baixou a queda máxima média de 80% para 65% em 47 moedas (2017–2024). Os resultados são exploratórios e não são recomendação de investimento.",
    alt: "Painel do Crypto Analyzer com a visão geral do dia, moedas e sinais.",
    legenda: "O painel, visão geral do dia.",
    galeria: [
      {
        alt: "Gráfico de pontos da diferença de Sharpe contra comprar e segurar para 14 estratégias, com intervalos de confiança. A maioria dos intervalos cruza o zero.",
        legenda: "14 regras contra comprar e segurar. Laranja: o intervalo não inclui zero.",
      },
      {
        alt: "Gráfico comparando queda máxima e oscilação com e sem o filtro da média de 200 dias.",
        legenda: "A média de 200 dias e a queda máxima.",
      },
      {
        alt: "Gráfico comparando as 5 escolhas do modelo com escolhas ao acaso.",
        legenda: "O modelo de IA contra o acaso.",
      },
    ],
    codigoNota: "Repositório privado. Código sob pedido.",
  },
  "crypto-lakehouse": {
    curto: "Pipeline idempotente: CoinGecko para MinIO, dbt + DuckDB, Airflow e Databricks.",
    curto: "Pipeline idempotente: CoinGecko para MinIO, dbt + DuckDB, Airflow e Databricks.",
    resumo:
      "Como coletar dados de mercado de um jeito que dê para reprocessar, testar e reconstruir sem duplicar nada?",
    feitos: [
      "Ingestão idempotente da API da CoinGecko para o MinIO (compatível com S3), com chaves determinísticas na camada raw.",
      "Camadas silver e gold em dbt + DuckDB, gravadas em Parquet, com star schema: duas dimensões, uma tabela fato de preços e uma agregação diária de volatilidade.",
      "DAGs no Airflow para ingestão, para a rodada silver-gold e para enviar os arquivos gold ao Databricks, onde um notebook PySpark cria as tabelas Delta.",
    ],
    decisaoRotulo: "Decisão",
    decisao:
      "O dado bruto fica intocado, então qualquer camada seguinte pode ser reconstruída. A qualidade é checada a cada etapa: testes dbt de not_null, unique e relationships, testes unitários com S3 e HTTP simulados e uma checagem de que reprocessar não cria duplicatas.",
    alt: "Diagrama do star schema com dim_cryptos, dim_calendario, fact_precos_mercado e agg_volatilidade_diaria.",
    legenda: "A camada gold: star schema.",
  },
  "economic-risk-monitor": {
    curto: "Dados do Banco Mundial em raw, silver e gold, até uma nota de risco e um dashboard Streamlit.",
    curto: "Dados do Banco Mundial em raw, silver e gold, até uma nota de risco e um dashboard Streamlit.",
    resumo:
      "Qual de cinco economias carrega mais risco econômico, segundo os dados do Banco Mundial de 2010 a 2023?",
    feitos: [
      "Extraí cinco indicadores da API do Banco Mundial (PIB, PIB per capita, inflação, desemprego, população) para Brasil, Estados Unidos, Argentina, Alemanha e China.",
      "Levei os dados por camadas raw, silver e gold até o SQLite, com checagens de qualidade entre as camadas.",
      "Calculei uma nota de risco econômico por país e servi em um dashboard Streamlit + Plotly, com pytest cobrindo extração, transformação e nota.",
    ],
    decisaoRotulo: "Decisão",
    decisao:
      "Cada camada tem uma função: raw guarda a resposta da API como veio, silver limpa e padroniza, gold tem o resumo por país e a nota de risco. Assim a nota pode ser rastreada até a resposta original.",
    alt: "Dashboard Streamlit do Economic Risk Monitor com as notas de risco por país.",
    legenda: "O dashboard.",
    galeria: [
      {
        alt: "Visão do dashboard com indicadores econômicos por país ao longo do tempo.",
        legenda: "Indicadores por país.",
      },
    ],
  },
};

export const ui = {
  en: {
    lang: "en",
    nav: { skills: "Skills", projects: "Projects", contact: "Contact", cv: "CV", menu: "Menu", close: "Close", switchTo: "Português", switchLabel: "Ver o site em português" },
    hero: { view: "View projects", email: "Email me", cv: "CV (PDF)" },
    projects: { title: "Three projects, each with a question, a method and a finding", more: "More on GitHub", did: "What I did", caso: "Case", code: "Source code", demo: "Live demo", releases: "Releases", ask: "Ask for access", more_: "Details", less: "Hide", askSubject: "Code for", stack: "Stack" },
    status: { active: "Ongoing", study: "Study", done: "Done" },
    skills: { title: "What I work with" },
    contact: { title: "Contact" },
    footer: { place: "Fortaleza, Brazil", source: "Site source" },
  },
  pt: {
    lang: "pt-BR",
    nav: { skills: "Habilidades", projects: "Projetos", contact: "Contato", cv: "CV", menu: "Menu", close: "Fechar", switchTo: "English", switchLabel: "View the site in English" },
    hero: { view: "Ver projetos", email: "Enviar e-mail", cv: "CV (PDF)" },
    projects: { title: "Três projetos, cada um com pergunta, método e achado", more: "Mais no GitHub", did: "O que eu fiz", caso: "Caso", code: "Código", demo: "Demo", releases: "Releases", ask: "Pedir acesso", more_: "Detalhes", less: "Ocultar", askSubject: "Código de", stack: "Stack" },
    status: { active: "Em andamento", study: "Estudo", done: "Concluído" },
    skills: { title: "Com o que eu trabalho" },
    contact: { title: "Contato" },
    footer: { place: "Fortaleza, Brasil", source: "Código do site" },
  },
};
