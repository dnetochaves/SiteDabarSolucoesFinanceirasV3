// PRD §5.1 — Home completa

import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SolucoesCarrossel from '@/components/sections/SolucoesCarrossel'
import ComoTrabalhamos from '@/components/sections/ComoTrabalhamos'
import Diferenciais from '@/components/sections/Diferenciais'
import Parceiros from '@/components/sections/Parceiros'
import Depoimentos from '@/components/sections/Depoimentos'
import DabarIndica from '@/components/sections/DabarIndica'
import SegurancaTransparencia from '@/components/sections/SegurancaTransparencia'
import CTAFinal from '@/components/sections/CTAFinal'

export const metadata: Metadata = {
  title: 'Dabar Soluções Financeiras',
  description:
    'Seguros, crédito consignado, consórcio, financiamento imobiliário, câmbio e factoring. Fale agora com um especialista Dabar via WhatsApp.',
}

export default function HomePage() {
  return (
    <>
      {/* PRD §5.1 — ordem das seções da Home */}
      <Hero />
      <SolucoesCarrossel />
      <ComoTrabalhamos />
      <Diferenciais />
      <Parceiros />
      <Depoimentos />
      <DabarIndica />
      <SegurancaTransparencia />
      <CTAFinal />
    </>
  )
}
