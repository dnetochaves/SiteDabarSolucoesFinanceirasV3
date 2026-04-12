// PRD §5.1: Seção "Como Trabalhamos" — fluxo em 4 etapas
// PRD §8.2: fundo escuro #1A1A1A

const ETAPAS = [
  {
    numero: '01',
    titulo: 'Escolha sua solução',
    descricao:
      'Navegue pelo portfólio Dabar e encontre o produto financeiro ideal para o seu momento.',
  },
  {
    numero: '02',
    titulo: 'Inicie o contato',
    descricao:
      'Clique no botão WhatsApp e seja direcionado imediatamente ao consultor especializado naquele produto.',
  },
  {
    numero: '03',
    titulo: 'Consultoria personalizada',
    descricao:
      'Nosso especialista entende sua situação e apresenta as melhores opções disponíveis no mercado.',
  },
  {
    numero: '04',
    titulo: 'Contrate com segurança',
    descricao:
      'Finalize sua contratação com todo o suporte da equipe Dabar — transparência em cada etapa.',
  },
]

export default function ComoTrabalhamos() {
  return (
    <section className="bg-brand-dark py-20" aria-labelledby="como-trabalhamos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-label text-brand-green mb-2">Simples e direto</p>
          <h2 id="como-trabalhamos-heading" className="text-[22px] font-medium text-white">
            Como Trabalhamos
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ETAPAS.map((etapa) => (
            <li key={etapa.numero} className="flex flex-col">
              {/* Número */}
              <span
                aria-hidden="true"
                className="text-[40px] font-medium text-brand-green leading-none mb-4 select-none"
              >
                {etapa.numero}
              </span>

              {/* Divisor */}
              <div className="w-8 h-px bg-brand-green mb-4" aria-hidden="true" />

              {/* Título */}
              <h3 className="text-[15px] font-medium text-white mb-2">{etapa.titulo}</h3>

              {/* Descrição */}
              {/* #888888 em bg #1A1A1A → 4.83:1 ✓ WCAG AA */}
              <p className="text-[13px] text-[#888888] leading-relaxed">{etapa.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
