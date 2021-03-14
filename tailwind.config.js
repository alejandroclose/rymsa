module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/images/rymsa_hero.png')"
      })
    },
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
      titillium: 'Titillium Web',
      racing: 'Racing Sans One'
    },
    boxShadow: {
      custom1: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      customBtn: '2px 7px 24px 1px rgba(0, 0, 0, 0.45)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    height: {
      6:'1.5rem',
      8:'2rem',
      10:'2.5rem',
      12:'3rem',
      16:'4rem',
      80:'20rem',
      96:'24rem',
      100:'30rem',
      '1/5':'20%',
      '5/6':'83.3333%',
      full:'100%',
      screen: '100vh',
      hero: '271px',
      heroLg: '728px',
    },
    listStyleType: {
      none:'none',
      square:'square',
      roman: 'upper-roman'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
