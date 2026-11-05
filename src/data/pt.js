// Traduções em português. Só texto: imagens, links e stack vêm dos arquivos base.

export const profilePt = {
  frase: "Engenharia de dados com método: pipelines testados e análises honestas.",
  ficha: [
    { k: "Cidade", v: "Fortaleza, CE, Brasil" },
    { k: "Estudo", v: "Ciência da Computação" },
    { k: "Procuro", v: "Estágio em engenharia ou análise de dados" },
    { k: "Foco", v: "Pipelines, estatística, qualidade de dados" },
  ],
  sobre: [
    "Sou estudante de Ciência da Computação em Fortaleza e procuro estágio em engenharia ou análise de dados.",
    "Escrevo a pergunta e o teste antes de rodar a análise, comparo o resultado com uma referência simples e conto o que não funcionou. O Crypto Analyzer terminou com “quase nada vence comprar e segurar”, e esse é o resultado que publiquei.",
    "Meus pipelines seguem o padrão medalhão (raw, silver, gold) e vêm com testes: checagens do dbt, pytest e CI.",
  ],
  stackGrupos: {
    Analysis: "Análise",
    Pipelines: "Pipelines",
    Quality: "Qualidade",
    Delivery: "Entrega",
  },
  stackNota: "Tudo o que está listado aqui é usado nos três projetos acima.",
  agora: [
    "Ampliando os estudos do Crypto Analyzer. O modelo de IA ainda está em teste e só dá opinião.",
    "Estudando o lado Databricks do Crypto Lakehouse: tabelas Delta e governança de dados.",
  ],
};

export const projectsPt = {
  "crypto-analyzer": {
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
    nav: { projects: "Projects", about: "About", contact: "Contact", cv: "CV", menu: "Menu", close: "Close", switchTo: "Português", switchLabel: "Ver o site em português" },
    hero: { view: "View projects", email: "Email me", cv: "CV (PDF)" },
    projects: { title: "Three projects, each with a question, a method and a finding", more: "More on GitHub", did: "What I did", caso: "Case", code: "Source code", demo: "Live demo", releases: "Releases", ask: "Ask for access", askSubject: "Code for", stack: "Stack" },
    status: { active: "Ongoing", study: "Study", done: "Done" },
    about: { title: "About", use: "What I use", now: "Now" },
    contact: { title: "Contact", text: "I'm looking for an internship in data engineering or analysis. The fastest way to reach me is email." },
    footer: { place: "Fortaleza, Brazil", source: "Site source" },
  },
  pt: {
    lang: "pt-BR",
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato", cv: "CV", menu: "Menu", close: "Fechar", switchTo: "English", switchLabel: "View the site in English" },
    hero: { view: "Ver projetos", email: "Enviar e-mail", cv: "CV (PDF)" },
    projects: { title: "Três projetos, cada um com pergunta, método e achado", more: "Mais no GitHub", did: "O que eu fiz", caso: "Caso", code: "Código", demo: "Demo", releases: "Releases", ask: "Pedir acesso", askSubject: "Código de", stack: "Stack" },
    status: { active: "Em andamento", study: "Estudo", done: "Concluído" },
    about: { title: "Sobre", use: "O que eu uso", now: "Agora" },
    contact: { title: "Contato", text: "Procuro estágio em engenharia ou análise de dados. O jeito mais rápido de falar comigo é por e-mail." },
    footer: { place: "Fortaleza, Brasil", source: "Código do site" },
  },
};
