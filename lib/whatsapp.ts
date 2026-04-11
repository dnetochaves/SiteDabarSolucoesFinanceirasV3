/**
 * Constrói a URL do WhatsApp com mensagem pré-preenchida.
 *
 * Regras (PRD §2.1 e §2.3):
 * - Número via NEXT_PUBLIC_WHATSAPP_NUMBER — nunca hardcoded
 * - Mensagem codificada via encodeURIComponent
 * - NUNCA montar a URL manualmente fora desta função
 */
export function buildWhatsAppLink(mensagem: string): string {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  if (!numero) {
    // Em desenvolvimento, lança erro visível; em produção, a build falhará
    throw new Error(
      'NEXT_PUBLIC_WHATSAPP_NUMBER não definido. Verifique o arquivo .env.local.'
    )
  }
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

/** Mensagem genérica usada no botão flutuante global e na página de contato */
export const MENSAGEM_GENERICA =
  'Olá! Gostaria de falar com um consultor Dabar. Não sei exatamente por onde começar — pode me ajudar?'

/** Link WhatsApp genérico para o botão flutuante */
export function buildWhatsAppLinkGenerico(): string {
  return buildWhatsAppLink(MENSAGEM_GENERICA)
}
