'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('dabar_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('dabar_cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('dabar_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-brand-surface border-t border-[#2E2E2E] px-4 py-4 md:py-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-[13px] text-[#AAAAAA] leading-relaxed flex-1">
          Usamos cookies essenciais para o funcionamento do site e cookies de analytics (anonimizados)
          para melhorar a experiência.{' '}
          <Link
            href="/transparencia#cookies"
            className="text-brand-green underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Saiba mais
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[12px] text-[#777777] hover:text-[#AAAAAA] transition-colors px-3 py-2"
          >
            Recusar opcionais
          </button>
          <button
            onClick={accept}
            className="text-[12px] font-medium bg-brand-green text-brand-dark px-4 py-2 rounded-btn hover:opacity-90 transition-opacity"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
