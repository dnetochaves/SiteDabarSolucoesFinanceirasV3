export type Categoria =
  | 'Seguros'
  | 'Crédito'
  | 'Consórcio'
  | 'Financiamento'
  | 'Câmbio e Remessas'
  | 'Empresarial'

export interface Produto {
  /** Nome completo exibido no site */
  nome: string
  /** Slug de rota: /solucoes/[slug] */
  slug: string
  /** Categoria para agrupamento e filtros */
  categoria: Categoria
  /** Descrição curta para cards e listagens */
  descricao: string
  /** Texto do botão CTA principal */
  ctaLabel: string
  /** Texto da mensagem WhatsApp pré-preenchida (sem encode) */
  mensagemWhatsApp: string
  /** Ordem de exibição no carrossel da Home */
  ordem: number
}

export const produtos: Produto[] = [
  {
    nome: 'Seguro de Vida',
    slug: 'seguro-de-vida',
    categoria: 'Seguros',
    descricao: 'Proteção financeira para você e sua família nos momentos mais importantes.',
    ctaLabel: 'Quero meu seguro de vida →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Vida. Gostaria de falar com um consultor especializado.',
    ordem: 1,
  },
  {
    nome: 'Seguro Auto e Residencial',
    slug: 'seguro-auto-residencial',
    categoria: 'Seguros',
    descricao: 'Cobertura completa para seu veículo e residência com agilidade no atendimento.',
    ctaLabel: 'Cotar meu seguro →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Automóvel e Residencial. Gostaria de falar com um consultor.',
    ordem: 2,
  },
  {
    nome: 'Seguro Empresarial',
    slug: 'seguro-empresarial',
    categoria: 'Seguros',
    descricao: 'Proteção sob medida para o patrimônio e a continuidade do seu negócio.',
    ctaLabel: 'Proteger minha empresa →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Empresarial. Gostaria de falar com um consultor.',
    ordem: 3,
  },
  {
    nome: 'Seguro Viagem',
    slug: 'seguro-viagem',
    categoria: 'Seguros',
    descricao: 'Viaje tranquilo com cobertura para emergências médicas, cancelamentos e muito mais.',
    ctaLabel: 'Cotar seguro viagem →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Viagem. Gostaria de falar com um consultor.',
    ordem: 4,
  },
  {
    nome: 'Consignado CLT',
    slug: 'consignado-clt',
    categoria: 'Crédito',
    descricao: 'Crédito com desconto em folha para trabalhadores CLT com taxas reduzidas.',
    ctaLabel: 'Quero meu consignado →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado CLT. Gostaria de falar com um consultor.',
    ordem: 5,
  },
  {
    nome: 'FGTS Saque-Aniversário',
    slug: 'fgts-saque-aniversario',
    categoria: 'Crédito',
    descricao: 'Antecipe seu saldo do FGTS com praticidade e taxas atrativas.',
    ctaLabel: 'Antecipar meu FGTS →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado FGTS / Saque-Aniversário. Gostaria de falar com um consultor.',
    ordem: 6,
  },
  {
    nome: 'Precatório',
    slug: 'precatorio',
    categoria: 'Crédito',
    descricao: 'Antecipe seu precatório judicial e receba seu dinheiro sem esperar anos.',
    ctaLabel: 'Antecipar meu precatório →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Antecipação de Precatório. Gostaria de falar com um consultor.',
    ordem: 7,
  },
  {
    nome: 'Consórcio de Imóveis',
    slug: 'consorcio-imobiliario',
    categoria: 'Consórcio',
    descricao: 'Realize o sonho da casa própria com planejamento e sem juros.',
    ctaLabel: 'Quero um consórcio de imóvel →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Consórcio de Imóveis. Gostaria de falar com um consultor.',
    ordem: 8,
  },
  {
    nome: 'Consórcio de Veículos',
    slug: 'consorcio-automoveis',
    categoria: 'Consórcio',
    descricao: 'Conquiste seu veículo com planejamento inteligente e sem entrada obrigatória.',
    ctaLabel: 'Quero um consórcio de veículo →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Consórcio de Veículos. Gostaria de falar com um consultor.',
    ordem: 9,
  },
  {
    nome: 'Financiamento Imobiliário',
    slug: 'financiamento-imobiliario',
    categoria: 'Financiamento',
    descricao: 'As melhores condições do mercado para financiar seu imóvel residencial ou comercial.',
    ctaLabel: 'Quero financiar meu imóvel →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Financiamento Imobiliário. Gostaria de falar com um consultor.',
    ordem: 10,
  },
  {
    nome: 'Câmbio e Remessa Internacional',
    slug: 'cambio-remessa',
    categoria: 'Câmbio e Remessas',
    descricao: 'Envie e receba valores internacionais com câmbio competitivo e segurança.',
    ctaLabel: 'Falar com especialista em câmbio →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Envio/Recebimento de Remessa Internacional. Gostaria de falar com um consultor.',
    ordem: 11,
  },
  {
    nome: 'Factoring',
    slug: 'factoring',
    categoria: 'Empresarial',
    descricao: 'Antecipe recebíveis e mantenha o fluxo de caixa da sua empresa saudável.',
    ctaLabel: 'Antecipar meus recebíveis →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Factoring / Antecipação de Recebíveis. Gostaria de falar com um consultor.',
    ordem: 12,
  },
]

/** Retorna produto pelo slug — undefined se não encontrado */
export function getProdutoBySlug(slug: string): Produto | undefined {
  return produtos.find((p) => p.slug === slug)
}

/** Retorna produtos agrupados por categoria */
export function getProdutosPorCategoria(): Record<Categoria, Produto[]> {
  return produtos.reduce(
    (acc, produto) => {
      if (!acc[produto.categoria]) acc[produto.categoria] = []
      acc[produto.categoria].push(produto)
      return acc
    },
    {} as Record<Categoria, Produto[]>
  )
}

/** Retorna slugs de todos os produtos (usado em generateStaticParams) */
export function getAllSlugs(): string[] {
  return produtos.map((p) => p.slug)
}
