import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/whatsapp/WhatsAppFloat'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
