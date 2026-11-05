# Portfólio do Samuel: auditoria e plano de refação

> Documento para o Sonnet executar. Feito em 2026-11-05 a partir do código deste repositório,
> do site publicado (https://samuelmel.github.io/portfolio/, visto em 1920px e 375px) e dos
> projetos em `D:\Downloads\pastas codigo\`.
>
> **Antes de começar:** carregue as skills `hallmark` (direção visual sem cara de IA),
> `layout-tela-cheia` (regra global do Samuel) e `frontend-design`. No fim, rode `web-review`
> no resultado. Siga as regras globais: commits sem coautor, nunca `git push` sem pedido.

---

## 1. Resumo em uma frase

O site atual é bem feito tecnicamente, mas é o tema "terminal hacker" genérico, mostra só
4 projetos antigos (até maio/2026) e esconde o que o Samuel faz de mais forte hoje: **software
completo que gente de verdade usa** (app Windows em Rust com auto-update, ferramenta que roda
numa mesa de RPG, sistema de documentos para um despachante, lakehouse de dados com dbt/Airflow).

---

## 2. Auditoria

### 2.1 Precisa corrigir (custa visitante ou credibilidade)

| # | Onde | Problema | Por que importa |
|---|---|---|---|
| A1 | `src/data/projects.js` | Só 4 projetos, todos de jan–mai/2026. Faltam PartilharTela, Crypto Lakehouse, Crypto Analyzer, Arquivo de Investigadores, Despachante, Clara, Assimilação, Acad. | O recrutador vê um estudante de "bot de Telegram e CRUD Flask", não alguém que entrega app desktop em Rust e pipeline com dbt. |
| A2 | `Hero.jsx`, `Footer.jsx`, `Navbar.jsx` | Dados inventados: `latency 12ms`, `uptime active`, `session: persistent · build: stable`, linhas `[ OK ] loading kernel modules`, relógio ao vivo `FOR_BR`. | Enfeite que finge ser informação. Lê como template. |
| A3 | `src/data/skills.js`, `Skills.jsx` | Barras de porcentagem auto-atribuídas (Python 92%, Wireshark 65%…). | Números sem base; recrutador ignora ou desconfia. É o anti-padrão mais citado em portfólio. |
| A4 | Todos os componentes (`max-w-7xl`) | Conteúdo numa coluna de 1280px; em 1920px sobram **315px vazios de cada lado**. | Viola a regra `layout-tela-cheia`. |
| A5 | `Projects.jsx` | Nenhuma imagem, demo, data ou resultado. Card inteiro tem hover mas só o texto "view source" é link. Métricas fracas (`arch: modular`, `deploy: docker`). | Projeto sem print e sem "o que resolveu" não convence. |
| A6 | `Contact.jsx`, `Hero.jsx` | E-mail `samuelmsantos021@gmail.com`. **Confirmar com o Samuel se é o e-mail certo** (a conta dele usa outro). | Contato errado = oportunidade perdida. |
| A7 | Celular (375px) | O nome só aparece depois de ~4 linhas de boot e um YAML; a primeira tela é quase toda "terminal". A página tem 7.200px de altura. | Em 3 segundos o visitante não sabe quem é nem o que faz. |

### 2.2 Deve corrigir (parece genérico ou inacabado)

| # | Onde | Problema |
|---|---|---|
| B1 | `index.css` | Inter + JetBrains Mono, verde neon, grid de fundo, scanline, glow: a estética "dev hacker" padrão. Nada nela é do Samuel. |
| B2 | Títulos | "System profile", "Capabilities", "Communication panel": jargão de tema, não diz nada. |
| B3 | `About.jsx` | Texto genérico ("I enjoy learning by building real-world projects"). Não fala de RPG, Fortaleza, local-first, honestidade com dados: o que o torna único. |
| B4 | `Resume.jsx`, `public/resume_samuel.pdf` | Seção de currículo removida do `App.jsx`, mas o componente e o PDF continuam; numeração das seções pula de 03 para 05. Decidir: volta (link "CV" no topo) ou sai de vez. |
| B5 | `README.md` | Diz `base: "./"` e `public/resume.pdf`; o real é `base: "/portfolio/"` e `resume_samuel.pdf`. Dois caminhos de deploy (`docs/` versionado **e** script `gh-pages`). Escolher um. |
| B6 | `index.html` | `class="bg-slate-950"` sem efeito; sem favicon, sem `og:image`/`og:title`, sem `theme-color`. Link compartilhado no LinkedIn/WhatsApp sai sem prévia. |

### 2.3 Polimento

- C1. Fontes via `@import` no CSS bloqueiam a renderização: usar `<link rel="preconnect">` + `<link>` no `index.html` (ou self-host com `@fontsource`).
- C2. Animações (cursor piscando, boot) sem `prefers-reduced-motion`.
- C3. Botão do menu mobile sem `aria-expanded` / `aria-controls`.
- C4. Muito texto em `text-[11px]` mono: pequeno demais para leitura.
- C5. Relógio re-renderiza a navbar a cada segundo (some junto com A2).

### 2.4 O que está bom e deve ficar

- Stack simples (Vite + React + Tailwind), dados separados em `src/data/`, build limpo.
- Sem rolagem horizontal em 375px; navegação com seção ativa (IntersectionObserver).
- O gosto por monoespaçada como **detalhe** (metadados, datas, IDs) combina com ele. Manter só nesse papel.

---

## 3. Quem é o Samuel (base para texto e identidade)

Fatos tirados dos projetos; usar estes, não inventar:

- Estudante de Ciência da Computação em **Fortaleza/CE**, procurando estágio.
- Foco: **engenharia de dados**, **backend/automação** e **segurança**. Também entrega front (React, Next.js) e desktop (Tauri/Rust, CustomTkinter).
- Faz software para uso real e para pessoas próximas: a mesa de RPG dele (Cthulhu, Assimilação, modo RPG no PartilharTela), um despachante de cargas, o próprio treino (Acad), uma pesquisa acadêmica (Clara).
- **Local-first e privacidade** aparecem sempre: Despachante "100% local, nenhum documento sai do computador"; Acad "sem login, sem backend, sem telemetria"; Arquivo de Investigadores roda no navegador com IndexedDB.
- **Honestidade com dados**: o Crypto Analyzer conclui que "quase nada vence comprar e segurar" e existe para mostrar o que não funciona.
- Testa o que faz: pytest, Playwright, CI no GitHub Actions, Zod, Hypothesis.

**Frase de posicionamento sugerida (hero):**
> "Construo software que as pessoas usam de verdade: pipelines de dados, ferramentas locais e apps completos, do Rust ao dashboard."

(Versão EN: "I build software people actually use: data pipelines, local-first tools and full apps, from Rust to dashboards.")

---

## 4. Projetos: o que entra e em que ordem

Todos os caminhos são relativos a `D:\Downloads\pastas codigo\`. **Leia o README de cada um
antes de escrever o texto** e confira números (versão, commits, nº de respostas) direto na fonte.

### Destaques (estudo de caso, com imagem grande)

| Ordem | Projeto | Pasta / repo | Por que é destaque | Stack | Link |
|---|---|---|---|---|---|
| 1 | **PartilharTela** | `COMPARTILHARTELAV2` · github.com/samuelmel/partilhartela (público) | Mais impressionante: app Windows em Tauri 2 + Rust que captura tela e áudio por aplicativo (WASAPI), codifica H.264 por hardware (Media Foundation), transmite por WebRTC (LiveKit). Servidor Fastify, login Discord, bot que liga canal de voz a sala, auto-update, v2.0.4. | Rust, Tauri 2, React, TypeScript, LiveKit/WebRTC, Fastify, Discord API | Repo + Releases |
| 2 | **Crypto Lakehouse** | `projeto_engenharia_de_dados` · crypto-lakehouse-medallion (público) | Engenharia de dados "de verdade": medalhão bronze/silver/gold, dbt, DuckDB, Airflow, Docker, Databricks. Casa com a vaga que ele quer. | Python, dbt, DuckDB, Airflow, Docker | Repo |
| 3 | **Crypto Analyzer** | `projeto cripto/crypto-analyzer` · cripto-analysis (**privado**) | A história mais marcante: testa com método estatístico se dá para vencer "comprar e segurar", e a resposta honesta é "quase nunca". Painel web + resumo diário no Telegram + CI. | Python, estatística, CI, Telegram | Sugerir ao Samuel tornar público; senão "código sob pedido" |
| 4 | **Arquivo de Investigadores** | `coc` · cutulu-fichas (privado, **no ar** em https://cutulu-fichas.vercel.app) | 155 commits. Motor de regras puro e testado, assistente de 8 etapas, ficha viva, impressão em PDF, mesa online do Mestre (Redis). Tem demo para clicar. | Next.js, TypeScript, Dexie/IndexedDB, Zod, Playwright, Upstash Redis | Demo ao vivo |
| 5 | **Despachante** | `projeto despachante` · (privado) | Problema real de um cliente: organizar e conferir documentos de cargas para o Ministério da Agricultura. Validação de AWB, detecção de duplicata, fluxo de aprovação, tudo local. | Python (uv), backend local + frontend web, app Windows | "Código privado"; usar prints com **dados de teste** |
| 6 | **Clara** | `clara` · (privado) | Dados com gente: painel Streamlit de uma pesquisa com 147 respostas sobre relacionamentos, cortes por gênero, religião, renda. | Python, Streamlit, pandas, SPSS | Prints |

### Outros projetos (lista compacta, sem imagem grande)

- **Assistente do Assimilador** (`assimilação rpg projeto codigo`): FastAPI + React/TS, regras de RPG em domínio testado, 38 commits.
- **Acad** (`acad`): PWA/Capacitor de treino e alimentação, offline, sem backend, Playwright.
- **Deal Hunter** (`Deal-Hunter`, público): scraping de ofertas (KaBuM), histórico de preços, Telegram.
- **Economic Risk Monitor** (`worldbank-api`, público): API do Banco Mundial, medalhão, Streamlit.
- **Network Security Monitor** (público) e **Sentinel Lite** (`Sentinel Lite`, público): monitoramento de rede, Scapy.

### Arquivo (só nome + link, ou sai)

Task Manager REST API, Vagas TI Bot, YouTube Audio Downloader, Estoque RAD, exercícios de POO/C#.
Ficam numa linha "mais no GitHub" ou não aparecem.

**Não colocar:** RPG SITE, pdfs, aumentarqualidadefotos, candidatura, tradução, projeto sk (é de cliente/empresa, confirmar antes), servidor Minecraft (opcional, como curiosidade de infra).

### Formato de cada estudo de caso

```
Nº · ano · status (no ar / em uso / estudo)
Título
Uma linha: o problema e para quem.
O que eu fiz (3 itens concretos, com número quando houver fonte)
Decisão técnica interessante (1 parágrafo curto: ex. "H.264 pelo Media Foundation em vez de software para não travar o jogo")
Stack (chips pequenos)
[Imagem/print grande ao lado]   [Links: demo · código · releases]
```

Atualizar `src/data/projects.js` para este formato: `slug, numero, ano, status, titulo, resumo,
feitos[], decisao, stack[], imagem, links{demo, codigo, releases}, destaque:boolean`.

---

## 5. Direção visual: "Dossiê"

Para ser marcante sem cair no clichê, trocar o "terminal hacker" por um **dossiê / arquivo de casos**:
liga a paixão por RPG de investigação (Cthulhu, "Arquivo de Investigadores") ao trabalho com dados
e segurança, sem virar fantasia.

- **Tipografia como protagonista.** Nome enorme no hero (clamp até ~10rem), numa serifada ou
  grotesca com personalidade (ex.: *Fraunces*, *Instrument Serif*, *Space Grotesk*, *IBM Plex Sans Condensed*;
  escolha uma com a skill `hallmark`). Monoespaçada (*IBM Plex Mono* ou *JetBrains Mono*) só para
  metadados: números de caso, datas, status, stack.
- **Cor.** Fundo papel/creme claro *ou* grafite profundo; **um** acento forte e raro (ex.: vermelho
  carimbo `oklch(0.6 0.2 30)` ou âmbar). Nada de verde neon, gradientes ou glow. Se fizer modo
  claro/escuro, tokens em `:root` + `@media (prefers-color-scheme)`.
- **Linguagem gráfica.** Fios finos, numeração de casos (`CASO 01`), carimbos de status
  ("EM USO", "NO AR", "ESTUDO"), etiquetas de data, grid editorial assimétrico. Prints dos
  projetos com moldura simples.
- **Movimento.** Pouco e com propósito: entrada dos casos ao rolar, hover que revela a imagem.
  Tudo desligado em `prefers-reduced-motion`.
- **Proibido:** dados inventados, barras de %, cards idênticos em grade 3×3, emojis como ícone,
  glassmorphism, "boot" falso.

### Layout (regra `layout-tela-cheia`)

- Container: `width: min(100% - 2*clamp(1rem, 2.6vw, 3rem), 120rem); margin-inline: auto`.
  Remover todos os `max-w-7xl` dos wrappers. `max-width: 65ch` só em parágrafos.
- **Hero (≥1000px):** nome gigante ocupando a largura à esquerda; à direita uma coluna "ficha"
  com: cidade, curso, status "procurando estágio", foco, links (GitHub, LinkedIn, e-mail, CV).
- **Casos (≥1400px):** cada destaque em grid de 12 colunas: número/metadados (2 col), texto
  (4 col), imagem (6 col); alternar o lado da imagem. ≥1000px: texto + imagem lado a lado.
- **Outros projetos:** tabela/índice de largura total (nome · o que faz · stack · ano · link).
- **Sobre + stack:** duas/três colunas: texto curto, "o que uso" agrupado **sem porcentagem**
  (ex.: "uso todo dia / já entreguei projeto / estudando"), "agora" (o que está construindo).
- **Contato:** faixa de ponta a ponta com o e-mail grande e clicável.
- Celular: tudo colapsa em uma coluna; nome + frase + botão "Ver projetos" visíveis na primeira tela.

---

## 6. Estrutura da página

1. **Navbar** fina: "Samuel Mendes" · Projetos · Sobre · Contato · CV · alternar PT/EN.
2. **Hero**: nome, frase de posicionamento (seção 3), ficha lateral, 2 ações: *Ver projetos* (principal) e *E-mail*.
3. **Casos** (6 destaques, seção 4).
4. **Outros projetos** (índice).
5. **Sobre**: 3–4 frases na voz dele (Fortaleza, CC, local-first, faz ferramenta para a mesa de RPG e para gente de verdade, honesto com dados) + stack agrupada + "Agora": o que está fazendo neste mês.
6. **Contato** + rodapé simples (ano, cidade, link do código do site).

**Idioma:** site principal em **inglês** (como hoje) com alternância para **português**
(dicionário simples em `src/i18n.js`, escolha salva em `localStorage` com try/catch).
*Confirmar com o Samuel; se ele preferir só um idioma, pular.*

---

## 7. Tarefas para o Sonnet (em ordem)

1. **Ler** os READMEs dos 6 destaques e dos 5 secundários (caminhos na seção 4). Anotar só fatos verificáveis.
2. **Perguntar ao Samuel** (de uma vez só): e-mail certo; se o CV volta (e se o PDF está atualizado); se pode citar o Despachante e o Clara; se torna o Crypto Analyzer público; PT/EN ou um idioma.
3. **Limpeza:** remover `Resume.jsx` se o CV não voltar (ou virar link no topo), `class="bg-slate-950"`, relógio, boot, footer falso, `skills.js` com %. Corrigir README (base, nome do PDF, um só caminho de deploy).
4. **Dados:** reescrever `src/data/projects.js` no formato da seção 4; criar `src/data/profile.js` (nome, frase, links, "agora").
5. **Imagens:** criar `public/projects/<slug>.webp` (≤ 200 KB, 1600px de largura). Prints reais rodando cada app; Despachante e Clara **só com dados de teste/anonimizados**. Se não der para gerar algum print, usar placeholder tipográfico (nome + número do caso), nunca imagem de banco.
6. **Design system:** tokens novos em `index.css` + `tailwind.config.js` (cores, fontes, espaçamento), fontes via `<link>` no `index.html`.
7. **Componentes:** `Navbar`, `Hero`, `CaseStudy`, `ProjectIndex`, `About`, `Contact`, `Footer`. Apagar os que não forem usados.
8. **SEO/compartilhamento:** favicon (SVG com as iniciais), `og:image` 1200×630, `og:title`, `og:description`, `theme-color`, `lang` certo ao trocar idioma.
9. **Acessibilidade:** contraste ≥ 4,5:1, foco visível, `aria-expanded` no menu, `alt` descritivo nas imagens, texto mínimo 14px, `prefers-reduced-motion`.
10. **Verificar:** `npm run build` sem erro; screenshots em **1920, 1280 e 375px** (laterais preenchidas, sem rolagem horizontal, nome + ação na 1ª tela do celular); todos os links abrem; rodar a skill `web-review`.
11. **Commit** (`feat(portfolio): ...`, sem coautor). **Não** fazer push nem deploy sem o Samuel pedir.

---

## 8. Critério de pronto

- [ ] Os 6 destaques aparecem com imagem, problema, o que foi feito, decisão técnica e links que funcionam.
- [ ] Nenhum número inventado na página (nada de %, latência, uptime).
- [ ] Em 1920px, nenhuma lateral vazia > ~10% da largura.
- [ ] Em 375px, nome + frase + "Ver projetos" visíveis sem rolar; sem rolagem horizontal.
- [ ] Prévia de link (og:image) aparece ao colar a URL.
- [ ] `npm run build` passa; README bate com a configuração real.
- [ ] Um visitante consegue dizer em 5 segundos: quem é, o que faz, onde ver o melhor projeto.
