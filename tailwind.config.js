const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      height: (theme) => ({
        'lgFull': '92vh',
        'smFull' :'98.5vh'
      }),
    },
  },
  plugins: [],
}
