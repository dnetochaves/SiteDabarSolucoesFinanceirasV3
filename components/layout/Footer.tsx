import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react'

const SOLUCOES_LINKS = [
  { href: '/solucoes/seguro-de-vida', label: 'Seguro de Vida' },
  { href: '/solucoes/consignado-clt', label: 'Consignado CLT' },
  { href: '/solucoes/fgts-saque-aniversario', label: 'FGTS Saque-Aniversário' },
  { href: '/solucoes/consorcio-imobiliario', label: 'Consórcio de Imóveis' },
  { href: '/solucoes/financiamento-imobiliario', label: 'Financiamento Imobiliário' },
  { href: '/solucoes/factoring', label: 'Factoring' },
]

const INSTITUCIONAL_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Quem Somos' },
  { href: '/solucoes', label: 'Soluções' },
  { href: '/contato', label: 'Contato' },
  { href: '/dabar-indica', label: 'Dabar Indica+' },
  { href: '/transparencia', label: 'Privacidade e Termos' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 — Marca */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Dabar Soluções Financeiras" className="inline-block mb-4">
              <Image
                src="/images/LOGO5_traced.svg"
                alt="Dabar Soluções Financeiras"
                width={110}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[13px] text-[#AAAAAA] leading-relaxed max-w-[220px]">
              Soluções financeiras completas para pessoas e empresas.
            </p>
          </div>

          {/* Coluna 2 — Soluções */}
          <div>
            <p className="text-label text-brand-green mb-5">Soluções</p>
            <ul className="space-y-2.5">
              {SOLUCOES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solucoes"
                  className="text-[12px] text-brand-green hover:underline"
                >
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Institucional */}
          <div>
            <p className="text-label text-brand-green mb-5">Institucional</p>
            <ul className="space-y-2.5">
              {INSTITUCIONAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div>
            <p className="text-label text-brand-green mb-5">Contato</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5571983917864"
                  className="flex items-start gap-2.5 text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-150"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +55 (71) 98391-7864
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dabar.com.br"
                  className="flex items-start gap-2.5 text-[13px] text-[#AAAAAA] hover:text-white transition-colors duration-150"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  contato@dabar.com.br
                </a>
              </li>
              <li>
                <address className="not-italic flex items-start gap-2.5 text-[13px] text-[#AAAAAA]">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Salvador, Bahia — Brasil
                </address>
              </li>
            </ul>

            {/* Redes sociais */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/dabarsolucoes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dabar"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-[#AAAAAA] hover:text-white hover:border-white/30 transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com/company/dabar-solucoes-financeiras"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Dabar"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-[#AAAAAA] hover:text-white hover:border-white/30 transition-colors"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-[11px] text-[#555555]">
          <p>© {new Date().getFullYear()} Dabar Soluções Financeiras. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}
