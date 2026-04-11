import Link from 'next/link'
import {
  Shield, Car, Building2, Plane, Briefcase, PiggyBank,
  Scale, Home, TrendingUp, Globe, Building, type LucideIcon,
} from 'lucide-react'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import type { Produto } from '@/data/produtos'

// PRD §8.5 — anatomia do card do carrossel

const ICON_MAP: Record<string, LucideIcon> = {
  'Seguro de Vida':                Shield,
  'Seguro Auto e Residencial':     Car,
  'Seguro Empresarial':            Building2,
  'Seguro Viagem':                 Plane,
  'Consignado CLT':                Briefcase,
  'FGTS Saque-Aniversário':        PiggyBank,
  'Precatório':                    Scale,
  'Consórcio de Imóveis':          Home,
  'Consórcio de Veículos':         Car,
  'Financiamento Imobiliário':     Building,
  'Câmbio e Remessa Internacional':Globe,
  'Factoring':                     TrendingUp,
}

interface ProdutoCardProps {
  produto: Produto
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  const Icon = ICON_MAP[produto.nome] ?? Shield

  return (
    // PRD §8.5: bg-white · border 0.5px #E2E2DA · rounded-[10px] · p-6
    // hover: translateY(-2px) · border #C8C8C0 · transition-all 200ms
    <article className="group relative bg-white border border-brand-cardBorder rounded-card p-6 hover:border-[#C8C8C0] hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">

      {/* PRD §8.5: linha de destaque verde — só no hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-brand-green rounded-t-card opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />

      {/* Header do card: ícone + badge */}
      <div className="flex items-start justify-between mb-4">
        {/* PRD §8.5: ícone 40×40 · bg #F0FAD6 · rounded-[8px] · stroke #3B6D11 */}
        <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center shrink-0">
          <Icon size={20} strokeWidth={1.5} className="text-brand-greenDark" />
        </div>

        {/* PRD §8.5: badge texto-[10px] · bg #F0FAD6 · cor #3B6D11 · rounded-[3px] · px-2 py-0.5 */}
        <span className="text-badge bg-brand-greenTint text-brand-greenDark rounded-[3px] px-2 py-0.5 leading-tight">
          {produto.categoria}
        </span>
      </div>

      {/* PRD §8.5: título text-[15px] font-medium text-brand-dark */}
      <h3 className="text-card-title text-brand-dark mb-2">
        {produto.nome}
      </h3>

      {/* PRD §8.5: descrição text-[12px] text-[#888888] leading-relaxed */}
      <p className="text-card-desc text-[#888888] leading-relaxed flex-1">
        {produto.descricao}
      </p>

      {/* PRD §8.5: divisor border-t border-[#EBEBE4] my-4 */}
      <div className="border-t border-[#EBEBE4] my-4" />

      {/* PRD §8.5: botões */}
      <div className="flex items-center justify-between gap-3">
        {/* PRD §8.5: botão WhatsApp */}
        <WhatsAppButton produto={produto.nome} label="Falar com consultor" />

        {/* PRD §8.5: link "Saiba mais" text-[11px] text-[#AAAAAA] hover:text-brand-green */}
        <Link
          href={`/solucoes/${produto.slug}`}
          className="text-[11px] text-[#AAAAAA] hover:text-brand-green transition-colors duration-150 whitespace-nowrap"
        >
          Saiba mais →
        </Link>
      </div>
    </article>
  )
}
