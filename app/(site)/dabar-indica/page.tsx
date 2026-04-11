// PRD §4.1 — Rota /dabar-indica · Programa de Parceiros Indica+ · Sprint 4
// PRD §8 — Design System: dark hero, light content, brand.green só em CTAs e detalhes

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap,
  HandCoins,
  LifeBuoy,
  Briefcase,
  UserRound,
  Building2,
  Handshake,
  BadgeCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Dabar Indica+',
  description:
    'Programa de parceria da Dabar Soluções Financeiras. Atue no mercado de crédito com suporte completo, treinamento especializado e remuneração por produção.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'}/dabar-indica`,
  },
}

// ── DADOS ────────────────────────────────────────────────────────────────────

const ETAPAS: { numero: string; titulo: string; descricao: string }[] = [
  {
    numero: '01',
    titulo: 'Entre em contato',
    descricao:
      'Inicie uma conversa no WhatsApp. Nossa equipe apresenta o programa e tira todas as dúvidas sobre como funciona a parceria.',
  },
  {
    numero: '02',
    titulo: 'Receba o treinamento',
    descricao:
      'Acesso ao material de capacitação sobre os produtos do portfólio Dabar — você aprende a identificar oportunidades e apresentar soluções.',
  },
  {
    numero: '03',
    titulo: 'Comece a indicar',
    descricao:
      'Indique clientes para a Dabar. Nosso time de consultores cuida de todo o processo de atendimento e fechamento.',
  },
  {
    numero: '04',
    titulo: 'Receba sua remuneração',
    descricao:
      'A cada negócio fechado através da sua indicação, você recebe a sua comissão. Simples, transparente e sem burocracia.',
  },
]

const BENEFICIOS: { icon: LucideIcon; titulo: string; descricao: string }[] = [
  {
    icon: GraduationCap,
    titulo: 'Treinamento completo',
    descricao:
      'Capacitação sobre todos os produtos do portfólio Dabar — seguros, crédito, consórcio, câmbio e mais. Você parte do zero com segurança.',
  },
  {
    icon: LifeBuoy,
    titulo: 'Suporte contínuo',
    descricao:
      'Acesso direto à equipe Dabar durante todo o processo. Dúvidas sobre produtos, clientes ou operações — respondemos com agilidade.',
  },
  {
    icon: HandCoins,
    titulo: 'Remuneração por produção',
    descricao:
      'Você indica, a Dabar fecha. Cada negócio confirmado gera comissão para o parceiro. Sem teto, sem burocracia, sem prazo de validade.',
  },
  {
    icon: BadgeCheck,
    titulo: 'Marca consolidada',
    descricao:
      'Indique com a credibilidade da Dabar por trás. Portfólio robusto, atendimento especializado e reputação no mercado financeiro baiano.',
  },
]

const PERFIS: { icon: LucideIcon; titulo: string; descricao: string }[] = [
  {
    icon: UserRound,
    titulo: 'Autônomos e freelancers',
    descricao: 'Profissionais que querem uma renda complementar sem vínculo empregatício.',
  },
  {
    icon: Briefcase,
    titulo: 'Corretores independentes',
    descricao: 'Já atua no setor financeiro ou de seguros e quer ampliar o portfólio.',
  },
  {
    icon: Building2,
    titulo: 'Empreendedores',
    descricao: 'Donos de negócio que atendem PF ou PJ e podem gerar indicações qualificadas.',
  },
  {
    icon: Handshake,
    titulo: 'Parceiros estratégicos',
    descricao: 'Empresas ou profissionais com carteira de clientes e interesse em co-operar.',
  },
]

// ── COMPONENTE WHATSAPP ICON ──────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function DabarIndicaPage() {
  const ctaHref = buildWhatsAppLinkGenerico()

  return (
    <div className="bg-brand-lightBg">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 md:py-24" aria-labelledby="indica-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] text-[#555555]">
              <li><Link href="/" className="hover:text-[#AAAAAA] transition-colors">Início</Link></li>
              <li aria-hidden="true" className="text-[#333333]">/</li>
              <li className="text-[#AAAAAA]" aria-current="page">Dabar Indica+</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-label text-brand-green mb-3">Programa de Parceiros</p>
              <h1
                id="indica-hero-heading"
                className="text-[32px] md:text-[40px] font-medium text-white leading-[1.2] mb-6"
              >
                Trabalhe com a Dabar.{' '}
                <span className="text-brand-green">Cresça com a Dabar.</span>
              </h1>
              <p className="text-[16px] text-[#777777] leading-relaxed mb-8 max-w-lg">
                O Dabar Indica+ é o programa de parceria para quem quer atuar no mercado
                financeiro com suporte completo, treinamento especializado e remuneração
                por produção — sem vínculo, sem investimento inicial.
              </p>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com consultor Dabar sobre o programa Indica+ via WhatsApp"
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white font-medium px-6 py-3.5 rounded-btn transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
              >
                <WhatsAppIcon />
                Quero ser um parceiro Dabar
              </a>
            </div>

            {/* Destaque lateral */}
            <div className="grid grid-cols-2 gap-3 lg:justify-self-end lg:w-80">
              {[
                { valor: '12', desc: 'produtos para indicar' },
                { valor: '100%', desc: 'suporte da equipe Dabar' },
                { valor: 'Sem', desc: 'investimento inicial' },
                { valor: 'Via', desc: 'WhatsApp — simples e direto' },
              ].map((item) => (
                <div
                  key={item.desc}
                  className="bg-brand-surface border border-white/5 rounded-card p-4 flex flex-col gap-1"
                >
                  <span className="text-[28px] font-medium text-white leading-none">{item.valor}</span>
                  <span className="text-[11px] text-[#555555] leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── O PROGRAMA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-lightBg py-20" aria-labelledby="programa-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-label text-brand-green mb-2">O que é</p>
            <h2 id="programa-heading" className="text-[22px] font-medium text-brand-dark mb-6">
              Uma parceria construída para gerar resultado
            </h2>
            <div className="space-y-4 text-[15px] text-[#888888] leading-relaxed">
              <p>
                O <strong className="text-brand-dark font-medium">Dabar Indica+</strong> conecta
                profissionais e empreendedores ao portfólio completo da Dabar Soluções Financeiras.
                Você identifica a necessidade do cliente, faz a indicação via WhatsApp e a nossa
                equipe cuida de todo o processo de atendimento, proposta e fechamento.
              </p>
              <p>
                Não é necessário ser corretor habilitado para participar. O programa é aberto a
                qualquer pessoa que tenha relacionamento com potenciais clientes e queira gerar
                uma renda complementar no mercado financeiro.
              </p>
              <p>
                Cada indicação qualificada que se transforma em negócio gera comissão para o
                parceiro. Sem teto de ganhos, sem mensalidade, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO PARTICIPAR ───────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-20" aria-labelledby="como-participar-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-label text-brand-green mb-2">Passo a passo</p>
            <h2 id="como-participar-heading" className="text-[22px] font-medium text-white">
              Como participar
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ETAPAS.map((etapa) => (
              <li key={etapa.numero} className="flex flex-col">
                <span
                  aria-hidden="true"
                  className="text-[40px] font-medium text-brand-green leading-none mb-4 select-none"
                >
                  {etapa.numero}
                </span>
                <div className="w-8 h-px bg-brand-green mb-4" aria-hidden="true" />
                <h3 className="text-[15px] font-medium text-white mb-2">{etapa.titulo}</h3>
                <p className="text-[13px] text-[#777777] leading-relaxed">{etapa.descricao}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BENEFÍCIOS ────────────────────────────────────────────────────── */}
      <section className="bg-brand-lightBg py-20" aria-labelledby="beneficios-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-label text-brand-green mb-2">Vantagens do programa</p>
            <h2 id="beneficios-heading" className="text-[22px] font-medium text-brand-dark">
              Por que ser parceiro Dabar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFICIOS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.titulo}
                  className="bg-white border border-brand-cardBorder rounded-card p-6 flex flex-col gap-4
                             border-t-2 border-t-transparent hover:border-t-brand-green
                             hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} className="text-brand-greenDark" />
                  </div>
                  <h3 className="text-[15px] font-medium text-brand-dark">{item.titulo}</h3>
                  <p className="text-[13px] text-[#888888] leading-relaxed">{item.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ───────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-20" aria-labelledby="para-quem-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-label text-brand-green mb-2">Perfis</p>
            <h2 id="para-quem-heading" className="text-[22px] font-medium text-white">
              Para quem é o Dabar Indica+
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERFIS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.titulo} className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} className="text-brand-greenDark" />
                  </div>
                  <div className="w-8 h-px bg-white/10" aria-hidden="true" />
                  <h3 className="text-[15px] font-medium text-white">{item.titulo}</h3>
                  <p className="text-[13px] text-[#777777] leading-relaxed">{item.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-20" aria-labelledby="indica-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-label text-brand-green mb-4">Dê o primeiro passo</p>
          <h2
            id="indica-cta-heading"
            className="text-[22px] md:text-[32px] font-medium text-white mb-4 leading-snug"
          >
            Pronto para fazer parte do Dabar Indica+?
          </h2>
          <p className="text-[16px] text-[#777777] leading-relaxed mb-10 max-w-lg mx-auto">
            Entre em contato agora pelo WhatsApp. Nossa equipe apresenta o programa completo,
            tira suas dúvidas e faz o seu cadastro de parceiro.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com consultor Dabar sobre o programa Indica+ via WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white font-medium px-8 py-4 rounded-btn transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
            >
              <WhatsAppIcon />
              Quero ser parceiro Dabar
            </a>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#AAAAAA] hover:text-white border border-white/10 hover:border-white/30 px-6 py-4 rounded-btn transition-colors duration-200"
            >
              Conhecer a Dabar
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
