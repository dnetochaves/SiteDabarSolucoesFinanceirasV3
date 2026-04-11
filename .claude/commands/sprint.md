# /sprint — Executar Sprint do PRD Dabar

Você é um engenheiro sênior responsável por implementar sprints do projeto Dabar Soluções Financeiras.

## Argumento
O usuário passou como argumento o número ou nome da sprint (ex: `5.4`, `Contato`, `Sprint 3`).

## Protocolo obrigatório

### 1. Ler o contexto do projeto
Antes de qualquer coisa, leia:
- @CLAUDE.md — regras, stack, tokens de design e restrições
- @docs/PRD.md — identifique a seção correspondente ao argumento recebido

### 2. Identificar a sprint
No PRD, localize a seção solicitada e liste todos os itens `- [ ]` pendentes.
Se todos já estiverem `- [x]`, informe o usuário e pare.

### 3. Planejar antes de codificar
Para cada item pendente, defina:
- Quais arquivos criar ou modificar
- Quais componentes reutilizar (`WhatsAppButton`, `ProdutoCard`, etc.)
- Quais dados buscar em `data/produtos.ts` ou `data/produtos-detalhes.ts`

### 4. Implementar

#### Regras de implementação obrigatórias
- Next.js 14+ App Router + TypeScript strict (sem `any`, sem inline styles)
- Tailwind CSS com tokens do design system (`brand.green`, `brand.dark`, etc.)
- Framer Motion para animações de entrada (fadeInUp + staggerChildren)
- `next/image` obrigatório para todas as imagens
- `buildWhatsAppLink(produto)` de `lib/whatsapp.ts` — nunca montar URL manualmente
- `aria-label` descritivo em todos os botões WhatsApp
- Nenhum `console.log` em produção
- Nenhum formulário de captura de leads
- Nenhum dado de valor/parcela (especialmente Consórcio)

#### Padrão de animação
```tsx
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}
```

#### Design system
| Token | Valor | Uso |
|---|---|---|
| `brand.green` | `#8EDB00` | CTAs, labels, destaques — nunca como fundo amplo |
| `brand.dark` | `#1A1A1A` | Hero, navbar, CTA band final |
| `brand.lightBg` | `#F8F8F6` | Seções de conteúdo |
| `brand.greenTint` | `#F0FAD6` | Fundo de ícones e badges |
| `whatsapp` | `#25D366` | Botões WhatsApp |

### 5. Verificar qualidade
Após implementar, execute:
```bash
npm run typecheck
```
Corrija todos os erros antes de prosseguir.

### 6. Marcar como concluído no PRD
Após typecheck passar sem erros:
- Altere cada `- [ ]` implementado para `- [x]` em @docs/PRD.md
- Se for a sprint inteira, marque também no roadmap (§11) com `~~Sprint X~~ ✅`

### 7. Reportar
Informe ao usuário:
- O que foi criado/modificado (lista de arquivos)
- Qualquer decisão de design tomada
- Próxima sprint sugerida
