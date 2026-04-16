'use client'

// PRD §5.1: Seção de soluções por categoria (carrossel — ver seção 8.4)
// PRD §8.5: 3/desktop · 2/tablet · 1/mobile · setas no header · dots abaixo
//           transition: transform translateX · cubic-bezier(0.25,0.46,0.45,0.94) · 400ms

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { produtos } from '@/data/produtos'
import ProdutoCard from './ProdutoCard'

const GAP = 24 // px — gap entre cards

function useItemsPerPage() {
  const [items, setItems] = useState(3)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItems(3)
      else if (window.innerWidth >= 768) setItems(2)
      else setItems(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return items
}

export default function SolucoesCarrossel() {
  const [page, setPage] = useState(0)
  const itemsPerPage = useItemsPerPage()
  const totalPages = Math.ceil(produtos.length / itemsPerPage)

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Clamp page when screen size / itemsPerPage changes
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)))
  }, [totalPages])

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  // cardWidth = (containerWidth - gap*(itemsPerPage-1)) / itemsPerPage
  // Each page occupies exactly containerWidth (gap math works out — see PRD implementation notes)
  // translateX = -(page * (containerWidth + GAP))
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (itemsPerPage - 1)) / itemsPerPage
      : 0

  const translateX = -(page * (containerWidth + GAP))

  return (
    <section className="bg-brand-lightBg py-20" aria-labelledby="solucoes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da seção com setas — PRD §8.5 */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-label text-brand-green mb-2">Portfólio completo</p>
            <h2 id="solucoes-heading" className="text-[22px] font-medium text-brand-dark">
              Nossas Soluções
            </h2>
          </div>

          {/* Setas de navegação — PRD §8.5: no cabeçalho da seção */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={page === 0}
              aria-label="Soluções anteriores"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-brand-cardBorder text-brand-dark hover:border-brand-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              disabled={page === totalPages - 1}
              aria-label="Próximas soluções"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-brand-cardBorder text-brand-dark hover:border-brand-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Track — overflow-hidden + translateX */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
            aria-label={`Página ${page + 1} de ${totalPages}`}
          />
          <div
            role="list"
            aria-label="Lista de soluções"
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {produtos.map((produto) => (
              <div
                key={produto.slug}
                role="listitem"
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
                className="flex-shrink-0"
              >
                <ProdutoCard produto={produto} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots — PRD §8.5: dot ativo: pill verde #8EDB00
            Touch target: wrapper 44×44px para cumprir WCAG 2.5.5 */}
        <div className="flex justify-center gap-1 mt-8" role="tablist" aria-label="Navegação do carrossel">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setPage(i)}
              aria-label={`Ir para página ${i + 1} de ${totalPages}`}
              aria-selected={i === page}
              className="w-11 h-11 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green rounded"
            >
              <span
                aria-hidden="true"
                className={[
                  'h-2 rounded-full transition-all duration-300 pointer-events-none',
                  i === page
                    ? 'w-6 bg-brand-green'
                    : 'w-2 bg-brand-cardBorder group-hover:bg-[#AAAAAA]',
                ].join(' ')}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
