# Dabar Soluções Financeiras — Site Institucional

## Visão Geral
Site institucional da Dabar com objetivo de **geração de contato via WhatsApp**.
Cada produto do portfólio possui CTA WhatsApp com mensagem pré-preenchida.
Sem formulários de lead. Sem simuladores. Sem dados de consórcio expostos.

> Para requisitos completos, arquitetura e roadmap: @docs/PRD.md

---

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript (strict mode — zero `any`)
- **Estilo:** Tailwind CSS v3
- **Componentes:** Shadcn/UI (Radix UI)
- **Animações:** Framer Motion
- **Deploy:** Vercel · **Domínio:** dabar.com.br

---

## Comandos Essenciais
```bash
npm run dev          # servidor local
npm run build        # build de produção
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

---

## Estrutura de Pastas
```
app/(site)/           # rotas públicas com layout compartilhado
components/
  ui/                 # Shadcn/UI base
  layout/             # Header, Footer, WhatsAppFloat
  whatsapp/           # WhatsAppButton.tsx, WhatsAppFloat.tsx
  sections/           # seções reutilizáveis de página
data/
  produtos.ts         # fonte única de verdade dos 11 produtos
lib/
  whatsapp.ts         # buildWhatsAppLink(produto: string) → string
```

---

## Regras — WhatsApp
- `NEXT_PUBLIC_WHATSAPP_NUMBER` via variável de ambiente — **nunca hardcoded**
- Todos os links: `target="_blank" rel="noopener noreferrer"`
- Sempre usar `buildWhatsAppLink()` de `lib/whatsapp.ts` — nunca montar URL manualmente
- `aria-label="Falar com consultor sobre [PRODUTO] via WhatsApp"` em todos os botões

---

## Regras — Código
- Zero `any` no TypeScript
- Sem inline styles — usar classes Tailwind
- `next/image` obrigatório para todas as imagens
- Todas as páginas de produto via SSG (`generateStaticParams`)
- Sem `console.log` em produção
- Commits em português, mensagem clara e atômica

---

## Regras — Proibido no Site
- Formulários de captura de lead
- Simuladores de parcelas
- Dados de valores/parcelas de consórcio expostos
- Variáveis sensíveis no bundle client

---

## Design System — Tokens (tailwind.config.ts)
```ts
colors: {
  brand: {
    green:      '#8EDB00', // cor primária — só em CTAs e detalhes
    greenTint:  '#F0FAD6', // fundo de ícones e badges
    greenDark:  '#3B6D11', // texto sobre tint
    dark:       '#1A1A1A', // hero, nav, CTA band
    surface:    '#242424', // superfície escura secundária
    lightBg:    '#F8F8F6', // fundo seções claras
    cardBorder: '#E2E2DA', // borda dos cards
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

---

## Design System — Tipografia
| Elemento | Fonte | Peso | Tamanho | Cor |
|---|---|---|---|---|
| H1 Hero | Criteria CF Super | 500 | 40px / lh 1.2 | `#FFFFFF` |
| H2 Seção | Criteria CF Super | 500 | 22px | `#1A1A1A` |
| H3 Card | Criteria CF Regular | 500 | 15px | `#1A1A1A` |
| Body | Criteria CF Regular | 400 | 16px / lh 1.6 | `#888888` |
| Label seção | Criteria CF Regular | 500 | 10px uppercase | `#8EDB00` |
| Fallback | Inter → Arial | — | — | — |

---

## Design System — Estrutura de Cor por Seção
| Seção | Fundo | Texto |
|---|---|---|
| Navbar | `#1A1A1A` | `#FFF` + `#AAA` links |
| Hero | `#1A1A1A` | `#FFF` · destaque `#8EDB00` |
| Ticker categorias | `#242424` | `#555` · dot `#8EDB00` |
| Seções de conteúdo | `#F8F8F6` | `#1A1A1A` |
| Cards de produto | `#FFF` borda `#E2E2DA` | `#1A1A1A` · desc `#888` |
| CTA band final | `#1A1A1A` | `#FFF` · sub `#777` |
| Footer | `#1A1A1A` | `#AAA` |

---

## Frontend — Diretrizes de Design (Skill)

> Leia esta seção **antes de criar qualquer componente ou página visual.**

### Direção Estética
Corporativo sofisticado e refinado. Sóbrio. Sem excessos.
Pense em: banco de investimentos premium + fintech moderna.
O que torna este site memorável é a **precisão e o controle** — não a intensidade.

### Tipografia
- Display: **Criteria CF** (Super para títulos, Regular para corpo)
- Fallback: **Inter** (nunca Arial, Roboto, system-ui ou Space Grotesk)
- Escala modular 1.25x — respeitar a hierarquia rigorosamente

### Cor
- Paleta dominante: escuro (`#1A1A1A`) + neutro claro (`#F8F8F6`)
- Verde (`#8EDB00`) como acento cirúrgico — apenas CTAs, labels e bordas de ênfase
- Nunca verde como fundo de área ampla
- Nunca gradientes purple/blue genéricos

### Animações (Framer Motion)
- Entrada de seções: `fadeInUp` com `staggerChildren` — delay escalonado
- Hover em cards: `translateY(-2px)` + transição de borda 200ms
- Nada de animações contínuas ou autoplay — só por interação
- Uma entrada bem orquestrada vale mais que dez micro-interações dispersas

### Layout
- Mobile-first obrigatório
- Espaço negativo generoso nas seções claras
- Assimetria controlada quando aplicável (ex: hero com stat cards à direita)
- Carrossel de produtos: 3 cards/desktop · 2/tablet · 1/mobile

### O que evitar
- Padrões genéricos de "AI slop": sombras excessivas, glassmorphism gratuito
- Layouts previsíveis e sem personalidade
- Qualquer componente que poderia ser de qualquer outro site financeiro

### Checklist antes de entregar um componente
- [ ] Tem identidade visual coerente com a marca Dabar?
- [ ] Tipografia segue a hierarquia definida?
- [ ] Verde usado com parcimônia?
- [ ] Acessível via teclado? aria-labels corretos?
- [ ] Responsivo nos 4 breakpoints?
- [ ] Animações sutis e intencionais?

---

## Variáveis de Ambiente
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5571982754075
NEXT_PUBLIC_SITE_URL=https://www.dabar.com.br
NEXT_PUBLIC_GA_ID=   # opcional
```

---

## Portfólio (11 produtos)
Seguros (Vida · Auto/Residencial · Empresarial · Viagem)
Crédito (Consignado CLT · FGTS · Precatório)
Consórcio (Imóvel · Veículo)
Financiamento Imobiliário · Câmbio/Remessa · Factoring