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
  'seguro-de-vida': {
    headline: 'Proteja o que mais importa — sua família merece segurança',
    descricaoCompleta: [
      'O seguro de vida é uma das formas mais eficientes de garantir a estabilidade financeira da sua família caso algo inesperado aconteça com você. Mais do que um produto financeiro, é um planejamento de vida.',
      'Com a Dabar, você conta com consultoria especializada para escolher a cobertura ideal para o seu perfil — sem excessos, sem lacunas. Nossos consultores analisam sua situação e apresentam as melhores opções do mercado.',
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
        resposta: 'O seguro individual é contratado diretamente por você com coberturas personalizadas. O seguro em grupo é oferecido por empregadores ou associações, com condições coletivas. Em geral, o individual oferece maior personalização e portabilidade.',
      },
      {
        pergunta: 'Quem pode ser incluído como beneficiário?',
        resposta: 'Você pode indicar qualquer pessoa como beneficiária — cônjuge, filhos, pais ou terceiros. A escolha é sua e pode ser alterada durante a vigência do contrato.',
      },
      {
        pergunta: 'O seguro de vida cobre doenças preexistentes?',
        resposta: 'Depende da seguradora e do tipo de cobertura. Algumas coberturas podem ter carência ou exclusão para condições preexistentes. Nosso consultor esclarecerá todos os detalhes antes da contratação.',
      },
      {
        pergunta: 'Posso contratar seguro de vida mesmo sendo autônomo?',
        resposta: 'Sim. Profissionais autônomos e empreendedores têm acesso aos mesmos produtos que funcionários CLT. O seguro de vida é especialmente importante para quem não tem benefícios trabalhistas.',
      },
      {
        pergunta: 'Como acionar o seguro em caso de sinistro?',
        resposta: 'Os beneficiários devem contatar a seguradora e apresentar a documentação exigida (certidão de óbito, documentos pessoais etc.). Nosso consultor orienta todo o processo de acionamento.',
      },
    ],
    relacionados: ['seguro-empresarial', 'financiamento-imobiliario', 'consignado-clt'],
  },

  'seguro-auto-residencial': {
    headline: 'Proteção completa para seu veículo e seu lar — onde você for',
    descricaoCompleta: [
      'O seguro automóvel e residencial oferece tranquilidade para o que você conquistou. Acidentes, roubos, danos elétricos ou fenômenos naturais — estar protegido faz toda a diferença no momento em que você mais precisa.',
      'A Dabar encontra a cobertura mais adequada ao seu perfil de uso e ao valor dos seus bens, com agilidade no atendimento em caso de sinistro.',
    ],
    perfisIdeais: [
      'Proprietários de veículos de qualquer categoria',
      'Proprietários ou locatários de imóveis residenciais',
      'Famílias que buscam proteção patrimonial',
      'Quem mora em regiões com alto índice de furtos ou fenômenos climáticos',
    ],
    vantagens: [
      { titulo: 'Cobertura total ou parcial', descricao: 'Escolha o nível de proteção ideal para o seu veículo e residência.' },
      { titulo: 'Assistência 24 horas', descricao: 'Guincho, chaveiro, eletricista e outros serviços a qualquer hora.' },
      { titulo: 'Carro reserva', descricao: 'Continue com mobilidade enquanto seu veículo está em reparo.' },
      { titulo: 'Cobertura para conteúdo', descricao: 'Proteja eletrodomésticos, eletrônicos e móveis dentro da sua residência.' },
      { titulo: 'Responsabilidade civil', descricao: 'Cobertura para danos causados a terceiros por você ou por seu veículo.' },
    ],
    faq: [
      {
        pergunta: 'O que cobre o seguro automóvel?',
        resposta: 'Dependendo da modalidade, cobre colisão, roubo/furto, incêndio, fenômenos naturais, danos a terceiros (responsabilidade civil) e assistência 24h. As coberturas variam conforme o plano escolhido.',
      },
      {
        pergunta: 'O seguro residencial cobre apartamento alugado?',
        resposta: 'Sim. Inquilinos podem contratar seguro residencial para proteger o conteúdo do imóvel (móveis, eletrônicos, roupas) e responsabilidade civil por danos ao imóvel ou a terceiros.',
      },
      {
        pergunta: 'Como funciona a franquia no seguro auto?',
        resposta: 'A franquia é o valor que você paga em caso de sinistro antes de a seguradora cobrir o restante. Franquias maiores reduzem o prêmio mensal. Nosso consultor explica qual combinação faz mais sentido para você.',
      },
      {
        pergunta: 'O que fazer em caso de acidente com outro veículo?',
        resposta: 'Mantenha a calma, registre um Boletim de Ocorrência, fotografe os danos e acione seu seguro. Nossa equipe orientará os próximos passos de forma rápida e simples.',
      },
    ],
    relacionados: ['seguro-de-vida', 'seguro-viagem', 'seguro-empresarial'],
  },

  'seguro-empresarial': {
    headline: 'Seu negócio protegido para continuar crescendo',
    descricaoCompleta: [
      'Imprevistos podem paralisar uma empresa. Um incêndio, um furto, uma falha elétrica ou um processo judicial podem comprometer anos de trabalho. O seguro empresarial protege seu patrimônio e garante a continuidade das suas operações.',
      'A Dabar analisa o perfil da sua empresa — porte, setor, localização e riscos específicos — e indica as coberturas que realmente fazem sentido para o seu negócio.',
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
        resposta: 'As coberturas básicas incluem incêndio, raio e explosão. Coberturas adicionais podem incluir roubo, responsabilidade civil, danos elétricos, vendaval, perda de aluguel e perda de lucros. O plano é personalizado para seu negócio.',
      },
      {
        pergunta: 'MEI pode contratar seguro empresarial?',
        resposta: 'Sim. Microempreendedores Individuais têm acesso a produtos de seguro empresarial adaptados ao seu porte. Mesmo com estrutura simples, proteger seu negócio é fundamental.',
      },
      {
        pergunta: 'O seguro empresarial cobre funcionários?',
        resposta: 'O seguro empresarial em si não cobre benefícios de vida para funcionários. Para isso existe o seguro de vida em grupo. Nosso consultor pode orientar sobre os dois produtos de forma complementar.',
      },
      {
        pergunta: 'Como é calculado o valor do seguro empresarial?',
        resposta: 'Leva-se em conta o ramo de atividade, localização, valor patrimonial, faturamento e histórico de sinistros. Cada empresa tem uma análise individualizada para uma cotação justa.',
      },
    ],
    relacionados: ['seguro-de-vida', 'factoring', 'cambio-remessa'],
  },

  'seguro-viagem': {
    headline: 'Viaje com tranquilidade — emergências não avisam',
    descricaoCompleta: [
      'Seja uma viagem a lazer ou a negócios, imprevistos podem acontecer em qualquer momento: uma emergência médica, a perda de bagagem, o cancelamento de um voo ou uma hospitalização no exterior.',
      'O seguro viagem da Dabar oferece cobertura completa para que você aproveite cada destino sem preocupações, com suporte 24 horas em português.',
    ],
    perfisIdeais: [
      'Viajantes internacionais (obrigatório em países do Schengen)',
      'Viajantes frequentes a negócios',
      'Famílias com crianças ou idosos',
      'Viajantes para destinos com riscos específicos (aventura, clima extremo)',
    ],
    vantagens: [
      { titulo: 'Assistência médica internacional', descricao: 'Cobertura para consultas, internações e emergências médicas no exterior.' },
      { titulo: 'Suporte 24h em português', descricao: 'Central de atendimento disponível a qualquer hora, onde você estiver.' },
      { titulo: 'Cancelamento de viagem', descricao: 'Reembolso em caso de cancelamento por motivos cobertos na apólice.' },
      { titulo: 'Perda e extravio de bagagem', descricao: 'Indenização pelo extravio ou dano da sua bagagem.' },
      { titulo: 'Cobertura para esportes', descricao: 'Opções de cobertura para esportes de aventura e atividades de risco.' },
    ],
    faq: [
      {
        pergunta: 'O seguro viagem é obrigatório para viajar para a Europa?',
        resposta: 'Sim. Para países do Espaço Schengen, o seguro viagem com cobertura mínima de €30.000 para emergências médicas é obrigatório para obtenção do visto. Para outros destinos, é altamente recomendado.',
      },
      {
        pergunta: 'O que fazer se precisar de atendimento médico no exterior?',
        resposta: 'Entre em contato com a central de assistência 24h do seu seguro (o número estará na sua apólice). Eles indicarão a clínica ou hospital parceiro mais próximo e coordenarão o pagamento direto, sem custo antecipado para você.',
      },
      {
        pergunta: 'O seguro viagem cobre cancelamento de voo?',
        resposta: 'O seguro viagem cobre atraso ou cancelamento de voo mediante comprovação por parte da companhia aérea. Já o cancelamento voluntário de viagem exige cobertura específica adicional.',
      },
      {
        pergunta: 'Qual é o prazo mínimo para contratar antes da viagem?',
        resposta: 'Recomendamos contratar com pelo menos 24 horas antes da data de embarque. Algumas coberturas, como cancelamento de viagem, exigem contratação anterior à compra das passagens.',
      },
    ],
    relacionados: ['seguro-de-vida', 'seguro-auto-residencial', 'cambio-remessa'],
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
      'Aposentados e pensionistas do INSS',
      'Quem busca quitar dívidas com taxas menores',
    ],
    vantagens: [
      { titulo: 'Taxas reduzidas', descricao: 'As menores taxas de juros do crédito pessoal, por conta do desconto automático em folha.' },
      { titulo: 'Sem consulta ao SPC/Serasa', descricao: 'A aprovação não depende de score de crédito ou histórico negativo.' },
      { titulo: 'Prazo estendido', descricao: 'Prazos de pagamento mais longos do que outras modalidades de crédito.' },
      { titulo: 'Desconto automático', descricao: 'As parcelas são descontadas direto na folha — sem risco de esquecimento.' },
      { titulo: 'Aprovação rápida', descricao: 'Processo simplificado com resposta em prazo reduzido.' },
    ],
    faq: [
      {
        pergunta: 'Quem pode contratar o crédito consignado CLT?',
        resposta: 'Trabalhadores com carteira assinada cujo empregador tenha convênio com bancos e financeiras. Servidores públicos e beneficiários do INSS também têm acesso ao consignado com condições diferenciadas.',
      },
      {
        pergunta: 'Qual é o limite de desconto em folha?',
        resposta: 'A legislação determina que o total de descontos consignados não pode ultrapassar 35% do salário líquido (sendo 5% exclusivos para cartão consignado). Esse limite protege sua renda.',
      },
      {
        pergunta: 'O consignado CLT é diferente do consignado INSS?',
        resposta: 'Sim. O consignado CLT é para trabalhadores com vínculo empregatício ativo. O consignado INSS é para aposentados e pensionistas. Cada modalidade tem regras, prazos e taxas específicas.',
      },
      {
        pergunta: 'Posso quitar o consignado antecipadamente?',
        resposta: 'Sim. A quitação antecipada é um direito do consumidor e pode gerar desconto proporcional nos juros futuros. Nosso consultor orienta sobre o processo junto à instituição financeira.',
      },
    ],
    relacionados: ['fgts-saque-aniversario', 'precatorio', 'seguro-de-vida'],
  },

  'fgts-saque-aniversario': {
    headline: 'Antecipe seu FGTS e use o dinheiro agora, quando você precisa',
    descricaoCompleta: [
      'A modalidade Saque-Aniversário permite que você antecipe os valores futuros do seu FGTS de forma rápida e sem burocracia. O saldo permanece no FGTS como garantia, e você recebe o crédito imediatamente.',
      'A Dabar conecta você às melhores condições do mercado para a antecipação, com transparência total sobre o processo e os valores envolvidos.',
    ],
    perfisIdeais: [
      'Trabalhadores com saldo no FGTS e necessidade de crédito imediato',
      'Quem deseja quitar dívidas com juros elevados',
      'Quem planeja uma reforma ou compra importante',
      'Quem não quer comprometer a renda mensal com parcelas',
    ],
    vantagens: [
      { titulo: 'Crédito rápido', descricao: 'Acesso ao dinheiro em prazo reduzido após a adesão ao Saque-Aniversário.' },
      { titulo: 'Sem comprometer a renda', descricao: 'O desconto é feito diretamente no saldo do FGTS, não no salário.' },
      { titulo: 'Taxas competitivas', descricao: 'Condições diferenciadas por usar o FGTS como garantia.' },
      { titulo: 'Processo 100% digital', descricao: 'Adesão e contratação realizadas de forma simplificada.' },
      { titulo: 'Flexibilidade', descricao: 'Antecipe uma ou mais parcelas anuais conforme sua necessidade.' },
    ],
    faq: [
      {
        pergunta: 'O que é a modalidade Saque-Aniversário do FGTS?',
        resposta: 'É uma modalidade que permite ao trabalhador sacar anualmente uma parte do saldo do FGTS no mês do seu aniversário. Ao optar por ela, é possível também antecipar os valores futuros por meio de crédito junto a instituições financeiras.',
      },
      {
        pergunta: 'Ao optar pelo Saque-Aniversário, perco o saque total em caso de demissão?',
        resposta: 'Sim, essa é a principal contrapartida. Quem opta pelo Saque-Aniversário perde o direito ao saque integral do FGTS em caso de demissão sem justa causa, mantendo apenas a multa de 40%. Pense bem antes de aderir.',
      },
      {
        pergunta: 'Quantas parcelas posso antecipar?',
        resposta: 'Em geral, é possível antecipar até 10 parcelas anuais, dependendo da instituição financeira. O valor de cada parcela varia conforme o saldo acumulado no FGTS.',
      },
      {
        pergunta: 'Como funciona a antecipação via Dabar?',
        resposta: 'Nossa equipe avalia seu saldo disponível, apresenta as opções de antecipação com condições claras e encaminha para a instituição parceira mais vantajosa. Todo o processo é acompanhado por um consultor.',
      },
    ],
    relacionados: ['consignado-clt', 'precatorio', 'consorcio-imobiliario'],
  },

  'precatorio': {
    headline: 'Antecipe seu precatório e receba o que é seu agora',
    descricaoCompleta: [
      'Precatórios são dívidas reconhecidas judicialmente que o governo (federal, estadual ou municipal) tem com você. O problema é que o pagamento pode levar anos — às vezes décadas.',
      'A antecipação de precatório permite que você receba parte do valor hoje, cedendo o direito ao crédito para um terceiro. A Dabar conecta você a compradores qualificados com condições transparentes e seguras.',
    ],
    perfisIdeais: [
      'Titulares de precatórios federais, estaduais ou municipais',
      'Beneficiários de ações trabalhistas, previdenciárias ou de desapropriação',
      'Quem precisa de liquidez imediata e não pode esperar a fila do governo',
      'Herdeiros de titulares de precatórios',
    ],
    vantagens: [
      { titulo: 'Liquidez imediata', descricao: 'Receba parte do seu precatório agora, sem esperar a fila do governo.' },
      { titulo: 'Processo seguro', descricao: 'Operação realizada com segurança jurídica e acompanhamento especializado.' },
      { titulo: 'Sem burocracia desnecessária', descricao: 'Nossa equipe cuida de toda a documentação e trâmites.' },
      { titulo: 'Transparência total', descricao: 'Você recebe um relatório claro com as condições antes de assinar qualquer documento.' },
    ],
    faq: [
      {
        pergunta: 'O que é um precatório?',
        resposta: 'É uma ordem de pagamento emitida pelo Judiciário determinando que um ente público (União, Estado ou Município) pague uma dívida reconhecida por sentença judicial. O pagamento segue uma fila orçamentária que pode levar anos.',
      },
      {
        pergunta: 'Qual é o desconto aplicado na antecipação?',
        resposta: 'O desconto varia de acordo com o tipo de precatório, ente devedor, valor e prazo estimado de pagamento. Cada caso é avaliado individualmente. Nosso consultor apresenta a proposta com total transparência antes de qualquer decisão.',
      },
      {
        pergunta: 'Quais tipos de precatório são aceitos?',
        resposta: 'Em geral, são aceitos precatórios federais, estaduais e municipais de diferentes naturezas: trabalhistas, previdenciários, desapropriação e outros. A viabilidade depende da análise do documento e do ente devedor.',
      },
      {
        pergunta: 'Quanto tempo demora o processo de antecipação?',
        resposta: 'Após a análise da documentação e aprovação da proposta, o prazo para recebimento varia. Nossa equipe agiliza ao máximo cada etapa e mantém você informado durante todo o processo.',
      },
    ],
    relacionados: ['consignado-clt', 'fgts-saque-aniversario', 'factoring'],
  },

  'consorcio-imobiliario': {
    headline: 'Realize o sonho da casa própria com planejamento e sem juros',
    descricaoCompleta: [
      'O consórcio de imóveis é uma forma inteligente de planejar a aquisição do seu imóvel sem pagar juros. Você faz parte de um grupo de pessoas com o mesmo objetivo e, por meio de sorteios ou lances, é contemplado com uma carta de crédito.',
      'Com a Dabar, você recebe orientação especializada sobre como funciona o consórcio, quais são as melhores administradoras e como aumentar suas chances de contemplação.',
    ],
    perfisIdeais: [
      'Quem planeja comprar um imóvel sem pressa imediata',
      'Quem quer evitar os juros do financiamento tradicional',
      'Quem deseja usar o consórcio como forma de investimento e patrimônio',
      'Quem tem disciplina financeira para contribuições mensais regulares',
    ],
    vantagens: [
      { titulo: 'Sem juros', descricao: 'Você paga apenas a taxa de administração, sem encargos financeiros sobre o crédito.' },
      { titulo: 'Planejamento de longo prazo', descricao: 'Ideal para quem quer construir patrimônio de forma organizada.' },
      { titulo: 'Flexibilidade de uso', descricao: 'Use a carta de crédito para compra, construção ou reforma de imóvel.' },
      { titulo: 'Possibilidade de lance', descricao: 'Ofereça um lance para ser contemplado antes do sorteio.' },
      { titulo: 'Uso do FGTS', descricao: 'Possibilidade de utilizar o saldo do FGTS para dar lance ou complementar a carta.' },
    ],
    faq: [
      {
        pergunta: 'Como funciona o consórcio de imóveis?',
        resposta: 'Um grupo de pessoas contribui mensalmente com um valor definido. Mensalmente, participantes são contemplados por sorteio ou lance com uma carta de crédito no valor total do bem. Quem não foi contemplado continua pagando até o fim do grupo.',
      },
      {
        pergunta: 'Posso usar o FGTS no consórcio de imóveis?',
        resposta: 'Sim. O FGTS pode ser usado para dar lance, complementar a carta de crédito ou amortizar as parcelas, desde que o imóvel se enquadre nas regras do programa habitacional e o consorciado atenda aos requisitos legais.',
      },
      {
        pergunta: 'Quais tipos de imóveis posso adquirir com o consórcio?',
        resposta: 'Com a carta de crédito é possível adquirir imóveis residenciais urbanos ou rurais, realizar construção em terreno próprio ou reforma. As condições variam conforme a administradora — fale com nosso consultor para detalhes.',
      },
      {
        pergunta: 'O consórcio tem juros?',
        resposta: 'Não há juros no consórcio. Você paga a taxa de administração (remunera a administradora), o fundo de reserva e, em alguns casos, o seguro. Esses encargos são menores que os juros de um financiamento convencional.',
      },
    ],
    relacionados: ['financiamento-imobiliario', 'consorcio-automoveis', 'fgts-saque-aniversario'],
  },

  'consorcio-automoveis': {
    headline: 'Conquiste seu veículo com planejamento inteligente e sem juros',
    descricaoCompleta: [
      'O consórcio de veículos é a alternativa mais econômica para quem deseja adquirir um carro, moto ou caminhão sem pagar os juros do financiamento tradicional. Com planejamento e disciplina, você conquista seu veículo pagando muito menos.',
      'A Dabar orienta você sobre as melhores administradoras, estratégias de lance e como aproveitar ao máximo o seu consórcio.',
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
        resposta: 'A carta de crédito é o documento que comprova que você tem crédito disponível para adquirir o bem. Com ela em mãos, você negocia o veículo com o vendedor como se fosse um pagamento à vista.',
      },
      {
        pergunta: 'Posso comprar um carro usado com o consórcio?',
        resposta: 'Sim. A carta de crédito pode ser usada para compra de veículos novos ou seminovos, desde que atendam aos critérios da administradora (em geral, até um determinado ano de fabricação).',
      },
      {
        pergunta: 'O que acontece se eu não for contemplado até o fim do grupo?',
        resposta: 'Todo participante que cumpriu com suas obrigações é contemplado até o encerramento do grupo. O prazo pode variar, mas a contemplação é garantida para quem mantiver os pagamentos em dia.',
      },
      {
        pergunta: 'Posso dar o carro atual como lance no consórcio?',
        resposta: 'Algumas administradoras aceitam o lance com bem (veículo usado como parte do lance). As condições variam — nosso consultor verifica as opções disponíveis para o seu perfil.',
      },
    ],
    relacionados: ['consorcio-imobiliario', 'financiamento-imobiliario', 'consignado-clt'],
  },

  'financiamento-imobiliario': {
    headline: 'As melhores condições do mercado para financiar o imóvel dos seus sonhos',
    descricaoCompleta: [
      'O financiamento imobiliário é a solução para quem deseja adquirir um imóvel agora, pagando ao longo do tempo. Com as condições certas, o financiamento pode ser mais vantajoso do que esperar e poupar.',
      'A Dabar compara as condições de múltiplos bancos e instituições financeiras para encontrar a taxa, o prazo e as condições que melhor se encaixam no seu orçamento.',
    ],
    perfisIdeais: [
      'Quem deseja adquirir imóvel residencial ou comercial com urgência',
      'Famílias em busca do primeiro imóvel',
      'Investidores imobiliários',
      'Quem quer aproveitar condições atuais de mercado sem esperar',
    ],
    vantagens: [
      { titulo: 'Comparação de bancos', descricao: 'Avaliamos múltiplas instituições para encontrar a melhor taxa para você.' },
      { titulo: 'Uso do FGTS', descricao: 'Utilize o saldo do FGTS como entrada ou para amortizar o financiamento.' },
      { titulo: 'Prazos longos', descricao: 'Financiamentos com prazos que se encaixam no seu orçamento atual.' },
      { titulo: 'Imóvel novo ou usado', descricao: 'Financiamos imóveis residenciais ou comerciais, novos ou usados.' },
      { titulo: 'Acompanhamento completo', descricao: 'Suporte desde a simulação até a assinatura do contrato.' },
    ],
    faq: [
      {
        pergunta: 'Qual é a documentação necessária para financiar um imóvel?',
        resposta: 'Em geral: RG, CPF, comprovante de renda, comprovante de residência, certidão de estado civil e documentos do imóvel (matrícula, certidões negativas). Nosso consultor orienta sobre a lista completa para cada banco.',
      },
      {
        pergunta: 'Posso financiar 100% do valor do imóvel?',
        resposta: 'A maioria dos bancos financia entre 70% e 90% do valor do imóvel. O restante deve ser pago como entrada. Em alguns programas habitacionais específicos pode haver condições diferenciadas.',
      },
      {
        pergunta: 'Qual é o prazo máximo de financiamento?',
        resposta: 'Os financiamentos imobiliários podem ter prazo de até 35 anos (420 meses), dependendo da instituição e do programa. O prazo impacta diretamente no valor das parcelas mensais.',
      },
      {
        pergunta: 'Posso usar o FGTS como entrada no financiamento?',
        resposta: 'Sim, desde que você atenda aos requisitos: não ter outro financiamento ativo pelo SFH, não ser proprietário de imóvel na mesma cidade e ter pelo menos 3 anos de trabalho sob regime FGTS.',
      },
    ],
    relacionados: ['consorcio-imobiliario', 'fgts-saque-aniversario', 'seguro-de-vida'],
  },

  'cambio-remessa': {
    headline: 'Envie e receba valores internacionais com câmbio competitivo e total segurança',
    descricaoCompleta: [
      'Seja para enviar dinheiro para um familiar no exterior, receber pagamentos internacionais, financiar estudos fora do Brasil ou realizar investimentos globais — a Dabar oferece operações de câmbio e remessa com transparência e taxas competitivas.',
      'Trabalhamos com instituições autorizadas pelo Banco Central, garantindo segurança jurídica em todas as operações.',
    ],
    perfisIdeais: [
      'Brasileiros com familiares residentes no exterior',
      'Profissionais que recebem em moeda estrangeira',
      'Empresas importadoras e exportadoras',
      'Estudantes com bolsas ou cursos no exterior',
    ],
    vantagens: [
      { titulo: 'Taxas competitivas', descricao: 'Cotações diferenciadas em relação aos bancos tradicionais.' },
      { titulo: 'Múltiplas moedas', descricao: 'Operamos as principais moedas: dólar, euro, libra, franco suíço e outras.' },
      { titulo: 'Segurança regulatória', descricao: 'Operações realizadas por instituições autorizadas pelo Banco Central.' },
      { titulo: 'Rapidez', descricao: 'Prazos reduzidos para liquidação das remessas internacionais.' },
      { titulo: 'Atendimento personalizado', descricao: 'Consultor especializado em câmbio acompanha cada operação.' },
    ],
    faq: [
      {
        pergunta: 'Como funciona o envio de remessa internacional?',
        resposta: 'Você informa o valor, a moeda e o destino. Apresentamos a taxa de câmbio, os encargos e o valor que o destinatário receberá. Após aprovação, a operação é liquidada e o dinheiro é transferido para a conta indicada no exterior.',
      },
      {
        pergunta: 'Qual é o prazo para o dinheiro chegar ao destino?',
        resposta: 'Depende do país e da modalidade. Remessas para países com sistemas financeiros avançados costumam ser liquidadas em 1 a 2 dias úteis. Nosso consultor informa o prazo específico para cada destino.',
      },
      {
        pergunta: 'Há limite de valor para remessas internacionais?',
        resposta: 'O Banco Central do Brasil exige declaração para remessas acima de determinados valores e impõe regras para operações de câmbio. Nosso consultor orienta sobre os limites e obrigações regulatórias aplicáveis ao seu caso.',
      },
      {
        pergunta: 'Quais moedas estão disponíveis para câmbio?',
        resposta: 'Trabalhamos com as principais moedas globais: dólar americano (USD), euro (EUR), libra esterlina (GBP), dólar canadense (CAD), franco suíço (CHF) e outras. Consulte a disponibilidade para moedas específicas.',
      },
    ],
    relacionados: ['factoring', 'seguro-viagem', 'seguro-empresarial'],
  },

  'factoring': {
    headline: 'Antecipe recebíveis e mantenha o fluxo de caixa da sua empresa saudável',
    descricaoCompleta: [
      'O factoring é uma solução financeira para empresas que precisam de capital de giro sem recorrer a empréstimos bancários tradicionais. Você vende seus títulos a receber (duplicatas, cheques, notas promissórias) e recebe o valor antecipado.',
      'A Dabar conecta sua empresa às melhores condições do mercado de factoring, com análise rápida e processo transparente.',
    ],
    perfisIdeais: [
      'Pequenas e médias empresas com necessidade de capital de giro',
      'Empresas com ciclo financeiro longo (venda a prazo)',
      'Negócios que querem crescer sem depender de crédito bancário',
      'Empresas com restrição de crédito mas com carteira de recebíveis saudável',
    ],
    vantagens: [
      { titulo: 'Liquidez imediata', descricao: 'Receba hoje o valor das suas vendas a prazo sem esperar o vencimento.' },
      { titulo: 'Sem endividamento bancário', descricao: 'Não é empréstimo — você vende um ativo (o recebível), não se endivida.' },
      { titulo: 'Aprovação baseada no cliente', descricao: 'A análise foca na qualidade dos seus recebíveis, não no seu histórico de crédito.' },
      { titulo: 'Flexibilidade', descricao: 'Antecipe apenas os títulos que precisar, quando precisar.' },
      { titulo: 'Gestão de recebíveis', descricao: 'A empresa de factoring assume a cobrança dos títulos cedidos.' },
    ],
    faq: [
      {
        pergunta: 'O que é factoring?',
        resposta: 'Factoring (ou fomento mercantil) é a operação pela qual uma empresa vende seus direitos creditórios (duplicatas, cheques, notas promissórias) a uma empresa de factoring, recebendo o valor à vista com desconto pela antecipação.',
      },
      {
        pergunta: 'Factoring é o mesmo que empréstimo bancário?',
        resposta: 'Não. No empréstimo, você recebe dinheiro e assume uma dívida. No factoring, você vende um ativo (seu recebível) — não há dívida a pagar. Isso torna o factoring uma alternativa financeiramente mais saudável para o balanço da empresa.',
      },
      {
        pergunta: 'Quais documentos são necessários para antecipar recebíveis?',
        resposta: 'Em geral: documentos da empresa (CNPJ, contrato social), documentos dos sócios, comprovante de faturamento e os títulos a serem cedidos (duplicatas, NFs). A lista exata varia conforme a empresa de factoring.',
      },
      {
        pergunta: 'Qual o prazo mínimo e máximo dos títulos aceitos?',
        resposta: 'Cada empresa de factoring define seus critérios. Em geral, são aceitos títulos com vencimento entre 30 e 120 dias. Títulos com prazos maiores podem ser analisados caso a caso. Nosso consultor verifica as condições disponíveis.',
      },
    ],
    relacionados: ['cambio-remessa', 'seguro-empresarial', 'consignado-clt'],
  },
}
