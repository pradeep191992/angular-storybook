module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
       },
      boxShadow: {
        // Custom
        glass: '0px 6px 40px rgba(0, 0, 0, 0.2)',
        glassM: '0px 6px 16px rgba(0, 0, 0, 0.25)',
        modal: '0px 4px 24px rgba(0, 0, 0, 0.08)',
        btn: '8px 8px 24px rgba(0, 0, 0, 0.15)',
        btnHvr: '4px 4px 12px rgba(0, 0, 0, 0.15)',
        inputT: '0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);',
        recom: '4px 4px 24px rgba(0, 0, 0, 0.1)',
        inset: 'inset 4px 4px 8px rgba(0, 0, 0, 0.25)',
        btnS: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      },
      backgroundColor: {
        glass: {
          95: 'rgba(255, 255, 255, 0.95)',
          85: 'rgba(255, 255, 255, 0.85)',
          75: 'rgba(255, 255, 255, 0.75)',
          65: 'rgba(255, 255, 255, 0.65)',
          60: 'rgba(255, 255, 255, 0.60)',
          55: 'rgba(255, 255, 255, 0.55)',
          45: 'rgba(255, 255, 255, 0.45)',
          40: 'rgba(255, 255, 255, 0.4)',
          15: 'rgba(255, 255, 255, 0.15)',
        }
      },
      backgroundImage: {
        'linear-glass85': 'linear-gradient(89.52deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.255) 100%)',
        'linear-glass15': 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.0375) 100%)',
        'signin-modal': 'linear-gradient(85.1deg, rgba(179, 179, 179, 0.15) 0%, rgba(255, 255, 255, 0.0375) 100%)',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
