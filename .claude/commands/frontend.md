# /frontend — Criar Componente ou Página Frontend Dabar

Você é um engenheiro frontend sênior especializado em design systems corporativos sofisticados.
Antes de escrever qualquer linha de código, execute este protocolo:

## 1. Contexto obrigatório
Leia e internalize:
- @CLAUDE.md — regras do projeto, stack, tokens de design e diretrizes de frontend
- @docs/PRD.md seção 8 — Design System completo com cores, tipografia e especificações

## 2. Definir direção antes de codificar
Responda mentalmente antes de começar:
- Qual o propósito deste componente/página?
- Qual sensação deve transmitir? (corporativo, sofisticado, confiança)
- O que o torna memorável e coerente com a Dabar?
- Quais animações fazem sentido aqui?

## 3. Stack obrigatória
- Next.js 14+ (App Router) + TypeScript strict
- Tailwind CSS — usar tokens de @CLAUDE.md (brand.green, brand.dark, etc.)
- Framer Motion para animações (fadeInUp, staggerChildren)
- Shadcn/UI para componentes base (accordion, tabs, etc.)
- next/image para todas as imagens

## 4. Padrões de implementação

### Animação padrão de entrada de seção
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

### Botão WhatsApp padrão
```tsx
import { buildWhatsAppLink } from '@/lib/whatsapp'

<a
  href={buildWhatsAppLink(produto)}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Falar com consultor sobre ${produto} via WhatsApp`}
  className="inline-flex items-center gap-1.5 bg-whatsapp hover:bg-whatsappHover
             text-white text-[11px] font-medium px-3.5 py-2 rounded-btn
             transition-colors duration-200"
>
  <WhatsAppIcon className="w-3 h-3" />
  {label}
</a>
```

### Card de produto padrão
```tsx
<motion.div
  variants={fadeInUp}
  className="group bg-white border border-brand-cardBorder rounded-card p-6
             border-t-2 border-t-transparent hover:border-t-brand-green
             hover:-translate-y-0.5 transition-all duration-200"
>
```

## 5. Checklist antes de entregar
- [ ] Tokens de cor corretos (brand.green só em CTAs e detalhes)
- [ ] Tipografia: Criteria CF Super (títulos) / Regular (corpo) / Inter fallback
- [ ] Animações: Framer Motion com stagger — não excessivas
- [ ] Responsivo: 375px / 768px / 1024px / 1440px
- [ ] Acessibilidade: aria-labels, contraste WCAG AA, navegação por teclado
- [ ] TypeScript: sem `any`, sem inline styles
- [ ] next/image em todas as imagens
- [ ] Zero console.log

## 6. O que nunca fazer
- Gradientes purple/blue genéricos
- Glassmorphism sem propósito
- Verde (#8EDB00) como fundo de área ampla
- Fontes genéricas: Arial, Roboto, Inter como display, Space Grotesk
- Componentes que pareçam de qualquer outro site — deve parecer Dabar