import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { organizationSchema } from '@/lib/jsonld'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'

export const metadata: Metadata = {
  title: {
    default: 'Dabar Soluções Financeiras',
    template: '%s | Dabar Soluções Financeiras',
  },
  description:
    'Soluções financeiras completas: seguros, crédito consignado, consórcio, financiamento imobiliário, câmbio e factoring. Fale com um especialista.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Dabar Soluções Financeiras',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dabar Soluções Financeiras' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dabar Soluções Financeiras',
    description:
      'Soluções financeiras completas: seguros, crédito consignado, consórcio, financiamento imobiliário, câmbio e factoring.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#main-content" className="skip-link">
          Pular para conteúdo principal
        </a>
        {children}
        {/* PRD §6.2 — JSON-LD Organization */}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </body>
    </html>
  )
}
