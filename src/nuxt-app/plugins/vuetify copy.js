import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '~/assets/sass/main.scss'

export default defineNuxtPlugin((nuxtApp) => {
  const adminTheme = {
    colors: {
      primary: '#ff9800',
      secondary: '#A1887F',
      error: '#b71c1c',
    }
  }

  const userTheme = {
    colors: {
      primary: '#2196F3',
      secondary: '#b0bec5',
      error: '#b71c1c',
    }
  }
  const vuetify = createVuetify({
    components,
    directives,
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 1,
      darken: 2,
    },
    theme: {
      defaultTheme: 'userTheme',
      themes: {
        userTheme,
        adminTheme
      },
    }
  })
  nuxtApp.vueApp.use(vuetify)
})