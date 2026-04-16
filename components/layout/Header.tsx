'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react'
import { getProdutosPorCategoria } from '@/data/produtos'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre nós' },
  { href: '/contato', label: 'Contato' },
  { href: '/dabar-indica', label: 'Dabar Indica+' },
]

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

function SolucoesDropdown() {
  const [open, setOpen] = useState(false)
  const porCategoria = getProdutosPorCategoria()
  const containerRef = useRef<HTMLDivElement>(null)

  // Fecha com Escape e ao clicar fora (blur no container)
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') setOpen(false)
  }

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    // Fecha somente se o foco saiu completamente do container
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
          <div className="bg-brand-surface border border-white/10 rounded-card shadow-xl p-6 w-[560px] grid grid-cols-2 gap-6">
            {(Object.entries(porCategoria) as [string, ReturnType<typeof getProdutosPorCategoria>[keyof ReturnType<typeof getProdutosPorCategoria>]][]).map(([categoria, prods]) => (
              <div key={categoria}>
                <p className="text-label text-brand-green mb-3">{categoria}</p>
                <ul className="space-y-2">
                  {prods.map((p) => (
                    <li key={p.slug} role="none">
                      <Link
                        href={`/solucoes/${p.slug}`}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green"
                      >
                        {p.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 pt-4 border-t border-white/10">
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
    <div className="lg:hidden bg-brand-surface border-t border-white/10">
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
          {(Object.entries(porCategoria) as [string, ReturnType<typeof getProdutosPorCategoria>[keyof ReturnType<typeof getProdutosPorCategoria>]][]).map(([categoria, prods]) => (
            <div key={categoria} className="mb-4">
              <p className="text-[11px] text-[#555555] uppercase tracking-widest mb-2">{categoria}</p>
              {prods.map((p) => (
                <Link
                  key={p.slug}
                  href={`/solucoes/${p.slug}`}
                  onClick={onClose}
                  className="block text-[13px] text-[#AAAAAA] hover:text-white py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-green rounded"
                >
                  {p.nome}
                </Link>
              ))}
            </div>
          ))}
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
          {/* touch target ≥ 44px + focus ring — WCAG AA */}
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
