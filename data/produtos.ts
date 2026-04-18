export type Categoria =
  | 'Consórcio'
  | 'Crédito'
  | 'Câmbio'
  | 'Investimentos'
  | 'Precatórios'
  | 'Seguros'

/** Ordem canônica das categorias no menu e hub de soluções */
export const CATEGORIA_ORDER: Categoria[] = [
  'Consórcio',
  'Crédito',
  'Câmbio',
  'Investimentos',
  'Precatórios',
  'Seguros',
]

export interface Produto {
  /** Nome completo exibido no site */
  nome: string
  /** Slug de rota: /solucoes/[slug] */
  slug: string
  /** Categoria principal para agrupamento */
  categoria: Categoria
  /** Sub-categoria para agrupamento interno (ex: Crédito Consignado dentro de Crédito) */
  subCategoria?: string
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
  // ─── CONSÓRCIO ────────────────────────────────────────────────────────────
  {
    nome: 'Consórcio Imóvel',
    slug: 'consorcio-imobiliario',
    categoria: 'Consórcio',
    descricao: 'Realize o sonho da casa própria com planejamento e sem juros.',
    ctaLabel: 'Quero um consórcio de imóvel →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Consórcio de Imóveis. Gostaria de falar com um consultor especializado.',
    ordem: 1,
  },
  {
    nome: 'Consórcio de Veículo',
    slug: 'consorcio-automoveis',
    categoria: 'Consórcio',
    descricao: 'Conquiste seu veículo com planejamento inteligente e sem juros.',
    ctaLabel: 'Quero um consórcio de veículo →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Consórcio de Veículos. Gostaria de falar com um consultor especializado.',
    ordem: 2,
  },
  {
    nome: 'Consórcio de Serviços',
    slug: 'consorcio-servicos',
    categoria: 'Consórcio',
    descricao: 'Planeje viagens, educação, festas e outros serviços com parcelas acessíveis e sem juros.',
    ctaLabel: 'Planejar com consórcio de serviços →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Consórcio de Serviços. Gostaria de falar com um consultor especializado.',
    ordem: 3,
  },
  {
    nome: 'Alavancagem Financeira',
    slug: 'consorcio-alavancagem',
    categoria: 'Consórcio',
    descricao: 'Use o consórcio estrategicamente para multiplicar patrimônio sem pagar juros.',
    ctaLabel: 'Falar com especialista em consórcio →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Alavancagem Financeira via Consórcio. Gostaria de falar com um consultor especializado.',
    ordem: 4,
  },

  // ─── CRÉDITO ──────────────────────────────────────────────────────────────
  {
    nome: 'Home Equity',
    slug: 'home-equity',
    categoria: 'Crédito',
    descricao: 'Use seu imóvel quitado como garantia e acesse crédito com as menores taxas do mercado.',
    ctaLabel: 'Usar meu imóvel como garantia →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Home Equity. Gostaria de falar com um consultor especializado.',
    ordem: 5,
  },
  {
    nome: 'Car Equity',
    slug: 'car-equity',
    categoria: 'Crédito',
    descricao: 'Empréstimo usando seu veículo quitado como garantia, mantendo o uso normal do carro.',
    ctaLabel: 'Usar meu veículo como garantia →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Car Equity. Gostaria de falar com um consultor especializado.',
    ordem: 6,
  },
  {
    nome: 'Capital de Giro',
    slug: 'capital-de-giro',
    categoria: 'Crédito',
    descricao: 'Crédito ágil para empresas manterem a operação e aproveitarem oportunidades de crescimento.',
    ctaLabel: 'Quero crédito para meu negócio →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Capital de Giro. Gostaria de falar com um consultor especializado.',
    ordem: 7,
  },
  {
    nome: 'Financiamento Imobiliário',
    slug: 'financiamento-imobiliario',
    categoria: 'Crédito',
    descricao: 'As melhores condições do mercado para financiar seu imóvel residencial ou comercial.',
    ctaLabel: 'Quero financiar meu imóvel →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Financiamento Imobiliário. Gostaria de falar com um consultor especializado.',
    ordem: 8,
  },
  {
    nome: 'Financiamento de Veículos',
    slug: 'financiamento-veiculos',
    categoria: 'Crédito',
    descricao: 'Adquira veículo novo ou seminovo com parcelamento e aprovação rápida.',
    ctaLabel: 'Quero financiar meu veículo →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Financiamento de Veículos. Gostaria de falar com um consultor especializado.',
    ordem: 9,
  },
  {
    nome: 'DabarPay',
    slug: 'dabarpay',
    categoria: 'Crédito',
    descricao: 'Crédito rápido usando o limite do cartão — aprovação imediata, sem burocracia.',
    ctaLabel: 'Usar meu cartão como crédito →',
    mensagemWhatsApp:
      'Olá! Tenho interesse no DabarPay. Gostaria de falar com um consultor especializado.',
    ordem: 10,
  },
  {
    nome: 'Crédito via Mercado de Capitais',
    slug: 'credito-mercado-capitais',
    categoria: 'Crédito',
    descricao: 'Crédito estruturado para médias e grandes empresas com prazos longos e taxas competitivas.',
    ctaLabel: 'Falar com especialista em crédito →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito via Mercado de Capitais. Gostaria de falar com um consultor especializado.',
    ordem: 11,
  },
  {
    nome: 'Consignado CLT',
    slug: 'consignado-clt',
    categoria: 'Crédito',
    subCategoria: 'Crédito Consignado',
    descricao: 'Crédito com desconto em folha para trabalhadores CLT com taxas a partir de 1,79% ao mês.',
    ctaLabel: 'Quero meu consignado →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado CLT. Gostaria de falar com um consultor especializado.',
    ordem: 12,
  },
  {
    nome: 'Consignado INSS',
    slug: 'consignado-inss',
    categoria: 'Crédito',
    subCategoria: 'Crédito Consignado',
    descricao: 'Crédito para aposentados e pensionistas com desconto direto no benefício e taxas reguladas.',
    ctaLabel: 'Antecipar meu benefício INSS →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado INSS. Gostaria de falar com um consultor especializado.',
    ordem: 13,
  },
  {
    nome: 'Consignado Aeronáutica',
    slug: 'consignado-aeronautica',
    categoria: 'Crédito',
    subCategoria: 'Crédito Consignado',
    descricao: 'Crédito exclusivo para militares e servidores civis da Força Aérea Brasileira.',
    ctaLabel: 'Quero meu consignado FAB →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado para militares da Aeronáutica. Gostaria de falar com um consultor especializado.',
    ordem: 14,
  },
  {
    nome: 'Consignado Exército',
    slug: 'consignado-exercito',
    categoria: 'Crédito',
    subCategoria: 'Crédito Consignado',
    descricao: 'Crédito com condições privilegiadas para militares ativos e da reserva do Exército Brasileiro.',
    ctaLabel: 'Quero meu consignado Exército →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado para militares do Exército. Gostaria de falar com um consultor especializado.',
    ordem: 15,
  },
  {
    nome: 'Consignado Prefeituras',
    slug: 'consignado-prefeituras',
    categoria: 'Crédito',
    subCategoria: 'Crédito Consignado',
    descricao: 'Crédito consignado para servidores públicos municipais com convênio ativo.',
    ctaLabel: 'Quero meu consignado municipal →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Crédito Consignado Municipal. Gostaria de falar com um consultor especializado.',
    ordem: 16,
  },

  // ─── CÂMBIO ───────────────────────────────────────────────────────────────
  {
    nome: 'Câmbio Pessoa Física',
    slug: 'cambio-pessoa-fisica',
    categoria: 'Câmbio',
    descricao: 'Remessas ao exterior, recebimento internacional e câmbio para viagens com segurança e taxas competitivas.',
    ctaLabel: 'Falar com especialista em câmbio →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Câmbio para Pessoa Física. Gostaria de falar com um consultor especializado.',
    ordem: 17,
  },
  {
    nome: 'Câmbio Pessoa Jurídica',
    slug: 'cambio-pessoa-juridica',
    categoria: 'Câmbio',
    descricao: 'Câmbio empresarial para importação, exportação e pagamento de fornecedores internacionais.',
    ctaLabel: 'Câmbio para minha empresa →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Câmbio Empresarial. Gostaria de falar com um consultor especializado.',
    ordem: 18,
  },

  // ─── INVESTIMENTOS ────────────────────────────────────────────────────────
  {
    nome: 'Investimentos',
    slug: 'investimentos',
    categoria: 'Investimentos',
    descricao: 'Soluções de investimento nacionais com análise consultiva personalizada ao seu perfil e objetivos.',
    ctaLabel: 'Falar com consultor de investimentos →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Investimentos com orientação consultiva. Gostaria de falar com um consultor especializado.',
    ordem: 19,
  },
  {
    nome: 'Investimentos Internacionais',
    slug: 'investimentos-internacionais',
    categoria: 'Investimentos',
    descricao: 'Diversificação patrimonial com acesso a mercados globais, dolarização e proteção cambial.',
    ctaLabel: 'Diversificar meu patrimônio →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Investimentos Internacionais. Gostaria de falar com um especialista da Dabar.',
    ordem: 20,
  },

  // ─── PRECATÓRIOS ──────────────────────────────────────────────────────────
  {
    nome: 'Precatórios',
    slug: 'precatorio',
    categoria: 'Precatórios',
    descricao: 'Antecipe seu precatório judicial e receba seu dinheiro agora, sem esperar anos na fila.',
    ctaLabel: 'Antecipar meu precatório →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Antecipação de Precatório. Gostaria de falar com um consultor especializado.',
    ordem: 21,
  },

  // ─── SEGUROS ──────────────────────────────────────────────────────────────
  {
    nome: 'Vida Comum',
    slug: 'seguro-vida',
    categoria: 'Seguros',
    descricao: 'Proteção financeira essencial para sua família em caso de morte ou invalidez permanente.',
    ctaLabel: 'Quero meu seguro de vida →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Vida. Gostaria de falar com um consultor especializado.',
    ordem: 22,
  },
  {
    nome: 'Seguro de Vida Empresarial',
    slug: 'seguro-vida-empresarial',
    categoria: 'Seguros',
    descricao: 'Proteção coletiva para colaboradores — benefício corporativo que protege e fideliza equipes.',
    ctaLabel: 'Proteger minha equipe →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Vida Empresarial. Gostaria de falar com um consultor especializado.',
    ordem: 23,
  },
  {
    nome: 'Seguro de Vida Resgatável',
    slug: 'seguro-vida-resgatavel',
    categoria: 'Seguros',
    descricao: 'Combina proteção de vida com acumulação de reserva financeira que pode ser resgatada.',
    ctaLabel: 'Quero proteção com reserva →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Vida Resgatável. Gostaria de falar com um consultor especializado.',
    ordem: 24,
  },
  {
    nome: 'Seguro Automóvel',
    slug: 'seguro-automovel',
    categoria: 'Seguros',
    descricao: 'Cobertura completa para seu veículo contra roubo, colisão, danos a terceiros e assistência 24h.',
    ctaLabel: 'Cotar meu seguro auto →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Automóvel. Gostaria de falar com um consultor especializado.',
    ordem: 25,
  },
  {
    nome: 'Seguro de Moto',
    slug: 'seguro-moto',
    categoria: 'Seguros',
    descricao: 'Cobertura específica para motociclistas com proteção adaptada ao perfil de uso.',
    ctaLabel: 'Cotar seguro para minha moto →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Moto. Gostaria de falar com um consultor especializado.',
    ordem: 26,
  },
  {
    nome: 'Seguro Residencial',
    slug: 'seguro-residencial',
    categoria: 'Seguros',
    descricao: 'Proteção para imóvel e pertences contra incêndio, roubo e danos elétricos com assistência 24h.',
    ctaLabel: 'Cotar meu seguro residencial →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Residencial. Gostaria de falar com um consultor especializado.',
    ordem: 27,
  },
  {
    nome: 'Seguro Empresarial',
    slug: 'seguro-empresarial',
    categoria: 'Seguros',
    descricao: 'Proteção sob medida para patrimônio e continuidade do negócio em qualquer porte de empresa.',
    ctaLabel: 'Proteger minha empresa →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Empresarial. Gostaria de falar com um consultor especializado.',
    ordem: 28,
  },
  {
    nome: 'Saúde Empresarial / Odontológico',
    slug: 'saude-empresarial',
    categoria: 'Seguros',
    descricao: 'Plano de saúde e odontológico coletivo para empresas que desejam oferecer benefícios de qualidade.',
    ctaLabel: 'Contratar plano para minha empresa →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Plano de Saúde Empresarial. Gostaria de falar com um consultor especializado.',
    ordem: 29,
  },
  {
    nome: 'Seguro Viagem',
    slug: 'seguro-viagem',
    categoria: 'Seguros',
    descricao: 'Cobertura completa para imprevistos em viagens nacionais e internacionais com suporte 24h.',
    ctaLabel: 'Cotar seguro viagem →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Viagem. Gostaria de falar com um consultor especializado.',
    ordem: 30,
  },
  {
    nome: 'Seguro Pet',
    slug: 'seguro-pet',
    categoria: 'Seguros',
    descricao: 'Cobertura para despesas veterinárias, internações e cirurgias do seu animal de estimação.',
    ctaLabel: 'Cotar seguro para meu pet →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Pet. Gostaria de falar com um consultor especializado.',
    ordem: 31,
  },
  {
    nome: 'Seguro Agronegócio',
    slug: 'seguro-agronegocio',
    categoria: 'Seguros',
    descricao: 'Proteção para produtores rurais contra perdas por eventos climáticos, pragas e doenças.',
    ctaLabel: 'Proteger minha produção →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Agronegócio. Gostaria de falar com um consultor especializado.',
    ordem: 32,
  },
  {
    nome: 'Seguro Náutico',
    slug: 'seguro-nautico',
    categoria: 'Seguros',
    descricao: 'Proteção para embarcações contra danos físicos, colisões, naufrágio, roubo e responsabilidade civil.',
    ctaLabel: 'Cotar seguro para minha embarcação →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Náutico. Gostaria de falar com um consultor especializado.',
    ordem: 33,
  },
  {
    nome: 'Seguro de Equipamentos',
    slug: 'seguro-equipamentos',
    categoria: 'Seguros',
    descricao: 'Proteção para equipamentos eletrônicos, máquinas e ferramentas contra danos e roubo.',
    ctaLabel: 'Proteger meus equipamentos →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Equipamentos. Gostaria de falar com um consultor especializado.',
    ordem: 34,
  },
  {
    nome: 'Seguro Transportes',
    slug: 'seguro-transportes',
    categoria: 'Seguros',
    descricao: 'Cobertura para cargas transportadas por via rodoviária, aérea, marítima ou ferroviária.',
    ctaLabel: 'Proteger minhas cargas →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Transportes. Gostaria de falar com um consultor especializado.',
    ordem: 35,
  },
  {
    nome: 'Seguro Prestamista',
    slug: 'seguro-prestamista',
    categoria: 'Seguros',
    descricao: 'Quita automaticamente dívidas e financiamentos em caso de morte, invalidez ou desemprego.',
    ctaLabel: 'Proteger meu financiamento →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Prestamista. Gostaria de falar com um consultor especializado.',
    ordem: 36,
  },
  {
    nome: 'Seguro Garantia',
    slug: 'seguro-garantia',
    categoria: 'Seguros',
    descricao: 'Garante cumprimento de obrigações contratuais, substituindo caução e fiança em licitações.',
    ctaLabel: 'Falar sobre seguro garantia →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro Garantia. Gostaria de falar com um consultor especializado.',
    ordem: 37,
  },
  {
    nome: 'Responsabilidade Civil (RC)',
    slug: 'seguro-responsabilidade-civil',
    categoria: 'Seguros',
    descricao: 'Proteção contra danos causados involuntariamente a terceiros, cobrindo indenizações e processos.',
    ctaLabel: 'Proteger contra responsabilidade civil →',
    mensagemWhatsApp:
      'Olá! Tenho interesse em Seguro de Responsabilidade Civil. Gostaria de falar com um consultor especializado.',
    ordem: 38,
  },
]

/** Retorna produto pelo slug — undefined se não encontrado */
export function getProdutoBySlug(slug: string): Produto | undefined {
  return produtos.find((p) => p.slug === slug)
}

/** Retorna produtos agrupados por categoria, respeitando CATEGORIA_ORDER */
export function getProdutosPorCategoria(): Record<Categoria, Produto[]> {
  const result = {} as Record<Categoria, Produto[]>
  for (const cat of CATEGORIA_ORDER) {
    result[cat] = []
  }
  for (const produto of produtos) {
    result[produto.categoria].push(produto)
  }
  return result
}

/** Retorna slugs de todos os produtos (usado em generateStaticParams) */
export function getAllSlugs(): string[] {
  return produtos.map((p) => p.slug)
}
