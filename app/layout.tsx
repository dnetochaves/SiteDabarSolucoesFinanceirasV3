import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dabar Soluções Financeiras',
    template: '%s | Dabar Soluções Financeiras',
  },
  description:
    'Soluções financeiras completas: seguros, crédito consignado, consórcio, financiamento imobiliário, câmbio e factoring. Fale com um especialista.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br',
    siteName: 'Dabar Soluções Financeiras',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  )
}
