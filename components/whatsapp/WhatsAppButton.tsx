'use client'

import { buildWhatsAppLink } from '@/lib/whatsapp'

// PRD §8.6 — especificação visual e de uso do botão WhatsApp
// Uso: <WhatsAppButton produto="Seguro de Vida" label="Quero meu seguro de vida" />

export interface WhatsAppButtonProps {
  /** Nome do produto conforme data/produtos.ts — define a mensagem e o aria-label */
  produto: string
  /** Texto exibido no botão */
  label: string
  /**
   * default  → inline · text-[11px] · px-[14px] py-[8px] · rounded-[4px]
   * sticky   → fixed bottom-0 · w-full · h-14 (56px)
   */
  variant?: 'default' | 'sticky'
  className?: string
}

/** Ícone SVG oficial do WhatsApp (PRD §8.6: 12×12px à esquerda) */
function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/**
 * Botão WhatsApp reutilizável — PRD §8.6.
 *
 * A mensagem pré-preenchida é buscada automaticamente em data/produtos.ts
 * pelo nome do produto. Nunca montar a URL manualmente.
 */
export default function WhatsAppButton({
  produto,
  label,
  variant = 'default',
  className = '',
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(produto)

  if (variant === 'sticky') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com consultor sobre ${produto} via WhatsApp`}
        className={[
          // PRD §8.6 mobile sticky: w-full h-14 fixed bottom-0
          'fixed bottom-0 left-0 z-40 w-full h-14',
          'inline-flex items-center justify-center gap-2',
          'bg-whatsapp hover:bg-whatsappHover',
          'text-white text-sm font-medium',
          'transition-colors duration-200',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp',
          className,
        ].join(' ')}
      >
        <WhatsAppIcon size={16} />
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com consultor sobre ${produto} via WhatsApp`}
      className={[
        // PRD §8.6: bg #25D366 · hover #1DA851 · text #FFF · 11px · font-medium
        // padding 8px 14px · border-radius 4px · ícone 12×12px à esquerda
        'inline-flex items-center gap-1.5',
        'bg-whatsapp hover:bg-whatsappHover',
        'text-white text-[11px] font-medium',
        'px-[14px] py-[8px] rounded-btn',
        'transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp',
        className,
      ].join(' ')}
    >
      <WhatsAppIcon size={12} />
      {label}
    </a>
  )
}
