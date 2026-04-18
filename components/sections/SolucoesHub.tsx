'use client'

// PRD §5.2 — Hub de Soluções
// Filtro por categoria via tabs + grid de cards

import { useState } from 'react'
import { produtos, type Categoria } from '@/data/produtos'
import ProdutoCard from './ProdutoCard'

const CATEGORIAS: Array<'Todos' | Categoria> = [
  'Todos',
  'Consórcio',
  'Crédito',
  'Câmbio',
  'Investimentos',
  'Precatórios',
  'Seguros',
]

export default function SolucoesHub() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<'Todos' | Categoria>('Todos')

  const produtosFiltrados =
    categoriaAtiva === 'Todos'
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaAtiva)

  return (
    <>
      {/* Tabs de categoria — PRD §5.2: filtro por categoria */}
      <div
        role="tablist"
        aria-label="Filtrar soluções por categoria"
        className="flex flex-wrap gap-2 mb-10"
      >
        {CATEGORIAS.map((cat) => {
          const ativa = cat === categoriaAtiva
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={ativa}
              onClick={() => setCategoriaAtiva(cat)}
              className={[
                'text-[12px] font-medium px-4 py-2 rounded-btn border transition-all duration-150',
                ativa
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'bg-white text-[#888888] border-brand-cardBorder hover:border-brand-dark hover:text-brand-dark',
              ].join(' ')}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Contagem de resultados */}
      <p className="text-[12px] text-[#AAAAAA] mb-6" aria-live="polite">
        {produtosFiltrados.length}{' '}
        {produtosFiltrados.length === 1 ? 'solução encontrada' : 'soluções encontradas'}
        {categoriaAtiva !== 'Todos' && ` em ${categoriaAtiva}`}
      </p>

      {/* Grid de cards — PRD §5.2: listagem com cards */}
      <div
        role="tabpanel"
        aria-label={`Soluções: ${categoriaAtiva}`}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {produtosFiltrados.map((produto) => (
          <ProdutoCard
            key={produto.slug}
            produto={produto}
            detalhesLabel="Ver detalhes →"
          />
        ))}
      </div>
    </>
  )
}
