module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent:'transparent',
      current:'currentColor',
      red: '#D25B43',
      darkBlue: '#0E3854',
      blue:'#067EED',
      gray:'#E6EFF5',
      white:'#FFFFFF',
    },
    textColor:{
      blue:'#092538',
      transparent:'transparent',
      current:'currentColor',
      red: '#D25B43',
      gray:'#E6EFF5',
      white:'#FFFFFF',
    },
    fontFamily:{
      racing: 'Racing Sans One'
    },
    boxShadow: {
      custom1: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
