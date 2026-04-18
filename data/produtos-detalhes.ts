// Conteúdo detalhado de cada página de produto — PRD §5.3
// REGRA: nenhum dado de valor, parcela ou condição — especialmente Consórcio (PRD §3)

export interface FAQ {
  pergunta: string
  resposta: string
}

export interface Vantagem {
  titulo: string
  descricao: string
}

export interface ProdutoDetalhe {
  /** Headline orientada ao benefício — PRD §5.3 */
  headline: string
  /** Descrição completa com linguagem acessível */
  descricaoCompleta: string[]
  /** Perfis ideais — "Para quem é este produto?" */
  perfisIdeais: string[]
  /** Lista de vantagens e diferenciais */
  vantagens: Vantagem[]
  /** FAQ mínimo 4 perguntas — PRD §5.3 */
  faq: FAQ[]
  /** Slugs de produtos relacionados — máximo 3 — PRD §5.3 */
  relacionados: string[]
}

export const produtosDetalhes: Record<string, ProdutoDetalhe> = {

  // ─── CONSÓRCIO ────────────────────────────────────────────────────────────

  'consorcio-imobiliario': {
    headline: 'Realize o sonho da casa própria com planejamento e sem juros',
    descricaoCompleta: [
      'O consórcio de imóveis é uma forma inteligente de planejar a aquisição do seu imóvel sem pagar juros. Você integra um grupo de pessoas com o mesmo objetivo e, por meio de sorteios ou lances, é contemplado com uma carta de crédito.',
      'Com a Dabar, você recebe orientação especializada sobre as melhores administradoras e como aumentar suas chances de contemplação — sem dados de valores expostos, com foco total na estratégia.',
    ],
    perfisIdeais: [
      'Quem planeja comprar um imóvel sem pressa imediata',
      'Quem quer evitar os juros do financiamento tradicional',
      'Quem deseja usar o consórcio como forma de investimento e patrimônio',
      'Quem tem disciplina financeira para contribuições mensais regulares',
    ],
    vantagens: [
      { titulo: 'Sem juros', descricao: 'Você paga apenas a taxa de administração, sem encargos financeiros sobre o crédito.' },
      { titulo: 'Planejamento de longo prazo', descricao: 'Ideal para construir patrimônio de forma organizada e previsível.' },
      { titulo: 'Flexibilidade de uso', descricao: 'Use a carta de crédito para compra, construção ou reforma de imóvel.' },
      { titulo: 'Possibilidade de lance', descricao: 'Ofereça um lance para ser contemplado antes do sorteio.' },
      { titulo: 'Uso do FGTS', descricao: 'Possibilidade de utilizar o saldo do FGTS para dar lance ou complementar a carta.' },
    ],
    faq: [
      {
        pergunta: 'Como funciona o consórcio de imóveis?',
        resposta: 'Um grupo de pessoas contribui mensalmente. Mensalmente, participantes são contemplados por sorteio ou lance com uma carta de crédito no valor total do bem. Quem não foi contemplado continua pagando até o fim do grupo.',
      },
      {
        pergunta: 'Posso usar o FGTS no consórcio de imóveis?',
        resposta: 'Sim. O FGTS pode ser usado para dar lance, complementar a carta de crédito ou amortizar parcelas, desde que o imóvel e o consorciado atendam aos requisitos legais.',
      },
      {
        pergunta: 'Quais tipos de imóveis posso adquirir com o consórcio?',
        resposta: 'Com a carta de crédito é possível adquirir imóveis residenciais urbanos ou rurais, realizar construção em terreno próprio ou reforma. As condições variam conforme a administradora.',
      },
      {
        pergunta: 'O consórcio tem juros?',
        resposta: 'Não há juros no consórcio. Você paga a taxa de administração, o fundo de reserva e, em alguns casos, o seguro — encargos menores que os juros de um financiamento convencional.',
      },
    ],
    relacionados: ['financiamento-imobiliario', 'consorcio-automoveis', 'home-equity'],
  },

  'consorcio-automoveis': {
    headline: 'Conquiste seu veículo com planejamento inteligente e sem juros',
    descricaoCompleta: [
      'O consórcio de veículos é a alternativa mais econômica para quem deseja adquirir um carro, moto ou caminhão sem pagar os juros do financiamento tradicional.',
      'A Dabar orienta você sobre as melhores administradoras, estratégias de lance e como aproveitar ao máximo o seu consórcio — com total clareza e sem surpresas.',
    ],
    perfisIdeais: [
      'Quem deseja trocar de veículo sem urgência imediata',
      'Quem quer economizar em relação ao financiamento com juros',
      'Profissionais que precisam de um veículo para trabalho e querem planejamento',
      'Quem deseja adquirir frota de veículos para empresa',
    ],
    vantagens: [
      { titulo: 'Sem juros', descricao: 'Economize pagando apenas a taxa de administração, sem encargos sobre o crédito.' },
      { titulo: 'Carta de crédito flexível', descricao: 'Use a carta para comprar veículo novo, seminovo ou caminhão.' },
      { titulo: 'Prazos variados', descricao: 'Escolha o prazo mais adequado ao seu planejamento financeiro.' },
      { titulo: 'Possibilidade de lance', descricao: 'Antecipe sua contemplação oferecendo um lance no grupo.' },
      { titulo: 'Poder de compra à vista', descricao: 'Com a carta contemplada, você negocia o veículo como comprador à vista.' },
    ],
    faq: [
      {
        pergunta: 'Como funciona a carta de crédito do consórcio de veículos?',
        resposta: 'A carta de crédito comprova que você tem crédito disponível para adquirir o bem. Com ela em mãos, você negocia o veículo com o vendedor como se fosse pagamento à vista.',
      },
      {
        pergunta: 'Posso comprar um carro usado com o consórcio?',
        resposta: 'Sim. A carta de crédito pode ser usada para compra de veículos novos ou seminovos, desde que atendam aos critérios da administradora.',
      },
      {
        pergunta: 'O que acontece se eu não for contemplado até o fim do grupo?',
        resposta: 'Todo participante que cumpriu suas obrigações é contemplado até o encerramento do grupo. O prazo pode variar, mas a contemplação é garantida para quem mantiver os pagamentos em dia.',
      },
      {
        pergunta: 'Posso dar o carro atual como lance no consórcio?',
        resposta: 'Algumas administradoras aceitam o lance com bem — veículo usado como parte do lance. As condições variam; nosso consultor verifica as opções disponíveis para o seu perfil.',
      },
    ],
    relacionados: ['consorcio-imobiliario', 'financiamento-veiculos', 'consignado-clt'],
  },

  'consorcio-servicos': {
    headline: 'Realize seus objetivos pessoais com planejamento e sem juros',
    descricaoCompleta: [
      'O consórcio de serviços é a solução para quem deseja planejar objetivos como viagens, educação, festas, procedimentos de saúde e outros serviços com parcelas acessíveis e sem pagar juros.',
      'Com a Dabar, você conta com orientação para escolher o grupo, o prazo e a estratégia de lance mais adequada ao seu objetivo — com total transparência e sem burocracia.',
    ],
    perfisIdeais: [
      'Quem deseja planejar viagens nacionais ou internacionais',
      'Famílias que querem organizar festas ou eventos com antecedência',
      'Quem precisa de recursos para educação, cursos ou especializações',
      'Pessoas que planejam procedimentos de saúde eletivos',
    ],
    vantagens: [
      { titulo: 'Sem juros', descricao: 'Realize objetivos pessoais pagando apenas a taxa de administração.' },
      { titulo: 'Parcelas acessíveis', descricao: 'Planejamento distribuído em parcelas reduzidas e previsíveis.' },
      { titulo: 'Flexibilidade total', descricao: 'Use a carta de crédito para qualquer tipo de serviço contemplado.' },
      { titulo: 'Possibilidade de lance', descricao: 'Antecipe a contemplação para aproveitar seu objetivo no prazo certo.' },
    ],
    faq: [
      {
        pergunta: 'Quais serviços posso contratar com o consórcio de serviços?',
        resposta: 'Viagens, educação, festas e eventos, procedimentos estéticos ou de saúde, reformas e outros serviços. A carta de crédito é usada junto a fornecedores credenciados.',
      },
      {
        pergunta: 'O consórcio de serviços tem juros?',
        resposta: 'Não. Você paga apenas a taxa de administração e fundo de reserva, sem juros sobre o crédito — tornando-o mais econômico que o crédito pessoal ou cartão de crédito.',
      },
      {
        pergunta: 'Posso usar a carta para mais de um serviço?',
        resposta: 'Depende das regras da administradora e do valor da carta. Em alguns casos é possível dividir para diferentes serviços. Nosso consultor esclarece as possibilidades para o seu caso.',
      },
      {
        pergunta: 'Qual é o prazo máximo do consórcio de serviços?',
        resposta: 'O prazo varia conforme a administradora e o grupo. Nosso consultor apresenta as opções disponíveis para o prazo que melhor se encaixa no seu planejamento.',
      },
    ],
    relacionados: ['consorcio-imobiliario', 'consorcio-automoveis', 'investimentos'],
  },

  'consorcio-alavancagem': {
    headline: 'Use o consórcio como alavanca — multiplique patrimônio sem pagar juros',
    descricaoCompleta: [
      'A alavancagem financeira via consórcio é uma estratégia usada por investidores e planejadores patrimoniais para adquirir bens de maior valor com menor desembolso inicial e sem pagar juros.',
      'O cliente utiliza o crédito para dar lances estratégicos, antecipar contemplações e construir patrimônio de forma inteligente. A Dabar orienta cada etapa dessa estratégia com análise personalizada.',
    ],
    perfisIdeais: [
      'Investidores que buscam crescimento patrimonial com eficiência de custo',
      'Planejadores financeiros que desejam diversificar ativos sem juros',
      'Empreendedores que querem adquirir bens produtivos de forma estratégica',
      'Quem já conhece consórcio e quer usar lances para maximizar resultados',
    ],
    vantagens: [
      { titulo: 'Sem juros', descricao: 'Multiplicação de patrimônio sem o custo do crédito tradicional.' },
      { titulo: 'Lance estratégico', descricao: 'Contemplação antecipada por meio de estratégia de lance orientada.' },
      { titulo: 'Aquisição de maior valor', descricao: 'Acesse bens de alto valor com menor desembolso inicial.' },
      { titulo: 'Orientação especializada', descricao: 'Consultores Dabar planejam a estratégia de alavancagem com você.' },
    ],
    faq: [
      {
        pergunta: 'Como funciona a alavancagem financeira via consórcio?',
        resposta: 'O cliente entra em grupos de consórcio com estratégia de dar lances para ser contemplado rapidamente. Com a carta de crédito, adquire bens e repete o ciclo para crescimento patrimonial.',
      },
      {
        pergunta: 'Qual é o risco da estratégia de alavancagem?',
        resposta: 'O principal risco é não ser contemplado no prazo esperado. Por isso, a estratégia requer planejamento adequado e reserva de recursos para lances. Nosso consultor avalia o perfil antes de recomendar.',
      },
      {
        pergunta: 'Essa estratégia é para qualquer perfil de investidor?',
        resposta: 'Não. É mais indicada para quem tem disciplina financeira, recursos para lances e horizonte de médio a longo prazo. Nosso consultor avalia se faz sentido para o seu perfil.',
      },
      {
        pergunta: 'Posso usar a carta de crédito de alavancagem para qualquer bem?',
        resposta: 'Sim, conforme o tipo de consórcio (imóvel, veículo, serviços). A escolha do grupo depende do objetivo de investimento e do bem que deseja adquirir.',
      },
    ],
    relacionados: ['consorcio-imobiliario', 'investimentos', 'home-equity'],
  },

  // ─── CRÉDITO ──────────────────────────────────────────────────────────────

  'home-equity': {
    headline: 'Use seu imóvel como garantia e acesse crédito com as menores taxas do mercado',
    descricaoCompleta: [
      'O Home Equity permite que proprietários de imóveis quitados acessem crédito de alto valor com taxas significativamente menores do que o crédito pessoal convencional, usando o imóvel como garantia.',
      'A Dabar orienta todo o processo de avaliação, documentação e aprovação — com transparência total nas condições e análise comparativa entre as melhores instituições financeiras disponíveis.',
    ],
    perfisIdeais: [
      'Proprietários de imóveis quitados que precisam de crédito de alto valor',
      'Empreendedores que querem capital de giro com taxas reduzidas',
      'Quem deseja quitar dívidas com juros elevados',
      'Investidores que precisam de liquidez sem vender o imóvel',
    ],
    vantagens: [
      { titulo: 'Taxas reduzidas', descricao: 'As menores taxas do mercado por ter o imóvel como garantia real.' },
      { titulo: 'Prazo longo', descricao: 'Prazo estendido que reduz o valor das parcelas mensais.' },
      { titulo: 'Uso livre', descricao: 'Utilize o crédito para qualquer finalidade — sem restrições.' },
      { titulo: 'Imóvel permanece seu', descricao: 'Você continua morando ou usando o imóvel durante o período de crédito.' },
      { titulo: 'Alto valor de crédito', descricao: 'Acesse crédito proporcional ao valor do seu imóvel.' },
    ],
    faq: [
      {
        pergunta: 'O imóvel precisa estar quitado para fazer Home Equity?',
        resposta: 'Em geral, sim. O imóvel precisa estar sem ônus — ou com saldo devedor baixo em relação ao valor. Nosso consultor verifica a viabilidade para o seu caso específico.',
      },
      {
        pergunta: 'Posso perder o imóvel se não pagar?',
        resposta: 'O imóvel é alienado fiduciariamente como garantia. Em caso de inadimplência grave, a instituição pode executar a garantia. Por isso, o planejamento das parcelas é fundamental antes da contratação.',
      },
      {
        pergunta: 'Qual é o percentual máximo do valor do imóvel que posso obter?',
        resposta: 'Em geral, as instituições liberam entre 50% e 60% do valor de avaliação do imóvel. O valor exato depende da instituição escolhida e do perfil do solicitante.',
      },
      {
        pergunta: 'Como é feita a avaliação do imóvel?',
        resposta: 'A instituição financeira contrata um avaliador credenciado para laudo técnico do imóvel. O valor de crédito é calculado com base nesse laudo. Nosso consultor orienta todo esse processo.',
      },
    ],
    relacionados: ['car-equity', 'financiamento-imobiliario', 'capital-de-giro'],
  },

  'car-equity': {
    headline: 'Use seu veículo quitado como garantia e acesse crédito com taxas reduzidas',
    descricaoCompleta: [
      'O Car Equity permite que proprietários de veículos quitados obtenham crédito com taxas muito menores que o crédito pessoal convencional, mantendo o uso normal do carro durante todo o período.',
      'A Dabar conecta você às melhores condições disponíveis no mercado, com análise rápida, processo simplificado e total transparência nas condições.',
    ],
    perfisIdeais: [
      'Proprietários de veículos quitados que precisam de crédito com taxas reduzidas',
      'Quem precisa de liquidez rápida sem vender o veículo',
      'Profissionais autônomos que usam o carro para trabalho e precisam de capital',
      'Quem deseja quitar dívidas com juros elevados',
    ],
    vantagens: [
      { titulo: 'Taxas muito menores', descricao: 'Taxas significativamente inferiores ao crédito pessoal comum.' },
      { titulo: 'Continua usando o veículo', descricao: 'Você mantém o uso normal do carro durante todo o período.' },
      { titulo: 'Aprovação ágil', descricao: 'Processo mais rápido que outros créditos com garantia real.' },
      { titulo: 'Uso livre do crédito', descricao: 'Utilize o valor para qualquer finalidade sem restrições.' },
    ],
    faq: [
      {
        pergunta: 'Quais veículos são aceitos como garantia no Car Equity?',
        resposta: 'Em geral, veículos com até 10 anos de fabricação e quitados. A aceitação e o valor de crédito dependem da avaliação do veículo pela instituição parceira.',
      },
      {
        pergunta: 'O que acontece com meu veículo durante o período de crédito?',
        resposta: 'O veículo fica alienado fiduciariamente como garantia, mas você continua usando normalmente. A propriedade plena retorna após a quitação do crédito.',
      },
      {
        pergunta: 'Posso vender o veículo durante o período de crédito?',
        resposta: 'Não é possível vender o veículo enquanto ele estiver alienado. A transferência da propriedade exige quitação do crédito primeiro.',
      },
      {
        pergunta: 'Quanto posso obter em relação ao valor do veículo?',
        resposta: 'Em geral, as instituições liberam entre 50% e 70% do valor de avaliação do veículo. O percentual exato varia conforme a instituição e o perfil do solicitante.',
      },
    ],
    relacionados: ['home-equity', 'capital-de-giro', 'consignado-clt'],
  },

  'capital-de-giro': {
    headline: 'Crédito ágil para manter sua empresa em movimento',
    descricaoCompleta: [
      'O Capital de Giro é a solução para empresas que precisam de liquidez imediata para manter a operação, cobrir despesas do dia a dia, pagar fornecedores ou aproveitar oportunidades de crescimento sem comprometer o fluxo de caixa.',
      'A Dabar analisa o perfil do seu negócio e conecta sua empresa às melhores condições disponíveis no mercado — com foco em agilidade, transparência e adequação ao porte e momento da empresa.',
    ],
    perfisIdeais: [
      'Empresas que precisam de liquidez imediata para manter a operação',
      'Negócios com sazonalidade que precisam equilibrar o fluxo de caixa',
      'Empresas que querem aproveitar oportunidades de crescimento sem descapitalizar',
      'PMEs que precisam honrar compromissos com fornecedores',
    ],
    vantagens: [
      { titulo: 'Aprovação rápida', descricao: 'Processo ágil com resposta em prazo reduzido para não travar a operação.' },
      { titulo: 'Condições adequadas ao porte', descricao: 'Análise individualizada considerando o momento e o tamanho do negócio.' },
      { titulo: 'Múltiplas fontes', descricao: 'Acesso a diferentes instituições para encontrar a melhor condição.' },
      { titulo: 'Uso livre', descricao: 'Utilize o crédito para qualquer necessidade operacional da empresa.' },
    ],
    faq: [
      {
        pergunta: 'Qual é a diferença entre capital de giro e empréstimo pessoal?',
        resposta: 'Capital de giro é crédito direcionado para pessoa jurídica, com análise baseada no faturamento e saúde financeira da empresa. Tem condições específicas para CNPJ que diferem do crédito pessoal.',
      },
      {
        pergunta: 'Quais documentos são necessários para solicitar capital de giro?',
        resposta: 'Em geral: documentos da empresa (CNPJ, contrato social), documentos dos sócios, faturamento dos últimos meses e balanço ou DRE. A lista exata varia por instituição.',
      },
      {
        pergunta: 'MEI e microempresa podem acessar capital de giro?',
        resposta: 'Sim. Existem linhas específicas para pequenos negócios. A aprovação depende do faturamento, tempo de atividade e histórico da empresa. Nosso consultor verifica as opções disponíveis.',
      },
      {
        pergunta: 'Qual é o prazo típico para capital de giro?',
        resposta: 'Os prazos variam de acordo com a instituição e o perfil da empresa. Nosso consultor apresenta as opções que melhor se adequam ao seu fluxo de caixa.',
      },
    ],
    relacionados: ['home-equity', 'credito-mercado-capitais', 'dabarpay'],
  },

  'financiamento-imobiliario': {
    headline: 'As melhores condições do mercado para financiar o imóvel dos seus sonhos',
    descricaoCompleta: [
      'O financiamento imobiliário é a solução para quem deseja adquirir um imóvel agora, pagando ao longo do tempo. Acesso às principais linhas do mercado: SFH, SFI e programas habitacionais.',
      'A Dabar compara as condições de múltiplos bancos e instituições financeiras para encontrar a taxa, o prazo e as condições que melhor se encaixam no seu orçamento e projeto.',
    ],
    perfisIdeais: [
      'Quem deseja adquirir imóvel residencial ou comercial',
      'Famílias em busca do primeiro imóvel',
      'Investidores imobiliários',
      'Quem quer aproveitar condições de mercado sem esperar',
    ],
    vantagens: [
      { titulo: 'Comparação entre bancos', descricao: 'Avaliamos múltiplas instituições para encontrar a melhor taxa para você.' },
      { titulo: 'Uso do FGTS', descricao: 'Utilize o saldo do FGTS como entrada ou para amortizar o financiamento.' },
      { titulo: 'Prazos longos', descricao: 'Financiamentos com prazos que se encaixam no seu orçamento atual.' },
      { titulo: 'Imóvel novo ou usado', descricao: 'Financiamos imóveis residenciais ou comerciais, novos ou usados.' },
      { titulo: 'Acompanhamento completo', descricao: 'Suporte desde a análise até a assinatura do contrato.' },
    ],
    faq: [
      {
        pergunta: 'Qual é a documentação necessária para financiar um imóvel?',
        resposta: 'Em geral: RG, CPF, comprovante de renda, comprovante de residência, certidão de estado civil e documentos do imóvel. Nosso consultor orienta sobre a lista completa para cada banco.',
      },
      {
        pergunta: 'Posso financiar 100% do valor do imóvel?',
        resposta: 'A maioria dos bancos financia entre 70% e 90% do valor do imóvel. O restante deve ser pago como entrada. Em alguns programas habitacionais específicos pode haver condições diferenciadas.',
      },
      {
        pergunta: 'Qual é o prazo máximo de financiamento?',
        resposta: 'Os financiamentos imobiliários podem ter prazo de até 35 anos, dependendo da instituição e do programa. O prazo impacta diretamente no valor das parcelas mensais.',
      },
      {
        pergunta: 'Posso usar o FGTS como entrada no financiamento?',
        resposta: 'Sim, desde que você atenda aos requisitos: não ter outro financiamento ativo pelo SFH, não ser proprietário de imóvel na mesma cidade e ter pelo menos 3 anos de trabalho sob regime FGTS.',
      },
    ],
    relacionados: ['consorcio-imobiliario', 'home-equity', 'seguro-vida'],
  },

  'financiamento-veiculos': {
    headline: 'Financie seu veículo com agilidade e as melhores condições do mercado',
    descricaoCompleta: [
      'O Financiamento de Veículos da Dabar oferece acesso às melhores condições de crédito para aquisição de veículo novo ou seminovo, com análise comparativa entre instituições financeiras para garantir a melhor taxa.',
      'Aprovação ágil, processo simplificado e orientação completa desde a escolha da instituição até a entrega do veículo.',
    ],
    perfisIdeais: [
      'Quem quer adquirir veículo novo ou seminovo com parcelamento',
      'Profissionais que precisam de veículo para trabalho com urgência',
      'Quem quer preservar o capital e parcelar a aquisição',
      'Compradores que buscam aprovação rápida e processo sem burocracia',
    ],
    vantagens: [
      { titulo: 'Processo ágil', descricao: 'Aprovação rápida com análise comparativa para garantir a melhor taxa.' },
      { titulo: 'Veículo novo ou seminovo', descricao: 'Financiamento disponível para diferentes modelos e anos de fabricação.' },
      { titulo: 'Múltiplas instituições', descricao: 'Comparamos bancos e financeiras para encontrar a melhor condição.' },
      { titulo: 'Acompanhamento completo', descricao: 'Suporte desde a análise de crédito até a regularização do veículo.' },
    ],
    faq: [
      {
        pergunta: 'Posso financiar um veículo seminovo?',
        resposta: 'Sim. O financiamento de veículos cobre novos e seminovos, com condições que variam conforme o ano de fabricação e o valor do bem.',
      },
      {
        pergunta: 'Qual é o prazo máximo de financiamento de veículos?',
        resposta: 'Em geral, o prazo máximo é de 60 meses, podendo variar conforme a instituição financeira e o perfil do comprador.',
      },
      {
        pergunta: 'É necessário dar entrada no financiamento de veículos?',
        resposta: 'Não obrigatoriamente. Algumas instituições oferecem financiamento sem entrada para perfis aprovados. Nosso consultor apresenta as opções disponíveis para o seu caso.',
      },
      {
        pergunta: 'Posso financiar um veículo estando negativado?',
        resposta: 'Restrições no CPF dificultam a aprovação, mas existem opções com garantias adicionais. Nosso consultor avalia as alternativas disponíveis para o seu perfil.',
      },
    ],
    relacionados: ['consorcio-automoveis', 'car-equity', 'consignado-clt'],
  },

  'dabarpay': {
    headline: 'Crédito rápido usando o limite do seu cartão — sem burocracia, sem garantias',
    descricaoCompleta: [
      'O DabarPay é uma solução de crédito ágil que utiliza o limite disponível do seu cartão de crédito para liberar dinheiro na sua conta com aprovação imediata e sem necessidade de garantias ou comprovação de renda complexa.',
      'Ideal para quem precisa de liquidez rápida e tem limite de cartão disponível — sem burocracia e com total transparência nas condições.',
    ],
    perfisIdeais: [
      'Pessoas físicas com limite de cartão disponível que precisam de crédito rápido',
      'Quem precisa de dinheiro na conta sem recorrer a empréstimo bancário tradicional',
      'Pessoas que querem resolver uma necessidade pontual sem comprometer a renda',
    ],
    vantagens: [
      { titulo: 'Aprovação imediata', descricao: 'Crédito liberado de forma rápida, sem burocracia.' },
      { titulo: 'Sem garantias', descricao: 'Não é necessário apresentar imóvel, veículo ou outros bens como garantia.' },
      { titulo: 'Sem comprovação complexa', descricao: 'Processo simplificado sem exigência de documentação extensa.' },
      { titulo: 'Uso livre', descricao: 'Utilize o crédito para qualquer finalidade pessoal ou profissional.' },
    ],
    faq: [
      {
        pergunta: 'O DabarPay é um empréstimo ou um saque no cartão?',
        resposta: 'É uma operação de crédito que utiliza o limite do cartão como base para aprovação. O processo e as condições são diferentes do saque direto na função crédito do cartão.',
      },
      {
        pergunta: 'Qualquer cartão de crédito pode ser utilizado?',
        resposta: 'As bandeiras e instituições aceitas variam conforme as parcerias ativas. Nosso consultor verifica a compatibilidade com o seu cartão.',
      },
      {
        pergunta: 'O DabarPay afeta o limite do meu cartão?',
        resposta: 'A operação é vinculada ao limite disponível do cartão. Os detalhes do impacto no limite são esclarecidos pelo consultor antes da contratação.',
      },
      {
        pergunta: 'Qual é o prazo para receber o crédito na conta?',
        resposta: 'O prazo de liquidação é rápido após a aprovação. Nosso consultor informa o prazo exato conforme a instituição e o banco do cliente.',
      },
    ],
    relacionados: ['capital-de-giro', 'consignado-clt', 'car-equity'],
  },

  'credito-mercado-capitais': {
    headline: 'Crédito estruturado com prazos e volumes adequados para sua empresa crescer',
    descricaoCompleta: [
      'O Crédito via Mercado de Capitais é uma alternativa ao sistema bancário tradicional para médias e grandes empresas que precisam de crédito com prazos mais longos, taxas competitivas e volume adequado à escala do negócio.',
      'A Dabar estrutura a operação com assessoria especializada, conectando a empresa às melhores oportunidades fora do sistema bancário convencional.',
    ],
    perfisIdeais: [
      'Médias e grandes empresas que precisam de crédito estruturado',
      'Empresas que buscam alternativas ao sistema bancário tradicional',
      'Negócios com projetos de expansão que exigem volumes maiores de crédito',
      'Empresas com boa saúde financeira que querem condições superiores',
    ],
    vantagens: [
      { titulo: 'Prazos longos', descricao: 'Estruturas de crédito com prazos superiores ao crédito bancário convencional.' },
      { titulo: 'Taxas competitivas', descricao: 'Condições mais atrativas por acesso direto ao mercado de capitais.' },
      { titulo: 'Volumes adequados', descricao: 'Crédito em escala compatível com médias e grandes operações.' },
      { titulo: 'Assessoria especializada', descricao: 'Estruturação completa com suporte técnico em todas as etapas.' },
    ],
    faq: [
      {
        pergunta: 'Qual é o porte mínimo de empresa para acessar crédito via mercado de capitais?',
        resposta: 'Em geral, são empresas com faturamento anual relevante e demonstrações financeiras consistentes. Nosso consultor avalia a elegibilidade da sua empresa.',
      },
      {
        pergunta: 'Quais são os instrumentos disponíveis no mercado de capitais para crédito?',
        resposta: 'As opções incluem CCB, CRI, CRA, debêntures e outros instrumentos. A escolha depende do perfil da empresa, do uso dos recursos e do prazo desejado.',
      },
      {
        pergunta: 'Qual é o prazo médio para estruturar uma operação?',
        resposta: 'O prazo de estruturação varia conforme o instrumento e o porte da operação. Nosso consultor apresenta um cronograma detalhado após análise inicial.',
      },
      {
        pergunta: 'Essa modalidade é mais vantajosa que o crédito bancário tradicional?',
        resposta: 'Para médias e grandes empresas com boa saúde financeira, em geral sim — com taxas menores, prazos maiores e mais flexibilidade estrutural. Nosso consultor compara as alternativas.',
      },
    ],
    relacionados: ['capital-de-giro', 'home-equity', 'precatorio'],
  },

  'consignado-clt': {
    headline: 'Crédito com as menores taxas — direto na sua folha de pagamento',
    descricaoCompleta: [
      'O crédito consignado CLT é uma das modalidades de crédito pessoal mais acessíveis do mercado. As parcelas são descontadas automaticamente em folha, o que reduz o risco para o credor e garante taxas de juros significativamente menores.',
      'A Dabar acessa múltiplos bancos e financeiras para encontrar a melhor condição disponível para o seu perfil, sem burocracia e com aprovação rápida.',
    ],
    perfisIdeais: [
      'Trabalhadores com carteira assinada (CLT)',
      'Servidores públicos municipais, estaduais ou federais',
      'Quem busca quitar dívidas com taxas menores',
      'Quem precisa de crédito com parcelas fixas e previsíveis',
    ],
    vantagens: [
      { titulo: 'Taxas reduzidas', descricao: 'As menores taxas de juros do crédito pessoal, por conta do desconto automático em folha.' },
      { titulo: 'Sem consulta ao SPC/Serasa', descricao: 'A aprovação não depende de score de crédito ou histórico negativo.' },
      { titulo: 'Prazo estendido', descricao: 'Prazos de pagamento mais longos que outras modalidades de crédito.' },
      { titulo: 'Desconto automático', descricao: 'As parcelas são descontadas direto na folha — sem risco de esquecimento.' },
      { titulo: 'Aprovação rápida', descricao: 'Processo simplificado com resposta em prazo reduzido.' },
    ],
    faq: [
      {
        pergunta: 'Quem pode contratar o crédito consignado CLT?',
        resposta: 'Trabalhadores com carteira assinada cujo empregador tenha convênio com bancos e financeiras. Servidores públicos também têm acesso com condições diferenciadas.',
      },
      {
        pergunta: 'Qual é o limite de desconto em folha?',
        resposta: 'A legislação determina que o total de descontos consignados não pode ultrapassar 35% do salário líquido. Esse limite protege sua renda.',
      },
      {
        pergunta: 'O consignado CLT é diferente do consignado INSS?',
        resposta: 'Sim. O consignado CLT é para trabalhadores com vínculo empregatício ativo. O consignado INSS é para aposentados e pensionistas. Cada modalidade tem regras e taxas específicas.',
      },
      {
        pergunta: 'Posso quitar o consignado antecipadamente?',
        resposta: 'Sim. A quitação antecipada é um direito do consumidor e pode gerar desconto proporcional nos juros futuros.',
      },
    ],
    relacionados: ['consignado-inss', 'home-equity', 'seguro-vida'],
  },

  'consignado-inss': {
    headline: 'Crédito com desconto no benefício — condições exclusivas para aposentados e pensionistas',
    descricaoCompleta: [
      'O Consignado INSS oferece crédito a aposentados e pensionistas com desconto direto no benefício mensal, taxas reguladas pelo governo e aprovação simplificada — sem consulta restritiva ao CPF.',
      'A Dabar orienta sobre as melhores instituições parceiras e garante transparência total nas condições antes de qualquer contratação.',
    ],
    perfisIdeais: [
      'Aposentados do INSS que precisam de crédito pessoal',
      'Pensionistas do INSS que querem taxas reguladas',
      'Idosos que buscam crédito com processo simplificado',
      'Quem quer quitar dívidas com juros mais elevados usando o consignado',
    ],
    vantagens: [
      { titulo: 'Taxas reguladas pelo governo', descricao: 'Teto de juros definido pelo Banco Central para proteção do aposentado.' },
      { titulo: 'Aprovação simplificada', descricao: 'Processo menos burocrático, sem consulta restritiva ao CPF.' },
      { titulo: 'Desconto direto no benefício', descricao: 'Parcelas descontadas automaticamente — sem risco de atraso.' },
      { titulo: 'Prazo estendido', descricao: 'Prazos mais longos que outras modalidades de crédito pessoal.' },
    ],
    faq: [
      {
        pergunta: 'Qualquer aposentado pode contratar o consignado INSS?',
        resposta: 'Sim, desde que haja margem consignável disponível no benefício e o beneficiário não esteja com margem bloqueada por outras operações.',
      },
      {
        pergunta: 'Qual é o limite de desconto no benefício INSS?',
        resposta: 'O desconto máximo é de 35% do valor do benefício líquido, sendo 5% exclusivos para cartão consignado. Esse limite é regulado pelo governo.',
      },
      {
        pergunta: 'Como verificar a margem consignável disponível?',
        resposta: 'A margem pode ser consultada diretamente no portal Meu INSS ou com auxílio do nosso consultor, que faz a verificação de forma rápida.',
      },
      {
        pergunta: 'Posso contratar o consignado INSS com o nome negativado?',
        resposta: 'Sim. O consignado INSS não exige CPF sem restrições para aprovação, pois o desconto é garantido diretamente no benefício.',
      },
    ],
    relacionados: ['consignado-clt', 'consignado-prefeituras', 'seguro-prestamista'],
  },

  'consignado-aeronautica': {
    headline: 'Crédito exclusivo para militares e servidores da Força Aérea Brasileira',
    descricaoCompleta: [
      'O Consignado Aeronáutica é crédito com desconto direto em contracheque, exclusivo para militares ativos, inativos e servidores civis da Força Aérea Brasileira (FAB) — com taxas reduzidas e aprovação ágil.',
      'A Dabar conecta você às melhores instituições conveniadas com a FAB para garantir as melhores condições disponíveis para o seu perfil.',
    ],
    perfisIdeais: [
      'Militares ativos da Força Aérea Brasileira',
      'Militares inativos da FAB',
      'Servidores civis da Aeronáutica',
      'Quem busca crédito com desconto em contracheque e taxas reduzidas',
    ],
    vantagens: [
      { titulo: 'Taxas reduzidas', descricao: 'Condições especiais pelo vínculo institucional com a FAB.' },
      { titulo: 'Aprovação ágil', descricao: 'Processo simplificado para servidores da Força Aérea.' },
      { titulo: 'Desconto em contracheque', descricao: 'Parcelas descontadas automaticamente — sem risco de esquecimento.' },
      { titulo: 'Sem consulta restritiva', descricao: 'Aprovação com foco no vínculo institucional, não no score de crédito.' },
    ],
    faq: [
      {
        pergunta: 'Quem tem direito ao Consignado Aeronáutica?',
        resposta: 'Militares ativos, inativos e servidores civis da Força Aérea Brasileira com convênio ativo entre a FAB e as instituições financeiras parceiras.',
      },
      {
        pergunta: 'Qual é o limite de desconto em contracheque?',
        resposta: 'O limite segue a regulamentação do consignado público: até 35% da remuneração líquida, sendo 5% exclusivos para cartão consignado.',
      },
      {
        pergunta: 'Posso contratar mesmo estando em operação ou missão?',
        resposta: 'Nosso consultor orienta sobre o processo de contratação à distância. Em geral, é possível contratar com documentação e assinatura digital.',
      },
      {
        pergunta: 'As condições são as mesmas para militares ativos e inativos?',
        resposta: 'Podem variar. Militares inativos podem ter condições ligeiramente diferentes. Nosso consultor apresenta as opções específicas para cada situação.',
      },
    ],
    relacionados: ['consignado-exercito', 'consignado-prefeituras', 'consignado-clt'],
  },

  'consignado-exercito': {
    headline: 'Crédito com condições privilegiadas para militares do Exército Brasileiro',
    descricaoCompleta: [
      'O Consignado Exército oferece crédito exclusivo para militares ativos, da reserva e servidores civis do Exército Brasileiro, com condições privilegiadas pelo vínculo institucional e desconto direto em contracheque.',
      'A Dabar conecta você às melhores instituições conveniadas com o Exército para garantir as condições mais vantajosas disponíveis.',
    ],
    perfisIdeais: [
      'Militares ativos do Exército Brasileiro',
      'Militares da reserva do Exército',
      'Servidores civis do Exército Brasileiro',
      'Quem busca crédito com desconto em contracheque e taxas especiais',
    ],
    vantagens: [
      { titulo: 'Condições privilegiadas', descricao: 'Taxas especiais pela estabilidade do vínculo com o Exército.' },
      { titulo: 'Desconto em contracheque', descricao: 'Parcelas descontadas automaticamente com segurança.' },
      { titulo: 'Aprovação ágil', descricao: 'Processo simplificado para militares e servidores.' },
      { titulo: 'Sem restrição de crédito', descricao: 'Aprovação baseada no vínculo institucional, não no score.' },
    ],
    faq: [
      {
        pergunta: 'Quem tem direito ao Consignado Exército?',
        resposta: 'Militares ativos, da reserva e servidores civis do Exército Brasileiro com convênio ativo entre o Exército e as instituições financeiras parceiras.',
      },
      {
        pergunta: 'Qual é o limite de desconto em contracheque?',
        resposta: 'O limite segue a regulamentação do consignado público: até 35% da remuneração líquida, sendo 5% exclusivos para cartão consignado.',
      },
      {
        pergunta: 'Militares da reserva têm as mesmas condições que militares ativos?',
        resposta: 'As condições podem variar entre militares ativos e da reserva. Nosso consultor apresenta as opções específicas para cada situação.',
      },
      {
        pergunta: 'É possível contratar à distância?',
        resposta: 'Sim. Em geral, o processo pode ser realizado com documentação e assinatura digital. Nosso consultor orienta todo o fluxo.',
      },
    ],
    relacionados: ['consignado-aeronautica', 'consignado-prefeituras', 'consignado-clt'],
  },

  'consignado-prefeituras': {
    headline: 'Crédito consignado municipal — taxas reduzidas para servidores públicos',
    descricaoCompleta: [
      'O Consignado Prefeituras oferece crédito com desconto direto em folha para servidores públicos municipais com convênio ativo entre a prefeitura e as instituições financeiras parceiras da Dabar.',
      'A Dabar verifica os convênios ativos para o município do servidor e apresenta as melhores condições disponíveis — com total transparência e sem burocracia.',
    ],
    perfisIdeais: [
      'Servidores públicos municipais efetivos ou comissionados',
      'Funcionários de prefeituras com convênio ativo',
      'Servidores que buscam taxas menores que o crédito pessoal convencional',
    ],
    vantagens: [
      { titulo: 'Taxas reduzidas', descricao: 'Condições especiais pela estabilidade do serviço público.' },
      { titulo: 'Desconto em folha', descricao: 'Parcelas descontadas automaticamente no contracheque municipal.' },
      { titulo: 'Sem consulta restritiva', descricao: 'Aprovação baseada no vínculo com a prefeitura, não no score.' },
      { titulo: 'Prazo estendido', descricao: 'Prazos mais longos que o crédito pessoal convencional.' },
    ],
    faq: [
      {
        pergunta: 'Como saber se minha prefeitura tem convênio ativo?',
        resposta: 'Nosso consultor verifica rapidamente se a prefeitura do servidor tem convênio com as instituições parceiras da Dabar.',
      },
      {
        pergunta: 'Servidores comissionados podem contratar?',
        resposta: 'Depende da política da instituição financeira e da prefeitura. Em geral, servidores efetivos têm acesso mais amplo. Nosso consultor verifica o seu caso.',
      },
      {
        pergunta: 'Qual é o limite de desconto em folha municipal?',
        resposta: 'O limite segue a regulamentação do consignado público: até 35% da remuneração líquida, sendo 5% exclusivos para cartão consignado.',
      },
      {
        pergunta: 'O consignado municipal é diferente do consignado CLT?',
        resposta: 'Sim. O consignado CLT é para trabalhadores com contrato privado (CLT). O consignado municipal é específico para servidores públicos municipais, com regras e convênios distintos.',
      },
    ],
    relacionados: ['consignado-clt', 'consignado-inss', 'consignado-aeronautica'],
  },

  // ─── CÂMBIO ───────────────────────────────────────────────────────────────

  'cambio-pessoa-fisica': {
    headline: 'Remessas internacionais seguras com câmbio competitivo e orientação especializada',
    descricaoCompleta: [
      'A Dabar oferece câmbio para pessoa física em operações de remessa ao exterior, recebimento de valores internacionais, pagamento de serviços estrangeiros e câmbio para viagens — dentro das normas do Banco Central.',
      'Operações realizadas por instituições autorizadas pelo BACEN, com taxas competitivas e orientação completa em todo o fluxo cambial.',
    ],
    perfisIdeais: [
      'Brasileiros com familiares residentes no exterior',
      'Profissionais que recebem em moeda estrangeira',
      'Estudantes com bolsas ou cursos no exterior',
      'Viajantes que precisam de câmbio para destinos internacionais',
    ],
    vantagens: [
      { titulo: 'Taxas competitivas', descricao: 'Cotações diferenciadas em relação aos bancos tradicionais.' },
      { titulo: 'Segurança regulatória', descricao: 'Operações realizadas por instituições autorizadas pelo Banco Central.' },
      { titulo: 'Múltiplas moedas', descricao: 'Operamos as principais moedas globais.' },
      { titulo: 'Orientação completa', descricao: 'Consultor especializado acompanha cada operação do início ao fim.' },
      { titulo: 'Rapidez', descricao: 'Prazos reduzidos para liquidação das remessas internacionais.' },
    ],
    faq: [
      {
        pergunta: 'Como funciona o envio de remessa internacional?',
        resposta: 'Você informa o valor, a moeda e o destino. Apresentamos a taxa de câmbio e os encargos. Após aprovação, a operação é liquidada e o dinheiro é transferido para a conta indicada.',
      },
      {
        pergunta: 'Há limite de valor para remessas internacionais?',
        resposta: 'O Banco Central exige declaração para remessas acima de determinados valores. Nosso consultor orienta sobre os limites e obrigações regulatórias aplicáveis ao seu caso.',
      },
      {
        pergunta: 'Qual é o prazo para o dinheiro chegar ao destino?',
        resposta: 'Remessas para países com sistemas financeiros avançados costumam ser liquidadas em 1 a 2 dias úteis. Nosso consultor informa o prazo específico para cada destino.',
      },
      {
        pergunta: 'Quais moedas estão disponíveis?',
        resposta: 'Trabalhamos com as principais moedas globais: dólar americano, euro, libra esterlina, dólar canadense, franco suíço e outras. Consulte a disponibilidade para moedas específicas.',
      },
    ],
    relacionados: ['cambio-pessoa-juridica', 'investimentos-internacionais', 'seguro-viagem'],
  },

  'cambio-pessoa-juridica': {
    headline: 'Assessoria completa em câmbio empresarial para suas operações internacionais',
    descricaoCompleta: [
      'A Dabar oferece câmbio empresarial para importação, exportação, pagamento de fornecedores internacionais e recebimento de clientes estrangeiros — com assessoria especializada em todo o fluxo operacional e conformidade regulatória.',
      'Operações com taxas competitivas, realizadas por instituições autorizadas pelo Banco Central, com suporte completo do pré ao pós-operação.',
    ],
    perfisIdeais: [
      'Empresas importadoras e exportadoras',
      'Empresas com fornecedores ou clientes no exterior',
      'Negócios que precisam de câmbio recorrente com assessoria regulatória',
      'Empresas que buscam taxas mais competitivas que as dos bancos tradicionais',
    ],
    vantagens: [
      { titulo: 'Assessoria completa', descricao: 'Suporte em todo o fluxo cambial, do pré ao pós-operação.' },
      { titulo: 'Conformidade regulatória', descricao: 'Operações dentro das normas do BACEN e da legislação cambial.' },
      { titulo: 'Taxas competitivas', descricao: 'Condições superiores às praticadas pelos bancos tradicionais.' },
      { titulo: 'Agilidade operacional', descricao: 'Processos otimizados para não travar as operações da empresa.' },
    ],
    faq: [
      {
        pergunta: 'Quais operações de câmbio empresarial a Dabar assessora?',
        resposta: 'Importação, exportação, pagamento de fornecedores internacionais, recebimento de clientes estrangeiros, remessas de lucros e dividendos e outros fluxos cambiais corporativos.',
      },
      {
        pergunta: 'Como funciona a conformidade regulatória nas operações cambiais?',
        resposta: 'Todas as operações seguem as normas do Banco Central. Nosso consultor orienta sobre as declarações e documentações exigidas para cada tipo de operação.',
      },
      {
        pergunta: 'A Dabar atende empresas de qualquer porte?',
        resposta: 'Sim. Assessoramos desde pequenas empresas com operações internacionais pontuais até médias e grandes com fluxo cambial recorrente.',
      },
      {
        pergunta: 'Posso fechar contratos de câmbio futuros (hedge)?',
        resposta: 'Operações de hedge cambial são possíveis para proteção de contratos futuros. Nosso consultor avalia a necessidade e apresenta as estruturas disponíveis.',
      },
    ],
    relacionados: ['cambio-pessoa-fisica', 'credito-mercado-capitais', 'capital-de-giro'],
  },

  // ─── INVESTIMENTOS ────────────────────────────────────────────────────────

  'investimentos': {
    headline: 'Invista com orientação consultiva personalizada — sem indicações genéricas',
    descricaoCompleta: [
      'A Dabar oferece soluções de investimento nacionais com análise consultiva personalizada do perfil do cliente, considerando objetivos, prazo e tolerância ao risco para recomendar as alternativas mais adequadas.',
      'Em parceria com a Okus Investimentos, você tem acesso a uma carteira ampla de produtos de investimento com orientação especializada — sem os conflitos de interesse dos grandes bancos.',
    ],
    perfisIdeais: [
      'Quem deseja investir mas não sabe por onde começar',
      'Investidores que querem orientação personalizada ao invés de indicações genéricas',
      'Quem quer diversificar a carteira com análise profissional',
      'Pessoas que buscam rentabilidade acima da poupança com segurança',
    ],
    vantagens: [
      { titulo: 'Análise de perfil', descricao: 'Orientação baseada no seu perfil real, objetivos e horizonte de tempo.' },
      { titulo: 'Sem conflito de interesse', descricao: 'Recomendações independentes, sem pressão por produtos específicos.' },
      { titulo: 'Parceria Okus Investimentos', descricao: 'Acesso a carteira ampla de produtos com expertise especializada.' },
      { titulo: 'Acompanhamento contínuo', descricao: 'Revisão periódica da carteira conforme mudanças de mercado e objetivos.' },
    ],
    faq: [
      {
        pergunta: 'Qual é o valor mínimo para começar a investir com a Dabar?',
        resposta: 'Não há valor mínimo definido. Nosso consultor avalia o seu perfil e indica as melhores opções para o capital disponível, seja qual for o montante.',
      },
      {
        pergunta: 'Quais produtos de investimento estão disponíveis?',
        resposta: 'Renda fixa (CDB, LCI, LCA, Tesouro Direto), fundos de investimento, ações, FIIs e outros, conforme o perfil do investidor. Nosso consultor detalha as opções adequadas.',
      },
      {
        pergunta: 'Como funciona a análise de perfil do investidor?',
        resposta: 'Por meio de um questionário de suitability que avalia objetivos, prazo, tolerância a riscos e situação financeira. O resultado orienta as recomendações do consultor.',
      },
      {
        pergunta: 'Meu dinheiro fica protegido pelo FGC?',
        resposta: 'Produtos como CDB, LCI e LCA têm cobertura do Fundo Garantidor de Crédito dentro dos limites regulatórios. Nosso consultor detalha a cobertura para cada produto.',
      },
    ],
    relacionados: ['investimentos-internacionais', 'precatorio', 'consorcio-alavancagem'],
  },

  'investimentos-internacionais': {
    headline: 'Diversifique seu patrimônio com acesso aos mercados globais',
    descricaoCompleta: [
      'A Dabar, em parceria com a Okus Investimentos, oferece soluções de diversificação patrimonial com acesso a mercados internacionais, dolarização de carteira, proteção cambial e ativos globais.',
      'Ideal para investidores que querem reduzir a exposição ao risco Brasil e proteger o patrimônio com ativos em moeda forte e mercados desenvolvidos.',
    ],
    perfisIdeais: [
      'Investidores que desejam diversificar internacionalmente',
      'Quem quer proteger o patrimônio contra desvalorização do real',
      'Investidores com perfil moderado ou arrojado e horizonte de médio a longo prazo',
      'Quem busca acesso a oportunidades fora do mercado brasileiro',
    ],
    vantagens: [
      { titulo: 'Diversificação global', descricao: 'Acesso a mercados de ações, renda fixa e fundos internacionais.' },
      { titulo: 'Proteção cambial', descricao: 'Exposição em moeda forte como dólar e euro como hedge patrimonial.' },
      { titulo: 'Parceria Okus Investimentos', descricao: 'Expertise especializada em produtos e mercados internacionais.' },
      { titulo: 'Análise personalizada', descricao: 'Recomendações adequadas ao seu perfil e horizonte de investimento.' },
    ],
    faq: [
      {
        pergunta: 'Preciso ter muito dinheiro para investir internacionalmente?',
        resposta: 'Não necessariamente. Existem alternativas para diferentes tamanhos de patrimônio. Nosso consultor avalia a melhor entrada conforme o seu capital disponível.',
      },
      {
        pergunta: 'Como funciona a dolarização da carteira?',
        resposta: 'Parte do patrimônio é convertida e alocada em ativos denominados em dólar ou outras moedas fortes, protegendo contra desvalorização cambial do real.',
      },
      {
        pergunta: 'Quais são os riscos dos investimentos internacionais?',
        resposta: 'Além dos riscos de mercado comuns, há o risco cambial e riscos regulatórios específicos de cada país. Nosso consultor explica todos os riscos antes de qualquer decisão.',
      },
      {
        pergunta: 'Preciso declarar investimentos internacionais à Receita Federal?',
        resposta: 'Sim. Ativos no exterior devem ser declarados no IR conforme as regras da Receita Federal. Nosso consultor orienta sobre as obrigações de declaração.',
      },
    ],
    relacionados: ['investimentos', 'cambio-pessoa-fisica', 'cambio-pessoa-juridica'],
  },

  // ─── PRECATÓRIOS ──────────────────────────────────────────────────────────

  'precatorio': {
    headline: 'Antecipe seu precatório — receba o que é seu agora, sem esperar anos',
    descricaoCompleta: [
      'Precatórios são créditos judiciais reconhecidos contra a União, estados ou municípios. O problema é que o pagamento pode levar anos — às vezes décadas. A Dabar assessora credores na antecipação do recebimento e investidores na aquisição com deságio e rentabilidade acima do mercado.',
      'Nosso time conecta credores a compradores qualificados com condições transparentes e processo seguro do ponto de vista jurídico.',
    ],
    perfisIdeais: [
      'Titulares de precatórios federais, estaduais ou municipais',
      'Beneficiários de ações trabalhistas, previdenciárias ou de desapropriação',
      'Herdeiros de titulares de precatórios',
      'Investidores que buscam rentabilidade diferenciada na aquisição com deságio',
    ],
    vantagens: [
      { titulo: 'Liquidez imediata para o credor', descricao: 'Receba parte do seu precatório agora, sem esperar a fila do governo.' },
      { titulo: 'Rentabilidade para o investidor', descricao: 'Aquisição com deságio oferece retorno acima do mercado.' },
      { titulo: 'Processo seguro', descricao: 'Operação com segurança jurídica e acompanhamento especializado.' },
      { titulo: 'Transparência total', descricao: 'Condições claras apresentadas antes de qualquer assinatura.' },
    ],
    faq: [
      {
        pergunta: 'O que é um precatório?',
        resposta: 'É uma ordem de pagamento emitida pelo Judiciário determinando que um ente público pague uma dívida reconhecida por sentença judicial. O pagamento segue uma fila orçamentária que pode levar anos.',
      },
      {
        pergunta: 'Qual é o desconto aplicado na antecipação?',
        resposta: 'O desconto varia conforme o tipo de precatório, ente devedor, valor e prazo estimado de pagamento. Cada caso é avaliado individualmente com total transparência.',
      },
      {
        pergunta: 'Quais tipos de precatório são aceitos?',
        resposta: 'Em geral, são aceitos precatórios federais, estaduais e municipais de naturezas trabalhistas, previdenciárias, desapropriação e outros. A viabilidade depende da análise do documento.',
      },
      {
        pergunta: 'Quanto tempo demora o processo de antecipação?',
        resposta: 'Após análise da documentação e aprovação da proposta, nosso time agiliza ao máximo cada etapa e mantém você informado durante todo o processo.',
      },
    ],
    relacionados: ['investimentos', 'credito-mercado-capitais', 'consignado-clt'],
  },

  // ─── SEGUROS ──────────────────────────────────────────────────────────────

  'seguro-vida': {
    headline: 'Proteja o que mais importa — sua família merece segurança financeira',
    descricaoCompleta: [
      'O seguro de vida individual oferece indenização aos beneficiários em caso de morte ou invalidez permanente — proteção financeira essencial para qualquer pessoa que tenha dependentes ou responsabilidades.',
      'Com a Dabar, você conta com consultoria especializada para escolher a cobertura ideal para o seu perfil — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Chefes de família que são a principal fonte de renda',
      'Profissionais autônomos e empreendedores',
      'Quem possui financiamento imobiliário ou dívidas',
      'Pais e mães com filhos dependentes',
    ],
    vantagens: [
      { titulo: 'Cobertura por morte', descricao: 'Garante renda imediata para os beneficiários em caso de falecimento.' },
      { titulo: 'Invalidez permanente', descricao: 'Cobertura caso você perca permanentemente a capacidade de trabalhar.' },
      { titulo: 'Doenças graves', descricao: 'Suporte financeiro para tratamentos de condições como câncer, AVC e infarto.' },
      { titulo: 'Assistência funeral', descricao: 'Cobertura dos custos funerários para o segurado e familiares.' },
      { titulo: 'Flexibilidade de coberturas', descricao: 'Personalize as coberturas de acordo com o seu momento de vida.' },
    ],
    faq: [
      {
        pergunta: 'Qual é a diferença entre seguro de vida individual e em grupo?',
        resposta: 'O seguro individual é contratado diretamente por você com coberturas personalizadas. O seguro em grupo é oferecido por empregadores, com condições coletivas e menor personalização.',
      },
      {
        pergunta: 'Quem pode ser incluído como beneficiário?',
        resposta: 'Você pode indicar qualquer pessoa como beneficiária — cônjuge, filhos, pais ou terceiros. A escolha é sua e pode ser alterada durante a vigência.',
      },
      {
        pergunta: 'O seguro de vida cobre doenças preexistentes?',
        resposta: 'Depende da seguradora e do tipo de cobertura. Algumas coberturas podem ter carência ou exclusão para condições preexistentes. Nosso consultor esclarece todos os detalhes antes da contratação.',
      },
      {
        pergunta: 'Posso contratar seguro de vida sendo autônomo?',
        resposta: 'Sim. Profissionais autônomos têm acesso aos mesmos produtos que funcionários CLT. O seguro de vida é especialmente importante para quem não tem benefícios trabalhistas.',
      },
    ],
    relacionados: ['seguro-vida-resgatavel', 'seguro-vida-empresarial', 'seguro-prestamista'],
  },

  'seguro-vida-empresarial': {
    headline: 'Proteção coletiva para sua equipe — o benefício que protege e fideliza',
    descricaoCompleta: [
      'O Seguro de Vida Empresarial oferece proteção coletiva para os colaboradores da sua empresa, cobrindo morte, invalidez e doenças graves como benefício corporativo — um dos mais valorizados pelos funcionários.',
      'Com a Dabar, você conta com análise das melhores seguradoras do mercado para encontrar a cobertura ideal para o porte e setor da sua empresa — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Empresas de qualquer porte que desejam oferecer proteção de vida à equipe',
      'Negócios que buscam atrair e reter talentos com benefícios diferenciados',
      'Empresas que querem proteger famílias de colaboradores em caso de sinistro',
      'Organizações que complementam o pacote de benefícios',
    ],
    vantagens: [
      { titulo: 'Cobertura coletiva', descricao: 'Todos os colaboradores protegidos em uma única apólice.' },
      { titulo: 'Benefício valorizado', descricao: 'Um dos benefícios mais apreciados pelos funcionários e seus familiares.' },
      { titulo: 'Custo acessível', descricao: 'Condições coletivas reduzem o custo por colaborador.' },
      { titulo: 'Coberturas personalizáveis', descricao: 'Defina as coberturas e valores conforme o perfil da empresa.' },
    ],
    faq: [
      {
        pergunta: 'O seguro de vida empresarial é obrigatório?',
        resposta: 'Não é obrigatório por lei, mas é um benefício muito valorizado. Alguns acordos e convenções coletivas podem exigi-lo. Nosso consultor verifica as obrigações do seu setor.',
      },
      {
        pergunta: 'Todos os colaboradores precisam ser incluídos?',
        resposta: 'Depende da política da empresa e das regras da seguradora. Em geral, é possível incluir grupos específicos de colaboradores.',
      },
      {
        pergunta: 'O custo do seguro pode ser deduzido como despesa operacional?',
        resposta: 'Em geral, o seguro de vida em grupo é dedutível como benefício aos funcionários. Recomendamos confirmar com seu contador as regras fiscais aplicáveis.',
      },
      {
        pergunta: 'Como é feito o pagamento do sinistro?',
        resposta: 'Os beneficiários indicados pelo colaborador recebem a indenização diretamente. Nosso consultor orienta sobre o processo de comunicação e acionamento.',
      },
    ],
    relacionados: ['seguro-vida', 'saude-empresarial', 'seguro-empresarial'],
  },

  'seguro-vida-resgatavel': {
    headline: 'Proteção de vida com acumulação de reserva — segurança e investimento em um único produto',
    descricaoCompleta: [
      'O Seguro de Vida Resgatável combina a proteção essencial do seguro de vida com a acumulação de uma reserva financeira que pode ser resgatada ao longo do tempo — unindo proteção e planejamento financeiro em um único produto.',
      'Com a Dabar, você conta com análise personalizada para entender se o produto faz sentido para o seu perfil e objetivos de longo prazo — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Quem busca proteção de vida aliada a uma reserva financeira de longo prazo',
      'Pessoas que querem combinar segurança com acumulação patrimonial',
      'Planejadores financeiros que desejam produtos com dupla função',
      'Quem quer proteção que "não perde" o valor investido',
    ],
    vantagens: [
      { titulo: 'Proteção e reserva', descricao: 'Segurança para a família e acumulação de capital em um único produto.' },
      { titulo: 'Resgate possível', descricao: 'Parte do valor investido pode ser resgatada ao longo do tempo.' },
      { titulo: 'Planejamento de longo prazo', descricao: 'Ideal para quem pensa em proteção e construção patrimonial simultaneamente.' },
      { titulo: 'Benefícios fiscais', descricao: 'Produtos VGBL/PGBL podem ter benefícios fiscais dependendo do perfil.' },
    ],
    faq: [
      {
        pergunta: 'Qual é a diferença entre seguro de vida resgatável e VGBL/PGBL?',
        resposta: 'O seguro de vida resgatável tem foco em proteção com componente de acumulação. VGBL e PGBL são previdências com seguro vinculado. Nosso consultor esclarece as diferenças para o seu perfil.',
      },
      {
        pergunta: 'Quando posso resgatar a reserva acumulada?',
        resposta: 'O prazo e as condições de resgate variam por produto e seguradora. Em geral, há um período mínimo de carência antes do primeiro resgate.',
      },
      {
        pergunta: 'O produto é indicado para qualquer faixa etária?',
        resposta: 'O custo do seguro aumenta com a idade. O produto é mais vantajoso para pessoas mais jovens que têm horizonte longo de acumulação. Nosso consultor avalia o seu caso.',
      },
      {
        pergunta: 'O que acontece com a reserva em caso de falecimento?',
        resposta: 'A indenização de morte inclui tanto o capital segurado quanto o saldo acumulado, dependendo das condições do produto. Os beneficiários recebem o total.',
      },
    ],
    relacionados: ['seguro-vida', 'investimentos', 'seguro-vida-empresarial'],
  },

  'seguro-automovel': {
    headline: 'Cobertura completa para seu veículo com assistência 24 horas',
    descricaoCompleta: [
      'O Seguro Automóvel oferece proteção abrangente para seu veículo contra roubo, colisão, danos a terceiros e desastres naturais — com assistência 24h para qualquer imprevisto na estrada.',
      'A Dabar encontra a cobertura mais adequada ao seu perfil de uso e ao valor do veículo, com análise comparativa entre as melhores seguradoras — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Proprietários de veículos de qualquer categoria',
      'Quem usa o carro para trabalho e não pode ficar sem mobilidade',
      'Famílias que buscam proteção patrimonial para o veículo',
      'Quem mora em regiões com alto índice de furtos',
    ],
    vantagens: [
      { titulo: 'Cobertura total ou parcial', descricao: 'Escolha o nível de proteção ideal para o seu veículo e uso.' },
      { titulo: 'Assistência 24 horas', descricao: 'Guincho, chaveiro, eletricista e outros serviços a qualquer hora.' },
      { titulo: 'Carro reserva', descricao: 'Continue com mobilidade enquanto seu veículo está em reparo.' },
      { titulo: 'Responsabilidade civil', descricao: 'Cobertura para danos causados a terceiros por você ou por seu veículo.' },
    ],
    faq: [
      {
        pergunta: 'O que cobre o seguro automóvel?',
        resposta: 'Dependendo da modalidade, cobre colisão, roubo/furto, incêndio, fenômenos naturais, danos a terceiros e assistência 24h. As coberturas variam conforme o plano escolhido.',
      },
      {
        pergunta: 'Como funciona a franquia no seguro auto?',
        resposta: 'A franquia é o valor que você paga em caso de sinistro antes de a seguradora cobrir o restante. Franquias maiores reduzem o prêmio mensal.',
      },
      {
        pergunta: 'O que fazer em caso de acidente?',
        resposta: 'Mantenha a calma, registre um Boletim de Ocorrência, fotografe os danos e acione seu seguro. Nossa equipe orientará os próximos passos de forma rápida.',
      },
      {
        pergunta: 'O seguro cobre veículo usado?',
        resposta: 'Sim. O seguro automóvel pode ser contratado para veículos novos ou usados. O valor do prêmio é calculado com base nas características e valor de mercado do veículo.',
      },
    ],
    relacionados: ['seguro-moto', 'seguro-residencial', 'seguro-vida'],
  },

  'seguro-moto': {
    headline: 'Proteção específica para motociclistas — coberturas adaptadas ao seu perfil',
    descricaoCompleta: [
      'O Seguro de Moto oferece cobertura específica para motocicletas contra roubo, colisão, danos a terceiros e assistência em viagem — com coberturas adaptadas ao perfil do motociclista, seja pessoal, profissional ou entregador.',
      'A Dabar encontra o plano mais adequado ao seu uso da moto e ao seu orçamento, com análise comparativa entre as melhores seguradoras do mercado.',
    ],
    perfisIdeais: [
      'Motociclistas pessoais que usam a moto no dia a dia',
      'Entregadores e profissionais que dependem da moto para trabalhar',
      'Motoboys e trabalhadores de aplicativo',
      'Quem quer proteção específica para a realidade do motociclismo',
    ],
    vantagens: [
      { titulo: 'Coberturas específicas', descricao: 'Proteção adaptada à realidade do motociclismo, não do automóvel.' },
      { titulo: 'Assistência em viagem', descricao: 'Suporte em caso de pane ou acidente durante trajetos.' },
      { titulo: 'Proteção contra roubo', descricao: 'Cobertura para um dos riscos mais comuns para motociclistas.' },
      { titulo: 'Responsabilidade civil', descricao: 'Proteção contra danos causados a terceiros.' },
    ],
    faq: [
      {
        pergunta: 'O seguro de moto cobre uso profissional (entregas, aplicativos)?',
        resposta: 'Depende da seguradora e do plano. Alguns produtos excluem uso profissional da cobertura básica. É essencial informar o uso correto para garantir a proteção adequada.',
      },
      {
        pergunta: 'Posso fazer seguro de qualquer moto?',
        resposta: 'Em geral, a maioria das motocicletas pode ser segurada. Motos de alta cilindrada ou uso offroad podem ter condições específicas. Nosso consultor verifica a cobertura disponível.',
      },
      {
        pergunta: 'O seguro de moto cobre capacete e equipamentos?',
        resposta: 'Alguns planos incluem cobertura para equipamentos do motociclista. Nosso consultor verifica as opções disponíveis com essa cobertura adicional.',
      },
      {
        pergunta: 'O que fazer em caso de acidente com a moto?',
        resposta: 'Priorize sua segurança, registre um Boletim de Ocorrência, fotografe os danos e acione seu seguro imediatamente. Nossa equipe orienta os próximos passos.',
      },
    ],
    relacionados: ['seguro-automovel', 'seguro-vida', 'seguro-prestamista'],
  },

  'seguro-residencial': {
    headline: 'Seu lar protegido contra imprevistos com assistência 24 horas',
    descricaoCompleta: [
      'O Seguro Residencial protege imóvel e pertences contra incêndio, roubo, danos elétricos, alagamentos e outros imprevistos — com assistência emergencial 24h para qualquer situação.',
      'Disponível para proprietários e inquilinos. A Dabar encontra a cobertura ideal para o seu imóvel e orçamento — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Proprietários que desejam proteger o imóvel e o conteúdo',
      'Inquilinos que querem proteger seus pertences e responsabilidade civil',
      'Famílias em regiões com riscos de enchentes ou fenômenos climáticos',
      'Quem mora em áreas com histórico de furtos',
    ],
    vantagens: [
      { titulo: 'Proteção do imóvel', descricao: 'Cobertura para estrutura, instalações e benfeitorias contra danos.' },
      { titulo: 'Cobertura do conteúdo', descricao: 'Proteja eletrodomésticos, eletrônicos e móveis dentro do lar.' },
      { titulo: 'Assistência 24 horas', descricao: 'Chaveiro, encanador, eletricista e outros serviços emergenciais.' },
      { titulo: 'Responsabilidade civil', descricao: 'Proteção para danos causados a vizinhos ou terceiros.' },
    ],
    faq: [
      {
        pergunta: 'Inquilino pode fazer seguro residencial?',
        resposta: 'Sim. Inquilinos podem contratar seguro residencial para proteger o conteúdo do imóvel e responsabilidade civil por danos ao imóvel ou a terceiros.',
      },
      {
        pergunta: 'O seguro residencial cobre enchentes e alagamentos?',
        resposta: 'Fenômenos como alagamentos e vendavais podem ser cobertos como extensões da apólice. Nosso consultor verifica as coberturas disponíveis para a sua região.',
      },
      {
        pergunta: 'O que é coberto pela assistência 24 horas?',
        resposta: 'Em geral: chaveiro, eletricista, encanador e limpeza emergencial. Os serviços cobertos variam por plano. Nosso consultor detalha as coberturas disponíveis.',
      },
      {
        pergunta: 'Posso contratar seguro para imóvel alugado para terceiros?',
        resposta: 'Sim. Proprietários que alugam podem contratar seguro residencial para proteger o imóvel. Existem também coberturas específicas para perda de aluguel.',
      },
    ],
    relacionados: ['seguro-automovel', 'seguro-vida', 'seguro-empresarial'],
  },

  'seguro-empresarial': {
    headline: 'Seu negócio protegido para continuar crescendo',
    descricaoCompleta: [
      'Imprevistos podem paralisar uma empresa. Um incêndio, um furto, uma falha elétrica ou um processo judicial podem comprometer anos de trabalho. O seguro empresarial protege seu patrimônio e garante a continuidade das suas operações.',
      'A Dabar analisa o perfil da sua empresa — porte, setor, localização e riscos específicos — e indica as coberturas que realmente fazem sentido — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Micro e pequenas empresas de qualquer setor',
      'Comércios, escritórios e prestadores de serviços',
      'Empresas com estoque ou equipamentos de valor',
      'Negócios em locais com histórico de sinistros',
    ],
    vantagens: [
      { titulo: 'Cobertura do espaço físico', descricao: 'Proteção para o imóvel, instalações e benfeitorias do estabelecimento.' },
      { titulo: 'Proteção do estoque', descricao: 'Cobertura para mercadorias e insumos contra roubo, incêndio e danos.' },
      { titulo: 'Responsabilidade civil', descricao: 'Cobertura para danos causados a clientes, fornecedores ou terceiros.' },
      { titulo: 'Perda de lucros', descricao: 'Compensação pelo faturamento perdido durante a paralisação da empresa.' },
      { titulo: 'Cobertura de equipamentos', descricao: 'Proteção para máquinas, computadores e equipamentos essenciais.' },
    ],
    faq: [
      {
        pergunta: 'O que cobre o seguro empresarial?',
        resposta: 'As coberturas básicas incluem incêndio, raio e explosão. Coberturas adicionais podem incluir roubo, responsabilidade civil, danos elétricos, vendaval e perda de lucros.',
      },
      {
        pergunta: 'MEI pode contratar seguro empresarial?',
        resposta: 'Sim. Microempreendedores Individuais têm acesso a produtos de seguro empresarial adaptados ao seu porte.',
      },
      {
        pergunta: 'O seguro empresarial cobre funcionários?',
        resposta: 'O seguro empresarial em si não cobre benefícios de vida para funcionários. Para isso existe o seguro de vida em grupo — nosso consultor pode orientar sobre ambos.',
      },
      {
        pergunta: 'Como é calculado o valor do seguro empresarial?',
        resposta: 'Leva-se em conta o ramo de atividade, localização, valor patrimonial, faturamento e histórico de sinistros. Cada empresa tem uma análise individualizada.',
      },
    ],
    relacionados: ['seguro-vida-empresarial', 'seguro-equipamentos', 'seguro-responsabilidade-civil'],
  },

  'saude-empresarial': {
    headline: 'Plano de saúde para sua equipe — o benefício mais valorizado pelos colaboradores',
    descricaoCompleta: [
      'O Plano de Saúde Empresarial e Odontológico é um benefício coletivo para empresas que desejam oferecer cuidados de saúde à equipe — atraindo e retendo talentos com um dos benefícios mais valorizados no mercado de trabalho.',
      'A Dabar encontra as melhores condições do mercado para o porte e perfil da sua empresa — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Empresas de qualquer porte que desejam oferecer benefícios de saúde',
      'Negócios que querem atrair e reter talentos com benefícios diferenciados',
      'Empresas que buscam condições coletivas mais vantajosas que o plano individual',
    ],
    vantagens: [
      { titulo: 'Benefício mais valorizado', descricao: 'Plano de saúde é o benefício mais apreciado por colaboradores.' },
      { titulo: 'Condições coletivas', descricao: 'Preços e coberturas mais vantajosos que o plano individual.' },
      { titulo: 'Cobertura odontológica', descricao: 'Opção de incluir plano odontológico complementar.' },
      { titulo: 'Análise comparativa', descricao: 'Nosso consultor compara as melhores operadoras para o seu perfil.' },
    ],
    faq: [
      {
        pergunta: 'Qual é o número mínimo de funcionários para ter plano empresarial?',
        resposta: 'Em geral, a partir de 2 vidas é possível contratar um plano empresarial. As condições variam por operadora e porte do grupo.',
      },
      {
        pergunta: 'A empresa é obrigada a pagar o plano de saúde dos funcionários?',
        resposta: 'Não é obrigatório por lei para todos os setores, mas alguns acordos coletivos podem exigir. Nosso consultor verifica as obrigações do seu segmento.',
      },
      {
        pergunta: 'Posso incluir dependentes dos funcionários?',
        resposta: 'Sim. A maioria dos planos empresariais permite inclusão de cônjuge e filhos como dependentes, com custeio parcial ou total pela empresa conforme a política interna.',
      },
      {
        pergunta: 'O plano odontológico pode ser contratado separado do plano de saúde?',
        resposta: 'Sim. É possível contratar plano odontológico de forma independente ou complementar ao plano de saúde. Nosso consultor avalia a melhor combinação para a sua empresa.',
      },
    ],
    relacionados: ['seguro-vida-empresarial', 'seguro-empresarial', 'seguro-vida'],
  },

  'seguro-viagem': {
    headline: 'Viaje com tranquilidade — emergências não avisam',
    descricaoCompleta: [
      'Seja uma viagem a lazer ou a negócios, imprevistos podem acontecer a qualquer momento: emergência médica, perda de bagagem, cancelamento de voo ou hospitalização no exterior.',
      'O seguro viagem da Dabar oferece cobertura completa para que você aproveite cada destino sem preocupações, com suporte 24 horas em português — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Viajantes internacionais (obrigatório em países do Schengen)',
      'Viajantes frequentes a negócios',
      'Famílias com crianças ou idosos',
      'Viajantes para destinos com riscos específicos',
    ],
    vantagens: [
      { titulo: 'Assistência médica internacional', descricao: 'Cobertura para consultas, internações e emergências no exterior.' },
      { titulo: 'Suporte 24h em português', descricao: 'Central de atendimento disponível a qualquer hora, onde você estiver.' },
      { titulo: 'Cancelamento de viagem', descricao: 'Reembolso em caso de cancelamento por motivos cobertos na apólice.' },
      { titulo: 'Perda e extravio de bagagem', descricao: 'Indenização pelo extravio ou dano da sua bagagem.' },
      { titulo: 'Cobertura para esportes', descricao: 'Opções de cobertura para esportes de aventura e atividades de risco.' },
    ],
    faq: [
      {
        pergunta: 'O seguro viagem é obrigatório para viajar para a Europa?',
        resposta: 'Sim. Para países do Espaço Schengen, o seguro viagem com cobertura mínima de €30.000 para emergências médicas é obrigatório para obtenção do visto.',
      },
      {
        pergunta: 'O que fazer se precisar de atendimento médico no exterior?',
        resposta: 'Entre em contato com a central de assistência 24h do seu seguro. Eles indicarão a clínica ou hospital parceiro mais próximo e coordenarão o pagamento direto.',
      },
      {
        pergunta: 'O seguro viagem cobre cancelamento de voo?',
        resposta: 'O seguro cobre atraso ou cancelamento mediante comprovação da companhia aérea. O cancelamento voluntário exige cobertura específica adicional.',
      },
      {
        pergunta: 'Qual é o prazo mínimo para contratar antes da viagem?',
        resposta: 'Recomendamos contratar com pelo menos 24 horas antes do embarque. Algumas coberturas exigem contratação anterior à compra das passagens.',
      },
    ],
    relacionados: ['seguro-automovel', 'cambio-pessoa-fisica', 'seguro-vida'],
  },

  'seguro-pet': {
    headline: 'Cuidado garantido para seu pet sem comprometer o orçamento',
    descricaoCompleta: [
      'O Seguro Pet cobre despesas veterinárias, internações, cirurgias e tratamentos do seu animal de estimação — garantindo que seu pet receba o melhor cuidado sem que um imprevisto comprometa seu orçamento.',
      'A Dabar encontra a cobertura mais adequada ao porte e espécie do seu animal — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Tutores de cães e gatos de qualquer raça',
      'Famílias que tratam o pet como membro da família',
      'Quem não quer ser surpreendido com despesas veterinárias elevadas',
    ],
    vantagens: [
      { titulo: 'Cobertura veterinária', descricao: 'Consultas, internações, cirurgias e tratamentos cobertos.' },
      { titulo: 'Orçamento protegido', descricao: 'Sem surpresas financeiras em caso de emergência com o pet.' },
      { titulo: 'Tranquilidade para o tutor', descricao: 'Decisões de saúde do pet sem pressão financeira.' },
    ],
    faq: [
      {
        pergunta: 'Quais animais podem ser segurados?',
        resposta: 'Em geral, cães e gatos. Algumas seguradoras aceitam outras espécies. Nosso consultor verifica as opções disponíveis para o seu animal.',
      },
      {
        pergunta: 'O seguro pet cobre doenças preexistentes?',
        resposta: 'Em geral, doenças preexistentes ao início da apólice podem ter carência ou exclusão. Nosso consultor detalha as condições antes da contratação.',
      },
      {
        pergunta: 'Existe limite de idade para o animal ser segurado?',
        resposta: 'Muitas seguradoras têm limite de idade para contratação inicial. Nosso consultor verifica a disponibilidade para a idade do seu pet.',
      },
      {
        pergunta: 'O seguro pet cobre vacinação e exames preventivos?',
        resposta: 'Depende do plano. Alguns produtos incluem coberturas preventivas. Nosso consultor apresenta as opções com esse tipo de cobertura.',
      },
    ],
    relacionados: ['seguro-vida', 'seguro-residencial', 'saude-empresarial'],
  },

  'seguro-agronegocio': {
    headline: 'Proteja sua produção rural contra riscos climáticos e de mercado',
    descricaoCompleta: [
      'O Seguro Agronegócio oferece proteção para produtores rurais e empresas do setor agropecuário contra perdas causadas por eventos climáticos adversos, pragas, doenças e oscilações de mercado.',
      'A Dabar conecta produtores às melhores seguradoras e programas de subvenção disponíveis — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Produtores rurais de grãos, frutas e hortaliças',
      'Empresas do setor agropecuário',
      'Pecuaristas e criadores',
      'Quem acessa crédito rural e precisa de seguro como garantia',
    ],
    vantagens: [
      { titulo: 'Proteção climática', descricao: 'Cobertura contra seca, granizo, geada, chuva excessiva e outros eventos.' },
      { titulo: 'Subvenção governamental', descricao: 'Possibilidade de acesso a programas de subvenção do prêmio do seguro rural.' },
      { titulo: 'Segurança no crédito rural', descricao: 'Proteção exigida ou incentivada por financiadores do agronegócio.' },
      { titulo: 'Continuidade da operação', descricao: 'Recursos para replantio e recuperação após eventos adversos.' },
    ],
    faq: [
      {
        pergunta: 'Quais culturas podem ser seguradas?',
        resposta: 'Soja, milho, trigo, café, cana-de-açúcar, algodão, arroz e diversas outras. A disponibilidade de cobertura varia por região e safra.',
      },
      {
        pergunta: 'O que é o Programa de Subvenção ao Prêmio do Seguro Rural (PSR)?',
        resposta: 'É um programa do governo federal que subsidia parte do prêmio do seguro agrícola para produtores rurais. Nosso consultor verifica a elegibilidade e como acessar.',
      },
      {
        pergunta: 'O seguro cobre pecuária e criação de animais?',
        resposta: 'Existem produtos específicos para pecuária, avicultura e suinocultura. Nosso consultor apresenta as opções disponíveis para o seu tipo de produção.',
      },
      {
        pergunta: 'Qual é o prazo para acionar o seguro após um evento adverso?',
        resposta: 'Em geral, o produtor deve comunicar o sinistro dentro de um prazo definido na apólice após identificar o evento. Nosso consultor orienta sobre o procedimento correto.',
      },
    ],
    relacionados: ['seguro-empresarial', 'capital-de-giro', 'seguro-equipamentos'],
  },

  'seguro-nautico': {
    headline: 'Sua embarcação protegida em qualquer água',
    descricaoCompleta: [
      'O Seguro Náutico oferece proteção completa para embarcações de lazer e uso profissional contra danos físicos, colisões, naufrágio, roubo e responsabilidade civil a terceiros.',
      'A Dabar encontra a cobertura mais adequada ao tipo, porte e uso da sua embarcação — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Proprietários de lanchas, veleiros e jet-skis',
      'Proprietários de embarcações para pesca',
      'Empresas de turismo náutico',
      'Quem usa embarcação para lazer ou trabalho',
    ],
    vantagens: [
      { titulo: 'Cobertura de danos físicos', descricao: 'Proteção contra colisões, naufrágio e danos estruturais.' },
      { titulo: 'Cobertura de roubo', descricao: 'Proteção contra furto e roubo da embarcação e equipamentos.' },
      { titulo: 'Responsabilidade civil', descricao: 'Cobertura para danos causados a terceiros ou outras embarcações.' },
      { titulo: 'Assistência em viagem', descricao: 'Suporte em caso de pane ou acidente durante trajetos náuticos.' },
    ],
    faq: [
      {
        pergunta: 'Quais tipos de embarcação podem ser seguradas?',
        resposta: 'Lanchas, veleiros, jet-skis, barcos de pesca, catamarãs e outras embarcações. O produto e o prêmio variam conforme o tipo e porte da embarcação.',
      },
      {
        pergunta: 'O seguro náutico é obrigatório?',
        resposta: 'Não é obrigatório por lei para todas as embarcações, mas é fortemente recomendado. Marinas e clubes podem exigi-lo como condição de atracação.',
      },
      {
        pergunta: 'O seguro cobre danos causados durante competições náuticas?',
        resposta: 'Depende da apólice. Uso em competição pode ser excluído da cobertura básica. Nosso consultor verifica a disponibilidade de cobertura para esse uso.',
      },
      {
        pergunta: 'O que é coberto pela responsabilidade civil náutica?',
        resposta: 'Danos causados involuntariamente a terceiros, outras embarcações, infraestrutura de marinas e pessoas durante a operação da embarcação.',
      },
    ],
    relacionados: ['seguro-automovel', 'seguro-empresarial', 'seguro-responsabilidade-civil'],
  },

  'seguro-equipamentos': {
    headline: 'Continuidade operacional garantida — seus equipamentos sempre protegidos',
    descricaoCompleta: [
      'O Seguro de Equipamentos protege equipamentos eletrônicos, máquinas e ferramentas contra danos acidentais, roubo e queima elétrica — garantindo que a sua operação não seja interrompida por imprevistos.',
      'Ideal para empresas e profissionais que dependem de equipamentos para trabalhar — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Empresas com maquinário e equipamentos produtivos',
      'Profissionais liberais que dependem de equipamentos eletrônicos',
      'Fotógrafos, videomakers e criadores de conteúdo',
      'Construtoras e empresas com equipamentos em campo',
    ],
    vantagens: [
      { titulo: 'Danos acidentais cobertos', descricao: 'Proteção para quedas, impactos e danos durante o uso normal.' },
      { titulo: 'Queima elétrica', descricao: 'Cobertura para danos causados por variações de tensão e raio.' },
      { titulo: 'Roubo e furto', descricao: 'Proteção contra subtração dos equipamentos dentro ou fora do estabelecimento.' },
      { titulo: 'Continuidade operacional', descricao: 'Recursos para reposição e manutenção sem paralisar a operação.' },
    ],
    faq: [
      {
        pergunta: 'Quais equipamentos podem ser segurados?',
        resposta: 'Computadores, câmeras, equipamentos médicos, maquinário industrial, ferramentas profissionais e outros. A avaliação depende do tipo e valor dos equipamentos.',
      },
      {
        pergunta: 'O seguro cobre equipamentos em trânsito?',
        resposta: 'Alguns planos incluem cobertura para equipamentos transportados fora do estabelecimento. Nosso consultor verifica a disponibilidade dessa cobertura.',
      },
      {
        pergunta: 'Preciso de nota fiscal para segurar os equipamentos?',
        resposta: 'Em geral, é necessário comprovar a propriedade e o valor do bem. A documentação exata varia por seguradora e produto.',
      },
      {
        pergunta: 'O seguro cobre equipamentos alugados ou em leasing?',
        resposta: 'Depende da apólice e das condições contratuais. Em alguns casos, o responsável pelo equipamento pode contratá-lo. Nosso consultor verifica o caso específico.',
      },
    ],
    relacionados: ['seguro-empresarial', 'seguro-agronegocio', 'seguro-transportes'],
  },

  'seguro-transportes': {
    headline: 'Proteja suas cargas em todo o trajeto, independente da modal',
    descricaoCompleta: [
      'O Seguro de Transportes oferece cobertura para cargas transportadas por via rodoviária, aérea, marítima ou ferroviária contra avarias, roubo e perdas — garantindo que sua mercadoria chegue ao destino protegida.',
      'A Dabar encontra as melhores condições para a sua operação logística — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Empresas que movimentam mercadorias regularmente',
      'Transportadoras e operadores logísticos',
      'Importadores e exportadores',
      'Indústrias com cadeias de distribuição',
    ],
    vantagens: [
      { titulo: 'Cobertura multimodal', descricao: 'Proteção para cargas em qualquer modal de transporte.' },
      { titulo: 'Cobertura de roubo', descricao: 'Um dos riscos mais frequentes no transporte rodoviário, coberto.' },
      { titulo: 'Avarias e perdas', descricao: 'Proteção contra danos à carga durante o trajeto.' },
      { titulo: 'Conformidade contratual', descricao: 'Atende exigências de contratos comerciais que demandam seguro de carga.' },
    ],
    faq: [
      {
        pergunta: 'O seguro de transportes é obrigatório?',
        resposta: 'O RCTR-C (Responsabilidade Civil do Transportador) é obrigatório para transportadoras. O seguro de carga adicional é opcional, mas altamente recomendado para proteger o valor da mercadoria.',
      },
      {
        pergunta: 'Posso fazer uma apólice para múltiplos embarques?',
        resposta: 'Sim. Para empresas com volume regular de transporte, existe a apólice de viagem aberta (AVA), que cobre automaticamente todos os embarques dentro das condições definidas.',
      },
      {
        pergunta: 'O seguro cobre toda a rota ou apenas parte do trajeto?',
        resposta: 'Em geral, a cobertura é "porto a porto" ou "armazém a armazém", podendo incluir todo o trajeto. As condições são definidas na apólice.',
      },
      {
        pergunta: 'O que fazer em caso de sinistro durante o transporte?',
        resposta: 'Comunique imediatamente a seguradora, registre o ocorrido com fotos e Boletim de Ocorrência. Nosso consultor orienta todo o processo de acionamento.',
      },
    ],
    relacionados: ['seguro-equipamentos', 'seguro-empresarial', 'cambio-pessoa-juridica'],
  },

  'seguro-prestamista': {
    headline: 'Dívidas quitadas automaticamente — proteja sua família dos seus compromissos',
    descricaoCompleta: [
      'O Seguro Prestamista quita automaticamente dívidas e financiamentos em caso de morte, invalidez permanente ou desemprego involuntário do segurado — protegendo a família de herdar compromissos financeiros em momentos difíceis.',
      'A Dabar encontra o produto mais adequado ao tipo de dívida e ao seu perfil — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Quem possui financiamento imobiliário ou de veículo',
      'Tomadores de crédito consignado',
      'Quem tem dívidas e quer proteger a família em caso de imprevisto',
      'Quem contrata qualquer modalidade de crédito de médio ou longo prazo',
    ],
    vantagens: [
      { titulo: 'Quitação automática', descricao: 'A dívida é quitada sem que a família precise intervir.' },
      { titulo: 'Proteção em caso de desemprego', descricao: 'Cobertura para desemprego involuntário além de morte e invalidez.' },
      { titulo: 'Tranquilidade para o tomador', descricao: 'Saiba que sua família não ficará com suas dívidas.' },
      { titulo: 'Custo acessível', descricao: 'Prêmio geralmente proporcional ao saldo devedor.' },
    ],
    faq: [
      {
        pergunta: 'O seguro prestamista é obrigatório nos financiamentos?',
        resposta: 'Algumas instituições incluem o seguro prestamista automaticamente nos contratos de financiamento. O cliente tem o direito de contratar o seguro em outra empresa. Nosso consultor orienta sobre seus direitos.',
      },
      {
        pergunta: 'O que é coberto em caso de desemprego involuntário?',
        resposta: 'Em caso de demissão sem justa causa, o seguro pode pagar as parcelas do financiamento por um período definido na apólice, geralmente de 3 a 6 meses.',
      },
      {
        pergunta: 'O seguro prestamista cobre toda a dívida ou apenas as parcelas?',
        resposta: 'Depende do produto. Em caso de morte ou invalidez permanente, em geral quita o saldo total. Em caso de desemprego, cobre as parcelas por um período. Nosso consultor detalha as condições.',
      },
      {
        pergunta: 'O seguro prestamista pode ser contratado após o financiamento?',
        resposta: 'Em geral, é mais fácil contratar junto com o financiamento, mas existem produtos que podem ser contratados posteriormente. Nosso consultor verifica as opções disponíveis.',
      },
    ],
    relacionados: ['seguro-vida', 'consignado-clt', 'financiamento-imobiliario'],
  },

  'seguro-garantia': {
    headline: 'Substitua caução e fiança — mais agilidade e menor custo operacional',
    descricaoCompleta: [
      'O Seguro Garantia assegura o cumprimento de obrigações contratuais em licitações, contratos de obras e acordos comerciais — substituindo caução em dinheiro e fiança bancária com mais agilidade e menor custo.',
      'A Dabar assessora empresas na estruturação e contratação do seguro garantia adequado a cada tipo de contrato — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Empresas que participam de licitações públicas',
      'Construtoras e empreiteiras',
      'Empresas com contratos comerciais que exigem garantia',
      'Fornecedores de grande porte que precisam garantir obrigações',
    ],
    vantagens: [
      { titulo: 'Substitui caução em dinheiro', descricao: 'Libera capital que ficaria retido como garantia em dinheiro.' },
      { titulo: 'Mais ágil que fiança bancária', descricao: 'Processo de emissão mais rápido que o avalista bancário tradicional.' },
      { titulo: 'Menor custo operacional', descricao: 'Prêmio do seguro geralmente menor que o custo da caução tradicional.' },
      { titulo: 'Exigência legal atendida', descricao: 'Aceito em contratos públicos e privados como garantia reconhecida.' },
    ],
    faq: [
      {
        pergunta: 'Quais tipos de seguro garantia existem?',
        resposta: 'Garantia de licitação, garantia de execução de contrato, garantia de adiantamento de pagamento, garantia judicial e outros. Nosso consultor identifica o tipo adequado para cada situação.',
      },
      {
        pergunta: 'O seguro garantia é aceito em contratos públicos?',
        resposta: 'Sim. A Lei de Licitações prevê o seguro garantia como uma das modalidades aceitas para garantia de contratos públicos.',
      },
      {
        pergunta: 'Qual é o prazo de emissão de uma apólice de seguro garantia?',
        resposta: 'Após aprovação do risco pela seguradora, a apólice pode ser emitida em prazo reduzido. Nosso consultor orienta sobre o cronograma adequado para cada licitação ou contrato.',
      },
      {
        pergunta: 'O que acontece se a empresa garantida não cumprir o contrato?',
        resposta: 'A seguradora indeniza o beneficiário do contrato pelo descumprimento das obrigações cobertas, dentro dos limites da apólice.',
      },
    ],
    relacionados: ['seguro-empresarial', 'seguro-responsabilidade-civil', 'capital-de-giro'],
  },

  'seguro-responsabilidade-civil': {
    headline: 'Proteção contra danos a terceiros — evite processos judiciais onerosos',
    descricaoCompleta: [
      'O Seguro de Responsabilidade Civil (RC) protege profissionais liberais, empresas e prestadores de serviço contra indenizações decorrentes de danos causados involuntariamente a terceiros — cobrindo processos, custas judiciais e reparações.',
      'A Dabar analisa a atividade e os riscos específicos do cliente para recomendar a cobertura de RC mais adequada — via parceria com a Okus Corretora.',
    ],
    perfisIdeais: [
      'Profissionais liberais (médicos, advogados, engenheiros, contadores)',
      'Empresas prestadoras de serviço',
      'Construtoras e incorporadoras',
      'Qualquer negócio com risco de danos a clientes ou terceiros',
    ],
    vantagens: [
      { titulo: 'Cobertura de indenizações', descricao: 'Pagamento de indenizações por danos materiais, físicos ou morais a terceiros.' },
      { titulo: 'Custas judiciais cobertas', descricao: 'Cobertura dos custos com advogados e processos judiciais.' },
      { titulo: 'Proteção do patrimônio', descricao: 'Evita que o profissional ou empresa responda com bens pessoais.' },
      { titulo: 'Exigência contratual atendida', descricao: 'Muitos contratos exigem RC como condição de prestação de serviços.' },
    ],
    faq: [
      {
        pergunta: 'Quais são os tipos de Responsabilidade Civil disponíveis?',
        resposta: 'RC Geral, RC Profissional (E&O), RC de Produtos, RC de Empregadores, RC Ambiental e outros. O tipo adequado depende da atividade e dos riscos envolvidos.',
      },
      {
        pergunta: 'A RC cobre erros e omissões profissionais?',
        resposta: 'O produto específico para isso é a RC Profissional (Errors & Omissions). Cobre danos causados por erros, omissões ou negligência profissional.',
      },
      {
        pergunta: 'Profissionais liberais autônomos precisam de RC?',
        resposta: 'Sim, especialmente médicos, advogados, engenheiros e contadores. A RC protege contra processos por erros profissionais, que são mais comuns do que se imagina.',
      },
      {
        pergunta: 'O seguro RC cobre danos intencionais?',
        resposta: 'Não. O seguro RC cobre apenas danos causados involuntariamente. Atos dolosos (intencionais) são excluídos da cobertura.',
      },
    ],
    relacionados: ['seguro-empresarial', 'seguro-garantia', 'seguro-vida-empresarial'],
  },
}
