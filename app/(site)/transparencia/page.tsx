// PRD §4.1 — Rota /transparencia · LGPD e Termos de Uso · Sprint 4 / Critério 9.4
// Página estática SSG — sem formulários, sem coleta de dados

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildWhatsAppLinkGenerico } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Privacidade e Termos de Uso',
  description:
    'Política de Privacidade e Termos de Uso da Dabar Soluções Financeiras. Saiba como tratamos seus dados em conformidade com a LGPD.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dabar.com.br'}/transparencia`,
  },
}

// ── DADOS ────────────────────────────────────────────────────────────────────

const SECOES = [
  { id: 'privacidade', label: 'Política de Privacidade' },
  { id: 'dados-coletados', label: 'Dados Coletados' },
  { id: 'uso-dos-dados', label: 'Uso dos Dados' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'direitos', label: 'Seus Direitos (LGPD)' },
  { id: 'termos', label: 'Termos de Uso' },
  { id: 'contato-dpo', label: 'Contato / DPO' },
]

// ── COMPONENTES INTERNOS ──────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-label text-brand-green mb-3 uppercase tracking-widest">{children}</p>
  )
}

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="text-[22px] font-medium text-brand-dark mb-6 scroll-mt-24">
      {children}
    </h2>
  )
}

function Paragrafo({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-[#888888] leading-relaxed">{children}</p>
  )
}

function ListaItens({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {itens.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] text-[#888888] leading-relaxed">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function Divisor() {
  return <div className="border-t border-brand-cardBorder my-12" aria-hidden="true" />
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function TransparenciaPage() {
  const ctaHref = buildWhatsAppLinkGenerico()

  return (
    <div className="bg-brand-lightBg">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 md:py-24" aria-labelledby="transparencia-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[11px] text-[#555555]">
              <li>
                <Link href="/" className="hover:text-[#AAAAAA] transition-colors">
                  Início
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#333333]">/</li>
              <li className="text-[#AAAAAA]" aria-current="page">Privacidade e Termos</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-label text-brand-green mb-3">Transparência</p>
            <h1
              id="transparencia-hero-heading"
              className="text-[32px] md:text-[40px] font-medium text-white leading-[1.2] mb-6"
            >
              Política de Privacidade{' '}
              <span className="text-brand-green">e Termos de Uso</span>
            </h1>
            <p className="text-[15px] text-[#777777] leading-relaxed max-w-xl">
              A Dabar Soluções Financeiras é comprometida com a proteção dos seus dados pessoais
              e com a transparência em todas as etapas do relacionamento.
              Este documento explica como tratamos suas informações em conformidade com a{' '}
              <strong className="text-[#AAAAAA] font-medium">Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
            </p>
            <p className="text-[12px] text-[#555555] mt-4">
              Última atualização: abril de 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVEGAÇÃO RÁPIDA ──────────────────────────────────────────────── */}
      <section className="bg-brand-surface border-b border-[#2E2E2E]" aria-label="Navegação por seções">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav>
            <ol className="flex flex-wrap gap-2">
              {SECOES.map((secao, i) => (
                <li key={secao.id}>
                  <a
                    href={`#${secao.id}`}
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#777777] hover:text-[#AAAAAA]
                               transition-colors duration-150 py-1"
                  >
                    <span className="text-brand-green font-medium">{String(i + 1).padStart(2, '0')}</span>
                    {secao.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ── CONTEÚDO PRINCIPAL ────────────────────────────────────────────── */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">

          {/* 01 — Política de Privacidade */}
          <section aria-labelledby="privacidade">
            <SectionLabel>01 — Controlador de Dados</SectionLabel>
            <SectionHeading id="privacidade">Política de Privacidade</SectionHeading>
            <div className="space-y-4">
              <Paragrafo>
                O controlador responsável pelo tratamento dos seus dados pessoais é a{' '}
                <strong className="text-brand-dark font-medium">Dabar Soluções Financeiras</strong>,
                empresa com sede em Salvador, Bahia, inscrita no CNPJ sob o nº 00.000.000/0001-00.
              </Paragrafo>
              <Paragrafo>
                Esta Política de Privacidade aplica-se ao site{' '}
                <strong className="text-brand-dark font-medium">dabar.com.br</strong> e a todos os
                canais de atendimento operados pela Dabar, incluindo o atendimento via WhatsApp.
                Ao utilizar nossos serviços, você concorda com as práticas descritas neste documento.
              </Paragrafo>
              <Paragrafo>
                Não coletamos dados pessoais por meio de formulários eletrônicos em nosso site.
                Todo contato é iniciado voluntariamente pelo usuário, diretamente pelo WhatsApp,
                e a coleta de informações ocorre exclusivamente no contexto desse atendimento.
              </Paragrafo>
            </div>
          </section>

          <Divisor />

          {/* 02 — Dados Coletados */}
          <section aria-labelledby="dados-coletados">
            <SectionLabel>02 — O que coletamos</SectionLabel>
            <SectionHeading id="dados-coletados">Dados Coletados</SectionHeading>
            <div className="space-y-6">
              <Paragrafo>
                Os dados pessoais tratados pela Dabar são fornecidos diretamente pelo titular
                durante o atendimento via WhatsApp. Podemos coletar:
              </Paragrafo>
              <ListaItens itens={[
                'Nome completo e dados de identificação (CPF/CNPJ) — fornecidos voluntariamente pelo cliente',
                'Número de telefone (WhatsApp) — utilizado para o atendimento iniciado pelo próprio usuário',
                'Informações financeiras necessárias para análise da solução de interesse (renda, vínculo empregatício, etc.)',
                'Dados de navegação coletados de forma anonimizada (cookies de analytics) — veja a seção Cookies',
                'Endereço de e-mail — apenas quando fornecido voluntariamente pelo cliente durante o atendimento',
              ]} />
              <Paragrafo>
                <strong className="text-brand-dark font-medium">Dados sensíveis:</strong>{' '}
                A Dabar não solicita, armazena nem trata dados sensíveis (como dados de saúde,
                biometria ou origem racial) sem base legal específica e consentimento expresso.
              </Paragrafo>
            </div>
          </section>

          <Divisor />

          {/* 03 — Uso dos Dados */}
          <section aria-labelledby="uso-dos-dados">
            <SectionLabel>03 — Como utilizamos</SectionLabel>
            <SectionHeading id="uso-dos-dados">Uso dos Dados</SectionHeading>
            <div className="space-y-4">
              <Paragrafo>
                Os dados coletados são utilizados exclusivamente para as finalidades abaixo,
                com base nas hipóteses legais previstas na LGPD:
              </Paragrafo>
              <div className="space-y-4 mt-4">
                {[
                  {
                    base: 'Execução de contrato',
                    descricao: 'Realizar o atendimento solicitado, apresentar soluções financeiras compatíveis com o perfil do cliente e encaminhar propostas junto às instituições parceiras.',
                  },
                  {
                    base: 'Legítimo interesse',
                    descricao: 'Melhorar a qualidade do atendimento, personalizar a comunicação e enviar informações relevantes sobre produtos do portfólio Dabar.',
                  },
                  {
                    base: 'Cumprimento de obrigação legal',
                    descricao: 'Atender exigências regulatórias aplicáveis ao mercado financeiro e de seguros, incluindo registros obrigatórios junto a órgãos reguladores.',
                  },
                  {
                    base: 'Consentimento',
                    descricao: 'Envio de comunicações promocionais e newsletters, quando o titular tiver dado consentimento expresso e revogável a qualquer momento.',
                  },
                ].map((item) => (
                  <div
                    key={item.base}
                    className="bg-white border border-brand-cardBorder rounded-card p-5"
                  >
                    <p className="text-[12px] font-medium text-brand-green uppercase tracking-wider mb-2">
                      {item.base}
                    </p>
                    <p className="text-[14px] text-[#888888] leading-relaxed">{item.descricao}</p>
                  </div>
                ))}
              </div>
              <Paragrafo>
                Seus dados <strong className="text-brand-dark font-medium">não serão vendidos</strong>{' '}
                a terceiros. O compartilhamento ocorre apenas com instituições financeiras parceiras
                necessárias à prestação do serviço solicitado, sempre com base contratual e sob
                obrigações de confidencialidade.
              </Paragrafo>
            </div>
          </section>

          <Divisor />

          {/* 04 — Cookies */}
          <section aria-labelledby="cookies">
            <SectionLabel>04 — Cookies</SectionLabel>
            <SectionHeading id="cookies">Política de Cookies</SectionHeading>
            <div className="space-y-4">
              <Paragrafo>
                Cookies são pequenos arquivos de texto armazenados no seu navegador que ajudam
                a site a funcionar e a melhorar a experiência de navegação. O site dabar.com.br
                utiliza os seguintes tipos de cookies:
              </Paragrafo>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-brand-cardBorder">
                      <th className="text-left py-3 pr-6 font-medium text-brand-dark">Tipo</th>
                      <th className="text-left py-3 pr-6 font-medium text-brand-dark">Finalidade</th>
                      <th className="text-left py-3 font-medium text-brand-dark">Obrigatório</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#888888]">
                    {[
                      { tipo: 'Essenciais', finalidade: 'Funcionamento básico do site (navegação, segurança)', obrigatorio: 'Sim' },
                      { tipo: 'Analytics', finalidade: 'Análise de tráfego e comportamento de navegação (Google Analytics — dados anonimizados)', obrigatorio: 'Não' },
                      { tipo: 'Preferências', finalidade: 'Memorizar preferências de idioma e configurações de exibição', obrigatorio: 'Não' },
                    ].map((row) => (
                      <tr key={row.tipo} className="border-b border-brand-cardBorder">
                        <td className="py-3 pr-6 font-medium text-brand-dark">{row.tipo}</td>
                        <td className="py-3 pr-6 leading-relaxed">{row.finalidade}</td>
                        <td className="py-3">
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-[3px] ${
                            row.obrigatorio === 'Sim'
                              ? 'bg-brand-greenTint text-brand-greenDark'
                              : 'bg-[#F0F0F0] text-[#888888]'
                          }`}>
                            {row.obrigatorio}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Paragrafo>
                Você pode gerenciar ou desativar cookies não essenciais nas configurações do seu
                navegador. A desativação de cookies essenciais pode comprometer o funcionamento
                correto do site.
              </Paragrafo>
            </div>
          </section>

          <Divisor />

          {/* 05 — Direitos LGPD */}
          <section aria-labelledby="direitos">
            <SectionLabel>05 — LGPD — Lei nº 13.709/2018</SectionLabel>
            <SectionHeading id="direitos">Seus Direitos como Titular</SectionHeading>
            <div className="space-y-4">
              <Paragrafo>
                A Lei Geral de Proteção de Dados (LGPD) garante a você os seguintes direitos em
                relação ao tratamento dos seus dados pessoais pela Dabar:
              </Paragrafo>
              <ListaItens itens={[
                'Confirmação da existência de tratamento e acesso aos dados que temos sobre você',
                'Correção de dados incompletos, inexatos ou desatualizados',
                'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade',
                'Portabilidade dos dados a outro fornecedor de serviço ou produto, conforme regulamentação',
                'Eliminação dos dados pessoais tratados com base no consentimento',
                'Informação sobre as entidades públicas e privadas com as quais a Dabar realizou uso compartilhado de dados',
                'Revogação do consentimento a qualquer momento, de forma gratuita e simplificada',
                'Oposição ao tratamento realizado com fundamento em hipótese diferente do consentimento',
              ]} />
              <div className="bg-brand-greenTint rounded-card p-5 mt-6">
                <p className="text-[13px] text-brand-greenDark leading-relaxed">
                  <strong className="font-medium">Como exercer seus direitos:</strong>{' '}
                  Envie sua solicitação para{' '}
                  <a
                    href="mailto:privacidade@dabar.com.br"
                    className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    privacidade@dabar.com.br
                  </a>{' '}
                  ou entre em contato pelo WhatsApp informando &quot;Solicitação LGPD&quot;.
                  Respondemos em até 15 dias úteis, conforme previsto na legislação.
                </p>
              </div>
            </div>
          </section>

          <Divisor />

          {/* 06 — Termos de Uso */}
          <section aria-labelledby="termos">
            <SectionLabel>06 — Condições gerais</SectionLabel>
            <SectionHeading id="termos">Termos de Uso</SectionHeading>
            <div className="space-y-6">

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Aceitação</h3>
                <Paragrafo>
                  Ao acessar e utilizar o site dabar.com.br, você declara ter lido, compreendido e
                  concordado com estes Termos de Uso. Caso não concorde com alguma condição,
                  solicitamos que não utilize o site.
                </Paragrafo>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Natureza dos Serviços</h3>
                <Paragrafo>
                  O site dabar.com.br é uma plataforma institucional de apresentação do portfólio de
                  soluções financeiras da Dabar. As informações disponibilizadas têm caráter
                  informativo e não constituem oferta, proposta, cotação ou contrato. A formalização
                  de qualquer produto ocorre exclusivamente pelo atendimento direto com o consultor,
                  via WhatsApp.
                </Paragrafo>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Limitação de Responsabilidade</h3>
                <Paragrafo>
                  A Dabar não se responsabiliza por decisões financeiras tomadas com base
                  exclusivamente nas informações do site, sem consulta prévia a um de nossos
                  especialistas. As condições de produtos financeiros variam conforme perfil do
                  cliente, instituição financeira e momento de mercado.
                </Paragrafo>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Propriedade Intelectual</h3>
                <Paragrafo>
                  Todo o conteúdo deste site — textos, imagens, logotipos, identidade visual e
                  código-fonte — é de propriedade exclusiva da Dabar Soluções Financeiras ou de
                  seus licenciantes, protegido pela legislação brasileira de propriedade intelectual.
                  É vedada a reprodução, distribuição ou utilização sem autorização prévia e por escrito.
                </Paragrafo>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Links Externos</h3>
                <Paragrafo>
                  Este site pode conter links para sites de terceiros (ex: WhatsApp Web). A Dabar
                  não se responsabiliza pelo conteúdo, política de privacidade ou práticas de
                  segurança de sites externos. O acesso a esses sites é de responsabilidade do usuário.
                </Paragrafo>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Alterações e Vigência</h3>
                <Paragrafo>
                  Estes Termos de Uso podem ser atualizados a qualquer momento. Alterações
                  substanciais serão comunicadas por meio de aviso em destaque no site. O uso
                  continuado após a publicação das alterações implica aceitação dos novos termos.
                  A versão vigente é sempre a disponível nesta página, com a data de atualização indicada.
                </Paragrafo>
              </div>

              <div>
                <h3 className="text-[15px] font-medium text-brand-dark mb-3">Legislação Aplicável</h3>
                <Paragrafo>
                  Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da
                  Comarca de Salvador, Bahia, para dirimir quaisquer controvérsias decorrentes
                  deste documento, com renúncia a qualquer outro foro por mais privilegiado que seja.
                </Paragrafo>
              </div>
            </div>
          </section>

          <Divisor />

          {/* 07 — Contato / DPO */}
          <section aria-labelledby="contato-dpo">
            <SectionLabel>07 — Encarregado de Dados</SectionLabel>
            <SectionHeading id="contato-dpo">Contato e DPO</SectionHeading>
            <div className="space-y-4">
              <Paragrafo>
                Para exercer seus direitos como titular, tirar dúvidas sobre esta política ou
                reportar qualquer questão relacionada ao tratamento de dados pessoais, entre em
                contato com o Encarregado de Proteção de Dados (DPO) da Dabar:
              </Paragrafo>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  {
                    label: 'E-mail DPO',
                    valor: 'privacidade@dabar.com.br',
                    href: 'mailto:privacidade@dabar.com.br',
                  },
                  {
                    label: 'E-mail Geral',
                    valor: 'contato@dabar.com.br',
                    href: 'mailto:contato@dabar.com.br',
                  },
                  {
                    label: 'Sede',
                    valor: 'Salvador, Bahia — Brasil',
                    href: undefined,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-brand-cardBorder rounded-card p-5"
                  >
                    <p className="text-[10px] font-medium text-brand-green uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] text-brand-dark hover:text-brand-green transition-colors duration-150 break-all"
                      >
                        {item.valor}
                      </a>
                    ) : (
                      <p className="text-[13px] text-brand-dark">{item.valor}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 md:py-20" aria-labelledby="cta-transparencia-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-label text-brand-green mb-3">Ainda com dúvidas?</p>
            <h2 id="cta-transparencia-heading" className="text-[22px] md:text-[28px] font-medium text-white leading-snug mb-4">
              Fale diretamente com a Dabar
            </h2>
            <p className="text-[15px] text-[#777777] leading-relaxed mb-8">
              Nossa equipe responde dúvidas sobre privacidade, proteção de dados e uso de
              informações pessoais. Nenhum dado é coletado antes do contato — só quando
              você iniciar a conversa.
            </p>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a Dabar sobre privacidade e dados via WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover
                         text-white text-[13px] font-medium px-5 py-3 rounded-btn
                         transition-colors duration-200"
            >
              <WhatsAppIcon />
              Falar com a Dabar
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
