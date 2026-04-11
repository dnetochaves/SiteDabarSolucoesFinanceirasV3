// PRD §5.1: Depoimentos / cases representativos

const DEPOIMENTOS = [
  {
    nome: 'Carlos M.',
    produto: 'Consignado CLT',
    texto:
      'Processo todo pelo WhatsApp, sem burocracia. O consultor me explicou tudo em detalhes e resolvi em menos de um dia.',
  },
  {
    nome: 'Patrícia S.',
    produto: 'Seguro de Vida',
    texto:
      'Fiquei impressionada com o atendimento personalizado. Sabia exatamente de qual produto eu precisava e me ajudou a escolher a melhor cobertura.',
  },
  {
    nome: 'Rodrigo F.',
    produto: 'Consórcio de Imóveis',
    texto:
      'Clareza e transparência do início ao fim. Sem enrolação, sem letras miúdas. Recomendo muito a Dabar para quem quer planejar com segurança.',
  },
]

function QuoteIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
        fill="#8EDB00"
        opacity="0.3"
      />
    </svg>
  )
}

export default function Depoimentos() {
  return (
    <section className="bg-white py-20" aria-labelledby="depoimentos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-label text-brand-green mb-2">Quem já trabalhou com a gente</p>
          <h2 id="depoimentos-heading" className="text-[22px] font-medium text-brand-dark">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((dep) => (
            <figure
              key={dep.nome}
              className="bg-brand-lightBg border border-brand-cardBorder rounded-card p-6 flex flex-col"
            >
              <QuoteIcon />
              <blockquote className="mt-3 text-[14px] text-[#555555] leading-relaxed flex-1">
                &ldquo;{dep.texto}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full bg-brand-greenTint flex items-center justify-center text-brand-greenDark text-[12px] font-medium shrink-0"
                >
                  {dep.nome[0]}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-brand-dark">{dep.nome}</p>
                  <p className="text-[11px] text-[#AAAAAA]">{dep.produto}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
