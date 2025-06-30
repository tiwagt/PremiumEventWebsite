/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        purple: {
          500: '#a855f7',
          600: '#9333ea',
        },
        gray: {
          850: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      backdropBlur: {
        'xs': '2px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      typography: {
        'gradient': {
          background: 'linear-gradient(135deg, #ec4899, #a855f7)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }
      }
    },
  },
  plugins: [],
};