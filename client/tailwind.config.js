/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        night: '#0a0a0f'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(168, 85, 247, 0.22)'
      },
      animation: {
        gradient: 'gradient 12s ease infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        }
      }
    }
  },
  plugins: []
};
