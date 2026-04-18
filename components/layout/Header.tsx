'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react'
import { getProdutosPorCategoria, CATEGORIA_ORDER, type Categoria, type Produto } from '@/data/produtos'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '/contato', label: 'Contato' },
  { href: '/dabar-indica', label: 'Dabar Indica+' },
]

/** Categorias pequenas exibidas na coluna esquerda do mega-menu */
const SMALL_CATS: Categoria[] = ['Consórcio', 'Câmbio', 'Investimentos', 'Precatórios']

function DabarLogo() {
  return (
    <Link
      href="/"
      aria-label="Dabar Soluções Financeiras — página inicial"
      className="flex items-center"
    >
      <Image
        src="/images/LOGO5_traced.svg"
        alt="Dabar Soluções Financeiras"
        width={120}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </Link>
  )
}

function CategoryColumn({ categoria, produtos }: { categoria: string; produtos: Produto[] }) {
  return (
    <div>
      <p className="text-label text-brand-green mb-3 uppercase tracking-widest">{categoria}</p>
      <ul className="space-y-1.5">
        {produtos.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/solucoes/${p.slug}`}
              className="text-[12px] text-[#AAAAAA] hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green leading-tight block"
            >
              {p.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SolucoesDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const porCategoria = getProdutosPorCategoria()

  // Separa produtos de Crédito por subCategoria
  const creditoGeral = porCategoria['Crédito'].filter((p) => !p.subCategoria)
  const consignados = porCategoria['Crédito'].filter((p) => p.subCategoria === 'Crédito Consignado')

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') setOpen(false)
  }

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="solucoes-dropdown"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[#AAAAAA] hover:text-white text-sm transition-colors duration-150 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        Soluções
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          id="solucoes-dropdown"
          role="menu"
          aria-label="Menu de soluções"
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
        >
          {/* Mega-menu 3 colunas: pequenas | Crédito | Seguros */}
          <div className="bg-brand-surface border border-white/10 rounded-card shadow-xl p-6 w-[860px] grid grid-cols-[200px_1fr_1fr] gap-6">

            {/* Coluna 1 — categorias pequenas */}
            <div className="flex flex-col gap-6 border-r border-white/10 pr-6">
              {SMALL_CATS.map((cat) => (
                <CategoryColumn key={cat} categoria={cat} produtos={porCategoria[cat]} />
              ))}
            </div>

            {/* Coluna 2 — Crédito */}
            <div className="border-r border-white/10 pr-6">
              <p className="text-label text-brand-green mb-3 uppercase tracking-widest">Crédito</p>
              <ul className="space-y-1.5 mb-4">
                {creditoGeral.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/solucoes/${p.slug}`}
                      className="text-[12px] text-[#AAAAAA] hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green leading-tight block"
                    >
                      {p.nome}
                    </Link>
                  </li>
                ))}
              </ul>
              {consignados.length > 0 && (
                <>
                  <p className="text-[10px] text-[#555555] uppercase tracking-widest mb-2 mt-3">
                    Crédito Consignado
                  </p>
                  <ul className="space-y-1.5">
                    {consignados.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/solucoes/${p.slug}`}
                          className="text-[12px] text-[#AAAAAA] hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green leading-tight block"
                        >
                          {p.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Coluna 3 — Seguros */}
            <div>
              <p className="text-label text-brand-green mb-3 uppercase tracking-widest">Seguros</p>
              {/* Grid 2 sub-colunas para acomodar os 17 produtos */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {porCategoria['Seguros'].map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/solucoes/${p.slug}`}
                      className="text-[12px] text-[#AAAAAA] hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green leading-tight block"
                    >
                      {p.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rodapé */}
            <div className="col-span-3 pt-4 border-t border-white/10">
              <Link
                href="/solucoes"
                onClick={() => setOpen(false)}
                className="text-[12px] text-brand-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green"
              >
                Ver todas as soluções →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileMenu({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  const porCategoria = getProdutosPorCategoria()

  if (!open) return null

  return (
    <div className="lg:hidden bg-brand-surface border-t border-white/10 max-h-[80vh] overflow-y-auto">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1" aria-label="Navegação mobile">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'py-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green rounded',
                isActive ? 'text-white' : 'text-[#AAAAAA] hover:text-white',
              ].join(' ')}
            >
              {link.label}
            </Link>
          )
        })}

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-label text-brand-green mb-3">Soluções</p>
          {CATEGORIA_ORDER.map((cat) => {
            const prods = porCategoria[cat]
            // Agrupa consignados dentro de Crédito
            const geral = prods.filter((p) => !p.subCategoria)
            const consignados = prods.filter((p) => p.subCategoria === 'Crédito Consignado')

            return (
              <div key={cat} className="mb-5">
                <p className="text-[11px] text-[#555555] uppercase tracking-widest mb-2">{cat}</p>
                {geral.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/solucoes/${p.slug}`}
                    onClick={onClose}
                    className="block text-[13px] text-[#AAAAAA] hover:text-white py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green rounded"
                  >
                    {p.nome}
                  </Link>
                ))}
                {consignados.length > 0 && (
                  <>
                    <p className="text-[10px] text-[#444] uppercase tracking-widest mt-3 mb-1.5">
                      Crédito Consignado
                    </p>
                    {consignados.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/solucoes/${p.slug}`}
                        onClick={onClose}
                        className="block text-[13px] text-[#AAAAAA] hover:text-white py-1.5 pl-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green rounded"
                      >
                        {p.nome}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            )
          })}
        </div>

        <a
          href={buildWhatsAppLinkGenerico()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com consultor Dabar via WhatsApp"
          className="mt-4 flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white text-sm font-medium py-3 rounded-btn transition-colors"
        >
          <MessageCircle size={16} />
          Falar com consultor
        </a>
      </nav>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-brand-dark sticky top-0 z-40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <DabarLogo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green',
                    isActive ? 'text-white' : 'text-[#AAAAAA] hover:text-white',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}
            <SolucoesDropdown />
          </nav>

          {/* Desktop CTA */}
          <a
            href={buildWhatsAppLinkGenerico()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com consultor Dabar via WhatsApp"
            className="hidden lg:flex items-center gap-1.5 bg-whatsapp hover:bg-whatsappHover text-white text-[11px] font-medium px-[14px] py-[8px] rounded-btn transition-colors duration-200"
          >
            <MessageCircle size={12} />
            Falar com consultor
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green rounded"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </header>
  )
}
