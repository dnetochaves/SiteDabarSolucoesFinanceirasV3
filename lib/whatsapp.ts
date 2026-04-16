import { produtos } from '@/data/produtos'

/** Número WhatsApp da Dabar (NEXT_PUBLIC_WHATSAPP_NUMBER) */
function getNumero(): string {
  // || em vez de ?? — captura string vazia quando o secret não está configurado no CI
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5571983917864'
}

/** Monta a URL wa.me com mensagem codificada */
function buildUrl(mensagem: string): string {
  return `https://wa.me/${getNumero()}?text=${encodeURIComponent(mensagem)}`
}

/**
 * Constrói a URL do WhatsApp para um produto pelo nome.
 * Busca a mensagem pré-preenchida em data/produtos.ts.
 *
 * Regras (PRD §2.1 e §7.2):
 * - Número via NEXT_PUBLIC_WHATSAPP_NUMBER — nunca hardcoded
 * - Mensagem codificada via encodeURIComponent
 * - NUNCA montar a URL manualmente fora desta função
 */
export function buildWhatsAppLink(produto: string): string {
  const found = produtos.find((p) => p.nome === produto)
  const mensagem = found?.mensagemWhatsApp ?? MENSAGEM_GENERICA
  return buildUrl(mensagem)
}

/** Mensagem genérica usada no botão flutuante global e na página de contato */
export const MENSAGEM_GENERICA =
  'Olá! Gostaria de falar com um consultor Dabar. Não sei exatamente por onde começar — pode me ajudar?'

/** Link WhatsApp genérico para o botão flutuante (PRD §4.2) */
export function buildWhatsAppLinkGenerico(): string {
  return buildUrl(MENSAGEM_GENERICA)
}
