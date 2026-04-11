// PRD §5.2 — Hub de Soluções

import type { Metadata } from 'next'
import SolucoesHub from '@/components/sections/SolucoesHub'

export const metadata: Metadata = {
  title: 'Soluções',
  description:
    'Conheça o portfólio completo de soluções financeiras da Dabar: seguros, crédito consignado, consórcio, financiamento, câmbio e factoring.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'}/solucoes`,
  },
}

export default function SolucoesPage() {
  return (
    <section className="bg-brand-lightBg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da página */}
        <div className="mb-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#AAAAAA] mb-6">
            <a href="/" className="hover:text-brand-dark transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-brand-dark" aria-current="page">Soluções</span>
          </nav>

          <p className="text-label text-brand-green mb-2">Portfólio completo</p>
          <h1 className="text-[32px] font-medium text-brand-dark leading-snug mb-4">
            Nossas Soluções
          </h1>
          <p className="text-[16px] text-[#888888] leading-relaxed max-w-xl">
            Encontre a solução financeira ideal para o seu momento. Selecione uma
            categoria ou explore todo o portfólio Dabar.
          </p>
        </div>

        {/* Hub interativo com tabs + grid */}
        <SolucoesHub />
      </div>
    </section>
  )
}
