'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CertificacaoBancoBrasil() {
  return (
    <section className="bg-brand-dark py-20" aria-labelledby="certificacao-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="flex-1"
          >
            <p className="text-label text-brand-green mb-2">Credenciais oficiais</p>
            <h2
              id="certificacao-heading"
              className="text-[22px] font-medium text-white max-w-xl"
            >
              Dabar Certificada. Você em boas mãos.
            </h2>
            <p className="mt-2 text-[11px] font-medium text-brand-green tracking-wide uppercase">
              Certificação FBB100 | Febraban
            </p>
            <p className="mt-3 text-[14px] text-[#AAAAAA] leading-relaxed max-w-xl">
              A Dabar é certificada pelo principal órgão de certificação do mercado financeiro
              brasileiro, atendendo às exigências do Banco Central para intermediação de crédito.
              Registro disponível na CRCP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <Image
              src="/FBB100/230905_AF_FBB_Selos_Certificacao_Correspondente_Completa_RGB_DM_1.png"
              alt="Selo de Certificação Correspondente Completa FBB100 — Dabar Soluções Financeiras"
              width={180}
              height={180}
              className="object-contain w-40 h-40 md:w-44 md:h-44"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
