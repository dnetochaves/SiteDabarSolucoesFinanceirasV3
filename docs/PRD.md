# PRD — Site Institucional Dabar Soluções Financeiras
**Versão:** 1.3 · **Data:** Abril 2026 · **Autor:** Rafael Mendes — Arquiteto de Software Sênior  
**Status:** Em desenvolvimento

---

## Índice
1. [Visão Geral](#1-visão-geral)
2. [Modelo de Conversão — WhatsApp por Produto](#2-modelo-de-conversão--whatsapp-por-produto)
3. [Portfólio de Produtos](#3-portfólio-de-produtos)
4. [Arquitetura de Informação](#4-arquitetura-de-informação)
5. [Requisitos Funcionais](#5-requisitos-funcionais)
6. [Requisitos Não Funcionais](#6-requisitos-não-funcionais)
7. [Stack Técnica](#7-stack-técnica)
8. [Design System e Estilo Visual](#8-design-system-e-estilo-visual)
9. [Critérios de Aceite](#9-critérios-de-aceite)
10. [Fora do Escopo — v1.0](#10-fora-do-escopo--v10)
11. [Roadmap de Entregas](#11-roadmap-de-entregas)

---

## 1. Visão Geral

### 1.1 Contexto
O site atual da Dabar (dabar.com.br) não reflete a amplitude do portfólio atual nem possui a identidade visual consolidada no Manual de Marca. A recriação entrega uma plataforma institucional moderna, performática e orientada à conversão — conectando cada visitante diretamente a um consultor Dabar especializado no produto de interesse, via WhatsApp.

### 1.2 Objetivo de Negócio
- Apresentar o portfólio completo de soluções financeiras de forma clara e organizada
- Converter visitantes em atendimentos via WhatsApp com contexto do produto — sem fricção
- Garantir que o consultor receba a mensagem já identificando o produto de interesse
- Fortalecer a credibilidade e autoridade institucional da marca
- Garantir presença digital otimizada para SEO e dispositivos móveis
- Assegurar performance, acessibilidade e conformidade com a LGPD

### 1.3 Público-Alvo
| Segmento | Perfil e Necessidade |
|---|---|
| Pessoa Física (PF) | Busca crédito, seguro, consórcio ou financiamento. Prioriza clareza e confiança. |
| Pessoa Jurídica (PJ) | Necessita de factoring, câmbio/remessa ou soluções empresariais. |
| Parceiros / Indicadores | Quer entender o programa Dabar Indica+ e como encaminhar clientes. |
| Investidor / Precatório | Busca informações sobre antecipação de precatórios. |

---

## 2. Modelo de Conversão — WhatsApp por Produto

> ⚠️ **Decisão de produto:** Todo e qualquer contato com o cliente é redirecionado para o WhatsApp. Não haverá formulários de captura de leads nem simuladores no site. Cada produto possui CTA WhatsApp com mensagem pré-preenchida.

### 2.1 Padrão de URL
```
https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Olá!%20Tenho%20interesse%20em%20[PRODUTO].%20Gostaria%20de%20falar%20com%20um%20consultor%20especializado.
```

Sempre usar `buildWhatsAppLink(produto)` de `lib/whatsapp.ts` — nunca montar a URL manualmente.

### 2.2 Mensagens por Produto
| Produto | Texto da mensagem (decodificado) |
|---|---|
| Seguro de Vida | Olá! Tenho interesse em Seguro de Vida. Gostaria de falar com um consultor especializado. |
| Seguro Auto e Residencial | Olá! Tenho interesse em Seguro Automóvel e Residencial. Gostaria de falar com um consultor. |
| Seguro Empresarial | Olá! Tenho interesse em Seguro Empresarial. Gostaria de falar com um consultor. |
| Seguro Viagem | Olá! Tenho interesse em Seguro Viagem. Gostaria de falar com um consultor. |
| Consignado CLT | Olá! Tenho interesse em Crédito Consignado CLT. Gostaria de falar com um consultor. |
| FGTS Saque-Aniversário | Olá! Tenho interesse em Crédito Consignado FGTS / Saque-Aniversário. Gostaria de falar com um consultor. |
| Precatório | Olá! Tenho interesse em Antecipação de Precatório. Gostaria de falar com um consultor. |
| Consórcio de Imóveis | Olá! Tenho interesse em Consórcio de Imóveis. Gostaria de falar com um consultor. |
| Consórcio de Veículos | Olá! Tenho interesse em Consórcio de Veículos. Gostaria de falar com um consultor. |
| Financiamento Imobiliário | Olá! Tenho interesse em Financiamento Imobiliário. Gostaria de falar com um consultor. |
| Câmbio e Remessa Internacional | Olá! Tenho interesse em Envio/Recebimento de Remessa Internacional. Gostaria de falar com um consultor. |
| Factoring | Olá! Tenho interesse em Factoring / Antecipação de Recebíveis. Gostaria de falar com um consultor. |

### 2.3 Regras de Implementação
- Todos os links: `target="_blank" rel="noopener noreferrer"`
- Número via `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER` — nunca hardcoded
- Mensagens codificadas via `encodeURIComponent()`
- Botão flutuante global usa mensagem genérica de atendimento
- Nenhum dado do usuário coletado antes do redirecionamento
- Ícone WhatsApp SVG em todos os botões CTA
- `aria-label`: `"Falar com consultor sobre [PRODUTO] via WhatsApp"`

---

## 3. Portfólio de Produtos

> ⚠️ **Consórcio:** Nenhum valor, parcela ou condição é exibido no site. Todas as informações são fornecidas exclusivamente pelo consultor especializado via WhatsApp.

### Seguros
| Produto | Slug | Texto do CTA |
|---|---|---|
| Seguro de Vida | `/solucoes/seguro-de-vida` | Quero meu seguro de vida → |
| Seguro Auto e Residencial | `/solucoes/seguro-auto-residencial` | Cotar meu seguro → |
| Seguro Empresarial | `/solucoes/seguro-empresarial` | Proteger minha empresa → |
| Seguro Viagem | `/solucoes/seguro-viagem` | Cotar seguro viagem → |

### Crédito
| Produto | Slug | Texto do CTA |
|---|---|---|
| Consignado CLT | `/solucoes/consignado-clt` | Quero meu consignado → |
| FGTS Saque-Aniversário | `/solucoes/fgts-saque-aniversario` | Antecipar meu FGTS → |
| Precatório | `/solucoes/precatorio` | Antecipar meu precatório → |

### Consórcio
| Produto | Slug | Texto do CTA |
|---|---|---|
| Consórcio de Imóveis | `/solucoes/consorcio-imobiliario` | Quero um consórcio de imóvel → |
| Consórcio de Veículos | `/solucoes/consorcio-automoveis` | Quero um consórcio de veículo → |

### Financiamento
| Produto | Slug | Texto do CTA |
|---|---|---|
| Financiamento Imobiliário | `/solucoes/financiamento-imobiliario` | Quero financiar meu imóvel → |

### Câmbio e Remessas
| Produto | Slug | Texto do CTA |
|---|---|---|
| Câmbio e Remessa Internacional | `/solucoes/cambio-remessa` | Falar com especialista em câmbio → |

### Empresarial
| Produto | Slug | Texto do CTA |
|---|---|---|
| Factoring | `/solucoes/factoring` | Antecipar meus recebíveis → |

---

## 4. Arquitetura de Informação

### 4.1 Mapa de Rotas
| Rota | Página | Prioridade |
|---|---|---|
| `/` | Home | P0 — Crítica |
| `/sobre` | Quem Somos | P0 — Crítica |
| `/solucoes` | Hub de Soluções | P0 — Crítica |
| `/solucoes/[slug]` | Página de Produto (dinâmica) | P0 — Crítica |
| `/contato` | Contato — grid WhatsApp por produto | P0 — Crítica |
| `/transparencia` | LGPD e Termos de Uso | P1 — Alta |
| `/conteudo` | Blog / Conteúdo Educativo | P1 — Alta |
| `/dabar-indica` | Programa de Parceiros Indica+ | P1 — Alta |
| `/*` (404) | Página de erro customizada + CTA WhatsApp | P2 — Média |
| `/sitemap.xml` | Sitemap automático via next-sitemap | P2 — Média |

### 4.2 Componentes Globais
- `Header` — logo, menu, dropdown soluções por categoria, CTA WhatsApp
- `Footer` — links institucionais, contato, redes sociais, CNPJ
- `WhatsAppFloat` — botão fixo inferior direito em todas as páginas (mensagem genérica)
- `CookieBanner` — consentimento LGPD
- `WhatsAppButton` — componente reutilizável, recebe `produto` como prop

---

## 5. Requisitos Funcionais

### 5.1 Home (`/`)
- [ ] Hero com headline, subheadline e CTA WhatsApp genérico
- [ ] Seção de soluções por categoria (carrossel — ver seção 8.4)
- [ ] Seção "Como Trabalhamos" — fluxo em 4 etapas
- [ ] Seção de diferenciais e proposta de valor
- [ ] Depoimentos / cases representativos
- [ ] Seção Dabar Indica+ com CTA WhatsApp
- [ ] Seção segurança e transparência
- [ ] CTA final → WhatsApp

### 5.2 Hub de Soluções (`/solucoes`)
- [ ] Listagem de todos os produtos organizados por categoria com cards
- [ ] Cada card: nome, breve descrição, ícone, badge de categoria
- [ ] Dois botões por card: "Ver detalhes" (`/solucoes/[slug]`) e "Falar com consultor" (WhatsApp)
- [ ] Filtro por categoria (tabs ou sidebar)

### 5.3 Página de Produto (`/solucoes/[slug]`)
- [ ] Headline orientada ao benefício
- [ ] Descrição completa com linguagem acessível
- [ ] "Para quem é este produto?" com perfis ideais
- [ ] Lista de vantagens e diferenciais
- [ ] **Nenhum dado de valor, parcela ou condição** — especialmente para Consórcio
- [ ] FAQ com mínimo 4 perguntas frequentes
- [ ] CTA WhatsApp contextualizado com mensagem pré-preenchida do produto
- [ ] CTA sticky no rodapé em mobile (56px de altura)
- [ ] Produtos relacionados — máximo 3 cards com CTA WhatsApp próprio
- [ ] Breadcrumb: Home > Soluções > [Produto]
- [ ] Geração estática via `generateStaticParams`

### 5.4 Contato (`/contato`)
- [ ] Título: "Fale com um especialista Dabar"
- [ ] Grid de botões WhatsApp — um por produto, organizados por categoria
- [ ] Botão genérico: "Não sei por onde começar — me ajude"
- [ ] Informações: telefone, e-mail, endereço
- [ ] **Nenhum formulário**

---

## 6. Requisitos Não Funcionais

### 6.1 Performance
| Métrica | Meta |
|---|---|
| Lighthouse Performance | ≥ 90 (mobile e desktop) |
| LCP | < 2,5s |
| INP | < 200ms |
| CLS | < 0,1 |
| TTI (3G simulado) | < 3,5s |
| Bundle JS inicial (gzip) | < 120kb |

### 6.2 SEO
- [ ] SSG para todas as páginas de produto
- [ ] Metadata dinâmica: `title`, `description`, Open Graph, Twitter Card
- [ ] JSON-LD: `Organization`, `FAQPage`, `BreadcrumbList`
- [ ] `sitemap.xml` automático via `next-sitemap`
- [ ] `robots.txt` configurado
- [ ] URLs semânticas e canônicas
- [ ] Alt text em todas as imagens

### 6.3 Segurança
- [ ] HTTPS (Vercel automático)
- [ ] Headers via `next.config.js`: CSP, X-Frame-Options, HSTS, X-Content-Type-Options
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` em variável de ambiente — nunca hardcoded
- [ ] Links WhatsApp com `rel="noopener noreferrer"`

### 6.4 Acessibilidade (WCAG 2.1 AA)
- [ ] `aria-label` descritivo em todos os botões WhatsApp
- [ ] Contraste mínimo 4,5:1
- [ ] Navegação completa por teclado
- [ ] Skip link "Pular para conteúdo principal"
- [ ] Semântica HTML correta (`main`, `nav`, `article`, `section`)

### 6.5 Responsividade
- [ ] Mobile-first: breakpoints 375px / 768px / 1024px / 1440px
- [ ] CTA WhatsApp sticky no rodapé em mobile nas páginas de produto
- [ ] Testado: Chrome, Firefox, Safari, Edge (últimas 2 versões)

---

## 7. Stack Técnica

### 7.1 Frontend
| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 14+ (App Router) | SSG/SSR, rotas dinâmicas, deploy Vercel |
| TypeScript | 5+ (strict) | Tipagem estática |
| Tailwind CSS | v3 | Utility-first, tokens de marca |
| Shadcn/UI | latest | Accordion FAQ, tabs de categorias |
| Framer Motion | latest | Animações de entrada |
| next/image | — | Otimização de imagens (WebP, lazy) |
| next-sitemap | latest | Sitemap.xml automático |
| Lucide React | latest | Ícones SVG |

### 7.2 Dados (sem banco de dados)
| Arquivo | Conteúdo |
|---|---|
| `data/produtos.ts` | Array com os 11 produtos: nome, slug, descrição, categoria, mensagemWhatsApp |
| `lib/whatsapp.ts` | `buildWhatsAppLink(produto: string): string` |

### 7.3 Variáveis de Ambiente
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5571982754075
NEXT_PUBLIC_SITE_URL=https://www.dabar.com.br
NEXT_PUBLIC_GA_ID=          # opcional
```

### 7.4 Estrutura de Diretórios
```
/
├── app/
│   └── (site)/
│       ├── layout.tsx              ← Header + Footer + WhatsAppFloat
│       ├── page.tsx                ← Home
│       ├── sobre/page.tsx
│       ├── solucoes/
│       │   ├── page.tsx            ← Hub de soluções
│       │   └── [slug]/
│       │       └── page.tsx        ← SSG via generateStaticParams
│       ├── contato/page.tsx        ← Grid WhatsApp por produto
│       ├── transparencia/page.tsx
│       └── dabar-indica/page.tsx
├── components/
│   ├── ui/                         ← Shadcn/UI
│   ├── layout/                     ← Header, Footer, WhatsAppFloat
│   ├── whatsapp/
│   │   ├── WhatsAppButton.tsx      ← prop: produto (string)
│   │   └── WhatsAppFloat.tsx       ← botão flutuante global
│   └── sections/                   ← Hero, ProdutoCard, FAQ...
├── data/
│   └── produtos.ts                 ← fonte única de verdade
├── lib/
│   └── whatsapp.ts                 ← buildWhatsAppLink()
├── public/                         ← assets, favicon, og-image
├── CLAUDE.md                       ← memória Claude Code
└── docs/
    └── PRD.md                      ← este arquivo
```

---

## 8. Design System e Estilo Visual

### 8.1 Conceito Visual
| Atributo | Definição |
|---|---|
| Sensação | Modernidade, inovação, sofisticação e exclusividade |
| Estilo | Corporativo e sóbrio — tons neutros, formal |
| Cor da marca | Verde `#8EDB00` apenas em CTAs, labels e detalhes |
| Estrutura | Escuro nas seções de impacto · Claro neutro no conteúdo |
| Proibido | Gradientes, sombras excessivas, verde como fundo de área ampla |

### 8.2 Cores por Seção
| Seção | Fundo | Texto |
|---|---|---|
| Navbar | `#1A1A1A` | `#FFFFFF` + `#AAAAAA` (links) |
| Hero | `#1A1A1A` | `#FFFFFF` · destaque `#8EDB00` |
| Ticker de categorias | `#242424` | `#555555` · dot `#8EDB00` |
| Seções de conteúdo | `#F8F8F6` | `#1A1A1A` |
| Cards de produto | `#FFFFFF` borda `#E2E2DA` | `#1A1A1A` · desc `#888888` |
| CTA band final | `#1A1A1A` | `#FFFFFF` · sub `#777777` |
| Footer | `#1A1A1A` | `#AAAAAA` |

### 8.3 Tokens — `tailwind.config.ts`
```ts
colors: {
  brand: {
    green:     '#8EDB00',  // cor primária da marca
    greenTint: '#F0FAD6',  // fundo de ícones e badges
    greenDark: '#3B6D11',  // texto sobre tint
    dark:      '#1A1A1A',  // fundo escuro primário
    surface:   '#242424',  // superfície escura secundária
    lightBg:   '#F8F8F6',  // fundo claro das seções
    cardBorder:'#E2E2DA',  // borda dos cards
  },
  whatsapp:      '#25D366',
  whatsappHover: '#1DA851',
},
borderRadius: {
  card: '10px',
  btn:  '4px',
  icon: '8px',
},
```

### 8.4 Tipografia
| Elemento | Fonte / Peso / Tamanho | Cor |
|---|---|---|
| H1 — Hero | Criteria CF Super · 500 · 40px · lh 1.2 | `#FFFFFF` |
| H2 — Título de seção | Criteria CF Super · 500 · 22px | `#1A1A1A` |
| H3 — Título de card | Criteria CF Regular · 500 · 15px | `#1A1A1A` |
| Body | Criteria CF Regular · 400 · 16px · lh 1.6 | `#888888` |
| Label de seção | Regular · 500 · 10px · uppercase · tracking 0.12em | `#8EDB00` |
| Badge de categoria | Regular · 500 · 10px | `#3B6D11` sobre `#F0FAD6` |
| Fallback | Inter → Arial | — |

### 8.5 Carrossel de Produtos
O hub de soluções usa **carrossel horizontal com grid de cards**.

**Comportamento:**
- 3 cards/página em desktop · 2 em tablet · 1 em mobile
- Setas de navegação no cabeçalho da seção (anterior / próximo)
- Dots indicadores abaixo — dot ativo: pill verde `#8EDB00`
- Transição: `transform translateX` · `cubic-bezier(0.25, 0.46, 0.45, 0.94)` · 400ms
- Sem autoplay

**Anatomia do Card:**
| Elemento | Especificação |
|---|---|
| Container | `bg-white` · borda `0.5px #E2E2DA` · `rounded-[10px]` · `p-6` |
| Linha de destaque (hover) | `border-t-2 border-brand-green` — só no hover |
| Hover | `translateY(-2px)` · borda `#C8C8C0` · `transition-all duration-200` |
| Ícone | `40x40px` · fundo `#F0FAD6` · `rounded-[8px]` · SVG stroke `#3B6D11` |
| Badge | `text-[10px]` · fundo `#F0FAD6` · cor `#3B6D11` · `rounded-[3px]` · `px-2 py-0.5` |
| Título | `text-[15px] font-medium text-brand-dark` |
| Descrição | `text-[12px] text-[#888888] leading-relaxed` |
| Divisor | `border-t border-[#EBEBE4]` · `my-4` |
| Botão WhatsApp | `bg-whatsapp text-white text-[11px] font-medium px-3.5 py-2 rounded-[4px]` |
| Link "Saiba mais" | `text-[11px] text-[#AAAAAA] hover:text-brand-green` |

**Ordem dos produtos no carrossel:**
1. Seguro de Vida · 2. Seguro Auto e Residencial · 3. Seguro Empresarial · 4. Seguro Viagem · 5. Consignado CLT · 6. FGTS Saque-Aniversário · 7. Precatório · 8. Consórcio de Imóveis · 9. Consórcio de Veículos · 10. Financiamento Imobiliário · 11. Câmbio e Remessa · 12. Factoring

### 8.6 Botão WhatsApp — Especificação
```tsx
// Uso
<WhatsAppButton produto="Seguro de Vida" label="Quero meu seguro de vida" />

// Especificação visual
bg: #25D366   hover: #1DA851
text: #FFFFFF · 11px · font-medium
padding: 8px 14px · border-radius: 4px
ícone: WhatsApp SVG 12x12px à esquerda
mobile sticky: w-full h-14 fixed bottom-0

// Acessibilidade
aria-label="Falar com consultor sobre [PRODUTO] via WhatsApp"
```

---

## 9. Critérios de Aceite

### 9.1 Fluxo WhatsApp
- [ ] 100% dos CTAs do site redirecionam para WhatsApp — sem exceção
- [ ] 11 produtos com link WhatsApp único e mensagem correta
- [ ] Botão flutuante global em todas as páginas
- [ ] Página `/contato` com botões WhatsApp por produto — sem formulário
- [ ] Links testados no WhatsApp Web e WhatsApp mobile

### 9.2 Páginas e Conteúdo
- [ ] Todas as rotas do mapa implementadas
- [ ] Página de produto para cada um dos 11 produtos
- [ ] Páginas de Consórcio sem nenhum dado de valor ou parcela
- [ ] FAQ em cada página de produto (mínimo 4 perguntas)
- [ ] 404 customizada com CTA WhatsApp

### 9.3 Performance e Qualidade
- [ ] Lighthouse ≥ 90 em todas as métricas
- [ ] Todas as páginas de produto com SSG (`generateStaticParams`)
- [ ] Build TypeScript sem erros (strict mode)
- [ ] `sitemap.xml` válido com todas as rotas

### 9.4 Segurança e LGPD
- [ ] Banner de consentimento de cookies implementado
- [ ] Política de privacidade em `/transparencia`
- [ ] Headers de segurança validados via securityheaders.com
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` em variável de ambiente Vercel

### 9.5 Responsividade e Cross-browser
- [ ] Aprovado em Chrome, Firefox, Safari, Edge
- [ ] Testado em 375px, 390px, 768px, 1024px, 1440px
- [ ] Sem overflow horizontal em mobile

---

## 10. Fora do Escopo — v1.0

> ⚠️ Qualquer implementação dos itens abaixo requer nova aprovação de escopo.

- Simulador de consórcio ou calculadora interativa
- Formulário de captura de leads
- Integração com CRM
- Área logada / Portal do Cliente
- Chat online ou chatbot
- APIs de cotação em tempo real
- Agendamento de consultorias
- Aplicativo mobile
- Painel administrativo / CMS
- E-commerce ou pagamento online

---

## 11. Roadmap de Entregas

| Sprint | Entrega | Prazo |
|---|---|---|
| Sprint 0 | Setup: repo, Vercel, CI/CD, tokens Tailwind, `data/produtos.ts`, `lib/whatsapp.ts` | Semana 1 |
| Sprint 1 | Layout global (Header, Footer, WhatsAppFloat) + Home completa | Semanas 2–3 |
| Sprint 2 | Hub de Soluções + 11 páginas de produto com CTA WhatsApp | Semanas 4–5 |
| Sprint 3 | Página `/contato` (grid WhatsApp) + páginas Consórcio sem dados de valores | Semana 6 |
| Sprint 4 | `/sobre`, `/transparencia`, `/dabar-indica`, `/conteudo` (estrutura) | Semana 7 |
| Sprint 5 | SEO: sitemap, metadata, JSON-LD, Open Graph, acessibilidade WCAG | Semana 8 |
| Sprint 6 | QA: Lighthouse, cross-browser, mobile, validação de links WhatsApp | Semana 9 |
| Sprint 7 | Homologação, ajustes finais e Go-Live | Semana 10 |

---

*Dabar Soluções Financeiras · PRD Site Institucional v1.3 · Documento Confidencial · Abril 2026*