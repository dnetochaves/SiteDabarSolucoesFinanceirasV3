import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:     '#8EDB00',
          greenTint: '#F0FAD6',
          greenDark: '#3B6D11',
          dark:      '#1A1A1A',
          surface:   '#242424',
          lightBg:   '#F8F8F6',
          cardBorder:'#E2E2DA',
        },
        whatsapp:      '#25D366',
        whatsappHover: '#1DA851',
      },
      borderRadius: {
        card: '10px',
        btn:  '4px',
        icon: '8px',
      },
      fontFamily: {
        sans: ['Criteria CF', 'Inter', 'Arial', ...fontFamily.sans],
      },
      fontSize: {
        'label': ['10px', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '500' }],
        'badge': ['10px', { lineHeight: '1.4', fontWeight: '500' }],
        'card-title': ['15px', { lineHeight: '1.4', fontWeight: '500' }],
        'card-desc':  ['12px', { lineHeight: '1.6' }],
        'cta-btn':    ['11px', { lineHeight: '1.4', fontWeight: '500' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
