#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# pre-deploy.sh — QA obrigatório antes de qualquer deploy Dabar
# Uso: bash scripts/pre-deploy.sh
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RESET='\033[0m'
BOLD='\033[1m'

PASS=0
FAIL=0

pass() { echo -e "  ${GREEN}✔${RESET} $1"; ((PASS++)); }
fail() { echo -e "  ${RED}✘${RESET} $1"; ((FAIL++)); }
warn() { echo -e "  ${YELLOW}⚠${RESET} $1"; }
section() { echo -e "\n${CYAN}${BOLD}▶ $1${RESET}"; }

echo -e "${BOLD}Dabar — Pre-Deploy QA${RESET}"
echo "────────────────────────────────────────"

# ── 1. VARIÁVEIS DE AMBIENTE ──────────────────────────────────────────────────
section "Variáveis de ambiente"

if [ -f .env.local ]; then
  if grep -q "NEXT_PUBLIC_WHATSAPP_NUMBER" .env.local; then
    pass "NEXT_PUBLIC_WHATSAPP_NUMBER definido em .env.local"
  else
    fail "NEXT_PUBLIC_WHATSAPP_NUMBER ausente em .env.local"
  fi
  if grep -q "NEXT_PUBLIC_SITE_URL" .env.local; then
    pass "NEXT_PUBLIC_SITE_URL definido em .env.local"
  else
    warn "NEXT_PUBLIC_SITE_URL ausente em .env.local (usando fallback https://www.dabar.com.br)"
  fi
else
  warn ".env.local não encontrado — certifique-se de que as variáveis estão configuradas na Vercel"
fi

# ── 2. SEGURANÇA — NÚMERO HARDCODED ──────────────────────────────────────────
section "Segurança"

HARDCODED=$(grep -r "5571983917864\|wa\.me/557" \
  --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  -l 2>/dev/null || true)

if [ -z "$HARDCODED" ]; then
  pass "Nenhum número WhatsApp hardcoded encontrado"
else
  fail "Número WhatsApp hardcoded encontrado em: $HARDCODED"
fi

CONSOLE_LOG=$(grep -r "console\.log" \
  --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  -l 2>/dev/null || true)

if [ -z "$CONSOLE_LOG" ]; then
  pass "Nenhum console.log em produção"
else
  fail "console.log encontrado em: $CONSOLE_LOG"
fi

# ── 3. TYPECHECK ─────────────────────────────────────────────────────────────
section "TypeScript (strict)"

if npm run typecheck --silent 2>/dev/null; then
  pass "TypeScript sem erros"
else
  fail "TypeScript com erros — corrija antes de fazer deploy"
fi

# ── 4. LINT ───────────────────────────────────────────────────────────────────
section "ESLint"

if npm run lint --silent 2>/dev/null; then
  pass "ESLint sem erros"
else
  fail "ESLint com erros — corrija antes de fazer deploy"
fi

# ── 5. BUILD ──────────────────────────────────────────────────────────────────
section "Build de produção (inclui next-sitemap)"

if npm run build 2>/dev/null; then
  pass "Build concluído com sucesso"

  # Verifica se sitemap e robots foram gerados
  if [ -f public/sitemap.xml ] || [ -f public/sitemap-0.xml ]; then
    pass "sitemap.xml gerado"
  else
    warn "sitemap.xml não encontrado em public/ — verifique next-sitemap.config.js"
  fi

  if [ -f public/robots.txt ]; then
    pass "robots.txt gerado"
  else
    warn "robots.txt não encontrado em public/"
  fi
else
  fail "Build falhou — corrija antes de fazer deploy"
fi

# ── RESUMO ────────────────────────────────────────────────────────────────────
echo ""
echo "────────────────────────────────────────"
echo -e "${BOLD}Resultado: ${GREEN}${PASS} passou${RESET} · ${RED}${FAIL} falhou${RESET}"
echo "────────────────────────────────────────"

if [ "$FAIL" -gt 0 ]; then
  echo -e "${RED}${BOLD}⛔ Deploy bloqueado — corrija os erros acima.${RESET}"
  exit 1
else
  echo -e "${GREEN}${BOLD}✅ Tudo certo — pode fazer o deploy.${RESET}"
  echo ""
  echo -e "  ${CYAN}Push para main:${RESET}    git push origin main"
  echo -e "  ${CYAN}Deploy manual:${RESET}     vercel --prod"
  exit 0
fi
