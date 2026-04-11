// PRD §4.1 — Rota /sobre · Quem Somos · Sprint 4
// PRD §8 — Design System: dark hero, light content, brand.green só em CTAs e detalhes

import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Users, LayoutGrid, MessageSquare, TrendingUp, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a Dabar Soluções Financeiras — especialistas em seguros, crédito, consórcio, câmbio e mais. Atendimento personalizado via WhatsApp, direto com o consultor certo.',
}

// ── DADOS ────────────────────────────────────────────────────────────────────

const VALORES: { icon: LucideIcon; titulo: string; descricao: string }[] = [
  {
    icon: Award,
    titulo: 'Especialização',
    descricao:
      'Cada produto do nosso portfólio conta com consultores treinados exclusivamente para aquela solução — sem generalistas, sem respostas vagas.',
  },
  {
    icon: Shield,
    titulo: 'Transparência',
    descricao:
      'Clareza total em cada etapa do processo. Nenhuma letra miúda, nenhuma surpresa. O cliente sabe exatamente o que está contratando.',
  },
  {
    icon: Users,
    titulo: 'Proximidade',
    descricao:
      'Atendimento direto via WhatsApp com o consultor especializado. Sem intermediários, sem filas, sem formulários que ninguém lê.',
  },
  {
    icon: TrendingUp,
    titulo: 'Resultado',
    descricao:
      'Nosso sucesso é medido pelo sucesso do cliente. Cada solução é apresentada com o objetivo de gerar o melhor resultado possível para quem atendemos.',
  },
]

const AREAS: { label: string; descricao: string }[] = [
  { label: 'Seguros', descricao: 'Vida, Auto, Residencial, Empresarial e Viagem' },
  { label: 'Crédito', descricao: 'Consignado CLT, FGTS Saque-Aniversário e Precatório' },
  { label: 'Consórcio', descricao: 'Imóveis e Veículos — sem juros, com planejamento' },
  { label: 'Financiamento', descricao: 'Financiamento Imobiliário com as melhores condições' },
  { label: 'Câmbio', descricao: 'Remessas internacionais com câmbio competitivo' },
  { label: 'Empresarial', descricao: 'Factoring e antecipação de recebíveis para PJ' },
]

const NUMEROS: { valor: string; descricao: string }[] = [
  { valor: '12', descricao: 'Soluções no portfólio' },
  { valor: '6', descricao: 'Categorias de produtos' },
  { valor: '100%', descricao: 'Atendimento via WhatsApp' },
  { valor: 'BA', descricao: 'Salvador, Bahia — Brasil' },
]

// ── COMPONENTES ──────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function SobrePage() {
  const ctaHref = buildWhatsAppLinkGenerico()

  return (
    <div className="bg-brand-lightBg">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 md:py-24" aria-labelledby="sobre-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] text-[#555555]">
              <li><Link href="/" className="hover:text-[#AAAAAA] transition-colors">Início</Link></li>
              <li aria-hidden="true" className="text-[#333333]">/</li>
              <li className="text-[#AAAAAA]" aria-current="page">Sobre nós</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-label text-brand-green mb-3">Quem somos</p>
            <h1
              id="sobre-hero-heading"
              className="text-[32px] md:text-[40px] font-medium text-white leading-[1.2] mb-6"
            >
              Especialistas em soluções{' '}
              <span className="text-brand-green">financeiras</span>{' '}
              para cada fase da sua vida
            </h1>
            <p className="text-[16px] text-[#777777] leading-relaxed max-w-xl">
              A Dabar nasceu com um propósito simples: conectar pessoas às soluções financeiras
              certas, com o consultor certo, no momento certo — sem burocracia, sem enrolação.
            </p>
          </div>
        </div>
      </section>

      {/* ── NOSSA HISTÓRIA ────────────────────────────────────────────────── */}
      <section className="bg-brand-lightBg py-20" aria-labelledby="historia-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Texto */}
            <div>
              <p className="text-label text-brand-green mb-2">Nossa história</p>
              <h2 id="historia-heading" className="text-[22px] font-medium text-brand-dark mb-6">
                Uma corretora pensada para o cliente moderno
              </h2>
              <div className="space-y-4 text-[15px] text-[#888888] leading-relaxed">
                <p>
                  Fundada em Salvador, Bahia, a Dabar Soluções Financeiras surgiu da percepção de
                  que o mercado financeiro precisa de mais clareza, mais especialização e menos
                  atrito. Um cliente em busca de um seguro de vida não deveria receber o mesmo
                  atendimento genérico de quem precisa de factoring.
                </p>
                <p>
                  Por isso, estruturamos nosso time com consultores especializados por produto.
                  Quando você nos contata sobre Consignado CLT, fala com um especialista em crédito
                  consignado. Quando precisa de Câmbio Internacional, fala com quem domina o
                  mercado de remessas.
                </p>
                <p>
                  Nosso modelo é direto ao ponto: WhatsApp, sem formulários, sem espera, sem
                  promessas vazias. Apresente sua necessidade e receba orientação real de quem
                  entende do assunto.
                </p>
              </div>
            </div>

            {/* Números */}
            <div className="grid grid-cols-2 gap-4">
              {NUMEROS.map((item) => (
                <div
                  key={item.descricao}
                  className="bg-white border border-brand-cardBorder rounded-card p-6 flex flex-col gap-2"
                >
                  <span className="text-[36px] font-medium text-brand-dark leading-none">
                    {item.valor}
                  </span>
                  <span className="text-[12px] text-[#888888] leading-snug">{item.descricao}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-20" aria-labelledby="valores-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-label text-brand-green mb-2">O que nos guia</p>
            <h2 id="valores-heading" className="text-[22px] font-medium text-white">
              Nossos valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALORES.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.titulo} className="flex flex-col">
                  <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.5} className="text-brand-greenDark" />
                  </div>
                  <div className="w-8 h-px bg-brand-green mb-4" aria-hidden="true" />
                  <h3 className="text-[15px] font-medium text-white mb-2">{item.titulo}</h3>
                  <p className="text-[13px] text-[#777777] leading-relaxed">{item.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ÁREAS DE ATUAÇÃO ──────────────────────────────────────────────── */}
      <section className="bg-brand-lightBg py-20" aria-labelledby="atuacao-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-label text-brand-green mb-2">O que fazemos</p>
            <h2 id="atuacao-heading" className="text-[22px] font-medium text-brand-dark">
              Áreas de atuação
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AREAS.map((area) => (
              <div
                key={area.label}
                className="bg-white border border-brand-cardBorder rounded-card p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                  <span className="text-[12px] font-medium text-brand-greenDark bg-brand-greenTint px-2 py-0.5 rounded-[3px]">
                    {area.label}
                  </span>
                </div>
                <p className="text-[13px] text-[#888888] leading-relaxed">{area.descricao}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/solucoes"
              className="inline-flex items-center gap-1.5 text-[13px] text-brand-dark border border-brand-cardBorder hover:border-brand-green hover:text-brand-green px-5 py-2.5 rounded-btn transition-colors duration-200"
            >
              Ver todas as soluções
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSÃO ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-16" aria-labelledby="missao-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                <LayoutGrid size={20} strokeWidth={1.5} className="text-brand-greenDark" />
              </div>
              <h3 className="text-[13px] font-medium text-brand-green uppercase tracking-widest">Missão</h3>
              <p className="text-[13px] text-[#AAAAAA] leading-relaxed">
                Conectar pessoas e empresas às soluções financeiras mais adequadas ao seu perfil,
                com atendimento especializado e sem fricção.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                <TrendingUp size={20} strokeWidth={1.5} className="text-brand-greenDark" />
              </div>
              <h3 className="text-[13px] font-medium text-brand-green uppercase tracking-widest">Visão</h3>
              <p className="text-[13px] text-[#AAAAAA] leading-relaxed">
                Ser a referência no mercado financeiro baiano em atendimento consultivo — onde cada
                cliente encontra a solução certa, com o especialista certo.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                <MessageSquare size={20} strokeWidth={1.5} className="text-brand-greenDark" />
              </div>
              <h3 className="text-[13px] font-medium text-brand-green uppercase tracking-widest">Proposta</h3>
              <p className="text-[13px] text-[#AAAAAA] leading-relaxed">
                Atendimento direto via WhatsApp, sem formulários, sem filas e sem respostas
                genéricas. Consultor especializado desde o primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-20" aria-labelledby="sobre-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-label text-brand-green mb-4">Vamos conversar</p>
          <h2
            id="sobre-cta-heading"
            className="text-[22px] md:text-[32px] font-medium text-white mb-4 leading-snug"
          >
            Encontre sua solução financeira ideal
          </h2>
          <p className="text-[16px] text-[#777777] leading-relaxed mb-10 max-w-lg mx-auto">
            Fale agora com um consultor Dabar — sem formulários, sem espera.
            Direto para o especialista no produto que você precisa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com consultor Dabar via WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white font-medium px-8 py-4 rounded-btn transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
            >
              <WhatsAppIcon />
              Falar com um consultor
            </a>
            <Link
              href="/solucoes"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#AAAAAA] hover:text-white border border-white/10 hover:border-white/30 px-6 py-4 rounded-btn transition-colors duration-200"
            >
              Ver soluções
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
