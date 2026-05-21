import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Montserrat', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        dominus: {
          void:      '#0a0a0a',
          surface:   '#111111',
          elevated:  '#1a1a1a',
          border:    '#1e1e1e',
          gold:      '#C9A84C',
          'gold-light': '#E8CC80',
          'gold-dark':  '#8A6E28',
          muted:     '#AAAAAA',
          subtle:    '#444444',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
