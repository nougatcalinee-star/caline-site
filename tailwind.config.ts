import type { Config } from 'tailwindcss';

// Palette & typo = Direction Artistique Câline.
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#3A2A26', // texte praliné chaud
        cream: '#FFF4E6', // fond crème
        surface: '#FFFDF9', // surfaces / cartes
        muted: '#8A7A72', // texte secondaire
        // Rose framboise — couleur principale
        candy: {
          50: '#FEF0F2',
          100: '#FBE0E4',
          200: '#F6C2CB',
          300: '#F0A3B1',
          400: '#EC7C8E',
          500: '#E8546B',
          600: '#C75B73',
          700: '#9E3F54',
        },
        // Corail — secondaire chaleureux
        corail: {
          100: '#FFE7DE',
          300: '#F6B6A0',
          500: '#E8806B',
          600: '#D8654E',
        },
        // Abricot doré — accent gourmand
        abricot: {
          100: '#FBEFD6',
          300: '#F6CC85',
          500: '#F2A93B',
          600: '#CE9326',
        },
        // Pistache / sauge — touche fraîche
        pistache: {
          100: '#E9F0E2',
          400: '#C2D6B4',
          500: '#A7C19A',
          600: '#6E9A5E',
        },
        // Rose dragée doux
        dragee: {
          100: '#FBE0E4',
          400: '#F3B7AE',
          500: '#E98E86',
          600: '#D8786E',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        display: ['var(--font-baloo)', 'var(--font-nunito)', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: { '4xl': '2rem' },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', md: '2rem', lg: '4rem' },
        screens: { '2xl': '1200px' },
      },
      boxShadow: {
        candy: '0 18px 40px -12px rgba(232, 84, 107, 0.42)',
        soft: '0 12px 32px -10px rgba(58, 42, 38, 0.16)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        wiggle: { '0%, 100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } },
      },
    },
  },
  plugins: [],
};

export default config;
