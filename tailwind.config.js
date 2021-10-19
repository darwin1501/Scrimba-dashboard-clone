const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '320px',
      'xs2': '476px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        blue:{
            paleBlue: '#e7f1ea'
        },
        indigo:{
          scrimbaIndigo: '#5035ff',
          scrimbaSkyblue: '#ddebf8'
        },
        orange:{
          paleOrange: '#fffad1',
          orangePumpkin: '#ffc06d'
        },
        pink:{
          palePink: '#fbe5f3',
          ligthPink: '#e7a4d0'
        },
        red:{
          tomatoe: '#ff8080'
        }
      },
      spacing:{
        // 45%
          '9/20': '45%',
          '6/20': '30%'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor:['active']
    },
  },
  plugins: [
    // plugin(function({addUtilities}){
    //   const newUtilities = {
    //     '.rotate-5':{
    //             transform:'rotate(5)'
    //           }
    //   }
    //   addUtilities(newUtilities)
    // })
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rotate-sm':{
          '--tw-rotate': '0.5deg',
          'transform': 'var(--tw-transform)'
        }
      }

      addUtilities(newUtilities,{
        variants: ['hover']
      })
    })
  ],
}
