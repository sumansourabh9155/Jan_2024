/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Light-theme semantic palette.
       *
       * The site was built dark with hardcoded values (bg-black, text-white,
       * bg-white/5, #d6f928). These names replace them so the theme lives in
       * one place rather than across ~2,000 class occurrences.
       *
       * Note the ink scale inverts the old one: on dark, gray-300 was the
       * prominent tone and gray-600 the faintest. On light it is the reverse,
       * so a straight class swap would have flipped every emphasis on the site.
       */
      colors: {
        // Page and panel surfaces, lightest to most recessed.
        surface: '#FFFFFF',
        'surface-2': '#F7F7F4',
        'surface-3': '#EFEFEA',

        // Text, most prominent to faintest. The two quietest tones are darker
        // than a direct swap from the dark theme would suggest: #9AA3AE read
        // fine as dim text on black but only hits 2.6:1 on white.
        ink: '#101418',
        'ink-soft': '#283039',
        'ink-muted': '#4B5563',
        'ink-faint': '#5F6670',
        'ink-ghost': '#666D77',

        // Hairlines.
        line: 'rgba(0,0,0,0.10)',
        'line-soft': 'rgba(0,0,0,0.06)',
        'line-strong': 'rgba(0,0,0,0.16)',

        // Brand lime. Legible as a FILL with dark text on it, but only ~1.4:1
        // against white — so anything that was text or a border in the dark
        // theme uses accent-ink (~5.5:1 on white, passes AA).
        accent: '#D6F928',
        'accent-ink': '#5E7000',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

