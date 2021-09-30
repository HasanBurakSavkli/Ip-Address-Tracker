module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/ip-address-tracker-master/images/pattern-bg.png')",
      },
      colors:{
        'dark-grey':'hsl(0, 0%, 59%)',
        'very-dark-grey':'hsl(0, 0%, 17%)',
      },
      fontFamily: {
        'Rubik': ['Rubik','sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
