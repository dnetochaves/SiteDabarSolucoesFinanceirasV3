import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

// PRD §5.1: Hero com headline, subheadline e CTA WhatsApp genérico
// PRD §8.2: bg #1A1A1A · text #FFFFFF · destaque #8EDB00
// PRD §8.4: H1 → 40px · font-medium · lh 1.2

function WhatsAppIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Hero() {
  const href = buildWhatsAppLinkGenerico()

  return (
    <section className="bg-brand-dark py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Label de seção — PRD §8.4: 10px · uppercase · tracking 0.12em · #8EDB00 */}
          <p className="text-label text-brand-green mb-6">
            Dabar Soluções Financeiras
          </p>

          {/* H1 — PRD §8.4: 40px · font-medium · lh 1.2 · #FFFFFF */}
          <h1 className="text-[40px] font-medium text-white leading-[1.2] mb-6">
            Soluções financeiras para{' '}
            <span className="text-brand-green">cada momento</span>{' '}
            da sua vida
          </h1>

          {/* Subheadline — PRD §8.4: Body 16px · lh 1.6 · #888888 */}
          <p className="text-[16px] text-[#888888] leading-[1.6] mb-10 max-w-xl">
            Seguros, crédito, consórcio, financiamento e muito mais.
            Fale diretamente com um especialista Dabar e encontre a solução
            certa para você — sem formulários, sem espera.
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com consultor Dabar via WhatsApp"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white font-medium px-6 py-3.5 rounded-btn transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
          >
            <WhatsAppIcon />
            Falar com um consultor
          </a>
        </div>
      </div>
    </section>
  )
}
