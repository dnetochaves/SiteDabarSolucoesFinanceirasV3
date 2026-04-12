// Sprint 4 — 404 customizada com CTA WhatsApp
import Link from 'next/link'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

export default function NotFound() {
  const href = buildWhatsAppLinkGenerico()

  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white px-4"
    >
      <h1 className="text-6xl font-medium text-brand-green mb-4">404</h1>
      <p className="text-xl mb-8 text-center">
        Página não encontrada. Mas posso te conectar a um especialista Dabar.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-brand-green text-brand-dark font-medium rounded-btn text-center"
        >
          Voltar ao início
        </Link>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com consultor Dabar via WhatsApp"
          className="px-6 py-3 bg-whatsapp hover:bg-whatsappHover text-white font-medium rounded-btn text-center transition-colors"
        >
          Falar com consultor →
        </a>
      </div>
    </main>
  )
}
