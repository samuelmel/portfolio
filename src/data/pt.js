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
  "predictive-maintenance": {
    curto: "Define qual motor revisar primeiro, juntando um modelo LSTM de vida útil com PLN nas ordens de serviço.",
    resumo:
      "Qual motor a manutenção deve olhar primeiro, considerando quanto tempo ele ainda dura e o que os operadores escrevem nas ordens de serviço?",
    feitos: [
      "Montei os dados em camadas bronze, silver e gold sobre o NASA C-MAPSS, com checksums nos arquivos originais e divisão treino/validação por motor, para que janelas de um motor nunca vazem entre os conjuntos.",
      "Treinei um LSTM de vida útil restante e um classificador de gravidade das ordens (TF-IDF de referência e DistilBERT exportado para ONNX), e uma regra que junta os dois em uma nota de prioridade.",
      "Servi tudo com FastAPI e ONNX Runtime em Docker, monitorado com Prometheus e Grafana (drift dos sensores, 4 alertas, gatilho de retreino), com 112 testes automatizados e CI.",
    ],
    decisaoRotulo: "Achado",
    decisao:
      "Nos motores do FD001, o Random Forest (RMSE 11,96) venceu o LSTM (13,13 a 13,42) depois de cinco tentativas de melhorar o LSTM, e o DistilBERT só empatou com o TF-IDF. Os dois resultados estão no repositório. As ordens de serviço são geradas, porque não existe base pública em português, e a documentação diz isso.",
    alt: "Painel do Grafana com a fila de manutenção por prioridade, vida útil restante, drift dos sensores, gravidade, latência e F1.",
    legenda: "O painel do Grafana: a fila de manutenção no topo.",
    galeria: [
      {
        alt: "Gráfico de barras do RMSE da média constante, do Random Forest e do LSTM. O Random Forest tem o menor erro.",
        legenda: "Vida útil: o Random Forest vence o LSTM.",
      },
      {
        alt: "Matriz de confusão da triagem das ordens de serviço em quatro níveis de gravidade. Os erros ficam entre níveis vizinhos.",
        legenda: "Triagem: os erros ficam entre gravidades vizinhas.",
      },
      {
        alt: "Regras de alerta do Grafana com drift dos sensores, vida útil crítica e queda do F1 disparados.",
        legenda: "Alertas carregados de arquivos, disparando num teste de drift.",
      },
    ],
  },
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
