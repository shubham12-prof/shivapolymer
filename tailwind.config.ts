import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8610A',
          'orange-dark': '#C4510A',
          'orange-light': '#F97316',
          grey: '#1F2937',
          'grey-mid': '#374151',
          'grey-light': '#6B7280',
          'grey-bg': '#F3F4F6',
          'grey-border': '#D1D5DB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
