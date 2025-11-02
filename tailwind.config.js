/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pink & Red Palette - MANDATORY COLOR SCHEME
        'hot-pink': '#FF1493',
        'soft-pink': '#FFB6C1',
        'cherry-red': '#DC143C',
        'coral-pink': '#FF6B9D',
        'blush': '#FFC0CB',
        'deep-rose': '#C71585',
        'cream': '#FFF5F5',
        'peach': '#FFDAB9',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'],
        'script': ['Dancing Script', 'cursive'],
        'cute': ['Patrick Hand', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInDown': 'fadeInDown 1s ease-out',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 20, 147, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-pink': '0 0 30px rgba(255, 20, 147, 0.6)',
        'glow-red': '0 0 30px rgba(220, 20, 60, 0.6)',
        'polaroid': '0 10px 30px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px 0 rgba(255, 182, 193, 0.37)',
      },
    },
  },
  plugins: [],
}