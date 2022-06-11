// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify} from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#05788d',
    'primary-darken-1': '#3700B3',
    secondary: '#179fa5',
    'secondary-darken-1': '#018786',
    error: '#b71c1c',
    info: '#05788d',
    success: '#05788d',
    warning: '#FB8C00',
  }
}

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      }
    }
  }
  )


  /*
   {
    theme: {
        themes: {
          light: {
            primary: '#05788d',
            secondary: '#179fa5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      }
}
  */