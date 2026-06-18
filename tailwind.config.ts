import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Praliné — texte sombre chaleureux
        ink: '#3A2A2A',
        // Crème vanille — fond principal
        cream: '#FFF4E3',
        // Framboise pop — couleur principale
        candy: {
          50: '#FFF0F3',
          100: '#FCDDE4',
          200: '#F6B8C6',
          400: '#EC6B89',
          500: '#E2486B',
          600: '#C73458',
          700: '#A52546',
        },
        // Corail — secondaire chaleureux
        corail: {
          100: '#FFE7DE',
          300: '#FFB39E',
          500: '#FF7A59',
          600: '#ED5B38',
        },
        // Abricot doré — accent gourmand
        abricot: {
          100: '#FFF1D6',
          300: '#FFD588',
          500: '#FFB23E',
          600: '#F39200',
        },
        // Pistache — touche fraîche
        pistache: {
          100: '#EAF3E6',
          400: '#C2DCB4',
          500: '#9FC6A0',
          600: '#7BA37D',
        },
        // Rose dragée — accent doux
        dragee: {
          100: '#FDEAE3',
          400: '#F8C3B4',
          500: '#F4A48F',
          600: '#E07E66',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          md: '2rem',
          lg: '4rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      boxShadow: {
        candy: '0 18px 40px -12px rgba(226, 72, 107, 0.45)',
        soft: '0 12px 32px -10px rgba(58, 42, 42, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
