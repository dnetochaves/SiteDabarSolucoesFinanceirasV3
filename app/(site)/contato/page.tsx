// PRD §5.4 — Contato
// REGRA: nenhum formulário — apenas botões WhatsApp por produto

import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import { getProdutosPorCategoria } from '@/data/produtos'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale diretamente com um especialista Dabar via WhatsApp. Atendimento personalizado por produto — sem formulários, sem espera.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'}/contato`,
  },
}

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContatoPage() {
  const porCategoria = getProdutosPorCategoria()
  const genericoHref = buildWhatsAppLinkGenerico()

  return (
    <div className="bg-brand-lightBg min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PRD §5.4: Título "Fale com um especialista Dabar" */}
          <p className="text-label text-brand-green mb-3">Atendimento direto</p>
          <h1 className="text-[32px] md:text-[40px] font-medium text-white leading-[1.2] mb-4">
            Fale com um especialista Dabar
          </h1>
          <p className="text-[16px] text-[#777777] leading-relaxed max-w-xl">
            Selecione o produto de interesse e inicie uma conversa direta com o
            consultor especializado. Sem formulários, sem espera.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ── BOTÃO GENÉRICO ───────────────────────────────── */}
        {/* PRD §5.4: Botão genérico "Não sei por onde começar — me ajude" */}
        <section aria-labelledby="generico-heading">
          <div className="bg-brand-dark rounded-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-label text-brand-green mb-2">Não sabe por onde começar?</p>
              <h2 id="generico-heading" className="text-[18px] font-medium text-white">
                Fale com um consultor e ele te orienta
              </h2>
              <p className="text-[13px] text-[#777777] mt-1">
                Apresente sua situação e nosso time encontra a solução ideal para você.
              </p>
            </div>
            <a
              href={genericoHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com consultor Dabar via WhatsApp sem produto específico"
              className="shrink-0 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white font-medium px-5 py-3 rounded-btn transition-colors duration-200 whitespace-nowrap"
            >
              <WhatsAppIcon size={14} />
              Não sei por onde começar — me ajude
            </a>
          </div>
        </section>

        {/* ── GRID POR CATEGORIA ───────────────────────────── */}
        {/* PRD §5.4: Grid de botões WhatsApp — um por produto, organizados por categoria */}
        <section aria-labelledby="produtos-heading">
          <p className="text-label text-brand-green mb-2">Por produto</p>
          <h2 id="produtos-heading" className="text-[22px] font-medium text-brand-dark mb-10">
            Escolha sua solução
          </h2>

          <div className="space-y-10">
            {(Object.entries(porCategoria) as [string, ReturnType<typeof getProdutosPorCategoria>[keyof ReturnType<typeof getProdutosPorCategoria>]][]).map(
              ([categoria, prods]) => (
                <div key={categoria}>
                  {/* Cabeçalho da categoria */}
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-label text-brand-green">{categoria}</p>
                    <div className="flex-1 h-px bg-brand-cardBorder" aria-hidden="true" />
                  </div>

                  {/* Grid de botões — um por produto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {prods.map((produto) => (
                      <WhatsAppButton
                        key={produto.slug}
                        produto={produto.nome}
                        label={produto.nome}
                        className="w-full justify-center py-3 text-[12px]"
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* ── INFORMAÇÕES DE CONTATO ───────────────────────── */}
        {/* PRD §5.4: telefone, e-mail, endereço */}
        <section aria-labelledby="info-heading">
          <p className="text-label text-brand-green mb-2">Onde estamos</p>
          <h2 id="info-heading" className="text-[22px] font-medium text-brand-dark mb-8">
            Informações de contato
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-brand-cardBorder rounded-card p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                <Phone size={18} strokeWidth={1.5} className="text-brand-greenDark" />
              </div>
              <p className="text-[12px] text-label text-brand-green">Telefone / WhatsApp</p>
              <a
                href="tel:+5571982754075"
                className="text-[15px] font-medium text-brand-dark hover:text-brand-green transition-colors"
              >
                +55 (71) 98275-4075
              </a>
            </div>

            <div className="bg-white border border-brand-cardBorder rounded-card p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                <Mail size={18} strokeWidth={1.5} className="text-brand-greenDark" />
              </div>
              <p className="text-label text-brand-green">E-mail</p>
              <a
                href="mailto:contato@dabar.com.br"
                className="text-[15px] font-medium text-brand-dark hover:text-brand-green transition-colors break-all"
              >
                contato@dabar.com.br
              </a>
            </div>

            <div className="bg-white border border-brand-cardBorder rounded-card p-6 flex flex-col gap-3">
              <div className="w-10 h-10 bg-brand-greenTint rounded-icon flex items-center justify-center">
                <MapPin size={18} strokeWidth={1.5} className="text-brand-greenDark" />
              </div>
              <p className="text-label text-brand-green">Endereço</p>
              <address className="not-italic text-[15px] font-medium text-brand-dark">
                Salvador, Bahia — Brasil
              </address>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
