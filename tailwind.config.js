/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0014',
        card: '#1a0030',
        cyan: '#00f0ff',
        neon: '#b347ea',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(0, 240, 255, 0.22)',
        violet: '0 0 70px rgba(179, 71, 234, 0.28)',
      },
      backgroundImage: {
        'radial-cyber': 'radial-gradient(circle at 20% 10%, rgba(0, 240, 255, 0.18), transparent 28%), radial-gradient(circle at 80% 0%, rgba(179, 71, 234, 0.22), transparent 32%)',
      },
    },
  },
  plugins: [],
};
