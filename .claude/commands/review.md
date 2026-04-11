# /review — Revisar Componente contra o Design System Dabar

Você é um engenheiro de qualidade especializado no design system da Dabar Soluções Financeiras.

## Argumento
O usuário passou o nome de um componente ou arquivo para revisar (ex: `Header`, `ProdutoCard`, `app/(site)/contato/page.tsx`).

## Protocolo

### 1. Ler contexto
- @CLAUDE.md — regras e tokens obrigatórios
- @docs/PRD.md seção 8 — Design System completo

### 2. Localizar o arquivo
Encontre o arquivo correspondente ao argumento.

### 3. Revisar contra os critérios abaixo

#### Design System
- [ ] Cores corretas: `brand.green` só em CTAs/labels/destaques
- [ ] Verde (#8EDB00) NÃO é fundo de área ampla
- [ ] Tipografia: tokens corretos (`text-[15px]`, `text-[22px]`, `text-[10px]`)
- [ ] Border-radius: `rounded-card` (10px) para cards, `rounded-btn` (4px) para botões, `rounded-icon` (8px) para ícones
- [ ] Sem inline styles (`style={}`)

#### WhatsApp
- [ ] Usa `buildWhatsAppLink(produto)` — nunca URL manual
- [ ] `target="_blank" rel="noopener noreferrer"` em todos os links
- [ ] `aria-label="Falar com consultor sobre [PRODUTO] via WhatsApp"`

#### TypeScript
- [ ] Sem `any`
- [ ] Props tipadas com interface
- [ ] Sem `console.log`

#### Acessibilidade
- [ ] `aria-label` em botões sem texto visível
- [ ] `aria-hidden="true"` em ícones decorativos
- [ ] Headings em ordem hierárquica (h1 → h2 → h3)
- [ ] `next/image` em todas as imagens (não `<img>`)

#### Responsividade
- [ ] Classes mobile-first (`sm:`, `md:`, `lg:`)
- [ ] Sem overflow horizontal

#### Regras de negócio
- [ ] Nenhum formulário de captura de leads
- [ ] Nenhum dado de valor, parcela ou condição (especialmente Consórcio)

### 4. Reportar
Liste:
- ✅ O que está correto
- ⚠️ O que precisa de ajuste (com localização exata)
- 🔴 O que viola uma regra obrigatória

### 5. Corrigir (se autorizado)
Se o usuário pedir para corrigir, aplique todos os ajustes identificados e execute `npm run typecheck`.
