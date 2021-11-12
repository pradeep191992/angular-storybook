module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '200': '200px',
      '300': '300px',
      '400': '400px',
      '500': '500px',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
