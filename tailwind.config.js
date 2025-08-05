/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(55 65 81)',
            '--tw-prose-headings': 'rgb(17 24 39)',
            '--tw-prose-links': 'rgb(59 130 246)',
            '--tw-prose-bold': 'rgb(17 24 39)',
            '--tw-prose-counters': 'rgb(107 114 128)',
            '--tw-prose-bullets': 'rgb(209 213 219)',
            '--tw-prose-hr': 'rgb(229 231 235)',
            '--tw-prose-quotes': 'rgb(17 24 39)',
            '--tw-prose-quote-borders': 'rgb(229 231 235)',
            '--tw-prose-captions': 'rgb(107 114 128)',
            '--tw-prose-code': 'rgb(17 24 39)',
            '--tw-prose-pre-code': 'rgb(229 231 235)',
            '--tw-prose-pre-bg': 'rgb(31 41 55)',
            '--tw-prose-th-borders': 'rgb(209 213 219)',
            '--tw-prose-td-borders': 'rgb(229 231 235)',
            '--tw-prose-invert-body': 'rgb(209 213 219)',
            '--tw-prose-invert-headings': 'rgb(255 255 255)',
            '--tw-prose-invert-lead': 'rgb(156 163 175)',
            '--tw-prose-invert-links': 'rgb(147 197 253)',
            '--tw-prose-invert-bold': 'rgb(255 255 255)',
            '--tw-prose-invert-counters': 'rgb(156 163 175)',
            '--tw-prose-invert-bullets': 'rgb(75 85 99)',
            '--tw-prose-invert-hr': 'rgb(55 65 81)',
            '--tw-prose-invert-quotes': 'rgb(243 244 246)',
            '--tw-prose-invert-quote-borders': 'rgb(55 65 81)',
            '--tw-prose-invert-captions': 'rgb(156 163 175)',
            '--tw-prose-invert-code': 'rgb(255 255 255)',
            '--tw-prose-invert-pre-code': 'rgb(209 213 219)',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 0.5)',
            '--tw-prose-invert-th-borders': 'rgb(75 85 99)',
            '--tw-prose-invert-td-borders': 'rgb(55 65 81)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};