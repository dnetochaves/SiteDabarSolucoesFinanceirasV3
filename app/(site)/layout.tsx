import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/whatsapp/WhatsAppFloat'
import CookieBanner from '@/components/layout/CookieBanner'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  )
}
