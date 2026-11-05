/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effafb',
          100: '#d7f2f5',
          200: '#b4e5eb',
          300: '#7fd0dc',
          400: '#3eb4c5',
          500: '#079FA8', // Mount Valley Primary Teal
          600: '#068088',
          700: '#07676e',
          800: '#0b5358',
          900: '#0c464a',
          950: '#032a2e',
        },
        surface: {
          50: '#FAFAFB',
          100: '#F4F6F8',
          200: '#E9ECF0',
          300: '#D7DDE4',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(7, 159, 168, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 8px 24px -6px rgba(7, 159, 168, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 16px 36px -8px rgba(7, 159, 168, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.04)',
        'soft-xl': '0 24px 48px -12px rgba(7, 159, 168, 0.15), 0 12px 28px -6px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

