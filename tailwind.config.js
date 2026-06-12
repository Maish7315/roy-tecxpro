/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#05070d',
        graphite: '#0b1018',
        steel: '#9aa7b8',
        mist: '#e6edf8',
        cyan: '#44d7ff',
        cobalt: '#3b82f6',
        violet: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 60px rgba(68, 215, 255, 0.22)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'radial-cyan': 'radial-gradient(circle at 30% 20%, rgba(68, 215, 255, 0.22), transparent 36%)',
      },
    },
  },
  plugins: [],
};
