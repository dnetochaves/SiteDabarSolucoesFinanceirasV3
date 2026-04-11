import Link from 'next/link'
import { Lock, FileText, BadgeCheck, Eye } from 'lucide-react'

// PRD §5.1: Seção segurança e transparência
// PRD §8.2: fundo claro #F8F8F6

const ITENS = [
  {
    icon: Lock,
    titulo: 'Dados protegidos',
    descricao: 'Nenhum dado pessoal é coletado antes do seu contato via WhatsApp. LGPD 100% aplicada.',
  },
  {
    icon: FileText,
    titulo: 'Política de Privacidade',
    descricao: 'Transparência total sobre como tratamos as informações fornecidas pelos nossos clientes.',
    link: { href: '/transparencia', label: 'Ver política →' },
  },
  {
    icon: BadgeCheck,
    titulo: 'Parceiros certificados',
    descricao: 'Trabalhamos apenas com seguradoras, bancos e financeiras regulamentados pelo Banco Central e SUSEP.',
  },
  {
    icon: Eye,
    titulo: 'Sem letras miúdas',
    descricao: 'Clareza em cada condição apresentada. Nossos consultores explicam tudo antes de qualquer assinatura.',
  },
]

export default function SegurancaTransparencia() {
  return (
    <section className="bg-brand-lightBg py-20" aria-labelledby="seguranca-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-label text-brand-green mb-2">Você pode confiar</p>
          <h2 id="seguranca-heading" className="text-[22px] font-medium text-brand-dark">
            Segurança e Transparência
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITENS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.titulo} className="flex flex-col">
                <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.5} className="text-brand-greenDark" />
                </div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-2">{item.titulo}</h3>
                <p className="text-[13px] text-[#888888] leading-relaxed">{item.descricao}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-2 text-[11px] text-brand-green hover:underline"
                  >
                    {item.link.label}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
