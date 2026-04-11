# Dabar Soluções Financeiras — Site Institucional

## Visão Geral
Site institucional da Dabar com objetivo de **geração de contato via WhatsApp**. Cada produto do portfólio possui CTA WhatsApp com mensagem pré-preenchida. Sem formulários de lead. Sem simuladores. Sem dados de consórcio expostos.

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript (strict mode)
- **Estilo:** Tailwind CSS v3
- **Componentes:** Shadcn/UI (Radix UI)
- **Deploy:** Vercel
- **Domínio:** dabar.com.br

## Comandos Essenciais
```bash
npm run dev          # servidor local
npm run build        # build de produção
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

## Estrutura de Pastas
```
app/(site)/          # rotas públicas com layout compartilhado
components/
  ui/                # Shadcn/UI base
  layout/            # Header, Footer, WhatsAppFloat
  whatsapp/          # WhatsAppButton.tsx, WhatsAppFloat.tsx
  sections/          # seções reutilizáveis de página
data/
  produtos.ts        # fonte única de verdade dos 11 produtos
lib/
  whatsapp.ts        # buildWhatsAppLink(produto: string) → string
```

## Regras Obrigatórias

### WhatsApp
- `NEXT_PUBLIC_WHATSAPP_NUMBER` via variável de ambiente — nunca hardcoded
- Todos os links: `target="_blank" rel="noopener noreferrer"`
- Usar sempre `buildWhatsAppLink()` de `lib/whatsapp.ts` — nunca montar URL manualmente
- Mensagem pré-preenchida específica por produto — ver `data/produtos.ts`

### Proibido
- Formulários de captura de lead
- Simuladores de parcelas
- Dados de valores/parcelas de consórcio expostos no site
- Variáveis de ambiente sensíveis no bundle client (usar `NEXT_PUBLIC_` apenas para dados públicos)
- `any` no TypeScript
- Inline styles — usar classes Tailwind

### Qualidade
- Todas as páginas de produto geradas via SSG (`generateStaticParams`)
- `next/image` obrigatório para todas as imagens
- `aria-label` descritivo em todos os botões WhatsApp
- Nenhum `console.log` em produção

## Design System (tokens no tailwind.config.ts)
| Token | Valor | Uso |
|---|---|---|
| `brand.green` | `#8EDB00` | CTAs, labels, detalhes |
| `brand.greenTint` | `#F0FAD6` | fundo de ícones/badges |
| `brand.greenDark` | `#3B6D11` | texto sobre tint |
| `brand.dark` | `#1A1A1A` | hero, nav, CTA band |
| `brand.surface` | `#242424` | superfície escura |
| `brand.lightBg` | `#F8F8F6` | fundo seções claras |
| `whatsapp` | `#25D366` | botões WhatsApp |
| `whatsappHover` | `#1DA851` | hover WhatsApp |

## Portfólio (11 produtos)
Seguros · Crédito (Consignado CLT, FGTS, Precatório) · Consórcio (Imóvel, Veículo) · Financiamento Imobiliário · Câmbio/Remessa · Factoring

## Documentação Completa
Para requisitos detalhados, arquitetura, critérios de aceite e roadmap:
→ @docs/PRD.md