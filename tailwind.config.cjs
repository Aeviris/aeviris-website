module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aevi: {
          50: '#f3f0ff',
          100: '#e9ddff',
          500: '#7c5cff'
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg,#6b21a8 0%,#0ea5e9 50%,#ec4899 100%)'
      }
    }
  },
  plugins: []
}
