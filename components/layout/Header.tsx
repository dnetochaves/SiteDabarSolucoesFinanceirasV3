'use client'

import Link from 'next/link'
import { useState } from 'react'
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
      className="flex items-center gap-1.5"
    >
      <span className="text-white text-xl font-semibold tracking-tight">
        dabar<span className="text-brand-green">.</span>
      </span>
    </Link>
  )
}

function SolucoesDropdown() {
  const [open, setOpen] = useState(false)
  const porCategoria = getProdutosPorCategoria()

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 text-[#AAAAAA] hover:text-white text-sm transition-colors duration-150 py-1"
      >
        Soluções
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div className="bg-brand-surface border border-white/10 rounded-card shadow-xl p-6 w-[560px] grid grid-cols-2 gap-6">
            {(Object.entries(porCategoria) as [string, ReturnType<typeof getProdutosPorCategoria>[keyof ReturnType<typeof getProdutosPorCategoria>]][]).map(([categoria, prods]) => (
              <div key={categoria}>
                <p className="text-label text-brand-green mb-3">{categoria}</p>
                <ul className="space-y-2">
                  {prods.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/solucoes/${p.slug}`}
                        className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-150"
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
                className="text-[12px] text-brand-green hover:underline"
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

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const porCategoria = getProdutosPorCategoria()

  if (!open) return null

  return (
    <div className="lg:hidden bg-brand-surface border-t border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[#AAAAAA] hover:text-white py-2 text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}

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
                  className="block text-[13px] text-[#AAAAAA] hover:text-white py-1 transition-colors"
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

  return (
    <header className="bg-brand-dark sticky top-0 z-40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <DabarLogo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#AAAAAA] hover:text-white text-sm transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
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
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
