const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        title: ['Montserrat', 'sans-serif'],
      },  
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}