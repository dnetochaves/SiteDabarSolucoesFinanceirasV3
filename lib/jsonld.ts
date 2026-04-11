// PRD §6.2 — JSON-LD helpers: Organization, FAQPage, BreadcrumbList
// Sempre importar estas funções nas páginas — nunca montar JSON-LD manualmente

import type { FAQ } from '@/data/produtos-detalhes'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'

/** Schema.org Organization — injetado no root layout */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dabar Soluções Financeiras',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-71-98275-4075',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salvador',
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
  }
}

/** Schema.org FAQPage — injetado nas páginas de produto */
export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.resposta,
      },
    })),
  }
}

/** Schema.org BreadcrumbList — injetado nas páginas internas */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
