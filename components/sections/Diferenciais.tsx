// PRD §5.1: Seção de diferenciais e proposta de valor
// PRD §8.2: fundo claro #F8F8F6

import { UserCheck, MessageSquare, LayoutGrid, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const DIFERENCIAIS: { icon: LucideIcon; titulo: string; descricao: string }[] = [
  {
    icon: UserCheck,
    titulo: 'Especialistas por produto',
    descricao:
      'Cada consultor é treinado especificamente para a solução que você precisa — nada de generalistas.',
  },
  {
    icon: MessageSquare,
    titulo: 'Atendimento via WhatsApp',
    descricao:
      'Sem espera, sem formulários. Conexão direta e imediata com quem pode resolver sua situação.',
  },
  {
    icon: LayoutGrid,
    titulo: 'Portfólio completo',
    descricao:
      'De seguros a câmbio internacional, resolvemos tudo em um só lugar com a mesma qualidade.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Transparência total',
    descricao:
      'Clareza em cada etapa do processo — sem letras miúdas, sem surpresas, sem pressão.',
  },
]

export default function Diferenciais() {
  return (
    <section className="bg-brand-lightBg py-20" aria-labelledby="diferenciais-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-label text-brand-green mb-2">Por que a Dabar</p>
          <h2 id="diferenciais-heading" className="text-[22px] font-medium text-brand-dark">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFERENCIAIS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.titulo} className="flex flex-col">
                {/* Ícone com fundo tint — mesmo padrão do ProdutoCard */}
                <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.5} className="text-brand-greenDark" />
                </div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-2">{item.titulo}</h3>
                <p className="text-[13px] text-[#888888] leading-relaxed">{item.descricao}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
