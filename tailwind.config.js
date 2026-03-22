/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'chart-2': 'oklch(0.6 0.118 184.704 / <alpha-value>)',
        'chart-3': 'oklch(0.55 0.1 180 / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
