// PRD §5.3 — Página de Produto dinâmica
// Geração estática via generateStaticParams (PRD §6.2)

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { CheckCircle2, ChevronRight, Users } from 'lucide-react'

import { getProdutoBySlug, getAllSlugs, produtos } from '@/data/produtos'
import { produtosDetalhes } from '@/data/produtos-detalhes'
import { faqSchema, breadcrumbSchema } from '@/lib/jsonld'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'
import ProdutoCard from '@/components/sections/ProdutoCard'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'

// PRD §5.3 + §6.2: SSG para todas as páginas de produto
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// PRD §6.2: Metadata dinâmica por produto — title, description, OG, Twitter Card, canonical
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const produto = getProdutoBySlug(params.slug)
  if (!produto) return {}
  const detalhe = produtosDetalhes[params.slug]
  const description = detalhe?.headline ?? produto.descricao
  const url = `${SITE_URL}/solucoes/${params.slug}`

  return {
    title: produto.nome,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${produto.nome} | Dabar Soluções Financeiras`,
      description,
      url,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: produto.nome }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${produto.nome} | Dabar Soluções Financeiras`,
      description,
      images: ['/og-image.png'],
    },
  }
}

// FAQ com <details>/<summary> — acessível, sem JS extra
function FAQItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  return (
    <details className="group border-b border-brand-cardBorder py-5 first:border-t">
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[15px] font-medium text-brand-dark">
        {pergunta}
        <ChevronRight
          size={16}
          className="shrink-0 text-[#AAAAAA] transition-transform duration-200 group-open:rotate-90"
        />
      </summary>
      <p className="mt-3 text-[14px] text-[#888888] leading-relaxed pr-6">
        {resposta}
      </p>
    </details>
  )
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const produto = getProdutoBySlug(params.slug)
  if (!produto) notFound()

  const detalhe = produtosDetalhes[params.slug]
  if (!detalhe) notFound()

  // PRD §5.3: Produtos relacionados — máximo 3 cards
  const relacionados = detalhe.relacionados
    .map((slug) => produtos.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3) as typeof produtos

  // PRD §6.2 — JSON-LD: FAQPage + BreadcrumbList
  const jsonLdFaq = faqSchema(detalhe.faq)
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Soluções', url: `${SITE_URL}/solucoes` },
    { name: produto.nome, url: `${SITE_URL}/solucoes/${produto.slug}` },
  ])

  return (
    <>
      <Script
        id={`jsonld-faq-${produto.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Script
        id={`jsonld-breadcrumb-${produto.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* ── HERO DA PÁGINA ─────────────────────────────── */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* PRD §5.3: Breadcrumb — Home > Soluções > [Produto] */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#555555] mb-8">
            <Link href="/" className="hover:text-[#AAAAAA] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/solucoes" className="hover:text-[#AAAAAA] transition-colors">Soluções</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#AAAAAA]" aria-current="page">{produto.nome}</span>
          </nav>

          <div className="max-w-2xl">
            {/* Badge categoria */}
            <span className="inline-block text-badge bg-brand-greenTint text-brand-greenDark rounded-[3px] px-2 py-0.5 mb-4">
              {produto.categoria}
            </span>

            {/* PRD §5.3: Headline orientada ao benefício */}
            <h1 className="text-[32px] md:text-[40px] font-medium text-white leading-[1.2] mb-6">
              {detalhe.headline}
            </h1>

            {/* PRD §5.3: CTA WhatsApp contextualizado */}
            <WhatsAppButton
              produto={produto.nome}
              label={produto.ctaLabel}
              className="text-sm px-5 py-3"
            />
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO PRINCIPAL ─────────────────────────── */}
      <div className="bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Coluna principal */}
            <div className="lg:col-span-2 space-y-12">

              {/* PRD §5.3: Descrição completa */}
              <section aria-labelledby="descricao-heading">
                <p className="text-label text-brand-green mb-2">Sobre o produto</p>
                <h2 id="descricao-heading" className="text-[22px] font-medium text-brand-dark mb-6">
                  {produto.nome}
                </h2>
                <div className="space-y-4">
                  {detalhe.descricaoCompleta.map((paragrafo, i) => (
                    <p key={i} className="text-[15px] text-[#555555] leading-relaxed">
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </section>

              {/* PRD §5.3: Vantagens e diferenciais */}
              <section aria-labelledby="vantagens-heading">
                <p className="text-label text-brand-green mb-2">Por que escolher</p>
                <h2 id="vantagens-heading" className="text-[22px] font-medium text-brand-dark mb-6">
                  Vantagens e diferenciais
                </h2>
                <ul className="space-y-4">
                  {detalhe.vantagens.map((v) => (
                    <li key={v.titulo} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-brand-green shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-[14px] font-medium text-brand-dark">{v.titulo}</p>
                        <p className="text-[13px] text-[#888888] leading-relaxed">{v.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* PRD §5.3: FAQ — mínimo 4 perguntas */}
              <section aria-labelledby="faq-heading">
                <p className="text-label text-brand-green mb-2">Dúvidas frequentes</p>
                <h2 id="faq-heading" className="text-[22px] font-medium text-brand-dark mb-6">
                  Perguntas frequentes
                </h2>
                <div>
                  {detalhe.faq.map((item) => (
                    <FAQItem key={item.pergunta} pergunta={item.pergunta} resposta={item.resposta} />
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar — PRD §5.3: "Para quem é este produto?" */}
            <aside aria-labelledby="perfis-heading" className="lg:col-span-1">
              <div className="bg-white border border-brand-cardBorder rounded-card p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-brand-greenTint rounded-icon flex items-center justify-center">
                    <Users size={16} strokeWidth={1.5} className="text-brand-greenDark" />
                  </div>
                  <h2 id="perfis-heading" className="text-[15px] font-medium text-brand-dark">
                    Para quem é este produto?
                  </h2>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {detalhe.perfisIdeais.map((perfil) => (
                    <li key={perfil} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-brand-green text-[10px] mt-1.5 shrink-0">●</span>
                      <span className="text-[13px] text-[#555555] leading-relaxed">{perfil}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-brand-cardBorder pt-5">
                  <p className="text-[12px] text-[#AAAAAA] mb-3">
                    Não tem certeza se este produto é para você?
                  </p>
                  <WhatsAppButton
                    produto={produto.nome}
                    label="Falar com um consultor"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── PRODUTOS RELACIONADOS ──────────────────────── */}
      {relacionados.length > 0 && (
        <section className="bg-white py-16" aria-labelledby="relacionados-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-label text-brand-green mb-2">Explore mais</p>
            <h2 id="relacionados-heading" className="text-[22px] font-medium text-brand-dark mb-8">
              Soluções relacionadas
            </h2>
            {/* PRD §5.3: máximo 3 cards, cada um com CTA WhatsApp próprio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relacionados.map((p) => (
                <ProdutoCard key={p.slug} produto={p} detalhesLabel="Ver detalhes →" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRD §5.3: CTA sticky no rodapé em mobile — 56px de altura */}
      <div className="lg:hidden">
        <WhatsAppButton
          produto={produto.nome}
          label={produto.ctaLabel}
          variant="sticky"
        />
      </div>
    </>
  )
}
