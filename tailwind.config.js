/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    'grid-cols-12',
    'grid-cols-11',
    'grid-cols-10',
    'grid-cols-9',
    'grid-cols-8',
    'grid-cols-7',
    'grid-cols-6',
    'grid-cols-5',
    'grid-cols-4',
    'grid-cols-3',
    'grid-cols-2',
    'grid-cols-1',
  ],
}
