const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand1: '#E76F51',
        brand2: '#FF7E5E',
      },
      animation: {
        'slide-left': 'slideLeft 0.8s ease-out 0.5s forwards',
        'slide-right': 'slideRight 0.8s ease-out 0.5s forwards',
        'fade-in-center': 'fadeInCenter 0.5s ease-out forwards'
      },
      keyframes: {
        slideLeft: {
          '0%': { 
            transform: 'translateX(0) translateY(40px) rotate(0deg)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(-120px) translateY(60px) rotate(-10deg)', 
            opacity: '0.7' 
          }
        },
        slideRight: {
          '0%': { 
            transform: 'translateX(0) translateY(40px) rotate(0deg)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(120px) translateY(60px) rotate(10deg)', 
            opacity: '0.7' 
          }
        },
        fadeInCenter: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
      }
    },
  },
  plugins: [],
};
