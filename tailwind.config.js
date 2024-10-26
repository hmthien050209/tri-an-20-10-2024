/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto Flex Variable, sans-serif',
        serif: 'Noto Serif Variable, serif',
        mono: 'JetBrains Mono Variable, monospace',
        display: 'Lobster, serif',
      },
    },
  },
  plugins: [],
}
