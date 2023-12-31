/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        }
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: .5
          }
        }
      }
    },
    fontFamily: {
      "nunito-sans": ["Nunito Sans", "sans-serif"]
    },
    colors: {
      'red-wine': '#893446',
      'light-yellow': '#FEEF66',
      'lila': '#C9BEDC',
      'purple': '#856888',
      "white": "#ffffff",
      'dark-gray': "#292929",
      'green-apple': '#7FFF00',
      'red': '#d90429',
      'gray-blue': '#bfc7d1',
      'black': '#000000',
    },
    animation: {
      'spin-slow': 'spin 5s linear infinite',
      'wiggle': 'wiggle 1s ease-in-out infinite',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
    },
  },
  plugins: [],
}

