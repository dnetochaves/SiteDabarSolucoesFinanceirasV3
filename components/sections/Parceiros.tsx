// Seção de parceiros institucionais — logos das principais instituições com quem a Dabar opera
// PRD §8.2: fundo claro #F8F8F6 | logos em grayscale com hover colorido

import Image from 'next/image'

const PARCEIROS: { nome: string; arquivo: string }[] = [
  { nome: 'Itaú',        arquivo: 'icon-itau.webp' },
  { nome: 'Bradesco',    arquivo: 'icon-bradesco.webp' },
  { nome: 'Santander',   arquivo: 'icon-santander.webp' },
  { nome: 'BRB',         arquivo: 'icon-brb.webp' },
  { nome: 'Banrisul',    arquivo: 'icon-banrisul.webp' },
  { nome: 'Daycoval',    arquivo: 'icon-daycoval.webp' },
  { nome: 'Porto Seguro',arquivo: 'icon-portoseguro.webp' },
  { nome: 'HDI Seguros', arquivo: 'icon-hdi.webp' },
  { nome: 'SulAmérica',  arquivo: 'icon-sulamerica.webp' },
  { nome: 'Allianz',     arquivo: 'icon-allianz.webp' },
  { nome: 'Travelex',    arquivo: 'icon-travelex.webp' },
]

export default function Parceiros() {
  return (
    <section className="bg-brand-lightBg py-16" aria-labelledby="parceiros-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="mb-10">
          <p className="text-label text-brand-green mb-2">Com quem trabalhamos</p>
          <h2 id="parceiros-heading" className="text-[22px] font-medium text-brand-dark">
            Parceiros institucionais
          </h2>
        </div>

        {/* Grid de logos */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4 items-center"
          role="list"
          aria-label="Logos dos parceiros institucionais da Dabar"
        >
          {PARCEIROS.map((parceiro) => (
            <div
              key={parceiro.nome}
              role="listitem"
              className="flex items-center justify-center h-12
                         grayscale opacity-50 hover:grayscale-0 hover:opacity-100
                         transition-all duration-300"
            >
              <Image
                src={`/images/paarceiros/${parceiro.arquivo}`}
                alt={parceiro.nome}
                width={80}
                height={40}
                className="w-auto h-7 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Divisor inferior sutil */}
        <div className="mt-12 h-px bg-brand-cardBorder" aria-hidden="true" />
      </div>
    </section>
  )
}
