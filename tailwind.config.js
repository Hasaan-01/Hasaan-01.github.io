/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./project-*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { 
        display: ['PT Sans', 'sans-serif'], 
        body: ['DM Sans', 'sans-serif'] 
      },
      colors: { 
        accent: '#FF6B2B', 
        'accent-light': '#FF8F5C' 
      }
    }
  },
  plugins: [],
  // Safelist classes that are dynamically constructed
  safelist: [
    'dark',
    'from-orange-50', 'to-orange-50',
    'dark:from-orange-900/20', 'dark:to-orange-900/10',
    'from-amber-50', 'to-amber-50',
    'dark:from-amber-900/20', 'dark:to-amber-900/10',
    'from-blue-50', 'to-blue-100',
    'dark:from-blue-900/20', 'dark:to-blue-800/10',
    'from-green-50', 'to-green-100',
    'dark:from-green-900/20', 'dark:to-green-800/10',
    'from-purple-50', 'to-purple-50',
    'dark:from-purple-900/20', 'dark:to-purple-900/10',
    'from-rose-50', 'to-pink-50',
    'dark:from-rose-900/20', 'dark:to-pink-900/10',
    'from-violet-50', 'to-cyan-50',
    'dark:from-violet-900/20', 'dark:to-cyan-900/10',
    'from-zinc-50', 'to-zinc-100',
    'dark:from-zinc-900', 'dark:to-zinc-800',
    'bg-orange-50', 'dark:bg-orange-500/10', 'text-orange-700', 'dark:text-orange-400',
    'bg-blue-50', 'dark:bg-blue-900/20', 'text-blue-600', 'dark:text-blue-400',
    'bg-green-50', 'dark:bg-green-900/20', 'text-green-600', 'dark:text-green-400',
    'bg-purple-50', 'dark:bg-purple-900/20', 'text-purple-700', 'dark:text-purple-400',
    'bg-amber-50', 'dark:bg-amber-900/20',
    'border-orange-200', 'dark:border-orange-800',
    'border-blue-200', 'dark:border-blue-800',
    'border-green-200', 'dark:border-green-800',
    'border-purple-200', 'dark:border-purple-800',
    'border-amber-200', 'dark:border-amber-800',
    'border-rose-200', 'dark:border-rose-800',
    'border-violet-200', 'dark:border-violet-800',
    'border-indigo-200', 'dark:border-indigo-800',
  ]
}
