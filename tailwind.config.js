module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
